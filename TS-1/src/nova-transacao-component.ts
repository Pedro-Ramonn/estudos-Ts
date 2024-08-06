const transacaoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;
transacaoFormulario.addEventListener("submit", function(event) {
    event.preventDefault();
    if (!transacaoFormulario.checkValidity()) {
        alert("Por favor, preencha todos os campos da transação!");
        return;
    }

    const inputTipoTransacao = transacaoFormulario.querySelector("#tipoTransacao") as HTMLSelectElement;
    const inputValor = transacaoFormulario.querySelector("#valor") as HTMLInputElement;
    const inputData = transacaoFormulario.querySelector("#data") as HTMLInputElement;

    let tipoTransacao: TipoTransacao = inputTipoTransacao.value as TipoTransacao;
    let valor: number = inputValor.valueAsNumber;
    let data: Date = new Date(inputData.value);

    if (tipoTransacao == TipoTransacao.DEPOSITO) {
        saldoCorrente += valor;
    } else if (tipoTransacao == TipoTransacao.TRANSFERENCIA || tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO) {
        saldoCorrente -= valor;
    } else {
        alert("Tipo de Transação é inválido!");
        return;
    }

    elementoSaldo.textContent= saldoCorrente.toString();

    const novaTransacao: Transacao = {
        tipoTransacao : tipoTransacao,
        valor: valor,
        data: data
    };

    console.log(novaTransacao);
    transacaoFormulario.reset();
});