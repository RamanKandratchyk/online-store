class Page404 {
  render() {
    const main = document.getElementsByTagName('main')[0];
    main.setAttribute('class', 'main-page-404');

    main.innerHTML = `
      <div class="page-404-container">
        <div class="page-404-message">Oops!</div>
        <div class="page-404-message">Page not found</div>
        <div class="page-404-message__small">Something went wrong</div>
        <button class="page-404-button" onclick="window.location.href = '/#/';">Back to the Main Page</button>
        <img src="./assets/svg/sad-flower.svg" alt="Sad flower" class="page-404-image" />
      </div>
    `;
  }
}

export default Page404;
