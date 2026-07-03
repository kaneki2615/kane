
// 1. CAMBIO DE TEMA: MODO HUMANO / GHOUL

const btnHumano = document.getElementById('btnModoHumano');
const btnGhoul = document.getElementById('btnModoGhoul');

if (btnHumano && btnGhoul) {
    btnHumano.addEventListener('click', () => {
        // Estilo Anteiku / Humano: Tonos café, pacíficos y limpios
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "#2b2621";
        document.body.style.color = "#f4f1ea";
        alert("Modo Humano Activado: Bienvenido a la Cafetería Anteiku ☕");
    });

    btnGhoul.addEventListener('click', () => {
        // Estilo Ghoul: Fondo oscuro y luces rojas agresivas
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "#080000";
        document.body.style.color = "#ff3333";
        alert("🚨 ADVERTENCIA: Células Rc en aumento. Modo Ghoul Desatado.");
    });
}


// 2. EFECTOS DE SONIDO EN BOTONES

const btnQuinque = document.getElementById('btnQuinque');
const btnKakuja = document.getElementById('btnKakuja');
const sndQuinque = document.getElementById('sndQuinque');
const sndKakuja = document.getElementById('sndKakuja');

if (btnQuinque && sndQuinque) {
    btnQuinque.addEventListener('click', () => {
        sndQuinque.currentTime = 0; // Reinicia el audio si se presiona rápido
        sndQuinque.play();
    });
}
if (btnKakuja && sndKakuja) {
    btnKakuja.addEventListener('click', () => {
        sndKakuja.currentTime = 0;
        sndKakuja.play();
    });
}


// 3. CAPTURA E INTERCEPCIÓN DEL FORMULARIO

const formulario = document.querySelector('form');

if (formulario) {
    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault(); // Evita que la página se recargue por defecto
        
        const inputNombre = document.getElementById('nombre').value;
        const inputCorreo = document.getElementById('correo').value;

        if (inputNombre.trim() === "" || inputCorreo.trim() === "") {
            alert("❌ Error: Todos los campos del registro son obligatorios para la CCG.");
        } else {
            // Muestra un mensaje personalizado usando los datos del input
            alert(`📝 Registro Exitoso.\nInvestigador asignado: ${inputNombre}.\nSe ha enviado una credencial encriptada a ${inputCorreo}.`);
            formulario.reset(); // Limpia los campos del formulario
        }
    });
}

const btnEscaneo = document.getElementById('btnEscaneo');
const resultadoEscaneo = document.getElementById('resultadoEscaneo');

if (btnEscaneo && resultadoEscaneo) {
    btnEscaneo.addEventListener('click', () => {
        resultadoEscaneo.innerHTML = "🔄 Analizando ADN y flujo sanguíneo...";
        resultadoEscaneo.className = "mt-3 fw-bold text-warning animate-pulse";
        btnEscaneo.disabled = true;

        // Simulamos un retraso de 2 segundos para dar el efecto de que está "pensando"
        setTimeout(() => {
            // Genera un número aleatorio entre 200 y 2500
            const celulasRc = Math.floor(Math.random() * (2500 - 200 + 1)) + 200;
            
            if (celulasRc > 1000) {
                resultadoEscaneo.innerHTML = `❌ ALERTA: ${celulasRc} Células Rc detectadas. ¡Sujeto identificado como GHOUL!`;
                resultadoEscaneo.className = "mt-3 fw-bold text-danger fs-4";
            } else {
                resultadoEscaneo.innerHTML = `✅ RECONOCIDO: ${celulasRc} Células Rc. Sujeto Humano / Investigador Autorizado.`;
                resultadoEscaneo.className = "mt-3 fw-bold text-success fs-5";
            }
            btnEscaneo.disabled = false;
        }, 2000);
    });
}

function actualizarRelojTokio() {
    const contenedorReloj = document.getElementById('relojTokio');
    if (!contenedorReloj) return;

    const opciones = {
        timeZone: 'Asia/Tokyo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };

    // Obtiene la hora formateada específicamente en la zona horaria de Japón
    const horaTokio = new Date().toLocaleTimeString('es-ES', opciones);
    contenedorReloj.textContent = horaTokio;
}

// Actualiza el reloj cada 1 segundo automáticamente
setInterval(actualizarRelojTokio, 1000);
actualizarRelojTokio(); // Ejecución inicial inmediata

const inputBuscar = document.getElementById('buscarPersonaje');
// Busca todas las filas corporales dentro de la tabla ghoul
const filasTabla = document.querySelectorAll('.tabla-ghoul tbody tr');

if (inputBuscar && filasTabla.length > 0) {
    inputBuscar.addEventListener('input', (e) => {
        const textoBusqueda = e.target.value.toLowerCase();

        filasTabla.forEach(fila => {
            // Obtiene el texto de la primera celda (columna Personaje)
            const nombrePersonaje = fila.cells[0].textContent.toLowerCase();
            
            // Si el nombre contiene lo que escribió el usuario, se muestra; si no, se oculta
            if (nombrePersonaje.includes(textoBusqueda)) {
                fila.style.display = "";
            } else {
                fila.style.display = "none";
            }
        });
    });
}

function registrarEvento(mensaje) {
    const consola = document.getElementById('consolaCcg');
    if (!consola) return;

    const ahora = new Date();
    const tiempo = ahora.toLocaleTimeString('es-ES', { hour12: false });
    
    // Crea una nueva línea de log
    const nuevaLinea = document.createElement('div');
    nuevaLinea.innerHTML = `<span class="text-muted">[${tiempo}]</span> <span class="text-danger">CCG_SYS:</span> ${mensaje}`;
    
    consola.appendChild(nuevaLinea);
    // Hace scroll automático hacia abajo para ver el último mensaje
    consola.parentElement.scrollTop = consola.parentElement.scrollHeight;
}

// Ejemplo de uso
window.addEventListener('DOMContentLoaded', () => {
    registrarEvento("Terminal operativa. Monitoreando fluctuaciones de células Rc...");
});

const enlaceCorreo = document.querySelector('a[href^="mailto:"]');

if (enlaceCorreo) {
    enlaceCorreo.addEventListener('click', (evento) => {
        // Detiene la apertura inmediata del cliente de correos
        evento.preventDefault(); 
        
        const confirmar = confirm("🚨 ¿Desea levantar un canal de comunicación seguro y enviar este informe a la central de la UNPHU?");
        
        if (confirmar) {
            registrarEvento("Abriendo canal de comunicación externo mediante protocolo mailto...");
            // Ejecuta la redirección nativa al correo si el usuario presiona "Aceptar"
            window.location.href = enlaceCorreo.href; 
        } else {
            registrarEvento("Transmisión de correo cancelada por el operador.");
        }
    });
}


// MODO CLARO / MODO OSCURO

const btnToggleTema = document.getElementById('btnToggleTema');

if (btnToggleTema) {
    btnToggleTema.addEventListener('click', () => {
        // Alterna la clase '.modo-claro' en la etiqueta <body>
        document.body.classList.toggle('modo-claro');
        
        // Comprueba si la página se quedó en modo claro para actualizar el botón
        if (document.body.classList.contains('modo-claro')) {
            btnToggleTema.textContent = '🌙 Modo Oscuro';
            btnToggleTema.className = 'btn btn-outline-dark btn-sm fw-bold';
            
            // Opcional: Si tienes la función registrarEvento del paso anterior
            if (typeof registrarEvento === "function") {
                registrarEvento("Interfaz cambiada a: Modo Archivo de Oficina (Claro).");
            }
        } else {
            btnToggleTema.textContent = '☀️ Modo Claro';
            btnToggleTema.className = 'btn btn-outline-light btn-sm fw-bold';
            
            if (typeof registrarEvento === "function") {
                registrarEvento("Interfaz cambiada a: Modo Táctico Nocturno (Oscuro).");
            }
        }
    });
}