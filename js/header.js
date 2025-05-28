const burgerBtn = document.querySelector('.burguer-btn');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  burgerBtn.addEventListener('click', () => {
    dropdownMenu.style.display = 
      dropdownMenu.style.display === 'flex' ? 'none' : 'flex';
  });