/* || Dictionaries and constants */
const saveNames = [ // Used for saveText()
    'noteOne',  // Most recent note
    'noteTwo', // Note previously worked on
    'noteThree'
]

const saveList = [] // Notes will be saved here with saveText()

const stateClientList = [ // for use with createStateSelectOptions()
    '', // Blank in case someone does not want state pre-filled
    //'AK',   // Alaska
    'AL',   // Alabama
    //'AR',   // Arkansas
    'AZ',   // Arizona
    //'CA',   // California
    //'CO',   // Colorado
    //'CT',   // Connecticut
    //'DC',   // Washington, DC
    //'DE',   // Delaware
    'FL',   // Florida
    'GA',   // Georgia
    //'HI',   // Hawaii
    'IA',   // Iowa
    //'ID',   // Idaho
    'IL',   // Illinois
    //'IN',   // Indiana
    'KS',   // Kansas
    //'KY',   // Kentucky
    //'LA',   // Louisiana
    //'MA',   // Massachusetts
    //'MD',   // Maryland
    //'ME',   // Maine
    'MI',   // Michigan
    //'MN',   // Minnesota
    'MO',   // Missouri
    'MS',   // Mississippi
    //'MT',   // Montana
    'NC',   // North Carolina
    //'ND',   // North Dakota
    'NE',   // Nebraska
    //'NH',   // New Hampshire
    'NJ',   // New Jersey
    //'NM',   // New Mexico
    //'NV',   // Nevada
    'NY',   // New York
    'OH',   // Ohio
    'OK',   // Oklahoma
    //'OR',   // Oregon
    'PA',   // Pennsylvania
    //'RI',   // Rhode Island
    //'SC',   // South Carolina
    //'SD',   // South Dakota
    'TN',   // Tennessee
    'TX',   // Texas
    //'UT',   // Utah
    'VA',   // Virginia
    //'WA',   // Washington
    //'WI',   // Wisconson
    //'WV',   // West Virginia
    //'WY',   // Wyoming
]

const fullDiagnosisList = [
    'abnormal blood chemistry',
    'actinic keratosis',
    'acute upper respiratory infection',
    'acute vaginitis',
    'anemia',
    'aspergillosis', 

    'bacterial intestinal infection',
    "Barrett's esophagus",
    'binge eating disorder',
    'blastomycosis', 
    'blepharitis',

    'candidiasis',
    'chronic rhinitis',
    'coccidioidomycosis',
    'colonoscopy',
    'constipation',

    'depression',
    'dermatophytosis',
    'diabetes',
    'diarrhea',
    'dysphagia',

    'enterobiasis',
    'epigastric pain',
    'erosive esophagitis',
    'esophageal candidiasis',
    'essential hypertension',

    'fatigue',
    'fatigue related to multiple sclerosis',
    'fatty liver',

    'gastritis',
    'gender identity disorder',

    'headache',
    'hemorrhoids',
    'hepatic encephalopathy',
    'histoplasmosis',
    'hyperglyceridemia',
    'hyperhidrosis',
    'hypersomnia',
    'hypertension',
    'hyperuricemia',
    'hypoactive sexual desire disorder',
    'hypoglycemia',

    'idiopathic hypersomnia',
    'irritable bowel disease',
    'irritable bowel syndrome',
    'irritable bowel syndrome-constipation',

    'male hypogonadism',
    'melanin hyperpigmentation',
    'migraine',
    'mild intermittent asthma',
    'mild persistent asthma',
    'muscle spasm',

    'narcolepsy',
    'necrotizing fasciitis',
    'neuralgia',

    'obstructive sleep apnea',
    'onychomycosis',
    'oropharyngeal candidiasis',
    'OSA and obesity',
    'osteoarthritis',

    'paranoid schizophrenia',
    "Parkinson's disease",
    'PCOS',
    'psychophysiologic insomnia',
    'polycystic ovarian syndrome',
    'polyphagia',
    'post-inflammatory hyperpigmentation',
    'postmenopausal atrophic vaginitis',
    'prediabetes',
    'psoriasis vulgaris',
    'pulmonary embolism',

    'radiculopathy',
    'rhinitis',

    'schizoaffective disorder',
    'schizoaffective disorder, bipolar type',
    'schizoaffective disorder, depressive type',
    'seborrheic dermatitis',
    'severe persistent asthma',
    'sexual dysfunction',
    'shift work sleep disorder',
    'Sjogren syndrome',

    'T2DM and obesity',
    'tinea capitis',
    'tinea corporis',
    'tinea pedis',
    'tinea unguium',
    'tinea versicolor',
    'transsexualism',

    'ulcerative colitis',
    'unspecified dermatitis',
    'urge incontinence',
    'urinary incontinence',
    
    'vitiligo',
]

const mdSpecialtyList = [
    'anesthesia',
    'behavioral health',
    'cardiology',
    'critical care',
    'emergency medicine',
    'ENT',
    'family medicine',
    'gastroenterology',
    'hematology',
    'hospice/palliative',
    'ICU',
    'infectious diseases',
    'internal medicine',
    'nephrology',
    'neurology',
    'OB/GYN',
    'oncology',
    'ophthalmology',
    'ortho',
    'pain',
    'pediatrics',
    'pharmacy',
    'post-acute',
    'pulmonology',
    'rheumatology',
    'sleep medicine',
    'surgery',
    'urology',
    'wound care',
]

function createStateSelectOptions () {

    // Create list of states
    for(i = 0; i < stateClientList.length; i++) {
            
        // Create option, assign attributes.
            let option = document.createElement('option');
            option.value = stateClientList[i];
            option.innerHTML = stateClientList[i];
            option.id = stateClientList[i];
            
        // Add option to state select element.
            let destination = document.getElementById('state');
            destination.appendChild(option);
    };

    let selectedState = localStorage.getItem('selectedState');
    let stateSelect = document.getElementById('state');

    // Use state selected in settings, otherwise use FL as default.
    if (selectedState) {
        stateSelect.options[selectedState].selected = true;
    } else {
        stateSelect.options['FL'].selected = true;
    }
}

var notePreviewText = '';

/* || Buttons */
/* ||| Save button */
function saveButton() { // After clicking the Save button
    checkForm();
}

function checkForm() { // Used for the Save button. checks if age input is filled out. If so, proceed to process results and save.
    let form = document.getElementById('mainForm');
    let alertMessage = '';
    //let age = document.getElementById('age');
    let char = document.getElementById('characterCount');
    
    //let ageAlertText = '';
    //let characterAlertText = '';

    let requireAge = localStorage.getItem('requireAge');
    if (requireAge == 'yes') {
        alertMessage += form.age.value ? '' : 'Age field is blank. ';
    }

    alertMessage += char.classList.contains('characterLimitRed') ? 'Over character limit of 2,000. ' : '';

    let alert = document.getElementById('alert');
    let alertText = document.getElementById('alert-text');

    if (alertMessage !== '') {
        alertText.innerText = alertMessage;
        alert.classList.remove('display-none');
        alert.classList.add('shake');   
    } else {
        alert.classList.add('display-none');
        preSaveFunctions();
        saveNote();
    }
}

    // Activates on input from certain fields, shows preview but does not save to clipboard.
    function preSaveFunctions() {    
        noteBuilder();
        showNotePreview(); 
        characterCount();
    }

        function showNotePreview() {
            let notePreview = document.getElementById('notePreview');
            notePreview.innerText = notePreviewText;
        }

    function noteBuilder() {
        let form = document.getElementById('mainForm');

        // Appeal headings
        //let textOutput = form.sendToIRO.checked ? '-- SEND TO IRO --\n\n' : '';
        let textOutput = form.mdSpecialty.value ? `-- TO BE REVIEWED BY ${form.mdSpecialty.value} SPECIALTY --\n\n` : '';
        
        // SUMMARY heading
            textOutput += 'SUMMARY\n';

            // Urgent, expedited, state, source.
            textOutput += form.urgent.checked ? 'Urgent ' : '';
            textOutput += form.expedited.checked ? 'Expedited ' : '';
            textOutput += (form.state.value || '[state]') + ' ';
            textOutput += `${form.source.value || '[source]'}. `;

            // Drug, qty, diagnosis.
            textOutput += form.caseType.value || '[case type]';
            textOutput += ` for ${form.drug.value || '[drug name]'}`;
            let quantityClass = document.getElementById('quantityDiv').className;
            textOutput += form.quantity.value ? 
                (quantityClass !== 'hideContent' ? 
                    // If quantity filled and shown, show quantity
                    ` for #${form.quantity.value}`  

                    // If quantity filled but hidden, do not show quantity
                    : '')  
                                             
                // If quantity blank, do not show quantity
                : ''; 
            textOutput += ` for ${form.diagnosis.value || '[diagnosis]'}. `;

            // Reject codes. Qset response. 

            /*
            textOutput += form.elements.reject.value;
            textOutput += form.elements.reject.value ? 
                (form.rejectQL.checked ? 
                    // Reject and 76
                    ` and ${form.rejectQL.value}. ` 
                    // Reject, no 76
                    : '. ')

                : form.rejectQL.checked ? 
                    // 76 only
                    `${form.rejectQL.value}. `
                    // No selection (should throw error)
                    : '[reject blank] ';

                    */

            textOutput += form.rejectCode.value && form.rejectQL.checked ? 
                // Both checked
                `${form.rejectCode.value} and ${form.rejectQL.value}. ` : 
                // One selected
                form.rejectCode.value ?
                    // No 76
                    `${form.rejectCode.value}. ` :
                    // Only 76
                    `${form.rejectQL.value}`;


            // textOutput += `Provider response led to ${form.qset.checked ? 'approval' : 'denial'}. \n`;
            textOutput += `Qset ${form.qsetResult.value}.\n`
            
            // Gender, age, date joined.
            let gender = form.elements.gender.value;
            textOutput += gender || '';
            textOutput += form.age.value ? 
                (gender ? 
                    // If gender and age, "Gender age xx."
                    ` age ${form.age.value}. `  
                    // If age only, "Age xx."
                    : `Age ${form.age.value}.`  
                )
                : gender ? 
                    // If gender only, "Gender."
                    '. '    
                    // If none, blank.
                    : '';   

            textOutput += `Joined plan ${form.member.value || '[member date]'}.\n\n`;

        // HISTORY heading
        textOutput += 'HISTORY\n';
            textOutput += `Authorizations: ${form.information.value || 'None relevant'}\n`;
            textOutput += (form.claims.value ? 
                // Field not empty and
                (form.claims.value !== 'Paid claims in Snapshot for ' ? 
                    // Field was edited (value is not the default text)
                    `Claims: ${form.claims.value}\n`
                    // Field was not edited (value === default text)
                    : '') 
                // Field empty
                : 'Claims: None relevant\n');
            textOutput += form.noMedicalAuthorizations.checked ? `${form.noMedicalAuthorizations.value}\n\n` : '\n';

        // CLINICAL heading
        textOutput += 'CLINICAL\n';
            textOutput += form.noRecords.checked ? `${form.noRecords.value}\n` : '';
            textOutput += form.chart.checked ? `${form.chart.value}\n` : '';
            textOutput += (form.clinical.value ? `${form.clinical.value}\n\n` : '\n');

        // RECOMMENDATION heading
        textOutput += 'RECOMMENDATION\n';
        textOutput += form.conclusion.value;
        textOutput += form.falseQL.checked ? `\n\nNot a true QL; ${form.comment.value} #${form.properQuantity.value}` : '';

        // Final output
        //document.getElementById('conclusion').innerHTML = textOutput;
        notePreviewText = textOutput;
    }

    // Copies note to clipboard and outputs preview at the bottom of the page.
    function saveNote() { 
        saveText();
        copyText();
    }

        // Saves the note to the bottom of the page for reference.
        function saveText() { 
            // Add note to save list
            saveList.unshift(notePreviewText);
            
            // Delete any old notes (keep only 3 notes).
            if (saveList.length > 3) {
                saveList.splice(3); 
            };

            // Display the saved notes.
            for(i in saveList) 
            document.getElementById(saveNames[i]).innerText = saveList[i];
        }

        // Copies text to clipboard.
        function copyText() { 
            //let textToCopy = notePreviewText;
            navigator.clipboard.writeText(notePreviewText);
            animateText("textCopied");
        }

    // Shows character count. Changes color and opacity as max limit approached.
    function characterCount() {
        let text = notePreviewText;
        let char = document.getElementById('characterCount');

        // Shows character count
        char.innerText = text.length + "/2000";

        // Styles based on count length.
        if(text.length < 1700) {
            char.className = 'characterLimitGreen';

        } else if (text.length < 1850) {
            char.className = 'characterLimitYellow';

        } else if (text.length < 2001) {
            char.className = 'characterLimitOrange';

        // Opacity = 1 for best visibility
        } else if (text.length >= 2001) {
            char.className = 'characterLimitRed';
        }
    }


/* ||| Reset button */
function resetForm() { // After clicking the Reset button        
    document.getElementById('mainForm').reset();
    document.getElementById('appealForm').reset();
    document.getElementById('iroForm').reset();

    resetCalendar();
    resetThemeSelectSelection(); // Sets themeSelect to current theme (resets when form clears)
    buildIROnote(); // Reset preview text
    iroClinicalCharacterCountCheck(); // Resets character count for IRO clinical summary
    iroTotalCharacterCountCheck(''); // Resets character count for IRO note
    hideAlert();
    resetStateOptionSelected();
    preSaveFunctions();
    resetAlts(); // Hides alternative diagnosis box, clear suggestions
    resetTextareaSize(); // Resets textarea if manually adjusted
    hideExtras(); // Hides quantity (per settings), false QL, iroNote etc.
    checkState(); // If default state has a comment, show comment
    animateText('resetForm');
    gotoFirstField();
    resetTimer();
}

    // Sets themeSelect to current theme (resets when form clears)
    function resetThemeSelectSelection() {
        let theme = localStorage.getItem('theme');
        let themeSelectElement = document.getElementById('themeSelect');
        themeSelectElement.value = theme;
    }

    // Hides error message if requirements not met after clicking save button (i.e. age or character limit)
    function hideAlert() {
        document.getElementById('alert').classList.add('display-none');
    }

    // Use state selected in settings, otherwise reset to FL as default.
    function resetStateOptionSelected() {
        let selectedState = localStorage.getItem('selectedState');
        let stateSelect = document.getElementById('state');

        if (selectedState) {
            stateSelect.options[selectedState].selected = true;
        } else {
            stateSelect.options['FL'].selected = true;
        }
    }

    function resetPreview() {
        document.getElementById('notePreview').innerText = 'Start note to see preview.\n\n';
    }

    // Hide alternative fields i.e. for now just diagnosis.
    function resetAlts() {
        let altDiagButton = document.getElementById('alternativeDiagnosisButton');
        hideContent('alternativeDiagnosisButton')        
        altDiagButton.tabIndex = -1;

        let diagSuggest = document.getElementById('diagnosisSuggestion');
        diagSuggest.innerText = '';

        let drugSuggest = document.getElementById('drugSuggestion');
        drugSuggest.innerText = '';
    }

    // If textarea was manually adjusted, return it to default size.
    function resetTextareaSize() {
        let txtarea = [
            'information',
            'claims',
            'clinical',
            'conclusion'
        ]

        for(i = 0; i < txtarea.length; i++) {
            let adjust = document.getElementById(txtarea[i]).style;
            adjust.height = 'unset';
            adjust.width = '';
        }
    }

    // Hide features that are hidden by default or by settings.
    function hideExtras() {
     

        let alwaysShowQuantity = localStorage.getItem('alwaysShowQuantity');
        if(alwaysShowQuantity === 'no') {
            // Hide the quantity, falseQL, and comment input    
            hideContent('quantityDiv');
            hideContent('datesDiv');
            hideContent('properQuantityDiv');
            hideContent('commentDiv');
            hideContent('iroNoteDiv');


            // Skip when tabbing through
            let extrasList = [
                'properQuantity',  
                'comment',          
                'quantity',
                'falseQL',
            ];
            changeTabIndex(extrasList, -1);
        }

        // Running these functions effectively hides and makes tabIndex -1, as they are not selected anymore
        showProperQuantity();
        appealTypeChecked();
        iroChecked();
    }

        // Shows if falseQL selected, default hidden.
        function showProperQuantity() { // Also triggered by changing properQuantity
            let destination = document.getElementById('showProperQuantity');
            let source = document.getElementById('properQuantity');
            destination.innerText = "#" + source.value + ".";
        }

    function gotoFirstField() {
        document.getElementById('drug').focus();
    }

/* || Saved notes */
// In the functions below, consider the Note to be the <div>, and the Edit to be the <textarea>.

var detectNoteOrEdit = 'Note';

/* ||| Edit button */
function editButton(noteID) { // Used with Edit button to show the textarea and hide the span.
    showThis(noteID, 'Edit'); // Show textarea
    editNote(noteID); // Fill textarea with saved note
    hideThis(noteID, 'Text'); // Hide span
    detectNoteOrEdit = 'Edit';
    showButtons(noteID);
}

    function showThis(note, suffix) { // Shows the textarea. Suffix is either 'note' or 'edit'. With edit button, suffix = 'edit'.
        noteToShow = note + suffix;
        document.getElementById(noteToShow).style.display = 'block';
    }

    function editNote(note) { // Edits saved notes; take text in the span and paste it into a textarea, used with editButton();
        let temporarySavedNote = document.getElementById(note).innerText;
        let paste = 'edit' + note;
        document.getElementById(paste).value = temporarySavedNote;
    }

    function hideThis(note, suffix) { // Hides the span.
        editToHide = note + suffix;
        document.getElementById(editToHide).style.display = 'none';
    }

/* ||| Save button */
/* ||| Note save button */
function saveThis(noteID) {
    if(detectNoteOrEdit === 'Note') {
        copyTextDuplicate(noteID);

    } else if(detectNoteOrEdit === 'Edit') {
        showThis(noteID, 'Text');
        resaveNote(noteID);
        hideThis(noteID, 'Edit');
        copyTextDuplicate(noteID);
        showButtons(noteID);
        detectNoteOrEdit = 'Note';
    }
}

    function resaveNote(note) { // Copies textarea contents into the saved note.
        let editedNote = 'edit' + note;
        let textToSave = document.getElementById(editedNote);
        let saveID = document.getElementById(note);
        saveID.innerText = textToSave.value;
    }

    function copyTextDuplicate(noteID) { // Copies text to clipboard.
        let textToCopy = document.getElementById(noteID).innerText; 
        navigator.clipboard.writeText(textToCopy);
        let textToAnimate = noteID + 'Saved';
        animateText(textToAnimate);
    }

    function showButtons(noteID) {
        let edit = noteID + 'EditButton';
        let cancel = noteID + 'CancelButton';
        document.getElementById(edit).classList.toggle('display-none');
        document.getElementById(cancel).classList.toggle('display-none');
    }


/* ||| Cancel button */
function cancelButton (noteID) {
    showThis(noteID, 'Text');
    cancelEdit(noteID);
    hideThis(noteID, 'Edit');
    detectNoteOrEdit = 'Note';
    showButtons(noteID);
}

    function cancelEdit(note) {
        let cancelThis = 'edit' + note;
        let textToCancel = document.getElementById(cancelThis);
        let originalText = document.getElementById(note);
        textToCancel.value = originalText.innerText;
    }

/* || Animations */
/* ||| Animate text when button clicked */
function animateText(spanToAnimate) { // Text briefly displays message in the <span>. Activates after clicking a button.
    let text = document.getElementById(spanToAnimate);
    text.classList.remove("hideEnd");
    setTimeout(function() {
        text.classList.add("revealText");
        setTimeout(function() {
            text.classList.remove("revealText");
            setTimeout(function() {
                text.classList.add("hideEnd");
            }, 1000);
        }, 2000);
    });
}

/* || Input responses */
// Triggers when drug name changed. Checks if the drug name is in the database, returns diagnosis and qty/days.
function getQuantity() { 
    startTimer();
    checkAutoselectAppeals();

    // Erase color if previously a specialty drug.
    document.getElementById('drug').style.backgroundColor = ''; 

    let drugName = document.getElementById('drug').value;
    let prefillQuantity = localStorage.getItem('prefillQuantity');
    //let alwaysShowQuantity = localStorage.getItem('alwaysShowQuantity');
    
    let form = document.getElementById('mainForm');
    //let rejectCode = form.rejectCode.value;
    //let rejectQL = form.rejectQL.value;

    //let standardPA = document.getElementById('standardPA');
    //let quantityLimit = document.getElementById('quantityLimit');
    //let nonFormulary = document.getElementById('nonFormulary');

    for(i = 0; i < drugDatabase.length; i++) { // iterate through all drugs in the database
        if(drugDatabase[i].drug.toLowerCase() == drugName.toLowerCase()) { // If drug found in database, then:
            
            // If a specialty drug, highlight in red.
            if(drugDatabase[i].specialty) { 
                document.getElementById('drug').style.backgroundColor = 'red';
            } 

            // Check settings for prefill quantity. Fill in if selected.
            if(prefillQuantity == 'yes') {
                document.getElementById('quantity').value = drugDatabase[i].quantity; // Yes - prefill the quantity field.
            } else {
                document.getElementById('quantity').value = ""; // No - leave the quantity field blank.
            }

            // Prefill the diagnosis field. 
            document.getElementById('diagnosis').value = drugDatabase[i].diagnosis;
            
            // Suggest alternative diagnosis
            let altDiag = drugDatabase[i].altDiagnosis;
            let altDiagSpan = document.getElementById('alternativeDiagnosisButton');
            //let diagnosisButton = document.getElementById('alternativeDiagnosisButton');
            
                // If there is an alt diagnosis, show button with diagnosis.
                if(drugDatabase[i].altDiagnosis) {
                    altDiagSpan.innerText = altDiag;
                    altDiagSpan.tabIndex = 0;
                    showContent('alternativeDiagnosisButton');

                // If no alt diagnosis, hide button and delete text.
                } else {

                    setTimeout(function() {
                        altDiagSpan.innerText = '';
                    }, 1100)

                    hideContent('alternativeDiagnosisButton');
                    altDiagSpan.tabIndex = -1;
                };

            // If non-formulary, 1-select the checkbox for 70, 2-unselect the checkbox for 75.
            if(drugDatabase[i].formulary == false) {
                form.rejectCode.value = '70-Non-formulary';
                //nonFormulary.checked = true; 
                //standardPA.checked = false;
                
                //checkAlwaysShowQuantitySetting();
            } else {
                form.rejectCode.value = '75-Standard PA';
            }      

            // If quantity limit, select checkbox for 76, unselect checkbox for 75. i.e. for QL-only drugs like temazepam.
            if(drugDatabase[i].quantityLimitCriteria) {    
                form.rejectCode.value = '';
                form.rejectQL.checked = true;
                //standardPA.checked = false;
                //quantityLimit.checked = true;
                
                //checkAlwaysShowQuantitySetting();
            } else {
                form.rejectQL.checked = false;
            }         
            break;
        }
        form.rejectCode.value = '75-Standard PA';
        form.rejectQL.checked = false;
    }
    showQuantity();
    preSaveFunctions();
    //formularyStatusReport();
}

/////// delete?
function checkAlwaysShowQuantitySetting() {
    if(alwaysShowQuantity == 'no') {
        
        showContent('quantityDiv');
        
        // Input index was -1 (skip), now as 0 let computer handle (should act normal).
        //changeTabIndex(['quantity', 'falseQL'], 0);
        document.getElementById('quantity').tabIndex = 0; 
        document.getElementById('falseQL').tabIndex = 0;
    }
}

    // Check setting for auto-select appeals. If checked, check option for appeal.
    function checkAutoselectAppeals() {
        let auto = localStorage.getItem('autoselectAppeal');
        let app = document.getElementById('appealType');

        if (auto === 'yes') {
            app.checked = true;
            appealTypeChecked();
        }
    }

// Triggered when state is changed.
function checkState() {
    checkRegulations();
    checkNFStates();
}

    const stateRegulations = [
        IL = {
            name: 'IL',
            fullName: 'Illinois',
            durationException: true,
            stepTherapyException: true,
            cocTemporaryApproval: '3 months',
        }, 
        MS = {
            name: 'MS',
            fullName: 'Mississippi',
            durationException: false,
            stepTherapyException: true,
            cocTemporaryApproval: '3 months',
        }, 
        NE = {
            name: 'NE',
            fullName: 'Nebraska',
            durationException: false,
            stepTherapyException: false,
            cocTemporaryApproval: '60 days',
        }, 
        NJ = {
            name: 'NJ',
            fullName: 'New Jersey',
            durationException: true,
            stepTherapyException: false,
            cocTemporaryApproval: '60 days',
        }, 
        NY = {
            name: 'NY',
            fullName: 'New York',
            durationException: false,
            stepTherapyException: true,
            cocTemporaryApproval: false,
        }, 
        OK = {
            name: 'OK',
            fullName: 'Oklahoma',
            durationException: true,
            stepTherapyException: false,
            cocTemporaryApproval: '60 days',
        }, 
        TN = {
            name: 'TN',
            fullName: 'Tennessee',
            durationException: false,
            stepTherapyException: false,
            cocTemporaryApproval: '3 months',
        }, 
        TX = {
            name: 'TX',
            fullName: 'Texas',
            durationException: true,
            stepTherapyException: false,
            cocTemporaryApproval: false,
        }, 
        VA = {
            name: 'VA',
            fullName: 'Virginia',
            durationException: false,
            stepTherapyException: false,
            cocTemporaryApproval: '90 days',
        }, 

    ]

    // Check for state regulations, add a reminder note at bottom of page.
    function checkRegulations() {
        let state = document.getElementById('state');
        let note = document.getElementById('stateNote');
        // Reset all variabeles
            let durExComment = '';
            let stepComment = '';
            let cocComment = '';
            let regNote = '';

        for(i = 0; i < stateRegulations.length; i++) {
            let stateReg = stateRegulations[i];
            // If state is in the list: Build comment, show on page.
            if(stateReg.name == state.value) { 
                let stateName = stateReg.fullName; 

                if(stateReg.durationException) {
                    durExComment = '\n - Authorization duration exception may apply.';
                };
                
                if(stateReg.stepTherapyException) {
                    stepComment = '\n - Step therapy exception may apply.';
                };
                
                if(stateReg.cocTemporaryApproval) {
                    cocComment = '\n - Continuation of therapy temporary approval for ' + stateReg.cocTemporaryApproval + '. ';
                };

                // Combine it all into one variable
                regNote = "Note that for " + stateName + ' (' + state.value + '):' + durExComment + stepComment + cocComment;
                note.innerText = regNote;

                // Add class so it expands/animates
                showContent('stateNote');

                // Stop for loop, otherwise it will continue and use the else statement below.
                break; 
            } else { 
                // If state is not in the list, keep the div hidden.
                hideContent('stateNote');
            }
        }
    }

    // If 70 and IL or NY selected, add note to conclusion.
    function checkNFStates() { 
        //let nfCheck = document.getElementById('nonFormulary');
        let form = document.getElementById('mainForm');
        let state = document.getElementById('state');
        let conc = document.getElementById('conclusion');
        
        //if(nfCheck.checked && (state.value == 'NY' || state.value == 'IL')) {
        if(form.rejectCode.value === '70-Non-formulary' && (state.value == 'NY' || state.value == 'IL')) {
            if(state.value == 'NY') {
                conc.value = 'NY - require T/F with no more than two alternatives. \n' + conc.value;
            }
            if(state.value == 'IL') {
                conc.value = 'IL - require T/F with no more than one alternative. \n' + conc.value;
            }    
        } else {
            // Delete the sentence if it's the first thing in the textarea, since it's no longer applicable.
            if(conc.value.slice(0,12) == 'NY - require') {
                conc.value = conc.value.slice(54);
            }
            if(conc.value.slice(0,12) == 'IL - require') {
                conc.value = conc.value.slice(53);
            } 
        }
    }


// Triggers when either 'No drug claims' or 'Records not sent' are checked.
function clearTextarea(
    checkID, // The checkbox in question
    elementID, // The respective textarea we want to clear
    phrase // Default value of the textarea (elementID).
) {
    let check = document.getElementById(checkID);
    let element = document.getElementById(elementID);

    if (check.checked) {
        if (element.value === phrase) { // If the related field contains default text, delete it
            element.value = "";
        }
    }
}

// Triggers when 'falseQL' is checked. Shows inputs for proper quantity and comment.
function showQL() {
    let check = document.getElementById('falseQL');
    let qt = document.getElementById('properQuantity');
    let comment = document.getElementById('comment');

    if (check.checked) {
        showContent('properQuantityDiv');
        qt.tabIndex = 0;

        showContent('commentDiv');
        comment.tabIndex = 0;
    } 
    else {
        hideContent('properQuantityDiv');
        qt.tabIndex = -1;

        hideContent('commentDiv');
        comment.tabIndex = -1;
    }
}

// When 70 or 76 is checked/unchecked.
function showQuantity() {
    let alwaysShowQuantity = localStorage.getItem('alwaysShowQuantity'); // Check settings

    if(alwaysShowQuantity == 'no') {    // If 'always show quantity' is not selected in settings:
        /*
        let quantityLimit = document.getElementById('quantityLimit');
        let nonFormulary = document.getElementById('nonFormulary');
        let stepTherapy = document.getElementById('stepTherapy');

        // If 70 and/or 76 is checked:
        if ((quantityLimit.checked) || (nonFormulary.checked) || (stepTherapy.checked)) { 
            // Add class to make it visible, remove class that hides it
            showContent('quantityDiv');

            // Adjust tabIndex so you can tab to the input
            document.getElementById('quantity').tabIndex = 0;
            document.getElementById('falseQL').tabIndex = 0;
            */

        let form = document.getElementById('mainForm');
        
        // If 70 and/or 76 is checked:
        if(form.rejectQL.checked || form.rejectCode.value === '70-Non-formulary') {
            // Add class to make it visible, remove class that hides it
            showContent('quantityDiv');

            // Adjust tabIndex so you can tab to the input
            document.getElementById('quantity').tabIndex = 0;
            document.getElementById('falseQL').tabIndex = 0;

        } 
        else { // If neither 70 nor 76 are selected:
            
            hideContent('quantityDiv');

            // Skip the input when tabbing because it's hidden now
            document.getElementById('quantity').tabIndex = -1;
            document.getElementById('falseQL').tabIndex = -1;
            
            // Since qty and falseQL are hidden, uncheck the box
            document.getElementById('falseQL').checked = false;

            // Run function that hides falseQL stuff (will hide it because we just unchecked the box to show it)
            showQL();

        }
    } 
    // If setting is 'yes' to always show quantity, do nothing 
    checkNFStates();
    //formularyStatusReport();
}

function removeSelection(name) {
    let list = [];

    if (name === 'reject') {
        list = [
            'standardPA', 
            'nonFormulary',
            'quantityLimit',
        ];
    }

    for (i = 0; i < list.length; i++) {
        document.getElementById(list[i]).checked = false;
    } 
    showQuantity();
}

    // When info button for case type selected, show date table (help determine eligibility for reopening, appeal, etc). Not sure how to make it work with showDates.
    function processDates() {
        let todayDate = new Date();

        // Today's date
        let todayDateClean = formatDateClean(todayDate);
        document.getElementById('selected-day-ago').innerText = todayDateClean;

        // Days ago
        let reopeningDatePast = formatDateClean(todayDate.subtractBusinessDays(7));
        document.getElementById('sevenBusinessDaysAgo').innerText = reopeningDatePast;

        let appealDatePast = formatDateClean(todayDate.subtractDays(60));
        document.getElementById('sixtyDaysAgo').innerText = appealDatePast;

        // Days after
        let reopeningDateFuture = formatDateClean(todayDate.addBusinessDays(7));
        document.getElementById('sevenBusinessDaysAfter').innerText = reopeningDateFuture;

        let appealDateFuture = formatDateClean(todayDate.addDays(60));
        document.getElementById('sixtyDaysAfter').innerText = appealDateFuture;
    }

    // When date on calendar selected, recalculate days.
    function showDates(calendarDate) {
        
        // Selected day
        let selectedDate = new Date(calendarDate);

        
        let selectedDateClean = formatDateClean(selectedDate);
        /*
        let selectedDateSpans = document.querySelectorAll('.selected-day');
        selectedDateSpans.forEach(span => {
                span.value = selectedDateClean;
        });
        */
        
        document.getElementById('selected-day-ago').innerText = selectedDateClean;

        // Days ago
        let reopeningDatePast = formatDateClean(selectedDate.subtractBusinessDays(7));
        document.getElementById('sevenBusinessDaysAgo').innerText = reopeningDatePast;

        let appealDatePast = formatDateClean(selectedDate.subtractDays(60));
        document.getElementById('sixtyDaysAgo').innerText = appealDatePast;

        // Days after
        let reopeningDateFuture = formatDateClean(selectedDate.addBusinessDays(7));
        document.getElementById('sevenBusinessDaysAfter').innerText = reopeningDateFuture;

        let appealDateFuture = formatDateClean(selectedDate.addDays(60));
        document.getElementById('sixtyDaysAfter').innerText = appealDateFuture;
    }

    // Prefill IRO due date with 3 business days from today at 5pm EST.
    function fillDate(days) {
        let todayDate = new Date();
        let iroDueDate = todayDate.addBusinessDays(days);
        let formattedIROdate = formatDateIRO(iroDueDate) + ' at 5 pm EST';

        let iroDateElement = document.getElementById('iroDueDate');
        iroDateElement.value = formattedIROdate;
    }

    // Format date for readability for case type determination
    function formatDateClean(date) {
        let today = new Date(date);
        let year = today.getFullYear();
        let month = String(today.getMonth() + 1).padStart(2, '0');
        let day = String(today.getDate()).padStart(2, '0');

        let hyphenDate = `${month}-${day}-${year}`;
        return hyphenDate;
    }

    function formatDateIRO(date) {
        return new Date(date).toLocaleDateString("en-US", {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric',
        });
    }

    // Add non-business days (not using?)
    Date.prototype.addDays = function(days) {
        let result = new Date(this.valueOf());
        result.setDate(result.getDate() + days);
        return result;
    }

    // Subtract non-business days (e.g. 60 days ago)
    Date.prototype.subtractDays = function(days) {
        let result = new Date(this.valueOf());
        result.setDate(result.getDate() - days);
        return result;
    }

    // Add business days (e.g. add three days for IRO report due)
    Date.prototype.addBusinessDays = function(days) {
        // Create a copy of the date to avoid mutating the original object
        let result = new Date(this.valueOf());
        let addedDays = 0;

        while (addedDays < days) {
            // Add exactly 1 day
            result.setDate(result.getDate() + 1);

            // If it's not Sunday (0) and not Saturday (6), count it as a business day
            if (result.getDay() !== 0 && result.getDay() !== 6) {
                addedDays++;
            }
        }
        return result;
    }

    // Subtract business days (i.e. for reopening window)
    Date.prototype.subtractBusinessDays = function(days) {
        // Create a copy of the date to avoid mutating the original object
        let result = new Date(this.valueOf());
        let subtractedDays = 0;

        while (subtractedDays < days) {
            // Add exactly 1 day
            result.setDate(result.getDate() - 1);

            // If it's not Sunday (0) and not Saturday (6), count it as a business day
            if (result.getDay() !== 0 && result.getDay() !== 6) {
                subtractedDays++;
            }
        }
        return result;
    }

function caseTypeSelection() {
    // reauthorizationChecked();
    // reopeningChecked();
    // appealTypeChecked();
    let caseType = document.getElementById('caseType').value;
    let info = document.getElementById('information');
    let clin = document.getElementById('clinical');
    let conc = document.getElementById('conclusion');

    if (caseType === 'Reauthorization') {
        if(info.value === '') {
            let drugName = document.getElementById('drug').value;
            let drug = drugName.charAt(0).toUpperCase() + drugName.slice(1);
            info.value = drug + ' approved ';
        };

        if(clin.value == 'Chart note dated ') {
            clin.value = "Per previous approval \n\n" + clin.value;
        }
    } else if (caseType === 'Reopening') {
        if(info.value === '') {
            info.value = drug + ' denied ';
        };

        if(conc.value == '') {
            conc.value = 'Previously \n\nOn reopening, ';
        };
    } 

    if (caseType === ('First-level appeal' || 'Second-level appeal')) {
        showContent('appealDenialAdditionalNotes');
        showContent('appealDenialInputsDiv');
        showOverflow('appealDenialAdditionalNotes');
        changeTabIndex(appealBuilderList, 0);

        if(form.information.value === '') {
            let drugName = document.getElementById('drug').value;
            let drug = drugName.charAt(0).toUpperCase() + drugName.slice(1);
            form.information.value = drug + ' denied ';
        };

        //let conc = document.getElementById('conclusion');   
        if(form.conclusion.value == '') {
            form.conclusion.value = 'Previously \n\nNo reopening or peer-to-peer. \n\nOn appeal, ';
        };

        //formularyStatusReport();
    } else {
        hideContent('appealDenialAdditionalNotes');
        hideContent('appealDenialInputsDiv');
        hideOverflow('appealDenialAdditionalNotes');

        document.getElementById('appealReasonText').tabIndex = -1; // Doesn't work for some reason?!?!?!?!
        changeTabIndex(appealBuilderList, -1);
    }
    showAppealReason();
}


// When reauthorization is checked, add text to previous authorizations box and conclusions box (only if they are empty).
function reauthorizationChecked() {
    let form = document.getElementById('mainForm')
    // let check = document.getElementById('reauthorization');
    let info = document.getElementById('information');
    let drugName = document.getElementById('drug').value;
    let drug = drugName.charAt(0).toUpperCase() + drugName.slice(1);
    let clin = document.getElementById('clinical');

    if (form.caseType.value === 'Reauthorization') {
        if(info.value === '') {
            info.value = drug + ' approved ';
        };

        if(clin.value == 'Chart note dated ') {
            clin.value = "Per previous approval \n\n" + clin.value;
        }
    }
}


// When reopening is checked, add text to previous authorizations box and conclusions box (only if they are empty).
function reopeningChecked() {
    let check = document.getElementById('reopening');
    let info = document.getElementById('information');
    let drugName = document.getElementById('drug').value;
    let drug = drugName.charAt(0).toUpperCase() + drugName.slice(1);
    let conc = document.getElementById('conclusion');

    if (check.checked) {
        if(info.value === '') {
            info.value = drug + ' denied ';
        };

        if(conc.value == '') {
            conc.value = 'Previously \n\nOn reopening, ';
        };
    }
}

// When appealType is checked, add text to previous authorizations box and conclusions box (only if they are empty).
function appealTypeChecked() {
    let form = document.getElementById('mainForm');
    let check = document.getElementById('appealType');
    if (check.checked) {
        showContent('appealDenialAdditionalNotes');
        showContent('appealDenialInputsDiv');
        showOverflow('appealDenialAdditionalNotes');
        changeTabIndex(appealBuilderList, 0);

        //let info = document.getElementById('information');
        if(form.information.value === '') {
            let drugName = document.getElementById('drug').value;
            let drug = drugName.charAt(0).toUpperCase() + drugName.slice(1);
            form.information.value = drug + ' denied ';
        };

        //let conc = document.getElementById('conclusion');   
        if(form.conclusion.value == '') {
            form.conclusion.value = 'Previously \n\nNo reopening or peer-to-peer. \n\nOn appeal, ';
        };

        //formularyStatusReport();
    } else {
        hideContent('appealDenialAdditionalNotes');
        hideContent('appealDenialInputsDiv');
        hideOverflow('appealDenialAdditionalNotes');

        document.getElementById('appealReasonText').tabIndex = -1; // Doesn't work for some reason?!?!?!?!
        changeTabIndex(appealBuilderList, -1);
    }
    showAppealReason();
}

    function formularyStatusReport() {
        let reject70 = document.getElementById('nonFormulary');
        let formularyStatusResult = document.getElementById('formularyStatus');

        if (reject70.checked) {
            formularyStatusResult.innerText = 'Non-formulary';
        } else {
            formularyStatusResult.innerText = 'Formulary';
        }
    }


// When New Member checked. Uncertain if I want this left as adding to textbox (serves as good reminder) vs adding to buildNote() (takes up less space, works more consistently with less coding)
function addNewMember() {
    let conc = document.getElementById('conclusion');
    
    if(conc.value.slice(0,10) !== 'New member') {
        conc.value = 'New member. \n' + conc.value;
    } else {
        conc.value = conc.value.slice(13);
    };    
}

// When alternative diagnosis is clicked:
function changeDiagnosis() {
    let input = document.getElementById('diagnosis');
    let diagnosis = document.getElementById('alternativeDiagnosisButton');
    input.value = diagnosis.innerText;
    preSaveFunctions();
}

// When 'send to IRO' is checked:
function iroChecked() {
    iroInputList = [
        'typeOfRequest',        // A4
        'specialtyRequested',   // A5
        'iroDueDate',           // A6
        'A6copyButton',         // A6 Copy Button
        'iroClinicalSummary',   // A7
        'iroQuestions',         // A8
        'iroCopyButton',        // IRO copy button
    ]

    let check = document.getElementById('sendToIRO');
    let div = document.getElementById('iroNoteDiv');

    // If 'send to iro' checked, show inputs for IRO and do some calculations. 
    if (check.checked) {
        // Show IRO divs
        showContent('iroNoteDiv');
        showOverflow('iroNoteDiv');
        changeTabIndex(iroInputList, 0);

        // If IRO-MD specialty blank, prefill it with MD specialty from above field
        let mdPaste = document.getElementById('specialtyRequested'); // Also A5
        if (mdPaste.value == '') {
            let mdCopy = document.getElementById('mdSpecialty').value;
            let mdCopyCapitalized = mdCopy.charAt(0).toUpperCase() + mdCopy.slice(1); 
            mdPaste.value = mdCopyCapitalized;
        }

        // If IRO due date is blank, prefill with 3 business days out.
        let iroDateElement = document.getElementById('iroDueDate'); // Also A6
        if (iroDateElement.value == '') {
            fillDate(3);
        }
        
    } else {
        // Hide IRO divs
        hideContent('iroNoteDiv');
        hideOverflow('iroNoteDiv');
        changeTabIndex(iroInputList, -1);
    }
}

    const appealOptionsList = [
        'mdSpecialty',   // A1
        'sendToIRO',                // A2
        'appealDenial',             // A3
        'A3copyButton',             // A3 copy button
    ]

    const appealBuilderList = [
        'mdSpecialty',   // A1
        'sendToIRO',   
        'specialtyAppealsTrackerLink',
        'appealCondition',
        'appealReasonNo',
        'appealReasonYes',
        'newInformationNo',
        'newInformationYes',
        'appealDenialReasons',
        'criteriaName',
        'appealDenial2',
        'createDenialLanguageButton',
        'copyDenialLanguageButton',
    ]

    // Change tabIndex, typically to 0 or -1 in response to when content hidden or shown
    function changeTabIndex(list, newIndex) {
        for (i = 0; i < list.length; i++) {
            document.getElementById(list[i]).tabIndex = newIndex;
        }
    }

// Show or hide additional content (used for IRO preview, settings page diagnosis list and drug list)
function showList(target) {
    // Hide/show the entire div
    let div = document.getElementById(target);
    div.classList.toggle('hideContent');
    div.classList.toggle('showContent');
    div.classList.toggle('overflow-hidden');
    div.classList.toggle('overflow-visible');

    // Hide/show the Add symbol
    let add = target + 'Add';
    let addSpan = document.getElementById(add);
    addSpan.classList.toggle('hideContent');
    addSpan.classList.toggle('showContent');

    // Hide/show the Remove symbol
    let remove = target + 'Remove'
    let removeSpan = document.getElementById(remove);
    removeSpan.classList.toggle('hideContent');
    removeSpan.classList.toggle('showContent');
}

function showInfo(info) {
    let div = document.getElementById(info);
    div.classList.toggle('hideContent');
    div.classList.toggle('showContent');  
}

// When 'Copy' clicked for appeal and iro notes
function copyAppealText() {
    let element = 'appealDenial';
    let textToCopy = document.getElementById(element).value;
    navigator.clipboard.writeText(textToCopy);

    let spanName = element + 'Copied';
    animateText(spanName);
}

function copyIROtext() {
    let element = 'iroCompleteNote';
    let textToCopy = document.getElementById(element).innerText;
    navigator.clipboard.writeText(textToCopy);

    let spanName = element + 'Copied';
    animateText(spanName);
}

// show content
function showContent(element) {
    document.getElementById(element).classList.add('showContent');
    document.getElementById(element).classList.remove('hideContent');
}

function hideContent(element) {
    document.getElementById(element).classList.add('hideContent');
    document.getElementById(element).classList.remove('showContent');
}

function showOverflow(element) {
    document.getElementById(element).classList.add('overflow-visible');
    document.getElementById(element).classList.remove('overflow-hidden');
}

function hideOverflow(element) {
    document.getElementById(element).classList.add('overflow-hidden');
    document.getElementById(element).classList.remove('overflow-visible');
}



/* ||| Theme changer */
function changeTheme(theme) { 
    let htmlTag = document.getElementsByTagName("html")[0];
    
    if (htmlTag.hasAttribute("data-theme")) { // Check for non-default theme
        htmlTag.removeAttribute("data-theme"); // Remove theme
    }
    htmlTag.setAttribute("data-theme", theme); // Add new theme
    localStorage.setItem('theme', theme); // Save theme
}

/* || Settings */
const settingDefault = {
    alwaysShowQuantity: 'yes',
    autoselectAppeal: 'no',
    prefillQuantity: 'no',
    requireAge: 'no',  
    showAppealType: 'yes',
    showTimer: 'yes',
    showTheme: 'yes',
}

const savedTheme = localStorage.getItem('theme');
document.getElementsByTagName("html")[0].setAttribute("data-theme", savedTheme); // Add previously saved theme

function setDefaults() {
    for (setting in settingDefault) {
        let item = localStorage.getItem(settingDefault[setting]);
        if (item == '') {
            localStorage.setItem(setting, settingDefault[setting]);
        }
    }
}

/* || Timer */
var timeElapsed = 0;
var myTimer = 0;
var mm = 0;
var ss = 0;

function startTimer() {
    resetTimer();
    let time = document.getElementById('time');
    myTimer = setInterval(
        function() {
            timeElapsed += 1;
            ss = timeElapsed % 60;
            mm = Math.floor(timeElapsed/60);
            seconds = ss.toString().padStart(2, '0');
            timeShown = mm + ":" + seconds;
            time.innerText = timeShown;
        }, 1000
    );
}

function resetTimer() {
    timeElapsed = 0;
    ss = 0;
    mm = 0;
    seconds = 0;
    clearInterval(myTimer);
    document.getElementById('time').innerText = "0:00";
}




/* || Word prediction */
const drugNameList = [];
// Get list of drug names from each entry in drugDatabase
    for(i = 0; i < drugDatabase.length; i++) {
        drugNameList.push(drugDatabase[i].drug);
    }
    //drugNameList.toLowerCase();
    drugNameList.sort(function (a, b) {
        return a.localeCompare(b);
    });

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

// Text prediction, currently used for drug name and diagnosis.
function predictWords(
        inputLetters, // Value of the element being typed
        wordList, // Word bank 
        source, // ID of the element being typed
        destination // ID of the element the result will show up in
        ) {
            
    // Add event listenter is on window.onload function for when suggestion is accepted (i.e. press enter or tab)
    let suggestion = document.getElementById(destination);
    let wordName = document.getElementById(source);
    
    // If there is no text in the input, do not make a suggestion
    if(wordName.value == '') {
        suggestion.innerText = '';
        
    } else {
        // Case-insensitive regex that anchors to the beginning of the word
        let regex = new RegExp("^" + inputLetters, "i");
            
        // Filter the array and return top match. Change slice second number to include additional results.
        suggest = wordList.filter(word => regex.test(word)).slice(0, 1); 
        suggestion.innerText = suggest;    
    }
}

