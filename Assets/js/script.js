function idade(ano_aniversario, mes_aniversario, dia_aniversario) {
    var d = new Date,
        ano_atual = d.getFullYear(),
        mes_atual = d.getMonth() + 1,
        dia_atual = d.getDate(),

        ano_aniversario = +ano_aniversario,
        mes_aniversario = +mes_aniversario,
        dia_aniversario = +dia_aniversario,

        quantos_anos = ano_atual - ano_aniversario;

    if (mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario) {
        quantos_anos--;
    }
    return quantos_anos < 0 ? 0 : quantos_anos;
}
var novo = new Date, 
    ano = novo.getFullYear()

$('#idade').append(idade(2001, 08, 24))
$('#anoAtual').append(ano)

var quantFac = Math.round((4/44)*100)
$('#porcent-numb').append(quantFac+"%")

$('.progress-bar').css("width", quantFac+'%')