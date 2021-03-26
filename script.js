
const elem = document.getElementById('get-more-container');

elem.addEventListener('click', (e) => {
    let clickedId = e.target.dataset.id;
    if (clickedId) {
        let previous = document.querySelector('.toggle');
        let listSelect = document.querySelector('.selected');
        listSelect.classList.remove('selected');
        e.target.classList.add('selected');
        previous.classList.remove('toggle');
        let toggleElem = document.getElementById(clickedId);
        toggleElem.classList.add('toggle');
    }
})