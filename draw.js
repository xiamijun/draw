window.onload=function () {
    let redBtn=document.getElementById('redBtn');
    let greenBtn=document.getElementById('greenBtn');
    let canvas=document.getElementById('canvas');
    let context=canvas.getContext('2d');
    let color='red';
    let is_mouse_down=false;
    let x1,y1;

    redBtn.onclick=function () {
        color='red';
    };

    greenBtn.onclick=function () {
        color='green';
    };

    function render(x1,y1,x2,y2) {
        context.strokeStyle=color;
        context.lineWidth=5;
        context.beginPath();
        context.moveTo(x1,y1);
        context.lineTo(x2,y2);
        context.stroke();
    }

    canvas.onmousemove=function (e) {
        let x2=e.clientX-this.offsetLeft;
        let y2=e.clientY-this.offsetTop;
        if (is_mouse_down){
            render(x1,y1,x2,y2);
        }
        x1=e.clientX-this.offsetLeft;
        y1=e.clientY-this.offsetTop;
    };

    canvas.onmousedown=function () {
        is_mouse_down=true;
    };

    canvas.onmouseup=function () {
        is_mouse_down=false;
    };
};