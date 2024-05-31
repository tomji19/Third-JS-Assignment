
let form = document.getElementById('bookmarkForm');
let siteNameInput = document.getElementById('siteName');
let siteUrlInput = document.getElementById('siteURL');

form.addEventListener('submit', function (event) {
  event.preventDefault();
});

siteNameInput.addEventListener('input', validateInputs);
siteUrlInput.addEventListener('input', validateInputs);

function validateInputs() {
  let siteName = siteNameInput.value;
  let siteUrl = siteUrlInput.value;
  let siteNamePattern = /^[a-zA-Z0-9]{3,}$/;
  let siteUrlPattern = /^[\w]+@(gmail\.com|yahoo\.com|outlook\.com)$/;

  if (siteName === '') {
    siteNameInput.classList.remove('border-danger', 'border-success');
    siteNameInput.classList.add('border-yellow');
  } else if (!siteNamePattern.test(siteName)) {
    siteNameInput.classList.remove('border-success', 'border-yellow');
    siteNameInput.classList.add('border-danger');
  } else {
    siteNameInput.classList.remove('border-danger', 'border-yellow');
    siteNameInput.classList.add('border-success');
  }

  if (siteUrl === '') {
    siteUrlInput.classList.remove('border-danger', 'border-success');
    siteUrlInput.classList.add('border-yellow');
  } else if (!siteUrlPattern.test(siteUrl)) {
    siteUrlInput.classList.remove('border-success', 'border-yellow');
    siteUrlInput.classList.add('border-danger');
  } else {
    siteUrlInput.classList.remove('border-danger', 'border-yellow');
    siteUrlInput.classList.add('border-success');
  }


  if (siteNamePattern.test(siteName) && siteUrlPattern.test(siteUrl)) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}