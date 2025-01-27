const paletteButton = document.querySelector('#palette-button');
const closePaletteButton = document.querySelector('#close-palette-button');
const themePaletteSidebar = document.querySelector('.theme-palette-sidebar');

paletteButton.addEventListener('click', () => {
    themePaletteSidebar.style.display = (themePaletteSidebar.style.display == 'block' ? 'none': 'block');
});

closePaletteButton.addEventListener('click', () => {
    themePaletteSidebar.style.display = 'none';
});

const colorDivs = document.querySelectorAll('.theme-palette-sidebar-color-grid div');

colorDivs.forEach((div) => {
    div.addEventListener('click', () => {
        const color = window.getComputedStyle(div).backgroundColor;
        document.documentElement.style.setProperty('--primary-color', color);
    });
});

const backgroundColorDivs = document.querySelectorAll('.background-options-container div');
backgroundColorDivs.forEach((div) => {
    div.addEventListener('click', () => {
        const color = window.getComputedStyle(div).backgroundColor;
        document.documentElement.style.setProperty('--background-color', color);
    });
});

const tabsContainer = document.querySelector(".form-questionnaire-area");

tabsContainer.addEventListener("click", (event) => {
if (event.target.classList.contains("add-option")) {
    const parentTab = event.target.closest(".form-questionnaire-tab");
    const optionContainers = parentTab.querySelectorAll(".form-questionnaire-option-container");
    const addOptionContainer = event.target.closest(".form-questionnaire-option-container");
    const lastOption = addOptionContainer.previousElementSibling;
    if (!lastOption) return; 
    const clonedOption = lastOption.cloneNode(true);
    const inputField = clonedOption.querySelector(".form-questionnaire-option-bar");
    const newOptionIndex = optionContainers.length; 
    inputField.value = `Option ${newOptionIndex}`;
    if (clonedOption.firstElementChild && clonedOption.firstElementChild.tagName.toLowerCase() === "p") {
        clonedOption.firstElementChild.textContent = `${newOptionIndex}.`;
    }
    if (addOptionContainer.firstElementChild && addOptionContainer.firstElementChild.tagName.toLowerCase() === "p") {
        addOptionContainer.firstElementChild.textContent = `${newOptionIndex + 1}.`;
    }
    parentTab.insertBefore(clonedOption, addOptionContainer);
}
else if(event.target.classList.contains('remove-option')){
    const parentTab = event.target.closest(".form-questionnaire-tab");
    let optionContainers = parentTab.querySelectorAll(".form-questionnaire-option-container");
    if(optionContainers.length < 3) return;
    const optionContainerTBD = event.target.closest(".form-questionnaire-option-container");
    optionContainerTBD.remove();
    optionContainers = parentTab.querySelectorAll(".form-questionnaire-option-container");
    if (optionContainers[0].firstElementChild && optionContainers[0].firstElementChild.tagName.toLowerCase() === "p") {
        for(let x = 0; x < optionContainers.length; x++){
            optionContainers[x].firstElementChild.textContent = `${x+1}.`;
        }
    }
}
});