function viewHome() {
    $('#content').html('\
        <h3>Software Developer in Canada</h3>\
        <p class="lead"><a target="_blank" href="https://chuck.findlayis.me/pubkey.asc">My public GPG key (click)</a></p>\
        <p>I write code both professionally and as a hobby</p>\
        <img src="img/vscode-sshot.png" class="img-fluid rounded" alt="Visual Studio Code Screenshot">\
    ');
}

function viewContact() {
    $('#content').html('<ul class="lead list-group">\
        <li class="list-group-item list-group-item-secondary">Email: chuck@findlayis.me</li>\
    </ul>');
}

function navSelected(selected) {
    $('.nav-link').each(function() {
        $(this).removeClass('active');
    });
    $(selected).addClass('active');
}