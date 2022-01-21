export const callbackPrompt = {
  message: 'Please enter your number',
  showPrompt() {
    const enterPrompt = prompt(this.message);
    console.log(enterPrompt);
  },
  showDeferredPrompt(ms) {
    setTimeout(this.showPrompt.bind(callbackPrompt), ms)
  }
}

callbackPrompt.showDeferredPrompt(2000);