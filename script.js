const toggleDiv = (id) => {
   let elems = document.getElementsByClassName('show');
   for (let i = 0; i < elems.length; i++) {
       let clicked = elems[i].id;
       if (clicked === id) {
           elems[i].style.display = 'block';
       }
       else {
           elems[i].style.display = 'none';
       }
   }
}

