// The function here takes the parameters that you
// have declared in the `glide.json` file, in the
// same order.
window.function = function (startdate, tzdir, timelag, routetime) {
	// For each parameter, its `.value` contains
	// either its value in the type you've declared,
	// or it's `undefined`.  This is a good place to
	// extract the `.value`s and assign default
	// values.
	
	startdate = startdate.value ?? Date();
	startdate = Date.parse(startdate);
	tzdir = tzdir.value ?? 0;
	timelag = timelag.value ?? "0:00";
	timelag = Date.parse(timelag);
	routetime = routetime.value ?? "0:00";
	routetime = Date.parse(routetime);

	
	// Your function should return the exact type
	// you've declared for the `result` in
	// `glide.json`, or `undefined` if there's an
	// error or no result can be produced, because a
	// required input is `undefined`, for example.
	return startdate;
  }
  