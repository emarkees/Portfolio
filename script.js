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

// Get all the dropdown hamburger icons and dropdowns
const skillList = document.querySelector('.skillList');
const dropdownHamburgers = document.querySelectorAll('.dropdown_hamburger');
const dropdowns = document.querySelectorAll('.dropdown');

dropdownHamburgers.forEach((hamburger, index) => {
  hamburger.addEventListener('click', () => {
    if (dropdowns[index].style.display === 'flex') {
      dropdowns[index].style.display = 'none';
      hamburger.querySelector('.fa-angle-right').classList.remove('rotate');
    } else {
      dropdowns[index].style.display = 'flex';
      hamburger.querySelector('.fa-angle-right').classList.add('rotate');
    }
  });
});

const data = [
  {
    name: 'Creative Summit',
    short_description: 'A joyful summit where we believe in the value of openness and sharing to create a positive change.',
    description: `A joyful summit where we believe in the value of openness and sharing to create a positive change with people from over 80 countries is taking place in Octber, in Nigeria.`,
    featured_image: './asset/images/Conference.png',
    technologies: ['html', 'css', 'javaScript'],
    link_to_live: 'https://emarkees.github.io/Conference-page',
    link_to_source: 'https://github.com/emarkees/Conference-page',
    card_no: '1',
  },
  {
    name: 'Math Magician',
    short_description: 'This is a website for all fans of mathematics. To make simple calculations, read a random math-related quote.',
    description: `Math Magician is a website for all fans of mathematics, Statistic and any other related subject that involve caculation. It is a Single Page App (SPA) that allows users to make simple calculations and also read a random edifying quotes.`,
    featured_image: './asset/images/Math_img.jpg',
    technologies: ['html', 'css', 'javaScript'],
    link_to_live: 'https://mathematical-calculator-06bp.onrender.com',
    link_to_source: 'https://github.com/emarkees/math-magician',
    card_no: '2',
  },
  {
    name: 'Stocks',
    short_description: 'This App shows real time stock quotes base on the price, change percentages and other parameters.',
    description: 'This App is developed to show real time stock quotes base on the price, change percentages and other parameters. It is design to determine how the market trends moves.',
    featured_image: './asset/images/stock.jpg',
    technologies: ['html', 'css', 'javaScript'],
    link_to_live: 'https://stock-quotes.onrender.com',
    link_to_source: 'https://github.com/emarkees/stocks.git',
    card_no: '3',
  },
  {
    name: 'Doctor Appointmnet',
    short_description: ' daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, of type and scrambled it 1960s. `,
    featured_image: './asset/images/professional.svg',
    technologies: ['html', 'css', 'javaScript'],
    link_to_live: 'https://emarkees.github.io/Portfolio/',
    link_to_source: 'https://github.com/emarkees/confrence.git',
    card_no: '4',
  },
  {
    name: 'Multi-Post Stories',
    short_description: ' daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, type and scrambled it 1960s. `,
    featured_image: './asset/images/professional.svg',
    technologies: ['html', 'css', 'javaScript'],
    link_to_live: 'https://emarkees.github.io/Portfolio/',
    link_to_source: 'https://github.com/emarkees/Portfolio.git',
    card_no: '#fifth-card',
  },
];

let html = '';

data.forEach((item) => {
  html += `
    <div class='card-section' id='${item.card_no}'>
      <div class='card-section-background-image'>
        <img src='${item.featured_image}' alt='Avocado' class='card-background-image'>
      </div>
      <div class='card-text-section'>
        <div class='modal-primary-text'>
          <h1 class='primary-title'>${item.name}</h1>
          <ul class='card-primary-text-frame'>
            <li><h1 class='client'>CANOPY</h1></li>
            <span class='span'></span>
            <li><h1 class='role'>Back End Dev</h1></li>
            <span class='span'></span>
            <li><h1 class='year'>2015</h1></li>
          </ul>
        </div>
        <p class='card-primary-body-text'>${item.short_description}</p> 
        <ul class='card-primary-tag  tag-font'>
        ${item.technologies.map((tech) => `<li class='  modal-tag tag-font' > ${tech}</li>`).join('')}
        </ul>
        <div id='action'>
          <button type='button' class='normalButtn'> See project</button>
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
    const img = modal.querySelector('.card-background-image');
    const details = modal.querySelector('.modal-primary-body-text ');
    const technologie = modal.querySelector('.modal-tag');
    const linkLiveDemo = modal.querySelector('a.link-live');
    const linkGit = modal.querySelector('a.link-git');
    title.textContent = data[index].name;
    img.src = data[index].featured_image;
    details.textContent = data[index].description;
    technologie.innerHTML = data[index].technologies.map((item) => `<li>${item}</li>`).join('');
    linkLiveDemo.href = data[index].link_to_live;
    linkGit.href = data[index].link_to_source;

    modal.style.display = 'flex';
  });
});

/* e-mail validity */

const emailError = document.querySelector('#mail + span.error');
const form = document.getElementById('contact-form');
const email = document.getElementById('mail');

function showError() {
  emailError.className = 'error active';
  if (email.validity.valueMissing) {
    emailError.textContent = 'You need to enter an email address.';
  } else if (email.validity.typeMismatch) {
    emailError.textContent = 'Entered value needs to be an email address.';
  } else if (email.value !== email.value.toLowerCase()) {
    emailError.textContent = 'E-mail must be in lowercase 😉';
    return false;
  }
  return true;
}

email.addEventListener('input', (event) => {
  event.preventDefault();
  if (email.validity.valid) {
    emailError.textContent = '';
    emailError.className = 'error';
  } else {
    showError();
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!email.validity.valid) {
    showError();
  } else if (showError()) {
    form.submit();
  }
});

// Preserve data in browser

const formName = document.getElementById('name');
const formEmail = document.getElementById('mail');
const formMessage = document.getElementById('textarea');

const savedData = localStorage.getItem('formData');

if (savedData) {
  const { name, email, message } = JSON.parse(savedData);
  formName.value = name;
  formEmail.value = email;
  formMessage.value = message;
}

form.addEventListener('input', () => {
  const formData = {
    name: formName.value,
    email: formEmail.value,
    message: formMessage.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
});
