// Calculates the difference between the two date-times and returns a different number based on which option setting to display
// Displays the calculated time interval
function calculate_diff() {
	
	var from = document.getElementById("from-date").value.split("-");
	var fromt = document.getElementById("from-time").value.split(":");
	var to = document.getElementById("to-date").value.split("-");
	var tot = document.getElementById("to-time").value.split(":");
	var fromdate = new Date(from[0], from[1], from[2], fromt[0], fromt[1], 0, 0)
	var todate = new Date(to[0], to[1], to[2], tot[0], tot[1], 0, 0)
	var datediff = Math.floor((todate - fromdate) / (1000*60*60*24));
	datediff = parseInt(datediff)

	if(from[0] > to[0]) {
		return 0
	}
	else if(from[0] == to[0]){
		if(from[1] > to[1]) {
			return 0;
		} else if(from[1] == to[1]) {
			if(from[2] > to[2]) {
				return 0;
			}
		}
	}
	var from = document.getElementById("from-date").value.split("-");
	var fromt = document.getElementById("from-time").value.split(":");
	var to = document.getElementById("to-date").value.split("-");
	var tot = document.getElementById("to-time").value.split(":");
	var fromdate = new Date(from[0], from[1], from[2], fromt[0], fromt[1], 0, 0)
	var todate = new Date(to[0], to[1], to[2], tot[0], tot[1], 0, 0)
	var datediff = Math.floor((todate - fromdate) / (1000*60*60*24));
	var mindiff = Math.floor((todate - fromdate) / (1000*60) % 60)
	var hourdiff = Math.floor((todate - fromdate) / (1000*60*60) % 24);
	datediff = parseInt(datediff)

	ddiff = datediff.toString()
	mindiff = mindiff.toString()
	hourdiff = hourdiff.toString()

	if(ddiff != "NaN") {
		var time_interval = document.getElementById("time-interval")
		var toreplace = "Time Interval: " + ddiff + " days " + hourdiff + " hours " + mindiff + " minutes"

		time_interval.innerHTML = toreplace
	}

	if(datediff < 7){
		return 1;
	}
	else if(datediff < 31){
		return 2;
	}
	else if(datediff < 366){
		return 3;
	}
	else if(datediff > 366){
		return 4;
	}
}

//Displays different options based calculating date difference, does not change page URL
function display_options() {
	var op = calculate_diff();
	
	var parent = document.getElementById("options");
	var op1 = document.createElement('a')
	var op2 = document.createElement('a')
	var op3 = document.createElement('a')
	var op4 = document.createElement('a')
	var op5 = document.createElement('a')
	op1.innerHTML = "Option 1"
	op2.innerHTML = "Option 2"
	op3.innerHTML = "Option 3"
	op4.innerHTML = "Option 4"
	op5.innerHTML = "Option 5"
	if(op == 0) {
		window.alert("Error, date difference less than 0");
	}
	else if(op == 1) {

		parent.appendChild(op1)
		parent.appendChild(document.createElement("br"))
		parent.appendChild(op2)
		parent.appendChild(document.createElement("br"))
		parent.appendChild(op3)
		parent.appendChild(document.createElement("br"))
		parent.appendChild(op4)
		parent.appendChild(document.createElement("br"))
		parent.appendChild(op5)
		
	}
	else if(op == 2) {
		parent.appendChild(op2)
		parent.appendChild(document.createElement("br"))
		parent.appendChild(op3)
		parent.appendChild(document.createElement("br"))
		parent.appendChild(op4)
		parent.appendChild(document.createElement("br"))
		parent.appendChild(op5)
	}
	else if(op == 3) {
		parent.appendChild(op3)
		parent.appendChild(document.createElement("br"))
		parent.appendChild(op4)
		parent.appendChild(document.createElement("br"))
		parent.appendChild(op5)
	}
	else if(op == 4){
		parent.appendChild(op4)
		parent.appendChild(document.createElement("br"))
		parent.appendChild(op5)
	}
}

// Displays different options based on calculating date difference, changes URL to reflect date
function display_options_url() {
	display_options()
	var from = document.getElementById("from-date").value.split("-");
	var fromt = document.getElementById("from-time").value.split(":");
	var to = document.getElementById("to-date").value.split("-");
	var tot = document.getElementById("to-time").value.split(":");
	var fyr = from[0]
	var fmo = from[1]
	var fday = from[2]
	var fhour = fromt[0]
	var fmin = fromt[1]
	var tyr = to[0]
	var tmo = to[1]
	var tday = to[2]
	var thour = tot[0]
	var tmin = tot[1]

	var new_url = window.location.href
	var start_ind = new_url.indexOf("from")
	if(start_ind != -1) {
		new_url = new_url.substring(0, start_ind)
	}
	new_url = new_url + "from="+fyr+"-"+fmo+"-"+fday+"T"+fhour+":"+fmin+":00&to="+tyr+"-"+tmo+"-"+tday+"T"+	thour+":"+tmin+":00"
	window.location.href = new_url

}