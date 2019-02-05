//URLs das reações em png
var ameiURL = 'https://i.imgur.com/Z4d86La.png';
var hahaURL = 'https://i.imgur.com/K23r4ci.png';
var uauURL = 'https://i.imgur.com/GoWf7Bo.png';
var sadURL = 'https://i.imgur.com/lujSSPd.png';
var grrURL = 'https://i.imgur.com/zyayeKC.png';
//clica no elemento ao lado do icone de like e verifica se ja deu like
//se já estiver like ele volta para o normal
//se não ele da o like
$(".typeReactLike").on('click', function() {
  if ($("#likebutton").attr('src') === 'https://i.imgur.com/c3cuy55.png' || $("#likebutton").attr('src') === ameiURL || $("#likebutton").attr('src') === hahaURL || $("#likebutton").attr('src') === uauURL) {
    document.getElementById("likebutton").src = 'https://i.imgur.com/kmtdDZR.png';
    $('.typeReactLike').css("color", "#646770");
    document.getElementById('typeReactLikeID').innerHTML = 'Like';
  } else if ($("#likebutton").attr('src') === sadURL || $("#likebutton").attr('src') === grrURL) {
    document.getElementById("likebutton").src = 'https://i.imgur.com/kmtdDZR.png';
    $('.typeReactLike').css("color", "#646770");
    document.getElementById('typeReactLikeID').innerHTML = 'Like';
  } else {
    document.getElementById("likebutton").src = 'https://i.imgur.com/c3cuy55.png';
    $('.typeReactLike').css("color", "#0081ff");
    document.getElementById('typeReactLikeID').innerHTML = 'Like';
  }
});
//mesma coisa só que com o icone de like
$("#likebutton").on('click', function() {
  if ($("#likebutton").attr('src') === 'https://i.imgur.com/c3cuy55.png' || $("#likebutton").attr('src') === ameiURL || $("#likebutton").attr('src') === hahaURL || $("#likebutton").attr('src') === uauURL) {
    document.getElementById("likebutton").src = 'https://i.imgur.com/kmtdDZR.png';
    $('.typeReactLike').css("color", "#646770");
    document.getElementById('typeReactLikeID').innerHTML = 'Like';
  } else if ($("#likebutton").attr('src') === sadURL || $("#likebutton").attr('src') === grrURL) {
    document.getElementById("likebutton").src = 'https://i.imgur.com/kmtdDZR.png';
    $('.typeReactLike').css("color", "#646770");
    document.getElementById('typeReactLikeID').innerHTML = 'Like';
  } else {
    document.getElementById("likebutton").src = 'https://i.imgur.com/c3cuy55.png';
    $('.typeReactLike').css("color", "#0081ff");
    document.getElementById('typeReactLikeID').innerHTML = 'Like';
  }
});
//inseri as reações
//inseri a reação de like
$('.typeReactLike').on('click', function() {
  if ($("#likebutton").attr('src') === 'https://i.imgur.com/c3cuy55.png') {
    document.getElementById("quant_reaction").src = 'https://i.imgur.com/wVAJS8T.png';
    document.getElementById('qnt').innerHTML = 'Vitor Siqueira';
    $('.container').css("height", "477px");
    $('.hiddenImg').css("display", "block");
  } else {
    $('.container').css("height", "445px");
  }

});
//inseri a reação de like
$("#likebutton").on('click', function() {
  if ($("#likebutton").attr('src') === 'https://i.imgur.com/c3cuy55.png') {
    document.getElementById("quant_reaction").src = 'https://i.imgur.com/wVAJS8T.png';
    document.getElementById('qnt').innerHTML = 'Vitor Siqueira';
    $('.container').css("height", "477px");
    $('.hiddenImg').css("display", "block");
  }
  else {
    $('.container').css("height", "445px");
  }

});

//inseri a reação de like
$('.likeBtn').on('click', function() {
  if ($("#likebutton").attr('src') === 'https://i.imgur.com/c3cuy55.png') {
    document.getElementById("quant_reaction").src = 'https://i.imgur.com/wVAJS8T.png';
    document.getElementById('qnt').innerHTML = 'Vitor Siqueira';
    $('.container').css("height", "477px");
    $('.hiddenImg').css("display", "block");
  }else {
    $('.container').css("height", "445px");
  }
});

//inseri a reação de amei
$('.amei').on('click', function() {
  if ($("#likebutton").attr('src') === 'https://i.imgur.com/Z4d86La.png') {
    document.getElementById("quant_reaction").src = 'https://i.imgur.com/Z4d86La.png';
    document.getElementById('qnt').innerHTML = 'Vitor Siqueira';
    $('.container').css("height", "477px");
    $('.hiddenImg').css("display", "block");
  } else {
    $('.container').css("height", "445px");
  }
});
//inseri a reação de haha
$('.haha').on('click', function() {
  if ($("#likebutton").attr('src') === 'https://i.imgur.com/K23r4ci.png') {
    document.getElementById("quant_reaction").src = 'https://i.imgur.com/K23r4ci.png';
    document.getElementById('qnt').innerHTML = 'Vitor Siqueira';
    $('.container').css("height", "477px");
    $('.hiddenImg').css("display", "block");
  } else {
    $('.container').css("height", "445px");
  }
});
//inseri a reação de uau
$('.uau').on('click', function() {
  if ($("#likebutton").attr('src') === 'https://i.imgur.com/GoWf7Bo.png') {
    document.getElementById("quant_reaction").src = 'https://i.imgur.com/GoWf7Bo.png';
    document.getElementById('qnt').innerHTML = 'Vitor Siqueira';
    $('.container').css("height", "477px");
    $('.hiddenImg').css("display", "block");
  } else {
    $('.container').css("height", "445px");
  }
});
//inseri a reação de sad
$('.sad').on('click', function() {
  if ($("#likebutton").attr('src') === 'https://i.imgur.com/lujSSPd.png') {
    document.getElementById("quant_reaction").src = 'https://i.imgur.com/lujSSPd.png';
    document.getElementById('qnt').innerHTML = 'Vitor Siqueira';
    $('.container').css("height", "477px");
    $('.hiddenImg').css("display", "block");
  } else {
    $('.container').css("height", "445px");
  }
});
//inseri a reação de grr
$('.grr').on('click', function() {
  if ($("#likebutton").attr('src') === 'https://i.imgur.com/zyayeKC.png') {
    document.getElementById("quant_reaction").src = 'https://i.imgur.com/zyayeKC.png';
    document.getElementById('qnt').innerHTML = 'Vitor Siqueira';
    $('.container').css("height", "477px");
    $('.hiddenImg').css("display", "block");
  } else {
    $('.container').css("height", "445px");
  }
});
//insere o link das reações
function changeImage(a) {
  document.getElementById("likebutton").src = a;
}
//altera os nomes cores de acordo com cada reação
$('.likeBtn').on('click', function() {
  $('.typeReactLike').css("color", "#0081ff");
  document.getElementById('typeReactLikeID').innerHTML = 'Like';
});
$('.amei').on('click', function() {
  $('.typeReactLike').css("color", "#ff4f67");
  document.getElementById('typeReactLikeID').innerHTML = 'Love';
});
$('.haha').on('click', function() {
  $('.typeReactLike').css("color", "#ffdb65");
  document.getElementById('typeReactLikeID').innerHTML = 'Haha';
});
$('.uau').on('click', function() {
  $('.typeReactLike').css("color", "#ffdb65");
  document.getElementById('typeReactLikeID').innerHTML = 'Wow';
});
$('.sad').on('click', function() {
  $('.typeReactLike').css("color", "#ffdb65");
  document.getElementById('typeReactLikeID').innerHTML = 'Sad';
});
$('.grr').on('click', function() {
  $('.typeReactLike').css("color", "#f7714b");
  document.getElementById('typeReactLikeID').innerHTML = 'Angry';
});
