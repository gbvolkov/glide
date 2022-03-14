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

	return dt;
}

function calcDateTime(startdate, tzdir, timelagStr, routetimeStr) {
	startdate = startdate.value ?? Date().now();
	tzdir = tzdir.value ?? 0;
	timelagStr = timelagStr.value ?? "0:00";
	timelag = Date(timeParse(timelagStr));
	routetimeStr = routetimeStr.value ?? "0:00";
	routetime = Date(timeParse(routetimeStr));

	return startdate + timelag + routetime;startdate = Date.parse(startdate);
	
}

window.function = function (startdate, tzdir, timelagStr, routetimeStr) {
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
	return calcDateTime(startdate, tzdir, timelagStr, routetimeStr);
  }
  