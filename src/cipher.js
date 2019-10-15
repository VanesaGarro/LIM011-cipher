let i;

window.cipher = {
    encode: (num, datos, ) => {
        let datoscifrados = '';
        for (i = 0; i < datos.length; i++) {
            let convertAscii = datos.charCodeAt(i);

            if (convertAscii >= 97 && convertAscii <= 122) { // para minusculas
                datoscifrados += String.fromCharCode((convertAscii - 97 + num) % 26 + 97);

            } else if (convertAscii >= 65 && convertAscii <= 90) { //para mayusculas
                datoscifrados += String.fromCharCode((convertAscii - 65 + num) % 26 + 65);

            } else if (convertAscii >= 48 && convertAscii <= 57) { // para nmeros del 0 al 9
                datoscifrados += String.fromCharCode((convertAscii - 48 + num) % 10 + 48);
            } else {
                datoscifrados += datos.charAt(i);
            }

            //document.getElementById('datoscifrados').value = datoscifrados;
        }
        return datoscifrados;
    },
    decode: (num, datosd) => {
        let datosdecifrados = '';
        for (i = 0; i < datosd.length; i++) {
            let convertAscii = datosd.charCodeAt(i);

            if (convertAscii >= 97 && convertAscii <= 122) { // para minusculas
                datosdecifrados += String.fromCharCode((convertAscii - 122 - num) % 26 + 122);

            } else if (convertAscii >= 65 && convertAscii <= 90) { //para mayusculas
                datosdecifrados += String.fromCharCode((convertAscii - 90 - num) % 26 + 90);

            } else if (convertAscii >= 48 && convertAscii <= 57) { // para nmeros del 0 al 9
                datosdecifrados += String.fromCharCode((convertAscii - 57 - num) % 10 + 57);
            } else {
                datosdecifrados += datosd.charAt(i);
            }

          
        }
        return datosdecifrados;
    },
}
