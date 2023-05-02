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
