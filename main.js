const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    changeColor(button);
  });
});

function changeColor(button) {
  const colors = ['red', 'yellow', 'green'];
  const currentColor = button.id;
  const nextColor = colors[(colors.indexOf(currentColor) + 1) % colors.length];

  button.style.backgroundColor = nextColor;

  setTimeout(() => {
    button.style.backgroundColor = currentColor;
  }, 2000); 
}
