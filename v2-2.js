const sample_data = {
    'form-name': 'new sample form',
    'form-title': 'test 123',
    'form-description': 'sample form description',
    'form-tabs': [
        {
            'type': 'short-answer',
            'question': 'question 1'
        },
        {
            'type': 'multiple-choice',
            'question': 'question 2',
            'options': ['option 1', 'option 2', 'option 3'] 
        },
        {
            'type': 'dropdown',
            'question': 'question 3',
            'options': ['option 1', 'option 2', 'option 3'] 
        },
    ]
}

localStorage.setItem("formData", JSON.stringify(sample_data));

if(localStorage.getItem('formData')){
    const data = JSON.parse(localStorage.getItem("formData"));
    document.querySelector('.form-name-textbox').value = data['form-name'];
    document.querySelector('.form-questionnaire-title-bar').value = data['form-title'];
    document.querySelector('.form-questionnaire-description-bar').value = data['form-description'];
    const form = document.querySelector('.form-questionnaire-area');
    form.removeChild(form.lastElementChild);
    for(let tab of data['form-tabs']){
        const newTab = document.createElement('div');
        newTab.classList.add('form-questionnaire-tab');
        newTab.innerHTML = `
            ${tabHeader}
            <div class="form-questionnaire-tab-content-area">
                ${templateMap[tab.type]}
            </div>
            <hr style="height:0.1rem; width: 100%; border-color: rgb(218,220,224);">
            ${tabFooter}
        `;
        newTab.querySelector('.form-questionnaire-question-bar').value = tab.question;
        newTab.firstElementChild.lastElementChild.value = tab.type;
        const contentArea = newTab.querySelector('.form-questionnaire-tab-content-area');
        if (tab.type === 'multiple-choice' || tab.type === 'checkboxes' || tab.type === 'dropdown' ) {
            for(let option of tab.options){
                const newOption = document.createElement('div');
                newOption.classList.add('form-questionnaire-option-container');
                newOption.innerHTML = templateOptionsMap[tab.type];
                newOption.children[1].value = option;
                contentArea.insertBefore(newOption , contentArea.lastElementChild);
            }
        }
        if(tab.type === 'dropdown'){
            let count = 1;
            for(let option of contentArea.children){
                option.firstElementChild.innerHTML = `${count++}.`
            }
        }
        form.appendChild(newTab);
    }
}