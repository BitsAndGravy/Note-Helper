const settingsList = [
    'autoselectAppeal',
    'showAppealType',
    'showTimer', 
    'showTheme',
    'showPreview',
    'prefillQuantity', 
    'alwaysShowQuantity', 
]

window.onload = function() {
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

    createStateSelectOptions();
};

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