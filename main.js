/*
    
*/

function showSavedUser() {
   let nome = document.getElementById('txt-nome').value; 
   let email = document.getElementById('txt-email').value; 
   alert(nome+' <'+email+'>');
}

function limpar() {
    $('#txt-nome').val('');
    $('#txt-email').val('');
}
