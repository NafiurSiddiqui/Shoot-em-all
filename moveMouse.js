let cursor = document.getElementById('cursor');

document.addEventListener('mousemove',function(e){
    let x = e.clientX;
    let y = e.clientY;
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;

});

// console.log('hello');