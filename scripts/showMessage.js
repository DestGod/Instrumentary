let text = 'Если Ваше устройство плохо работает, включите упрощенное отображение эффектов.', //type your text here
    posTop = document.getElementsByClassName('effects-main')[0].getBoundingClientRect().top, //message top position
    posRight = document.getElementsByClassName('effects-main')[0].getBoundingClientRect().right, //message right position
    offset = document.getElementsByClassName('effects-main')[0].getBoundingClientRect().width*1.2,
    angles = [15,0,15,15], //top left, top right, bottom right, bottom left round angles
    message,
    opacity = 0,
    timeout = 2;


message = document.createElement('div');

let style = message.style;
    style.display = 'none';
    style.backgroundColor = '#000';
    style.padding = '15px';
    style.position = 'fixed';
    style.top = posTop + 'px';
    style.width = '250px';
    style.right = document.body.clientWidth - posRight + offset + 'px';
    style.zIndex = '980';
    style.color = '#fff';
    style.opacity = opacity;
    style.borderRadius = angles[0] + 'px ' + angles[1] + 'px ' + angles[2] + 'px ' + angles[3] + 'px ';

let node = document.createTextNode(text);
message.appendChild(node);

document.body.appendChild(message);

window.addEventListener('load',function () {
    console.log(posTop);
    let intervalIn;
    let intervalOut;
    setTimeout(function () {
        style.display = 'block';
        intervalIn = setInterval(function () {
            if (opacity >= 0.9) {
                setTimeout(function () {
                    intervalOut = messageOut(intervalOut);
                },5000);
                clearInterval(intervalIn);
            }
            opacity += 0.01;
            style.opacity = opacity;
        },10);
    },timeout * 1000);
    console.log('message');
});

window.addEventListener('resize', function () {
    setTimeout(function () {
        posTop = document.getElementsByClassName('effects-main')[0].getBoundingClientRect().top;
        posRight = document.getElementsByClassName('effects-main')[0].getBoundingClientRect().right;
        offset = document.getElementsByClassName('effects-main')[0].getBoundingClientRect().width*1.2;
        message.style.top = posTop + 'px';
        message.style.right = document.body.clientWidth - posRight + offset + 'px';
    },100);
});

message.addEventListener('click',function () {
    let intervalOut;
    intervalOut = messageOut(intervalOut);
});

function messageOut(intervalId) {
    let id = setInterval(function () {
        if (opacity <= 0) {
            clearInterval(id);
            style.display = 'none';
            console.log('hide message');
        }
        opacity -= 0.01;
        style.opacity = opacity;
    },10);
    return id;
}