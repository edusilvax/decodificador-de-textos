var campoTexto = document.querySelector('.input-text');
var botaoCriptografa = document.querySelector('.btn-cript');
var botaoDescriptografa = document.querySelector('.btn-decript')
var botaoCopiar = document.querySelector('.btn-copy')


botaoCriptografa.addEventListener('click', function(){
    var textoDigitado = campoTexto.value;
    var textoCriptografado = criptografa(textoDigitado);
    var areaTexto = document.querySelector('.input-result')
    areaTexto.textContent = textoCriptografado

})

botaoDescriptografa.addEventListener('click',function(){
    var textoDigitado = campoTexto.value;
    var textoDescriptografado = decriptografa(textoDigitado);
    var areaTexto = document.querySelector('.input-result')
    areaTexto.textContent = textoDescriptografado


})

botaoCopiar.addEventListener('click', async function () {
    let text = document.querySelector(".input-result").value;
    await navigator.clipboard.writeText(text);
  });



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
