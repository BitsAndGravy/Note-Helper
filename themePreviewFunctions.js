window.onload = function() {
    previewBuilder();
}

function previewBuilder() {
    for(theme in themeBook) {
        // Defining variables from themeBook
            let name = themeBook[theme].name;
            let title = themeBook[theme].title;
            let group = themeBook[theme].group;
            let style = themeBook[theme].style;

        // 'document' div - for background color
            const docDiv = document.createElement('div');
                docDiv.setAttribute("data-theme", name);
                docDiv.className = 'themeBookBackgroundColor inputDiv';


        // Container div - mainly just the border
            const containerDiv = document.createElement('div');
                containerDiv.className = 'container';
            
        
        // Header div and heading
            const headingDiv = document.createElement('div');
                headingDiv.className = 'heading';

            containerDiv.appendChild(headingDiv); //

            const headingTitle = document.createElement('H3');
            const headingNode = document.createTextNode(group + " - " + title);
                headingTitle.appendChild(headingNode);
                headingDiv.appendChild(headingTitle);

            containerDiv.appendChild(headingDiv); // Add completed heading to the container

        // Body div
            const bodyDiv = document.createElement('div');
            bodyDiv.className = 'gradientColor inputDiv';
            

        // Text and inputs for bodyDiv
            const bodyTextNode = document.createTextNode('Four score and seven years ago');
            const bodyTextDiv = document.createElement('div');
                bodyTextDiv.appendChild(bodyTextNode);
                bodyTextDiv.style.marginTop = '5px';

            const bodyCheckboxDiv = document.createElement('div');
                
                const bodyCheckAgree = document.createElement('input');
                    bodyCheckAgree.type = 'checkbox';
                    bodyCheckAgree.checked = true;
                    
                    const bodyAgreeNode = document.createTextNode('Agree ');

                const bodyCheckDisagree = document.createElement('input');
                    bodyCheckDisagree.type = 'checkbox';
                    const bodyDisagreeNode = document.createTextNode('Disagree ');

                bodyCheckboxDiv.appendChild(bodyCheckAgree);
                bodyCheckboxDiv.appendChild(bodyAgreeNode);
                bodyCheckboxDiv.appendChild(bodyCheckDisagree);
                bodyCheckboxDiv.appendChild(bodyDisagreeNode);
                bodyCheckboxDiv.style.marginTop = '5px';

            const bodyTextInput = document.createElement('input');
                bodyTextInput.type = 'text';
                bodyTextInput.placeholder = 'Our forefathers'
                bodyTextInput.style.marginTop = '5px';

            const bodySelect = document.createElement('select');
                const option1 = document.createElement('option');
                option1.value = 'chickens';
                option1.text = 'Brought forth chickens';
                
                const option2 = document.createElement('option');
                option2.value = 'nation';
                option2.text = 'Brought forth a new nation';

                bodySelect.appendChild(option1);
                bodySelect.appendChild(option2);
                bodySelect.style.marginTop = '5px';

            const bk1 = document.createElement('br');
            const bk2 = document.createElement('br');
            const bk3 = document.createElement('br');

            bodyDiv.appendChild(bodyTextDiv);
            bodyDiv.appendChild(bodyCheckboxDiv);
            bodyDiv.appendChild(bodyTextInput);
            bodyDiv.appendChild(bk3);
            bodyDiv.appendChild(bodySelect);

            containerDiv.appendChild(bodyDiv); // Add completed body to the container

        // Footer
        const newSaveButton = document.createElement('button');
        const newResetButton = document.createElement('button');
            newSaveButton.textContent = 'Save';
            newResetButton.textContent = 'Reset';

        const footingDiv = document.createElement('div');
            footingDiv.className = 'footing';
            footingDiv.appendChild(newSaveButton);
            footingDiv.appendChild(newResetButton);
            containerDiv.appendChild(footingDiv);

        // Put completed container into the doc
            docDiv.appendChild(containerDiv);

        // Where you want it to go
            const element = document.getElementById('showDiv');
            element.appendChild(docDiv);
    }
    
}