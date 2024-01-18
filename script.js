const btn = document.querySelectorAll(".services1 button"); 
btn.forEach((e)=>{
   
    e.addEventListener("click", function() {
        console.log(e)
        if(e.innerHTML ==="Follow Me"){
         e.innerHTML = "Following";
         e.style.backgroundColor = "black";
     }else{
         e.innerHTML = "Follow Me";
         e.style.backgroundColor = "rgb(0, 115, 255)";
     }
         
     });
})

const heart = document.querySelectorAll(".services1 i");
heart.forEach((e)=>{
   
    e.addEventListener("click", function() {
        console.log(e)
        if(e.classList[0] ==="ri-heart-3-line"){
            e.classList.remove("ri-heart-3-line");
            e.classList.add("ri-heart-3-fill");
         }else{
             e.classList.remove("ri-heart-3-fill");
             e.classList.add("ri-heart-3-line");
         }
         
     });
})





