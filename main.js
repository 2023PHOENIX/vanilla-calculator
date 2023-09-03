const buttons = document.querySelectorAll('.button-item');




for (let button of buttons) {

    button.addEventListener('click', (e) => {
            const instruction = e.target.innerText;


            if (instruction === 'DEL') {
                updateResult(instruction);
            } else if (instruction === 'RESET') {
                updateResult(instruction)
            } else if (instruction === '=') {
                let x = eval(document.querySelector('.result').innerHTML);

                document.querySelector('.result').innerHTML = x;
            } else {
                updateResult(instruction, e.target.innerText);
            }
        }
    )
}


function updateResult(instruction, val) {
    const result = document.querySelector('.result');
    if (instruction === 'RESET') {
        document.querySelector('.result').innerHTML = "";
    } else if (instruction === 'DEL') {

        document.querySelector('.result').innerHTML = document.querySelector('.result').innerHTML.slice(0, -1);
    } else {
        result.innerHTML = result.innerHTML + val;
    }

}


