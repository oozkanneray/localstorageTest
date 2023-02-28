const btn = document.querySelector(".btn");

let mode = true


btn.onclick = () => {
    if(mode){
        localStorage.setItem("currentColor","white")
        localStorage.setItem("textColor","black")
        mode = false
    } else{
        localStorage.setItem("currentColor","black");
        localStorage.setItem("textColor","white")
        mode = true;
    }
    document.body.style.backgroundColor = localStorage.getItem("currentColor")
    document.querySelector(".text").style.color = localStorage.getItem("textColor")
}


window.onload =() =>{
        document.body.style.backgroundColor = localStorage.getItem("currentColor")
        document.querySelector(".text").style.color = localStorage.getItem("textColor")
    }