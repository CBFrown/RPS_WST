
function rockb(){
    let result = '';
    let random = Math.round(Math.random() * 2);

    if (random == 0) {
        result = 'rock';
        alert(`The result is ${result}. Its a tie`);
    }
    else if (random == 1) {
        result = 'paper';
        alert(`The result is ${result}. You lost`);
    }
    else if (random == 2){
        result = 'scissor';
        alert(`The result is ${result}. You won`);
    }
    else{
        alert(`The result is ${result}. An error had occured`);
    }
    console.log(result);
}


function paperb(){
    let result = '';
    let random = Math.round(Math.random() * 2);

    if (random == 0) {
        result = 'rock';
        alert(`The result is ${result}. You won`);
    }
    else if (random == 1) {
        result = 'paper';
        alert(`The result is ${result}. Its a tie`);
    }
    else if (random == 2){
        result = 'scissor';
        alert(`The result is ${result}. You lost`);
    }else{
        alert(`The result is ${result}. An error had occured`);
    }

    console.log(result);
}

function scissorb(){
    let result = '';
    let random = Math.round(Math.random() * 2);

    if (random == 0) {
        result = 'rock';
        alert(`The result is ${result}. You lost`);
    }
    else if (random == 1) {
        result = 'paper';
        alert(`The result is ${result}. You won`);
    }
    else if (random == 2){
        result = 'scissor';
        alert(`The result is ${result}. Its a tie`);
    }
    else{
        alert(`The result is ${result}. An error had occured`);
    }

    console.log(result);
}