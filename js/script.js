        let numer = '';
        let ktoryTag = '';

function wybierz() {
            numer = this.textContent;
            ktoryTag = 'Tag' + " " + numer;
            getElementByInnerText(ktoryTag);

}


const buttons = document.querySelectorAll('.tile');
buttons.forEach(button => {
              button.addEventListener('click', wybierz);
            }
);

const guziki = document.querySelectorAll('.FS');
guziki.forEach(guzik => {
              guzik.addEventListener('click', fullScreen);
            }
);


function getElementByInnerText(text) {
            const elements = document.querySelectorAll('.kod');
            
            elements.forEach(element => {
                if (element.id === text) {
                    element.style.opacity = '1';
                } else {
                    element.style.opacity = '0';
                }
            });
}

function fullScreen(){
  if (!document.fullscreenElement &&
      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}



