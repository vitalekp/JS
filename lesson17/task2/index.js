export const callbackPrompt = {
  message: 'Please enter your number',
  showPrompt() {
    const enterPrompt = prompt(this.message);
    console.log(enterPrompt);
  },
  showDeferredPrompt(ms) {
    setTimeout(this.showPrompt.bind(this), ms)
  }
}

callbackPrompt.showDeferredPrompt(2000);