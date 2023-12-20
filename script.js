let cros = document.getElementsByClassName("toggle1")[0] ; 

let nav = document.getElementsByClassName("nav-links"); 

let toggle = ()=>{
    if("fa-x" == cros.classList[2]){
        cros.classList.remove("fa-x") ;
        cros.classList.add("fa-bars") ; 
        console.log(cros.classList)
    }
    else{

        cros.classList.add("fa-x") ;
        cros.classList.remove("fa-bars") ; 
        console.log(cros.classList) ;   
    }
}