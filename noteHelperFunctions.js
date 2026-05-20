window.onload = function() {
    let result = localStorage.getItem('appealInternal');
    let element = document.getElementById('appealInternal');
    let elementDiv = document.getElementById('appealInternalDiv');

    if (result == 'yes') {
        elementDiv.classList.add("showInput");
    } else {
        elementDiv.classList.add("hideInput");
    }
    
    let result2 = localStorage.getItem('alwaysShowQuantity');
    let element2 = document.getElementById('alwaysShowQuantity');
    let elementDiv2 = document.getElementById('quantityDiv');

    if (result2 == 'yes') {
        elementDiv2.classList.add("showInput");
    } else {
        elementDiv2.classList.add("hideInput");
        document.getElementById('quantity').tabIndex = -1;
        document.getElementById('falseQL').tabIndex = -1;
    }
};

