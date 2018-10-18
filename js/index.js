//creater back letters:

let container = document.getElementById("lettersContainer");
container.addEventListener("click", (event) => {
    let path =event.path || (event.composedPath && event.composedPath());
    let div = path[0] 
   
    if (!div.classList.contains("text_letters")) {
        activeLetter(div.innerHTML);
    }
});


let numdivs = 1300
for(let i=0; i<numdivs; i++) {
    let n = Math.random();
    let div = document.createElement("div");
    let l = 'A';
    if (n>0.25) {
        if (n >0.5) {
            if (n>0.75){
                l='G';
            }
            else {
                l='C'
            }
        }

        else {
            l = 'T';
        }

    }
    div.innerHTML = l;
    div.id=i;
    div.classList.add('backletter');
    div.classList.add('backletter_'+l)



    
    container.appendChild(div);
}


function activeLetter(letter){
  let marker = document.getElementById("marker");
  var classList = marker.classList;
 
  while (classList.length > 0) {
  
      classList.remove(classList.item(0));
  }
  classList.add("mark"+letter)
}



// counters





var start  = new Date(2018, 9, 15, 0, 0, 0, 0)

var finish = new Date(2019, 1, 1, 12, 0, 0, 0)

setInterval(function() {
    var seconds =  ( finish -Date.now() )/1000; 
    var daysFromLunch =   Math.floor( ( finish - start )/1000 / (3600*24));; 
  
    var d = Math.floor(seconds / (3600*24));
    var h = Math.floor(seconds % (3600*24) / 3600);
    var m = Math.floor(seconds % 3600 / 60);
    var s = Math.floor(seconds % 3600 % 60);
    
    //console.log(d+" days, "+h+" Hrs, "+m+" Minutes, "+s+" Seconds");

    //days:

    var $circle = $('#bar_d');
    var r = $circle.attr('r');
    var c = Math.PI*(r*2);

    var pct = ((daysFromLunch-d)/daysFromLunch)*c;
    
    $circle.css({ strokeDashoffset: pct});
    
    $('#days').attr('data-pct',d);

    //hours:

    var $circle = $('#bar_h');
    var r = $circle.attr('r');
    var c = Math.PI*(r*2);

    var pct = ((24-h)/24)*c;
    
    $circle.css({ strokeDashoffset: pct});
    
    $('#hours').attr('data-pct',h);

     //minutes:

     var $circle = $('#bar_m');
     var r = $circle.attr('r');
     var c = Math.PI*(r*2);
 
     var pct = ((60-m)/60)*c;
     
     $circle.css({ strokeDashoffset: pct});
     
     $('#minutes').attr('data-pct',m);

       //seconds:

       var $circle = $('#bar_s');
       var r = $circle.attr('r');
       var c = Math.PI*(r*2);
   
       var pct = ((60-s)/60)*c;
       
       $circle.css({ strokeDashoffset: pct});
       
       $('#seconds').attr('data-pct',s);
 
}, 1000); // update about every seconds



//check screen ratio

window.addEventListener('resize', ()=> {
 if(document.getElementById("div1").getBoundingClientRect().width <300) {
   console.log('miaw')
  
   document.getElementById("container_div").style.gridTemplateColumns ='350px auto';
  }
})