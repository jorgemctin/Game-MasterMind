
// INITIALIZE
const initializeLevel = () => {
    const selectedLevel = localStorage.getItem("selectLevel") || 'beginner';
    selectRadioButton(selectedLevel);
    saveLevelInStorage(selectedLevel);
    calculateAndSaveQuantityColors(selectedLevel); 
    saveDifficultLevel(selectedLevel);
};

// BRING THE LEVEL SELECTED
const selectRadioButton = (level) => {
    const radioButton = document.getElementById(`flexRadio${level.charAt(0).toUpperCase()}${level.slice(1)}`);
    radioButton && (radioButton.checked = true);
};

// SAVING THE LEVEL IN LOCAL STORAGE
const selectLevel = (level) => {
    saveLevelInStorage(level);
    calculateAndSaveQuantityColors(level); 
    saveDifficultLevel(level);
};

// NAME
const saveLevelInStorage = (level) => {
    localStorage.setItem("selectLevel", level);
};

// COLORS
const calculateAndSaveQuantityColors = (level) => {
    const quantityColorsMap = {
        'beginner': 4,
        'intermediate': 5,
        'advanced': 6
    };
    const quantityColors = quantityColorsMap[level] || 4;
    localStorage.setItem("selectLevelColors", quantityColors); 
};

// DIFFICULTY LEVEL
const saveDifficultLevel = (level) => {
    const difficultLevelMap = {
        'beginner': 10,
        'intermediate': 8,
        'advanced': 6
    };
    const difficultLevel = difficultLevelMap[level] || 10;
    localStorage.setItem("selectLevelDifficult", difficultLevel); 
};

window.onload = initializeLevel;