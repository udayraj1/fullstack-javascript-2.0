// first step: grab and store the element on which event listener is need to be added
const btn = document.getElementById('button');
// This code is used to generate the hex code for the random color
const randomColor = () => {
    let val = '0123456789ABCDEF';
    let cons = '#';
    for (let i = 0; i < 6; i++) {
        cons = cons + val[Math.floor(Math.random() * 16)];
    }
    return cons;
};
// Just a print statement to debug or see if it is generating the valid 6 digit hex code 
console.log(randomColor());
// Step 2: Function to apply the style of background color to a body
function changeRandomColor() {
    document.body.style.backgroundColor = randomColor();
}
// Step 3: Now add event listener to the grabbed element ND CALL THE function from which we need to take the some action in this case change bgc of body
btn.addEventListener('click', changeRandomColor);
