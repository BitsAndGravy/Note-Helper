const settingsList = [
    ['appealInternal', 'appealInternalDiv'], 
    ['alwaysShowQuantity', 'quantityDiv']
]

window.onload = function() {
    let result = localStorage.getItem('appealInternal');
    let element = document.getElementById('appealInternal');

    if (result == 'yes') {
        element.checked = true;
    } else {
        element.checked = false;
    }
    
    // Always show quantity
        let result2 = localStorage.getItem('alwaysShowQuantity');
        let element2 = document.getElementById('alwaysShowQuantity');

        if (result2 == 'yes') {
            element2.checked = true;
        } else {
            element2.checked = false;
        }
        // For functions affecting...
        //      loadup, see window.onload in noteHelperFunctions.js
        //      manually clicking 76/70, see showQuantity() in functions.js
        //      auto-selecting 70/76, see getQuantity() in functions.js
        //      reset button, see resetForm() and hideExtras() in functions.js
};

function changeSettings(element) {
    let check = document.getElementById(element);

    if (check.checked) {
        localStorage.setItem(element, 'yes');
    } else {
        localStorage.setItem(element, 'no');
    }
}

function prefill(element) {
    let check = document.getElementById(element);

    if (check.checked) {
        localStorage.setItem('prefillQuantity', 'yes');
    } else {
        localStorage.setItem('prefillQuantity', 'no');
    }
}