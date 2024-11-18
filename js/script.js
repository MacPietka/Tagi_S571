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

var noSleep = new NoSleep();

document.addEventListener('click', function enableNoSleep() {
  document.removeEventListener('click', enableNoSleep, false);
  noSleep.enable();
}, false);




