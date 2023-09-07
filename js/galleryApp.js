/*
1. Initiate gallery
2. Update gallery (img and ind)
3. Moving the gallery
4. Advanced moving behaviour
5. Enhancements
*/

import createModal from "./createModal.js";

createModal();

// Global QS
const modalableImages = document.querySelectorAll('[data-modal="true"]');
const modalContainer = document.querySelector(".modal-container");
const modalTrack = document.querySelector("modal_image-container");
// all galleries shared
let transitionSpeed;
let galleries;
// for each gallery
let modalImages;
let modalIndicators;
let currentIndex;
let lastIndex;
let isMoving = false;

class Modal {
  constructor(modal) {
    this.modal = modal;
    this.attachEventListeners();
  }

  openModal() {
    modalableImages.forEach((btn) => (btn.tabIndex = "-1"));
    this.modal.removeAttribute("hidden");
    this.modal.classList.add("active");
  }
  closeModal() {
    modalableImages.forEach((btn) => (btn.tabIndex = "0"));
    this.modal.setAttribute("hidden", "true");
    this.modal.classList.remove("active");
  }
  attachEventListeners() {
    this.modal.addEventListener("click", (e) => {
      e.target === e.currentTarget || e.target.classList.contains("modal_close")
        ? this.closeModal()
        : null;
    });
  }
}

const modal = new Modal(modalContainer);

function addImagesAndIndicatorsToGallery(arrayOfImages) {
  // add images to Gallery
  modalTrack.innerHTML = [
    arrayOfImages[arrayOfImages.length - 1],
    ...arrayOfImages,
    arrayOfImages[0],
  ]
    .map((img) => `<img class="modal_image" src="${img.src}" alt="${img.alt}">`)
    .join("");
  // add indicators to Gallery
  document.querySelector(".modal_indicator-container").innerHTML = arrayOfImages
    .map(
      (i, index) =>
        `<button class="modal_indicator" data-index="${index}"></button>`
    )
    .join("");
  // return both for destructuring
  return [
    [...document.querySelectorAll(".modal_image")],
    [...document.querySelectorAll(".modal_indicator")],
  ];
}

function updateGallery(galleryImages) {
  [modalImages, modalIndicators] =
    addImagesAndIndicatorsToGallery(galleryImages);
  currentIndex = 1;
  lastIndex = galleryImages.length;
}

//event listeners
function attachOpenGalleryEventListeners() {
  modalableImages.forEach((btn) => {
    btn.addEventListener("click", () => {
      updateGallery(
        galleries.find((g) => g.name === btn.dataset.gallery).images
      );
      modal.openModal();
    });
  });
}

window.addEventListener("keyup", (e) => {
  if (e.key === "Escape" && modalContainer.classList.contains("active")) {
    modal.closeModal();
  }
});

export default async function initGallery(endpoint, options) {
  await fetch(endpoint)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      galleries = data;
      console.log(galleries);
      transitionSpeed = options?.speed || 250;
      attachOpenGalleryEventListeners();
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation",
        error
      );
    });
}
