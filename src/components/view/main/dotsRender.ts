class DotsRender {
  renderSmallDots(): string {
    let dotsHTML = '';

    for (let i = 0; i < 36; i += 1) {
      dotsHTML += '<div class="small-v-dot">.</div>';
    }

    return dotsHTML;
  }

  renderBigDots(): string {
    let dotsHTML = '';

    for (let i = 0; i < 16; i += 1) {
      dotsHTML += '<div class="big-v-dot">.</div>';
    }

    return dotsHTML;
  }
}

export default DotsRender;
