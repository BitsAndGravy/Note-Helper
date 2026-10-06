window.onload = function() {
    setDefaults();
    createThemeOptions();
    createStateSelectOptions();
    checkState();
    document.getElementById('themeSelect').value = localStorage.getItem('theme');
    processDates();




    // CaseType only changes when you leave the field. Using onChange still ran the function for each result when typing to find an object.
    let isFocused = false;
    const caseType = document.getElementById('caseType');

    caseType.addEventListener('focus', () => {
        isFocused = true;
    });

    // Run when element loses focus
    caseType.addEventListener('blur', () => {
        isFocused = false;
        runMyFunction();
    });

    function runMyFunction() {
        if (isFocused) return;
        caseTypeSelection();
    }

    /*
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
            appDiv.classList.add("display-none");
        }
            */

        
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
            themeElement.classList.add("opacity-0");
        }

    // Check setting for show timer
        let showTimer  = localStorage.getItem('showTimer');
        let showTimerSpan = document.getElementById('time');

        if (showTimer == 'yes') {
            showTimerSpan.classList.add('showTimer');
        } else {
            showTimerSpan.classList.add('display-none');
        }

    /* || Word prediction, see predictWords() in functions */
    
        // Drug name: Start typing in the drug name field for suggestion to appear. Hit Enter or Tab to accept drug name suggestion.
        const drugInput = document.getElementById('drug');
        const drugSuggestion = document.getElementById('drugSuggestion');

        drugInput.addEventListener('keydown', function(e) {
            
            // Check if the pressed key is "Enter" or "tab"
            if (((e.key === 'Enter') || (e.key === 'Tab')) && drugSuggestion.innerText != '') {
                drugInput.value = drugSuggestion.innerText;
                drugSuggestion.innerText = '';
                getQuantity();
            }
        });

        // Diagnosis: Start typing in diagnosis field for suggestion to appear. Hit Enter or Tab to accept drug name suggestion.
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

        // MD Specialty: Start typing in first MD specialty field for suggestion to appear. Hit Enter or Tab to accept drug name suggestion.
        const mdInput = document.getElementById('mdSpecialty');
        const mdSuggestion = document.getElementById('mdSpecialtySuggestion');

        mdInput.addEventListener('keydown', function(e) {
            
            // Check if the pressed key is "Enter"
            if (((e.key === 'Enter') || (e.key === 'Tab')) && mdSuggestion.innerText != '') {
                mdInput.value = mdSuggestion.innerText;
                mdSuggestion.innerText = '';     
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
            // let group = themeBook[theme].group;
            let optGroup = themeBook[theme].optGroup;

            let option = document.createElement('option');
            option.value = name;
            option.innerHTML = title;

            let destination = document.getElementById(optGroup);
            destination.appendChild(option);
    };
}

// When refresh symbol clicked next to reject code.
function resetReject() {
    let rejects = [
        'standardPA',
        'nonFormulary',
        'stepTherapy',
    ]

    for (let reject of rejects) {
        document.getElementById(reject).checked = false;
    }
    preSaveFunctions();
}

/* || Appeals and IRO stuff */

// Creates note from text and textarea inputs
function buildIROnote() {
    let type = document.getElementById('typeOfRequest').value;
    let md = document.getElementById('specialtyRequested').value;
    let due = document.getElementById('iroDueDate').value;
    let summary = document.getElementById('iroClinicalSummary').value;
    let questions = document.getElementById('iroQuestions').value;

    let iroNote = '-- SEND TO IRO --' + '\n\n' + 
        'Type of Request: ' + type + '\n' +
        'Board-Certified Specialty Requested: ' + md + '\n' + 
        'IRO Due Date: ' + due + '\n\n' +
        summary + '\n\n' + 
        questions;

    document.getElementById('iroCompleteNote').innerText = iroNote;
    iroTotalCharacterCountCheck(iroNote);
}

// Character count for IRO clinical summary
function iroClinicalCharacterCountCheck() {
    let text = document.getElementById('iroClinicalSummary').value;
    let charCount = document.getElementById('iroClinicalCharacterCount');

    // Shows character count
    charCount.innerText = text.length + "/1000";

        if(text.length < 800) {
            charCount.className = 'characterLimitGreen';

        } else if (text.length < 900) {
            charCount.className = 'characterLimitYellow';

        } else if (text.length < 1001) {
            charCount.className = 'characterLimitOrange';

        // Opacity = 1 for best visibility
        } else if (text.length >= 1001) {
            charCount.className = 'characterLimitRed';
        }
}

// Character count for IRO request
function iroTotalCharacterCountCheck(text) {
    // let text = document.getElementById('iroCompleteNote').value;
    let charCount = document.getElementById('iroTotalCharacterCount');

    // Shows character count
    charCount.innerText = text.length + "/2000";

        if(text.length < 1500) {
            charCount.className = 'characterLimitGreen';

        } else if (text.length < 1750) {
            charCount.className = 'characterLimitYellow';

        } else if (text.length < 2001) {
            charCount.className = 'characterLimitOrange';

        // Opacity = 1 for best visibility
        } else if (text.length >= 2001) {
            charCount.className = 'characterLimitRed';
        }
}

function showAppealReason() {
    let reasonNo = document.getElementById('appealReasonNo');
    let reasonText = document.getElementById('appealReasonText');

    if (reasonNo.checked) {
        hideContent('appealReasonDiv');
        reasonText.tabIndex = -1;
    } else {
        showContent('appealReasonDiv');
        reasonText.tabIndex = 0;
    }
}

const appeal = {
    appealCondition: '[appealCondition]', 
    appealDenialReasons: '[appealDenialReasons]',
    appealReasonText: '[appealReasonText]', 
    criteriaName: '[criteriaName]',
    reasonCheckbox: '[reasonCheckbox]',
    selectedAppealReason: '[selectedAppealReason]',
    selectedNewInformation: '[selectedNewInformation]',
};

function createDenialLanguage() {
    let dlCreateListText = [
        'appealCondition',
        'appealReasonText',
        'appealDenialReasons',
        'criteriaName',
    ];

    let divAdded = document.getElementById('appealDenial2');

    for (i = 0; i < dlCreateListText.length; i++) {
        appeal[dlCreateListText[i]] = document.getElementById(dlCreateListText[i]).value;
    }

    let appealReasonNo = document.getElementById('appealReasonNo');
    if (appealReasonNo.checked) {
        appeal.appealReasonText = '';
    }

    appeal.selectedAppealReason = document.querySelector('input[name="appealReasonCheckbox"]:checked').value;
    appeal.selectedNewInformation = document.querySelector('input[name="newInformationCheckbox"]:checked').value;
    
    let dlLine1 = "We have received a request for the treatment of " + appeal.appealCondition + '. ';
    let dlLine2 = "Based on the information provided, this request was not approved. " + appeal.selectedAppealReason + appeal.appealReasonText + '. ';
    let dlLine3 = appeal.selectedNewInformation + '.\n\n';
    
    
    let dlLine4 = "Your current records with us and the information submitted by your doctor do not meet the following criteria:\n\n";
    /*
    let reject70 = document.getElementById('nonFormulary');
    if (reject70.checked) {
        dlLine4 = 'Your current records with us and the information submitted by your doctor do not show you meet the following criteria for non-formulary drugs:\n\n';
    }
        */

    let dlLine5 = appeal.appealDenialReasons + '\n\n';
    let dlLine6 = "We recommend you reach out to your doctor to discuss this information and treatment alternatives.\n\n";
    let dlLine7 = appeal.criteriaName;

    let dlFinal = dlLine1 + dlLine2 + dlLine3 + dlLine4 + dlLine5 + dlLine6 + dlLine7;

    divAdded.value = dlFinal;
    navigator.clipboard.writeText(dlFinal);
    animateText("createDenialLanguageTextAnimation");
}

// When copy button clicked in appeal denial language section
function copyDenialLanguage() {
    let textToCopy = document.getElementById('appealDenial2').value;
    navigator.clipboard.writeText(textToCopy);
    animateText('copyDenialLanguageTextAnimation');
}

// When calendar open, change dates shown based on whether 'denied on' checked or 'reopened on' checked
function updateShownDates() {
    let deniedOn = document.getElementById('deniedOn');
    let daysAgo = document.getElementById('daysAgo');
    let daysAfter = document.getElementById('daysAfter');

    if (deniedOn.checked) {
        daysAfter.classList.add('showContent');
        daysAfter.classList.remove('hideContent');

        daysAgo.classList.add('hideContent');
        daysAgo.classList.remove('showContent');
    } else {
        daysAgo.classList.add('showContent');
        daysAgo.classList.remove('hideContent');

        daysAfter.classList.add('hideContent');
        daysAfter.classList.remove('showContent');
    }
}