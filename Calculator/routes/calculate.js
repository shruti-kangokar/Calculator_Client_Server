exports.calc = function(req, res) {
	var n1, n2,v1,v2, op, ans, sym;

	v1 = req.param("n1");
	v2 = req.param("n2");
	if(v1.length === 0 || v2.length === 0)
	{
		var errmsg2 = "One of the operands is left empty";
		res.render("index", { 
			oper1 : "",
			oper : "",
			oper2 : "",
			answer : "",
			err: errmsg2 });
	}
	
	n1 = Number(v1);
	n2 = Number(v2);
	//add = req.param(add);
	//console.log(n1 + " " + n2);

	op = req.body.operator;
	console.log(op);
//req.param("operator");
	// Validate
	if (isNaN(v1)) {
		var errmsg = "The First number you entered is not a number";
		res.render("index", {
			oper1 : "",
			oper : "",
			oper2 : "",
			answer : "",
			err: errmsg });
		return;
	}
	if (isNaN(v2)) {
		var errmsg2 = "The Second number you entered is not a number";
		res.render("index", { 
			oper1 : "",
			oper : "",
			oper2 : "",
			answer : "",
			err: errmsg2 });
	}
	if (n2 === 0 && op === "Div") {
		var errmsg3 = "Divide by Zero error";
		res.render("index",{ oper1 : "",
			oper : "",
			oper2 : "",
			answer : "",
			err: errmsg3 });
	}
	if (op === undefined) {
		var errmsg4 = "Operation Undefined";
		res.render("index",{
			oper1 : "",
			oper : "",
			oper2 : "",
			answer : "",
			err: errmsg4 });
	}
	
	// This also worksS
	//if (typeof op === 'undefined') {
	//	res.render("NoOp");
	//}

	// Calculate
	if (op === "Add") {
		ans = n1 + n2;
		sym = " + ";
	} else if (op === "Sub") {
		ans = n1 - n2;
		sym = " - ";
	} else if (op === "Mul") {
		ans = n1 * n2;
		sym = " * ";
	} else if (op === "Div") {
		ans = n1 / n2;
		sym = " / ";
	}
	res.render("index", {
		oper1 : n1,
		oper : sym,
		oper2 : n2,
		answer : ans,
		err : ""	
	});
	//res.render('index', { title: 'Express' });

};
