function calcularEdadHumana() {
    var edadPerro = document.getElementById('edadPerro').value;
    var edadHumana = edadPerro * 7; // Aproximadamente, 1 año de perro equivale a 7 años humanos.
    
    // Mensajes graciosos con iconos dependiendo de la edad del perro.
    var mensaje;
    mensaje = edadPerro == 0 ? "🐶 ¡Tu perro es solo un cachorro, disfruta sus travesuras!" :
              edadPerro > 0 && edadPerro <= 2 ? "🧒 Tu perro está en su adolescencia canina. ¡Mucho entusiasmo y energía!" :
              edadPerro > 2 && edadPerro <= 7 ? `🏃‍♂️ Tu perro tiene ${edadHumana} años humanos. ¡Está en la flor de la vida!` :
              edadPerro > 7 && edadPerro <= 10 ? `👴 Tu perro tiene ${edadHumana} años humanos. ¡Es un perro sabio y experimentado!` :
              `🦴 🤑​ Tu perro tiene ${edadHumana} años humanos. ¡Es un venerable anciano canino!`;

    document.getElementById('resultado').innerText = mensaje; 
}


