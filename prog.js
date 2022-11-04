
var list = document.querySelectorAll('.nav-menu a'); 
for(var i = 0 ; i<list.length ; i++){
    list[i].addEventListener('click', function(event){
        event.preventDefault();
        var sectionId = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(sectionId);
        var top = 0;
        var scroll = setInterval(function(){
            var coordinates = targetSection.getBoundingClientRect();
            if( coordinates.top == top||coordinates.top<=0){
                clearInterval(scroll);
                return;
            }
            top = coordinates.top;
            window.scrollBy(0,50);
        },10);
    });
}
// var scroll;
//  for(var i = 0 ; i<list.length ; i++){
// //     list[i].addEventListener('click', function(event){
// //         event.preventDefault();
// //         var sectionId = this.textContent.trim().toLowerCase();
// //         var targetSection = document.getElementById(sectionId);
// //         var top = 0;
// //         scroll = setInterval(scrollVertically,10,targetSection);
// //     });
// }
// for(var i = 0 ; i<list.length ; i++){
//     list[i].addEventListener('click', function(event){
//         event.preventDefault();
//         var sectionId = this.textContent.trim().toLowerCase();
//         var targetSection = document.getElementById(sectionId);
//         var top = 0;
//         scroll = setInterval(function(){
//             scrollVertically(targetSection,top);
//         },10);
//     });
// }
// function scrollVertically(targetSection,top){
//     var coordinates = targetSection.getBoundingClientRect();
//     if( coordinates.top == top || coordinates.top<=0){
//         clearInterval(scroll);
//         return;
//     }
//     top = coordinates.top;
//     window.scrollBy(0,50);
// }

var progressBar = document.querySelectorAll('.skill-progress > div');
var skillContainer = document.getElementById('skill-container');
window.addEventListener('scroll', checkScroll);
var check = false;
initializeBars();
function initializeBars(){
    for(let bar of progressBar){
        bar.style.width = 0 +'%';
    }
}

function fillBars(){
    for(let bar of progressBar){
        let targetWidth = bar.getAttribute('width');
        let currentWidth = 0;
        var fill = setInterval(function(){
            if(currentWidth>=targetWidth){
                clearInterval(fill);
                return;
            }
            bar.style.width = currentWidth + 1 + '%';
            currentWidth += 1;
        },1);
    }
}

function checkScroll(){
    var c = skillContainer.getBoundingClientRect();
    if(!check && c.top <= window.innerHeight){
        check = true;
        fillBars();
    }else if(c.top > window.innerHeight){
        check = false;
        initializeBars();
    }
}