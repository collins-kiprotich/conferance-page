const body = document.querySelector('body');
const menuDiv = document.createElement('div');
menuDiv.className = 'menu-content';
menuDiv.style.display = 'none';

const divContent = `<div class="mobile-div">
<div class="cross-icon">X</div>
<div class="home-about-container">
    <div class='mobile-homepage'><a href="#homepage">Homepage</a></div>
    <div class='mobile-about'><a href="#about2">About</a></div>
</div>
</div>`
menuDiv.innerHTML = divContent;
body.appendChild(menuDiv);
const hamburgerIcon = document.querySelector('.mobile-logo');
hamburgerIcon.addEventListener('click', () => {
  menuDiv.style.display = 'flex';
})

const crossClose = document.querySelector('.cross-icon');
crossClose.addEventListener('click',() => {
  menuDiv.style.display = 'none';
})

const homepageClose = document.querySelector('.mobile-homepage');
homepageClose.addEventListener('click',() => {
  menuDiv.style.display = 'none';
})

const aboutClose = document.querySelector('.mobile-about');
aboutClose.addEventListener('click',() => {
  menuDiv.style.display = 'none';
})


const body2 = document.querySelector('#featured-speakers');
const speakersSection = document.createElement('div');
speakersSection.className = 'speaker-container-big';

const speakersProjectArray = [];
const speakers = [
    {
      id: 'speaker-1',
      Name: 'Nicholas Mutembei',
      image: './images/h2o.png',
      quote: 'its a great day' 
    },
    {
        id: 'speaker-2',
        Name: 'Nicholas Mutembei',
        image: './images/h2o.png',
        quote: 'its a great day' 
      },
      {
        id: 'speaker-3',
        Name: 'Nicholas Mutembei',
        image: './images/h2o.png',
        quote: 'its a great day' 
      },
      {
        id: 'speaker-4',
        Name: 'uiiiooo Mutembei'git,
        image: './images/h2o.png',
        quote: 'its a great day' 
      },
];
 const speakerArray=[];
 speakers. forEach ( (item) => {
    const speakerDispaly = `<div><img class="speaker-image" src="images/Fish-icon.png" alt=""></div>
    <div class="speaker-description">
        <div class="speaker-name">Herbert Chimenga</div>
        <div class="profession-des">PHD holder at Havard University,Masters degree in global climate studies with A bachelors degree</div>
        <div class="speaker-content">Climate is at rhe core of the changing global temperatures. An action has to be taken right now to stop this.</div>
    </div>`
    speakerArray.push(speakerDispaly);
 })

 for (let i = 0; i < speakers.length; i += 1) {
    speakers[i].id = document.createElement('div');
    speakers[i].id.className = 'speaker-container'; 
    speakers[i].id.innerHTML = speakerArray[i];
    body2.appendChild(speakers[i].id);
  }

// const body = document.querySelector('body');
// const menuDiv = document.createElement('div');
// menuDiv.className = 'menu-content';
// menuDiv.style.display = 'none';
// const main = document.querySelector('main');

// const divContent = '<img class="cross-icon" src="./images/icon-cross" alt=""> <a href="#portfolio">Portfolio</a> <a href="#aboutMe">About</a> <a href="#contactForm">Contact</a>';
// menuDiv.innerHTML = divContent;
// body.appendChild(menuDiv);
// const hamburgerIcon = document.querySelector('.hamburger-menu');
// hamburgerIcon.addEventListener('click', () => {
//   menuDiv.style.display = 'flex';
// });


// const body2 = document.querySelector('body');
// const speakersDiv = document.createElement('div');
// speakersSection.className = 'speaker-container-big';

// const speakersProjectArray = [];
// const speakers = [
//     {
//       id: 'speaker-1',
//       Name: 'Nicholas Mutembei',
//       image: './images/h2o.png',
//       quote: 'its a great day' 
//     },
//     {
//         id: 'speaker-2',
//         Name: 'Nicholas Mutembei',
//         image: './images/h2o.png',
//         quote: 'its a great day' 
//       },
//       {
//         id: 'speaker-3',
//         Name: 'Nicholas Mutembei',
//         image: './images/h2o.png',
//         quote: 'its a great day' 
//       },
//       {
//         id: 'speaker-4',
//         Name: 'uiiiooo Mutembei',
//         image: './images/h2o.png',
//         quote: 'its a great day' 
        
//       },
// ];
//  const speakerArray=[];
//  speakers. forEach ( (item) => {
//     const speakerDispaly = ` <div class="speaker-container">
//     <div><img class="speaker-image" src="${item.image}" alt=""></div>
//     <div class="speaker-description">
//         <div class="speaker-name">${item.name}</div>
//         <div class="profession-des">PHD holder at Havard University,Masters degree in global climate studies with A bachelors degree</div>
//         <div class="speaker-content">${item.quote}</div>
//     </div>
// </div>`; 
// speakerArray.push(speakerDispaly); 
//  })

//  for (let i = 0; i < speakers.length; i += 1) {
//     speakers[i].id = document.createElement('div');
//     speakers[i].id.className = 'speaker-container';
//     speakers[i].id.innerHTML = speakerArray[i];
//     body2.appendChild(speakers[i].id);
//   }


