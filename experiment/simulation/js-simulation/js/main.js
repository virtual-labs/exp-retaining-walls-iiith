'use strict';

(function() {
    console.log("printdropdown");
    generateDropdown();
})();

// this function generate the dropdown
function generateDropdown() {
    console.log("printdropdown");
    var dropdown = ['Select Type of Portal Frame', 'Portal Frame1', 'Portal Frame2']
    var select = document.getElementById("dropdown");
    for (var i = 0; i < dropdown.length; i++) {
        var optn = dropdown[i];
        var el = document.createElement("option");
        el.textContent = optn;
        el.value = optn;
        select.appendChild(el);
    }
    // document.getElementById("procedure-message").innerHTML = "Select type of Portal Frame from the dropdown menu";
}

function onSelection() {
    var selectedDropdown = document.getElementById("dropdown");
    console.log(selectedDropdown);
    var selectedDropdownval = selectedDropdown.options[selectedDropdown.selectedIndex].text;
    if (selectedDropdownval === "Portal Frame1") {
        document.getElementById("firststeel").style.display = "block";
        document.getElementById("main-beam1").style.display = "blockj=[]n";

        // document.getElementById("procedure-message").innerHTML = "<li>Select the load type </li>" + "<li> click on Start button</li>";
           // document.getElementById("main-beam1").style.display="block";   
    } else if (selectedDropdownval === "Portal Frame2") {
        console.log("testboya");
        document.getElementById("firststeel").style.display = "none";
        document.getElementById("secondsteel").style.display = "block";
        document.getElementById("procedure-message").innerHTML = "<li>Select the load type" + "click on Start button</li>" ;
        // previousClickedMainBeam.push("main-beam1");
        document.getElementById("main-beam1").style.display = "none";
        document.getElementById("main-beam2").style.display = "block";
    } 
}


// //this function shows the animations in the observations section 
// function showObservations(ele1, ele2) {
//     var path1 = document.getElementsByClassName(ele1)[0].getElementsByTagName("path")[0];
//     var path1Val = path1.getAttribute("d")
//     var path2 = document.getElementsByClassName(ele2)[0].getElementsByTagName("path")[0];
//     var path2Val = path2.getAttribute("d")
//     animateObserve(ele1, path1Val);
//     console.log(path1Val);
//     // animateObserve(ele2, path2Val);
//     console.log(path2Val);
// }

var previousClickedEle = [];
// var previousClickedBeam = [];
var previousClickedMainBeam = []; 
// var mainBeamDisplay = [];
// var previousClickedLoadtype = [];

// function play() {
//     moveArrowDown("arrow", 110);
//     const myTimeout = setTimeout(playSimulation, 2000);
//     // setTimeout(playSimulation, 3000);
//     // playSimulation();
// }

function playSimulation() {
    console.log("printplay");
    var radios = document.getElementsByTagName('input');
    var value;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].type === 'radio' && radios[i].checked) {
            // get value, set checked flag or do whatever you need to
            value = radios[i].value;
            var selectedDropdown = document.getElementById("dropdown");
            console.log(selectedDropdown);
            var selectedDropdownval = selectedDropdown.options[selectedDropdown.selectedIndex].text;
        }    
    }      
    
    if (previousClickedEle.length > 0) {
        for (var i = 0; i < previousClickedEle.length; i++) {
            console.log("test");
            document.getElementById(previousClickedEle[i]).style.display = "none";
        }
    }

    // if (previousClickedBeam.length > 0) {
    //     for (var i = 0; i < previousClickedBeam.length; i++) {
    //         console.log("test");
    //         document.getElementById(previousClickedBeam[i]).style.display = "none";
    //     }
    // }
    
    if (previousClickedMainBeam.length > 0) {
        for (var i = 0; i < previousClickedMainBeam.length; i++) {
            console.log("test");
            document.getElementById(previousClickedMainBeam[i]).style.display = "none";
        }
    }
    
    // if (mainBeamDisplay.length > 0) {
    //     for (var i = 0; i < mainBeamDisplay.length; i++) {
    //         console.log("test");
    //         document.getElementById(mainBeamDisplay[i]).style.display = "none";
    //     }
    // }
         
    if (value === "Bridge 1" && selectedDropdownval === "Portal Frame1") {
        // console.log("test");
        // previousClickedEle.push("arrow");
        // document.getElementById("arrow").style.display = "block";
        document.getElementById("arrow").style.textAlign="right";
        moveArrowRight("arrow", 80);
        const myTimeout = setTimeout(function(){
            // document.getElementById("main-beam1").style.animationDelay = "10s";
            moveArrowRight("main-beam1", 100);
            }, 1000);
        

        // const myTimeout = setTimeout(,1500);
    }
    if (value === "Bridge 2" && selectedDropdownval === "Portal Frame1") {
        previousClickedEle.push("arrow");
        document.getElementById("arrow").style.display = "none";
        // previousClickedEle.push("set1");
        // document.getElementById("set1").style.display = "block";
        moveArrowDown("set1", 73);
        const myTimeout = setTimeout(function() {
            // moveArrowDown("set1",110);
            // document.getElementById("mes3").innerHTML = "Maximum shear force occurs at the fixed end";
            // document.getElementById("mes4").innerHTML = "text message bm";
            // console.log("test");
            // cantiUdlBeam("#canti-pl-main-beam", "#canti-beam-udl");
            previousClickedMainBeam.push("main-beam1");
            document.getElementById("main-beam1").style.display = "none";
            // console.log("beam1");
            previousClickedMainBeam.push("main-beam2");
            document.getElementById("main-beam2").style.display = "block";
            // mainBeamDisplay.push("main-beam1");
            // document.getElementById("main-beam1").style.display = "block";
            // animateObserve('.canti-udl-sfd path', 'M 100 300 L 450 300 L 100 400 L 100 300 L 100 300');
            // animateObserve('.canti-udl-bmd path', 'M 100 300 Q 250 300 500 300 C 350 300 150 350 100 400 Q 100 400 100 300');
        }, 1000);
    }
}
    
