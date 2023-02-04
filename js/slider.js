

//image url ke array te store
const imgContainer=[
   "images/pic-1.png",
   "images/pic-2.png",
   "images/pic-3.png",
   "images/pic-4.png"
];


const imgElement=document.getElementById("img-id");

let containerIndex=0;

setInterval( ()=>{
   // 4 ta image ses hole jate abr 1st theke suru kore
   if(containerIndex>=imgContainer.length){
      containerIndex=0;
   }

   const imgURL=imgContainer[containerIndex];
   
   containerIndex++;

   // img ke select kore src er jaygay url set kore deya hoiche 
   imgElement.setAttribute('src',imgURL);
   
},2000);