// The function here takes the parameters that you
// have declared in the `glide.json` file, in the
// same order.
function timeParse(timeInterval) {
	const dt = new Date(0);
	const tmParts = timeInterval.split(":");

	const hours = +tmParts[0];
	const mins = +tmParts[1];

	dt.setHours(hours);
	dt.setMinutes(mins);

	//console.log(timeInterval + "=" + hours + ":" + mins);
	return dt;
}

function calcDateTime(startdate, tzdir, timelagStr, routetimeStr) {
	startdate = Date.parse(startdate);
	timelag = Date.parse(timeParse(timelagStr));
	routetime = Date.parse(timeParse(routetimeStr));

	//console.log(new Date(startdate) + "+" + new Date(timelag) + "+" + new Date(routetime) + "=" + new Date(startdate + tzdir*timelag + routetime));
	return new Date(startdate + timelag + routetime);
}

//calcDateTime(new Date(2018, 11, 24, 10, 33, 0, 0), -1, "3:00", "4:20");


window.function = function (startdate, tzdir, timelag, routetime) {
	// For each parameter, its `.value` contains
	// either its value in the type you've declared,
	// or it's `undefined`.  This is a good place to
	// extract the `.value`s and assign default
	// values.

	// Your function should return the exact type
	// you've declared for the `result` in
	// `glide.json`, or `undefined` if there's an
	// error or no result can be produced, because a
	// required input is `undefined`, for example.
	startdate = startdate.value ?? Date.now();
	tzdir = tzdir.value ?? 0;
	timelag = timelag.value ?? "0:00";
	routetime = routetime.value ?? "0:00";

	return routetime;//calcDateTime(startdate, tzdir, timelag, routetime);
  }
  