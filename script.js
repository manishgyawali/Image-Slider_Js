
const data = [
    {
        img:'./images/mac.png',
        Name: "Macbook",
        Details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita laborum, vitae neque  ",
        Price: "$1200",
        Rating: [1, 2, 3, 4, 5],
        button: "ADD TO CART",
        Discount: "Discount 20% OFF",
    }, 
    {
        img:'./images/monitor.png',
        Name: "Monitor",
    Details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita laborum, vitae neque  ",
    Price: "$800",
    Rating: [1, 2, 3, 4, 5],
    button: "ADD TO CART",
    Discount: "Discount 20% OFF",
    },
    {
        img:'./images/watch.png',
        Name: "Apple Watch",
        Details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita laborum, vitae neque  ",
        Price: "$500",
        Rating: [1, 2, 3, 4, 5],
        button: "ADD TO CART",
        Discount: "Discount 20% OFF",
    
    },
    
    {
        img:'./images/speaker.png',
        Name: "JBL speaker",
        Details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita laborum, vitae neque  ",
        Price: "$200",
        Rating: [1, 2, 3, 4, 5],
        button: "ADD TO CART",
        Discount: "Discount 20% OFF",
    
    },
    ]
    let dataimage=document.getElementById('slider');
    let start=0; 
    function imageslider(){
        data.map((val,i)=>{
            if(i==start){
                let stars = "";
                value.Rating.map((item, index) => {
                  stars += `
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path fill="currentColor" d="m8.85 16.825l3.15-1.9l3.15 1.925l-.825-3.6l2.775-2.4l-3.65-.325l-1.45-3.4l-1.45 3.375l-3.65.325l2.775 2.425zm-1.525 2.098l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102zM12 12.25"/></svg>
                    `;});
                dataimage.innerHTML=`<div>
                <img src=${val.img} style='height:400px;width:400px;' />

                <div class="images">
                <img src=${val.image} />
                </div>
                
                <div class="name">
                <h1>${val.Name}</h1>
                </div>
                
                <div class="details">
                <p>${val.Details}</p>
                </div>
                
                <div class="bottom">
                 <div class="price">
                 <h1>${val.Price}</h1>
                 </div>
                            <div class="bottomright">
                              <div class="rating">
                      ${stars}
                      </div>
                          <div class="horizontal-line"></div>
                           <div class="discount">
                    <h3>${val.Discount}</h3> </div>
                </div>
                
                 </div>
                  <div class="buy">
                 <button>${val.button}</button>
                 </div>
                </div>
                
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