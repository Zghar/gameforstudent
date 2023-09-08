




let x_open=document.querySelectorAll('.menuicon i')
let nav_item=document.querySelector('.nav-item')
x_open.forEach((icon) => {
   icon.addEventListener('click',(e) => {
      if(e.target.classList.contains('fa-bars')){
         nav_item.style.opacity=1
       
      }
      else{
         
         nav_item.style.opacity=0
      }
      // nav_item.style.opacity=1
      // console.log('yes working clicke')
      // e.target.style.display="none"
   })
})

// scroll to top 


let scrollbtn=document.getElementById('scrollbtn')


window.onscroll=() => {
  
   if(this.scrollY >= 600){
    
   scrollbtn.style.opacity=1
   }else{
      scrollbtn.style.opacity=0
   }
   
}



scrollbtn.addEventListener('click', function(e){
   e.preventDefault()

   window.scrollTo({
      top:0,
      behavior:"smooth"
   })

})



// create filtes section



let listfilter=document.querySelectorAll('.filter li');
let gaming=Array.from(document.querySelectorAll('.types_of_content div'));




// list item buttons 
listfilter.forEach((li) => {

   
   li.addEventListener('click' ,(e) => {

      listfilter.forEach((li) => {
         li.classList.remove('active')
         
      })
      
     
      e.target.classList.add('active');

// console.log(e.target.dataset.type)

      let datafilter=e.target.dataset.type
      

      gaming.forEach((item) => {
         if(datafilter==="all"){
           item.style.display="block"
         }else{

           if(item.classList.contains(datafilter)){
            item.style.display="block"
           }else{
            item.style.display="none"
           }
         }
         
      })
      
   })
   
})


// function removeactive(){
// listfilter.forEach((li) => {
//    li.classList.remove('active')
   
// })
// }