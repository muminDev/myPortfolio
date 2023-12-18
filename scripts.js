
// Scroll behavoir
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetElement = document.querySelector(this.getAttribute('href'));
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});


//submission contact info
const scriptURL = 'https://script.google.com/macros/s/AKfycbzD3nxoa2BVMXkhMz9OUjNwAURzIbD76Odpp3d73vZ90Z-27w1Csdap02a3gppIykyIXg/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg')
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = 'Message sent succesfully !';
        setTimeout(() => {
          msg.innerHTML = ''
        }, 3000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })