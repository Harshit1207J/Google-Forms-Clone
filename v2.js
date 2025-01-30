const templateMap = {
    "short-answer": `
      <p class="form-questionnaire-short-answer-bar">Short answer text</p>
    `,
    "long-answer": `
      <p class="form-questionnaire-long-answer-bar">Long answer text</p>
    `,
    "multiple-choice": `
      <div class="form-questionnaire-option-container">
        <span class="material-symbols-outlined">radio_button_unchecked</span>
        <input class="form-questionnaire-option-bar" value="Option 1">
        <span class="material-symbols-outlined">image</span>
        <span class="material-symbols-outlined remove-option">close</span>
      </div>
      <div class="form-questionnaire-option-container">
        <span class="material-symbols-outlined">radio_button_unchecked</span>
        <p style="flex-grow: 1; margin: 0; font-size: 0.9rem">
          <span style="color: gray; cursor: pointer;" class="add-option">Add option</span>
          or <span style="color: rgb(26, 115, 232); cursor: pointer;">add "Other"</span>
        </p>
      </div>
    `,
    "checkboxes": `
        <div class = 'form-questionnaire-option-container'>
            <span class="material-symbols-outlined">check_box_outline_blank</span>
            <input class = 'form-questionnaire-option-bar' value="Option 1">
            <span class="material-symbols-outlined">image</span>
            <span class="material-symbols-outlined remove-option">close</span>
        </div>
        <div class = 'form-questionnaire-option-container'>
            <span class="material-symbols-outlined">check_box_outline_blank</span>
            <p style="flex-grow: 1; margin: 0; font-size: 0.9rem">
                <span style="color: gray; cursor: pointer;" class="add-option">Add option</span>
                or <span style="color: rgb(26, 115, 232); cursor: pointer;">add "Other"</span>
            </p>
        </div>
    `,
    "dropdown": `
        <div class = 'form-questionnaire-option-container'>
            <p style="font-size: 0.9rem; margin: 0;">1.</p>
            <input class = 'form-questionnaire-option-bar' value="Option 1">
            <span class="material-symbols-outlined">image</span>
            <span class="material-symbols-outlined remove-option">close</span>
        </div>
        <div class = 'form-questionnaire-option-container'>
            <p style="font-size: 0.9rem; margin: 0;">2.</p>
            <p style="flex-grow: 1; margin: 0; font-size: 0.9rem">
                <span style="color: gray; cursor: pointer;" class="add-option">Add option</span>
                or <span style="color: rgb(26, 115, 232); cursor: pointer;">add "Other"</span>
                </p>
        </div>
    `,
    "add-file": `
        <div class = 'form-questionnaire-add-file-container'>
            <div class = 'form-questionnaire-add-file-inner-container'>
                <p style="font-size: 0.9rem;">Allow only specific file types</p>
            </div>
            <div class = 'form-questionnaire-add-file-inner-container'>
                <p style="font-size: 0.9rem;">Maximum number of files</p>
                <select class="form-questionnaire-add-file-dropdown">
                    <option value='1'>1</option>
                    <option value='5'>5</option>
                    <option value='10'>10</option>
                    </select>
            </div>
            <div class = 'form-questionnaire-add-file-inner-container'>
                <p style="font-size: 0.9rem;">Maximum file size</p>
                <select class="form-questionnaire-add-file-dropdown">
                    <option value='1'>1 MB</option>
                    <option value='1'>10 MB</option>
                    <option value='1'>100 MB</option>
                    <option value='1'>1 GB</option>
                    <option value='1'>10 GB</option>
                </select>
            </div>
        </div>
        <div class = 'form-questionnaire-add-file-container-2'>
            <p style="margin: 0; font-size: 0.75rem; color: gray;">This form can accept upto 1 GB of files. <span style="color:rgb(26, 115, 232);">Change</span></p>
            <div style="display: flex; align-items: center; gap: 0.625rem; color: rgb(26, 115, 232); font-size: 0.8rem;">
                <span class = 'material-symbols-outlined' style="color: rgb(26, 115, 232);">Add_to_drive</span> 
                <span>View folder</span>
            </div>  
        </div>
    `,
    "linear": `
        <div class = 'form-questionnaire-linear-scale-container'>
            <div class = 'form-questionnaire-linear-scale-inner-container-1'>
                <select class="form-questionnaire-linear-scale-dropdown">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
                <p style="font-size: 0.9rem;">to</p>
                <select class="form-questionnaire-linear-scale-dropdown">
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
            </div>
            <div class = 'form-questionnaire-linear-scale-inner-container-2'>
                <p class = 'form-questionnaire-linear-scale-inner-label'>1</p>
                <input type = 'text' class = 'form-questionnaire-linear-scale-inner-textbox' placeholder="Label (optional)">
            </div>
            <div class = 'form-questionnaire-linear-scale-inner-container-2'>
                <p class = 'form-questionnaire-linear-scale-inner-label'>5</p>
                <input type = 'text' class = 'form-questionnaire-linear-scale-inner-textbox' placeholder="Label (optional)">
            </div>
        </div>
    `,
    "rating": `
        <div class = 'form-questionnaire-linear-scale-container'>
            <div class = 'form-questionnaire-linear-scale-inner-container-1'>
                <select class="form-questionnaire-rating-dropdown">
                    <option>5</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
                <select class="form-questionnaire-rating-dropdown">
                    <option>⭐</option>
                    <option>❤️</option>
                </select>
            </div>
        </div>
        <div class = 'form-questionnaire-rating-container-2'>
            <div>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
            </div>
            <div>
                <span class="material-symbols-outlined">star</span>
                <span class="material-symbols-outlined">star</span>
                <span class="material-symbols-outlined">star</span>
                <span class="material-symbols-outlined">star</span>
                <span class="material-symbols-outlined">star</span>
            </div>
        </div>
    `,
    "multiple-choice-grid": `
        <div class = 'form-questionnaire-multiple-choice-grid'>
            <div class = 'form-questionnaire-multiple-choice-grid-inner'>
                <p style="font-weight: 900; margin:0;">Rows</p>
                <div class = 'form-questionnaire-option-container'>
                    <p style="font-size: 0.9rem; margin: 0;">1.</p>
                    <input class = 'form-questionnaire-option-bar' value="Row 1">
                    <span class="material-symbols-outlined remove-row">close</span>
                </div>
                <div class = 'form-questionnaire-option-container'>
                    <p style="font-size: 0.9rem; margin: 0;">2.</p>
                    <p style="flex-grow: 1; margin: 0; font-size: 0.9rem">
                        <span style="color: gray; cursor: pointer;" class="add-row">Add row</span>
                    </p>
                </div>
            </div>
            <div class = 'form-questionnaire-multiple-choice-grid-inner'>
                <p style="font-weight: 900; margin:0;">Column</p>
                <div class = 'form-questionnaire-option-container'>
                    <span class="material-symbols-outlined">radio_button_unchecked</span>
                    <input class = 'form-questionnaire-option-bar' value="Column 1">
                    <span class="material-symbols-outlined remove-row">close</span>
                </div>
                <div class = 'form-questionnaire-option-container'>
                    <span class="material-symbols-outlined">radio_button_unchecked</span>
                    <p style="flex-grow: 1; margin: 0; font-size: 0.9rem">
                        <span style="color: gray; cursor: pointer;" class="add-row">Add column</span>
                    </p>
                </div>
            </div>
        </div>
    `,
    "checkbox-grid": `
        <div class = 'form-questionnaire-multiple-choice-grid'>
            <div class = 'form-questionnaire-multiple-choice-grid-inner'>
                <p style="font-weight: 900; margin:0;">Rows</p>
                <div class = 'form-questionnaire-option-container'>
                    <p style="font-size: 0.9rem; margin: 0;">1.</p>
                    <input class = 'form-questionnaire-option-bar' value="Row 1">
                    <span class="material-symbols-outlined remove-row">close</span>
                </div>
                <div class = 'form-questionnaire-option-container'>
                    <p style="font-size: 0.9rem; margin: 0;">2.</p>
                    <p style="flex-grow: 1; margin: 0; font-size: 0.9rem">
                        <span style="color: gray; cursor: pointer;" class="add-row">Add row</span>
                    </p>
                </div>
            </div>
            <div class = 'form-questionnaire-multiple-choice-grid-inner'>
                <p style="font-weight: 900; margin:0;">Column</p>
                <div class = 'form-questionnaire-option-container'>
                    <span class="material-symbols-outlined">check_box_outline_blank</span>
                    <input class = 'form-questionnaire-option-bar' value="Column 1">
                    <span class="material-symbols-outlined remove-row">close</span>
                </div>
                <div class = 'form-questionnaire-option-container'>
                    <span class="material-symbols-outlined">check_box_outline_blank</span>
                    <p style="flex-grow: 1; margin: 0; font-size: 0.9rem">
                        <span style="color: gray; cursor: pointer;" class="add-row">Add Column</span>
                    </p>
                </div>
            </div>
        </div>
    `,
    "date": `
        <div class = 'form-questionnaire-date-container'>
            <p class = 'form-questionnaire-date-bar'>Month, Day, Year</p>
            <span class="material-symbols-outlined">event</span>
        </div>
    `,
    "time": `
        <div class = 'form-questionnaire-date-container'>
            <p class = 'form-questionnaire-date-bar'>Time</p>
            <span class="material-symbols-outlined">schedule</span>
        </div>
    `,
};

const templateOptionsMap = {
    'multiple-choice': `
      <div class="form-questionnaire-option-container">
        <span class="material-symbols-outlined">radio_button_unchecked</span>
        <input class="form-questionnaire-option-bar" value="Option 1">
        <span class="material-symbols-outlined">image</span>
        <span class="material-symbols-outlined remove-option">close</span>
      </div>
    `,
    'checkboxes': `
        <div class = 'form-questionnaire-option-container'>
            <span class="material-symbols-outlined">check_box_outline_blank</span>
            <input class = 'form-questionnaire-option-bar' value="Option 1">
            <span class="material-symbols-outlined">image</span>
            <span class="material-symbols-outlined remove-option">close</span>
        </div>
    `,
    'dropdown': `
        <div class = 'form-questionnaire-option-container'>
            <p style="font-size: 0.9rem; margin: 0;">1.</p>
            <input class = 'form-questionnaire-option-bar' value="Option 1">
            <span class="material-symbols-outlined">image</span>
            <span class="material-symbols-outlined remove-option">close</span>
        </div>
    `

}
const tabHeader = `
    <div class = 'form-questionnaire-tab-header'>
		<div class = 'form-questionnaire-question-bar-container'>
			<input class="form-questionnaire-question-bar" placeholder="Question">
			<div class = 'form-questionnaire-question-bar-formating-options'>
				<span class = 'material-symbols-outlined'>format_bold</span>
				<span class = 'material-symbols-outlined'>format_italic</span>
				<span class = 'material-symbols-outlined'>format_underlined</span>
				<span class = 'material-symbols-outlined'>link</span>
				<span class = 'material-symbols-outlined'>format_clear</span>
			</div>
		</div>
        <span class="material-symbols-outlined">image</span>
        <select class="form-questionnaire-type-dropdown">
            <option value = 'short-answer'>Short Answer</option>
            <option value = 'long-answer'>Paragraph</option>
            <option value = 'multiple-choice'>Multiple Choice</option>
            <option value = 'checkboxes'>CheckBoxes</option>
            <option value = 'dropdown'>Dropdown</option>
            <option value = 'add-file'>File Upload</option>
            <option value = 'linear'>Linear Scale</option>
            <option value = 'rating'>Rating</option>
            <option value = 'multiple-choice-grid'>Multiple Choice Grid</option>
            <option value = 'checkbox-grid'>Checkbox Grid</option>
            <option value = 'date'>Date</option>
            <option value = 'time'>Time</option>
        </select>
    </div>
`;
const tabFooter = `
    <div class="form-questionnaire-tab-footer">
        <span class="material-symbols-outlined duplicate-tab">content_copy</span>
        <span class="material-symbols-outlined delete-tab">delete</span>
        <span class="material-symbols-outlined add-tab">add</span>
        <hr style="height:1.5rem; width: 0.1rem; margin: 0;">
        <span class="material-symbols-outlined">more_vert</span>
    </div>
`;
{
	const navbar = document.querySelector('.navbar');
	const themePaletteSidebar = document.querySelector('.theme-palette-sidebar');
	const navbarHeight = navbar.offsetHeight;
	themePaletteSidebar.style.height = `calc(100% - ${navbarHeight}px)`;
}

document.addEventListener("change", (event) => {
    if (event.target.matches(".form-questionnaire-type-dropdown")) {
        const parentTab = event.target.closest(".form-questionnaire-tab");
        const contentArea = parentTab.querySelector(".form-questionnaire-tab-content-area");
        const selectedValue = event.target.value;
        contentArea.innerHTML = templateMap[selectedValue] || "";
    }
});

{
	const paletteButton = document.querySelector('#palette-button');
	const closePaletteButton = document.querySelector('#close-palette-button');
	const themePaletteSidebar = document.querySelector('.theme-palette-sidebar');
	
	paletteButton.addEventListener('click', () => {
		themePaletteSidebar.style.display = (themePaletteSidebar.style.display == 'block' ? 'none': 'block');
	});
	
	closePaletteButton.addEventListener('click', () => {
		themePaletteSidebar.style.display = 'none';
	});
}


{
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
}

const tabsContainer = document.querySelector(".form-questionnaire-area");

tabsContainer.addEventListener("click", (event) => {
    console.log(event);
    if (event.target.classList.contains("add-option")) {
        const parentTab = event.target.closest(".form-questionnaire-tab-content-area");
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
        const parentTab = event.target.closest(".form-questionnaire-tab-content-area");
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
    else if (event.target.classList.contains("add-row")) {
        const parentTab = event.target.closest(".form-questionnaire-multiple-choice-grid-inner");
        const optionContainers = parentTab.querySelectorAll(".form-questionnaire-option-container");
		const heading = parentTab.firstElementChild.innerHTML;
        const addOptionContainer = event.target.closest(".form-questionnaire-option-container");
        const lastOption = addOptionContainer.previousElementSibling;
        if (!lastOption) return; 
        const clonedOption = lastOption.cloneNode(true);
        const inputField = clonedOption.querySelector(".form-questionnaire-option-bar");
        const newOptionIndex = optionContainers.length; 
        inputField.value = heading === 'Rows' ? `Row ${newOptionIndex}` : `Column ${newOptionIndex}`;
        if (clonedOption.firstElementChild && clonedOption.firstElementChild.tagName.toLowerCase() === "p") {
            clonedOption.firstElementChild.textContent = `${newOptionIndex}.`;
        }
        if (addOptionContainer.firstElementChild && addOptionContainer.firstElementChild.tagName.toLowerCase() === "p") {
            addOptionContainer.firstElementChild.textContent = `${newOptionIndex + 1}.`;
        }
        parentTab.insertBefore(clonedOption, addOptionContainer);
    }
    else if(event.target.classList.contains('remove-row')){
        const parentTab = event.target.closest(".form-questionnaire-multiple-choice-grid-inner");
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
    else if (event.target.classList.contains('add-tab')) {
        const givenTab = event.target.closest(".form-questionnaire-tab");
        const parentTab = document.querySelector('.form-questionnaire-area');
        const newTab = document.createElement('div');
        newTab.classList.add('form-questionnaire-tab');
        newTab.innerHTML = `
            ${tabHeader}
            <div class="form-questionnaire-tab-content-area">
                ${templateMap['short-answer']}
            </div>
			<hr style="height:0.1rem; width: 100%; border-color: rgb(218,220,224);">
            ${tabFooter}
        `;
        parentTab.insertBefore(newTab, givenTab.nextSibling);
    }
    else if (event.target.classList.contains('delete-tab')) {
        const givenTab = event.target.closest(".form-questionnaire-tab");
        const parentTab = document.querySelector('.form-questionnaire-area');
        console.log(parentTab.children);
        if(parentTab.children.length === 2) return;
        givenTab.remove();
    }
    else if (event.target.classList.contains('duplicate-tab')) {
        const givenTab = event.target.closest(".form-questionnaire-tab");
        const parentTab = document.querySelector('.form-questionnaire-area');
        const clonedTab = givenTab.cloneNode(true);
        parentTab.insertBefore(clonedTab, givenTab.nextSibling);
    }
});