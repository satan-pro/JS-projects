// Variables

let openBtn = document.getElementById('open-btn');
let modalCont = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-btn');

// Event Listeners

openBtn.addEventListener('click', function(){

    modalCont.style.display = 'block';

});

closeBtn.addEventListener('click', function(){

    modalCont.style.display = 'none';

});

window.addEventListener('click', function(e){

    if(e.target === modalCont)
    {
        modalCont.style.display = 'none';
    }
});