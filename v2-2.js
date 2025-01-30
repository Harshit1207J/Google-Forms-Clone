const sample_data = {
    'form-name': 'new sample form',
    'form-title': 'test 123',
    'form-description': 'sample form description',
    'form-tabs': [
        {
            'type': 'short-answer',
            'question': 'question 1'
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
    console.log(form.childElementCount)
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
        if (tab.type === 'multiple-choice' || tab.type === 'checkboxes') {
            const optionContainers = newTab.querySelectorAll('.form-questionnaire-option-container');
            const baseOption = optionContainers[0];
            const addOptionContainer = optionContainers[1];
            baseOption.querySelector('.form-questionnaire-option-bar').value = tab.options[0];
            for (let i = 1; i < tab.options.length; i++) {
                const clonedOption = baseOption.cloneNode(true);
                clonedOption.querySelector('.form-questionnaire-option-bar').value = tab.options[i];
                addOptionContainer.parentNode.insertBefore(clonedOption, addOptionContainer);
            }
        }
        form.appendChild(newTab);
    }
}