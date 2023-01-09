const app = {

    init: function() {
       // Listeners on both fields during keyup
       let textField = document.getElementById('text');
       let numberField = document.getElementById('number_lines');
       textField.addEventListener('keyup', app.handlerKeyUp);
       numberField.addEventListener('keyup', app.handlerKeyUp);
    },

    handlerKeyUp: function() {
        // Get the value of fields
        // Select the board
        // Copy x times (x = number field) the value of text field and display it in board

        let sentenceToPrint = document.getElementById('text').value;
        let numberToPrint = document.getElementById('number_lines').value;
        
        let boards = document.getElementsByClassName('text-board');
        let myboard = boards[0];
        let mytext = "";
        
        for (let i = 0; i < numberToPrint; i++) { 
            let newP = document.createElement('p').textContent = sentenceToPrint;
            mytext = mytext + newP + '<br>';
        }

        myboard.innerHTML = mytext;
    }
}

document.addEventListener('DOMContentLoaded', app.init);