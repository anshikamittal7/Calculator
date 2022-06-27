let string = "";
const result = document.querySelector(".input");
let buttons = document.querySelectorAll(".button");
let tag = false;
Array.from(buttons).forEach((button) => {
	button.addEventListener("click", (e) => {
		let operation = e.target.innerText;

		if (operation == "=") {
			string = eval(string) + "";
		} else if (operation == "C") {
			tag = false;
			string = "";
		} else if (operation == "()") {

			if (tag == false) {
				if (string[string.length - 1] <= "9" && string[string.length - 1] >= "0" || string[string.length - 1] == ")") {
					string += "*";
				}
				string += "(";
				tag = true;
			}
			else {
				string += ")";
				tag = false;
			}
		}
		else if (operation == "❎") {
			if (string[string.length - 1] == '(') {
				tag = false;
			}
			if (string[string.length - 1] == ')') {
				tag = true;
			}
			string = string.substring(0, string.length - 1);
		}
		else {
			string += operation;
		}
		result.innerText = string;
	});
});
let theme = document.querySelector(".switch");

theme.addEventListener("click", (e) => {

	document.querySelector(".bkg").classList.toggle('dbkg');
	document.querySelector(".heading").classList.toggle('headingdark');
	document.querySelector(".container").classList.toggle('container2');
	document.querySelector(".input").classList.toggle('inputdark');
	let btnarr = document.querySelectorAll(".button");
	for (let i = 0; i < btnarr.length; i++) {
		btnarr[i].classList.toggle('darkbutton');
	}

})