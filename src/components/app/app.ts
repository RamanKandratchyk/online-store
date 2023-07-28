import { STATE } from '../state/state';
import Router from '../router/router';
import Controller from '../controller/controller';
import View from '../view/view';

class App {
  router: Router;

  controller: Controller;

  view: View;

  constructor() {
    this.router = new Router({
      mode: 'hash',
      root: '/',
    });
    this.controller = new Controller();
    this.view = new View();
  }

  start(): void {
    window.onload = () => {
      this.controller.syncState();
      this.controller.getLocalStorage();
      this.router.resolveRoute();
    };

    window.onbeforeunload = () => {
      this.controller.setLocalStorage();
    };

    const main = document.querySelector('.main') as HTMLElement;

    this.router
      .add(/^$/, () => {
        main.innerHTML = this.view.main.render();
        this.view.main.setListeners();
      })
      .add(/^cart$/, () => {
        main.innerHTML = this.view.cart.render();
        if (STATE.cartProducts.length !== 0) this.view.cart.renderPageList();
      })
      .add(/^id\/([0-9]*)$/, (id: string) => {
        try {
          main.innerHTML = this.view.productDetails.render(id);
          this.view.productDetails.setListeners();
        } catch {
          this.view.page404.render();
        }
      });
  }
}

export default App;
