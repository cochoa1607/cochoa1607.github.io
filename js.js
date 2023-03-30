const shareData = {
    title: "Carlos Ochoa",
    text: "Conoce a Carlos, Diseñador y Desarrollador Web",
    url: "https://www.google.com",
  };
  
  const btn = document.querySelector("button");
  const resultPara = document.querySelector(".result");
  
  // Share must be triggered by "user activation"
  btn.addEventListener("click", async () => {
    try {
      await navigator.share(shareData);
      resultPara.textContent = "Contacto compartido exitosamente!";
    } catch (err) {
      resultPara.textContent = ``;
    }
  });
  