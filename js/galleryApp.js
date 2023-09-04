/*1. Create the modal HTML 
2. Add modal CSS
3. Modal functionality 
    - open
    - close 
        - click of modal
        - click x btn 
        - hit escape */

function createModal() {
  document.querySelector("body").insertAdjacentHTML(
    "beforeend",
    `
      <div class="modal-container" aria-modal="true" role="dialog" hidden="true">
      <div class="modal">
      <div class="modal_overlay">
      <div class="modal_btn-container">
      <button class="modal_btn modal_arrow modal_arrow--left" id="left" aria-label="Previous image">
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.25 6.75L4.75 12L10.25 17.25"></path>
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.25 12H5"></path>
</svg>

      </button>
      <button class="modal_btn modal_arrow modal_close" aria-label="Close gallery"> <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.75 12C4.75 7.99594 7.99594 4.75 12 4.75V4.75C16.0041 4.75 19.25 7.99594 19.25 12V12C19.25 16.0041 16.0041 19.25 12 19.25V19.25C7.99594 19.25 4.75 16.0041 4.75 12V12Z"></path>
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 9.75L14.25 14.25"></path>
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.25 9.75L9.75 14.25"></path>
</svg>

      </button>
      <button class="modal_btn modal_arrow modal_arrow--right" id="right" aria-label="Next image"><svg width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.75 6.75L19.25 12L13.75 17.25"></path>
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 12H4.75"></path>
</svg>
      </button>
      </div>
      <div class="modal_indicator-container">
      <button class="modal_indicator active"></button>
      <button class="modal_indicator"></button>
      <button class="modal_indicator"></button>
      
      </div>
      </div>
      <div class="modal_image-container">
      <img src="./Images/food/food-1.jpg" alt="Food" class="modal_image"/>
      <img src="./Images/food/food-2.jpg" alt="Food" class="modal_image"/>
      <img src="./Images/food/food-3.jpg" alt="Food" class="modal_image"/>
      <img src="./Images/food/food-4.jpg" alt="Food" class="modal_image"/>
      <img src="./Images/food/food-5.jpg" alt="Food" class="modal_image"/>
      </div>
      </div>
      </div>


<style>
    .modal-container {
        position: absolute;
        inset: 0;
        background-color: hsl(var(--dark) / .8);
        display: grid;
        place-items: center;
        opacity: 0;
        pointer-events: none;
        transition: opacity 250ms ease-in-out;
    }

    .modal-container.active {
        opacity: 1;
        pointer-events: all;
    }
    .modal {
        position: relative;
        margin: 2rem;
        max-width: 900px;
        width: 100%;
        display: grid;
        place-items: center;
        // overflow: hidden;
 
    box-shadow: 0px 2px 40px hsl(var(--dark));
    }
    .modal_image-container {
        display: flex;
        max-height: 100vh;
    }
    .modal_image {
        width: 100%;
        height: 100%;
        aspect-ratio: 16/10;
        object-fit: cover;
    }
    .modal_overlay {
        position: absolute;
        z-index: 4;
        bottom: 1rem;
        display: grid;
        gap: 1rem;
    }
    .modal_btn-container {
        display: flex;
        gap: 1rem;
    }
    .modal_btn {
        display: grid;
        place-items: center;
        background-color: hsl(var(--bkg) / 0.5);
        color: hsl(var(--text));
        padding: .5rem;
        border: 4px solid transparent;
        border-radius: 50%;
        cursor: pointer;
    }
    .modal_btn:is(:hover, :focus) {
        background-color: hsl(var(--bkg) / .7);
        border: 4px solid hsl(var(--bkg) / .8);
    }
    .modal_btn svg {
        pointer-events: none;
        width: 2rem;
        height: 2rem;
        transition: transform 250ms ease;
    }
    .modal_btn:is(:hover, :focus) svg {
        transform: scale(1.2);
    }
    .modal_indicator-container {
        order: -1;
        display: flex;
        justify-content: center;
        gap: 1rem;
        
    }
    .modal_indicator {
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background-color: hsl(var(--bkg) / .4);
        border: 3px solid hsl(var(--bkg) / .6);
        cursor: poiner; 
        position: relative;
    }
    .modal_indicator:is(:hover, :focus) {
        background-color: hsl(var(--bkg) / .5);
        border: 3px solid hsl(var(--bkg) / .7);
    }
.modal_indicator.active::before {
        content: "";
        position: absolute;
        
        inset: 2px;
        border-radius: 50%;
        background-color: hsl(var(--bkg) / .9);
        
    }

</style>
  `
  );
}

createModal();
