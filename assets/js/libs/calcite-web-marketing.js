(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.calciteMarketing = factory());
}(this, function () { 'use strict';

  function foo () {
    console.log('bar');
  }

  var calciteWebMarketing = {
    foo: foo
  };

  return calciteWebMarketing;

}));
//# sourceMappingURL=calcite-web-marketing.js.map
