const display = document.getElementById('display');
    const cursor = document.getElementById('cursor');

    function appendToDisplay(value) {
      display.innerHTML += value;
    }

    function calculate() {
      try {
        const result = eval(display.innerHTML);

        if (result instanceof Error) {
          display.innerHTML = 'Error';
        } else {
          display.innerHTML = result;
        }
      } catch (error) {
        display.innerHTML = 'Error';
      }
    }

    function clearDisplay() {
      display.innerHTML = '';
    }

    function deleteLastCharacter() {
      display.innerHTML = display.innerHTML.slice(0, -1);
    }

    document.addEventListener('keydown', function (event) {
      const key = event.key;

      if ((key >= '0' && key <= '9') || key === '.') {
        appendToDisplay(key);
      } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendToDisplay(key);
      } else if (key === 'Enter') {
        calculate();
      } else if (key === 'Backspace') {
        deleteLastCharacter();
      }
    });