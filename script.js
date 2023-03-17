const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.menuaction')
  .forEach((n) => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }));

const closef = document.querySelector('.closehamburger');

const theModal = document.querySelector('#myModal');
const worksSection = document.querySelector('.work-container');

closef.addEventListener('click', () => {
  theModal.style.display = 'none';
});
const data = [
  {
    name: 'Tonic',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi architecto 
     mollitia, earum fugiat possimus expedita! Qui nostrum blanditiis est, cupiditate autem 
      fugiat non consequatur consectetur itaque dolor, quo deserunt sequi.
      Consequuntur placeat, delectus eius nemo veritatis eaque quas. Nulla minima, harum nobis 
      odio, in non placeat voluptas provident vitae, quaerat maxime minus amet. Libero nisi 
      maiores molestias repudiandae natus provident.`,
    featuredImage: './asset/images/avocado.svg',
    technologies: ['html', 'css', 'javaScript'],
    linkToLive: 'https://emarkees.github.io/Portfolio/',
    linkToSource: 'https://github.com/AlexisJW/set-up-myFirst-mobile',
    cardNo: '#first-card',
  },
  {
    name: 'Multi-Post Stories',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi architecto 
      mollitia, earum fugiat possimus expedita! Qui nostrum blanditiis est, cupiditate autem 
      fugiat non consequatur consectetur itaque dolor, quo deserunt sequi.
      Consequuntur placeat, delectus eius nemo veritatis eaque quas. Nulla minima, harum nobis 
      odio, in non placeat voluptas provident vitae, quaerat maxime minus amet. Libero nisi 
      maiores molestias repudiandae natus provident.`,
    featuredImage: './asset/images/available.svg',
    technologies: ['html', 'css', 'javaScript'],
    linkToLive: 'https://emarkees.github.io/Portfolio/',
    linkToSource: 'https://github.com/AlexisJW/set-up-myFirst-mobile',
    cardNo: '#second-card',
  },
  {
    name: 'Tonic',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi architecto 
      mollitia, earum fugiat possimus expedita! Qui nostrum blanditiis est, cupiditate autem 
      fugiat non consequatur consectetur itaque dolor, quo deserunt sequi.
      Consequuntur placeat, delectus eius nemo veritatis eaque quas. Nulla minima, harum nobis 
      odio, in non placeat voluptas provident vitae, quaerat maxime minus amet. Libero nisi 
      maiores molestias repudiandae natus provident.`,
    featuredImage: './asset/images/yoga.svg',
    technologies: ['html', 'css', 'javaScript'],
    linkToLive: 'https://emarkees.github.io/Portfolio/',
    linkToSource: 'https://github.com/AlexisJW/set-up-myFirst-mobile',
    cardNo: '#third-card',
  },
  {
    name: 'Multi-Post Stories',
    shortDescription: ' daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 

   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
    featuredImage: './asset/images/professional.svg',
    technologies: ['html', 'css', 'javaScript'],
    linkToLive: 'https://emarkees.github.io/Portfolio/',
    linkToSource: 'https://github.com/AlexisJW/set-up-myFirst-mobile',
    cardNo: '#fourth-card',
  },
];

let html = '';

data.forEach((item) => {
  html += `
    <div class="card-section" id="${item.cardNo}">
      <div class="card-section-background-image">
        <img src="${item.featuredImage}" alt="Avocado" class="card-background-image">
      </div>
      <div class="card-text-section">
        <div class="modal-primary-text">
          <h1 class="primary-title">${item.name}</h1>
          <ul class="card-primary-text-frame">
            <li><h1 class="client">CANOPY</h1></li>
            <span class="span"></span>
            <li><h1 class="role">Back End Dev</h1></li>
            <span class="span"></span>
            <li><h1 class="year">2015</h1></li>
          </ul>
        </div>
        <p class="card-primary-body-text">${item.shortDescription}</p> 
        <ul class="card-primary-tag  tag-font">
        ${item.technologies.map((tech) => `<li class='  modal-tag tag-font' > ${tech}</li>`).join('')
}
        </ul>
        <div id="action">
          <button type="button" class="normalButtn"> See project</button>
        </div>
      </div>
    </div>
    `;
});

worksSection.innerHTML = html;

const projectButton = document.querySelectorAll('.normalButtn');

projectButton.forEach((button, index) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector('.modal');
    const title = modal.querySelector('.primary-title');
    const img = modal.querySelector('img.card-background-image');
    const details = modal.querySelector('.modal-primary-body-text ');
    const technologie = modal.querySelector('.modal-tag');
    const linkLiveDemo = modal.querySelector('a.link-live');
    const linkGit = modal.querySelector('a.link-git');
    title.textContent = data[index].name;
    img.src = data[index].featuredImage;
    details.textContent = data[index].description;
    technologie.innerHTML = data[index].technologies.map((item) => `<li>${item}</li>`).join('');
    linkLiveDemo.href = data[index].linkToLive;
    linkGit.href = data[index].linkToSource;

    modal.style.display = 'block';
  });
});