function viewHome() {
    $('#content').html('\
        <h3>Software Developer in Canada</h3>\
        <p class="lead"><a target="_blank" href="https://chuck.findlayis.me/pubkey.asc">My public GPG key (click)</a></p>\
        <p>I write code both professionally and as a hobby</p>\
        <img src="img/vscode-sshot.png" class="img-fluid rounded mb-3" alt="Visual Studio Code Screenshot">\
        <p>Site lovingly handcrafted (no WYSIWYG editor) by myself with a CI/CD pipeline. Bootstrap used to make it prettier.</p>\
    ');
}

function viewContact() {
    $('#content').html('<h3 class="lead">Contact</h3>\
    <p>Email is the preferred way to contact me async, but Linkedin is good too. IRC is where I would go for sync conversations after some email chatting. I don\'t do Twitter/X, Facebook, etc.</p>\
    <p>PGP key is available <a href="https://chuck.findlayis.me/pubkey.asc" target="_blank" class="text-secondary">here</a> to use for emails if you\'re the type to do encrypted chats.</p>\
    <ul class="list-group">\
        <li class="list-group-item list-group-item-secondary"><a href="mailto:chuck@findlayis.me" class="text-secondary">chuck@findlayis.me</a></li>\
        <li class="list-group-item list-group-item-secondary"><a href="https://www.linkedin.com/in/charlesrfindlay/" target="_blank" class="text-secondary">Linkedin</a></li>\
        <li class="list-group-item list-group-item-secondary">Darkfoe on <a href="ircs://irc.serverfail.party:6697" target="_blank" class="text-secondary">irc.serverfail.party</a></li>\
    </ul>');
}
function viewCodingLanguages() {
    $('#content').html('<h3>Coding Portfolio</h3>\
    <p>By no means an exhaustive list of languages I have experience in, but a few links to examples of projects I\'ve written in a list of languages.</p>\
    <p>This is kind of an in-progress list, as I\'ve not had much time lately to update it. If you want to just look at my Github, the link is in the top right corner of the page. Also, some projects cross into multiple languages/frameworks/technologies</p>\
    <ul class="list-group bg-dark">\
        <li class="list-group-item list-group-item-dark">Go (Golang)<br>\
        <a href="https://github.com/cfindlayisme/wmb" class="text-secondary" target="_blank">wmb (Webhook Message Bot, IRC)</a>\
        </li>\
        <li class="list-group-item list-group-item-dark">JavaScript (Node, etc)<br>\
        <a href="https://github.com/cfindlayisme/chuck.findlayis.me-docker" class="text-secondary" target="_blank">This site (link to repo)</a></li>\
        <li class="list-group-item list-group-item-dark">Docker</li>');
}

function navSelected(selected) {
    $('.nav-link').each(function() {
        $(this).removeClass('active');
    });
    $(selected).addClass('active');
}