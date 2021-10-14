// The clock and date
const days = [
	'Sunday', 'Monday', 'Tuesday', 'Wednesday',
	'Thursday', 'Friday', 'Saturday'
	];

function datetime()
{
	const today = new Date();

	let hrs = today.getHours(),
		mins = today.getMinutes(),
		sec = today.getSeconds(),
		day = today.getDay(),
		dd = today.getDate(),
		mm = today.getMonth()+1,
		yy = today.getFullYear();

	if(mins<10) mins = '0' + mins;
	if(hrs<10) hrs = '0' + hrs;
	if(sec<10) sec = '0' + sec;

	if(dd<10) dd = '0' + dd;
	if(mm<10) mm = '0' + mm;

	document.getElementById('hours').innerHTML = hrs+':'+mins;
	document.getElementById('seconds').innerHTML = ':'+sec+' ';
	document.getElementById('day').innerHTML = '&#xefb8; '+days[day]+',';
	document.getElementById('date').innerHTML = ''+dd+'~'+mm+'~'+yy;
	setTimeout(datetime, 1000);
}

datetime();

// This function searches for your keyword when you press "Enter"
// Notice there's no search icon
document.getElementById('searchbar').addEventListener("keyup", search);
document.getElementById('btnS').addEventListener("click", btnCode);

function btnCode() {
	search(0, 1)
}

function search (event, btn = 0) {
	// The keywords which will be searched for
	let str = document.getElementById("searchbar").value;
	// The search engine which will be used
	let search_engine = document.getElementById('engine').value;

	// If user presses "enter"
		// If the string is not equal to NULL and has anything except whitespace
			// Then search for the keyword
			
	if(event.keyCode === 13 || btn === 1)
		if(str!==null && str.match(/^ *$/) === null)
			window.open(search_engine+str, "_self");
}

document.getElementById('engine').addEventListener("click", function (event) {
	
	var input = document.getElementById ("searchbar");
	
	if(engine.value === "https://duckduckgo.com/?q=")
		input.placeholder = "Search in DuckDuckGo. . .";
	else
		input.placeholder = "Search in Google. . .";

})