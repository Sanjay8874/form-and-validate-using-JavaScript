document.addEventListener('DOMContentLoaded', init);

function init(event) {

	regForm = document.forms['myform'];

	regForm['register'].onclick = validateForm; 
}

function validateForm(event) {

	var errorMessages = Array();

	if(!regForm['username'].value) {
		alert('* Please enter Name');
	}
	var x=regForm['email'].value  
	var atposition=x.indexOf("@");  
    var dotposition=x.lastIndexOf(".");  
	if(atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length) {
		alert('* Please enter Email');
	}


		var x=regForm['website'].value  
	var atposition=x.indexOf(".");  
    var dotposition=x.lastIndexOf(".");  
	if(atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length) {
		alert('* Please enter Website');
	}

	if(!regForm['password'].value) {
		alert('* Please enter Password');
	}


	
	displayErrors(errorMessages);
  
	if(errorMessages.length) {
		return false;
	}
  
  
}

function displayErrors(errors) {
	var errorBox = document.getElementById('errorMessages');
  
	if(!errors.length) {
		errorBox.innerHTML = '';
    return false;
	}

	var errorBox = document.getElementById('errorMessages');

	var messageString = '<ul>';

	for(var i=0; i<errors.length; i++) {
		messageString += '<li>' + errors[i] + '</li>';
	}

	messageString += '</ul>';

	errorBox.innerHTML = messageString;
}