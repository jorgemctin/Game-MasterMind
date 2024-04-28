
const colorPickers = document.querySelectorAll('.colorPicker');
//DEPENDS OF THE LEVEL SELECTED, SHOW 4,5 or 6 INPUT COLORs
const selectingColors = () => {
  const amountColorsString = localStorage.getItem("selectLevelColors");
  const amountColors = parseInt(amountColorsString);

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
  colorPickers.forEach(input => {
    if (input.style.display !== 'none') {
      selectedColors.push(input.querySelector('input').value);
    }
  });
  localStorage.setItem("selectedColors", JSON.stringify(selectedColors));
};

const colorInputs = document.querySelectorAll("input[type='color']");
colorInputs.forEach(input => {
  input.addEventListener("change", (e) => {
    storeColors();
  });
});