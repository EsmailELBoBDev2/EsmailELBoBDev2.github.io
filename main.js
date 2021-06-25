// Thanks to: https://jorcus.com/add-css-style-console-log/

const style1 = [
'background-image: url("https://media.giphy.com/media/10kABVanhwykJW/giphy.gif")',
    'background-size: cover',
    'padding: 100px 200px'
].join(';');
const style2 = [
    'font-size: 20px',
    'color: green'
].join(';');
console.log("%cGet rickrolled\n\n %c ", style2, style1);