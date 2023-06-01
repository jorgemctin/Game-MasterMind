
//DEPENDS OF THE LEVEL SELECTED, SHOW 4,5 or 6 INPUT COLORs
const selectingColors = () => {
  const container = document.querySelector('.bordercolor1');
  container.innerHTML = ''; 

  const level = localStorage.getItem("selectLevel");

  let amountColors;
  if (level === 'beginner') {
    amountColors = 4;
  } else if (level === 'intermediate') {
    amountColors = 5;
  } else if (level === 'advanced') {
    amountColors = 6;
  } else {
    amountColors = 4;
  }

  for (let i = 0; i < amountColors; i++) {
    const colorpickerDiv = document.createElement('div');
    colorpickerDiv.classList.add('colorpicker');

    const input = document.createElement('input');
    input.type = 'color';
    input.id = i;

    colorpickerDiv.appendChild(input);
    container.appendChild(colorpickerDiv);
  }
};
selectingColors();

//SENDING COLORS TO THE LOCAL STORAGE

const storeColors = () => {
  const selectedColors = [];
  colorInputs.forEach(input => {
    selectedColors.push(input.value);
  });
  localStorage.setItem("selectedColors", JSON.stringify(selectedColors));
};

const colorInputs = document.querySelectorAll("input[type='color']");

colorInputs.forEach(input => {
  input.addEventListener("change", (event) => {
    console.log("input", event.target.value, event.target.id);
    storeColors();
  });
});