let inputEmail = document.querySelector("input[name=email]");

function changecolor() {
	console.log("funkcja ruszyła");

	inputEmail.classList.remove("border-PaleBlue");
	inputEmail.classList.add("border-LightRed");

	inputEmail.classList.remove("placeholder:text-PaleBlue");
	inputEmail.classList.add("placeholder:text-black");
	inputEmail.classList.remove("mb-4");
}

function validateForm() {
	var email = document.forms["myForm"]["email"].value;
	var errorText = document.querySelectorAll(".form-error-text");

	// Sprawdź, czy email jest pusty
	if (email.trim() === "") {
		errorText.forEach(e => {
			e.style.display = "block";
		});
		changecolor();
		return false;
	} else {
		// Sprawdź, czy email ma poprawny format
		var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		if (!emailPattern.test(email)) {
			changecolor();
			errorText.style.display = "block";

			return false;
		}
	}
}
