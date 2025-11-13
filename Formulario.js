  
    const scriptURL = "https://script.google.com/macros/s/AKfycby0TbR4Y59QmaTfJsDesbMOFtRTMNxFhaePoGFwFUs9B24h2mgMTtgOmNrN0uWz488MEQ/exec";

    const form = document.getElementById("pqrsForm");
    const mensaje = document.getElementById("mensaje");

    form.addEventListener("submit", e => {
      e.preventDefault();

      const data = Object.fromEntries(new FormData(form).entries());

      fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(data)
      })
      .then(res => {
        if (res.ok) {
          mensaje.textContent = "✅ Tu PQRS fue enviada correctamente.";
          mensaje.style.color = "green";
          form.reset();
           setTimeout(() => {
        window.location.href = "https://sackery.github.io/Delicious-food-jr.github.io/";
      }, 2000);
        } else {
          mensaje.textContent = "❌ Error al enviar la PQRS.";
          mensaje.style.color = "red";
        }
      })
      .catch(() => {
        mensaje.textContent = "❌ No se pudo conectar al servidor.";
        mensaje.style.color = "red";
      });
    });

