window.onload = function() {
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
            appDiv.classList.add("showInput");
            app.tabIndex = 0;
        } else {
            appDiv.classList.add("hideInput");
            app.tabIndex = -1;
        }

    /* commenting out in favor of only allowing option for appealType checkbox. 
    These options will be hidden until appealType is checked, no reason to have settings for them.

    // Check setting for INternal appeal
        let appealInternal = localStorage.getItem('appealInternal');
        let appealInternalDiv = document.getElementById('appealInternalDiv');

        if (appealInternal == 'yes') {
            appealInternalDiv.classList.add("showInput");
        } else {
            appealInternalDiv.classList.add("hideInput");
        }

    // Check setting for EXternal appeal
        let appealExternal = localStorage.getItem('appealExternal');
        let appealExternalDiv = document.getElementById('appealExternalDiv');

        if (appealExternal == 'yes') {
            appealExternalDiv.classList.add("showInput");
        } else {
            appealExternalDiv.classList.add("hideInput");
        }
            */

    // Check setting for always show quantity
        let showQuantity = localStorage.getItem('alwaysShowQuantity');
        let showQuantityDiv = document.getElementById('quantityDiv');

        if (showQuantity == 'yes') {
            showQuantityDiv.classList.add("showInput");
        } else {
            showQuantityDiv.classList.add("hideInput");
            document.getElementById('quantity').tabIndex = -1;
            document.getElementById('falseQL').tabIndex = -1;
        }

    // Chech setting for show theme
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
            showTimerSpan.classList.add('hideInput');
        }
    
    // Check setting for show preview
        let showPreview = localStorage.getItem('showPreview');
        let showPreviewDiv = document.getElementById('showPreviewDiv');

        if (showPreview == 'yes') {
            showPreviewDiv.classList.add("showInput");
        } else {
            showPreviewDiv.classList.add("hideInput");
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