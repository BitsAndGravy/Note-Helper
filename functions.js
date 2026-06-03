/* || Dictionaries and constants */
const drugDatabase = [ // for getQuantity()
    {
        drug: "Adderall tablet",
        quantity: "30/30",
        diagnosis: "ADHD", 
        formulary: false, 
    },  
    {
        drug: "Adderall XR",
        quantity: "30/30",
        diagnosis: "ADHD", 
        formulary: false, 
    },  
    {
        drug: "Aimovig",
        quantity: "1/25",
        diagnosis: "migraine prophylaxis", 
    },  
    {
        drug: "Ajovy",
        quantity: "1.5/30",
        diagnosis: "migraine prophylaxis", 
        formulary: false, 
    },  
    {
        drug: "Auvelity",
        quantity: "60/30",
        diagnosis: "major depressive disorder", 
    },  
    {
        drug: "azelaic acid",
        quantity: "50/30",
        diagnosis: "rosacea", 
        altDiagnosis: "acne vulgaris",
    },  
    {
        drug: "Caplyta",
        quantity: "30/30",
        diagnosis: "bipolar disorder", 
        altDiagnosis: "schizophrenia",
    },  
    {
        drug: "Creon",
        quantity: "300/90",
        diagnosis: "exocrine pancreatic insufficiency", 
    },  
    {
        drug: "Dexcom G6 sensor",
        quantity: "3/30",
        altQuantity: "",
        diagnosis: "T2DM", 
        altDiagnosis: "T1DM", 
    },  
    {
        drug: "Dexcom G6 receiver",
        quantity: "1/30",
        altQuantity: "",
        diagnosis: "T2DM", 
        altDiagnosis: "T1DM", 
    },   
    {
        drug: "Dexcom G6 transmitter",
        quantity: "1/90",
        altQuantity: "",
        diagnosis: "T2DM", 
        altDiagnosis: "T1DM", 
    },   
    {
        drug: "Dexcom G7 receiver",
        quantity: "1/30",
        diagnosis: "T2DM",
        altDiagnosis: "T1DM", 
    }, 
    {
        drug: "Dexcom G7 sensor",
        quantity: "2/30",
        altQuantity: "3/30",
        diagnosis: "T2DM", 
        altDiagnosis: "T1DM", 
    },   
    {
        drug: "dulaglutide",
        quantity: "2/28",
        diagnosis: "T2DM", 
    },     
    {
        drug: "Emgality 100 mg",
        quantity: "3/28",
        diagnosis: "migraine prophylaxis", 
    },  
    {
        drug: "Emgality 120 mg",
        quantity: "2/28",
        diagnosis: "migraine prophylaxis", 
    },  
    {
        drug: "fluticasone nasal spray",
        quantity: "16/30",
        diagnosis: "allergic rhinitis", 
        formulary: false, 
    },  
    {
        drug: "Foundayo",
        quantity: "30/30",
        diagnosis: "obesity", 
        formulary: false, 
    },  
    {
        drug: "FreeStyle Libre 3+ sensor",
        quantity: "2/30",
        altQuantity: "3/30",
        diagnosis: "T2DM", 
        altDiagnosis: "T1DM", 
        formulary: false, 
    },  
    {
        drug: "Gemtesa", // tablet
        quantity: "30/30",
        diagnosis: "overactive bladder", 
        formulary: false, 
    },  
    {
        drug: "icosapent ethyl",
        quantity: "120/30",
        diagnosis: "hyperlipidemia",
    }, 
    {
        drug: "ivermectin", // 1% topical cream
        quantity: "45/30",
        diagnosis: "rosacea",
    }, 
    {
        drug: "Jatenzo", // capsule
        quantity: "60/30",
        diagnosis: "testicular hypofunction",
        formulary: false,  
    },  
    {
        drug: "Jublia",
        quantity: "4/30",
        diagnosis: "tinea unguium",
        formulary: false, 
    }, 
    {
        drug: "lamotrigine ER",
        quantity: "30/30",
        altQuantity: "",
        diagnosis: "seizures", 
        altDiagnosis: "bipolar disorder", 
    }, 
    {
        drug: "Lantus pen",
        quantity: "15/30",
        diagnosis: "T2DM", 
        formulary: false, 
    },  
    {
        drug: "lidocaine", // 5% topical patch
        quantity: "30/30", // suggested
        diagnosis: "neuropathic pain",
    }, 
    {
        drug: "liraglutide (Victoza)",
        quantity: "9/30",
        diagnosis: "T2DM",
    },
    {
        drug: "liraglutide (Saxenda)",
        quantity: "9/30",
        diagnosis: "obesity",
        formulary: false,

    },
    {
        drug: "metformin ER 1,000 mg osm-tab", // nasal spray
        quantity: "60/30",
        diagnosis: "T2DM",
        formulary: false,  
    },  
    {
        drug: "metformin ER 1,000 mg gastr-tab", // nasal spray
        quantity: "60/30",
        diagnosis: "T2DM",
        formulary: false,  
    },  
    {
        drug: "Miebo",
        quantity: "3/30",
        diagnosis: "dry eye syndrome",
    }, 
    {
        drug: "Mounjaro",
        quantity: "2/28",
        diagnosis: "T2DM",
    }, 
    {
        drug: "Natesto", // nasal spray
        quantity: "7.320/30",
        diagnosis: "testicular hypofunction",
        formulary: false,  
    },  
    {
        drug: "Neffy",
        quantity: "2/30",
        diagnosis: "anaphylaxis",
    }, 
    {
        drug: "Nurtec",
        quantity: "16/30",
        diagnosis: "migraines",
        formulary: false, 
    }, 
    {
        drug: "Omega-3",
        quantity: "120/30",
        diagnosis: "hyperlipidemia", 
    },   
    {
        drug: "Omnipod 5 pods",
        quantity: "10/30",
        diagnosis: "T1DM",
    }, 
    {
        drug: "Opzelura", // cream
        quantity: "60/30",
        diagnosis: "atopic dermatitis",
        altDiagnosis: "psoriasis",  
        formulary: false, 
    },  
    {
        drug: "Ozempic", 
        quantity: "3/28",
        diagnosis: "T2DM",
    },
    {
        drug: "Ozempic pill",
        quantity: "30/30",
        diagnosis: "T2DM",
    }, 
    {
        drug: "Qulipta",
        quantity: "30/30",
        diagnosis: "migraine prophylaxis",
    },
    {
        drug: "Restasis",
        quantity: "60/30",
        diagnosis: "keratoconjunctivitis",
    },
    {
        drug: "Rybelsus", 
        quantity: "30/30",
        diagnosis: "T2DM",
    }, 
    {
        drug: "tadalafil", 
        quantity: "30/30", 
        diagnosis: "male erectile dysfunction", 
    }, 
    {
        drug: "tadalafil 10 mg", 
        quantity: "30/30", 
        diagnosis: "male erectile dysfunction", 
        formulary: false, 
    }, 
    /* Generic drug name not specific enough - could be Zepbound or Mounjaro. {
        drug: "tirzepatide",
        quantity: "2/28",
        diagnosis: "T2DM",
    }, */
    {
        drug: "testosterone 1% gel packet",
        quantity: "60/30",
        diagnosis: "testicular hypofunction",
        altDiagnosis: "gender identity disorder", 
    },   
    {
        drug: "testosterone 1.62% gel pump",
        quantity: "75/30",
        diagnosis: "testicular hypofunction",
        altDiagnosis: "gender identity disorder",
        formulary: false, 
    },   
    {
        drug: "testosterone 1.62% gel packet",
        quantity: "75/30",
        diagnosis: "testicular hypofunction",
        altDiagnosis: "gender identity disorder",
        formulary: false, 
    },  
    {
        drug: "testosterone 10 mg gel pump",
        quantity: "60/30",
        diagnosis: "testicular hypofunction",
        altDiagnosis: "gender identity disorder", 
    },  
    {
        drug: "testosterone", // Shorthand for cypionate vials, since it is the most common.
        quantity: "6/84",
        diagnosis: "testicular hypofunction",
        altDiagnosis: "gender identity disorder", 
    },   
    {
        drug: "Trulicity",
        quantity: "2/28",
        diagnosis: "T2DM",
    }, 
    {
        drug: "Ubrelvy",
        quantity: "16/30",
        diagnosis: "acute migraine treatment",
    },
    {
        drug: "Victoza", 
        quantity: "9/30",
        diagnosis: "T2DM",
    },
    {
        drug: "Vraylar",
        quantity: "30/30",
        diagnosis: "bipolar disorder",
        formulary: false, 
    }, 
    {
        drug: "Wegovy HD pen",
        quantity: "3/28",
        diagnosis: "obesity",
        formulary: false, 
    }, 
    {
        drug: "Wegovy pen",
        quantity: "2/28",
        diagnosis: "obesity",
        formulary: false, 
    }, 
    {
        drug: "Winlevi", 
        quantity: "60/30",
        diagnosis: "acne vulgaris",
        formulary: false, 
    },
    {
        drug: "Wegovy tablet",
        quantity: "30/30",
        diagnosis: "obesity",
        formulary: false,
    }, 
    {
        drug: "Xdemvy",
        quantity: "10/42",
        diagnosis: "infestation by Demodex mites",
    }, 
    {
        drug: "Xifaxan",
        quantity: "42/14",
        diagnosis: "irritable bowel syndrome-diarrhea",
    }, 
    {
        drug: "Xyosted",
        quantity: "2/28",
        diagnosis: "testicular hypofunction",
        formulary: false, 
    }, 
    {
        drug: "Zavzpret",
        quantity: "6/30",
        diagnosis: "acute migraine treatment",
        formulary: false, 
    }, 
    {
        drug: "Zepbound",
        quantity: "2/28",
        diagnosis: "OSA",
        formulary: false,
    }, 
]

const checkboxBook = {
    appealExternal: {
        isChecked: '-- SEND TO IRO --',
        notChecked: '',
    },
    
    chart: {
        isChecked: 'No relevant documents in Chart View. ', 
        notChecked: ''
    },
    expedited: {
        isChecked: 'Expedited ',
        notChecked: ''
    },
    falseQL: {
        isChecked: 'Not a true QL request; ', 
        notChecked:''
    },
    gender: {
        isChecked: 'Female', 
        notChecked:'Male'
    },
    medicalAuthorizations: {
        isChecked: 'No relevant medical authorizations.',
        notChecked: '',
    },
    qset: {
        isChecked: 'approval', 
        notChecked:'denial'
    },
    records: {
        isChecked: 'Records were not submitted with request',
        notChecked: '',
    },
    snapshot: {
        isChecked: 'No relevant paid claims. ',
        notChecked:''
    },
    type: {
        isChecked: 'Reauthorization',
        notChecked:'Initial'
    },
    urgent: {
        isChecked: 'Urgent ',
        notChecked:''
    },
}

const answer = {
    age: "[age]",
    appealExternal: "[appealExternal]",
    appealInternal: "[appealInternal]", 
    chart: "[chart]", 
    claims: "[claims]", 
    clinical: "[clinical]", 
    comment: "[comment]", 
    conclusion: "[conclusion]", 
    diagnosis: "[diagnosis]",
    drug: "[drug]",
    expedited: "[expedited]", 
    falseQL: "[falseQL]", 
    gender: "[gender]", 
    information: "[information]", 
    medicalAuthorizations: "[medicalAuthorizations]",
    member: "[member]", 
    properQuantity: "[properQuantity]", 
    qset: "[qset]", 
    quantity: "[quantity]",
    records: "[records]", 
    reject: "[reject]", 
    snapshot: "[snapshot]", 
    source: "[source]",
    state: "[state]", 
    type: "[type]", 
    urgent: "[urgent]",     
}

const saveNames = [ // Used for saveText()
    'noteOne',  // Most recent note
    'noteTwo', // Note previously worked on
    'noteThree'
]

const saveList = [] // Notes will be saved here with saveText()

/* || Buttons */
/* ||| Save button */
function saveButton() { // After clicking the Save button
    checkForm();
}

function checkForm() { // Used for the Save button. checks if age input is filled out. If so, proceed to process results and save.
    let requirement = document.getElementById("age");
    if (requirement.value == '') {
        alert("Please enter the member's age");
    } else {
        processResults();
        buildNote();
        saveNote();
    }
}

    function processResults() { // takes all of the inputs and places them into the finished note.
        getChecked();       // Used for input type="checkbox"
        getReject();        // Used to interpret the three checkboxes from 7-reject code    
        getOption();        // Used for input type="select", "text"
        getText();          // Used for textarea, could also be used for input type='text'
        checkQL();          // Checks if the 'false QL' box was selected
    }

        function getChecked() { // Used for input type="checkbox"
            const checkboxList = [
                "appealExternal",
                "chart", 
                "expedited", 
                "falseQL", 
                "gender", 
                "medicalAuthorizations",
                "qset",
                "records",
                "snapshot", 
                "type", 
                "urgent", 
            ];
            
            for (k = 0; k < checkboxList.length; k++) {
                let item = checkboxList[k]
                let ele = document.getElementsByName(item);
                for (i = 0; i < ele.length; i++) {
                    if (ele[i].checked) {
                        answer[checkboxList[k]] = ele[i].value;
                        break;
                    } else { // What to do if the checkbox is not selected - helpful for 'resetting' inputs.
                        answer[item] = checkboxBook[item].notChecked;
                    }
                }
            }
        }

        function getReject() {
            let checks = document.getElementsByName('reject');
            if(checks[0].checked) {
                answer.reject = "75-Standard PA";
            }
            if (checks[0].checked && checks[1].checked) {
                answer.reject = "75 and 76-Standard PA with QL";
            } else if (checks[1].checked) {
                answer.reject = "76-Quantity Limit";
            }
            if (checks[1].checked && checks[2].checked) {
                answer.reject = "70 and 76-Non-formulary with QL";
            } else if (checks[2].checked) {
                answer.reject = "70-Non-formulary";
            }
        }

        function getOption() {// Used for input type="select", "text"
            const options = [
                "#source", 
                "#state", 
                "#drug", 
                "#diagnosis", 
                "#quantity", 
                "#age", 
                "#member", 
                "#properQuantity",
                "#comment", 
            ]

            for (k = 0; k < options.length; k++) {
                let elf = document.querySelector(options[k]).value;
                let obj = options[k].slice(1);
                answer[obj] = elf;

            }
        }

        function getText() { // Used for textarea, could also be used for input type='text'
            textareaList = [
                "information", 
                "claims", 
                "clinical", 
                "conclusion"
            ]

            for (r = 0; r < textareaList.length; r++) {
                let item = textareaList[r];
                let textName = document.getElementById(item).value;
                answer[item] = textName;
            }
        }  

        function checkQL() { // Checks if the 'false QL' box was selected
            let check = document.getElementById('falseQL');
            let quantity = document.getElementById('properQuantity');

            if(check.checked) {
                answer.properQuantity = quantity.value;
            } else {
                answer.properQuantity = "";
            }
        }

    function buildNote() {
        
        checkModifiers();

        let conspectusHeeader = "SUMMARY " + "\n";
        let conspectusBody = 
            answer.urgent + answer.expedited + answer.state + " " + answer.source + ". " + 
            answer.gender + " age " + answer.age + ". " +
            answer.type + " for " + answer.drug + quantityText + answer.quantity + " for " + answer.diagnosis + ". " + answer.reject + ". " // + "Provider response led to " + answer.qset + ". "


        let historyHeader = "\n\n" + "HISTORY " + "\n";
        let historyBody = 
            "Member since " + answer.member + ". \n" + 
            answer.information + snapNewLine +
            answer.snapshot + answer.medicalAuthorizations + claimsNewLine + answer.claims;


        let clinicalHeader = "\n\n" + "CLINICAL " + "\n";
        let clinicalBody = 
            answer.records + answer.chart + clinicalNewLine + 
            answer.clinical + clinicalExtraLine;
        

        let conclusionHeader = "\n" + "RECOMMENDATION " + "\n";
        let conclusionBody = answer.conclusion;
        

        let conspectus = conspectusHeeader + conspectusBody;
        let history = historyHeader + historyBody;
        let clinical = clinicalHeader + clinicalBody;
        let conclusion = conclusionHeader + conclusionBody + techNote;

        let fullNote = appealInternalText + conspectus + history + clinical + conclusion;

        saveList.unshift(fullNote);
    }

        function checkModifiers() {
            checkSettings(); // Adds appropriate text for options selected
            addQL(); // If 'False QL' is checked, add a tech note at the bottom of the note.
            checkInfo(); // If field for previous authorizations is blank, replace it with this text.
            checkBoxes(); // Formats the note so there is one new line between each heading.
            checkQuantity(); // If hidden, make blank; if quantity field blank, do not add 'for #qty/days' to note.
        }
        
            function checkSettings() {
                let result = localStorage.getItem('appealInternal');
                if(result === 'yes') {
                    let mdSpecialty = document.getElementById('appealInternalQuestion').value;
                    if(mdSpecialty == "") {
                        appealInternalText = '';
                    } else {
                        answer.appealInternal = mdSpecialty;
                        appealInternalText = "-- TO BE REVIEWED BY " + answer.appealInternal + " SPECIALTY --" + "\n\n";
                    }
                } else {
                    appealInternalText = "";
                }
            }

            function addQL() { // If 'False QL' is checked, add a tech note at the bottom of the note.
                let check = document.getElementById('falseQL');
                if(check.checked) {
                    techNote = "\n\n" + answer.falseQL + answer.comment + answer.properQuantity + ".";
                } else {
                    techNote = "";
                };
            }

            function checkInfo() { // If field for previous authorizations is blank, replace it with this text.
                if(answer.information == "") {
                    answer.information = "No previous authorizations. "
                };
            }

            function checkBoxes() {
                
                // If both snapshot (claims) and medicalAuthorizations are unselected, do not add a new line.
                let snap = answer.snapshot;
                let med = answer.medicalAuthorizations;
                if (snap == "" && med == "") {
                    snapNewLine = "";
                } else {
                    snapNewLine = "\n";
                }

                let claims = answer.claims;
                if (claims == "") {
                    claimsNewLine = "";
                } else {
                    claimsNewLine = "\n";
                }

                // If both Chart and Records are unselected, do not add a new line.
                let rec = answer.records;
                let chart = answer.chart;
                if (rec == "" && chart == "") {
                    clinicalNewLine = "";
                } else {
                    clinicalNewLine = "\n";
                }

                // If Clinicals is empty, do not add a new line.
                let clin = answer.clinical;
                if (clin == "") {
                    clinicalExtraLine = "";
                } else {
                    clinicalExtraLine = "\n";
                }
            }

            function checkQuantity() {
                // Check if quantity is shown. If not, make it blank.
                let isShown = document.getElementById('quantityDiv').className;
                if(isShown === 'hideInput') {
                    answer.quantity = "";
                }
                
                // If quantity is blank, do not show it in the note.
                if(answer.quantity == "") {
                    quantityText = "";
                } else {
                    quantityText = ' #';
                }
            }

    function saveNote() { // Copies note to clipboard and outputs preview at the bottom of the page.
        saveText();
        copyText();
    }

        // Saves the note to the bottom of the page for reference.
        function saveText() { 
            if (saveList.length > 3) {
                saveList.pop(); // Keep saveList to length of 3.
            };
            for(i in saveList) // Display the saved notes.
                document.getElementById(saveNames[i]).innerText = saveList[i];
        }

        // Copies text to clipboard.
        function copyText() { 
            let textToCopy = saveList[0];
            navigator.clipboard.writeText(textToCopy);
            animateText("textCopied");
        }

/* ||| Reset button */
function resetForm() { // After clicking the Reset button
    document.getElementById('form1').reset();
    document.getElementById('form2').reset();
    document.getElementById('form3').reset();

    resetTextareaSize();
    hideExtras();
    animateText('resetForm');
    gotoFirstField();
    resetTimer();
}

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

    function hideExtras() {
        let showQuantity = document.getElementById('quantityDiv');
        let showQuantitySettingChecked = localStorage.getItem('alwaysShowQuantity');
        let quantity = document.getElementById('properQuantity');
        let quantityDiv = document.getElementById('properQuantityDiv');
        let comment = document.getElementById('comment');
        let commentDiv = document.getElementById('commentDiv');
        
        if(showQuantitySettingChecked === 'no') {
            // Hide the quantity, falseQL, and comment input    
                showQuantity.classList.add('hideInput');
                showQuantity.classList.remove('showInput');

                quantityDiv.classList.add('hideInput');
                quantityDiv.classList.remove('showInput');

                commentDiv.classList.add('hideInput');
                commentDiv.classList.remove('showInput');

            // Skip when tabbing through
                document.getElementById('quantity').tabIndex = -1;
                document.getElementById('falseQL').tabIndex = -1;
                quantity.tabIndex = -1;
                comment.tabIndex = -1;
        }

        showProperQuantity();
    }

        function showProperQuantity() { // Also triggered by changing properQuantity
            let destination = document.getElementById('showProperQuantity');
            let source = document.getElementById('properQuantity');
            destination.innerText = "#" + source.value + ".";
        }

    function gotoFirstField() {
        document.getElementById('drug').focus();
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

/* ||| Expansion animation, e.g. to show quantity */
function expansionAnimation() {
    let div = document.getElementById('quantityDiv');
    let currentClass = div.className;

    if(currentClass === 'showInput') {
        div.className = 'hideInput';
        setTimeout(function() {
            div.style.display = 'none';
        }, 2000);
    } else {
        div.className = 'showInput';
        setTimeout(function() {
            div.style.display = 'block';
        }, 2000)
    }
}



/* || Input responses */

// Triggers when drug name changed. Checks if the drug name is in the database, returns diagnosis and qty/days.
function getQuantity() { 
    startTimer();

    let drugName = document.getElementById('drug').value;
    let prefillQuantity = localStorage.getItem('prefillQuantity');
    let alwaysShowQuantity = localStorage.getItem('alwaysShowQuantity');

    for(i = 0; i < drugDatabase.length; i++) { // iterate through all drugs in the database
        if(drugDatabase[i].drug.toLowerCase() == drugName.toLowerCase()) { // If drug found in database, then:
            if(prefillQuantity == 'yes') {
                document.getElementById('quantity').value = drugDatabase[i].quantity; // Prefill quantity field
            } else {
                document.getElementById('quantity').value = ""; // Leave quantity field blank
            }
            document.getElementById('diagnosis').value = drugDatabase[i].diagnosis; // Prefill diagnosis field
            if(drugDatabase[i].formulary == false) { // Checks if non-formulary, checks the checkbox and shows 8-quantity and 9-falseQL
                document.getElementById('nonFormulary').checked = true;
                document.getElementById('standardPA').checked = false;
                if(alwaysShowQuantity == 'no') {
                    document.getElementById('quantityDiv').classList.add('showInput');
                    document.getElementById('quantityDiv').classList.remove('hideInput');
                    document.getElementById('quantity').tabIndex = 0;
                    document.getElementById('falseQL').tabIndex = 0;
                }
            }
            break;
        } else {
            document.getElementById('quantity').value = "";
            document.getElementById('diagnosis').value = "";
            document.getElementById('nonFormulary').checked = false;
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
    let quantity = document.getElementById('properQuantity');
    let quantityDiv = document.getElementById('properQuantityDiv');
    let comment = document.getElementById('comment');
    let commentDiv = document.getElementById('commentDiv');

    if (check.checked) {
        quantityDiv.classList.add('showInput');
        quantityDiv.classList.remove('hideInput');
        quantity.tabIndex = 0;

        commentDiv.classList.add('showInput');
        commentDiv.classList.remove('hideInput');
        comment.tabIndex = 0;
    } 
    else {
        quantityDiv.classList.add('hideInput');
        quantityDiv.classList.remove('showInput');
        quantity.tabIndex = -1;

        commentDiv.classList.add('hideInput');
        commentDiv.classList.remove('showInput');
        comment.tabIndex = -1;
    }
}

// When 70 or 76 is checked/unchecked.
function showQuantity() {
    let alwaysShowQuantity = localStorage.getItem('alwaysShowQuantity'); // Check settings

    if(alwaysShowQuantity == 'no') {    // If 'always show quantity' is not selected in settings:
        let quantityLimit = document.getElementById('quantityLimit');
        let nonFormulary = document.getElementById('nonFormulary');
        let quantity = document.getElementById('quantityDiv');

        if ((quantityLimit.checked || nonFormulary.checked) || (quantityLimit.checked && nonFormulary.checked)) { //If 70 and/or 76 is checked:
            // Add class to make it visible, remove class that hides it
            quantity.classList.add('showInput');
            quantity.classList.remove('hideInput');

            // Adjust tabIndex so you can tab to the input
            document.getElementById('quantity').tabIndex = 0;
            document.getElementById('falseQL').tabIndex = 0;

            if(nonFormulary.checked) { // If 70 is selected, unselect 75.
                document.getElementById('standardPA').checked = false;
            }
        } 
        else { // If neither 70 nor 76 are selected:
            quantity.classList.add('hideInput');
            quantity.classList.remove('showInput');

            // Skip the input when tabbing because it's hidden now
            document.getElementById('quantity').tabIndex = -1;
            document.getElementById('falseQL').tabIndex = -1;
            
            // Since qty and falseQL are hidden, uncheck the box
            document.getElementById('falseQL').checked = false;

            // Run function that hides falseQL stuff (will hide it because we just unchecked the box to show it)
            showQL();

        }
    } // If setting is 'yes' to always show quantity, do nothing 
}

function reopeningChecked() {
    let info = document.getElementById('information');
    let drugName = document.getElementById('drug').value;
    let drug = drugName.charAt(0).toUpperCase() + drugName.slice(1);
    let conc = document.getElementById('conclusion');

    if(info.innerText == '') {
        info.value = drug + ' denied ';
    };

    if(conc.value = '') {
        conc.value = 'Previously ';
    };
}

// When New Member checked. Uncertain if I want this left as adding to textbox (serves as good reminder) vs adding to buildNote() (takes up less space, works more consistently with less coding)
function addNewMember() {
    let conc = document.getElementById('conclusion');
    if(conc.value == "") {
        conc.value = "New member. "
    }
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

const savedTheme = localStorage.getItem('theme');
document.getElementsByTagName("html")[0].setAttribute("data-theme", savedTheme); // Add previously saved theme


// Triggers when properQuantity field is changed.
// see showProperQuantity() defined above



/* || Saved notes */

// In the functions below, consider the Note to be the <div>, and the Edit to be the <textarea>.

/* ||| Edit button */
const temporarySavedNote = {
    previous: "", 
    new: ""
}

function editButton(noteID) { // Used with Edit button.
    showThis(noteID, 'Edit');
    editNote(noteID);
    hideThis(noteID, 'Text');
}

    function showThis(note, suffix) {
        noteToShow = note + suffix;
        document.getElementById(noteToShow).style.display = 'block';
    }

    function editNote(note) { // Edits saved notes; take text in the span and paste it into a textarea, used with editButton();
        temporarySavedNote.old = document.getElementById(note).innerText;
        let paste = 'edit' + note;
        document.getElementById(paste).value = temporarySavedNote.old;
    }

    function hideThis(note, suffix) {
        editToHide = note + suffix;
        document.getElementById(editToHide).style.display = 'none';
    }


    
/* ||| Save button */
function savedNoteButton (noteID) { // Used with the 'Save' button on each of the saved notes.
    showThis(noteID, 'Text'); // Defined above
    resaveNote(noteID);
    hideThis(noteID, 'Edit'); // Defined above
    copyTextDuplicate(noteID);
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



/* ||| Cancel button */
function cancelButton (noteID) {
    showThis(noteID, 'Text');
    cancelEdit(noteID);
    hideThis(noteID, 'Edit');
}

    function cancelEdit(note) {
        let cancelThis = 'edit' + note;
        let textToCancel = document.getElementById(cancelThis);
        let originalText = document.getElementById(note);
        textToCancel.value = originalText.innerText;
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