const radiusElem = document.querySelector('#radius');
const heightElem = document.querySelector('#height');
const calcButton = document.querySelector('#calcButton');
const areaElem = document.querySelector('#area');

calcButton.addEventListener('click',() => {

    let radius = Number (radiusElem.value);
    let height = Number (heightElem.value);
    let area = calcarea (radius, height);
    console.log(area);
    areaElem.value = area;
});


function calcarea(radius, height){
    let area = (1.0 / 3.0)*Math.pow(radius, 2)*Math.PI*height;
    return area;
}