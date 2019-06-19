$(document).ready(() => {
    $('.modal').modal();
    $('select').formSelect();

    new Fingerprint2().get((address) => {
        $('.c-address').text(address);

        new QRCode(document.getElementById('qrcode'), {
            text: address,
            width: 256,
            height: 256,
            colorDark : '#1565c0'
        });
    });
});

function withdrawMoney(amt) {
    M.toast({html: 'You can withdraw money once ' + amt + ' have been deposited.', classes: 'red'});
}

function withdrawMoneyT(mode) {
    $('#modal2').modal('open');
}

function withdrawSuccess() {
    M.toast({html: 'Send your account information to pistawallet@gmail.com. You\'ll receive the payment within 3-5 business days.'});
}

function withdrawDays(days) {
  M.toast({html: 'Send your bank account information to pistawallet@gmail.com. You\'ll receive the payment within '+days+' business days.'});
}

function withdrawSuccessAmazon() {
    M.toast({html: 'Too many people in queue for Amazon transfer. Please use a different mode.'});
}

function requestSubmitted() {
    const email = $('#email').val().trim();
    if (!isEmailValid(email)) {
        M.toast({html: 'Please enter a validate email.', classes: 'red'});
    } else {
        M.toast({html: 'Request submitted successfully. You will receive the money within the next 2-4 hours.'});
        $('#modal2').modal('close');
    }
}

function requestSubmittedLongHours() {
    const email = $('#email').val().trim();
    if (!isEmailValid(email)) {
        M.toast({html: 'Please enter a validate email.', classes: 'red'});
    } else {
        M.toast({html: 'Request submitted successfully. You will receive the money within the next 24-48 hours.'});
        $('#modal2').modal('close');
    }
}

function requestSubmittedDays() {
    const email = $('#email').val().trim();
    if (!isEmailValid(email)) {
        M.toast({html: 'Please enter a validate email.', classes: 'red'});
    } else {
        M.toast({html: 'Request submitted successfully. You\'ll receive the money within the next 2-3 business days.'});
        $('#modal2').modal('close');
    }
}

function isEmailValid(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function detailsToEmail() {
  setTimeout(() => {
    $('#modal2').modal('open');
  }, 500, 2500);
}

function getRand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}