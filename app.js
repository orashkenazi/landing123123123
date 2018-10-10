
let container = document.getElementById("lettersContainer");

for(let i=0; i<5000; i++) {
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

function printText (top,left,text,options) {
    top = top-1;
    let start = 100*top +left;
    for (let i=0; i< text.length; i++){
        if (text[i] !== ' '){
            let T =document.getElementById(''+(start+i));
            T.classList.remove('baclkletter_A','baclkletter_C','baclkletter_G','baclkletter_T');
            T.innerHTML = text[i].toUpperCase();
            T.classList.add('text_letters')

            if (options) {
                if (options.bold){
                    T.style='font-weight:700;';
                }
                
            }
        }
 
    }

}


printText(5,7,'Hi Guys!');

printText(7,7,"We'll be back soon to change the world of genetic BIG DATA.");


printText(10,7,"Our ninjas are working hard on our new website and it will be on air in:");


printText(14,17,"23 DAYS");
printText(14,27,"15 HOURS");
printText(14,38,"19 MINUTES");
printText(14,51,"13 SECONDS");

printText(20,7,"Subscribe ");
printText(20,17,"here",{bold:true});
printText(20,21," for early notification of our website's launch date:");


printText(23,7,"In the meantime, if you are as excited as we are, and want to get in touch"); 
printText(24,7,"we'd be happy if you could contact us at: change@od-machine.com"); 


printText(32,7,"Thank you for your patience! ");   
printText(34,7,"ODMachine team",{bold:true});   

/*
Subscribe here for early notification of our website’s launch date: 

In the meantime, if you are as excited as we are, and want to get in touch, we’d be happy if you could contact us at: change@od-machine.com 


Thank you for your patience! 

ODMachine team
 */

 ivl = setInterval(function (){
    let t = parseInt(''+document.getElementById('1351').innerHTML + document.getElementById('1352').innerHTML);

    t= t-1;
    
    if (t>-1) {
        if (t > 9) {
            console.log(Math.floor(t/10),t-(10*Math.floor(t/10)))
            printText(14,51,''+Math.floor(t/10));
            printText(14,52,''+(t-(10*Math.floor(t/10))));
        }
        
        else {
            printText(14,51,'0');
            printText(14,52,''+t);

            //changem minutes...
            printText(14,39,''+(parseInt(document.getElementById('1339').innerHTML)-1));
        }
       
    }
  
    else {
        printText(14,51,''+(t+60));
    }
 },1000)


