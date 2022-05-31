var campoTexto = document.querySelector('#texto-decodificador');
var botaoCriptografa = document.querySelector('.bt-criptografar');
var botaoDescriptografa = document.querySelector('.bt-descriptografar')
var botaoCopiar = document.querySelector('.bt-copiar')




botaoCriptografa.addEventListener('click', function(){
    var textoDigitado = campoTexto.value;
    var textoCriptografado = criptografa(textoDigitado);
    var areaTexto = document.querySelector('.input-decodificador')
    areaTexto.textContent = textoCriptografado

})

botaoDescriptografa.addEventListener('click',function(){
    var textoDigitado = campoTexto.value;
    var textoDescriptografado = decriptografa(textoDigitado);
    var areaTexto = document.querySelector('.input-decodificador')
    areaTexto.textContent = textoDescriptografado


})

botaoCopiar.addEventListener('click',function(){
    copiarTexto();
    
})


document.getElementById('bt-copiar').addEventListener('click', clipboardCopy);

async function clipboardCopy() {
  let text = document.querySelector(".input-decodificador").value;
  await navigator.clipboard.writeText(text);
}


function copiarTexto() {
    var areaTexto = document.querySelector('.input-decodificador')
    let textoCopiado = areaTexto.textContent
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

function criptografa(texto){
    var resultado = texto.replace(/e/gi, 'enter') 
    resultado = resultado.replace(/i/gi, 'imes') 
    resultado = resultado.replace(/a/gi, 'ai') 
    resultado = resultado.replace(/o/gi, 'ober')
    resultado = resultado.replace(/u/gi, 'ufat')
   
    return resultado
}

function decriptografa(texto){
    var resultado = texto.replace(/enter/gi, 'e') 
    resultado = resultado.replace(/imes/gi, 'i') 
    resultado = resultado.replace(/ai/gi, 'a') 
    resultado = resultado.replace(/ober/gi, 'o')
    resultado = resultado.replace(/ufat/gi, 'u')
   
    return resultado

}
