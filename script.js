
let imageIndex = 0;
function heroDiapo(){
 
    let images = document.getElementsByClassName('image');
        for(i = 0; i < images.length; i++){
            images[i].style.display = "none";
        }
        imageIndex++;

        if(imageIndex >= images.length){
            imageIndex = 0;
        }

        images[imageIndex].style.display = "block";

        setTimeout(heroDiapo,10000);
       
}
heroDiapo();

function hoverImg(){
    
    const hoverP = document.querySelectorAll('.filière');
    hoverP.forEach(function(p,index){
        p.addEventListener('mouseover',function(){
          const imgcontainer =  document.querySelectorAll('.img-format');
            const img =  imgcontainer[index].querySelector("img");
            // img.classList.toggle("activeIn");
            img.style.transform = 'scale(0.9)';
            img.style.transition = '0.25s';
            img.style.boxShadow = '1px 1px 10px 5px rgba(0, 0, 0, 0.651)';

        })
    })
    hoverP.forEach(function(p,index){
        p.addEventListener('mouseout',function(){
          const imgcontainer =  document.querySelectorAll('.img-format');
            const img =  imgcontainer[index].querySelector("img");
            img.style.transform = 'scale(1)';
            img.style.transition = '0.25s';
            img.style.boxShadow = 'none';
        })
    })

}
hoverImg();

function upTotop(){
    const up = document.getElementById("up");
    up.addEventListener("click",function(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    })
   
}
upTotop();


function upOut(){
    const up = document.getElementById("up");
    const header = document.querySelector('header');
    document.addEventListener("scroll", function(){
        if(window.scrollY > 200){
            up.style.display = "block"
        } else{
            up.style.display = "none"
        }
        if(window.scrollY > 0){
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }
        
    })
}
upOut();

function crossBar(){
    const nav = document.querySelector(".nav2");
    const transparent = document.querySelector(".transparent");
    const bar = document.querySelector(".menu");
    bar.addEventListener("click",function(){
        bar.classList.toggle("active");
        nav.classList.toggle("active");
        transparent.classList.toggle("active");
    })
}
crossBar()


function close(){
    const nav = document.querySelector(".nav2");
    const transparent = document.querySelector(".transparent");
    const bar = document.querySelector(".menu");
 
const atout = document.querySelectorAll("#close");
atout.forEach(function(lien){
    lien.addEventListener("click",function(){
        bar.classList.toggle("active");
        nav.classList.toggle("active");
        transparent.classList.toggle("active");
     })
})

}
close();




function inscription(){
    const insp = document.querySelectorAll("#insp");
    const over = document.querySelector('.over')
    const backgroundBlender = document.querySelector('.background-blender');
    const form = document.getElementById('inspForm');
    const menu2 =  document.querySelector(".menu2");
    const body = document.querySelector("body");
    
    insp.forEach(function(btn){
        btn.addEventListener("click",function(){
            console.log("click");
            backgroundBlender.classList.toggle("active");
           form.classList.toggle("active");
           body.classList.toggle("active");
           over.classList.toggle("active");
           
           
        })
    })
}
inscription();

function out(){
    const transparent = document.querySelector(".transparent");
    const nav = document.querySelector(".nav2");
    const bar = document.querySelector(".menu");
  
    transparent.addEventListener('click', function(){
        console.log('click');
        bar.classList.toggle("active");
        nav.classList.toggle("active");
        transparent.classList.toggle("active");
       
    })
    
    };

out();


