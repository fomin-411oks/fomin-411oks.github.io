"use strict";
(function() {
	window.onload = function() {
		var calcButton = document.getElementById("calculate");
		if (calcButton) {
			calcButton.onclick = calculate;
		}
		
		var leftShit = document.getElementById("leftShift");
		if (leftShit) {
			leftShit.onclick = shiftLeft;
		}
		
		var rightShift = document.getElementById("rightShift");
		if (rightShift) {
			rightShift.onclick = shiftRight;
		}
		
		var decimalConvertButton = document.getElementById("decConvert");
		if (decimalConvertButton) {
			decimalConvertButton.onclick = unicodeConvert;
		}
		
		var charConvertButton = document.getElementById("charConvert");
		if (charConvertButton) {
			charConvertButton.onclick = decimalConvert;
		}
		
		var navLinks = document.querySelectorAll("header nav ul li a");
		for (var i = 0; i < navLinks.length; i++) {
			navLinks[i].onmouseenter = highlight;
			navLinks[i].onmouseleave = dehighlight;
		}
	};
	
	// Highlights the given element
	function highlight() {
		this.style.backgroundColor = "#5B6D7F";
	}
	
	// Removes the highlight from the given element
	function dehighlight() {
		this.style.backgroundColor = "";
	}
	
	// Calculates a given decimal number's binary representation. It
	// automattically delimits sets of 4 bits and attempts to pad the
	// result with 0s in order to show full bytes.
	function calculate() {
		var binaryOut = document.getElementById("binaryOut");
		var num = parseInt(document.getElementById("decimalIn").value);
		if (num >= 100000000000000000) {
			binaryOut.innerHTML = "Sorry, that number is too large";
		} else {
			binaryOut.innerHTML = getBinary(num);
		}
	}
	
	// Shifts the bits of the decimal input number to the left by one
	function shiftLeft() {
		var num = parseInt(document.getElementById("decimalIn").value);
		num *= 2;
		document.getElementById("decimalIn").value = num;
		calculate();
	}
	
	
	// Shifts the bits of the decimal input number to right by one
	function shiftRight() {
		var num = parseInt(document.getElementById("decimalIn").value);
		num = Math.floor(num / 2);
		document.getElementById("decimalIn").value = num;
		calculate();
	}
	
	// Converts a decimal number to its unicode equivalent
	function unicodeConvert() {
		var num = parseInt(document.getElementById("decimalIn").value);
		var charOut = document.getElementById("charOut");
		var output = "&#" + num + ";";
		charOut.innerHTML = output;
		calculate();
	}
	
	// Converts a unicode character to its decimal equivalent
	function decimalConvert() {
		var charIn = document.getElementById("charIn").value;
		var decimalOut = document.getElementById("charDecOut");
		var binaryOut = document.getElementById("charBinary");
		decimalOut.innerHTML = "" + ("" + charIn).charCodeAt(0);
		var output = getBinary(("" + charIn).charCodeAt(0));
		binaryOut.innerHTML = output;
	}
	
	// Converts the given decimal number to its binary equivalent
	function getBinary(inputDecimal) {
		var outputText = "";
		var index = 0;
		while (inputDecimal > 0) {
			if (index % 4 == 0) {
				outputText += " ";
			}
			outputText += inputDecimal % 2;
			inputDecimal = Math.floor(inputDecimal / 2);
			++index;
		}
			
		// Pads the output with 0s to complete the current byte while
		// preserving the 4-bit space delimiting.
		while (index % 8 != 0) {
			if (index % 4 == 0) {
				outputText += " ";
			}
			outputText += 0;
			++index;
		}
		var resultText = "";
		for (var i = outputText.length; i > 0; i--) {
			resultText += outputText.charAt(i);
		}
		return resultText;
	}
})();