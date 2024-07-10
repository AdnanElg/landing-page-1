//  ******* START NAVBAR MENU ********** //

const openMenu = document.querySelector("#btn-2");
const hamburgerMenu = document.querySelector("#btn-2 > img:nth-child(1)");
const closeMenu = document.querySelector("#btn-2 > img:nth-child(2)");

openMenu.addEventListener("click", () => {
  hamburgerMenu.style.display = "none";
  closeMenu.style.display = "block";
});

//  ******* END NAVBAR MENU ********** //
