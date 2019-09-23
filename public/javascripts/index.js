window.onload = function () {
    addEvent()
};

let addEvent =()=>{
    let button = document.querySelector('.menu-open-button');
    if(document.readyState === "complete"){
        button.addEventListener('click', handleClick, false);
    }
};

let handleClick=(el)=>{
    let sidebar = document.querySelector('.sidebar');
    console.log(sidebar.classList.contains("slideInRight") );
    if(sidebar.classList.contains('slideInRight')){
        sidebar.classList.remove("slideInRight");
    }else {
        sidebar.classList.add("slideInRight");
    }

    sidebar.classList.toggle("slideOutRight");
};

