// https://jorcus.com/add-css-style-console-log/

const style1 = [
'background-image: url("https://media.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif")',
    'background-size: cover',
    'padding: 100px 200px'
].join(';');
const style2 = [
    'font-size: 20px',
    'color: white'
].join(';');
console.log("%cHeeeey, \n\n %c ", style2, style1);