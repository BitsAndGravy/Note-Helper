window.onload = function() {
    createThemeOptions();
    document.getElementById('themeSelect').value = localStorage.getItem('theme');

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
};

function createThemeOptions () {
    /*for(i = 0; i < themeBook.length; i++) {
        let optGroup = document.createElement('optgroup');
        optGroup.label = groups[i];

        for(j = 0; j < themeBook[i].length; j++) {
            let name = themeBook[i][j].name;
            let title = themeBook[i][j].title;

            let option = document.createElement('option');
            option.value = name;
            option.text = title; 

            optGroup.appendChild(option);
        }

        let themeSelect = document.getElementById('themeSelect');
        themeSelect.appendChild(optGroup);
    }*/


    for(theme in themeBook) {
            let name = themeBook[theme].name;
            let title = themeBook[theme].title;
            let group = themeBook[theme].group;
            //let style = themeBook[theme].style;
            let optGroup = themeBook[theme].optGroup;

            let option = document.createElement('option');
            option.value = name;
            option.innerHTML = title;

            let destination = document.getElementById(optGroup);
            destination.appendChild(option);
    };
}

