//declarando data

let data0 =new Date()
document.write(data0)
document.write("<br></br>")

//pega somente o dia

let data1 =new Date().getDate()
document.write(data1)
document.write("<br></br>")

//pega o dia com o 0 na frente

let data2 =new Date().getDate()
document.write(('0'+data2).slice(0-2));
document.write("<br></br>")

//pega o mês
let data4 =new Date().getMonth()+1
document.write(data4)
document.write("<br></br>")

//pega o ano
let data5 =new Date().getFullYear();
document.write(data5)
document.write("<br></br>")

//pega o dia da semana
let data6 =new Date()
let diasSemana=['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
document.write(diasSemana[data6.getDay()])