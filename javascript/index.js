
let links = document.querySelector("#product-categories-links");
let display = 0;
document.querySelector("#product-categories").addEventListener("click", (e) => {
    e.preventDefault();
    if(display == 1){
        links.classList.add("hide");
        display = 0;
    }
    else{
        links.classList.remove("hide");
        display = 1;
    }
});

// setInterval(()=>{
//     var box = document.querySelector("#ad");
//     if(display == 1){
//         box.style.display = 'block';
//         display = 0;
//     }
//     else{
//         box.style.display = 'none';
//         display = 1;
//     }
// },4000);
 

