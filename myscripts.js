/* This is your JavaScript file. You will use this file to create actions in your HTML pages */


//contactSubmitted and subscribeSubmitted both check if all the feilds have been filled using validateForm
//if all feilds have been filled then the approriate message is displayed

function contactSubmitted (formname, feild1, feild2, feild3) {
	var status = validateForm (formname, feild1, feild2, feild3)
	if (status == true) {
		document.getElementById("contactform").innerHTML = "Thank you for your message! Someone will be in contact in a few days.";		
	}
}

function subscribeSubmitted (formname, feild1, feild2, feild3) {
	var status = validateForm (formname, feild1, feild2, feild3)
	if (status == true) {
		document.getElementById("subscribeform").innerHTML = "Thank you for subscribing! You'll get an email soon to verify your details.";		
	}
}

function validateForm (formname, feild1, feild2, feild3) {
    var a = document.forms[formname][feild1].value;
    var b = document.forms[formname][feild2].value;
    var c = document.forms[formname][feild3].value;
    if (a == "" || b == "" || c == "") {
        alert("Please fill in all the fields");
        return false;
    } else {
    	return true;
    }
}
//validateForm source - https://stackoverflow.com/questions/3937513/javascript-validation-for-empty-input-field

function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    if(value<10){
        value++;
            document.getElementById('number').value = value;
    }
}
function decrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    if(value>1){
        value--;
            document.getElementById('number').value = value;
    }

}