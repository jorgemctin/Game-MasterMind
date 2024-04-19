
//DEPENDS OF THE LEVEL SELECTED, SHOW 4,5 or 6 INPUT COLORs
const selectingColors = () => {
  const amountColorsString = localStorage.getItem("selectLevelColors");
  const amountColors = parseInt(amountColorsString);

  const colorPickers = document.querySelectorAll('.colorPicker');

  colorPickers.forEach((picker, i) => {
    if (i < amountColors) {
      picker.style.display = 'block'; 
    } else {
      picker.style.display = 'none'; 
    }
  });
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