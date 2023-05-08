
function rockb(){
    let result = '';
    let random = Math.round(Math.random() * 2);

    if (random == 0) {
        result = 'rock';
        alert(`The result is ${result}. Its a tie`);
    }
    else if (random == 1) {
        result = 'scissor';
        alert(`The result is ${result}. You won`);
    }
    else if (random == 2){
        result = 'paper';
        alert(`The result is ${result}. You lose`);
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
        result = 'paper';
        alert(`The result is ${result}. Its a tie`);
    }
    else if (random == 1) {
        result = 'rock';
        alert(`The result is ${result}. You won`);
    }
    else if (random == 2){
        result = 'scissor';
        alert(`The result is ${result}. You lose`);
    }else{
        alert(`The result is ${result}. An error had occured`);
    }
}

function scissorb(){
    let result = '';
    let random = Math.round(Math.random() * 2);

    if (random == 0) {
        result = 'scissor';
        alert(`The result is ${result}. Its a tie`);
    }
    else if (random == 1) {
        result = 'paper';
        alert(`The result is ${result}. You won`);
    }
    else if (random == 2){
        result = 'rock';
        alert(`The result is ${result}. You lose`);
    }
    else{
        alert(`The result is ${result}. An error had occured`);
    }
}