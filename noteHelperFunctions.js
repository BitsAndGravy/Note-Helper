window.onload = function() {
    setDefaults();
    createThemeOptions();
    createStateSelectOptions();
    checkState();
    document.getElementById('themeSelect').value = localStorage.getItem('theme');

    // Check setting for appeal type
        let app = document.getElementById('appealType');
        let appSetting = localStorage.getItem('showAppealType');
        let appDiv = document.getElementById('appealTypeDiv');

        if (appSetting == false) {
            localStorage.setItem(appSetting, 'yes');
        }

        if (appSetting == 'yes') {
            appDiv.classList.add("showContent");
            app.tabIndex = 0;
        } else {
            appDiv.classList.add("hideContent");
            app.tabIndex = -1;
        }

        
    // Check setting for always show quantity
        let showQuantity = localStorage.getItem('alwaysShowQuantity');
        let showQuantityDiv = document.getElementById('quantityDiv');

        if (showQuantity == 'yes') {
            showQuantityDiv.classList.add("showContent");
        } else {
            showQuantityDiv.classList.add("hideContent");
            document.getElementById('quantity').tabIndex = -1;
            document.getElementById('falseQL').tabIndex = -1;
        }
            

    // Chech setting for show theme select
        let showTheme = localStorage.getItem('showTheme');
        let themeElement = document.getElementById('themeSelect');

        if(showTheme == 'no') {
            themeElement.classList.add("hideEnd");
        }

    // Check setting for show timer
        let showTimer  = localStorage.getItem('showTimer');
        let showTimerSpan = document.getElementById('time');

        if (showTimer == 'yes') {
            showTimerSpan.classList.add('showTimer');
        } else {
            showTimerSpan.classList.add('hideContent');
        }
    
    // Check setting for show preview
        let showPreview = localStorage.getItem('showPreview');
        let showPreviewDiv = document.getElementById('showPreviewDiv');

        if (showPreview == 'yes') {
            showPreviewDiv.classList.add("showContent");
        } else {
            showPreviewDiv.classList.add("hideContent");
        }
        

    /* || Word prediction, see predictWords() in functions */
    
    // Start typing in the drug name field for suggestion to appear. Hit Enter or Tab to accept drug name suggestion.
    const drugInput = document.getElementById('drug');
    const drugSuggestion = document.getElementById('drugSuggestion');

    drugInput.addEventListener('keydown', function(e) {
        
        // Check if the pressed key is "Enter"
        if (((e.key === 'Enter') || (e.key === 'Tab')) && drugSuggestion.innerText != '') {
            drugInput.value = drugSuggestion.innerText;
            drugSuggestion.innerText = '';
            getQuantity();
        }
    });

    // Start typing in diagnosis field for suggestion to appear. Hit Enter or Tab to accept drug name suggestion.
    const diagnosisInput = document.getElementById('diagnosis');
    const diagnosisSuggestion = document.getElementById('diagnosisSuggestion');

    diagnosisInput.addEventListener('keydown', function(e) {
        
        // Check if the pressed key is "Enter"
        if (((e.key === 'Enter') || (e.key === 'Tab')) && diagnosisSuggestion.innerText != '') {
            diagnosisInput.value = diagnosisSuggestion.innerText;
            diagnosisSuggestion.innerText = '';     
            preSaveFunctions();       
        }
    });

    /* Error message animation listener */
    const alertAnimation = document.getElementById('alert');

    alertAnimation.addEventListener('animationend', () => {
        alertAnimation.classList.remove('shake');
    });
};

function createThemeOptions () {

    for(theme in themeBook) {
            let name = themeBook[theme].name;
            let title = themeBook[theme].title;
            let group = themeBook[theme].group;
            let optGroup = themeBook[theme].optGroup;

            let option = document.createElement('option');
            option.value = name;
            option.innerHTML = title;

            let destination = document.getElementById(optGroup);
            destination.appendChild(option);
    };
}