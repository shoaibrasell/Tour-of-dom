const sections = document.querySelectorAll('section');
for(const section of sections){
    section.style.border = '5px solid steelblue';
    section.style.marginBottom = '10px';
    section.style.borderRadius = '15px';
    section.style.paddingLeft = '10px';
    section.style.backgroundColor = 'lightgray';
}
// const placesContainer = document.getElementById('places-container');
// placesContainer.style.backgroundColor = " pink";


const placesContainer = document.getElementById('places-container');
placesContainer.classList.add('text-center');
placesContainer.classList.remove('large-text');//css in javaScript