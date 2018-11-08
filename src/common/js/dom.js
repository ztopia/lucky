export const hasClass = function (obj, cls) {
  return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
};

export const addClass = function (obj, cls) {
  if (!hasClass(obj, cls)) obj.className += ' ' + cls;
};

export const removeClass = function (obj, cls) {
  if (hasClass(obj, cls)) {
    const reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
    obj.className = obj.className.replace(reg, ' ');
  }
};

export const toggleClass = function (obj, cls) {
  if (hasClass(obj, cls)) {
    removeClass(obj, cls);
  } else {
    addClass(obj, cls);
  }
};

export const triggerClick = function (el) {
  if (el.click) {
    el.click();
  } else {
    try {
      var evt = document.createEvent("Event");
      evt.initEvent("click", true, true);
      el.dispatchEvent(evt);
    } catch (e) {
      alert(e);
    }
  }
};
