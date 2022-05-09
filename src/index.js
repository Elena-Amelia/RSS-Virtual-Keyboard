function createMainDiv() {
  const mainDiv = document.createElement('div');
  mainDiv.classList.add('main--div');
  mainDiv.innerHTML = `<p class="title">RSS Виртуальная клавиатура</p>
   <textarea class="body--textarea textarea" git a" autofocus rows="5" cols="50"></textarea>
   <div class="body--keyboard keyboard" id="keyboard"></div>
   <p class="description">
        Клавиатура создана в операционной системе Windows
      </p>
      <p class="language">
        Для переключения языка комбинация: левые shift + alt
      </p>`;
  document.body.append(mainDiv);
}
createMainDiv();// ВЫЗОВ Ф-ЦИИ

const keysCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
  'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',
  'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
  'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
  'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];

const keysCaseDown = ['&#96;', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '&#45;', '&#61;', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '&#91;', '&#93;', '&#92;', 'Delete',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', '&#59;', '&#39;', 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '&#44;', '&#46;', '&#47;', '&#8593;', 'Shift',
  'Ctrl', 'Win', 'Alt', '', 'Alt', '&#8592;', '&#8595;', '&#8594;', 'Ctrl'];

const keysCaseUp = ['&#96;', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '&#45;', '&#61;', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '&#91;', '&#93;', '&#92;', 'Delete',
  'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', '&#59;', '&#39;', 'Enter',
  'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '&#44;', '&#46;', '&#47;', '&#8593;', 'Shift',
  'Ctrl', 'Win', 'Alt', '', 'Alt', '&#8592;', '&#8595;', '&#8594;', 'Ctrl'];

const keysShiftCaseUp = ['&#126;', '&#33;', '&#64;', '&#35;', '&#36;', '&#37;', '&#94;', '&#38;', '&#42;', '&#40;', '&#41;', '&#95;', '&#43;', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '&#123;', '&#125;', '&#124;', 'Delete',
  'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', '&#58;', '&#34;', 'Enter',
  'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '&#60;', '&#62;', '&#63;', '&#8593;', 'Shift',
  'Ctrl', 'Win', 'Alt', '', 'Alt', '&#8592;', '&#8595;', '&#8594;', 'Ctrl'];

const keysShiftCaseDown = ['&#126;', '&#33;', '&#64;', '&#35;', '&#36;', '&#37;', '&#94;', '&#38;', '&#42;', '&#40;', '&#41;', '&#95;', '&#43;', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '&#123;', '&#125;', '&#124;', 'Delete',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', '&#58;', '&#34;', 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '&#60;', '&#62;', '&#63;', '&#8593;', 'Shift',
  'Ctrl', 'Win', 'Alt', '', 'Alt', '&#8592;', '&#8595;', '&#8594;', 'Ctrl'];

function createKeyboard() {
  let out = '';
  for (let i = 0; i < keysCode.length; i++) {
    out += `<div class="key ${keysCode[i]}" data='${keysCode[i]}'><span class="eng"><span class="caseDown">${keysCaseDown[i]}</span>
    <span class="caseUp hidden">${keysShiftCaseUp[i]}</span><span class="caps hidden">${keysCaseUp[i]}</span>
    <span class="shiftCaps hidden">${keysShiftCaseDown[i]}</span></span><span class="rus hidden"></span></div>`;
  }
  document.querySelector('#keyboard').innerHTML = out;
}

createKeyboard();

const KEY = document.querySelectorAll('.key');
const caseDown = document.querySelectorAll('.caseDown');
const caseUp = document.querySelectorAll('.caseUp');
const caps = document.querySelectorAll('.caps');
const shiftCaps = document.querySelectorAll('.shiftCaps');
const TEXTAREA = document.querySelector('textarea');
let isCaps = false;

/** **************ДЛЯ ФИЗ КЛАВЫ************** */
document.onkeydown = function (event) {
  KEY.forEach((item) => {
    if (item.classList.contains(event.code)) {
      item.classList.add('active');

      if (event.key === 'Tab') { /** **********TAB*********** */
        event.preventDefault();
        textarea.value += '\t';
      }

      if (event.key === 'CapsLock') { /** **********CAPSLOCK*********** */
        if (event.getModifierState('CapsLock') === true) {
          document.querySelector('.CapsLock').classList.add('activeCaps');
          isCaps = true;
          caseDown.forEach((item) => { item.classList.add('hidden'); });
          caseUp.forEach((item) => { item.classList.add('hidden'); });
          shiftCaps.forEach((item) => { item.classList.add('hidden'); });
          caps.forEach((item) => { item.classList.remove('hidden'); });
        } else {
          document.querySelector('.CapsLock').classList.remove('activeCaps');
          isCaps = false;
          caseDown.forEach((item) => { item.classList.remove('hidden'); });
          caps.forEach((item) => { item.classList.add('hidden'); });
          caseUp.forEach((item) => { item.classList.add('hidden'); });
          shiftCaps.forEach((item) => { item.classList.add('hidden'); });
        }
      }

      if (event.key === 'Shift') {
        if (event.code === 'ShiftLeft') { document.querySelector('.ShiftLeft').classList.add('activeCaps'); } else if (event.code === 'ShiftRight') { document.querySelector('.ShiftRight').classList.add('activeCaps'); }

        if (event.getModifierState('Shift') === true && isCaps === false) {
          caseDown.forEach((item) => { item.classList.add('hidden'); });
          caps.forEach((item) => { item.classList.add('hidden'); });
          shiftCaps.forEach((item) => { item.classList.add('hidden'); });
          caseUp.forEach((item) => { item.classList.remove('hidden'); });
        }
        if (event.getModifierState('Shift') === true && isCaps === true) {
          caseDown.forEach((item) => { item.classList.add('hidden'); });
          caseUp.forEach((item) => { item.classList.add('hidden'); });
          caps.forEach((item) => { item.classList.add('hidden'); });
          shiftCaps.forEach((item) => { item.classList.remove('hidden'); });
        }
      }
    }
  });
};

document.onkeyup = function (event) { /** *************ПРИ ОТПУСКАНИИ КЛАВИШ */
  KEY.forEach((item) => {
    if (item.classList.contains('active')) {
      item.classList.remove('active');
    }

    if (event.key === 'Shift') {
      if (event.code === 'ShiftLeft') {
        document.querySelector('.ShiftLeft').classList.remove('activeCaps');
      } else if (event.code === 'ShiftRight') { document.querySelector('.ShiftRight').classList.remove('activeCaps'); }

      if (event.key === 'Shift' && isCaps === false) {
        caseDown.forEach((item) => { item.classList.remove('hidden'); });
        caseUp.forEach((item) => { item.classList.add('hidden'); });
        caps.forEach((item) => { item.classList.add('hidden'); });
        shiftCaps.forEach((item) => { item.classList.add('hidden'); });
      }

      if (event.key === 'Shift' && isCaps === true) {
        caseDown.forEach((item) => { item.classList.add('hidden'); });
        caseUp.forEach((item) => { item.classList.add('hidden'); });
        shiftCaps.forEach((item) => { item.classList.add('hidden'); });
        caps.forEach((item) => { item.classList.remove('hidden'); });
      }
    }
  });
};
/** **************ДЛЯ ФИЗ КЛАВЫ************** */
/** **************ДЛЯ ВИРТ КЛАВЫ************** */

KEY.forEach((item) => {
  item.addEventListener('mousedown', (event) => {
    item.classList.add('active');
    TEXTAREA.value += 'kkk';
    TEXTAREA.focus();
  });
});
KEY.forEach((item) => {
  item.addEventListener('mouseup', (event) => {
    item.classList.remove('active');
    TEXTAREA.focus();
  });
});

/* keysCode.map(btn => {
	btn.addEventListener("click", () => {
		y.value += btn.innerHTML;
		// res.focus();
	});
}); */
