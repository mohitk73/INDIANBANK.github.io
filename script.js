function openSendMoneyForm(){
    var sendMoneyForm = document.getElementById("sendMoneyForm");
    sendMoneyForm.style.display = "block";
}

function closeSendMoneyForm(){
    var sendMoneyForm = document.getElementById("sendMoneyForm");
    sendMoneyForm.style.display = "none";
}
function submitForm(event){
    event.preventDefault();
    document.getElementById("successMessage").style.display = "block";
    document.getElementById("successMessage").innerText = "Payment successfully done!Thankyou for visiting";
}

function createaccount(){

    document.getElementById("createmessage").style.display = "block";
    document.getElementById("createmessage").innerText = "Account Created Successfully!Thankyou for visiting";
}
/*navbar display*/
document.querySelector('.menu').addEventListener('click', function() {
    var navbar = document.getElementById('navbar');
    if (navbar.style.display === 'block') {
        navbar.style.display = 'none';
    } else {
        navbar.style.display = 'block';
    }
});



