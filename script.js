const sections = document.querySelectorAll('section');
sections.forEach((section) => {
 section.addEventListener('click', () => {
  section.classList.toggle('expanded');
 });
});

const currentTimeUTCElement = document.querySelector('[data-testid="currentTimeUTC"]');
const currentTimeElement = document.querySelector('[data-testid="currentTime"]');
const currentDayElement = document.querySelector('[data-testid="currentDay"]');

setInterval(() => {
  const now = new Date(); 
  const currentTimeUTC = new Date().toISOString().slice(0, 19);
  const currentDay = now.toLocaleString('en-US', { weekday: 'long' }); 

  currentTimeUTCElement.innerText = currentTimeUTC;
  currentDayElement.innerText = currentDay;
}, 1000);


  