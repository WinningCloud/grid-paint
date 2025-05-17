const pixels_container = document.querySelector(".container");

let pixel_count = 64;


const numberInput = document.querySelector("#numBox");


const submitButton = document.querySelector("#numEnterButton");




let border_size = 0.01;

function drawPixels(pixel_count){
let unitPixelDimension = 500/pixel_count - (2*border_size);
console.log(unitPixelDimension);

for(let j = 0; j<pixel_count; j++){
    const rowDiv = document.createElement("div");
    rowDiv.style.display = "flex"

for(let i = 0; i<pixel_count; i++){
    const tempPixel = document.createElement("div");
    tempPixel.classList.add("pixel");
    tempPixel.style.height = `${unitPixelDimension}px`;
    tempPixel.style.width = `${unitPixelDimension}px`;
    // tempPixel.textContent = `${i}`;
  
    tempPixel.style.border = `${border_size}px solid black`;
    rowDiv.appendChild(tempPixel);
    // console.log(`${i} pixel appended`);
}
pixels_container.appendChild(rowDiv);
}

}

submitButton.addEventListener("click", ()=>{
    // alert("Button clicked");
    // console.log("Button clicked");

    if(Number(numberInput.value) <= 100){
    pixels_container.innerHTML = "";
    console.log(`Number of pixels in a row = ${numberInput.value}`);
    pixel_count = Number(numberInput.value);
    drawPixels(pixel_count);
    }
    else{
        alert("Resolution must be <= 100");
    }
});

