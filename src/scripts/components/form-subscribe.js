window.addEventListener('load', () => {

  const applicantForm = document.getElementById('form-subscribe')

  function checkValidity(event) {
    const formNode = event.target.form
    const isValid = formNode.checkValidity()

    formNode.querySelector('button').disabled = !isValid
  }

  applicantForm.querySelector('button').addEventListener('click', ()=> {
    applicantForm.reset()
  })

  applicantForm.addEventListener('input', checkValidity)
})
