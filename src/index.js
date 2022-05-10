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
const virtKeys = {
  Backquote: ['`', '~', '`', '~'],
  Digit1: ['1', '!', '1', '!'],
  Digit2: ['2', '@', '2', '@'],
  Digit3: ['3', '#', '3', '#'],
  Digit4: ['4', '$', '4', '$'],
  Digit5: ['5', '%', '5', '%'],
  Digit6: ['6', '^', '6', '^'],
  Digit7: ['7', '&', '7', '&'],
  Digit8: ['8', '*', '8', '*'],
  Digit9: ['9', '(', '9', '('],
  Digit0: ['0', ')', '0', ')'],
  Minus: ['-', '_', '-', '_'],
  Equal: ['=', '+', '=', '+'],
  Backspace: ['', '', '', ''],
  Tab: ['\t', '\t', '\t', '\t'],
  KeyQ: ['q', 'Q', 'Q', 'q'],
  KeyW: ['w', 'W', 'W', 'w'],
  KeyE: ['e', 'E', 'E', 'e'],
  KeyR: ['r', 'R', 'R', 'r'],
  KeyT: ['t', 'T', 'T', 't'],
  KeyY: ['y', 'Y', 'Y', 'y'],
  KeyU: ['u', 'U', 'U', 'u'],
  KeyI: ['i', 'I', 'I', 'i'],
  KeyO: ['o', 'O', 'O', 'o'],
  KeyP: ['p', 'P', 'P', 'p'],
  BracketLeft: ['[', '{', '[', '{'],
  BracketRight: [']', '}', ']', '}'],
  Backslash: ['\\', '|', '\\', '|'],
  Delete: ['', '', '', ''],
  CapsLock: ['', '', '', ''],
  KeyA: ['a', 'A', 'A', 'a'],
  KeyS: ['s', 'S', 'S', 's'],
  KeyD: ['d', 'D', 'D', 'd'],
  KeyF: ['f', 'F', 'F', 'f'],
  KeyG: ['g', 'G', 'G', 'g'],
  KeyH: ['h', 'H', 'H', 'h'],
  KeyJ: ['j', 'J', 'J', 'j'],
  KeyK: ['k', 'K', 'K', 'k'],
  KeyL: ['l', 'L', 'L', 'l'],
  Semicolon: [';', ':', ';', ':'],
  Quote: ["'", '"', "'", '"'],
  Enter: ['\n', '\n', '\n', '\n'],
  ShiftLeft: ['', '', '', ''],
  KeyZ: ['z', 'Z', 'Z', 'z'],
  KeyX: ['x', 'X', 'X', 'x'],
  KeyC: ['c', 'C', 'C', 'c'],
  KeyV: ['v', 'V', 'V', 'v'],
  KeyB: ['b', 'B', 'B', 'b'],
  KeyN: ['n', 'N', 'N', 'n'],
  KeyM: ['m', 'M', 'M', 'm'],
  Comma: [',', '<', ',', '<'],
  Period: ['.', '>', '.', '>'],
  Slash: ['/', '?', '/', '?'],
  ArrowUp: ['', '', '', ''],
  ShiftRight: ['', '', '', ''],
  ControlLeft: ['', '', '', ''],
  MetaLeft: ['', '', '', ''],
  AltLeft: ['', '', '', ''],
  Space: [' ', ' ', ' ', ' '],
  AltRight: ['', '', '', ''],
  ArrowLeft: ['', '', '', ''],
  ArrowDown: ['', '', '', ''],
  ArrowRight: ['', '', '', ''],
  ControlRight: ['', '', '', ''],
};
function createKeyboard() {
  let out = '';
  for (let i = 0; i < keysCode.length; i += 1) {
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
document.onkeydown = (event) => {
  KEY.forEach((item) => {
    if (item.classList.contains(event.code)) {
      item.classList.add('active');

      if (event.key === 'Tab') { /** **********TAB*********** */
        event.preventDefault();
        TEXTAREA.value += '\t';
      }

      if (event.key === 'CapsLock') { /** **********CAPSLOCK*********** */
        if (event.getModifierState('CapsLock') === true) {
          document.querySelector('.CapsLock').classList.add('activeCaps');
          isCaps = true;
          caseDown.forEach((item1) => { item1.classList.add('hidden'); });
          caseUp.forEach((item1) => { item1.classList.add('hidden'); });
          shiftCaps.forEach((item1) => { item1.classList.add('hidden'); });
          caps.forEach((item1) => { item1.classList.remove('hidden'); });
        } else {
          document.querySelector('.CapsLock').classList.remove('activeCaps');
          isCaps = false;
          caseDown.forEach((item2) => { item2.classList.remove('hidden'); });
          caps.forEach((item2) => { item2.classList.add('hidden'); });
          caseUp.forEach((item2) => { item2.classList.add('hidden'); });
          shiftCaps.forEach((item2) => { item2.classList.add('hidden'); });
        }
      }

      if (event.key === 'Shift') {
        if (event.code === 'ShiftLeft') { document.querySelector('.ShiftLeft').classList.add('activeCaps'); } else if (event.code === 'ShiftRight') { document.querySelector('.ShiftRight').classList.add('activeCaps'); }

        if (event.getModifierState('Shift') === true && isCaps === false) {
          caseDown.forEach((item3) => { item3.classList.add('hidden'); });
          caps.forEach((item3) => { item3.classList.add('hidden'); });
          shiftCaps.forEach((item3) => { item3.classList.add('hidden'); });
          caseUp.forEach((item3) => { item3.classList.remove('hidden'); });
        }
        if (event.getModifierState('Shift') === true && isCaps === true) {
          caseDown.forEach((item4) => { item4.classList.add('hidden'); });
          caseUp.forEach((item4) => { item4.classList.add('hidden'); });
          caps.forEach((item4) => { item4.classList.add('hidden'); });
          shiftCaps.forEach((item4) => { item4.classList.remove('hidden'); });
        }
      }
    }
  });
};

document.onkeyup = (event) => { /** *************ПРИ ОТПУСКАНИИ КЛАВИШ */
  KEY.forEach((item5) => {
    if (item5.classList.contains('active')) {
      item5.classList.remove('active');
    }

    if (event.key === 'Shift') {
      if (event.code === 'ShiftLeft') {
        document.querySelector('.ShiftLeft').classList.remove('activeCaps');
      } else if (event.code === 'ShiftRight') { document.querySelector('.ShiftRight').classList.remove('activeCaps'); }

      if (event.key === 'Shift' && isCaps === false) {
        caseDown.forEach((item6) => { item6.classList.remove('hidden'); });
        caseUp.forEach((item6) => { item6.classList.add('hidden'); });
        caps.forEach((item6) => { item6.classList.add('hidden'); });
        shiftCaps.forEach((item6) => { item6.classList.add('hidden'); });
      }

      if (event.key === 'Shift' && isCaps === true) {
        caseDown.forEach((item7) => { item7.classList.add('hidden'); });
        caseUp.forEach((item7) => { item7.classList.add('hidden'); });
        shiftCaps.forEach((item7) => { item7.classList.add('hidden'); });
        caps.forEach((item7) => { item7.classList.remove('hidden'); });
      }
    }
  });
};
/** **************ДЛЯ ФИЗ КЛАВЫ************** */
/** **************ДЛЯ ВИРТ КЛАВЫ************** */

const CAPS = document.querySelector('.CapsLock');
const SHIFTLEFT = document.querySelector('.ShiftLeft');
const SHIFTRIGHT = document.querySelector('.ShiftRight');
let hasCaps = false;
let hasShift = false;

CAPS.addEventListener('click', () => {
  CAPS.classList.toggle('activeCaps');
  if (CAPS.classList.contains('activeCaps') && hasShift === false) {
    hasCaps = true;
    caseDown.forEach((item1) => { item1.classList.add('hidden'); });
    caseUp.forEach((item1) => { item1.classList.add('hidden'); });
    shiftCaps.forEach((item1) => { item1.classList.add('hidden'); });
    caps.forEach((item1) => { item1.classList.remove('hidden'); });
  } else if (CAPS.classList.contains('activeCaps') && hasShift === true) {
    hasCaps = true;
    caseDown.forEach((item2) => { item2.classList.add('hidden'); });
    caps.forEach((item2) => { item2.classList.add('hidden'); });
    caseUp.forEach((item2) => { item2.classList.add('hidden'); });
    shiftCaps.forEach((item2) => { item2.classList.remove('hidden'); });
  } else if (!CAPS.classList.contains('activeCaps') && hasShift === false) {
    hasCaps = false;
    caseDown.forEach((item2) => { item2.classList.remove('hidden'); });
    caps.forEach((item2) => { item2.classList.add('hidden'); });
    caseUp.forEach((item2) => { item2.classList.add('hidden'); });
    shiftCaps.forEach((item2) => { item2.classList.add('hidden'); });
  } else if (!CAPS.classList.contains('activeCaps') && hasShift === true) {
    hasCaps = false;
    caseDown.forEach((item2) => { item2.classList.remove('hidden'); });
    caps.forEach((item2) => { item2.classList.add('hidden'); });
    caseUp.forEach((item2) => { item2.classList.remove('hidden'); });
    shiftCaps.forEach((item2) => { item2.classList.add('hidden'); });
  }
});

SHIFTLEFT.addEventListener('mousedown', () => {
  SHIFTLEFT.classList.add('activeCaps');
  hasShift = true;
  if (SHIFTLEFT.classList.contains('activeCaps') && hasCaps === false) {
    caseDown.forEach((item3) => { item3.classList.add('hidden'); });
    caps.forEach((item3) => { item3.classList.add('hidden'); });
    shiftCaps.forEach((item3) => { item3.classList.add('hidden'); });
    caseUp.forEach((item3) => { item3.classList.remove('hidden'); });
  } else if (SHIFTLEFT.classList.contains('activeCaps') && hasCaps === true) {
    caseDown.forEach((item4) => { item4.classList.add('hidden'); });
    caseUp.forEach((item4) => { item4.classList.add('hidden'); });
    caps.forEach((item4) => { item4.classList.add('hidden'); });
    shiftCaps.forEach((item4) => { item4.classList.remove('hidden'); });
  }
});

SHIFTLEFT.addEventListener('mouseup', () => {
  SHIFTLEFT.classList.remove('activeCaps');
  hasShift = false;
  if (CAPS.classList.contains('activeCaps')) {
    caseDown.forEach((item7) => { item7.classList.add('hidden'); });
    caseUp.forEach((item7) => { item7.classList.add('hidden'); });
    shiftCaps.forEach((item7) => { item7.classList.add('hidden'); });
    caps.forEach((item7) => { item7.classList.remove('hidden'); });
  } else {
    caseDown.forEach((item6) => { item6.classList.remove('hidden'); });
    caseUp.forEach((item6) => { item6.classList.add('hidden'); });
    caps.forEach((item6) => { item6.classList.add('hidden'); });
    shiftCaps.forEach((item6) => { item6.classList.add('hidden'); });
  }
});

SHIFTRIGHT.addEventListener('mousedown', () => {
  SHIFTRIGHT.classList.add('activeCaps');
  hasShift = true;
  if (SHIFTRIGHT.classList.contains('activeCaps') && hasCaps === false) {
    caseDown.forEach((item3) => { item3.classList.add('hidden'); });
    caps.forEach((item3) => { item3.classList.add('hidden'); });
    shiftCaps.forEach((item3) => { item3.classList.add('hidden'); });
    caseUp.forEach((item3) => { item3.classList.remove('hidden'); });
  } else if (SHIFTLEFT.classList.contains('activeCaps') && hasCaps === true) {
    caseDown.forEach((item4) => { item4.classList.add('hidden'); });
    caseUp.forEach((item4) => { item4.classList.add('hidden'); });
    caps.forEach((item4) => { item4.classList.add('hidden'); });
    shiftCaps.forEach((item4) => { item4.classList.remove('hidden'); });
  }
});

SHIFTRIGHT.addEventListener('mouseup', () => {
  SHIFTRIGHT.classList.remove('activeCaps');
  hasShift = false;
  if (CAPS.classList.contains('activeCaps')) {
    caseDown.forEach((item7) => { item7.classList.add('hidden'); });
    caseUp.forEach((item7) => { item7.classList.add('hidden'); });
    shiftCaps.forEach((item7) => { item7.classList.add('hidden'); });
    caps.forEach((item7) => { item7.classList.remove('hidden'); });
  } else {
    caseDown.forEach((item6) => { item6.classList.remove('hidden'); });
    caseUp.forEach((item6) => { item6.classList.add('hidden'); });
    caps.forEach((item6) => { item6.classList.add('hidden'); });
    shiftCaps.forEach((item6) => { item6.classList.add('hidden'); });
  }
});

KEY.forEach((item8) => {
  item8.addEventListener('mousedown', () => {
    if (hasCaps === false && hasShift === false) {
      item8.classList.add('active');
      const data = item8.getAttribute('data');
      const text = virtKeys[data][0];
      TEXTAREA.value += text;
      TEXTAREA.focus();
    } else if (hasCaps === false && hasShift === true) {
      item8.classList.add('active');
      const data = item8.getAttribute('data');
      const text = virtKeys[data][1];
      TEXTAREA.value += text;
      TEXTAREA.focus();
    } else if (hasCaps === true && hasShift === false) {
      item8.classList.add('active');
      const data = item8.getAttribute('data');
      const text = virtKeys[data][2];
      TEXTAREA.value += text;
      TEXTAREA.focus();
    } else if (hasCaps === true && hasShift === true) {
      item8.classList.add('active');
      const data = item8.getAttribute('data');
      const text = virtKeys[data][3];
      TEXTAREA.value += text;
      TEXTAREA.focus();
    }
  });
});

KEY.forEach((item9) => {
  item9.addEventListener('mouseup', () => {
    item9.classList.remove('active');
    TEXTAREA.focus();
  });
});
