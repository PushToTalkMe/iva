(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function tr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var zs = { exports: {} },
  hl = {},
  Rs = { exports: {} },
  L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nr = Symbol.for("react.element"),
  Jc = Symbol.for("react.portal"),
  qc = Symbol.for("react.fragment"),
  bc = Symbol.for("react.strict_mode"),
  ef = Symbol.for("react.profiler"),
  tf = Symbol.for("react.provider"),
  nf = Symbol.for("react.context"),
  rf = Symbol.for("react.forward_ref"),
  lf = Symbol.for("react.suspense"),
  of = Symbol.for("react.memo"),
  uf = Symbol.for("react.lazy"),
  su = Symbol.iterator;
function sf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (su && e[su]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Os = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ls = Object.assign,
  Is = {};
function an(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Is),
    (this.updater = n || Os);
}
an.prototype.isReactComponent = {};
an.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
an.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function js() {}
js.prototype = an.prototype;
function fi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Is),
    (this.updater = n || Os);
}
var di = (fi.prototype = new js());
di.constructor = fi;
Ls(di, an.prototype);
di.isPureReactComponent = !0;
var au = Array.isArray,
  Ds = Object.prototype.hasOwnProperty,
  pi = { current: null },
  Ms = { key: !0, ref: !0, __self: !0, __source: !0 };
function As(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Ds.call(t, r) && !Ms.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: nr,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: pi.current,
  };
}
function af(e, t) {
  return {
    $$typeof: nr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function hi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === nr;
}
function cf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var cu = /\/+/g;
function Il(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? cf("" + e.key)
    : t.toString(36);
}
function Rr(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case nr:
          case Jc:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Il(i, 0) : r),
      au(l)
        ? ((n = ""),
          e != null && (n = e.replace(cu, "$&/") + "/"),
          Rr(l, t, n, "", function (a) {
            return a;
          }))
        : l != null &&
          (hi(l) &&
            (l = af(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(cu, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), au(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + Il(o, u);
      i += Rr(o, t, n, s, l);
    }
  else if (((s = sf(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + Il(o, u++)), (i += Rr(o, t, n, s, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function dr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Rr(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function ff(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ce = { current: null },
  Or = { transition: null },
  df = {
    ReactCurrentDispatcher: ce,
    ReactCurrentBatchConfig: Or,
    ReactCurrentOwner: pi,
  };
L.Children = {
  map: dr,
  forEach: function (e, t, n) {
    dr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      dr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      dr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!hi(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
L.Component = an;
L.Fragment = qc;
L.Profiler = ef;
L.PureComponent = fi;
L.StrictMode = bc;
L.Suspense = lf;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = df;
L.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Ls({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = pi.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      Ds.call(t, s) &&
        !Ms.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: nr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
L.createContext = function (e) {
  return (
    (e = {
      $$typeof: nf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: tf, _context: e }),
    (e.Consumer = e)
  );
};
L.createElement = As;
L.createFactory = function (e) {
  var t = As.bind(null, e);
  return (t.type = e), t;
};
L.createRef = function () {
  return { current: null };
};
L.forwardRef = function (e) {
  return { $$typeof: rf, render: e };
};
L.isValidElement = hi;
L.lazy = function (e) {
  return { $$typeof: uf, _payload: { _status: -1, _result: e }, _init: ff };
};
L.memo = function (e, t) {
  return { $$typeof: of, type: e, compare: t === void 0 ? null : t };
};
L.startTransition = function (e) {
  var t = Or.transition;
  Or.transition = {};
  try {
    e();
  } finally {
    Or.transition = t;
  }
};
L.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
L.useCallback = function (e, t) {
  return ce.current.useCallback(e, t);
};
L.useContext = function (e) {
  return ce.current.useContext(e);
};
L.useDebugValue = function () {};
L.useDeferredValue = function (e) {
  return ce.current.useDeferredValue(e);
};
L.useEffect = function (e, t) {
  return ce.current.useEffect(e, t);
};
L.useId = function () {
  return ce.current.useId();
};
L.useImperativeHandle = function (e, t, n) {
  return ce.current.useImperativeHandle(e, t, n);
};
L.useInsertionEffect = function (e, t) {
  return ce.current.useInsertionEffect(e, t);
};
L.useLayoutEffect = function (e, t) {
  return ce.current.useLayoutEffect(e, t);
};
L.useMemo = function (e, t) {
  return ce.current.useMemo(e, t);
};
L.useReducer = function (e, t, n) {
  return ce.current.useReducer(e, t, n);
};
L.useRef = function (e) {
  return ce.current.useRef(e);
};
L.useState = function (e) {
  return ce.current.useState(e);
};
L.useSyncExternalStore = function (e, t, n) {
  return ce.current.useSyncExternalStore(e, t, n);
};
L.useTransition = function () {
  return ce.current.useTransition();
};
L.version = "18.2.0";
Rs.exports = L;
var vl = Rs.exports;
const Lr = tr(vl);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pf = vl,
  hf = Symbol.for("react.element"),
  vf = Symbol.for("react.fragment"),
  mf = Object.prototype.hasOwnProperty,
  yf = pf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  gf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Fs(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) mf.call(t, r) && !gf.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: hf,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: yf.current,
  };
}
hl.Fragment = vf;
hl.jsx = Fs;
hl.jsxs = Fs;
zs.exports = hl;
var N = zs.exports,
  io = {},
  Us = { exports: {} },
  Ee = {},
  Vs = { exports: {} },
  $s = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(_, T) {
    var R = _.length;
    _.push(T);
    e: for (; 0 < R; ) {
      var W = (R - 1) >>> 1,
        Z = _[W];
      if (0 < l(Z, T)) (_[W] = T), (_[R] = Z), (R = W);
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var T = _[0],
      R = _.pop();
    if (R !== T) {
      _[0] = R;
      e: for (var W = 0, Z = _.length, cr = Z >>> 1; W < cr; ) {
        var wt = 2 * (W + 1) - 1,
          Ll = _[wt],
          St = wt + 1,
          fr = _[St];
        if (0 > l(Ll, R))
          St < Z && 0 > l(fr, Ll)
            ? ((_[W] = fr), (_[St] = R), (W = St))
            : ((_[W] = Ll), (_[wt] = R), (W = wt));
        else if (St < Z && 0 > l(fr, R)) (_[W] = fr), (_[St] = R), (W = St);
        else break e;
      }
    }
    return T;
  }
  function l(_, T) {
    var R = _.sortIndex - T.sortIndex;
    return R !== 0 ? R : _.id - T.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var s = [],
    a = [],
    h = 1,
    p = null,
    v = 3,
    w = !1,
    y = !1,
    S = !1,
    O = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(_) {
    for (var T = n(a); T !== null; ) {
      if (T.callback === null) r(a);
      else if (T.startTime <= _)
        r(a), (T.sortIndex = T.expirationTime), t(s, T);
      else break;
      T = n(a);
    }
  }
  function m(_) {
    if (((S = !1), d(_), !y))
      if (n(s) !== null) (y = !0), Dt(k);
      else {
        var T = n(a);
        T !== null && dn(m, T.startTime - _);
      }
  }
  function k(_, T) {
    (y = !1), S && ((S = !1), f(C), (C = -1)), (w = !0);
    var R = v;
    try {
      for (
        d(T), p = n(s);
        p !== null && (!(p.expirationTime > T) || (_ && !H()));

      ) {
        var W = p.callback;
        if (typeof W == "function") {
          (p.callback = null), (v = p.priorityLevel);
          var Z = W(p.expirationTime <= T);
          (T = e.unstable_now()),
            typeof Z == "function" ? (p.callback = Z) : p === n(s) && r(s),
            d(T);
        } else r(s);
        p = n(s);
      }
      if (p !== null) var cr = !0;
      else {
        var wt = n(a);
        wt !== null && dn(m, wt.startTime - T), (cr = !1);
      }
      return cr;
    } finally {
      (p = null), (v = R), (w = !1);
    }
  }
  var x = !1,
    P = null,
    C = -1,
    j = 5,
    z = -1;
  function H() {
    return !(e.unstable_now() - z < j);
  }
  function re() {
    if (P !== null) {
      var _ = e.unstable_now();
      z = _;
      var T = !0;
      try {
        T = P(!0, _);
      } finally {
        T ? ge() : ((x = !1), (P = null));
      }
    } else x = !1;
  }
  var ge;
  if (typeof c == "function")
    ge = function () {
      c(re);
    };
  else if (typeof MessageChannel < "u") {
    var sr = new MessageChannel(),
      ar = sr.port2;
    (sr.port1.onmessage = re),
      (ge = function () {
        ar.postMessage(null);
      });
  } else
    ge = function () {
      O(re, 0);
    };
  function Dt(_) {
    (P = _), x || ((x = !0), ge());
  }
  function dn(_, T) {
    C = O(function () {
      _(e.unstable_now());
    }, T);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (_) {
      _.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || w || ((y = !0), Dt(k));
    }),
    (e.unstable_forceFrameRate = function (_) {
      0 > _ || 125 < _
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (j = 0 < _ ? Math.floor(1e3 / _) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return v;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (_) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var T = 3;
          break;
        default:
          T = v;
      }
      var R = v;
      v = T;
      try {
        return _();
      } finally {
        v = R;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (_, T) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var R = v;
      v = _;
      try {
        return T();
      } finally {
        v = R;
      }
    }),
    (e.unstable_scheduleCallback = function (_, T, R) {
      var W = e.unstable_now();
      switch (
        (typeof R == "object" && R !== null
          ? ((R = R.delay), (R = typeof R == "number" && 0 < R ? W + R : W))
          : (R = W),
        _)
      ) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return (
        (Z = R + Z),
        (_ = {
          id: h++,
          callback: T,
          priorityLevel: _,
          startTime: R,
          expirationTime: Z,
          sortIndex: -1,
        }),
        R > W
          ? ((_.sortIndex = R),
            t(a, _),
            n(s) === null &&
              _ === n(a) &&
              (S ? (f(C), (C = -1)) : (S = !0), dn(m, R - W)))
          : ((_.sortIndex = Z), t(s, _), y || w || ((y = !0), Dt(k))),
        _
      );
    }),
    (e.unstable_shouldYield = H),
    (e.unstable_wrapCallback = function (_) {
      var T = v;
      return function () {
        var R = v;
        v = T;
        try {
          return _.apply(this, arguments);
        } finally {
          v = R;
        }
      };
    });
})($s);
Vs.exports = $s;
var wf = Vs.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bs = vl,
  _e = wf;
function g(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Qs = new Set(),
  jn = {};
function It(e, t) {
  tn(e, t), tn(e + "Capture", t);
}
function tn(e, t) {
  for (jn[e] = t, e = 0; e < t.length; e++) Qs.add(t[e]);
}
var Ge = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  uo = Object.prototype.hasOwnProperty,
  Sf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  fu = {},
  du = {};
function kf(e) {
  return uo.call(du, e)
    ? !0
    : uo.call(fu, e)
    ? !1
    : Sf.test(e)
    ? (du[e] = !0)
    : ((fu[e] = !0), !1);
}
function _f(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Ef(e, t, n, r) {
  if (t === null || typeof t > "u" || _f(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function fe(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new fe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ne[t] = new fe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ne[e] = new fe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ne[e] = new fe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new fe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ne[e] = new fe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ne[e] = new fe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ne[e] = new fe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ne[e] = new fe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var vi = /[\-:]([a-z])/g;
function mi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(vi, mi);
    ne[t] = new fe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(vi, mi);
    ne[t] = new fe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(vi, mi);
  ne[t] = new fe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ne[e] = new fe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new fe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ne[e] = new fe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function yi(e, t, n, r) {
  var l = ne.hasOwnProperty(t) ? ne[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Ef(t, n, l, r) && (n = null),
    r || l === null
      ? kf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var qe = Bs.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  pr = Symbol.for("react.element"),
  At = Symbol.for("react.portal"),
  Ft = Symbol.for("react.fragment"),
  gi = Symbol.for("react.strict_mode"),
  so = Symbol.for("react.profiler"),
  Hs = Symbol.for("react.provider"),
  Ws = Symbol.for("react.context"),
  wi = Symbol.for("react.forward_ref"),
  ao = Symbol.for("react.suspense"),
  co = Symbol.for("react.suspense_list"),
  Si = Symbol.for("react.memo"),
  et = Symbol.for("react.lazy"),
  Ys = Symbol.for("react.offscreen"),
  pu = Symbol.iterator;
function pn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (pu && e[pu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var B = Object.assign,
  jl;
function kn(e) {
  if (jl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      jl = (t && t[1]) || "";
    }
  return (
    `
` +
    jl +
    e
  );
}
var Dl = !1;
function Ml(e, t) {
  if (!e || Dl) return "";
  Dl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var l = a.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var s =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (Dl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? kn(e) : "";
}
function Pf(e) {
  switch (e.tag) {
    case 5:
      return kn(e.type);
    case 16:
      return kn("Lazy");
    case 13:
      return kn("Suspense");
    case 19:
      return kn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ml(e.type, !1)), e;
    case 11:
      return (e = Ml(e.type.render, !1)), e;
    case 1:
      return (e = Ml(e.type, !0)), e;
    default:
      return "";
  }
}
function fo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ft:
      return "Fragment";
    case At:
      return "Portal";
    case so:
      return "Profiler";
    case gi:
      return "StrictMode";
    case ao:
      return "Suspense";
    case co:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ws:
        return (e.displayName || "Context") + ".Consumer";
      case Hs:
        return (e._context.displayName || "Context") + ".Provider";
      case wi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Si:
        return (
          (t = e.displayName || null), t !== null ? t : fo(e.type) || "Memo"
        );
      case et:
        (t = e._payload), (e = e._init);
        try {
          return fo(e(t));
        } catch {}
    }
  return null;
}
function Cf(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return fo(t);
    case 8:
      return t === gi ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function ht(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Ks(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function xf(e) {
  var t = Ks(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function hr(e) {
  e._valueTracker || (e._valueTracker = xf(e));
}
function Gs(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Ks(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Hr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function po(e, t) {
  var n = t.checked;
  return B({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function hu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = ht(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Xs(e, t) {
  (t = t.checked), t != null && yi(e, "checked", t, !1);
}
function ho(e, t) {
  Xs(e, t);
  var n = ht(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? vo(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && vo(e, t.type, ht(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function vu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function vo(e, t, n) {
  (t !== "number" || Hr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var _n = Array.isArray;
function Xt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ht(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function mo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(g(91));
  return B({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function mu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(g(92));
      if (_n(n)) {
        if (1 < n.length) throw Error(g(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: ht(n) };
}
function Zs(e, t) {
  var n = ht(t.value),
    r = ht(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function yu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Js(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function yo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Js(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var vr,
  qs = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        vr = vr || document.createElement("div"),
          vr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = vr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Dn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Cn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Nf = ["Webkit", "ms", "Moz", "O"];
Object.keys(Cn).forEach(function (e) {
  Nf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Cn[t] = Cn[e]);
  });
});
function bs(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Cn.hasOwnProperty(e) && Cn[e])
    ? ("" + t).trim()
    : t + "px";
}
function ea(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = bs(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Tf = B(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function go(e, t) {
  if (t) {
    if (Tf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(g(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(g(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(g(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(g(62));
  }
}
function wo(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var So = null;
function ki(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ko = null,
  Zt = null,
  Jt = null;
function gu(e) {
  if ((e = or(e))) {
    if (typeof ko != "function") throw Error(g(280));
    var t = e.stateNode;
    t && ((t = Sl(t)), ko(e.stateNode, e.type, t));
  }
}
function ta(e) {
  Zt ? (Jt ? Jt.push(e) : (Jt = [e])) : (Zt = e);
}
function na() {
  if (Zt) {
    var e = Zt,
      t = Jt;
    if (((Jt = Zt = null), gu(e), t)) for (e = 0; e < t.length; e++) gu(t[e]);
  }
}
function ra(e, t) {
  return e(t);
}
function la() {}
var Al = !1;
function oa(e, t, n) {
  if (Al) return e(t, n);
  Al = !0;
  try {
    return ra(e, t, n);
  } finally {
    (Al = !1), (Zt !== null || Jt !== null) && (la(), na());
  }
}
function Mn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Sl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(g(231, t, typeof n));
  return n;
}
var _o = !1;
if (Ge)
  try {
    var hn = {};
    Object.defineProperty(hn, "passive", {
      get: function () {
        _o = !0;
      },
    }),
      window.addEventListener("test", hn, hn),
      window.removeEventListener("test", hn, hn);
  } catch {
    _o = !1;
  }
function zf(e, t, n, r, l, o, i, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (h) {
    this.onError(h);
  }
}
var xn = !1,
  Wr = null,
  Yr = !1,
  Eo = null,
  Rf = {
    onError: function (e) {
      (xn = !0), (Wr = e);
    },
  };
function Of(e, t, n, r, l, o, i, u, s) {
  (xn = !1), (Wr = null), zf.apply(Rf, arguments);
}
function Lf(e, t, n, r, l, o, i, u, s) {
  if ((Of.apply(this, arguments), xn)) {
    if (xn) {
      var a = Wr;
      (xn = !1), (Wr = null);
    } else throw Error(g(198));
    Yr || ((Yr = !0), (Eo = a));
  }
}
function jt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function ia(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function wu(e) {
  if (jt(e) !== e) throw Error(g(188));
}
function If(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = jt(e)), t === null)) throw Error(g(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return wu(l), e;
        if (o === r) return wu(l), t;
        o = o.sibling;
      }
      throw Error(g(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(g(189));
      }
    }
    if (n.alternate !== r) throw Error(g(190));
  }
  if (n.tag !== 3) throw Error(g(188));
  return n.stateNode.current === n ? e : t;
}
function ua(e) {
  return (e = If(e)), e !== null ? sa(e) : null;
}
function sa(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = sa(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var aa = _e.unstable_scheduleCallback,
  Su = _e.unstable_cancelCallback,
  jf = _e.unstable_shouldYield,
  Df = _e.unstable_requestPaint,
  Y = _e.unstable_now,
  Mf = _e.unstable_getCurrentPriorityLevel,
  _i = _e.unstable_ImmediatePriority,
  ca = _e.unstable_UserBlockingPriority,
  Kr = _e.unstable_NormalPriority,
  Af = _e.unstable_LowPriority,
  fa = _e.unstable_IdlePriority,
  ml = null,
  $e = null;
function Ff(e) {
  if ($e && typeof $e.onCommitFiberRoot == "function")
    try {
      $e.onCommitFiberRoot(ml, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var De = Math.clz32 ? Math.clz32 : $f,
  Uf = Math.log,
  Vf = Math.LN2;
function $f(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Uf(e) / Vf) | 0)) | 0;
}
var mr = 64,
  yr = 4194304;
function En(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Gr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = En(u)) : ((o &= i), o !== 0 && (r = En(o)));
  } else (i = n & ~l), i !== 0 ? (r = En(i)) : o !== 0 && (r = En(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - De(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Bf(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Qf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - De(o),
      u = 1 << i,
      s = l[i];
    s === -1
      ? (!(u & n) || u & r) && (l[i] = Bf(u, t))
      : s <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function Po(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function da() {
  var e = mr;
  return (mr <<= 1), !(mr & 4194240) && (mr = 64), e;
}
function Fl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function rr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - De(t)),
    (e[t] = n);
}
function Hf(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - De(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function Ei(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - De(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var D = 0;
function pa(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ha,
  Pi,
  va,
  ma,
  ya,
  Co = !1,
  gr = [],
  it = null,
  ut = null,
  st = null,
  An = new Map(),
  Fn = new Map(),
  nt = [],
  Wf =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function ku(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      it = null;
      break;
    case "dragenter":
    case "dragleave":
      ut = null;
      break;
    case "mouseover":
    case "mouseout":
      st = null;
      break;
    case "pointerover":
    case "pointerout":
      An.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Fn.delete(t.pointerId);
  }
}
function vn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = or(t)), t !== null && Pi(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Yf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (it = vn(it, e, t, n, r, l)), !0;
    case "dragenter":
      return (ut = vn(ut, e, t, n, r, l)), !0;
    case "mouseover":
      return (st = vn(st, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return An.set(o, vn(An.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), Fn.set(o, vn(Fn.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function ga(e) {
  var t = Et(e.target);
  if (t !== null) {
    var n = jt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ia(n)), t !== null)) {
          (e.blockedOn = t),
            ya(e.priority, function () {
              va(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ir(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = xo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (So = r), n.target.dispatchEvent(r), (So = null);
    } else return (t = or(n)), t !== null && Pi(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function _u(e, t, n) {
  Ir(e) && n.delete(t);
}
function Kf() {
  (Co = !1),
    it !== null && Ir(it) && (it = null),
    ut !== null && Ir(ut) && (ut = null),
    st !== null && Ir(st) && (st = null),
    An.forEach(_u),
    Fn.forEach(_u);
}
function mn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Co ||
      ((Co = !0),
      _e.unstable_scheduleCallback(_e.unstable_NormalPriority, Kf)));
}
function Un(e) {
  function t(l) {
    return mn(l, e);
  }
  if (0 < gr.length) {
    mn(gr[0], e);
    for (var n = 1; n < gr.length; n++) {
      var r = gr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    it !== null && mn(it, e),
      ut !== null && mn(ut, e),
      st !== null && mn(st, e),
      An.forEach(t),
      Fn.forEach(t),
      n = 0;
    n < nt.length;
    n++
  )
    (r = nt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < nt.length && ((n = nt[0]), n.blockedOn === null); )
    ga(n), n.blockedOn === null && nt.shift();
}
var qt = qe.ReactCurrentBatchConfig,
  Xr = !0;
function Gf(e, t, n, r) {
  var l = D,
    o = qt.transition;
  qt.transition = null;
  try {
    (D = 1), Ci(e, t, n, r);
  } finally {
    (D = l), (qt.transition = o);
  }
}
function Xf(e, t, n, r) {
  var l = D,
    o = qt.transition;
  qt.transition = null;
  try {
    (D = 4), Ci(e, t, n, r);
  } finally {
    (D = l), (qt.transition = o);
  }
}
function Ci(e, t, n, r) {
  if (Xr) {
    var l = xo(e, t, n, r);
    if (l === null) Gl(e, t, r, Zr, n), ku(e, r);
    else if (Yf(l, e, t, n, r)) r.stopPropagation();
    else if ((ku(e, r), t & 4 && -1 < Wf.indexOf(e))) {
      for (; l !== null; ) {
        var o = or(l);
        if (
          (o !== null && ha(o),
          (o = xo(e, t, n, r)),
          o === null && Gl(e, t, r, Zr, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Gl(e, t, r, null, n);
  }
}
var Zr = null;
function xo(e, t, n, r) {
  if (((Zr = null), (e = ki(r)), (e = Et(e)), e !== null))
    if (((t = jt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ia(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Zr = e), null;
}
function wa(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Mf()) {
        case _i:
          return 1;
        case ca:
          return 4;
        case Kr:
        case Af:
          return 16;
        case fa:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var lt = null,
  xi = null,
  jr = null;
function Sa() {
  if (jr) return jr;
  var e,
    t = xi,
    n = t.length,
    r,
    l = "value" in lt ? lt.value : lt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (jr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Dr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function wr() {
  return !0;
}
function Eu() {
  return !1;
}
function Pe(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? wr
        : Eu),
      (this.isPropagationStopped = Eu),
      this
    );
  }
  return (
    B(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = wr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = wr));
      },
      persist: function () {},
      isPersistent: wr,
    }),
    t
  );
}
var cn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ni = Pe(cn),
  lr = B({}, cn, { view: 0, detail: 0 }),
  Zf = Pe(lr),
  Ul,
  Vl,
  yn,
  yl = B({}, lr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ti,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== yn &&
            (yn && e.type === "mousemove"
              ? ((Ul = e.screenX - yn.screenX), (Vl = e.screenY - yn.screenY))
              : (Vl = Ul = 0),
            (yn = e)),
          Ul);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Vl;
    },
  }),
  Pu = Pe(yl),
  Jf = B({}, yl, { dataTransfer: 0 }),
  qf = Pe(Jf),
  bf = B({}, lr, { relatedTarget: 0 }),
  $l = Pe(bf),
  ed = B({}, cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  td = Pe(ed),
  nd = B({}, cn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  rd = Pe(nd),
  ld = B({}, cn, { data: 0 }),
  Cu = Pe(ld),
  od = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  id = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  ud = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function sd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ud[e]) ? !!t[e] : !1;
}
function Ti() {
  return sd;
}
var ad = B({}, lr, {
    key: function (e) {
      if (e.key) {
        var t = od[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Dr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? id[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ti,
    charCode: function (e) {
      return e.type === "keypress" ? Dr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Dr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  cd = Pe(ad),
  fd = B({}, yl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  xu = Pe(fd),
  dd = B({}, lr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ti,
  }),
  pd = Pe(dd),
  hd = B({}, cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  vd = Pe(hd),
  md = B({}, yl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  yd = Pe(md),
  gd = [9, 13, 27, 32],
  zi = Ge && "CompositionEvent" in window,
  Nn = null;
Ge && "documentMode" in document && (Nn = document.documentMode);
var wd = Ge && "TextEvent" in window && !Nn,
  ka = Ge && (!zi || (Nn && 8 < Nn && 11 >= Nn)),
  Nu = String.fromCharCode(32),
  Tu = !1;
function _a(e, t) {
  switch (e) {
    case "keyup":
      return gd.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ea(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Ut = !1;
function Sd(e, t) {
  switch (e) {
    case "compositionend":
      return Ea(t);
    case "keypress":
      return t.which !== 32 ? null : ((Tu = !0), Nu);
    case "textInput":
      return (e = t.data), e === Nu && Tu ? null : e;
    default:
      return null;
  }
}
function kd(e, t) {
  if (Ut)
    return e === "compositionend" || (!zi && _a(e, t))
      ? ((e = Sa()), (jr = xi = lt = null), (Ut = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return ka && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var _d = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function zu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!_d[e.type] : t === "textarea";
}
function Pa(e, t, n, r) {
  ta(r),
    (t = Jr(t, "onChange")),
    0 < t.length &&
      ((n = new Ni("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Tn = null,
  Vn = null;
function Ed(e) {
  Da(e, 0);
}
function gl(e) {
  var t = Bt(e);
  if (Gs(t)) return e;
}
function Pd(e, t) {
  if (e === "change") return t;
}
var Ca = !1;
if (Ge) {
  var Bl;
  if (Ge) {
    var Ql = "oninput" in document;
    if (!Ql) {
      var Ru = document.createElement("div");
      Ru.setAttribute("oninput", "return;"),
        (Ql = typeof Ru.oninput == "function");
    }
    Bl = Ql;
  } else Bl = !1;
  Ca = Bl && (!document.documentMode || 9 < document.documentMode);
}
function Ou() {
  Tn && (Tn.detachEvent("onpropertychange", xa), (Vn = Tn = null));
}
function xa(e) {
  if (e.propertyName === "value" && gl(Vn)) {
    var t = [];
    Pa(t, Vn, e, ki(e)), oa(Ed, t);
  }
}
function Cd(e, t, n) {
  e === "focusin"
    ? (Ou(), (Tn = t), (Vn = n), Tn.attachEvent("onpropertychange", xa))
    : e === "focusout" && Ou();
}
function xd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return gl(Vn);
}
function Nd(e, t) {
  if (e === "click") return gl(t);
}
function Td(e, t) {
  if (e === "input" || e === "change") return gl(t);
}
function zd(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ae = typeof Object.is == "function" ? Object.is : zd;
function $n(e, t) {
  if (Ae(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!uo.call(t, l) || !Ae(e[l], t[l])) return !1;
  }
  return !0;
}
function Lu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Iu(e, t) {
  var n = Lu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Lu(n);
  }
}
function Na(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Na(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Ta() {
  for (var e = window, t = Hr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Hr(e.document);
  }
  return t;
}
function Ri(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Rd(e) {
  var t = Ta(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Na(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ri(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = Iu(n, o));
        var i = Iu(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Od = Ge && "documentMode" in document && 11 >= document.documentMode,
  Vt = null,
  No = null,
  zn = null,
  To = !1;
function ju(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  To ||
    Vt == null ||
    Vt !== Hr(r) ||
    ((r = Vt),
    "selectionStart" in r && Ri(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (zn && $n(zn, r)) ||
      ((zn = r),
      (r = Jr(No, "onSelect")),
      0 < r.length &&
        ((t = new Ni("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Vt))));
}
function Sr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var $t = {
    animationend: Sr("Animation", "AnimationEnd"),
    animationiteration: Sr("Animation", "AnimationIteration"),
    animationstart: Sr("Animation", "AnimationStart"),
    transitionend: Sr("Transition", "TransitionEnd"),
  },
  Hl = {},
  za = {};
Ge &&
  ((za = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete $t.animationend.animation,
    delete $t.animationiteration.animation,
    delete $t.animationstart.animation),
  "TransitionEvent" in window || delete $t.transitionend.transition);
function wl(e) {
  if (Hl[e]) return Hl[e];
  if (!$t[e]) return e;
  var t = $t[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in za) return (Hl[e] = t[n]);
  return e;
}
var Ra = wl("animationend"),
  Oa = wl("animationiteration"),
  La = wl("animationstart"),
  Ia = wl("transitionend"),
  ja = new Map(),
  Du =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function mt(e, t) {
  ja.set(e, t), It(t, [e]);
}
for (var Wl = 0; Wl < Du.length; Wl++) {
  var Yl = Du[Wl],
    Ld = Yl.toLowerCase(),
    Id = Yl[0].toUpperCase() + Yl.slice(1);
  mt(Ld, "on" + Id);
}
mt(Ra, "onAnimationEnd");
mt(Oa, "onAnimationIteration");
mt(La, "onAnimationStart");
mt("dblclick", "onDoubleClick");
mt("focusin", "onFocus");
mt("focusout", "onBlur");
mt(Ia, "onTransitionEnd");
tn("onMouseEnter", ["mouseout", "mouseover"]);
tn("onMouseLeave", ["mouseout", "mouseover"]);
tn("onPointerEnter", ["pointerout", "pointerover"]);
tn("onPointerLeave", ["pointerout", "pointerover"]);
It(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
It(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
It("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
It(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
It(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
It(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Pn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  jd = new Set("cancel close invalid load scroll toggle".split(" ").concat(Pn));
function Mu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Lf(r, t, void 0, e), (e.currentTarget = null);
}
function Da(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            s = u.instance,
            a = u.currentTarget;
          if (((u = u.listener), s !== o && l.isPropagationStopped())) break e;
          Mu(l, u, a), (o = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (s = u.instance),
            (a = u.currentTarget),
            (u = u.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          Mu(l, u, a), (o = s);
        }
    }
  }
  if (Yr) throw ((e = Eo), (Yr = !1), (Eo = null), e);
}
function A(e, t) {
  var n = t[Io];
  n === void 0 && (n = t[Io] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ma(t, e, 2, !1), n.add(r));
}
function Kl(e, t, n) {
  var r = 0;
  t && (r |= 4), Ma(n, e, r, t);
}
var kr = "_reactListening" + Math.random().toString(36).slice(2);
function Bn(e) {
  if (!e[kr]) {
    (e[kr] = !0),
      Qs.forEach(function (n) {
        n !== "selectionchange" && (jd.has(n) || Kl(n, !1, e), Kl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[kr] || ((t[kr] = !0), Kl("selectionchange", !1, t));
  }
}
function Ma(e, t, n, r) {
  switch (wa(t)) {
    case 1:
      var l = Gf;
      break;
    case 4:
      l = Xf;
      break;
    default:
      l = Ci;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !_o ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Gl(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = Et(u)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  oa(function () {
    var a = o,
      h = ki(n),
      p = [];
    e: {
      var v = ja.get(e);
      if (v !== void 0) {
        var w = Ni,
          y = e;
        switch (e) {
          case "keypress":
            if (Dr(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = cd;
            break;
          case "focusin":
            (y = "focus"), (w = $l);
            break;
          case "focusout":
            (y = "blur"), (w = $l);
            break;
          case "beforeblur":
          case "afterblur":
            w = $l;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = Pu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = qf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = pd;
            break;
          case Ra:
          case Oa:
          case La:
            w = td;
            break;
          case Ia:
            w = vd;
            break;
          case "scroll":
            w = Zf;
            break;
          case "wheel":
            w = yd;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = rd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = xu;
        }
        var S = (t & 4) !== 0,
          O = !S && e === "scroll",
          f = S ? (v !== null ? v + "Capture" : null) : v;
        S = [];
        for (var c = a, d; c !== null; ) {
          d = c;
          var m = d.stateNode;
          if (
            (d.tag === 5 &&
              m !== null &&
              ((d = m),
              f !== null && ((m = Mn(c, f)), m != null && S.push(Qn(c, m, d)))),
            O)
          )
            break;
          c = c.return;
        }
        0 < S.length &&
          ((v = new w(v, y, null, n, h)), p.push({ event: v, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((v = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          v &&
            n !== So &&
            (y = n.relatedTarget || n.fromElement) &&
            (Et(y) || y[Xe]))
        )
          break e;
        if (
          (w || v) &&
          ((v =
            h.window === h
              ? h
              : (v = h.ownerDocument)
              ? v.defaultView || v.parentWindow
              : window),
          w
            ? ((y = n.relatedTarget || n.toElement),
              (w = a),
              (y = y ? Et(y) : null),
              y !== null &&
                ((O = jt(y)), y !== O || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((w = null), (y = a)),
          w !== y)
        ) {
          if (
            ((S = Pu),
            (m = "onMouseLeave"),
            (f = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = xu),
              (m = "onPointerLeave"),
              (f = "onPointerEnter"),
              (c = "pointer")),
            (O = w == null ? v : Bt(w)),
            (d = y == null ? v : Bt(y)),
            (v = new S(m, c + "leave", w, n, h)),
            (v.target = O),
            (v.relatedTarget = d),
            (m = null),
            Et(h) === a &&
              ((S = new S(f, c + "enter", y, n, h)),
              (S.target = d),
              (S.relatedTarget = O),
              (m = S)),
            (O = m),
            w && y)
          )
            t: {
              for (S = w, f = y, c = 0, d = S; d; d = Mt(d)) c++;
              for (d = 0, m = f; m; m = Mt(m)) d++;
              for (; 0 < c - d; ) (S = Mt(S)), c--;
              for (; 0 < d - c; ) (f = Mt(f)), d--;
              for (; c--; ) {
                if (S === f || (f !== null && S === f.alternate)) break t;
                (S = Mt(S)), (f = Mt(f));
              }
              S = null;
            }
          else S = null;
          w !== null && Au(p, v, w, S, !1),
            y !== null && O !== null && Au(p, O, y, S, !0);
        }
      }
      e: {
        if (
          ((v = a ? Bt(a) : window),
          (w = v.nodeName && v.nodeName.toLowerCase()),
          w === "select" || (w === "input" && v.type === "file"))
        )
          var k = Pd;
        else if (zu(v))
          if (Ca) k = Td;
          else {
            k = xd;
            var x = Cd;
          }
        else
          (w = v.nodeName) &&
            w.toLowerCase() === "input" &&
            (v.type === "checkbox" || v.type === "radio") &&
            (k = Nd);
        if (k && (k = k(e, a))) {
          Pa(p, k, n, h);
          break e;
        }
        x && x(e, v, a),
          e === "focusout" &&
            (x = v._wrapperState) &&
            x.controlled &&
            v.type === "number" &&
            vo(v, "number", v.value);
      }
      switch (((x = a ? Bt(a) : window), e)) {
        case "focusin":
          (zu(x) || x.contentEditable === "true") &&
            ((Vt = x), (No = a), (zn = null));
          break;
        case "focusout":
          zn = No = Vt = null;
          break;
        case "mousedown":
          To = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (To = !1), ju(p, n, h);
          break;
        case "selectionchange":
          if (Od) break;
        case "keydown":
        case "keyup":
          ju(p, n, h);
      }
      var P;
      if (zi)
        e: {
          switch (e) {
            case "compositionstart":
              var C = "onCompositionStart";
              break e;
            case "compositionend":
              C = "onCompositionEnd";
              break e;
            case "compositionupdate":
              C = "onCompositionUpdate";
              break e;
          }
          C = void 0;
        }
      else
        Ut
          ? _a(e, n) && (C = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
      C &&
        (ka &&
          n.locale !== "ko" &&
          (Ut || C !== "onCompositionStart"
            ? C === "onCompositionEnd" && Ut && (P = Sa())
            : ((lt = h),
              (xi = "value" in lt ? lt.value : lt.textContent),
              (Ut = !0))),
        (x = Jr(a, C)),
        0 < x.length &&
          ((C = new Cu(C, e, null, n, h)),
          p.push({ event: C, listeners: x }),
          P ? (C.data = P) : ((P = Ea(n)), P !== null && (C.data = P)))),
        (P = wd ? Sd(e, n) : kd(e, n)) &&
          ((a = Jr(a, "onBeforeInput")),
          0 < a.length &&
            ((h = new Cu("onBeforeInput", "beforeinput", null, n, h)),
            p.push({ event: h, listeners: a }),
            (h.data = P)));
    }
    Da(p, t);
  });
}
function Qn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Jr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Mn(e, n)),
      o != null && r.unshift(Qn(e, o, l)),
      (o = Mn(e, t)),
      o != null && r.push(Qn(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Mt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Au(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      a !== null &&
      ((u = a),
      l
        ? ((s = Mn(n, o)), s != null && i.unshift(Qn(n, s, u)))
        : l || ((s = Mn(n, o)), s != null && i.push(Qn(n, s, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Dd = /\r\n?/g,
  Md = /\u0000|\uFFFD/g;
function Fu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Dd,
      `
`
    )
    .replace(Md, "");
}
function _r(e, t, n) {
  if (((t = Fu(t)), Fu(e) !== t && n)) throw Error(g(425));
}
function qr() {}
var zo = null,
  Ro = null;
function Oo(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Lo = typeof setTimeout == "function" ? setTimeout : void 0,
  Ad = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Uu = typeof Promise == "function" ? Promise : void 0,
  Fd =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Uu < "u"
      ? function (e) {
          return Uu.resolve(null).then(e).catch(Ud);
        }
      : Lo;
function Ud(e) {
  setTimeout(function () {
    throw e;
  });
}
function Xl(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Un(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Un(t);
}
function at(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Vu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var fn = Math.random().toString(36).slice(2),
  Ve = "__reactFiber$" + fn,
  Hn = "__reactProps$" + fn,
  Xe = "__reactContainer$" + fn,
  Io = "__reactEvents$" + fn,
  Vd = "__reactListeners$" + fn,
  $d = "__reactHandles$" + fn;
function Et(e) {
  var t = e[Ve];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Xe] || n[Ve])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Vu(e); e !== null; ) {
          if ((n = e[Ve])) return n;
          e = Vu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function or(e) {
  return (
    (e = e[Ve] || e[Xe]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Bt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(g(33));
}
function Sl(e) {
  return e[Hn] || null;
}
var jo = [],
  Qt = -1;
function yt(e) {
  return { current: e };
}
function F(e) {
  0 > Qt || ((e.current = jo[Qt]), (jo[Qt] = null), Qt--);
}
function M(e, t) {
  Qt++, (jo[Qt] = e.current), (e.current = t);
}
var vt = {},
  ue = yt(vt),
  he = yt(!1),
  Tt = vt;
function nn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return vt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function ve(e) {
  return (e = e.childContextTypes), e != null;
}
function br() {
  F(he), F(ue);
}
function $u(e, t, n) {
  if (ue.current !== vt) throw Error(g(168));
  M(ue, t), M(he, n);
}
function Aa(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(g(108, Cf(e) || "Unknown", l));
  return B({}, n, r);
}
function el(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || vt),
    (Tt = ue.current),
    M(ue, e),
    M(he, he.current),
    !0
  );
}
function Bu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(g(169));
  n
    ? ((e = Aa(e, t, Tt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      F(he),
      F(ue),
      M(ue, e))
    : F(he),
    M(he, n);
}
var He = null,
  kl = !1,
  Zl = !1;
function Fa(e) {
  He === null ? (He = [e]) : He.push(e);
}
function Bd(e) {
  (kl = !0), Fa(e);
}
function gt() {
  if (!Zl && He !== null) {
    Zl = !0;
    var e = 0,
      t = D;
    try {
      var n = He;
      for (D = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (He = null), (kl = !1);
    } catch (l) {
      throw (He !== null && (He = He.slice(e + 1)), aa(_i, gt), l);
    } finally {
      (D = t), (Zl = !1);
    }
  }
  return null;
}
var Ht = [],
  Wt = 0,
  tl = null,
  nl = 0,
  Ce = [],
  xe = 0,
  zt = null,
  We = 1,
  Ye = "";
function kt(e, t) {
  (Ht[Wt++] = nl), (Ht[Wt++] = tl), (tl = e), (nl = t);
}
function Ua(e, t, n) {
  (Ce[xe++] = We), (Ce[xe++] = Ye), (Ce[xe++] = zt), (zt = e);
  var r = We;
  e = Ye;
  var l = 32 - De(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - De(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (We = (1 << (32 - De(t) + l)) | (n << l) | r),
      (Ye = o + e);
  } else (We = (1 << o) | (n << l) | r), (Ye = e);
}
function Oi(e) {
  e.return !== null && (kt(e, 1), Ua(e, 1, 0));
}
function Li(e) {
  for (; e === tl; )
    (tl = Ht[--Wt]), (Ht[Wt] = null), (nl = Ht[--Wt]), (Ht[Wt] = null);
  for (; e === zt; )
    (zt = Ce[--xe]),
      (Ce[xe] = null),
      (Ye = Ce[--xe]),
      (Ce[xe] = null),
      (We = Ce[--xe]),
      (Ce[xe] = null);
}
var ke = null,
  Se = null,
  U = !1,
  je = null;
function Va(e, t) {
  var n = Ne(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Qu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ke = e), (Se = at(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ke = e), (Se = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = zt !== null ? { id: We, overflow: Ye } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ne(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ke = e),
            (Se = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Do(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Mo(e) {
  if (U) {
    var t = Se;
    if (t) {
      var n = t;
      if (!Qu(e, t)) {
        if (Do(e)) throw Error(g(418));
        t = at(n.nextSibling);
        var r = ke;
        t && Qu(e, t)
          ? Va(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (U = !1), (ke = e));
      }
    } else {
      if (Do(e)) throw Error(g(418));
      (e.flags = (e.flags & -4097) | 2), (U = !1), (ke = e);
    }
  }
}
function Hu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ke = e;
}
function Er(e) {
  if (e !== ke) return !1;
  if (!U) return Hu(e), (U = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Oo(e.type, e.memoizedProps))),
    t && (t = Se))
  ) {
    if (Do(e)) throw ($a(), Error(g(418)));
    for (; t; ) Va(e, t), (t = at(t.nextSibling));
  }
  if ((Hu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(g(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Se = at(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Se = null;
    }
  } else Se = ke ? at(e.stateNode.nextSibling) : null;
  return !0;
}
function $a() {
  for (var e = Se; e; ) e = at(e.nextSibling);
}
function rn() {
  (Se = ke = null), (U = !1);
}
function Ii(e) {
  je === null ? (je = [e]) : je.push(e);
}
var Qd = qe.ReactCurrentBatchConfig;
function Le(e, t) {
  if (e && e.defaultProps) {
    (t = B({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var rl = yt(null),
  ll = null,
  Yt = null,
  ji = null;
function Di() {
  ji = Yt = ll = null;
}
function Mi(e) {
  var t = rl.current;
  F(rl), (e._currentValue = t);
}
function Ao(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function bt(e, t) {
  (ll = e),
    (ji = Yt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (pe = !0), (e.firstContext = null));
}
function ze(e) {
  var t = e._currentValue;
  if (ji !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Yt === null)) {
      if (ll === null) throw Error(g(308));
      (Yt = e), (ll.dependencies = { lanes: 0, firstContext: e });
    } else Yt = Yt.next = e;
  return t;
}
var Pt = null;
function Ai(e) {
  Pt === null ? (Pt = [e]) : Pt.push(e);
}
function Ba(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Ai(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Ze(e, r)
  );
}
function Ze(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var tt = !1;
function Fi(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Qa(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ke(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ct(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), I & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Ze(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Ai(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Ze(e, n)
  );
}
function Mr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ei(e, n);
  }
}
function Wu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ol(e, t, n, r) {
  var l = e.updateQueue;
  tt = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      a = s.next;
    (s.next = null), i === null ? (o = a) : (i.next = a), (i = s);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (u = h.lastBaseUpdate),
      u !== i &&
        (u === null ? (h.firstBaseUpdate = a) : (u.next = a),
        (h.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var p = l.baseState;
    (i = 0), (h = a = s = null), (u = o);
    do {
      var v = u.lane,
        w = u.eventTime;
      if ((r & v) === v) {
        h !== null &&
          (h = h.next =
            {
              eventTime: w,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var y = e,
            S = u;
          switch (((v = t), (w = n), S.tag)) {
            case 1:
              if (((y = S.payload), typeof y == "function")) {
                p = y.call(w, p, v);
                break e;
              }
              p = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = S.payload),
                (v = typeof y == "function" ? y.call(w, p, v) : y),
                v == null)
              )
                break e;
              p = B({}, p, v);
              break e;
            case 2:
              tt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (v = l.effects),
          v === null ? (l.effects = [u]) : v.push(u));
      } else
        (w = {
          eventTime: w,
          lane: v,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          h === null ? ((a = h = w), (s = p)) : (h = h.next = w),
          (i |= v);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (v = u),
          (u = v.next),
          (v.next = null),
          (l.lastBaseUpdate = v),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (h === null && (s = p),
      (l.baseState = s),
      (l.firstBaseUpdate = a),
      (l.lastBaseUpdate = h),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Ot |= i), (e.lanes = i), (e.memoizedState = p);
  }
}
function Yu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(g(191, l));
        l.call(r);
      }
    }
}
var Ha = new Bs.Component().refs;
function Fo(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : B({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var _l = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? jt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ae(),
      l = dt(e),
      o = Ke(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = ct(e, o, l)),
      t !== null && (Me(t, e, l, r), Mr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ae(),
      l = dt(e),
      o = Ke(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = ct(e, o, l)),
      t !== null && (Me(t, e, l, r), Mr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ae(),
      r = dt(e),
      l = Ke(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = ct(e, l, r)),
      t !== null && (Me(t, e, r, n), Mr(t, e, r));
  },
};
function Ku(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !$n(n, r) || !$n(l, o)
      : !0
  );
}
function Wa(e, t, n) {
  var r = !1,
    l = vt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = ze(o))
      : ((l = ve(t) ? Tt : ue.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? nn(e, l) : vt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = _l),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Gu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && _l.enqueueReplaceState(t, t.state, null);
}
function Uo(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = Ha), Fi(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = ze(o))
    : ((o = ve(t) ? Tt : ue.current), (l.context = nn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Fo(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && _l.enqueueReplaceState(l, l.state, null),
      ol(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function gn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(g(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(g(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            u === Ha && (u = l.refs = {}),
              i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(g(284));
    if (!n._owner) throw Error(g(290, e));
  }
  return e;
}
function Pr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      g(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Xu(e) {
  var t = e._init;
  return t(e._payload);
}
function Ya(e) {
  function t(f, c) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [c]), (f.flags |= 16)) : d.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function l(f, c) {
    return (f = pt(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function o(f, c, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < c ? ((f.flags |= 2), c) : d)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, d, m) {
    return c === null || c.tag !== 6
      ? ((c = ro(d, f.mode, m)), (c.return = f), c)
      : ((c = l(c, d)), (c.return = f), c);
  }
  function s(f, c, d, m) {
    var k = d.type;
    return k === Ft
      ? h(f, c, d.props.children, m, d.key)
      : c !== null &&
        (c.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === et &&
            Xu(k) === c.type))
      ? ((m = l(c, d.props)), (m.ref = gn(f, c, d)), (m.return = f), m)
      : ((m = Br(d.type, d.key, d.props, null, f.mode, m)),
        (m.ref = gn(f, c, d)),
        (m.return = f),
        m);
  }
  function a(f, c, d, m) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== d.containerInfo ||
      c.stateNode.implementation !== d.implementation
      ? ((c = lo(d, f.mode, m)), (c.return = f), c)
      : ((c = l(c, d.children || [])), (c.return = f), c);
  }
  function h(f, c, d, m, k) {
    return c === null || c.tag !== 7
      ? ((c = Nt(d, f.mode, m, k)), (c.return = f), c)
      : ((c = l(c, d)), (c.return = f), c);
  }
  function p(f, c, d) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = ro("" + c, f.mode, d)), (c.return = f), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case pr:
          return (
            (d = Br(c.type, c.key, c.props, null, f.mode, d)),
            (d.ref = gn(f, null, c)),
            (d.return = f),
            d
          );
        case At:
          return (c = lo(c, f.mode, d)), (c.return = f), c;
        case et:
          var m = c._init;
          return p(f, m(c._payload), d);
      }
      if (_n(c) || pn(c))
        return (c = Nt(c, f.mode, d, null)), (c.return = f), c;
      Pr(f, c);
    }
    return null;
  }
  function v(f, c, d, m) {
    var k = c !== null ? c.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return k !== null ? null : u(f, c, "" + d, m);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case pr:
          return d.key === k ? s(f, c, d, m) : null;
        case At:
          return d.key === k ? a(f, c, d, m) : null;
        case et:
          return (k = d._init), v(f, c, k(d._payload), m);
      }
      if (_n(d) || pn(d)) return k !== null ? null : h(f, c, d, m, null);
      Pr(f, d);
    }
    return null;
  }
  function w(f, c, d, m, k) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return (f = f.get(d) || null), u(c, f, "" + m, k);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case pr:
          return (f = f.get(m.key === null ? d : m.key) || null), s(c, f, m, k);
        case At:
          return (f = f.get(m.key === null ? d : m.key) || null), a(c, f, m, k);
        case et:
          var x = m._init;
          return w(f, c, d, x(m._payload), k);
      }
      if (_n(m) || pn(m)) return (f = f.get(d) || null), h(c, f, m, k, null);
      Pr(c, m);
    }
    return null;
  }
  function y(f, c, d, m) {
    for (
      var k = null, x = null, P = c, C = (c = 0), j = null;
      P !== null && C < d.length;
      C++
    ) {
      P.index > C ? ((j = P), (P = null)) : (j = P.sibling);
      var z = v(f, P, d[C], m);
      if (z === null) {
        P === null && (P = j);
        break;
      }
      e && P && z.alternate === null && t(f, P),
        (c = o(z, c, C)),
        x === null ? (k = z) : (x.sibling = z),
        (x = z),
        (P = j);
    }
    if (C === d.length) return n(f, P), U && kt(f, C), k;
    if (P === null) {
      for (; C < d.length; C++)
        (P = p(f, d[C], m)),
          P !== null &&
            ((c = o(P, c, C)), x === null ? (k = P) : (x.sibling = P), (x = P));
      return U && kt(f, C), k;
    }
    for (P = r(f, P); C < d.length; C++)
      (j = w(P, f, C, d[C], m)),
        j !== null &&
          (e && j.alternate !== null && P.delete(j.key === null ? C : j.key),
          (c = o(j, c, C)),
          x === null ? (k = j) : (x.sibling = j),
          (x = j));
    return (
      e &&
        P.forEach(function (H) {
          return t(f, H);
        }),
      U && kt(f, C),
      k
    );
  }
  function S(f, c, d, m) {
    var k = pn(d);
    if (typeof k != "function") throw Error(g(150));
    if (((d = k.call(d)), d == null)) throw Error(g(151));
    for (
      var x = (k = null), P = c, C = (c = 0), j = null, z = d.next();
      P !== null && !z.done;
      C++, z = d.next()
    ) {
      P.index > C ? ((j = P), (P = null)) : (j = P.sibling);
      var H = v(f, P, z.value, m);
      if (H === null) {
        P === null && (P = j);
        break;
      }
      e && P && H.alternate === null && t(f, P),
        (c = o(H, c, C)),
        x === null ? (k = H) : (x.sibling = H),
        (x = H),
        (P = j);
    }
    if (z.done) return n(f, P), U && kt(f, C), k;
    if (P === null) {
      for (; !z.done; C++, z = d.next())
        (z = p(f, z.value, m)),
          z !== null &&
            ((c = o(z, c, C)), x === null ? (k = z) : (x.sibling = z), (x = z));
      return U && kt(f, C), k;
    }
    for (P = r(f, P); !z.done; C++, z = d.next())
      (z = w(P, f, C, z.value, m)),
        z !== null &&
          (e && z.alternate !== null && P.delete(z.key === null ? C : z.key),
          (c = o(z, c, C)),
          x === null ? (k = z) : (x.sibling = z),
          (x = z));
    return (
      e &&
        P.forEach(function (re) {
          return t(f, re);
        }),
      U && kt(f, C),
      k
    );
  }
  function O(f, c, d, m) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === Ft &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case pr:
          e: {
            for (var k = d.key, x = c; x !== null; ) {
              if (x.key === k) {
                if (((k = d.type), k === Ft)) {
                  if (x.tag === 7) {
                    n(f, x.sibling),
                      (c = l(x, d.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  x.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === et &&
                    Xu(k) === x.type)
                ) {
                  n(f, x.sibling),
                    (c = l(x, d.props)),
                    (c.ref = gn(f, x, d)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, x);
                break;
              } else t(f, x);
              x = x.sibling;
            }
            d.type === Ft
              ? ((c = Nt(d.props.children, f.mode, m, d.key)),
                (c.return = f),
                (f = c))
              : ((m = Br(d.type, d.key, d.props, null, f.mode, m)),
                (m.ref = gn(f, c, d)),
                (m.return = f),
                (f = m));
          }
          return i(f);
        case At:
          e: {
            for (x = d.key; c !== null; ) {
              if (c.key === x)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === d.containerInfo &&
                  c.stateNode.implementation === d.implementation
                ) {
                  n(f, c.sibling),
                    (c = l(c, d.children || [])),
                    (c.return = f),
                    (f = c);
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            (c = lo(d, f.mode, m)), (c.return = f), (f = c);
          }
          return i(f);
        case et:
          return (x = d._init), O(f, c, x(d._payload), m);
      }
      if (_n(d)) return y(f, c, d, m);
      if (pn(d)) return S(f, c, d, m);
      Pr(f, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = l(c, d)), (c.return = f), (f = c))
          : (n(f, c), (c = ro(d, f.mode, m)), (c.return = f), (f = c)),
        i(f))
      : n(f, c);
  }
  return O;
}
var ln = Ya(!0),
  Ka = Ya(!1),
  ir = {},
  Be = yt(ir),
  Wn = yt(ir),
  Yn = yt(ir);
function Ct(e) {
  if (e === ir) throw Error(g(174));
  return e;
}
function Ui(e, t) {
  switch ((M(Yn, t), M(Wn, e), M(Be, ir), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : yo(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = yo(t, e));
  }
  F(Be), M(Be, t);
}
function on() {
  F(Be), F(Wn), F(Yn);
}
function Ga(e) {
  Ct(Yn.current);
  var t = Ct(Be.current),
    n = yo(t, e.type);
  t !== n && (M(Wn, e), M(Be, n));
}
function Vi(e) {
  Wn.current === e && (F(Be), F(Wn));
}
var V = yt(0);
function il(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Jl = [];
function $i() {
  for (var e = 0; e < Jl.length; e++)
    Jl[e]._workInProgressVersionPrimary = null;
  Jl.length = 0;
}
var Ar = qe.ReactCurrentDispatcher,
  ql = qe.ReactCurrentBatchConfig,
  Rt = 0,
  $ = null,
  G = null,
  J = null,
  ul = !1,
  Rn = !1,
  Kn = 0,
  Hd = 0;
function le() {
  throw Error(g(321));
}
function Bi(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ae(e[n], t[n])) return !1;
  return !0;
}
function Qi(e, t, n, r, l, o) {
  if (
    ((Rt = o),
    ($ = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ar.current = e === null || e.memoizedState === null ? Gd : Xd),
    (e = n(r, l)),
    Rn)
  ) {
    o = 0;
    do {
      if (((Rn = !1), (Kn = 0), 25 <= o)) throw Error(g(301));
      (o += 1),
        (J = G = null),
        (t.updateQueue = null),
        (Ar.current = Zd),
        (e = n(r, l));
    } while (Rn);
  }
  if (
    ((Ar.current = sl),
    (t = G !== null && G.next !== null),
    (Rt = 0),
    (J = G = $ = null),
    (ul = !1),
    t)
  )
    throw Error(g(300));
  return e;
}
function Hi() {
  var e = Kn !== 0;
  return (Kn = 0), e;
}
function Ue() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return J === null ? ($.memoizedState = J = e) : (J = J.next = e), J;
}
function Re() {
  if (G === null) {
    var e = $.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = G.next;
  var t = J === null ? $.memoizedState : J.next;
  if (t !== null) (J = t), (G = e);
  else {
    if (e === null) throw Error(g(310));
    (G = e),
      (e = {
        memoizedState: G.memoizedState,
        baseState: G.baseState,
        baseQueue: G.baseQueue,
        queue: G.queue,
        next: null,
      }),
      J === null ? ($.memoizedState = J = e) : (J = J.next = e);
  }
  return J;
}
function Gn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function bl(e) {
  var t = Re(),
    n = t.queue;
  if (n === null) throw Error(g(311));
  n.lastRenderedReducer = e;
  var r = G,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      s = null,
      a = o;
    do {
      var h = a.lane;
      if ((Rt & h) === h)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var p = {
          lane: h,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        s === null ? ((u = s = p), (i = r)) : (s = s.next = p),
          ($.lanes |= h),
          (Ot |= h);
      }
      a = a.next;
    } while (a !== null && a !== o);
    s === null ? (i = r) : (s.next = u),
      Ae(r, t.memoizedState) || (pe = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), ($.lanes |= o), (Ot |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function eo(e) {
  var t = Re(),
    n = t.queue;
  if (n === null) throw Error(g(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    Ae(o, t.memoizedState) || (pe = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Xa() {}
function Za(e, t) {
  var n = $,
    r = Re(),
    l = t(),
    o = !Ae(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (pe = !0)),
    (r = r.queue),
    Wi(ba.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (J !== null && J.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Xn(9, qa.bind(null, n, r, l, t), void 0, null),
      q === null)
    )
      throw Error(g(349));
    Rt & 30 || Ja(n, t, l);
  }
  return l;
}
function Ja(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = $.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        ($.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function qa(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), ec(t) && tc(e);
}
function ba(e, t, n) {
  return n(function () {
    ec(t) && tc(e);
  });
}
function ec(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ae(e, n);
  } catch {
    return !0;
  }
}
function tc(e) {
  var t = Ze(e, 1);
  t !== null && Me(t, e, 1, -1);
}
function Zu(e) {
  var t = Ue();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Gn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Kd.bind(null, $, e)),
    [t.memoizedState, e]
  );
}
function Xn(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = $.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        ($.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function nc() {
  return Re().memoizedState;
}
function Fr(e, t, n, r) {
  var l = Ue();
  ($.flags |= e),
    (l.memoizedState = Xn(1 | t, n, void 0, r === void 0 ? null : r));
}
function El(e, t, n, r) {
  var l = Re();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (G !== null) {
    var i = G.memoizedState;
    if (((o = i.destroy), r !== null && Bi(r, i.deps))) {
      l.memoizedState = Xn(t, n, o, r);
      return;
    }
  }
  ($.flags |= e), (l.memoizedState = Xn(1 | t, n, o, r));
}
function Ju(e, t) {
  return Fr(8390656, 8, e, t);
}
function Wi(e, t) {
  return El(2048, 8, e, t);
}
function rc(e, t) {
  return El(4, 2, e, t);
}
function lc(e, t) {
  return El(4, 4, e, t);
}
function oc(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function ic(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), El(4, 4, oc.bind(null, t, e), n)
  );
}
function Yi() {}
function uc(e, t) {
  var n = Re();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Bi(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function sc(e, t) {
  var n = Re();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Bi(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ac(e, t, n) {
  return Rt & 21
    ? (Ae(n, t) || ((n = da()), ($.lanes |= n), (Ot |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (pe = !0)), (e.memoizedState = n));
}
function Wd(e, t) {
  var n = D;
  (D = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ql.transition;
  ql.transition = {};
  try {
    e(!1), t();
  } finally {
    (D = n), (ql.transition = r);
  }
}
function cc() {
  return Re().memoizedState;
}
function Yd(e, t, n) {
  var r = dt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    fc(e))
  )
    dc(t, n);
  else if (((n = Ba(e, t, n, r)), n !== null)) {
    var l = ae();
    Me(n, e, r, l), pc(n, t, r);
  }
}
function Kd(e, t, n) {
  var r = dt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (fc(e)) dc(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Ae(u, i))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), Ai(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Ba(e, t, l, r)),
      n !== null && ((l = ae()), Me(n, e, r, l), pc(n, t, r));
  }
}
function fc(e) {
  var t = e.alternate;
  return e === $ || (t !== null && t === $);
}
function dc(e, t) {
  Rn = ul = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function pc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ei(e, n);
  }
}
var sl = {
    readContext: ze,
    useCallback: le,
    useContext: le,
    useEffect: le,
    useImperativeHandle: le,
    useInsertionEffect: le,
    useLayoutEffect: le,
    useMemo: le,
    useReducer: le,
    useRef: le,
    useState: le,
    useDebugValue: le,
    useDeferredValue: le,
    useTransition: le,
    useMutableSource: le,
    useSyncExternalStore: le,
    useId: le,
    unstable_isNewReconciler: !1,
  },
  Gd = {
    readContext: ze,
    useCallback: function (e, t) {
      return (Ue().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ze,
    useEffect: Ju,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Fr(4194308, 4, oc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Fr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Fr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ue();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ue();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Yd.bind(null, $, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ue();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Zu,
    useDebugValue: Yi,
    useDeferredValue: function (e) {
      return (Ue().memoizedState = e);
    },
    useTransition: function () {
      var e = Zu(!1),
        t = e[0];
      return (e = Wd.bind(null, e[1])), (Ue().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = $,
        l = Ue();
      if (U) {
        if (n === void 0) throw Error(g(407));
        n = n();
      } else {
        if (((n = t()), q === null)) throw Error(g(349));
        Rt & 30 || Ja(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        Ju(ba.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Xn(9, qa.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ue(),
        t = q.identifierPrefix;
      if (U) {
        var n = Ye,
          r = We;
        (n = (r & ~(1 << (32 - De(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Kn++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Hd++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Xd = {
    readContext: ze,
    useCallback: uc,
    useContext: ze,
    useEffect: Wi,
    useImperativeHandle: ic,
    useInsertionEffect: rc,
    useLayoutEffect: lc,
    useMemo: sc,
    useReducer: bl,
    useRef: nc,
    useState: function () {
      return bl(Gn);
    },
    useDebugValue: Yi,
    useDeferredValue: function (e) {
      var t = Re();
      return ac(t, G.memoizedState, e);
    },
    useTransition: function () {
      var e = bl(Gn)[0],
        t = Re().memoizedState;
      return [e, t];
    },
    useMutableSource: Xa,
    useSyncExternalStore: Za,
    useId: cc,
    unstable_isNewReconciler: !1,
  },
  Zd = {
    readContext: ze,
    useCallback: uc,
    useContext: ze,
    useEffect: Wi,
    useImperativeHandle: ic,
    useInsertionEffect: rc,
    useLayoutEffect: lc,
    useMemo: sc,
    useReducer: eo,
    useRef: nc,
    useState: function () {
      return eo(Gn);
    },
    useDebugValue: Yi,
    useDeferredValue: function (e) {
      var t = Re();
      return G === null ? (t.memoizedState = e) : ac(t, G.memoizedState, e);
    },
    useTransition: function () {
      var e = eo(Gn)[0],
        t = Re().memoizedState;
      return [e, t];
    },
    useMutableSource: Xa,
    useSyncExternalStore: Za,
    useId: cc,
    unstable_isNewReconciler: !1,
  };
function un(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Pf(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function to(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Vo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Jd = typeof WeakMap == "function" ? WeakMap : Map;
function hc(e, t, n) {
  (n = Ke(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      cl || ((cl = !0), (Zo = r)), Vo(e, t);
    }),
    n
  );
}
function vc(e, t, n) {
  (n = Ke(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Vo(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Vo(e, t),
          typeof r != "function" &&
            (ft === null ? (ft = new Set([this])) : ft.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function qu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Jd();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = fp.bind(null, e, t, n)), t.then(e, e));
}
function bu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function es(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ke(-1, 1)), (t.tag = 2), ct(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var qd = qe.ReactCurrentOwner,
  pe = !1;
function se(e, t, n, r) {
  t.child = e === null ? Ka(t, null, n, r) : ln(t, e.child, n, r);
}
function ts(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    bt(t, l),
    (r = Qi(e, t, n, r, o, l)),
    (n = Hi()),
    e !== null && !pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Je(e, t, l))
      : (U && n && Oi(t), (t.flags |= 1), se(e, t, r, l), t.child)
  );
}
function ns(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !eu(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), mc(e, t, o, r, l))
      : ((e = Br(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : $n), n(i, r) && e.ref === t.ref)
    )
      return Je(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = pt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function mc(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if ($n(o, r) && e.ref === t.ref)
      if (((pe = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (pe = !0);
      else return (t.lanes = e.lanes), Je(e, t, l);
  }
  return $o(e, t, n, r, l);
}
function yc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        M(Gt, we),
        (we |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          M(Gt, we),
          (we |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        M(Gt, we),
        (we |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      M(Gt, we),
      (we |= r);
  return se(e, t, l, n), t.child;
}
function gc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function $o(e, t, n, r, l) {
  var o = ve(n) ? Tt : ue.current;
  return (
    (o = nn(t, o)),
    bt(t, l),
    (n = Qi(e, t, n, r, o, l)),
    (r = Hi()),
    e !== null && !pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Je(e, t, l))
      : (U && r && Oi(t), (t.flags |= 1), se(e, t, n, l), t.child)
  );
}
function rs(e, t, n, r, l) {
  if (ve(n)) {
    var o = !0;
    el(t);
  } else o = !1;
  if ((bt(t, l), t.stateNode === null))
    Ur(e, t), Wa(t, n, r), Uo(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var s = i.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = ze(a))
      : ((a = ve(n) ? Tt : ue.current), (a = nn(t, a)));
    var h = n.getDerivedStateFromProps,
      p =
        typeof h == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || s !== a) && Gu(t, i, r, a)),
      (tt = !1);
    var v = t.memoizedState;
    (i.state = v),
      ol(t, r, i, l),
      (s = t.memoizedState),
      u !== r || v !== s || he.current || tt
        ? (typeof h == "function" && (Fo(t, n, h, r), (s = t.memoizedState)),
          (u = tt || Ku(t, n, u, r, v, s, a))
            ? (p ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = a),
          (r = u))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Qa(e, t),
      (u = t.memoizedProps),
      (a = t.type === t.elementType ? u : Le(t.type, u)),
      (i.props = a),
      (p = t.pendingProps),
      (v = i.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = ze(s))
        : ((s = ve(n) ? Tt : ue.current), (s = nn(t, s)));
    var w = n.getDerivedStateFromProps;
    (h =
      typeof w == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== p || v !== s) && Gu(t, i, r, s)),
      (tt = !1),
      (v = t.memoizedState),
      (i.state = v),
      ol(t, r, i, l);
    var y = t.memoizedState;
    u !== p || v !== y || he.current || tt
      ? (typeof w == "function" && (Fo(t, n, w, r), (y = t.memoizedState)),
        (a = tt || Ku(t, n, a, r, v, y, s) || !1)
          ? (h ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, y, s),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, y, s)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (i.props = r),
        (i.state = y),
        (i.context = s),
        (r = a))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Bo(e, t, n, r, o, l);
}
function Bo(e, t, n, r, l, o) {
  gc(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Bu(t, n, !1), Je(e, t, o);
  (r = t.stateNode), (qd.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = ln(t, e.child, null, o)), (t.child = ln(t, null, u, o)))
      : se(e, t, u, o),
    (t.memoizedState = r.state),
    l && Bu(t, n, !0),
    t.child
  );
}
function wc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? $u(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && $u(e, t.context, !1),
    Ui(e, t.containerInfo);
}
function ls(e, t, n, r, l) {
  return rn(), Ii(l), (t.flags |= 256), se(e, t, n, r), t.child;
}
var Qo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ho(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Sc(e, t, n) {
  var r = t.pendingProps,
    l = V.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    M(V, l & 1),
    e === null)
  )
    return (
      Mo(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = xl(i, r, 0, null)),
              (e = Nt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Ho(n)),
              (t.memoizedState = Qo),
              e)
            : Ki(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return bd(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = pt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = pt(u, o)) : ((o = Nt(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Ho(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Qo),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = pt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Ki(e, t) {
  return (
    (t = xl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Cr(e, t, n, r) {
  return (
    r !== null && Ii(r),
    ln(t, e.child, null, n),
    (e = Ki(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function bd(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = to(Error(g(422)))), Cr(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = xl({ mode: "visible", children: r.children }, l, 0, null)),
        (o = Nt(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && ln(t, e.child, null, i),
        (t.child.memoizedState = Ho(i)),
        (t.memoizedState = Qo),
        o);
  if (!(t.mode & 1)) return Cr(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(g(419))), (r = to(o, r, void 0)), Cr(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), pe || u)) {
    if (((r = q), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), Ze(e, l), Me(r, e, l, -1));
    }
    return bi(), (r = to(Error(g(421)))), Cr(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = dp.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Se = at(l.nextSibling)),
      (ke = t),
      (U = !0),
      (je = null),
      e !== null &&
        ((Ce[xe++] = We),
        (Ce[xe++] = Ye),
        (Ce[xe++] = zt),
        (We = e.id),
        (Ye = e.overflow),
        (zt = t)),
      (t = Ki(t, r.children)),
      (t.flags |= 4096),
      t);
}
function os(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ao(e.return, t, n);
}
function no(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function kc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((se(e, t, r.children, n), (r = V.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && os(e, n, t);
        else if (e.tag === 19) os(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((M(V, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && il(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          no(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && il(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        no(t, !0, n, null, o);
        break;
      case "together":
        no(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ur(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Je(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ot |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(g(153));
  if (t.child !== null) {
    for (
      e = t.child, n = pt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = pt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function ep(e, t, n) {
  switch (t.tag) {
    case 3:
      wc(t), rn();
      break;
    case 5:
      Ga(t);
      break;
    case 1:
      ve(t.type) && el(t);
      break;
    case 4:
      Ui(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      M(rl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (M(V, V.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Sc(e, t, n)
          : (M(V, V.current & 1),
            (e = Je(e, t, n)),
            e !== null ? e.sibling : null);
      M(V, V.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return kc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        M(V, V.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), yc(e, t, n);
  }
  return Je(e, t, n);
}
var _c, Wo, Ec, Pc;
_c = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Wo = function () {};
Ec = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Ct(Be.current);
    var o = null;
    switch (n) {
      case "input":
        (l = po(e, l)), (r = po(e, r)), (o = []);
        break;
      case "select":
        (l = B({}, l, { value: void 0 })),
          (r = B({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = mo(e, l)), (r = mo(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = qr);
    }
    go(n, r);
    var i;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === "style") {
          var u = l[a];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (jn.hasOwnProperty(a)
              ? o || (o = [])
              : (o = o || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (
        ((u = l != null ? l[a] : void 0),
        r.hasOwnProperty(a) && s !== u && (s != null || u != null))
      )
        if (a === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in s)
              s.hasOwnProperty(i) &&
                u[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (o || (o = []), o.push(a, n)), (n = s);
        else
          a === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (o = o || []).push(a, s))
            : a === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (o = o || []).push(a, "" + s)
            : a !== "suppressContentEditableWarning" &&
              a !== "suppressHydrationWarning" &&
              (jn.hasOwnProperty(a)
                ? (s != null && a === "onScroll" && A("scroll", e),
                  o || u === s || (o = []))
                : (o = o || []).push(a, s));
    }
    n && (o = o || []).push("style", n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Pc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function wn(e, t) {
  if (!U)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function oe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function tp(e, t, n) {
  var r = t.pendingProps;
  switch ((Li(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return oe(t), null;
    case 1:
      return ve(t.type) && br(), oe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        on(),
        F(he),
        F(ue),
        $i(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Er(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), je !== null && (bo(je), (je = null)))),
        Wo(e, t),
        oe(t),
        null
      );
    case 5:
      Vi(t);
      var l = Ct(Yn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Ec(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(g(166));
          return oe(t), null;
        }
        if (((e = Ct(Be.current)), Er(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Ve] = t), (r[Hn] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              A("cancel", r), A("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              A("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Pn.length; l++) A(Pn[l], r);
              break;
            case "source":
              A("error", r);
              break;
            case "img":
            case "image":
            case "link":
              A("error", r), A("load", r);
              break;
            case "details":
              A("toggle", r);
              break;
            case "input":
              hu(r, o), A("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                A("invalid", r);
              break;
            case "textarea":
              mu(r, o), A("invalid", r);
          }
          go(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      _r(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      _r(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : jn.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  A("scroll", r);
            }
          switch (n) {
            case "input":
              hr(r), vu(r, o, !0);
              break;
            case "textarea":
              hr(r), yu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = qr);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Js(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Ve] = t),
            (e[Hn] = r),
            _c(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = wo(n, r)), n)) {
              case "dialog":
                A("cancel", e), A("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                A("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Pn.length; l++) A(Pn[l], e);
                l = r;
                break;
              case "source":
                A("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                A("error", e), A("load", e), (l = r);
                break;
              case "details":
                A("toggle", e), (l = r);
                break;
              case "input":
                hu(e, r), (l = po(e, r)), A("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = B({}, r, { value: void 0 })),
                  A("invalid", e);
                break;
              case "textarea":
                mu(e, r), (l = mo(e, r)), A("invalid", e);
                break;
              default:
                l = r;
            }
            go(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style"
                  ? ea(e, s)
                  : o === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && qs(e, s))
                  : o === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Dn(e, s)
                    : typeof s == "number" && Dn(e, "" + s)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (jn.hasOwnProperty(o)
                      ? s != null && o === "onScroll" && A("scroll", e)
                      : s != null && yi(e, o, s, i));
              }
            switch (n) {
              case "input":
                hr(e), vu(e, r, !1);
                break;
              case "textarea":
                hr(e), yu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ht(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Xt(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Xt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = qr);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return oe(t), null;
    case 6:
      if (e && t.stateNode != null) Pc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(g(166));
        if (((n = Ct(Yn.current)), Ct(Be.current), Er(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ve] = t),
            (o = r.nodeValue !== n) && ((e = ke), e !== null))
          )
            switch (e.tag) {
              case 3:
                _r(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  _r(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ve] = t),
            (t.stateNode = r);
      }
      return oe(t), null;
    case 13:
      if (
        (F(V),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (U && Se !== null && t.mode & 1 && !(t.flags & 128))
          $a(), rn(), (t.flags |= 98560), (o = !1);
        else if (((o = Er(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(g(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(g(317));
            o[Ve] = t;
          } else
            rn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          oe(t), (o = !1);
        } else je !== null && (bo(je), (je = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || V.current & 1 ? X === 0 && (X = 3) : bi())),
          t.updateQueue !== null && (t.flags |= 4),
          oe(t),
          null);
    case 4:
      return (
        on(), Wo(e, t), e === null && Bn(t.stateNode.containerInfo), oe(t), null
      );
    case 10:
      return Mi(t.type._context), oe(t), null;
    case 17:
      return ve(t.type) && br(), oe(t), null;
    case 19:
      if ((F(V), (o = t.memoizedState), o === null)) return oe(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) wn(o, !1);
        else {
          if (X !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = il(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    wn(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return M(V, (V.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Y() > sn &&
            ((t.flags |= 128), (r = !0), wn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = il(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              wn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !U)
            )
              return oe(t), null;
          } else
            2 * Y() - o.renderingStartTime > sn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), wn(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Y()),
          (t.sibling = null),
          (n = V.current),
          M(V, r ? (n & 1) | 2 : n & 1),
          t)
        : (oe(t), null);
    case 22:
    case 23:
      return (
        qi(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? we & 1073741824 && (oe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : oe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(g(156, t.tag));
}
function np(e, t) {
  switch ((Li(t), t.tag)) {
    case 1:
      return (
        ve(t.type) && br(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        on(),
        F(he),
        F(ue),
        $i(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Vi(t), null;
    case 13:
      if ((F(V), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(g(340));
        rn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return F(V), null;
    case 4:
      return on(), null;
    case 10:
      return Mi(t.type._context), null;
    case 22:
    case 23:
      return qi(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var xr = !1,
  ie = !1,
  rp = typeof WeakSet == "function" ? WeakSet : Set,
  E = null;
function Kt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Q(e, t, r);
      }
    else n.current = null;
}
function Yo(e, t, n) {
  try {
    n();
  } catch (r) {
    Q(e, t, r);
  }
}
var is = !1;
function lp(e, t) {
  if (((zo = Xr), (e = Ta()), Ri(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            s = -1,
            a = 0,
            h = 0,
            p = e,
            v = null;
          t: for (;;) {
            for (
              var w;
              p !== n || (l !== 0 && p.nodeType !== 3) || (u = i + l),
                p !== o || (r !== 0 && p.nodeType !== 3) || (s = i + r),
                p.nodeType === 3 && (i += p.nodeValue.length),
                (w = p.firstChild) !== null;

            )
              (v = p), (p = w);
            for (;;) {
              if (p === e) break t;
              if (
                (v === n && ++a === l && (u = i),
                v === o && ++h === r && (s = i),
                (w = p.nextSibling) !== null)
              )
                break;
              (p = v), (v = p.parentNode);
            }
            p = w;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ro = { focusedElem: e, selectionRange: n }, Xr = !1, E = t; E !== null; )
    if (((t = E), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (E = e);
    else
      for (; E !== null; ) {
        t = E;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var S = y.memoizedProps,
                    O = y.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : Le(t.type, S),
                      O
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(g(163));
            }
        } catch (m) {
          Q(t, t.return, m);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (E = e);
          break;
        }
        E = t.return;
      }
  return (y = is), (is = !1), y;
}
function On(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Yo(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Pl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ko(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Cc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Cc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ve], delete t[Hn], delete t[Io], delete t[Vd], delete t[$d])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function xc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function us(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || xc(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Go(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = qr));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Go(e, t, n), e = e.sibling; e !== null; ) Go(e, t, n), (e = e.sibling);
}
function Xo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Xo(e, t, n), e = e.sibling; e !== null; ) Xo(e, t, n), (e = e.sibling);
}
var ee = null,
  Ie = !1;
function be(e, t, n) {
  for (n = n.child; n !== null; ) Nc(e, t, n), (n = n.sibling);
}
function Nc(e, t, n) {
  if ($e && typeof $e.onCommitFiberUnmount == "function")
    try {
      $e.onCommitFiberUnmount(ml, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ie || Kt(n, t);
    case 6:
      var r = ee,
        l = Ie;
      (ee = null),
        be(e, t, n),
        (ee = r),
        (Ie = l),
        ee !== null &&
          (Ie
            ? ((e = ee),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ee.removeChild(n.stateNode));
      break;
    case 18:
      ee !== null &&
        (Ie
          ? ((e = ee),
            (n = n.stateNode),
            e.nodeType === 8
              ? Xl(e.parentNode, n)
              : e.nodeType === 1 && Xl(e, n),
            Un(e))
          : Xl(ee, n.stateNode));
      break;
    case 4:
      (r = ee),
        (l = Ie),
        (ee = n.stateNode.containerInfo),
        (Ie = !0),
        be(e, t, n),
        (ee = r),
        (Ie = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ie &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Yo(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      be(e, t, n);
      break;
    case 1:
      if (
        !ie &&
        (Kt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          Q(n, t, u);
        }
      be(e, t, n);
      break;
    case 21:
      be(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ie = (r = ie) || n.memoizedState !== null), be(e, t, n), (ie = r))
        : be(e, t, n);
      break;
    default:
      be(e, t, n);
  }
}
function ss(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new rp()),
      t.forEach(function (r) {
        var l = pp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Oe(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (ee = u.stateNode), (Ie = !1);
              break e;
            case 3:
              (ee = u.stateNode.containerInfo), (Ie = !0);
              break e;
            case 4:
              (ee = u.stateNode.containerInfo), (Ie = !0);
              break e;
          }
          u = u.return;
        }
        if (ee === null) throw Error(g(160));
        Nc(o, i, l), (ee = null), (Ie = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (a) {
        Q(l, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Tc(t, e), (t = t.sibling);
}
function Tc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Oe(t, e), Fe(e), r & 4)) {
        try {
          On(3, e, e.return), Pl(3, e);
        } catch (S) {
          Q(e, e.return, S);
        }
        try {
          On(5, e, e.return);
        } catch (S) {
          Q(e, e.return, S);
        }
      }
      break;
    case 1:
      Oe(t, e), Fe(e), r & 512 && n !== null && Kt(n, n.return);
      break;
    case 5:
      if (
        (Oe(t, e),
        Fe(e),
        r & 512 && n !== null && Kt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Dn(l, "");
        } catch (S) {
          Q(e, e.return, S);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && Xs(l, o),
              wo(u, i);
            var a = wo(u, o);
            for (i = 0; i < s.length; i += 2) {
              var h = s[i],
                p = s[i + 1];
              h === "style"
                ? ea(l, p)
                : h === "dangerouslySetInnerHTML"
                ? qs(l, p)
                : h === "children"
                ? Dn(l, p)
                : yi(l, h, p, a);
            }
            switch (u) {
              case "input":
                ho(l, o);
                break;
              case "textarea":
                Zs(l, o);
                break;
              case "select":
                var v = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var w = o.value;
                w != null
                  ? Xt(l, !!o.multiple, w, !1)
                  : v !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Xt(l, !!o.multiple, o.defaultValue, !0)
                      : Xt(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Hn] = o;
          } catch (S) {
            Q(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((Oe(t, e), Fe(e), r & 4)) {
        if (e.stateNode === null) throw Error(g(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (S) {
          Q(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (Oe(t, e), Fe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Un(t.containerInfo);
        } catch (S) {
          Q(e, e.return, S);
        }
      break;
    case 4:
      Oe(t, e), Fe(e);
      break;
    case 13:
      Oe(t, e),
        Fe(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Zi = Y())),
        r & 4 && ss(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ie = (a = ie) || h), Oe(t, e), (ie = a)) : Oe(t, e),
        Fe(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !h && e.mode & 1)
        )
          for (E = e, h = e.child; h !== null; ) {
            for (p = E = h; E !== null; ) {
              switch (((v = E), (w = v.child), v.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  On(4, v, v.return);
                  break;
                case 1:
                  Kt(v, v.return);
                  var y = v.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = v), (n = v.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (S) {
                      Q(r, n, S);
                    }
                  }
                  break;
                case 5:
                  Kt(v, v.return);
                  break;
                case 22:
                  if (v.memoizedState !== null) {
                    cs(p);
                    continue;
                  }
              }
              w !== null ? ((w.return = v), (E = w)) : cs(p);
            }
            h = h.sibling;
          }
        e: for (h = null, p = e; ; ) {
          if (p.tag === 5) {
            if (h === null) {
              h = p;
              try {
                (l = p.stateNode),
                  a
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = p.stateNode),
                      (s = p.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = bs("display", i)));
              } catch (S) {
                Q(e, e.return, S);
              }
            }
          } else if (p.tag === 6) {
            if (h === null)
              try {
                p.stateNode.nodeValue = a ? "" : p.memoizedProps;
              } catch (S) {
                Q(e, e.return, S);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            h === p && (h = null), (p = p.return);
          }
          h === p && (h = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      Oe(t, e), Fe(e), r & 4 && ss(e);
      break;
    case 21:
      break;
    default:
      Oe(t, e), Fe(e);
  }
}
function Fe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (xc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(g(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Dn(l, ""), (r.flags &= -33));
          var o = us(e);
          Xo(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = us(e);
          Go(e, u, i);
          break;
        default:
          throw Error(g(161));
      }
    } catch (s) {
      Q(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function op(e, t, n) {
  (E = e), zc(e);
}
function zc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; E !== null; ) {
    var l = E,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || xr;
      if (!i) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || ie;
        u = xr;
        var a = ie;
        if (((xr = i), (ie = s) && !a))
          for (E = l; E !== null; )
            (i = E),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? fs(l)
                : s !== null
                ? ((s.return = i), (E = s))
                : fs(l);
        for (; o !== null; ) (E = o), zc(o), (o = o.sibling);
        (E = l), (xr = u), (ie = a);
      }
      as(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (E = o)) : as(e);
  }
}
function as(e) {
  for (; E !== null; ) {
    var t = E;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ie || Pl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ie)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Le(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Yu(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Yu(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var h = a.memoizedState;
                  if (h !== null) {
                    var p = h.dehydrated;
                    p !== null && Un(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(g(163));
          }
        ie || (t.flags & 512 && Ko(t));
      } catch (v) {
        Q(t, t.return, v);
      }
    }
    if (t === e) {
      E = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (E = n);
      break;
    }
    E = t.return;
  }
}
function cs(e) {
  for (; E !== null; ) {
    var t = E;
    if (t === e) {
      E = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (E = n);
      break;
    }
    E = t.return;
  }
}
function fs(e) {
  for (; E !== null; ) {
    var t = E;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Pl(4, t);
          } catch (s) {
            Q(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              Q(t, l, s);
            }
          }
          var o = t.return;
          try {
            Ko(t);
          } catch (s) {
            Q(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Ko(t);
          } catch (s) {
            Q(t, i, s);
          }
      }
    } catch (s) {
      Q(t, t.return, s);
    }
    if (t === e) {
      E = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (E = u);
      break;
    }
    E = t.return;
  }
}
var ip = Math.ceil,
  al = qe.ReactCurrentDispatcher,
  Gi = qe.ReactCurrentOwner,
  Te = qe.ReactCurrentBatchConfig,
  I = 0,
  q = null,
  K = null,
  te = 0,
  we = 0,
  Gt = yt(0),
  X = 0,
  Zn = null,
  Ot = 0,
  Cl = 0,
  Xi = 0,
  Ln = null,
  de = null,
  Zi = 0,
  sn = 1 / 0,
  Qe = null,
  cl = !1,
  Zo = null,
  ft = null,
  Nr = !1,
  ot = null,
  fl = 0,
  In = 0,
  Jo = null,
  Vr = -1,
  $r = 0;
function ae() {
  return I & 6 ? Y() : Vr !== -1 ? Vr : (Vr = Y());
}
function dt(e) {
  return e.mode & 1
    ? I & 2 && te !== 0
      ? te & -te
      : Qd.transition !== null
      ? ($r === 0 && ($r = da()), $r)
      : ((e = D),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : wa(e.type))),
        e)
    : 1;
}
function Me(e, t, n, r) {
  if (50 < In) throw ((In = 0), (Jo = null), Error(g(185)));
  rr(e, n, r),
    (!(I & 2) || e !== q) &&
      (e === q && (!(I & 2) && (Cl |= n), X === 4 && rt(e, te)),
      me(e, r),
      n === 1 && I === 0 && !(t.mode & 1) && ((sn = Y() + 500), kl && gt()));
}
function me(e, t) {
  var n = e.callbackNode;
  Qf(e, t);
  var r = Gr(e, e === q ? te : 0);
  if (r === 0)
    n !== null && Su(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Su(n), t === 1))
      e.tag === 0 ? Bd(ds.bind(null, e)) : Fa(ds.bind(null, e)),
        Fd(function () {
          !(I & 6) && gt();
        }),
        (n = null);
    else {
      switch (pa(r)) {
        case 1:
          n = _i;
          break;
        case 4:
          n = ca;
          break;
        case 16:
          n = Kr;
          break;
        case 536870912:
          n = fa;
          break;
        default:
          n = Kr;
      }
      n = Ac(n, Rc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Rc(e, t) {
  if (((Vr = -1), ($r = 0), I & 6)) throw Error(g(327));
  var n = e.callbackNode;
  if (en() && e.callbackNode !== n) return null;
  var r = Gr(e, e === q ? te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = dl(e, r);
  else {
    t = r;
    var l = I;
    I |= 2;
    var o = Lc();
    (q !== e || te !== t) && ((Qe = null), (sn = Y() + 500), xt(e, t));
    do
      try {
        ap();
        break;
      } catch (u) {
        Oc(e, u);
      }
    while (1);
    Di(),
      (al.current = o),
      (I = l),
      K !== null ? (t = 0) : ((q = null), (te = 0), (t = X));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Po(e)), l !== 0 && ((r = l), (t = qo(e, l)))), t === 1)
    )
      throw ((n = Zn), xt(e, 0), rt(e, r), me(e, Y()), n);
    if (t === 6) rt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !up(l) &&
          ((t = dl(e, r)),
          t === 2 && ((o = Po(e)), o !== 0 && ((r = o), (t = qo(e, o)))),
          t === 1))
      )
        throw ((n = Zn), xt(e, 0), rt(e, r), me(e, Y()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(g(345));
        case 2:
          _t(e, de, Qe);
          break;
        case 3:
          if (
            (rt(e, r), (r & 130023424) === r && ((t = Zi + 500 - Y()), 10 < t))
          ) {
            if (Gr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ae(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Lo(_t.bind(null, e, de, Qe), t);
            break;
          }
          _t(e, de, Qe);
          break;
        case 4:
          if ((rt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - De(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = Y() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * ip(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Lo(_t.bind(null, e, de, Qe), r);
            break;
          }
          _t(e, de, Qe);
          break;
        case 5:
          _t(e, de, Qe);
          break;
        default:
          throw Error(g(329));
      }
    }
  }
  return me(e, Y()), e.callbackNode === n ? Rc.bind(null, e) : null;
}
function qo(e, t) {
  var n = Ln;
  return (
    e.current.memoizedState.isDehydrated && (xt(e, t).flags |= 256),
    (e = dl(e, t)),
    e !== 2 && ((t = de), (de = n), t !== null && bo(t)),
    e
  );
}
function bo(e) {
  de === null ? (de = e) : de.push.apply(de, e);
}
function up(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Ae(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function rt(e, t) {
  for (
    t &= ~Xi,
      t &= ~Cl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - De(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ds(e) {
  if (I & 6) throw Error(g(327));
  en();
  var t = Gr(e, 0);
  if (!(t & 1)) return me(e, Y()), null;
  var n = dl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Po(e);
    r !== 0 && ((t = r), (n = qo(e, r)));
  }
  if (n === 1) throw ((n = Zn), xt(e, 0), rt(e, t), me(e, Y()), n);
  if (n === 6) throw Error(g(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    _t(e, de, Qe),
    me(e, Y()),
    null
  );
}
function Ji(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    (I = n), I === 0 && ((sn = Y() + 500), kl && gt());
  }
}
function Lt(e) {
  ot !== null && ot.tag === 0 && !(I & 6) && en();
  var t = I;
  I |= 1;
  var n = Te.transition,
    r = D;
  try {
    if (((Te.transition = null), (D = 1), e)) return e();
  } finally {
    (D = r), (Te.transition = n), (I = t), !(I & 6) && gt();
  }
}
function qi() {
  (we = Gt.current), F(Gt);
}
function xt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Ad(n)), K !== null))
    for (n = K.return; n !== null; ) {
      var r = n;
      switch ((Li(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && br();
          break;
        case 3:
          on(), F(he), F(ue), $i();
          break;
        case 5:
          Vi(r);
          break;
        case 4:
          on();
          break;
        case 13:
          F(V);
          break;
        case 19:
          F(V);
          break;
        case 10:
          Mi(r.type._context);
          break;
        case 22:
        case 23:
          qi();
      }
      n = n.return;
    }
  if (
    ((q = e),
    (K = e = pt(e.current, null)),
    (te = we = t),
    (X = 0),
    (Zn = null),
    (Xi = Cl = Ot = 0),
    (de = Ln = null),
    Pt !== null)
  ) {
    for (t = 0; t < Pt.length; t++)
      if (((n = Pt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    Pt = null;
  }
  return e;
}
function Oc(e, t) {
  do {
    var n = K;
    try {
      if ((Di(), (Ar.current = sl), ul)) {
        for (var r = $.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        ul = !1;
      }
      if (
        ((Rt = 0),
        (J = G = $ = null),
        (Rn = !1),
        (Kn = 0),
        (Gi.current = null),
        n === null || n.return === null)
      ) {
        (X = 1), (Zn = t), (K = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          s = t;
        if (
          ((t = te),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var a = s,
            h = u,
            p = h.tag;
          if (!(h.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var v = h.alternate;
            v
              ? ((h.updateQueue = v.updateQueue),
                (h.memoizedState = v.memoizedState),
                (h.lanes = v.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var w = bu(i);
          if (w !== null) {
            (w.flags &= -257),
              es(w, i, u, o, t),
              w.mode & 1 && qu(o, a, t),
              (t = w),
              (s = a);
            var y = t.updateQueue;
            if (y === null) {
              var S = new Set();
              S.add(s), (t.updateQueue = S);
            } else y.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              qu(o, a, t), bi();
              break e;
            }
            s = Error(g(426));
          }
        } else if (U && u.mode & 1) {
          var O = bu(i);
          if (O !== null) {
            !(O.flags & 65536) && (O.flags |= 256),
              es(O, i, u, o, t),
              Ii(un(s, u));
            break e;
          }
        }
        (o = s = un(s, u)),
          X !== 4 && (X = 2),
          Ln === null ? (Ln = [o]) : Ln.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var f = hc(o, s, t);
              Wu(o, f);
              break e;
            case 1:
              u = s;
              var c = o.type,
                d = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (ft === null || !ft.has(d))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var m = vc(o, u, t);
                Wu(o, m);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      jc(n);
    } catch (k) {
      (t = k), K === n && n !== null && (K = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Lc() {
  var e = al.current;
  return (al.current = sl), e === null ? sl : e;
}
function bi() {
  (X === 0 || X === 3 || X === 2) && (X = 4),
    q === null || (!(Ot & 268435455) && !(Cl & 268435455)) || rt(q, te);
}
function dl(e, t) {
  var n = I;
  I |= 2;
  var r = Lc();
  (q !== e || te !== t) && ((Qe = null), xt(e, t));
  do
    try {
      sp();
      break;
    } catch (l) {
      Oc(e, l);
    }
  while (1);
  if ((Di(), (I = n), (al.current = r), K !== null)) throw Error(g(261));
  return (q = null), (te = 0), X;
}
function sp() {
  for (; K !== null; ) Ic(K);
}
function ap() {
  for (; K !== null && !jf(); ) Ic(K);
}
function Ic(e) {
  var t = Mc(e.alternate, e, we);
  (e.memoizedProps = e.pendingProps),
    t === null ? jc(e) : (K = t),
    (Gi.current = null);
}
function jc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = np(n, t)), n !== null)) {
        (n.flags &= 32767), (K = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (X = 6), (K = null);
        return;
      }
    } else if (((n = tp(n, t, we)), n !== null)) {
      K = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      K = t;
      return;
    }
    K = t = e;
  } while (t !== null);
  X === 0 && (X = 5);
}
function _t(e, t, n) {
  var r = D,
    l = Te.transition;
  try {
    (Te.transition = null), (D = 1), cp(e, t, n, r);
  } finally {
    (Te.transition = l), (D = r);
  }
  return null;
}
function cp(e, t, n, r) {
  do en();
  while (ot !== null);
  if (I & 6) throw Error(g(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(g(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Hf(e, o),
    e === q && ((K = q = null), (te = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Nr ||
      ((Nr = !0),
      Ac(Kr, function () {
        return en(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Te.transition), (Te.transition = null);
    var i = D;
    D = 1;
    var u = I;
    (I |= 4),
      (Gi.current = null),
      lp(e, n),
      Tc(n, e),
      Rd(Ro),
      (Xr = !!zo),
      (Ro = zo = null),
      (e.current = n),
      op(n),
      Df(),
      (I = u),
      (D = i),
      (Te.transition = o);
  } else e.current = n;
  if (
    (Nr && ((Nr = !1), (ot = e), (fl = l)),
    (o = e.pendingLanes),
    o === 0 && (ft = null),
    Ff(n.stateNode),
    me(e, Y()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (cl) throw ((cl = !1), (e = Zo), (Zo = null), e);
  return (
    fl & 1 && e.tag !== 0 && en(),
    (o = e.pendingLanes),
    o & 1 ? (e === Jo ? In++ : ((In = 0), (Jo = e))) : (In = 0),
    gt(),
    null
  );
}
function en() {
  if (ot !== null) {
    var e = pa(fl),
      t = Te.transition,
      n = D;
    try {
      if (((Te.transition = null), (D = 16 > e ? 16 : e), ot === null))
        var r = !1;
      else {
        if (((e = ot), (ot = null), (fl = 0), I & 6)) throw Error(g(331));
        var l = I;
        for (I |= 4, E = e.current; E !== null; ) {
          var o = E,
            i = o.child;
          if (E.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (E = a; E !== null; ) {
                  var h = E;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      On(8, h, o);
                  }
                  var p = h.child;
                  if (p !== null) (p.return = h), (E = p);
                  else
                    for (; E !== null; ) {
                      h = E;
                      var v = h.sibling,
                        w = h.return;
                      if ((Cc(h), h === a)) {
                        E = null;
                        break;
                      }
                      if (v !== null) {
                        (v.return = w), (E = v);
                        break;
                      }
                      E = w;
                    }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var S = y.child;
                if (S !== null) {
                  y.child = null;
                  do {
                    var O = S.sibling;
                    (S.sibling = null), (S = O);
                  } while (S !== null);
                }
              }
              E = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (E = i);
          else
            e: for (; E !== null; ) {
              if (((o = E), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    On(9, o, o.return);
                }
              var f = o.sibling;
              if (f !== null) {
                (f.return = o.return), (E = f);
                break e;
              }
              E = o.return;
            }
        }
        var c = e.current;
        for (E = c; E !== null; ) {
          i = E;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null) (d.return = i), (E = d);
          else
            e: for (i = c; E !== null; ) {
              if (((u = E), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pl(9, u);
                  }
                } catch (k) {
                  Q(u, u.return, k);
                }
              if (u === i) {
                E = null;
                break e;
              }
              var m = u.sibling;
              if (m !== null) {
                (m.return = u.return), (E = m);
                break e;
              }
              E = u.return;
            }
        }
        if (
          ((I = l), gt(), $e && typeof $e.onPostCommitFiberRoot == "function")
        )
          try {
            $e.onPostCommitFiberRoot(ml, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (D = n), (Te.transition = t);
    }
  }
  return !1;
}
function ps(e, t, n) {
  (t = un(n, t)),
    (t = hc(e, t, 1)),
    (e = ct(e, t, 1)),
    (t = ae()),
    e !== null && (rr(e, 1, t), me(e, t));
}
function Q(e, t, n) {
  if (e.tag === 3) ps(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ps(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (ft === null || !ft.has(r)))
        ) {
          (e = un(n, e)),
            (e = vc(t, e, 1)),
            (t = ct(t, e, 1)),
            (e = ae()),
            t !== null && (rr(t, 1, e), me(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function fp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ae()),
    (e.pingedLanes |= e.suspendedLanes & n),
    q === e &&
      (te & n) === n &&
      (X === 4 || (X === 3 && (te & 130023424) === te && 500 > Y() - Zi)
        ? xt(e, 0)
        : (Xi |= n)),
    me(e, t);
}
function Dc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = yr), (yr <<= 1), !(yr & 130023424) && (yr = 4194304))
      : (t = 1));
  var n = ae();
  (e = Ze(e, t)), e !== null && (rr(e, t, n), me(e, n));
}
function dp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Dc(e, n);
}
function pp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(g(314));
  }
  r !== null && r.delete(t), Dc(e, n);
}
var Mc;
Mc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || he.current) pe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (pe = !1), ep(e, t, n);
      pe = !!(e.flags & 131072);
    }
  else (pe = !1), U && t.flags & 1048576 && Ua(t, nl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ur(e, t), (e = t.pendingProps);
      var l = nn(t, ue.current);
      bt(t, n), (l = Qi(null, t, r, e, l, n));
      var o = Hi();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ve(r) ? ((o = !0), el(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Fi(t),
            (l.updater = _l),
            (t.stateNode = l),
            (l._reactInternals = t),
            Uo(t, r, e, n),
            (t = Bo(null, t, r, !0, o, n)))
          : ((t.tag = 0), U && o && Oi(t), se(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ur(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = vp(r)),
          (e = Le(r, e)),
          l)
        ) {
          case 0:
            t = $o(null, t, r, e, n);
            break e;
          case 1:
            t = rs(null, t, r, e, n);
            break e;
          case 11:
            t = ts(null, t, r, e, n);
            break e;
          case 14:
            t = ns(null, t, r, Le(r.type, e), n);
            break e;
        }
        throw Error(g(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        $o(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        rs(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((wc(t), e === null)) throw Error(g(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          Qa(e, t),
          ol(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = un(Error(g(423)), t)), (t = ls(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = un(Error(g(424)), t)), (t = ls(e, t, r, n, l));
            break e;
          } else
            for (
              Se = at(t.stateNode.containerInfo.firstChild),
                ke = t,
                U = !0,
                je = null,
                n = Ka(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((rn(), r === l)) {
            t = Je(e, t, n);
            break e;
          }
          se(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Ga(t),
        e === null && Mo(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Oo(r, l) ? (i = null) : o !== null && Oo(r, o) && (t.flags |= 32),
        gc(e, t),
        se(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Mo(t), null;
    case 13:
      return Sc(e, t, n);
    case 4:
      return (
        Ui(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = ln(t, null, r, n)) : se(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        ts(e, t, r, l, n)
      );
    case 7:
      return se(e, t, t.pendingProps, n), t.child;
    case 8:
      return se(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return se(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          M(rl, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (Ae(o.value, i)) {
            if (o.children === l.children && !he.current) {
              t = Je(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = Ke(-1, n & -n)), (s.tag = 2);
                      var a = o.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var h = a.pending;
                        h === null
                          ? (s.next = s)
                          : ((s.next = h.next), (h.next = s)),
                          (a.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      Ao(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(g(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  Ao(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        se(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        bt(t, n),
        (l = ze(l)),
        (r = r(l)),
        (t.flags |= 1),
        se(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Le(r, t.pendingProps)),
        (l = Le(r.type, l)),
        ns(e, t, r, l, n)
      );
    case 15:
      return mc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        Ur(e, t),
        (t.tag = 1),
        ve(r) ? ((e = !0), el(t)) : (e = !1),
        bt(t, n),
        Wa(t, r, l),
        Uo(t, r, l, n),
        Bo(null, t, r, !0, e, n)
      );
    case 19:
      return kc(e, t, n);
    case 22:
      return yc(e, t, n);
  }
  throw Error(g(156, t.tag));
};
function Ac(e, t) {
  return aa(e, t);
}
function hp(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ne(e, t, n, r) {
  return new hp(e, t, n, r);
}
function eu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function vp(e) {
  if (typeof e == "function") return eu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === wi)) return 11;
    if (e === Si) return 14;
  }
  return 2;
}
function pt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ne(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Br(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) eu(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Ft:
        return Nt(n.children, l, o, t);
      case gi:
        (i = 8), (l |= 8);
        break;
      case so:
        return (
          (e = Ne(12, n, t, l | 2)), (e.elementType = so), (e.lanes = o), e
        );
      case ao:
        return (e = Ne(13, n, t, l)), (e.elementType = ao), (e.lanes = o), e;
      case co:
        return (e = Ne(19, n, t, l)), (e.elementType = co), (e.lanes = o), e;
      case Ys:
        return xl(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Hs:
              i = 10;
              break e;
            case Ws:
              i = 9;
              break e;
            case wi:
              i = 11;
              break e;
            case Si:
              i = 14;
              break e;
            case et:
              (i = 16), (r = null);
              break e;
          }
        throw Error(g(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ne(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Nt(e, t, n, r) {
  return (e = Ne(7, e, r, t)), (e.lanes = n), e;
}
function xl(e, t, n, r) {
  return (
    (e = Ne(22, e, r, t)),
    (e.elementType = Ys),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ro(e, t, n) {
  return (e = Ne(6, e, null, t)), (e.lanes = n), e;
}
function lo(e, t, n) {
  return (
    (t = Ne(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function mp(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Fl(0)),
    (this.expirationTimes = Fl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Fl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function tu(e, t, n, r, l, o, i, u, s) {
  return (
    (e = new mp(e, t, n, u, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ne(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Fi(o),
    e
  );
}
function yp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: At,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Fc(e) {
  if (!e) return vt;
  e = e._reactInternals;
  e: {
    if (jt(e) !== e || e.tag !== 1) throw Error(g(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ve(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(g(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ve(n)) return Aa(e, n, t);
  }
  return t;
}
function Uc(e, t, n, r, l, o, i, u, s) {
  return (
    (e = tu(n, r, !0, e, l, o, i, u, s)),
    (e.context = Fc(null)),
    (n = e.current),
    (r = ae()),
    (l = dt(n)),
    (o = Ke(r, l)),
    (o.callback = t ?? null),
    ct(n, o, l),
    (e.current.lanes = l),
    rr(e, l, r),
    me(e, r),
    e
  );
}
function Nl(e, t, n, r) {
  var l = t.current,
    o = ae(),
    i = dt(l);
  return (
    (n = Fc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ke(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ct(l, t, i)),
    e !== null && (Me(e, l, i, o), Mr(e, l, i)),
    i
  );
}
function pl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function hs(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function nu(e, t) {
  hs(e, t), (e = e.alternate) && hs(e, t);
}
function gp() {
  return null;
}
var Vc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ru(e) {
  this._internalRoot = e;
}
Tl.prototype.render = ru.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(g(409));
  Nl(e, t, null, null);
};
Tl.prototype.unmount = ru.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Lt(function () {
      Nl(null, e, null, null);
    }),
      (t[Xe] = null);
  }
};
function Tl(e) {
  this._internalRoot = e;
}
Tl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ma();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < nt.length && t !== 0 && t < nt[n].priority; n++);
    nt.splice(n, 0, e), n === 0 && ga(e);
  }
};
function lu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function zl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function vs() {}
function wp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var a = pl(i);
        o.call(a);
      };
    }
    var i = Uc(t, r, e, 0, null, !1, !1, "", vs);
    return (
      (e._reactRootContainer = i),
      (e[Xe] = i.current),
      Bn(e.nodeType === 8 ? e.parentNode : e),
      Lt(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var a = pl(s);
      u.call(a);
    };
  }
  var s = tu(e, 0, !1, null, null, !1, !1, "", vs);
  return (
    (e._reactRootContainer = s),
    (e[Xe] = s.current),
    Bn(e.nodeType === 8 ? e.parentNode : e),
    Lt(function () {
      Nl(t, s, n, r);
    }),
    s
  );
}
function Rl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = pl(i);
        u.call(s);
      };
    }
    Nl(t, i, e, l);
  } else i = wp(n, t, e, l, r);
  return pl(i);
}
ha = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = En(t.pendingLanes);
        n !== 0 &&
          (Ei(t, n | 1), me(t, Y()), !(I & 6) && ((sn = Y() + 500), gt()));
      }
      break;
    case 13:
      Lt(function () {
        var r = Ze(e, 1);
        if (r !== null) {
          var l = ae();
          Me(r, e, 1, l);
        }
      }),
        nu(e, 1);
  }
};
Pi = function (e) {
  if (e.tag === 13) {
    var t = Ze(e, 134217728);
    if (t !== null) {
      var n = ae();
      Me(t, e, 134217728, n);
    }
    nu(e, 134217728);
  }
};
va = function (e) {
  if (e.tag === 13) {
    var t = dt(e),
      n = Ze(e, t);
    if (n !== null) {
      var r = ae();
      Me(n, e, t, r);
    }
    nu(e, t);
  }
};
ma = function () {
  return D;
};
ya = function (e, t) {
  var n = D;
  try {
    return (D = e), t();
  } finally {
    D = n;
  }
};
ko = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ho(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Sl(r);
            if (!l) throw Error(g(90));
            Gs(r), ho(r, l);
          }
        }
      }
      break;
    case "textarea":
      Zs(e, n);
      break;
    case "select":
      (t = n.value), t != null && Xt(e, !!n.multiple, t, !1);
  }
};
ra = Ji;
la = Lt;
var Sp = { usingClientEntryPoint: !1, Events: [or, Bt, Sl, ta, na, Ji] },
  Sn = {
    findFiberByHostInstance: Et,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  kp = {
    bundleType: Sn.bundleType,
    version: Sn.version,
    rendererPackageName: Sn.rendererPackageName,
    rendererConfig: Sn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: qe.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = ua(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Sn.findFiberByHostInstance || gp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Tr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Tr.isDisabled && Tr.supportsFiber)
    try {
      (ml = Tr.inject(kp)), ($e = Tr);
    } catch {}
}
Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sp;
Ee.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!lu(t)) throw Error(g(200));
  return yp(e, t, null, n);
};
Ee.createRoot = function (e, t) {
  if (!lu(e)) throw Error(g(299));
  var n = !1,
    r = "",
    l = Vc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = tu(e, 1, !1, null, null, n, !1, r, l)),
    (e[Xe] = t.current),
    Bn(e.nodeType === 8 ? e.parentNode : e),
    new ru(t)
  );
};
Ee.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(g(188))
      : ((e = Object.keys(e).join(",")), Error(g(268, e)));
  return (e = ua(t)), (e = e === null ? null : e.stateNode), e;
};
Ee.flushSync = function (e) {
  return Lt(e);
};
Ee.hydrate = function (e, t, n) {
  if (!zl(t)) throw Error(g(200));
  return Rl(null, e, t, !0, n);
};
Ee.hydrateRoot = function (e, t, n) {
  if (!lu(e)) throw Error(g(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = Vc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Uc(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Xe] = t.current),
    Bn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Tl(t);
};
Ee.render = function (e, t, n) {
  if (!zl(t)) throw Error(g(200));
  return Rl(null, e, t, !1, n);
};
Ee.unmountComponentAtNode = function (e) {
  if (!zl(e)) throw Error(g(40));
  return e._reactRootContainer
    ? (Lt(function () {
        Rl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Xe] = null);
        });
      }),
      !0)
    : !1;
};
Ee.unstable_batchedUpdates = Ji;
Ee.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!zl(n)) throw Error(g(200));
  if (e == null || e._reactInternals === void 0) throw Error(g(38));
  return Rl(e, t, n, !1, r);
};
Ee.version = "18.2.0-next-9e3b772b8-20220608";
function $c() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($c);
    } catch (e) {
      console.error(e);
    }
}
$c(), (Us.exports = Ee);
var _p = Us.exports,
  ms = _p;
(io.createRoot = ms.createRoot), (io.hydrateRoot = ms.hydrateRoot);
const Ep = {},
  Pp = "_card_qrn9h_1",
  Cp = "_avatar_qrn9h_16",
  ys = { card: Pp, avatar: Cp };
var Bc = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var r = [], l = 0; l < arguments.length; l++) {
        var o = arguments[l];
        if (o) {
          var i = typeof o;
          if (i === "string" || i === "number") r.push(o);
          else if (Array.isArray(o)) {
            if (o.length) {
              var u = n.apply(null, o);
              u && r.push(u);
            }
          } else if (i === "object") {
            if (
              o.toString !== Object.prototype.toString &&
              !o.toString.toString().includes("[native code]")
            ) {
              r.push(o.toString());
              continue;
            }
            for (var s in o) t.call(o, s) && o[s] && r.push(s);
          }
        }
      }
      return r.join(" ");
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(Bc);
var xp = Bc.exports;
const ye = tr(xp),
  Np = ({ avatar: e, name: t, text: n, className: r, ...l }) =>
    N.jsxs("div", {
      className: ye(ys.card, r),
      ...l,
      children: [
        N.jsx(ur, { tag: "h5", children: t }),
        N.jsx("img", { src: "/iva/assets/" + e, className: ys.avatar }),
        N.jsx(Qc, { children: n }),
      ],
    }),
  Tp = "_h1_rux9l_1",
  zp = "_h5_rux9l_10",
  gs = { h1: Tp, h5: zp },
  ur = ({ tag: e, children: t, className: n }) => {
    switch (e) {
      case "h1":
        return N.jsx("h1", { className: ye(gs.h1, n), children: t });
      case "h5":
        return N.jsx("h5", { className: ye(gs.h5, n), children: t });
      default:
        return N.jsx(N.Fragment, {});
    }
  },
  Rp = "_span_1u5g8_1",
  Op = "_ghost_1u5g8_8",
  ws = { span: Rp, ghost: Op },
  Qc = ({ ghost: e = !1, children: t, className: n, ...r }) =>
    N.jsx("span", {
      className: ye(ws.span, n, { [ws.ghost]: e === !0 }),
      ...r,
      children: t,
    }),
  Lp = "_button_y50j2_1",
  Ip = "_primary_y50j2_38",
  Ss = { button: Lp, primary: Ip },
  Hc = ({ children: e, className: t, ...n }) =>
    N.jsx("button", {
      className: ye(t, Ss.button, Ss.primary),
      ...n,
      children: N.jsx("span", { children: e }),
    }),
  jp = "_panel_bhp2s_1",
  Dp = "_ghost_bhp2s_23",
  ks = { panel: jp, ghost: Dp },
  Mp = [
    {
      AVATAR: "thief.jpg",
      NAME: "Воришка",
      TEXT: `Может скинуть карту, чтобы 
		попытаться стырить маленькую шмотку,
		надетую на другого игрока. Бросает кость: 
		4 и больше - удачная кража, иначе его 
		лупят, и он теряет 1 уровень.`,
    },
    {
      AVATAR: "bard.jpg",
      NAME: "Бард",
      TEXT: `В свой ход в бою может сбросить
		карту и выбрать соперника. Бросают по
		кубику. Если у него выпало больше, соперник
		обязан помочь ему, не требуя награды.`,
    },
    {
      AVATAR: "geek.jpg",
      NAME: "Гик",
      TEXT: `Для прохода через потайной ход 
		тратит только 1 шаг + получает шмотку
		"Очки Гикости".`,
    },
  ],
  ou = {
    ABOUT: `Я начал программировать после окончания школы. Мои первые шаги были
        в С++, я изучил его основы и затем решил попробовать себя в Data
        Science. Я приобрел курсы от Yandex и начал программировать на Python,
        но понял, что это не то, чем бы я хотел заниматься. Мне не хватало
        творческого процесса, поэтому я решил освоить frontend, и сейчас успешно
        двигаюсь в своем направлении. Мне нравится процесс написания кода и
        решение задач. Каждое приложение, в создании которого я принимал
        участие, приносит мне вдохновение и желание дальше совершенствовать свой
        код и изучать новые темы.`,
    VIDEO: `Как мне кажется, одной из самых крутых фишек CSS является создание
				анимаций и переходов. Сущесвует 2 способа для создания CSS анимаций. Первый
				очень простой, и работает он через свойство transition. С помощью него можно
				создать эффекты, например, по наведению мыши на определенную область. Второй
				способ посложнее, он связан с описанием анимации через правило @keyframe, что
				позволяет создавать потворяющуюся или зацикленную анимацию. В видео я 
				продемонстрировал, как создается и работает первый вид анимаций.`,
    QUEST: `Жми на кнопку и переходи к совместному выполнению задания, где ты сможешь
				почувствовать силу JavaScript 0_0`,
  },
  iu = {
    GITHUB: "https://github.com/PushToTalkMe/iva/tree/release",
    VIDEO: [{ SRC: "AmQcxny4Tz4" }, { SRC: "NSluVEdrLek" }],
  },
  Ap = ({ className: e, ...t }) =>
    N.jsx("div", {
      className: ye(ks.panel, e),
      ...t,
      children: N.jsx("a", {
        href: iu.GITHUB,
        children: N.jsx(Hc, {
          className: ks.ghost,
          onClick: () => {},
          children: "Код проекта",
        }),
      }),
    }),
  Fp = "_box_1v2lz_1",
  _s = { box: Fp },
  Up = ({ className: e, ...t }) =>
    N.jsxs("div", {
      className: ye(_s.about, e),
      ...t,
      children: [
        N.jsx(ur, { tag: "h1", children: "О себе 📔" }),
        N.jsxs("div", {
          className: _s.box,
          children: [N.jsx(Bp, {}), N.jsx(uu, { children: ou.ABOUT })],
        }),
      ],
    }),
  Vp = "_carousel_1krdo_1",
  $p = "_main_1krdo_8",
  Es = { carousel: Vp, main: $p },
  Bp = ({ className: e, ...t }) =>
    N.jsx("div", {
      className: ye(Es.carousel, e),
      ...t,
      children: Mp.map((n, r) =>
        N.jsx(
          Np,
          { name: n.NAME, avatar: n.AVATAR, className: Es.main, text: n.TEXT },
          r
        )
      ),
    }),
  Qp = "_text_sacuy_1",
  Hp = { text: Qp },
  uu = ({ children: e, className: t, ...n }) =>
    N.jsx("div", {
      className: ye(Hp.text, t),
      ...n,
      children: N.jsx(Qc, { children: e }),
    }),
  Wp = "_player_1u1iy_1",
  Yp = { player: Wp };
var Wc = { exports: {} },
  Kp = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  Gp = Kp,
  Xp = Gp;
function Yc() {}
function Kc() {}
Kc.resetWarningCache = Yc;
var Zp = function () {
  function e(r, l, o, i, u, s) {
    if (s !== Xp) {
      var a = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((a.name = "Invariant Violation"), a);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Kc,
    resetWarningCache: Yc,
  };
  return (n.PropTypes = n), n;
};
Wc.exports = Zp();
var Jp = Wc.exports;
const b = tr(Jp);
var qp = function e(t, n) {
  if (t === n) return !0;
  if (t && n && typeof t == "object" && typeof n == "object") {
    if (t.constructor !== n.constructor) return !1;
    var r, l, o;
    if (Array.isArray(t)) {
      if (((r = t.length), r != n.length)) return !1;
      for (l = r; l-- !== 0; ) if (!e(t[l], n[l])) return !1;
      return !0;
    }
    if (t.constructor === RegExp)
      return t.source === n.source && t.flags === n.flags;
    if (t.valueOf !== Object.prototype.valueOf)
      return t.valueOf() === n.valueOf();
    if (t.toString !== Object.prototype.toString)
      return t.toString() === n.toString();
    if (((o = Object.keys(t)), (r = o.length), r !== Object.keys(n).length))
      return !1;
    for (l = r; l-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(n, o[l])) return !1;
    for (l = r; l-- !== 0; ) {
      var i = o[l];
      if (!e(t[i], n[i])) return !1;
    }
    return !0;
  }
  return t !== t && n !== n;
};
const bp = tr(qp);
var ei = { exports: {} },
  Gc;
/**
 * @link https://github.com/gajus/sister for the canonical source repository
 * @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
 */ Gc = function () {
  var e = {},
    t = {};
  return (
    (e.on = function (n, r) {
      var l = { name: n, handler: r };
      return (t[n] = t[n] || []), t[n].unshift(l), l;
    }),
    (e.off = function (n) {
      var r = t[n.name].indexOf(n);
      r !== -1 && t[n.name].splice(r, 1);
    }),
    (e.trigger = function (n, r) {
      var l = t[n],
        o;
      if (l) for (o = l.length; o--; ) l[o].handler(r);
    }),
    e
  );
};
var eh = Gc,
  ti = { exports: {} },
  th = function (t, n, r) {
    var l = document.head || document.getElementsByTagName("head")[0],
      o = document.createElement("script");
    typeof n == "function" && ((r = n), (n = {})),
      (n = n || {}),
      (r = r || function () {}),
      (o.type = n.type || "text/javascript"),
      (o.charset = n.charset || "utf8"),
      (o.async = "async" in n ? !!n.async : !0),
      (o.src = t),
      n.attrs && nh(o, n.attrs),
      n.text && (o.text = "" + n.text);
    var i = "onload" in o ? Ps : rh;
    i(o, r), o.onload || Ps(o, r), l.appendChild(o);
  };
function nh(e, t) {
  for (var n in t) e.setAttribute(n, t[n]);
}
function Ps(e, t) {
  (e.onload = function () {
    (this.onerror = this.onload = null), t(null, e);
  }),
    (e.onerror = function () {
      (this.onerror = this.onload = null),
        t(new Error("Failed to load " + this.src), e);
    });
}
function rh(e, t) {
  e.onreadystatechange = function () {
    (this.readyState != "complete" && this.readyState != "loaded") ||
      ((this.onreadystatechange = null), t(null, e));
  };
}
(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var n = th,
    r = l(n);
  function l(o) {
    return o && o.__esModule ? o : { default: o };
  }
  (t.default = function (o) {
    var i = new Promise(function (u) {
      if (
        window.YT &&
        window.YT.Player &&
        window.YT.Player instanceof Function
      ) {
        u(window.YT);
        return;
      } else {
        var s = window.location.protocol === "http:" ? "http:" : "https:";
        (0, r.default)(s + "//www.youtube.com/iframe_api", function (h) {
          h && o.trigger("error", h);
        });
      }
      var a = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = function () {
        a && a(), u(window.YT);
      };
    });
    return i;
  }),
    (e.exports = t.default);
})(ti, ti.exports);
var lh = ti.exports,
  ni = { exports: {} },
  ri = { exports: {} },
  li = { exports: {} },
  Jn = 1e3,
  qn = Jn * 60,
  bn = qn * 60,
  er = bn * 24,
  oh = er * 365.25,
  ih = function (e, t) {
    t = t || {};
    var n = typeof e;
    if (n === "string" && e.length > 0) return uh(e);
    if (n === "number" && isNaN(e) === !1) return t.long ? ah(e) : sh(e);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" +
        JSON.stringify(e)
    );
  };
function uh(e) {
  if (((e = String(e)), !(e.length > 100))) {
    var t =
      /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
        e
      );
    if (t) {
      var n = parseFloat(t[1]),
        r = (t[2] || "ms").toLowerCase();
      switch (r) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * oh;
        case "days":
        case "day":
        case "d":
          return n * er;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * bn;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * qn;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * Jn;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return;
      }
    }
  }
}
function sh(e) {
  return e >= er
    ? Math.round(e / er) + "d"
    : e >= bn
    ? Math.round(e / bn) + "h"
    : e >= qn
    ? Math.round(e / qn) + "m"
    : e >= Jn
    ? Math.round(e / Jn) + "s"
    : e + "ms";
}
function ah(e) {
  return (
    zr(e, er, "day") ||
    zr(e, bn, "hour") ||
    zr(e, qn, "minute") ||
    zr(e, Jn, "second") ||
    e + " ms"
  );
}
function zr(e, t, n) {
  if (!(e < t))
    return e < t * 1.5
      ? Math.floor(e / t) + " " + n
      : Math.ceil(e / t) + " " + n + "s";
}
(function (e, t) {
  (t = e.exports = l.debug = l.default = l),
    (t.coerce = s),
    (t.disable = i),
    (t.enable = o),
    (t.enabled = u),
    (t.humanize = ih),
    (t.names = []),
    (t.skips = []),
    (t.formatters = {});
  var n;
  function r(a) {
    var h = 0,
      p;
    for (p in a) (h = (h << 5) - h + a.charCodeAt(p)), (h |= 0);
    return t.colors[Math.abs(h) % t.colors.length];
  }
  function l(a) {
    function h() {
      if (h.enabled) {
        var p = h,
          v = +new Date(),
          w = v - (n || v);
        (p.diff = w), (p.prev = n), (p.curr = v), (n = v);
        for (var y = new Array(arguments.length), S = 0; S < y.length; S++)
          y[S] = arguments[S];
        (y[0] = t.coerce(y[0])), typeof y[0] != "string" && y.unshift("%O");
        var O = 0;
        (y[0] = y[0].replace(/%([a-zA-Z%])/g, function (c, d) {
          if (c === "%%") return c;
          O++;
          var m = t.formatters[d];
          if (typeof m == "function") {
            var k = y[O];
            (c = m.call(p, k)), y.splice(O, 1), O--;
          }
          return c;
        })),
          t.formatArgs.call(p, y);
        var f = h.log || t.log || console.log.bind(console);
        f.apply(p, y);
      }
    }
    return (
      (h.namespace = a),
      (h.enabled = t.enabled(a)),
      (h.useColors = t.useColors()),
      (h.color = r(a)),
      typeof t.init == "function" && t.init(h),
      h
    );
  }
  function o(a) {
    t.save(a), (t.names = []), (t.skips = []);
    for (
      var h = (typeof a == "string" ? a : "").split(/[\s,]+/),
        p = h.length,
        v = 0;
      v < p;
      v++
    )
      h[v] &&
        ((a = h[v].replace(/\*/g, ".*?")),
        a[0] === "-"
          ? t.skips.push(new RegExp("^" + a.substr(1) + "$"))
          : t.names.push(new RegExp("^" + a + "$")));
  }
  function i() {
    t.enable("");
  }
  function u(a) {
    var h, p;
    for (h = 0, p = t.skips.length; h < p; h++)
      if (t.skips[h].test(a)) return !1;
    for (h = 0, p = t.names.length; h < p; h++)
      if (t.names[h].test(a)) return !0;
    return !1;
  }
  function s(a) {
    return a instanceof Error ? a.stack || a.message : a;
  }
})(li, li.exports);
var ch = li.exports;
(function (e, t) {
  (t = e.exports = ch),
    (t.log = l),
    (t.formatArgs = r),
    (t.save = o),
    (t.load = i),
    (t.useColors = n),
    (t.storage =
      typeof chrome < "u" && typeof chrome.storage < "u"
        ? chrome.storage.local
        : u()),
    (t.colors = [
      "lightseagreen",
      "forestgreen",
      "goldenrod",
      "dodgerblue",
      "darkorchid",
      "crimson",
    ]);
  function n() {
    return typeof window < "u" &&
      window.process &&
      window.process.type === "renderer"
      ? !0
      : (typeof document < "u" &&
          document.documentElement &&
          document.documentElement.style &&
          document.documentElement.style.WebkitAppearance) ||
          (typeof window < "u" &&
            window.console &&
            (window.console.firebug ||
              (window.console.exception && window.console.table))) ||
          (typeof navigator < "u" &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
            parseInt(RegExp.$1, 10) >= 31) ||
          (typeof navigator < "u" &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
  }
  t.formatters.j = function (s) {
    try {
      return JSON.stringify(s);
    } catch (a) {
      return "[UnexpectedJSONParseError]: " + a.message;
    }
  };
  function r(s) {
    var a = this.useColors;
    if (
      ((s[0] =
        (a ? "%c" : "") +
        this.namespace +
        (a ? " %c" : " ") +
        s[0] +
        (a ? "%c " : " ") +
        "+" +
        t.humanize(this.diff)),
      !!a)
    ) {
      var h = "color: " + this.color;
      s.splice(1, 0, h, "color: inherit");
      var p = 0,
        v = 0;
      s[0].replace(/%[a-zA-Z%]/g, function (w) {
        w !== "%%" && (p++, w === "%c" && (v = p));
      }),
        s.splice(v, 0, h);
    }
  }
  function l() {
    return (
      typeof console == "object" &&
      console.log &&
      Function.prototype.apply.call(console.log, console, arguments)
    );
  }
  function o(s) {
    try {
      s == null ? t.storage.removeItem("debug") : (t.storage.debug = s);
    } catch {}
  }
  function i() {
    var s;
    try {
      s = t.storage.debug;
    } catch {}
    return !s && typeof process < "u" && "env" in process && (s = {}.DEBUG), s;
  }
  t.enable(i());
  function u() {
    try {
      return window.localStorage;
    } catch {}
  }
})(ri, ri.exports);
var fh = ri.exports,
  oi = { exports: {} };
(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.default = [
      "cueVideoById",
      "loadVideoById",
      "cueVideoByUrl",
      "loadVideoByUrl",
      "playVideo",
      "pauseVideo",
      "stopVideo",
      "getVideoLoadedFraction",
      "cuePlaylist",
      "loadPlaylist",
      "nextVideo",
      "previousVideo",
      "playVideoAt",
      "setShuffle",
      "setLoop",
      "getPlaylist",
      "getPlaylistIndex",
      "setOption",
      "mute",
      "unMute",
      "isMuted",
      "setVolume",
      "getVolume",
      "seekTo",
      "getPlayerState",
      "getPlaybackRate",
      "setPlaybackRate",
      "getAvailablePlaybackRates",
      "getPlaybackQuality",
      "setPlaybackQuality",
      "getAvailableQualityLevels",
      "getCurrentTime",
      "getDuration",
      "removeEventListener",
      "getVideoUrl",
      "getVideoEmbedCode",
      "getOptions",
      "getOption",
      "addEventListener",
      "destroy",
      "setSize",
      "getIframe",
    ]),
    (e.exports = t.default);
})(oi, oi.exports);
var dh = oi.exports,
  ii = { exports: {} };
(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.default = [
      "ready",
      "stateChange",
      "playbackQualityChange",
      "playbackRateChange",
      "error",
      "apiChange",
      "volumeChange",
    ]),
    (e.exports = t.default);
})(ii, ii.exports);
var ph = ii.exports,
  ui = { exports: {} },
  si = { exports: {} };
(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.default = {
      BUFFERING: 3,
      ENDED: 0,
      PAUSED: 2,
      PLAYING: 1,
      UNSTARTED: -1,
      VIDEO_CUED: 5,
    }),
    (e.exports = t.default);
})(si, si.exports);
var hh = si.exports;
(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var n = hh,
    r = l(n);
  function l(o) {
    return o && o.__esModule ? o : { default: o };
  }
  (t.default = {
    pauseVideo: {
      acceptableStates: [r.default.ENDED, r.default.PAUSED],
      stateChangeRequired: !1,
    },
    playVideo: {
      acceptableStates: [r.default.ENDED, r.default.PLAYING],
      stateChangeRequired: !1,
    },
    seekTo: {
      acceptableStates: [r.default.ENDED, r.default.PLAYING, r.default.PAUSED],
      stateChangeRequired: !0,
      timeout: 3e3,
    },
  }),
    (e.exports = t.default);
})(ui, ui.exports);
var vh = ui.exports;
(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var n = fh,
    r = h(n),
    l = dh,
    o = h(l),
    i = ph,
    u = h(i),
    s = vh,
    a = h(s);
  function h(w) {
    return w && w.__esModule ? w : { default: w };
  }
  var p = (0, r.default)("youtube-player"),
    v = {};
  (v.proxyEvents = function (w) {
    var y = {},
      S = function (P) {
        var C = "on" + P.slice(0, 1).toUpperCase() + P.slice(1);
        y[C] = function (j) {
          p('event "%s"', C, j), w.trigger(P, j);
        };
      },
      O = !0,
      f = !1,
      c = void 0;
    try {
      for (
        var d = u.default[Symbol.iterator](), m;
        !(O = (m = d.next()).done);
        O = !0
      ) {
        var k = m.value;
        S(k);
      }
    } catch (x) {
      (f = !0), (c = x);
    } finally {
      try {
        !O && d.return && d.return();
      } finally {
        if (f) throw c;
      }
    }
    return y;
  }),
    (v.promisifyPlayer = function (w) {
      var y =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
        S = {},
        O = function (C) {
          y && a.default[C]
            ? (S[C] = function () {
                for (var j = arguments.length, z = Array(j), H = 0; H < j; H++)
                  z[H] = arguments[H];
                return w.then(function (re) {
                  var ge = a.default[C],
                    sr = re.getPlayerState(),
                    ar = re[C].apply(re, z);
                  return ge.stateChangeRequired ||
                    (Array.isArray(ge.acceptableStates) &&
                      ge.acceptableStates.indexOf(sr) === -1)
                    ? new Promise(function (Dt) {
                        var dn = function _() {
                          var T = re.getPlayerState(),
                            R = void 0;
                          typeof ge.timeout == "number" &&
                            (R = setTimeout(function () {
                              re.removeEventListener("onStateChange", _), Dt();
                            }, ge.timeout)),
                            Array.isArray(ge.acceptableStates) &&
                              ge.acceptableStates.indexOf(T) !== -1 &&
                              (re.removeEventListener("onStateChange", _),
                              clearTimeout(R),
                              Dt());
                        };
                        re.addEventListener("onStateChange", dn);
                      }).then(function () {
                        return ar;
                      })
                    : ar;
                });
              })
            : (S[C] = function () {
                for (var j = arguments.length, z = Array(j), H = 0; H < j; H++)
                  z[H] = arguments[H];
                return w.then(function (re) {
                  return re[C].apply(re, z);
                });
              });
        },
        f = !0,
        c = !1,
        d = void 0;
      try {
        for (
          var m = o.default[Symbol.iterator](), k;
          !(f = (k = m.next()).done);
          f = !0
        ) {
          var x = k.value;
          O(x);
        }
      } catch (P) {
        (c = !0), (d = P);
      } finally {
        try {
          !f && m.return && m.return();
        } finally {
          if (c) throw d;
        }
      }
      return S;
    }),
    (t.default = v),
    (e.exports = t.default);
})(ni, ni.exports);
var mh = ni.exports;
(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var n =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (p) {
            return typeof p;
          }
        : function (p) {
            return p &&
              typeof Symbol == "function" &&
              p.constructor === Symbol &&
              p !== Symbol.prototype
              ? "symbol"
              : typeof p;
          },
    r = eh,
    l = a(r),
    o = lh,
    i = a(o),
    u = mh,
    s = a(u);
  function a(p) {
    return p && p.__esModule ? p : { default: p };
  }
  var h = void 0;
  (t.default = function (p) {
    var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      w = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
      y = (0, l.default)();
    if ((h || (h = (0, i.default)(y)), v.events))
      throw new Error("Event handlers cannot be overwritten.");
    if (typeof p == "string" && !document.getElementById(p))
      throw new Error('Element "' + p + '" does not exist.');
    v.events = s.default.proxyEvents(y);
    var S = new Promise(function (f) {
        if (
          (typeof p > "u" ? "undefined" : n(p)) === "object" &&
          p.playVideo instanceof Function
        ) {
          var c = p;
          f(c);
        } else
          h.then(function (d) {
            var m = new d.Player(p, v);
            return (
              y.on("ready", function () {
                f(m);
              }),
              null
            );
          });
      }),
      O = s.default.promisifyPlayer(S, w);
    return (O.on = y.on), (O.off = y.off), O;
  }),
    (e.exports = t.default);
})(ei, ei.exports);
var yh = ei.exports;
const gh = tr(yh);
var wh = Object.defineProperty,
  Sh = Object.defineProperties,
  kh = Object.getOwnPropertyDescriptors,
  Cs = Object.getOwnPropertySymbols,
  _h = Object.prototype.hasOwnProperty,
  Eh = Object.prototype.propertyIsEnumerable,
  xs = (e, t, n) =>
    t in e
      ? wh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  ai = (e, t) => {
    for (var n in t || (t = {})) _h.call(t, n) && xs(e, n, t[n]);
    if (Cs) for (var n of Cs(t)) Eh.call(t, n) && xs(e, n, t[n]);
    return e;
  },
  ci = (e, t) => Sh(e, kh(t)),
  Ph = (e, t, n) =>
    new Promise((r, l) => {
      var o = (s) => {
          try {
            u(n.next(s));
          } catch (a) {
            l(a);
          }
        },
        i = (s) => {
          try {
            u(n.throw(s));
          } catch (a) {
            l(a);
          }
        },
        u = (s) => (s.done ? r(s.value) : Promise.resolve(s.value).then(o, i));
      u((n = n.apply(e, t)).next());
    });
function Ch(e, t) {
  var n, r;
  if (e.videoId !== t.videoId) return !0;
  const l = ((n = e.opts) == null ? void 0 : n.playerVars) || {},
    o = ((r = t.opts) == null ? void 0 : r.playerVars) || {};
  return l.start !== o.start || l.end !== o.end;
}
function Ns(e = {}) {
  return ci(ai({}, e), {
    height: 0,
    width: 0,
    playerVars: ci(ai({}, e.playerVars), { autoplay: 0, start: 0, end: 0 }),
  });
}
function xh(e, t) {
  return e.videoId !== t.videoId || !bp(Ns(e.opts), Ns(t.opts));
}
function Nh(e, t) {
  var n, r, l, o;
  return (
    e.id !== t.id ||
    e.className !== t.className ||
    ((n = e.opts) == null ? void 0 : n.width) !==
      ((r = t.opts) == null ? void 0 : r.width) ||
    ((l = e.opts) == null ? void 0 : l.height) !==
      ((o = t.opts) == null ? void 0 : o.height) ||
    e.iframeClassName !== t.iframeClassName ||
    e.title !== t.title
  );
}
var Th = {
    videoId: "",
    id: "",
    className: "",
    iframeClassName: "",
    style: {},
    title: "",
    loading: void 0,
    opts: {},
    onReady: () => {},
    onError: () => {},
    onPlay: () => {},
    onPause: () => {},
    onEnd: () => {},
    onStateChange: () => {},
    onPlaybackRateChange: () => {},
    onPlaybackQualityChange: () => {},
  },
  zh = {
    videoId: b.string,
    id: b.string,
    className: b.string,
    iframeClassName: b.string,
    style: b.object,
    title: b.string,
    loading: b.oneOf(["lazy", "eager"]),
    opts: b.objectOf(b.any),
    onReady: b.func,
    onError: b.func,
    onPlay: b.func,
    onPause: b.func,
    onEnd: b.func,
    onStateChange: b.func,
    onPlaybackRateChange: b.func,
    onPlaybackQualityChange: b.func,
  },
  Qr = class extends Lr.Component {
    constructor(e) {
      super(e),
        (this.destroyPlayerPromise = void 0),
        (this.onPlayerReady = (t) => {
          var n, r;
          return (r = (n = this.props).onReady) == null ? void 0 : r.call(n, t);
        }),
        (this.onPlayerError = (t) => {
          var n, r;
          return (r = (n = this.props).onError) == null ? void 0 : r.call(n, t);
        }),
        (this.onPlayerStateChange = (t) => {
          var n, r, l, o, i, u, s, a;
          switch (
            ((r = (n = this.props).onStateChange) == null || r.call(n, t),
            t.data)
          ) {
            case Qr.PlayerState.ENDED:
              (o = (l = this.props).onEnd) == null || o.call(l, t);
              break;
            case Qr.PlayerState.PLAYING:
              (u = (i = this.props).onPlay) == null || u.call(i, t);
              break;
            case Qr.PlayerState.PAUSED:
              (a = (s = this.props).onPause) == null || a.call(s, t);
              break;
          }
        }),
        (this.onPlayerPlaybackRateChange = (t) => {
          var n, r;
          return (r = (n = this.props).onPlaybackRateChange) == null
            ? void 0
            : r.call(n, t);
        }),
        (this.onPlayerPlaybackQualityChange = (t) => {
          var n, r;
          return (r = (n = this.props).onPlaybackQualityChange) == null
            ? void 0
            : r.call(n, t);
        }),
        (this.destroyPlayer = () =>
          this.internalPlayer
            ? ((this.destroyPlayerPromise = this.internalPlayer
                .destroy()
                .then(() => (this.destroyPlayerPromise = void 0))),
              this.destroyPlayerPromise)
            : Promise.resolve()),
        (this.createPlayer = () => {
          if (typeof document > "u") return;
          if (this.destroyPlayerPromise) {
            this.destroyPlayerPromise.then(this.createPlayer);
            return;
          }
          const t = ci(ai({}, this.props.opts), {
            videoId: this.props.videoId,
          });
          (this.internalPlayer = gh(this.container, t)),
            this.internalPlayer.on("ready", this.onPlayerReady),
            this.internalPlayer.on("error", this.onPlayerError),
            this.internalPlayer.on("stateChange", this.onPlayerStateChange),
            this.internalPlayer.on(
              "playbackRateChange",
              this.onPlayerPlaybackRateChange
            ),
            this.internalPlayer.on(
              "playbackQualityChange",
              this.onPlayerPlaybackQualityChange
            ),
            (this.props.title || this.props.loading) &&
              this.internalPlayer.getIframe().then((n) => {
                this.props.title && n.setAttribute("title", this.props.title),
                  this.props.loading &&
                    n.setAttribute("loading", this.props.loading);
              });
        }),
        (this.resetPlayer = () => this.destroyPlayer().then(this.createPlayer)),
        (this.updatePlayer = () => {
          var t;
          (t = this.internalPlayer) == null ||
            t.getIframe().then((n) => {
              this.props.id
                ? n.setAttribute("id", this.props.id)
                : n.removeAttribute("id"),
                this.props.iframeClassName
                  ? n.setAttribute("class", this.props.iframeClassName)
                  : n.removeAttribute("class"),
                this.props.opts && this.props.opts.width
                  ? n.setAttribute("width", this.props.opts.width.toString())
                  : n.removeAttribute("width"),
                this.props.opts && this.props.opts.height
                  ? n.setAttribute("height", this.props.opts.height.toString())
                  : n.removeAttribute("height"),
                this.props.title
                  ? n.setAttribute("title", this.props.title)
                  : n.setAttribute("title", "YouTube video player"),
                this.props.loading
                  ? n.setAttribute("loading", this.props.loading)
                  : n.removeAttribute("loading");
            });
        }),
        (this.getInternalPlayer = () => this.internalPlayer),
        (this.updateVideo = () => {
          var t, n, r, l;
          if (typeof this.props.videoId > "u" || this.props.videoId === null) {
            (t = this.internalPlayer) == null || t.stopVideo();
            return;
          }
          let o = !1;
          const i = { videoId: this.props.videoId };
          if (
            ((n = this.props.opts) != null &&
              n.playerVars &&
              ((o = this.props.opts.playerVars.autoplay === 1),
              "start" in this.props.opts.playerVars &&
                (i.startSeconds = this.props.opts.playerVars.start),
              "end" in this.props.opts.playerVars &&
                (i.endSeconds = this.props.opts.playerVars.end)),
            o)
          ) {
            (r = this.internalPlayer) == null || r.loadVideoById(i);
            return;
          }
          (l = this.internalPlayer) == null || l.cueVideoById(i);
        }),
        (this.refContainer = (t) => {
          this.container = t;
        }),
        (this.container = null),
        (this.internalPlayer = null);
    }
    componentDidMount() {
      this.createPlayer();
    }
    componentDidUpdate(e) {
      return Ph(this, null, function* () {
        Nh(e, this.props) && this.updatePlayer(),
          xh(e, this.props) && (yield this.resetPlayer()),
          Ch(e, this.props) && this.updateVideo();
      });
    }
    componentWillUnmount() {
      this.destroyPlayer();
    }
    render() {
      return Lr.createElement(
        "div",
        { className: this.props.className, style: this.props.style },
        Lr.createElement("div", {
          id: this.props.id,
          className: this.props.iframeClassName,
          ref: this.refContainer,
        })
      );
    }
  },
  Ol = Qr;
Ol.propTypes = zh;
Ol.defaultProps = Th;
Ol.PlayerState = {
  UNSTARTED: -1,
  ENDED: 0,
  PLAYING: 1,
  PAUSED: 2,
  BUFFERING: 3,
  CUED: 5,
};
var Rh = Ol;
const Xc = ({ className: e, src: t, ...n }) =>
    N.jsx("div", {
      className: ye(Yp.player, e),
      ...n,
      children: N.jsx(Rh, { videoId: t }),
    }),
  Oh = "_box_108nc_1",
  Ts = { box: Oh },
  Zc = (e, t) => ({
    src: e.VIDEO[e.VIDEO.findIndex((r) => r.SRC.includes(t))].SRC,
  }),
  Lh = ({ className: e, ...t }) => {
    const { src: n } = Zc(iu, "AmQcxny4Tz4");
    return N.jsxs("div", {
      className: ye(Ts.video, e),
      ...t,
      children: [
        N.jsx(ur, { tag: "h1", children: "Фишка CSS 💡" }),
        N.jsxs("div", {
          className: Ts.box,
          children: [N.jsx(uu, { children: ou.VIDEO }), N.jsx(Xc, { src: n })],
        }),
      ],
    });
  },
  Ih = "_box_lnfo3_1",
  jh = "_popup_lnfo3_17",
  Dh = "_button_lnfo3_41",
  oo = { box: Ih, popup: jh, button: Dh },
  Mh = ({ className: e, active: t, setActive: n, ...r }) =>
    N.jsxs("div", {
      className: ye(oo.quest, e),
      ...r,
      children: [
        N.jsx(ur, { tag: "h1", children: "JavaScript 🧐" }),
        N.jsxs("div", {
          className: oo.box,
          children: [
            N.jsx(uu, { children: ou.QUEST }),
            N.jsx(Hc, {
              className: oo.button,
              onClick: () => n(!t),
              children: "Перейти к заданию",
            }),
          ],
        }),
      ],
    }),
  Ah = "_popup_euzai_1",
  Fh = { popup: Ah },
  Uh = ({ children: e, className: t, ...n }) =>
    N.jsx("div", { className: ye(t, Fh.popup), ...n, children: e }),
  Vh = "_calc_11vds_1",
  $h = { calc: Vh },
  Bh = ({ className: e, active: t, setActive: n, ...r }) => {
    const { src: l } = Zc(iu, "NSluVEdrLek");
    return N.jsx(Uh, {
      onClick: () => {
        n(!t);
      },
      children: N.jsxs("div", {
        className: ye($h.calc, e),
        ...r,
        onClick: (o) => {
          o.stopPropagation();
        },
        children: [
          N.jsx(ur, { tag: "h1", children: "Калькулятор" }),
          N.jsx(Xc, { src: l }),
        ],
      }),
    });
  };
function Qh() {
  const [e, t] = vl.useState(!1);
  return N.jsxs("div", {
    className: Ep.app,
    children: [
      N.jsx(Ap, {}),
      N.jsx(Up, {}),
      N.jsx(Lh, {}),
      N.jsx(Mh, { active: e, setActive: t }),
      e ? N.jsx(Bh, { active: e, setActive: t }) : null,
    ],
  });
}
io.createRoot(document.getElementById("root")).render(
  N.jsx(Lr.StrictMode, { children: N.jsx(Qh, {}) })
);
