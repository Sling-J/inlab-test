document.addEventListener('DOMContentLoaded', () => {
   const modalTry = document.getElementById('modal-try');

   function checkAgree(container) {
      const modalSubmitBtn = document.getElementById('modal-submit-btn');
      const iconCheckbox = container.querySelector('.agree-field');
      const checkbox = container.querySelector('.agree-field input[type="checkbox"]');

      iconCheckbox.addEventListener('click', event => {
         if (event.target.classList.contains('fa-check-circle-o')) {
            event.target.classList.remove('fa-check-circle-o');
            event.target.classList.add('fa-check-circle');
         } else {
            event.target.classList.remove('fa-check-circle');
            event.target.classList.add('fa-check-circle-o');
         }

         checkbox.checked = !checkbox.checked;
         checkbox.checked ? 
            modalSubmitBtn.disabled = false :
            modalSubmitBtn.disabled = true
      })
   }

   checkAgree(modalTry)
});