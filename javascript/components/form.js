function dateField(target) {
	target.forEach(el => {
		let datepicker = new Datepicker(el, {
			format: 'DD, d MM yyyy'
		});
	});
}

function dropdownField(target) {
    target.forEach(function(el) {
        let sort = false;

        if (el.hasAttribute("data-sort")) {
            sort = true;
        }
        if (el.classList.contains('form--half')) {
            let choices = new Choices(el, {
                removeItemButton: true,
                shouldSort: sort,
                classNames: {
                    containerOuter: 'choices form--half',
                }
            });
        } else {
            let choices = new Choices(el, {
                removeItemButton: true,
                shouldSort: sort,
            });
        }
    });
}

function dropdownMultiField(target) {
    target.forEach(function(el) {
        let sort = false;

        if (el.hasAttribute("data-sort")) {
            sort = true;
        }
        if (el.classList.contains('form--half')) {
            let choices = new Choices(el, {
                removeItemButton: true,
                shouldSort: sort,
                classNames: {
                    containerOuter: 'choices form--half',
                }
            });
        } else {
            let choices = new Choices(el, {
                removeItemButton: true,
                shouldSort: sort,
            });
        }
    });
}

function timeField(target) {
    target.forEach(el => {
        el.addEventListener("keypress", (e) => {
            let allowedChars = '0123456789:ap';
            function contains(stringValue, charValue) {
                return stringValue.indexOf(charValue) > -1;
            }
            let invalidKey = e.key.length === 1 && !contains(allowedChars, e.key) || e.key === ':' && contains(e.target.value, ':');
            invalidKey && e.preventDefault();
        });
    });
}

function fileField(target) {
    target.forEach(el => {
        let a11yFUP = new A11yFileUpload();
        a11yFUP.init(el);
    });
}

function checkError(target) {
    target.forEach(el => {
        if (el.querySelector("input:not(.choices__input):not([type='radio'])") != null) {
            el.querySelector("input:not(.choices__input):not([type='radio'])").addEventListener("blur", (e) => {
                if (e.target.value != "") {
                    el.classList.remove("error");
                }
            });
        }
    });
}

function checkErrorRadio(target) {
    target.forEach(element => {
        if (element.querySelectorAll("input:not(.choices__input)") != null) {
            element.querySelectorAll("input:not(.choices__input)").forEach(el => {
                el.addEventListener("blur", (e) => {
                    if (e.target.checked == true) {
                        element.classList.remove("error");
                    }
                });
            });
        }
    });
}

function checkErrorCheckbox(target) {
    target.forEach(element => {
        element.querySelectorAll("input").forEach(el => {
            el.addEventListener("blur", (e) => {
                if (el.parentNode.parentNode.querySelectorAll("input:checked").length > 0) {
                    el.parentNode.parentNode.classList.remove("error");
                }
            });
        });
    });  
}

function checkErrorDropdown(target) {
    target.forEach(function(el,index) {
        let placeholder = el.querySelector("option").innerHTML;
        el.parentNode.parentNode.addEventListener('blur', function(event) {
            if (target[index][0].childNodes[0].nodeValue != placeholder) {
                el.parentNode.parentNode.parentNode.classList.remove("error");
            }
        });
    });
}

function checkErrorDropdownMulti(target) {
    target.forEach(function(el,index) {
        el.parentNode.parentNode.addEventListener('focusout', function(event) {
            if (target[index].firstChild != null) {
                el.parentNode.parentNode.parentNode.classList.remove("error");
            }
        });
    });
}

export {dateField,dropdownField,dropdownMultiField,timeField,fileField,checkError,checkErrorRadio,checkErrorCheckbox,checkErrorDropdown,checkErrorDropdownMulti};