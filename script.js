// document.addEventListener('DOMContentLoaded',()=>{
//     const carouselImages = document.querySelector('.cimages');
//     const images = document.querySelector('.cimages img');
//     const prevBut = document.querySelector('.cbutton-prev.prev');
//     const nextBut = document.querySelector('.cbutton-next.next');

//     let index = 0;
//     const showImage = (index)=> {
//         const width = images[0].clientwidth;
//         carouselImages.computedStyleMap.transform =`translateX(${-index * width}px)`;
//     };
//     prevBut.addEventListener('click',()=>{
//         index =(index>0)? index -1:images.length -1;
//         showImage(index);
//     });
//     nextBut.addEventListener('click',()=>{
//         index =(index < images.length -1)? index +1:0;
//         showImage(index);
//     }); 
//     setInterval(() =>{
//         index= (index < images.length -1)? index +1:0;
//         showImage(index);
//     },3000);

// });