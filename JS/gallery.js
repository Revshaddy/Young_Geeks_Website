const over = document.getElementsByClassName("over")[0];
let overr = document.getElementById("overr")


window.addEventListener("scroll", () =>{
    if(scrollY >= 422){
        over.style.backgroundColor = "white"
    }else{
        overr.style.backgroundColor = ""
    }
    console.log(Math.floor(scrollY))
})

