 document.getElementById('formulario').addEventListener('submit', function(e){
        e.preventDefault();
      
      //obtenemos valores 
      const nombre = document.getElementById('nombre').value.trim();
      const email = document.getElementById('email').value.trim();
      

      //limpia mensajes anteriores
      document.getElementById('errorNombre').textContent="";
      document.getElementById('errorEmail').textContent="";
      document.getElementById('mensajeFinal').textContent="";

      let valido = true;
      //Validaciones
      if(nombre.length< 3) {
        document.getElementById('errorNombre').textContent= 'Nos encantaría saber un poquito más de tu nombre.';
        valido = false;
      }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)) {
          document.getElementById('errorEmail').textContent = 'Revisa tu email, parece que algún duendecillo se comió un carácter.';
          valido = false;
        }
       

      // Si todo es válido
      if (valido) {
        document.getElementById('mensajeFinal').textContent = `¡Gracias por tu mensaje! ${nombre}!`;
        e.target.submit(); 
      }

      });