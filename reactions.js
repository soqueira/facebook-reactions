
//URLs das reações em png
var ameiURL = 'https://i.imgur.com/y7qZQS3.png';
var hahaURL = 'https://i.imgur.com/eq69HEz.png';
var uauURL = 'https://i.imgur.com/XQSbgpw.png';
var sadURL = 'https://i.imgur.com/JlQiyAu.png';
var grrURL = 'https://i.imgur.com/P4Xm6Ds.png';
//clica no elemento ao lado do icone de like e verifica se ja deu like
//se já estiver like ele volta para o normal
//se não ele da o like
$(".typeReactLike").on('click', function() {
    if ($("#likebutton").attr('src') === 'https://i.imgur.com/c3cuy55.png' || $("#likebutton").attr('src') === ameiURL || $("#likebutton").attr('src') === hahaURL || $("#likebutton").attr('src') === uauURL) {
        document.getElementById("likebutton").src = 'https://i.imgur.com/kmtdDZR.png';
        $('.typeReactLike').css("color", "#646770");
        document.getElementById('typeReactLikeID').innerHTML = 'Curtir';
    } else if ($("#likebutton").attr('src') === sadURL || $("#likebutton").attr('src') === grrURL) {
        document.getElementById("likebutton").src = 'https://i.imgur.com/kmtdDZR.png';
        $('.typeReactLike').css("color", "#646770");
        document.getElementById('typeReactLikeID').innerHTML = 'Curtir';
    } else {
        document.getElementById("likebutton").src = 'https://i.imgur.com/c3cuy55.png';
        $('.typeReactLike').css("color", "#0081ff");
        document.getElementById('typeReactLikeID').innerHTML = 'Curtir';
    }
});
//mesma coisa só que com o icone de like
$("#likebutton").on('click', function() {
    if ($("#likebutton").attr('src') === 'https://i.imgur.com/c3cuy55.png') {
        document.getElementById("likebutton").src = 'https://i.imgur.com/kmtdDZR.png';
        $('.typeReactLike').css("color", "#646770");
        document.getElementById('typeReactLikeID').innerHTML = 'Curtir';
    } else {
        document.getElementById("likebutton").src = 'https://i.imgur.com/c3cuy55.png';
        $('.typeReactLike').css("color", "#0081ff");
        document.getElementById('typeReactLikeID').innerHTML = 'Curtir';
    }
});

//coloca as reações no src da imagem do like
function changeImage(a) {
    document.getElementById("likebutton").src = a;
}
//altera os nome das reações e cores
$('.likeBtn').on('click', function() {
    $('.typeReactLike').css("color", "#0081ff");
    document.getElementById('typeReactLikeID').innerHTML = 'Curtir';
});
$('.amei').on('click', function() {
    $('.typeReactLike').css("color", "#ff4f67");
    document.getElementById('typeReactLikeID').innerHTML = 'Amei';
});
$('.haha').on('click', function() {
    $('.typeReactLike').css("color", "#ffdb65");
    document.getElementById('typeReactLikeID').innerHTML = 'Haha';
});
$('.uau').on('click', function() {
    $('.typeReactLike').css("color", "#ffdb65");
    document.getElementById('typeReactLikeID').innerHTML = 'Uau';
});
$('.sad').on('click', function() {
    $('.typeReactLike').css("color", "#ffdb65");
    document.getElementById('typeReactLikeID').innerHTML = 'Sad';
});
$('.grr').on('click', function() {
    $('.typeReactLike').css("color", "#f7714b");
    document.getElementById('typeReactLikeID').innerHTML = 'Grr';
});
