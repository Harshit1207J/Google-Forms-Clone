export const templateMap = {
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
                    <span class="material-symbols-outlined">close</span>
                </div>
                <div class = 'form-questionnaire-option-container'>
                    <p style="font-size: 0.9rem; margin: 0;">2.</p>
                    <input class = 'form-questionnaire-option-bar' value="Row 2">
                    <span class="material-symbols-outlined">close</span>
                </div>
                <div class = 'form-questionnaire-option-container'>
                    <p style="font-size: 0.9rem; margin: 0;">3.</p>
                    <input class = 'form-questionnaire-option-bar' value="Row 3">
                    <span class="material-symbols-outlined">close</span>
                </div>
                <div class = 'form-questionnaire-option-container'>
                    <p style="font-size: 0.9rem; margin: 0;">4.</p>
                    <input class = 'form-questionnaire-option-bar' value="Add row" style="color: gray;">
                </div>
            </div>
            <div class = 'form-questionnaire-multiple-choice-grid-inner'>
                <p style="font-weight: 900; margin:0;">Column</p>
                <div class = 'form-questionnaire-option-container'>
                    <span class="material-symbols-outlined">radio_button_unchecked</span>
                    <input class = 'form-questionnaire-option-bar' value="Column 1">
                    <span class="material-symbols-outlined">close</span>
                </div>
                <div class = 'form-questionnaire-option-container'>
                    <span class="material-symbols-outlined">radio_button_unchecked</span>
                    <input class = 'form-questionnaire-option-bar' value="Column 2">
                    <span class="material-symbols-outlined">close</span>
                </div>
                <div class = 'form-questionnaire-option-container'>
                    <span class="material-symbols-outlined">radio_button_unchecked</span>
                    <input class = 'form-questionnaire-option-bar' value="Column 3">
                    <span class="material-symbols-outlined">close</span>
                </div>
                <div class = 'form-questionnaire-option-container'>
                    <span class="material-symbols-outlined">radio_button_unchecked</span>
                    <input class = 'form-questionnaire-option-bar' value="Add columns" style="color: gray;">
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
                    <span class="material-symbols-outlined">close</span>
                </div>
                <div class = 'form-questionnaire-option-container'>
                    <p style="font-size: 0.9rem; margin: 0;">2.</p>
                    <input class = 'form-questionnaire-option-bar' value="Row 2">
                    <span class="material-symbols-outlined">close</span>
                </div>
                <div class = 'form-questionnaire-option-container'>
                    <p style="font-size: 0.9rem; margin: 0;">3.</p>
                    <input class = 'form-questionnaire-option-bar' value="Row 3">
                    <span class="material-symbols-outlined">close</span>
                </div>
                <div class = 'form-questionnaire-option-container'>
                    <p style="font-size: 0.9rem; margin: 0;">4.</p>
                    <input class = 'form-questionnaire-option-bar' value="Add row" style="color: gray;">
                </div>
            </div>
            <div class = 'form-questionnaire-multiple-choice-grid-inner'>
                <p style="font-weight: 900; margin:0;">Column</p>
                <div class = 'form-questionnaire-option-container'>
                    <span class="material-symbols-outlined">check_box_outline_blank</span>
                    <input class = 'form-questionnaire-option-bar' value="Column 1">
                    <span class="material-symbols-outlined">close</span>
                </div>
                <div class = 'form-questionnaire-option-container'>
                    <span class="material-symbols-outlined">check_box_outline_blank</span>
                    <input class = 'form-questionnaire-option-bar' value="Column 2">
                    <span class="material-symbols-outlined">close</span>
                </div>
                <div class = 'form-questionnaire-option-container'>
                    <span class="material-symbols-outlined">check_box_outline_blank</span>
                    <input class = 'form-questionnaire-option-bar' value="Column 3">
                    <span class="material-symbols-outlined">close</span>
                </div>
                <div class = 'form-questionnaire-option-container'>
                    <span class="material-symbols-outlined">check_box_outline_blank</span>
                    <input class = 'form-questionnaire-option-bar' value="Add column" style="color:gray">
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
