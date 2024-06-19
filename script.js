
const data = [
    {
        img:'./images/mac.png',
        
    }, 
    {
        img:'./images/monitor.png',
       
    },
    {
        img:'./images/watch.png',
       
    
    },
    
    {
        img:'./images/speaker.png',
      
    
    },
    ]
    let dataimage=document.getElementById('slider');
    let start=0; 
    function imageslider(){
        data.map((val,i)=>{
            if(i==start){
              
                dataimage.innerHTML=`<div>
                <img src=${val.img} style='height:400px;width:400px;' />

                
                </div>`
            }
        })
    }
    imageslider(start)
    
    function next(){
        if(start===data.length-1){
            start=0;
        }
        else{
            start+=1
        }
        imageslider(start)
    
    }
    function previous(){
        if(start===0){
            start=data.length-1;
        }
        else{ 
            start-=1
        }
        imageslider(start)
    
    }
// setInterval(()=>{
//     next()
// },2000);

let home=document.getElementById('home');
let about=document.getElementById('about');
let blog=document.getElementById('blog');
let contact=document.getElementById('contact');


function navbar(){
    
    
}