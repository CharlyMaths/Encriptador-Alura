const inputTexto = document.querySelector(".input-text");
const mensaje = document.querySelector(".input-text-area");

function btnencriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
} 

function encriptar(StringParaEncriptar){
    let matrizCodigoEncriptar = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    StringParaEncriptar = StringParaEncriptar.toLowerCase();
    for(let i=0; i<matrizCodigoEncriptar.length;i++){
        if(StringParaEncriptar.includes(matrizCodigoEncriptar[i][0])){
                StringParaEncriptar = StringParaEncriptar.replaceAll(matrizCodigoEncriptar[i][0],matrizCodigoEncriptar[i][1]);
        }
    }
    return StringParaEncriptar;
}

function btndesencriptar(){
    const textoDesEncriptado = desencriptar(inputTexto.value);
    mensaje.value = textoDesEncriptado;
} 

function desencriptar(StringParaDesEncriptar){
    let matrizCodigoDesEncriptar = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
    StringParaDesEncriptar = StringParaDesEncriptar.toLowerCase();
    for(let i=0; i<matrizCodigoDesEncriptar.length;i++){
        if(StringParaDesEncriptar.includes(matrizCodigoDesEncriptar[i][0])){
                StringParaDesEncriptar = StringParaDesEncriptar.replaceAll(matrizCodigoDesEncriptar[i][0],matrizCodigoDesEncriptar[i][1]);
        }
    }
    return StringParaDesEncriptar;
}

function btCopiar(){
    
    mensaje.select();
    document.execCommand("copy");
}

