$(document).ready(function() {
    const pgpKey = `
-----BEGIN PGP PUBLIC KEY BLOCK-----

mDMEZwxqehYJKwYBBAHaRw8BAQdA6SB9ohj/2FrfhQoABalw8/XnqE4Psdgz+4Su
LB4fSd60HXBhdWxhIDxwYXVsYWhhaGFoYUBwcm90b24ubWU+iHIEExYIABoECwkI
BwIVCAIWAQIZAQWCZwxqegKeAQKbAwAKCRCkgfPX2Njne595AQDPwATvT/QRkX+a
9waH9tE0+yOoMC6IGf6ZXHxNlDORrgEAlIv6QSJqSjP9knZnqXdzhAuf1BXv29n6
upnwVDCBFwO4OARnDGp6EgorBgEEAZdVAQUBAQdA+qLQASqon4AvsgR5KTKbGPPH
/xVAbOjw7JQ+jZtbFicDAQgHiGEEGBYIAAkFgmcManoCmwwACgkQpIHz19jY53tJ
SwD/eVewQgbk6nGbVtTWJMq8VSwirr/V1ZD4fWLLiBUhnvwA/2YzO4E7AGJO28gS
QX1b8Hhf/D48pMmgRdhACdcUaHMC
=d6fa
-----END PGP PUBLIC KEY BLOCK-----
`;
    const email = 'paulahahaha@proton.me'

    $('#au').prop('volume', 0.1);

    $('#enter-button').click(function() {
        $('#au')[0].play();

        $(this).fadeOut(600, function() {
            $('.the-big-wrapper').fadeIn(600);
        });
    });

    $('#copyemail').click(function() {
        navigator.clipboard.writeText(email).then(function() {
        }).catch(function(error) {
            alert('Error: ' + error);
        });
    });

    $('#copy').click(function() {
        navigator.clipboard.writeText(pgpKey).then(function() {
        }).catch(function(error) {
            alert('Error: ' + error);
        });
    });

    $('#download').click(function(event) {
        event.preventDefault();
        const link = document.createElement('a');
        link.href = 'src/paula.asc';
        link.download = 'paula.asc';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    $('#arrow').click(function() {
        $('#hehe')[0].play();
        
        $('.main-site').animate({
            top: '100vh'
        }, 1000, function() {
            $('.top').fadeIn(600);
        });
    });

    $('#arrow-2').click(function() {
        $('#hehe2')[0].play();
        
        $('.top').animate({
            top: '100vh'
        }, 1000, function() {
            $('.top-2').fadeIn(600);
        });
    });

    $('#arrow-3').click(function() {
        $('#hehe')[0].play();
        
        $('.top-2').animate({
            top: '100vh'
        }, 1000, function() {
            $('.top-3').fadeIn(600);
        });
    });

    $('#back').click(function() {
        $('#hehe')[0].play();

        setTimeout(function() {
            location.reload();
        }, 2000);
    });

    $('#copy').click(function(){
        $('#hehe')[0].play();
    })

    $('#download').click(function(){
        $('#hehe')[0].play();
    })

    $('#copyemail').click(function(){
        $('#hehe2')[0].play();
    })
});