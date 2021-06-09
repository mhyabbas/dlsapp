function createTopNav() {
	var toggle = document.querySelector(".nav__toggle");
	var nav = document.querySelector(".nav__list");

	if (toggle != null) {
		function toggleNav(e) {
			e.preventDefault();
			if (nav.classList.contains("active")) {
				nav.classList.remove("active");

	            // adds the menu icon
	            toggle.querySelector("a").innerHTML = "<svg><use xlink:href='#icon-toggle'/></svg>"; 
	        } else {
	        	nav.classList.add("active");

	            // adds the close icon
	            toggle.querySelector("a").innerHTML = "<svg><use xlink:href='#icon-close'/></svg>";
	        }
	    }

	    toggle.addEventListener("click", toggleNav, false);
	}

	// Account click function
	var accountLink = document.querySelector(".nav__item--account .nav__link");
	var subList = document.querySelector(".nav__list--sub-list");

	if (accountLink != null) {
		function clickAccount(e) {
			e.preventDefault();
			if (subList.classList.contains("active")) {
				subList.classList.remove("active");
			} else {
				subList.classList.add("active");
			}
		}

		accountLink.addEventListener("click", clickAccount, false);

	    // Moving sub list
	    var account = document.querySelector(".nav__item--account");
	    var rating = document.querySelector(".nav__rating");

	    function moveSubList(){
	    	if(window.innerWidth < 1024) {
	    		nav.insertBefore(subList, toggle);
	    	} else {
	    		account.insertBefore(subList, rating);
	    	}
	    }

	    function ready(callback){
	        // in case the document is already rendered
	        if (document.readyState!='loading') callback();
	        // modern browsers
	        else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
	        // IE <= 8
	        else document.attachEvent('onreadystatechange', function(){
	        	if (document.readyState=='complete') callback();
	        });
	    }

	    ready(function(){
	    	moveSubList();
	    });

	    window.addEventListener("resize", moveSubList);
	}

	// Notification click function
	var notificationLink = document.querySelector(".nav__item--notification .nav__link");
	var notificationPanel = document.querySelector(".notification");

	if (notificationLink != null) {
		function clickNotficiation(e) {
			e.preventDefault();
			if (notificationPanel.classList.contains("active")) {
				this.parentElement.classList.remove("active");
				notificationPanel.classList.remove("active");
			} else {
				this.parentElement.classList.add("active");
				notificationPanel.classList.add("active");
			}
		}

		notificationLink.addEventListener("click", clickNotficiation, false);
	}
}

function createTabbedNav() {
	var tab = {
		nav: null,
		arrows: null,
		links: null,
		body: null,
		init: function () {
			tab.nav = document.querySelector(".nav--tabbed");
			tab.arrows = document.querySelectorAll(".nav--tabbed svg");
			tab.links = document.getElementsByClassName("nav--tabbed-link");
			tab.body = document.getElementsByClassName("nav--tabbed-body");

			if (tab.nav != null) {
				for (let i=0; i<tab.links.length; i++) {
					tab.links[i].dataset.pos = i;
					tab.links[i].addEventListener("click", tab.change);
					tab.links[i].addEventListener("click", tab.dropdown);
				}

				for (let i=0; i<tab.arrows.length; i++) {
					tab.arrows[i].addEventListener("click", tab.dropdown);
				}

				tab.links[0].classList.add("active");
				tab.body[0].classList.add("active");
			}
		},

		dropdown: function() {
			tab.nav.classList.toggle("active");
		},

		change: function () {
			for (let t of tab.links) {
				t.classList.remove("active");
			}
			for (let t of tab.body) {
				t.classList.remove("active");
			}

			tab.links[this.dataset.pos].classList.add("active");
			tab.body[this.dataset.pos].classList.add("active");
		}
	};

	tab.init();
}

export {createTopNav,createTabbedNav};