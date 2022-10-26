import {templates, select, classNames} from '../settings.js';


class Home{
  constructor(element){
    const thisHome= this;

    thisHome.render(element);
    thisHome.getElements();
    thisHome.initLinks();
  }
  
  render(element){
    const thisHome = this;
    const generatedHTML = templates.homePage();
    thisHome.dom = {};
    thisHome.dom.wrapper = element;
    thisHome.dom.wrapper.innerHTML = generatedHTML;
   
  }

  getElements() {
    const thisHome = this;
    thisHome.dom.homeLinks = document.querySelectorAll(select.home.homeLinks);
    thisHome.dom.pages = document.querySelector(select.containerOf.pages).children;
    thisHome.dom.navLinks = document.querySelectorAll(select.nav.links);
  }

  initLinks() {
    const thisHome = this;
    for (let link of thisHome.dom.homeLinks) {
      link.addEventListener('click', function (event) {
        const clickedElement = this;
        event.preventDefault();
        const id = clickedElement.getAttribute('href').replace('#', '');
        thisHome.activatePage(id);
        window.location.hash = '#/' + id;
      });
    }
  }

  activatePage(pageId) {
    const thisHome = this;
    for (let page of thisHome.dom.pages) {
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }
    for (let link of thisHome.dom.navLinks) {
      link.classList.toggle(classNames.nav.active, link.getAttribute('href') == '#' + pageId);
    }
  }
  
}
export default Home;