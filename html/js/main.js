function viewHome() {
    $('#content').html('<ul class="lead list-group">\
        <li class="list-group-item list-group-item-secondary">Software Developer in Canada</li>\
        <li class="list-group-item list-group-item-secondary"><a target="_blank" href="/pubkey.asc">My public GPG key</a></li>\
    </ul>');
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