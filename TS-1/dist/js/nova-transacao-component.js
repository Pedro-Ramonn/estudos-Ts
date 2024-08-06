const transacaoFormulario = document.querySelector(".block-nova-transacao form");
transacaoFormulario.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!transacaoFormulario.checkValidity()) {
        alert("Por favor, preencha todos os campos da transação!");
        return;
    }
    const inputTipoTransacao = transacaoFormulario.querySelector("#tipoTransacao");
    const inputValor = transacaoFormulario.querySelector("#valor");
    const inputData = transacaoFormulario.querySelector("#data");
    let tipoTransacao = inputTipoTransacao.value;
    let valor = inputValor.valueAsNumber;
    let data = new Date(inputData.value);
    if (tipoTransacao == TipoTransacao.DEPOSITO) {
        saldoCorrente += valor;
    }
    else if (tipoTransacao == TipoTransacao.TRANSFERENCIA || tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO) {
        saldoCorrente -= valor;
    }
    else {
        alert("Tipo de Transação é inválido!");
        return;
    }
    elementoSaldo.textContent = saldoCorrente.toString();
    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    };
    console.log(novaTransacao);
    transacaoFormulario.reset();
});
