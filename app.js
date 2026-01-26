setInterval(() => {
    const randomColor = `rgb(
    ${Math.floor(Math.random()*256)},
    ${Math.floor(Math.random()*256)},
    ${Math.floor(Math.random()*256)}
  )`;

    document.body.style.backgroundColor = randomColor;
}, 100);

const imageFiles = [
    'papaj.png',    
    'kremowka.png'  
];

const totalImages = 4;

function randomPosition(imgWidth, imgHeight) {
    const x = Math.random() * (window.innerWidth - imgWidth);
    const y = Math.random() * (window.innerHeight - imgHeight);
    return {x, y};
}

const images = Array.from({length: totalImages}, () => {
    const el = document.createElement('img');

    const file = imageFiles[Math.floor(Math.random() * imageFiles.length)];
    el.src = file;

    el.style.position = 'absolute';
    el.style.width = '120px';
    document.body.appendChild(el);

    const pos = randomPosition(100, 100);
    el.style.left = pos.x + 'px';
    el.style.top = pos.y + 'px';

    const dx = Math.random() > 0.5 ? 7.5 : -7.5;
    const dy = Math.random() > 0.5 ? 7.5 : -7.5;

    return {el, x: pos.x, y: pos.y, dx, dy};
});

function animate() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    images.forEach(img => {
        img.x += img.dx;
        img.y += img.dy;

        if (img.x + 100 >= width || img.x <= 0) img.dx *= -1;
        if (img.y + 100 >= height || img.y <= 0) img.dy *= -1;

        img.el.style.left = img.x + 'px';
        img.el.style.top = img.y + 'px';
    });

    requestAnimationFrame(animate);
}

animate();
