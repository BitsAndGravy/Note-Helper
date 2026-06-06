window.onload = function() {
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

    // Check setting for show timer
        let showTimer  = localStorage.getItem('showTimer');
        let showTimerSpan = document.getElementById('time');

        if (showTimer == 'yes') {
            showTimerSpan.classList.add('showTimer');
        } else {
            showTimerSpan.classList.add('hideInput');
        }
        
    createThemeOptions();
};

function createThemeOptions () {
    for(theme in themeBook) {
        let name = themeBook[theme].name;
        let title = themeBook[theme].title;
        let group = themeBook[theme].group;
        //let style = themeBook[theme].style;
        let optGroup = themeBook[theme].optGroup;

        let option = document.createElement('option');
        let destination = document.getElementById(optGroup);
        

        option.value = name;
        option.innerHTML = title;

        destination.appendChild(option);
    };
}

