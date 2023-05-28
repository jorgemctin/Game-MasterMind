//SAVING THE LEVEN PICKED IN LOCAL STORAGE:
let selectedLevelValue = 'beginner';

const selectLevel = (level) => {
    console.log("selectLevel", level);
    selectedLevelValue = level;
}

const goToColorPicker = () => {
    localStorage.setItem("selectLevel", selectedLevelValue);
};