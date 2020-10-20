// Реализовать перекрестье, двигающееся за мышкой по экрану
window.addEventListener('mousemove', function (event) {
    const lineX = document.querySelector('.lineX');
    const lineY = document.querySelector('.lineY');
    let x = event.clientX;
    let y = event.clientY;
    lineX.style.top = `${y}px`;
    lineY.style.left = `${x}px`;
});

// (Усложненное) Реализовать выделенную область по зажатию мыши и движению ее в сторону. При отпускании кнопки мыши выделение исчезает.
function createArea(event) {
    const area = document.querySelector('.area');
    let startX = event.clientX;
    let startY = event.clientY;

    const moveArea = (event) => {
        let moveX = event.clientX;
        let moveY = event.clientY;

        if(startX < moveX) {
            area.style.left = `${startX}px`;
            area.style.width = `${moveX - startX}px`;
        } else {
            area.style.left = `${moveX}px`;
            area.style.width = `${startX - moveX}px`;
        }

        if(startY < moveY) {
            area.style.top = `${startY}px`;
            area.style.height = `${moveY - startY}px`;
        } else {
            area.style.top = `${moveY}px`;
            area.style.height = `${startY - moveY}px`;
        }
    }

    document.addEventListener('mousemove', moveArea);

    document.addEventListener('mouseup', () => {
        area.removeAttribute('style');
        document.removeEventListener('mousemove', moveArea);
    });
};

document.addEventListener('mousedown', createArea);