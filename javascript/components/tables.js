function searchTable(target) {
	// Text search
	var input = document.querySelector(".form__search-text");
	input.addEventListener("keyup", (e) => {
		var filter = input.value.toUpperCase();
		var rows = target.querySelector("tbody").rows;

		for (var i = 0; i < rows.length; i++) {
			var col1 = rows[i].cells[0].textContent.toUpperCase();
			var col2 = rows[i].cells[1].textContent.toUpperCase();
			var col3 = rows[i].cells[2].textContent.toUpperCase();
			var col4 = rows[i].cells[3].textContent.toUpperCase();
			if (col1.indexOf(filter) > -1 || col2.indexOf(filter) > -1 || col3.indexOf(filter) > -1 || col4.indexOf(filter) > -1) {
				rows[i].classList.remove("hide");
			} else {
				rows[i].classList.add("hide");
			}      
		}
	});

	// Gender dropdown
	var dropdown1 = document.querySelector("[name='gender']");
	dropdown1.addEventListener("change", (e) => {
		var filter = dropdown1.value;
		var rows = target.querySelector("tbody").rows;

		for (var i = 0; i < rows.length; i++) {
			var col2 = rows[i].cells[1].textContent;
			if (col2.indexOf(filter) > -1) {
				rows[i].classList.remove("hide1");
			} else {
				rows[i].classList.add("hide1");
			}      
		}
	});

	// Languages dropdown
	var dropdown2 = document.querySelector("[name='language']");
	dropdown2.addEventListener("change", (e) => {
		var container = dropdown2.nextSibling;
		var filterArray = Array.prototype.slice.call(container.querySelectorAll(".ss-value-text"));
		var textFilterArray = Array.from(filterArray, el => el.textContent);
		var rows = target.querySelector("tbody").rows;
		for (var i = 0; i < rows.length; i++) {
			var col2 = rows[i].cells[2].textContent;
			var col2Array = col2.split(', ');
			if (filterArray.length > 0) {
				function findOne(array1, array2) {
				    return array2.some(function(value) {
				        return array1.indexOf(value) >= 0;
				    });
				};
				if (findOne(textFilterArray,col2Array)) {
					rows[i].classList.remove("hide2");
				} else {
					rows[i].classList.add("hide2");
				}
			} else {
				rows[i].classList.remove("hide2");
			}
		}
	});

	// Status dropdown
	var dropdown3 = document.querySelector("[name='status']");
	dropdown3.addEventListener("change", (e) => {
		var filter = dropdown3.value;
		var rows = target.querySelector("tbody").rows;

		for (var i = 0; i < rows.length; i++) {
			var col2 = rows[i].cells[3].textContent;
			if (col2.indexOf(filter) > -1) {
				rows[i].classList.remove("hide3");
			} else {
				rows[i].classList.add("hide3");
			}      
		}
	});

}

export {searchTable};