'use strict';

document.addEventListener("DOMContentLoaded", () => {
  const WebT = {};

  WebT.settings = {
    modal_active_class: '--modal-show'
  };

  WebT.elements = {
    scroll_links: document.querySelectorAll('a[href^="#"]'),
    modal_toggle: document.querySelectorAll('[data-modal-toggle]'),
    modal_box: document.querySelectorAll('[data-modal]'),
    overlay: document.querySelector('.theme-overlay'),
    close_modal: document.querySelectorAll('[data-modal-close]'),
  };

  /* Check if click outside target element */
  const isClickOutside = ($target, $class) => {
    const closeTarget = (e) => {
      if (!e.target.classList.contains($class)) {
        $target.classList.remove($class);
      }
    };
    if ($target === 0) {
      document.body.removeEventListener('click', closeTarget);
    } else {
      document.body.addEventListener('click', closeTarget);
    }
  };

  /* Close all modals */
  const closeModals = () => {
    // close all modals
    for (let i=0; i < WebT.elements.modal_box.length; i++) {
      WebT.elements.modal_box[i].classList.remove(WebT.settings.modal_active_class);
    }
    // remove active classes from modal toggle buttons
    for (let i=0; i < WebT.elements.modal_toggle.length; i++) {
      WebT.elements.modal_toggle[i].classList.remove(WebT.settings.modal_active_class);
    }
    // close overlay
    WebT.elements.overlay.classList.remove(WebT.settings.modal_active_class);
  }

  /* Modals */
  (() => {
    // Add click event to close modals
    for (let i=0; i < WebT.elements.close_modal.length; i++) {
      WebT.elements.close_modal[i].addEventListener('click', () => {
        closeModals();
      });
    }
    // Add click event to open target modal
    for (let i=0; i < WebT.elements.modal_toggle.length; i++) {
      WebT.elements.modal_toggle[i].addEventListener('click', () => {
        let this_toggle = WebT.elements.modal_toggle[i],
            target_modal = this_toggle.getAttribute('data-modal-toggle');
        // if nav modal opened
        if (target_modal === 'nav' && this_toggle.classList.contains(WebT.settings.modal_active_class)) {
          closeModals();
          WebT.elements.modal_toggle[i].classList.remove(WebT.settings.modal_active_class);
        } else {
          closeModals();
          document.querySelector(`[data-modal='${target_modal}']`).classList.add(WebT.settings.modal_active_class);
          WebT.elements.overlay.classList.add(WebT.settings.modal_active_class);
          WebT.elements.modal_toggle[i].classList.add(WebT.settings.modal_active_class);
        }
      });
    }
  })();

  /* Anchor smooth scroll */
  (() => {
    WebT.elements.scroll_links.forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        closeModals();
        const offset = -30,
          element = document.querySelector(this.getAttribute('href')),
          target = element.getBoundingClientRect().top + window.pageYOffset + offset;
        window.scrollTo({top: target, behavior: 'smooth'});
      });
    });
  })();


  /* Functions init */

});