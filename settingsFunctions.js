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

settingDefault = {
    alwaysShowQuantity: 'yes',
    autoselectAppeal: 'no',
    prefillQuantity: 'no',
    requireAge: 'no',  
    showAppealType: 'yes',
    showPreview: 'no',
    showTimer: 'yes',
    showTheme: 'yes',
}

window.onload = function() {
    setDefaults();
    loadSettings();
    createStateSelectOptions();

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

