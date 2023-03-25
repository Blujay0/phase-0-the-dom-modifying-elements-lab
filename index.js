// Write your code here!

// remove DOM node main#main
main.remove();

// create newHeader var that points to an <h1> node
const newHeader = document.createElement('h1');

// the newHeader variable that points to the <h1> node has an id of 'victory'
newHeader.setAttribute('id', 'victory');

/* the newHeader variable that points to the <h1> node
with an id of 'victory' has the text "Rocky is the champion"
inside it
*/
newHeader.textContent = "Rocky is the champion"