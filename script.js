// var clickHandler = (item) => {
//     let list = document.getElementById(item).children;
//     for (let i = 0; i < list.length; i++) {
//         let navItem = list[i];
//         if (navItem.classList.contains('selected')) {
//             navItem.classList.remove('selected');
//         }
//         navItem.addEventListener('click', (e) => {
//             let clickedId = e.target.dataset.id;
//             e.target.classList.add('selected');
//             document.getElementById(clickedId).classList.remove('hide');
//         })
//     }
// }

// clickHandler('get-more-nav')

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