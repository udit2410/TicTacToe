console.log("hello");
let music=new Audio("music.mp3");
let audioturn=new Audio("ting.mp3");
let gameover=new Audio("gameover.mp3");


let turn="X";
const changeTurn=()=>{
    return turn==="X"?"0":"X";
}
let isGAme=false;

const checkWin=()=>{

    let boxtexts=document.querySelectorAll(".text");
    let win=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]

    ]

    win.forEach(e=>{
        if(boxtexts[e[0]].innerText===boxtexts[e[1]].innerText&&boxtexts[e[2]].innerText===boxtexts[e[1]].innerText&& boxtexts[e[0]].innerText!='')
        {
           
            document.getElementsByClassName("info")[0].innerText= boxtexts[e[0]].innerText + " Won";
             isGAme=true;
             document.getElementsByClassName('gif')[0].getElementsByTagName('img')[0].style.width="200px";
        }
    })


}
//music.play();

let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(Element=>{
    let boxtext=Element.querySelector(".text");
    Element.addEventListener('click',()=>{
          if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn=changeTurn();
            audioturn.play();
            checkWin();
            if(!isGAme){
                document.getElementsByClassName("info")[0].innerText= "Turn for: "+turn;
            }

            

          }
    })
})

let reset=document.querySelector('button');
console.log(reset);
    reset.addEventListener('click',()=>{
        let boxes=document.getElementsByClassName("box");
        Array.from(boxes).forEach(Element=>{
            let boxtext=Element.querySelector(".text");
            boxtext.innerText="";
            document.getElementsByClassName("info")[0].innerText= "Turn for: X";
            document.getElementsByClassName('gif')[0].getElementsByTagName('img')[0].style.width="0px";


        })
    })

