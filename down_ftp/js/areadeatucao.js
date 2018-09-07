$(document).ready(function () {
    $("#ActionPessoaJuridica").click(function () {
        $("#conteudoPessoaJuridica").slideDown(800);
        $("#conteudoPessoaFisica").slideUp(0);
    });
    $("#ActionPessoaFisica").click(function () {
        $("#conteudoPessoaFisica").slideDown(600);
        $("#conteudoPessoaJuridica").slideUp(0);
    });
});

$(document).ready(function () {
    $("#ActionMissao").click(function () {
        $("#conteudoMissao").slideDown(1000);
        $("#conteudoVisao").slideUp(100);
        $("#conteudoValores").slideUp(100);
    });
    $("#ActionVisao").click(function () {
        $("#conteudoVisao").slideDown(1000);
        $("#conteudoMissao").slideUp(100);
        $("#conteudoValores").slideUp(100);
    });
    $("#ActionValores").click(function () {
        $("#conteudoValores").slideDown(2000);
        $("#conteudoVisao").slideUp(600);
        $("#conteudoMissao").slideUp(600);
    });
});
