!(function () {
  'use strict';
  var e = {
      formSelector: '.form',
      inputSelector: '.form__input',
      submitButtonSelector: '.form__submit-btn',
      inactiveButtonClass: 'form__submit-btn_inactive',
      inputErrorClass: '.form__input_type_error',
      errorClass: 'form__input-error_active',
    },
    t = document.querySelector('.profile__edit'),
    n = document.querySelector('.profile__add-btn'),
    r = document.querySelector('.profile__title'),
    i = document.querySelector('.profile__text'),
    o = document.querySelector('.cards__list'),
    a = document.querySelector('#card').content,
    c = document.querySelector('.form__input_type_name'),
    s = document.querySelector('.form__input_type_description'),
    l = '.form_js_add',
    u = '.form_js_edit';
  function f(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        'value' in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function p(e, t, n) {
    if (!t.has(e))
      throw new TypeError('attempted to get private field on non-instance');
    return n;
  }
  var d = new WeakSet(),
    h = (function () {
      function e(t) {
        var n, r;
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        })(this, e),
          d.add(this),
          (r = void 0),
          (n = 'popup') in this
            ? Object.defineProperty(this, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (this[n] = r),
          (this.popup = document.querySelector(t));
      }
      var t, n;
      return (
        (t = e),
        (n = [
          {
            key: 'open',
            value: function () {
              this.popup.classList.remove('popup_hidden'),
                document.addEventListener('keydown', p(this, d, v).bind(this));
            },
          },
          {
            key: 'close',
            value: function () {
              this.popup.classList.add('popup_hidden'),
                document.removeEventListener('keydown', p(this, d, v));
            },
          },
          {
            key: 'handlerHide',
            value: function (e) {
              var t = e.target,
                n = this.popup.querySelector('.popup__close');
              (t !== this.popup && t !== n) || this.close();
            },
          },
          {
            key: 'setEventListeners',
            value: function () {
              this.popup.addEventListener('click', this.handlerHide.bind(this));
            },
          },
        ]) && f(t.prototype, n),
        e
      );
    })();
  function v(e) {
    'Escape' === e.key && this.close();
  }
  function y(e) {
    return (y =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              'function' == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          })(e);
  }
  function b(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        'value' in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function w(e, t, n) {
    return (w =
      'undefined' != typeof Reflect && Reflect.get
        ? Reflect.get
        : function (e, t, n) {
            var r = (function (e, t) {
              for (
                ;
                !Object.prototype.hasOwnProperty.call(e, t) &&
                null !== (e = _(e));

              );
              return e;
            })(e, t);
            if (r) {
              var i = Object.getOwnPropertyDescriptor(r, t);
              return i.get ? i.get.call(n) : i.value;
            }
          })(e, t, n || e);
  }
  function m(e, t) {
    return (m =
      Object.setPrototypeOf ||
      function (e, t) {
        return (e.__proto__ = t), e;
      })(e, t);
  }
  function g(e, t) {
    if (t && ('object' === y(t) || 'function' == typeof t)) return t;
    if (void 0 !== t)
      throw new TypeError(
        'Derived constructors may only return object or undefined'
      );
    return k(e);
  }
  function k(e) {
    if (void 0 === e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  function _(e) {
    return (_ = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function S(e, t) {
    return (function (e, t) {
      return t.get ? t.get.call(e) : t.value;
    })(e, O(e, t, 'get'));
  }
  function j(e, t, n) {
    return (
      (function (e, t, n) {
        if (t.set) t.set.call(e, n);
        else {
          if (!t.writable)
            throw new TypeError('attempted to set read only private field');
          t.value = n;
        }
      })(e, O(e, t, 'set'), n),
      n
    );
  }
  function O(e, t, n) {
    if (!t.has(e))
      throw new TypeError(
        'attempted to ' + n + ' private field on non-instance'
      );
    return t.get(e);
  }
  var E = new WeakMap(),
    W = new WeakMap(),
    C = (function (e) {
      !(function (e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && m(e, t);
      })(a, e);
      var t,
        n,
        r,
        i,
        o =
          ((r = a),
          (i = (function () {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })()),
          function () {
            var e,
              t = _(r);
            if (i) {
              var n = _(this).constructor;
              e = Reflect.construct(t, arguments, n);
            } else e = t.apply(this, arguments);
            return g(this, e);
          });
      function a(e, t, n) {
        var r;
        return (
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, a),
          (r = o.call(this, e)),
          E.set(k(r), { writable: !0, value: void 0 }),
          W.set(k(r), { writable: !0, value: void 0 }),
          j(k(r), E, r.popup.querySelector(t)),
          j(k(r), W, r.popup.querySelector(n)),
          r.setEventListeners(),
          r
        );
      }
      return (
        (t = a),
        (n = [
          {
            key: 'open',
            value: function (e) {
              w(_(a.prototype), 'open', this).call(this),
                (S(this, E).src = e.target.src),
                (S(this, E).alt = e.target.alt),
                (S(this, W).textContent = e.target.alt);
            },
          },
        ]) && b(t.prototype, n),
        a
      );
    })(h);
  function P(e) {
    return (P =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              'function' == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          })(e);
  }
  function T(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        'value' in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function M(e, t, n) {
    return (M =
      'undefined' != typeof Reflect && Reflect.get
        ? Reflect.get
        : function (e, t, n) {
            var r = (function (e, t) {
              for (
                ;
                !Object.prototype.hasOwnProperty.call(e, t) &&
                null !== (e = R(e));

              );
              return e;
            })(e, t);
            if (r) {
              var i = Object.getOwnPropertyDescriptor(r, t);
              return i.get ? i.get.call(n) : i.value;
            }
          })(e, t, n || e);
  }
  function q(e, t) {
    return (q =
      Object.setPrototypeOf ||
      function (e, t) {
        return (e.__proto__ = t), e;
      })(e, t);
  }
  function L(e, t) {
    if (t && ('object' === P(t) || 'function' == typeof t)) return t;
    if (void 0 !== t)
      throw new TypeError(
        'Derived constructors may only return object or undefined'
      );
    return x(e);
  }
  function x(e) {
    if (void 0 === e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  function R(e) {
    return (R = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function D(e, t, n) {
    if (!t.has(e))
      throw new TypeError('attempted to get private field on non-instance');
    return n;
  }
  function A(e, t) {
    return (function (e, t) {
      return t.get ? t.get.call(e) : t.value;
    })(e, I(e, t, 'get'));
  }
  function B(e, t, n) {
    return (
      (function (e, t, n) {
        if (t.set) t.set.call(e, n);
        else {
          if (!t.writable)
            throw new TypeError('attempted to set read only private field');
          t.value = n;
        }
      })(e, I(e, t, 'set'), n),
      n
    );
  }
  function I(e, t, n) {
    if (!t.has(e))
      throw new TypeError(
        'attempted to ' + n + ' private field on non-instance'
      );
    return t.get(e);
  }
  var V = new WeakMap(),
    U = new WeakMap(),
    H = new WeakMap(),
    z = new WeakSet(),
    N = new WeakSet(),
    $ = (function (e) {
      !(function (e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && q(e, t);
      })(a, e);
      var t,
        n,
        r,
        i,
        o =
          ((r = a),
          (i = (function () {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })()),
          function () {
            var e,
              t = R(r);
            if (i) {
              var n = R(this).constructor;
              e = Reflect.construct(t, arguments, n);
            } else e = t.apply(this, arguments);
            return L(this, e);
          });
      function a(e, t, n) {
        var r,
          i,
          c,
          s,
          l = n.onSubmit;
        return (
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, a),
          (r = o.call(this, t)),
          N.add(x(r)),
          z.add(x(r)),
          (s = void 0),
          (c = 'form') in (i = x(r))
            ? Object.defineProperty(i, c, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (i.form = s),
          V.set(x(r), { writable: !0, value: void 0 }),
          U.set(x(r), { writable: !0, value: void 0 }),
          H.set(x(r), { writable: !0, value: void 0 }),
          (r.form = document.querySelector(e)),
          B(x(r), V, l),
          r.setEventListeners(),
          r
        );
      }
      return (
        (t = a),
        (n = [
          {
            key: 'close',
            value: function () {
              M(R(a.prototype), 'close', this).call(this), this.form.reset();
            },
          },
          {
            key: 'setEventListeners',
            value: function () {
              var e = this;
              M(R(a.prototype), 'setEventListeners', this).call(this),
                this.form.addEventListener('submit', function (t) {
                  D(e, z, F).call(e, t);
                });
            },
          },
        ]) && T(t.prototype, n),
        a
      );
    })(h);
  function F(e) {
    e.preventDefault(),
      A(this, V).call(this, D(this, N, G).call(this)),
      this.close();
  }
  function G() {
    var e = this;
    return (
      B(this, U, this.form.querySelectorAll('.form__input')),
      B(this, H, {}),
      A(this, U).forEach(function (t) {
        A(e, H)[t.name] = t.value;
      }),
      A(this, H)
    );
  }
  function J(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function K(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        'value' in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function Q(e, t, n) {
    return (
      (function (e, t, n) {
        if (t.set) t.set.call(e, n);
        else {
          if (!t.writable)
            throw new TypeError('attempted to set read only private field');
          t.value = n;
        }
      })(e, Y(e, t, 'set'), n),
      n
    );
  }
  function X(e, t) {
    return (function (e, t) {
      return t.get ? t.get.call(e) : t.value;
    })(e, Y(e, t, 'get'));
  }
  function Y(e, t, n) {
    if (!t.has(e))
      throw new TypeError(
        'attempted to ' + n + ' private field on non-instance'
      );
    return t.get(e);
  }
  function Z(e, t, n) {
    if (!t.has(e))
      throw new TypeError('attempted to get private field on non-instance');
    return n;
  }
  var ee = new WeakMap(),
    te = new WeakMap(),
    ne = new WeakMap(),
    re = new WeakSet(),
    ie = new WeakSet(),
    oe = new WeakSet(),
    ae = new WeakSet(),
    ce = new WeakSet(),
    se = new WeakSet(),
    le = new WeakSet(),
    ue = (function () {
      function e(t) {
        var n, r;
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        })(this, e),
          le.add(this),
          se.add(this),
          ce.add(this),
          ae.add(this),
          oe.add(this),
          ie.add(this),
          re.add(this),
          ee.set(this, { writable: !0, value: void 0 }),
          te.set(this, { writable: !0, value: void 0 }),
          ne.set(this, { writable: !0, value: void 0 }),
          (r = void 0),
          (n = 'formData') in this
            ? Object.defineProperty(this, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (this[n] = r),
          (this.formData = t);
      }
      var t, n;
      return (
        (t = e),
        (n = [
          {
            key: 'resetValidation',
            value: function () {
              var e = this;
              Z(this, ae, he).call(this),
                X(this, te).forEach(function (t) {
                  Z(e, se, ye).call(e, t);
                });
            },
          },
          {
            key: 'enableValidation',
            value: function () {
              var e,
                t = this.formData,
                n = t.formSelector,
                r = t.inputSelector,
                i = t.submitButtonSelector,
                o = document.querySelector(n),
                a =
                  (function (e) {
                    if (Array.isArray(e)) return J(e);
                  })((e = o.querySelectorAll(r))) ||
                  (function (e) {
                    if (
                      ('undefined' != typeof Symbol &&
                        null != e[Symbol.iterator]) ||
                      null != e['@@iterator']
                    )
                      return Array.from(e);
                  })(e) ||
                  (function (e, t) {
                    if (e) {
                      if ('string' == typeof e) return J(e, t);
                      var n = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        'Object' === n &&
                          e.constructor &&
                          (n = e.constructor.name),
                        'Map' === n || 'Set' === n
                          ? Array.from(e)
                          : 'Arguments' === n ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                          ? J(e, t)
                          : void 0
                      );
                    }
                  })(e) ||
                  (function () {
                    throw new TypeError(
                      'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                    );
                  })(),
                c = o.querySelector(i);
              Q(this, ee, o),
                Q(this, te, a),
                Q(this, ne, c),
                Z(this, le, be).call(this);
            },
          },
        ]) && K(t.prototype, n),
        e
      );
    })();
  function fe(e) {
    e.validity.valid
      ? Z(this, se, ye).call(this, e)
      : Z(this, ce, ve).call(this, e);
  }
  function pe() {
    X(this, ne).classList.add(this.formData.inactiveButtonClass),
      X(this, ne).setAttribute('disabled', 'disabled');
  }
  function de() {
    X(this, ne).classList.remove(this.formData.inactiveButtonClass),
      X(this, ne).removeAttribute('disabled');
  }
  function he() {
    X(this, te).some(function (e) {
      return !e.validity.valid;
    })
      ? Z(this, ie, pe).call(this)
      : Z(this, oe, de).call(this);
  }
  function ve(e) {
    var t = this.formData,
      n = t.inputErrorClass,
      r = t.errorClass,
      i = X(this, ee).querySelector('.'.concat(e.id, '-error'));
    e.classList.add(n),
      (i.textContent = e.validationMessage),
      i.classList.add(r);
  }
  function ye(e) {
    var t = this.formData,
      n = t.inputErrorClass,
      r = t.errorClass,
      i = X(this, ee).querySelector('.'.concat(e.id, '-error'));
    e.classList.remove(n), i.classList.remove(r), (i.textContent = '');
  }
  function be() {
    var e = this;
    X(this, te).forEach(function (t) {
      t.addEventListener('input', function () {
        Z(e, re, fe).call(e, t), Z(e, ae, he).call(e);
      });
    });
  }
  function we(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        'value' in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function me(e, t) {
    return (function (e, t) {
      return t.get ? t.get.call(e) : t.value;
    })(e, ke(e, t, 'get'));
  }
  function ge(e, t, n) {
    return (
      (function (e, t, n) {
        if (t.set) t.set.call(e, n);
        else {
          if (!t.writable)
            throw new TypeError('attempted to set read only private field');
          t.value = n;
        }
      })(e, ke(e, t, 'set'), n),
      n
    );
  }
  function ke(e, t, n) {
    if (!t.has(e))
      throw new TypeError(
        'attempted to ' + n + ' private field on non-instance'
      );
    return t.get(e);
  }
  var _e = new WeakMap(),
    Se = new WeakMap(),
    je = new WeakMap(),
    Oe = (function () {
      function e(t, n) {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        })(this, e),
          _e.set(this, { writable: !0, value: void 0 }),
          Se.set(this, { writable: !0, value: void 0 }),
          je.set(this, { writable: !0, value: void 0 }),
          ge(this, _e, t),
          ge(this, Se, n),
          ge(this, je, {});
      }
      var t, n;
      return (
        (t = e),
        (n = [
          {
            key: 'getUserInfo',
            value: function () {
              return me(this, je);
            },
          },
          {
            key: 'setUserInfo',
            value: function (e) {
              (me(this, je).name = e.name),
                (me(this, je).job = e.job),
                (me(this, _e).textContent = me(this, je).name.trim()),
                (me(this, Se).textContent = me(this, je).job.trim());
            },
          },
        ]) && we(t.prototype, n),
        e
      );
    })();
  function Ee(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        'value' in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function We(e, t) {
    return (function (e, t) {
      return t.get ? t.get.call(e) : t.value;
    })(e, Pe(e, t, 'get'));
  }
  function Ce(e, t, n) {
    return (
      (function (e, t, n) {
        if (t.set) t.set.call(e, n);
        else {
          if (!t.writable)
            throw new TypeError('attempted to set read only private field');
          t.value = n;
        }
      })(e, Pe(e, t, 'set'), n),
      n
    );
  }
  function Pe(e, t, n) {
    if (!t.has(e))
      throw new TypeError(
        'attempted to ' + n + ' private field on non-instance'
      );
    return t.get(e);
  }
  var Te = new WeakMap(),
    Me = new WeakMap(),
    qe = new WeakMap(),
    Le = (function () {
      function e(t, n) {
        var r = t.initialCards,
          i = t.renderer;
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        })(this, e),
          Te.set(this, { writable: !0, value: void 0 }),
          Me.set(this, { writable: !0, value: void 0 }),
          qe.set(this, { writable: !0, value: void 0 }),
          Ce(this, Te, r),
          Ce(this, Me, i),
          Ce(this, qe, n);
      }
      var t, n;
      return (
        (t = e),
        (n = [
          {
            key: 'render',
            value: function () {
              var e = this;
              We(this, Te).forEach(function (t) {
                return We(e, Me).call(e, t);
              });
            },
          },
          {
            key: 'addItem',
            value: function (e) {
              We(this, qe).prepend(e);
            },
          },
        ]) && Ee(t.prototype, n),
        e
      );
    })();
  function xe(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        'value' in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function Re(e, t, n) {
    if (!t.has(e))
      throw new TypeError('attempted to get private field on non-instance');
    return n;
  }
  function De(e, t, n) {
    return (
      (function (e, t, n) {
        if (t.set) t.set.call(e, n);
        else {
          if (!t.writable)
            throw new TypeError('attempted to set read only private field');
          t.value = n;
        }
      })(e, Be(e, t, 'set'), n),
      n
    );
  }
  function Ae(e, t) {
    return (function (e, t) {
      return t.get ? t.get.call(e) : t.value;
    })(e, Be(e, t, 'get'));
  }
  function Be(e, t, n) {
    if (!t.has(e))
      throw new TypeError(
        'attempted to ' + n + ' private field on non-instance'
      );
    return t.get(e);
  }
  var Ie = new WeakMap(),
    Ve = new WeakMap(),
    Ue = new WeakMap(),
    He = new WeakMap(),
    ze = new WeakMap(),
    Ne = new WeakMap(),
    $e = new WeakMap(),
    Fe = new WeakMap(),
    Ge = new WeakMap(),
    Je = new WeakSet(),
    Ke = new WeakSet(),
    Qe = new WeakSet(),
    Xe = new WeakSet(),
    Ye = new WeakSet(),
    Ze = (function () {
      function e(t, n, r) {
        var i = r.handleCardClick;
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        })(this, e),
          Ye.add(this),
          Xe.add(this),
          Qe.add(this),
          Ke.add(this),
          Je.add(this),
          Ie.set(this, { writable: !0, value: void 0 }),
          Ve.set(this, { writable: !0, value: void 0 }),
          Ue.set(this, { writable: !0, value: void 0 }),
          He.set(this, { writable: !0, value: void 0 }),
          ze.set(this, { writable: !0, value: void 0 }),
          Ne.set(this, { writable: !0, value: void 0 }),
          $e.set(this, { writable: !0, value: void 0 }),
          Fe.set(this, {
            writable: !0,
            value: {
              card: 'card',
              image: 'card__image',
              title: 'card__title',
              like: 'card__like',
              likeActive: 'card__like_active',
              delete: 'card__delete',
            },
          }),
          Ge.set(this, {
            writable: !0,
            value: {
              card: '.'.concat(Ae(this, Fe).card),
              image: '.'.concat(Ae(this, Fe).image),
              title: '.'.concat(Ae(this, Fe).title),
              like: '.'.concat(Ae(this, Fe).like),
              delete: '.'.concat(Ae(this, Fe).delete),
            },
          }),
          De(this, Ie, n),
          De(this, Ve, t),
          (this.handleCardClick = i);
      }
      var t, n;
      return (
        (t = e),
        (n = [
          {
            key: 'newCard',
            value: function () {
              return Re(this, Ke, tt).call(this);
            },
          },
        ]) && xe(t.prototype, n),
        e
      );
    })();
  function et() {
    return Ae(this, Ie).querySelector(Ae(this, Ge).card).cloneNode(!0);
  }
  function tt() {
    var e = Ae(this, Ve),
      t = e.link,
      n = e.name;
    return (
      De(this, He, Re(this, Je, et).call(this)),
      De(this, ze, Ae(this, He).querySelector(Ae(this, Ge).title)),
      De(this, Ne, Ae(this, He).querySelector(Ae(this, Ge).like)),
      De(this, $e, Ae(this, He).querySelector(Ae(this, Ge).delete)),
      De(this, Ue, Ae(this, He).querySelector(Ae(this, Ge).image)),
      (Ae(this, Ue).src = t),
      (Ae(this, Ue).alt = n),
      (Ae(this, ze).textContent = n),
      Re(this, Qe, nt).call(this),
      Ae(this, He)
    );
  }
  function nt() {
    var e = this;
    Ae(this, Ne).addEventListener('click', Re(this, Xe, rt).bind(this)),
      Ae(this, $e).addEventListener('click', Re(this, Ye, it).bind(this)),
      Ae(this, Ue).addEventListener('click', function (t) {
        return e.handleCardClick(t);
      });
  }
  function rt(e) {
    e.target.classList.toggle(Ae(this, Fe).likeActive);
  }
  function it() {
    Ae(this, He).remove();
  }
  function ot(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function at(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? ot(Object(n), !0).forEach(function (t) {
            ct(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ot(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
  }
  function ct(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  var st = new C('.popup_js_preview', '.preview__image', '.preview__caption'),
    lt = function (e) {
      ut.addItem(
        (function (e) {
          return new Ze(e, a, {
            handleCardClick: function (e) {
              st.open(e);
            },
          }).newCard();
        })(e)
      );
    },
    ut = new Le(
      {
        initialCards: [
          {
            name: 'Архыз',
            link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
          },
          {
            name: 'Челябинская область',
            link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
          },
          {
            name: 'Иваново',
            link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
          },
          {
            name: 'Камчатка',
            link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
          },
          {
            name: 'Холмогорский район',
            link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
          },
          {
            name: 'Байкал',
            link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
          },
        ],
        renderer: lt,
      },
      o
    );
  ut.render();
  var ft = new Oe(r, i),
    pt = new ue(at(at({}, e), {}, { formSelector: l })),
    dt = new ue(at(at({}, e), {}, { formSelector: u })),
    ht = new $(l, '.popup_js_add', { onSubmit: lt });
  pt.enableValidation();
  var vt = new $(u, '.popup_js_edit', {
    onSubmit: function (e) {
      ft.setUserInfo(e);
    },
  });
  dt.enableValidation(),
    n.addEventListener('click', function () {
      ht.open(), pt.resetValidation();
    }),
    t.addEventListener('click', function () {
      var e = ft.getUserInfo();
      (c.value = r.textContent.trim() || e.name),
        (s.value = i.textContent.trim() || e.job),
        dt.resetValidation(),
        vt.open();
    });
})();
