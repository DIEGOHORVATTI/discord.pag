$(() => {
    $('#avatar').attr('src', `https://cdn.discordapp.com/avatars/776244960596066325/${avatarURL}?size=4096`);
    $('#username').text(usernameStr);
    $('#discrim').text(`#${discrimStr}`);
})

$(() => {
    $('#avatar_2').attr('src', `https://cdn.discordapp.com/avatars/230400157819207680/${avatarURL_2}?size=128`);
    $('#username_2').text(usernameStr_2);
    $('#discrim_2').text(`#${discrimStr_2}`);
})

var user = new Array()
user[0] = '0'
user[1] = '1'
user[2] = '2'

//console.log(user)
var checkbox = document.querySelector("#input_1");