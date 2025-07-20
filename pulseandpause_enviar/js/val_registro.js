
    // Alternar formularios
    function mostrarFormulario(formulario) {
      const tabs = document.querySelectorAll('.tab-button');
      const forms = document.querySelectorAll('form');

      tabs.forEach(tab => tab.classList.remove('active'));
      forms.forEach(form => form.classList.remove('active'));

      if (formulario === 'registro') {
        document.getElementById('registro').classList.add('active');
        tabs[0].classList.add('active');
      } else {
        document.getElementById('login').classList.add('active');
        tabs[1].classList.add('active');
      }
    }

    // Validación de Registro
    function validarRegistro(e) {
      e.preventDefault();
      const nombre = document.getElementById('nombre').value.trim();
      const email = document.getElementById('emailRegistro').value.trim();
      const password = document.getElementById('passwordRegistro').value;
      const confirmPassword = document.getElementById('confirmPasswordRegistro').value;

      // Limpiar errores
      document.getElementById('errorNombre').textContent = '';
      document.getElementById('errorEmailRegistro').textContent = '';
      document.getElementById('errorPasswordRegistro').textContent = '';
      document.getElementById('errorConfirmRegistro').textContent = '';
      document.getElementById('mensajeRegistro').textContent = '';

      let valido = true;

      if (nombre.length < 3) {
        document.getElementById('errorNombre').textContent = 'Nos encantaría saber un porquito más de tu nombre.';
        valido = false;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        document.getElementById('errorEmailRegistro').textContent = 'Revisa tu email, parece que algún duendecillo se comió un caracter.';
        valido = false;
      }

      if (password.length < 6) {
        document.getElementById('errorPasswordRegistro').textContent = 'Contraseña mínimo 6 caracteres.';
        valido = false;
      }

      if (password !== confirmPassword) {
        document.getElementById('errorConfirmRegistro').textContent = 'Las contraseñas no coinciden.';
        valido = false;
      }

      if (valido) {
        document.getElementById('mensajeRegistro').textContent = `¡Registro exitoso, bienvenido/a ${nombre}!`;
        document.getElementById('registro').reset();
      }
    }

    // Validación de Login
    function validarLogin(e) {
      e.preventDefault();
      const email = document.getElementById('emailLogin').value.trim();
      const password = document.getElementById('passwordLogin').value;

      document.getElementById('errorEmailLogin').textContent = '';
      document.getElementById('errorPasswordLogin').textContent = '';
      document.getElementById('mensajeLogin').textContent = '';

      let valido = true;

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        document.getElementById('errorEmailLogin').textContent = 'Email no válido.';
        valido = false;
      }

      if (password.length < 6) {
        document.getElementById('errorPasswordLogin').textContent = 'Contraseña inválida.';
        valido = false;
      }

      if (valido) {
        document.getElementById('mensajeLogin').textContent = `¡Bienvenido/a de nuevo!`;
        document.getElementById('login').reset();
      }
    }

