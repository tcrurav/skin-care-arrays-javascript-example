let skinCareTreatments = [
  {
    name: "Hidratación facial",
    instructions: "Adecuado para piel sensible",
    url: "https://solecentrodeimagen.com/wp-content/uploads/2015/08/tipos-de-tratamientos-faciales-400x300.jpg"
  }, {
    name: "Exfoliación",
    instructions: "Para cada tipo de piel es importante tener en cuenta las indicaciones",
    url: "https://media.revistavanityfair.es/photos/60e82b96fccef075722a2993/master/w_1600%2Cc_limit/249606.jpg"
  }, {
    name: "Protección solar",
    instructions: "Todos necesitamos protección solar, y especialmente los que tienen piel sensible",
    url: "https://www.foreo.com/es/blog/wp-content/uploads/2021/07/FOREO_factor-FPS-adecuado_cab-scaled-1.jpg"
  }
];

function showSkinCareTreatments() {
  const SKIN_CARE_TREATMENTS = document.getElementById("skin-care-treatments");

  let allSkinCareTreatments = "";
  for (let i = 0; i < skinCareTreatments.length; i++) {
    allSkinCareTreatments += `
      <div>
        <h2>${skinCareTreatments[i].name}</h2>
        <p>${skinCareTreatments[i].instructions}</p>
        <img src="${skinCareTreatments[i].url}" alt="${skinCareTreatments[i].name}" width="300" style="height: auto; margin-bottom: 20px;"> 
      </div>
    `;
  }

  SKIN_CARE_TREATMENTS.innerHTML = allSkinCareTreatments;
}

function listenForLinkSubmit() {
  const SKIN_CARE_TREATMENTS_FORM = document.getElementById("skin-care-treatments-form");
  SKIN_CARE_TREATMENTS_FORM.addEventListener("submit", insertTreatmentInArrayAndShowArray);
}

function insertTreatmentInArray(e) {
  e.preventDefault();
  const NAME = e.target.name.value.trim(); // Evita espacios adicionales al principio o al final.
  const INSTRUCTIONS = e.target.instructions.value.trim(); // Evita espacios adicionales al principio o al final.
  const URL = e.target.url.value.trim(); // Evita espacios adicionales al principio o al final.

  // Verifica que ningún campo esté vacío.
  if (NAME && INSTRUCTIONS && URL) {
    skinCareTreatments.push({
      name: NAME,
      instructions: INSTRUCTIONS,
      url: URL
    });
    // Limpia los campos del formulario.
    e.target.reset();
  } else {
    alert("Por favor, completa todos los campos antes de enviar.");
  }
}

function insertTreatmentInArrayAndShowArray(e) {
  insertTreatmentInArray(e);
  showSkinCareTreatments();
}

showSkinCareTreatments();
listenForLinkSubmit();