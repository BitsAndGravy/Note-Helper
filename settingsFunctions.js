const settingsList = [
    'autoselectAppeal',
    'showAppealType',
    'requireAge',
    'showTimer', 
    'showTheme',
    'showPreview',
    'prefillQuantity', 
    'alwaysShowQuantity', 
]

window.onload = function() {
    setDefaults();
    loadSettings();
    disableCheckboxes();
    createStateSelectOptions();
    displayDrugDatabase();
    displayDiagnosisList();

    let showApp = document.getElementById('showAppealType');
    let autoApp = document.getElementById('autoselectAppeal');
    showApp.addEventListener('change', (event) => {
        // If showAppeal is checked, enable ability to check Appeal Autoselect
        if (event.target.checked) {
            autoApp.disabled = false;

        // If showAppeal is NOT checked, disable ability to check Appeal Autoselect and uncheck it, adjust settings.
        } else {
            autoApp.checked = false;
            autoApp.disabled = true;
            localStorage.setItem('autoselectAppeal', 'no');
        }
    });

};

function loadSettings() {
    for(p = 0; p < settingsList.length; p++) {
        let setting = settingsList[p];
        let check = localStorage.getItem(setting);
        let checkBox = document.getElementById(setting);

        if (check == 'yes') {
            checkBox.checked = true;
        } else {
            checkBox.checked = false;
        }
    }
}

function disableCheckboxes() {
    let showApp = document.getElementById('showAppealType');
    let autoApp = document.getElementById('autoselectAppeal');
    if (showApp.checked) {
        // If checked, leave it not disabled
        autoApp.disabled = false;

        // If NOT checked, disable ability to check Appeal Autoselect and uncheck it, adjust settings.
    } else {
        autoApp.disabled = true;
    }
}

function changeSettings(element) {
    let check = document.getElementById(element);

    if (check.checked) {
        localStorage.setItem(element, 'yes');
    } else {
        localStorage.setItem(element, 'no');
    }
}

function updateSelectedState(update) {
    localStorage.setItem('selectedState', update);
}

function displayDrugDatabase() {
    let i = 0;
    //document.getElementById('drugTestDiv').innerText = drugDatabase[1].drug;
    /*
    for (i = 0; i < drugDatabase.length; i++) {
                        document.getElementById('settingsTest').style.backgroundColor = 'red';

    }
                        */

    for (thisDrug in drugDatabase) {
        let name = drugDatabase[thisDrug].drug;
        let qt = drugDatabase[thisDrug].quantity;
        let diagnosis = drugDatabase[thisDrug].diagnosis;
        let altDiagnosis = drugDatabase[thisDrug].altDiagnosis;
        let formulary = drugDatabase[thisDrug].formulary;
        let specialty = drugDatabase[thisDrug].specialty;
        let quantityLimit = drugDatabase[thisDrug].quantityLimitCriteria;

        // Set div name and background color
        const newDiv = document.createElement('div');
        
        if (i % 2 === 0) {
            newDiv.className = 'primaryColor inputDiv';
        } else {
            newDiv.className = 'secondaryColor inputDiv';
        }
            
        // Div contents
        let nameNode = document.createTextNode(name);
        newDiv.appendChild(nameNode);

        let break1 = document.createElement('br');
        newDiv.appendChild(break1);

        let diagnosisNode = document.createTextNode(diagnosis);
        newDiv.appendChild(diagnosisNode);

        let break2 = document.createElement('br');
        newDiv.appendChild(break2);

        let altDiagnosisNode = document.createTextNode('cat');
        newDiv.appendChild(altDiagnosisNode);

        let break3 = document.createElement('br');
        newDiv.appendChild(break3);

        /*

        if (formulary == false) {
            let formularyNode = 'Non-formulary';
        } else {
            let formularyNode = 'Formulary';
        }
        newDiv.appendChild(formularyNode);

        let break5 = document.createElement('br');
        newDiv.appendChild(break5);

        if (specialty) {
            let specialtyNode = 'Specialty';
        } else {
            let specialtyNode = 'Non-specialty';
        }
        newDiv.appendChild(specialtyNode);

        let break6 = document.createElement('br');
        newDiv.appendChild(break6);

        if (qt) {
            let qtNode = 'Quantity limit';
        } else {
            let qtNode = '';
        }
        newDiv.appendChild(qtNode);
        */

        // Add to target
        let databaseDiv = document.getElementById('drugDatabaseDisplayDiv');
        databaseDiv.appendChild(newDiv);
        i++;
    }
}

function displayDiagnosisList() {
    const diagnosisNameList = [];

    // Build list of diagnoses
    // Pull from drug database
    for(i = 0; i < drugDatabase.length; i++) {
        diagnosisNameList.push(drugDatabase[i].diagnosis);
        diagnosisNameList.push(drugDatabase[i].altDiagnosis);
    }

    // Add manually created list
    combinedDiagnosisList = [...fullDiagnosisList, ...diagnosisNameList];

    // Remove duplicates
    noDuplicatesCombinedDiagnosisList = [...new Set(combinedDiagnosisList)];

    // Sort without regard to capitalization
    noDuplicatesCombinedDiagnosisList.sort(function (a, b) {
        return a.localeCompare(b);
    });
    
    for (diag in noDuplicatesCombinedDiagnosisList) {
        let diagNode = document.createTextNode(noDuplicatesCombinedDiagnosisList[diag]);
        let newDiagDiv = document.createElement('div');
            newDiagDiv.appendChild(diagNode);

        let target = document.getElementById('diagnosisListDisplayDiv');
            target.appendChild(newDiagDiv);
    }
}