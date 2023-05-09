document.getElementById("message").style.fontSize = "x-large";


function rockb(){
    let result = '';
    let random = Math.round(Math.random() * 2);

    if (random == 0) {
        result = 'rock';
        //alert(`The result is ${result}. Its a tie`);
        document.getElementById('opponet').src='rrr.png';
        document.getElementById("message").style.color = "black";
        document.getElementById('message').innerHTML=`Its a tie`;
        
    }
    else if (random == 1) {
        result = 'paper';
        //alert(`The result is ${result}. You lost`);
        document.getElementById('opponet').src='ppp.png';
        document.getElementById("message").style.color = "firebrick";
        document.getElementById('message').innerHTML=`You Lost`;
    }
    else if (random == 2){
        result = 'scissor';
        //alert(`The result is ${result}. You won`);
        document.getElementById('opponet').src='sss.png';
        document.getElementById("message").style.color = "green";
        document.getElementById('message').innerHTML=`You Won`;
    }
    else{
        //alert(`The result is ${result}. An error had occured`);
        document.getElementById('opponet').src='bot.png';
        document.getElementById("message").style.color = "crimson";
        document.getElementById('message').innerHTML=`An error had occured. Please try again later`;
    }
    console.log(result);
}


function paperb(){
    let result = '';
    let random = Math.round(Math.random() * 2);

    if (random == 0) {
        result = 'rock';
        //alert(`The result is ${result}. You won`);
        document.getElementById('opponet').src='rrr.png';
        document.getElementById("message").style.color = "green";
        document.getElementById('message').innerHTML=`You won`;
    }
    else if (random == 1) {
        result = 'paper';
        //alert(`The result is ${result}. Its a tie`);
        document.getElementById('opponet').src='ppp.png';
        document.getElementById("message").style.color = "black";
        document.getElementById('message').innerHTML=`Its a tie`;
    }
    else if (random == 2){
        result = 'scissor';
        //alert(`The result is ${result}. You lost`);
        document.getElementById('opponet').src='sss.png';
        document.getElementById("message").style.color = "firebrick";
        document.getElementById('message').innerHTML=`You lost`;
    }else{
        //alert(`The result is ${result}. An error had occured`);
        document.getElementById('opponet').src='bot.png'
        document.getElementById("message").style.color = "crimson";
        document.getElementById('message').innerHTML=`An error had occured. Please try again later`;
    }

    console.log(result);
}

function scissorb(){
    let result = '';
    let random = Math.round(Math.random() * 2);

    if (random == 0) {
        result = 'rock';
        //alert(`The result is ${result}. You lost`);
        document.getElementById('opponet').src='rrr.png';
        document.getElementById("message").style.color = "firebrick";
        document.getElementById('message').innerHTML=`You Lost`;
    }
    else if (random == 1) {
        result = 'paper';
        //alert(`The result is ${result}. You won`);
        document.getElementById('opponet').src='ppp.png';
        document.getElementById("message").style.color = "green";
        document.getElementById('message').innerHTML=`You won`;
    }
    else if (random == 2){
        result = 'scissor';
        //alert(`The result is ${result}. Its a tie`);
        document.getElementById('opponet').src='sss.png';
        document.getElementById("message").style.color = "black";
        document.getElementById('message').innerHTML=`Its a tie`;
    }
    else{
        //alert(`The result is ${result}. An error had occured`);
        document.getElementById('opponet').src='bot.png';
        document.getElementById("message").style.color = "crimson";
        document.getElementById('message').innerHTML=`An error had occured. Please try again later`;
    }

    console.log(result);
}