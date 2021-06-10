import {createTopNav,createTabbedNav} from './components/navigation.js';
import {dateField,dropdownField,dropdownMultiField,timeField,fileField,checkError,checkErrorRadio,checkErrorCheckbox,checkErrorDropdown,checkErrorDropdownMulti} from './components/form.js';
import {createCTA} from './components/cta.js';
import {searchTable} from './components/tables.js';

function loadJS() {
	setTimeout(function(){
		// Top navigation
		createTopNav();

		// Tabbed navigation
		createTabbedNav();

		// CTA modal
		createCTA();

		// Datepicker field
		var date = document.querySelectorAll(".form__date");
		if (date != null) {
			dateField(date);
		}

		// Dropdown field
		var dropdown = document.querySelectorAll(".form__dropdown");
		if (dropdown != null) {
			dropdownField(dropdown);
		}

		// Dropdown multiple field
		var dropdownMulti = document.querySelectorAll(".form__dropdown-multi");
		if (dropdownMulti != null) {
			dropdownMultiField(dropdownMulti);
		}

		// Time field
		var time = document.querySelectorAll(".form__time");
		if (time != null) {
			timeField(time);
		}

		// File field
		var file = document.querySelectorAll(".form__file");
		if (file != null) {
			fileField(file);
		}

		// Table
		var table = document.querySelector(".table");
		if (table != null) {
			searchTable(table);
		}

		// Check error for general field types
		var error = document.querySelectorAll(".form__field");
		if (error != null) {
			checkError(error);
		}

		// Check error for radio group
		var errorRadio = document.querySelectorAll(".form__radio");
		if (errorRadio != null) {
			checkErrorRadio(errorRadio);
		}

		// Check error for checkbox group
		var errorCheckbox = document.querySelectorAll(".form__checkbox-group");
		if (errorCheckbox != null) {
			checkErrorCheckbox(errorCheckbox);
		}

		// Check error for dropdown
		var errorDropdown = document.querySelectorAll(".form__dropdown");
		if (errorDropdown != null) {
			checkErrorDropdown(errorDropdown);
		}

		// Check error for dropdown mulit
		var errorDropdownMulti = document.querySelectorAll(".form__dropdown-multi");
		if (errorDropdownMulti != null) {
			checkErrorDropdownMulti(errorDropdownMulti);
		}

	}, 50);
}

window.addEventListener('load', loadJS, false);
window.addEventListener('hashchange', loadJS, false);