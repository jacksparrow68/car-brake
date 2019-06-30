
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');

const container = document.getElementById('container');

const car1 = document.getElementById('car1');
const car2 = document.getElementById('car2');
const car3 = document.getElementById('car3');
const car4 = document.getElementById('car4');

function move(){
    lineMove([line1,line2,line3]);
    carMove([car1,car2,car3,car4]);

    requestAnimationFrame(move);
}

// 斑马线移动
function lineMove(lines){
    for(let i = 0;i < lines.length; i++){
        const line = lines[i];
        let lineCurrTop = line.offsetTop;
        if(lineCurrTop > container.offsetHeight){
            lineCurrTop = -150;
        }
        line.style.top = lineCurrTop + 5 + 'px';
    }
}

// 随机数
function randomNum(min, max){
    return Math.floor(Math.random() * (max - min) ) + min;
}

// 小车移动
function carMove(cars){
    for(let i = 0;i < cars.length; i++){
        const car = cars[i];
        let speed = ~~car.getAttribute('speed');
        let carCurrTop = car.offsetTop;
        if(carCurrTop > container.offsetHeight){
            car.style.left = randomNum(0,container.offsetWidth-car.offsetWidth)+'px';
            car.setAttribute('speed',randomNum(1,5));
            carCurrTop = -60;
        }
        car.style.top = carCurrTop + speed + 'px';
    }
}

// 下一帧执行move
requestAnimationFrame(move);
