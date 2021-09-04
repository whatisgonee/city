document.addEventListener("DOMContentLoaded", () => {
	var hours = "00";
	var minutes = "00";
	var clock = document.getElementById("clock");
	var isDay = false;
	var windowChangePercent = 30;
	var windows = document.getElementsByClassName("window");
	var currentWindow;

	dayCycle();

	theDreadClock();

	function theDreadClock() {
		setTimeout(() => {
			if(minutes >= 59) {
				if(hours >= 23) {
					hours = "00";
				} else {
					hours = parse(parseInt(hours)+1);
				}
				minutes = "00";
			} else {
				minutes = parse(parseInt(minutes)+1);

				if(windowChangePercent > Math.floor((Math.random() * 101))) {
					currentWindow = windows[Math.floor(Math.random() * windows.length)];
					if(currentWindow.classList.contains("off")) currentWindow.classList.remove("off");
					else currentWindow.classList.add("off");
				}
			}
			if(hours == 6) {
				isDay = true;
				dayCycle();
			} else if(hours == 20) {
				isDay = false;
				dayCycle();
			}
			clock.innerHTML = hours + ":" + minutes;
			theDreadClock();
		}, 500);
	}

	function parse(time) {
		if(time >= 0 && time < 10) return "0" + time;
		else return time;
	}

	function dayCycle() {
		if(isDay) {
			document.getElementsByTagName("body")[0].style.backgroundColor = "white";
			document.getElementById("buildings").style.color = "black";
			document.getElementById("platform").style.borderColor = "black";
			document.getElementById("title").style.color = "black";
			clock.style.color = "black";
		} else {
			document.getElementsByTagName("body")[0].style.backgroundColor = "black";
			document.getElementById("buildings").style.color = "white";
			document.getElementById("platform").style.borderColor = "white";
			document.getElementById("title").style.color = "white";
			clock.style.color = "white";
		}
	}
});