'use strict';
var n = require('react'),
    e = require('styled-components'),
    t = require('@/assets/next.svg'),
    r = require('@/assets/prev.svg'),
    o = require('react-dom'),
    a = require('@/assets/calendar.svg'),
    i = require('@/assets/clear.svg'),
    c = function (n, e) {
        return (
            (c =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                    function (n, e) {
                        n.__proto__ = e;
                    }) ||
                function (n, e) {
                    for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t]);
                }),
            c(n, e)
        );
    };
var u = function () {
    return (
        (u =
            Object.assign ||
            function (n) {
                for (var e, t = 1, r = arguments.length; t < r; t++)
                    for (var o in (e = arguments[t]))
                        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                return n;
            }),
        u.apply(this, arguments)
    );
};
function s(n, e, t) {
    if (t || 2 === arguments.length)
        for (var r, o = 0, a = e.length; o < a; o++)
            (!r && o in e) || (r || (r = Array.prototype.slice.call(e, 0, o)), (r[o] = e[o]));
    return n.concat(r || Array.prototype.slice.call(e));
}
function l(n, e) {
    return Object.defineProperty ? Object.defineProperty(n, 'raw', { value: e }) : (n.raw = e), n;
}
'function' == typeof SuppressedError && SuppressedError;
var d,
    f,
    m,
    h,
    p,
    g,
    y,
    x,
    v = {
        primary: '#FFFFFF',
        text: '#333333',
        month: '#000000',
        border: '#E1E1E1',
        borderDash: '#9747FF',
        chosenDay: '#2F80ED',
        firstDayRange: '#2F80ED99',
        middleDayRange: '#2F80ED1A',
        disabledDay: '#AAAAAA',
        weekendDay: '#FF0000',
        holiday: '#CD5C5C',
        taskMarkColor: '#32CD32',
        errorText: '#B91414',
    },
    b = {
        fontFamily: { openSans: "'Open Sans', sans-serif" },
        fontSize: { xxl: 21, xl: 18, l: 15, m: 14, s: 13 },
        fontWeight: { l: 700, m: 600, s: 400 },
    },
    D = { xxs: '0.1rem', xs: '0.3125rem', s: '0.5rem', m: '0.625rem', xm: '0.9375rem', l: '1rem' },
    w = e.createGlobalStyle(
        d ||
            (d = l(
                [
                    '\n    * {\n        font-family: ',
                    ';\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n        scroll-behavior: smooth;\n        outline: none;\n        color: ',
                    ';\n        user-select: none;\n    }\n',
                ],
                [
                    '\n    * {\n        font-family: ',
                    ';\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n        scroll-behavior: smooth;\n        outline: none;\n        color: ',
                    ';\n        user-select: none;\n    }\n',
                ],
            )),
        b.fontFamily.openSans,
        v.text,
    ),
    S = e.div(
        f ||
            (f = l(
                [
                    '\n    font-size: ',
                    'px;\n    font-weight: ',
                    ';\n    text-align: center;\n    padding: ',
                    ' 6px;\n    border: 1px solid ',
                    ';\n    border-radius: ',
                    ';\n    cursor: pointer;\n\n    &:hover {\n        border: 1px dashed ',
                    ';\n    }\n',
                ],
                [
                    '\n    font-size: ',
                    'px;\n    font-weight: ',
                    ';\n    text-align: center;\n    padding: ',
                    ' 6px;\n    border: 1px solid ',
                    ';\n    border-radius: ',
                    ';\n    cursor: pointer;\n\n    &:hover {\n        border: 1px dashed ',
                    ';\n    }\n',
                ],
            )),
        b.fontSize.s,
        b.fontWeight.m,
        D.s,
        v.primary,
        D.m,
        v.borderDash,
    ),
    k = e.img(
        m ||
            (m = l(
                ['\n    width: 16px;\n    height: 16px;\n    color: ', ';\n    cursor: pointer;\n'],
                ['\n    width: 16px;\n    height: 16px;\n    color: ', ';\n    cursor: pointer;\n'],
            )),
        v.disabledDay,
    ),
    E = {
        colors: u({}, v),
        fonts: u({}, b),
        gaps: u({}, D),
        sizes: u(
            {},
            { cellSize: '30px', calendarWidth: '230px', modalSize: '400px', tablet: '784px' },
        ),
    },
    C = function (t) {
        return function (r) {
            return n.createElement(
                e.ThemeProvider,
                { theme: E },
                n.createElement(w, null),
                n.createElement(t, u({}, r)),
            );
        };
    },
    z = e.css(
        h ||
            (h = l(
                ['\n    display: flex;\n    justify-content: center;\n    align-items: center;\n'],
                ['\n    display: flex;\n    justify-content: center;\n    align-items: center;\n'],
            )),
    ),
    T = e.css(
        p ||
            (p = l(
                [
                    '\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n',
                ],
                [
                    '\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n',
                ],
            )),
    ),
    M = function (n) {
        return n.theme.gaps.l;
    },
    W = e.div(
        g ||
            (g = l(
                [
                    '\n    max-width: 100vw;\n    min-height: 90vh;\n    ',
                    ';\n    flex-direction: column;\n    gap: ',
                    ';\n    padding: 0 ',
                    ';\n    text-align: center;\n',
                ],
                [
                    '\n    max-width: 100vw;\n    min-height: 90vh;\n    ',
                    ';\n    flex-direction: column;\n    gap: ',
                    ';\n    padding: 0 ',
                    ';\n    text-align: center;\n',
                ],
            )),
        z,
        M,
        M,
    ),
    F = e.p(
        y ||
            (y = l(
                ['\n    color: ', ';\n    font-size: ', 'px;\n'],
                ['\n    color: ', ';\n    font-size: ', 'px;\n'],
            )),
        function (n) {
            return n.theme.colors.errorText;
        },
        function (n) {
            return n.theme.fonts.fontSize.xxl;
        },
    );
e.span(
    x ||
        (x = l(
            [
                '\n    font-size: ',
                'px;\n\n    @media (max-width: ',
                ') {\n        font-size: ',
                'px;\n    }\n',
            ],
            [
                '\n    font-size: ',
                'px;\n\n    @media (max-width: ',
                ') {\n        font-size: ',
                'px;\n    }\n',
            ],
        )),
    function (n) {
        return n.theme.fonts.fontSize.l;
    },
    function (n) {
        return n.theme.sizes.tablet;
    },
    function (n) {
        return n.theme.fonts.fontSize.s;
    },
);
var Y,
    $,
    A = C(
        (function (e) {
            function t(n) {
                var t = e.call(this, n) || this;
                return (t.state = { hasError: !1, error: null }), t;
            }
            return (
                (function (n, e) {
                    if ('function' != typeof e && null !== e)
                        throw new TypeError(
                            'Class extends value ' + String(e) + ' is not a constructor or null',
                        );
                    function t() {
                        this.constructor = n;
                    }
                    c(n, e),
                        (n.prototype =
                            null === e ? Object.create(e) : ((t.prototype = e.prototype), new t()));
                })(t, e),
                (t.getDerivedStateFromError = function (n) {
                    return { hasError: !0, error: n };
                }),
                (t.prototype.render = function () {
                    var e = this.state,
                        t = e.hasError,
                        r = e.error;
                    return t
                        ? n.createElement(
                              W,
                              { 'data-testid': 'error-boundary' },
                              n.createElement('h2', null, 'Oops! Something went wrong'),
                              n.createElement(F, null, r && r.toString()),
                          )
                        : this.props.children;
                }),
                t
            );
        })(n.Component),
    ),
    R = n.createContext({ range: void 0, setRange: function () {} }),
    O = function () {
        return n.useContext(R);
    },
    I = function (n) {
        return n.theme.gaps.s;
    },
    N = e.button(
        Y ||
            (Y = l(
                [
                    '\n    font-family: ',
                    ';\n    font-size: ',
                    ';\n    font-weight: ',
                    ';\n    width: 100%;\n    min-width: ',
                    ';\n    background-color: ',
                    ';\n    color: ',
                    ';\n    border-radius: 0 0 ',
                    ' ',
                    ';\n    border: 1px solid ',
                    ';\n    padding: ',
                    ' 0;\n    transition: background-color 0.3s;\n    cursor: pointer;\n\n    &:hover {\n        background-color: ',
                    ';\n    }\n',
                ],
                [
                    '\n    font-family: ',
                    ';\n    font-size: ',
                    ';\n    font-weight: ',
                    ';\n    width: 100%;\n    min-width: ',
                    ';\n    background-color: ',
                    ';\n    color: ',
                    ';\n    border-radius: 0 0 ',
                    ' ',
                    ';\n    border: 1px solid ',
                    ';\n    padding: ',
                    ' 0;\n    transition: background-color 0.3s;\n    cursor: pointer;\n\n    &:hover {\n        background-color: ',
                    ';\n    }\n',
                ],
            )),
        function (n) {
            return n.theme.fonts.fontFamily.openSans;
        },
        function (n) {
            return n.theme.fonts.fontSize.s;
        },
        function (n) {
            return n.theme.fonts.fontWeight.m;
        },
        function (n) {
            return n.theme.sizes.calendarWidth;
        },
        function (n) {
            return n.theme.colors.primary;
        },
        function (n) {
            return n.theme.colors.text;
        },
        I,
        I,
        function (n) {
            return n.theme.colors.border;
        },
        function (n) {
            return n.theme.gaps.m;
        },
        function (n) {
            return n.theme.colors.middleDayRange;
        },
    ),
    j = n.memo(function (e) {
        var t = e.text,
            r = e.onButtonClick;
        return n.createElement(N, { onClick: r }, t);
    }),
    P = new Date(),
    V = n.createContext({
        today: P,
        selectedDay: void 0,
        selectedMonth: P.getMonth(),
        selectedYear: P.getFullYear(),
        calendarType: 'Day',
        setSelectedDay: function () {},
        setSelectedMonth: function () {},
        setSelectedYear: function () {},
        setCalendarType: function () {},
    }),
    H = function () {
        return n.useContext(V);
    },
    B = /^[0-9.]*$/,
    J = /^(\d{2})\.(\d{2})\.(\d{4})$/,
    _ = {
        Monday: 'Mo',
        Tuesday: 'Tu',
        Wednesday: 'We',
        Thursday: 'Th',
        Friday: 'Fr',
        Saturday: 'Sa',
        Sunday: 'Su',
    };
!(function (n) {
    (n[(n.January = 0)] = 'January'),
        (n[(n.February = 1)] = 'February'),
        (n[(n.March = 2)] = 'March'),
        (n[(n.April = 3)] = 'April'),
        (n[(n.May = 4)] = 'May'),
        (n[(n.June = 5)] = 'June'),
        (n[(n.July = 6)] = 'July'),
        (n[(n.August = 7)] = 'August'),
        (n[(n.September = 8)] = 'September'),
        (n[(n.October = 9)] = 'October'),
        (n[(n.November = 10)] = 'November'),
        (n[(n.December = 11)] = 'December');
})($ || ($ = {}));
var q,
    U,
    K,
    G,
    L,
    Q,
    X,
    Z,
    nn,
    en,
    tn,
    rn,
    on,
    an,
    cn,
    un,
    sn,
    ln,
    dn,
    fn,
    mn,
    hn,
    pn,
    gn,
    yn,
    xn,
    vn,
    bn,
    Dn,
    wn,
    Sn,
    kn = function (n, e) {
        return new Date(n, e + 1, 0).getDate();
    },
    En = function (n, e, t) {
        var r = kn(e, n),
            o = 'Monday' === t,
            a = (function (n, e) {
                return new Date(n, e, 1).getDay();
            })(e, n),
            i = o ? (7 + a - 1) % 7 : (7 + a) % 7,
            c = (function (n, e) {
                return 0 === e ? { month: 11, year: n - 1 } : { month: e - 1, year: n };
            })(e, n),
            u = c.month,
            l = c.year,
            d = (function (n, e) {
                return 11 === e ? { month: 0, year: n + 1 } : { month: e + 1, year: n };
            })(e, n),
            f = d.month,
            m = d.year,
            h = kn(l, u),
            p = Array.from({ length: i }, function (n, e) {
                return new Date(l, u, h - i + e + 1);
            }),
            g = Array.from({ length: r }, function (t, r) {
                return new Date(e, n, r + 1);
            }),
            y = r + i,
            x = 7 * Math.ceil(y / 7) - y,
            v = Array.from({ length: x }, function (n, e) {
                return new Date(m, f, e + 1);
            });
        return s(s(s([], p, !0), g, !0), v, !0);
    },
    Cn = function (n, e) {
        return $[e] === n;
    },
    zn = function (n, e) {
        return (
            !!e &&
            n.getDate() === e.getDate() &&
            n.getMonth() === e.getMonth() &&
            n.getFullYear() === e.getFullYear()
        );
    },
    Tn = function (n) {
        if (!n) return [];
        var e = localStorage.getItem(n);
        return e ? JSON.parse(e) : [];
    },
    Mn = function (n, e) {
        localStorage.setItem(n, JSON.stringify(e));
    },
    Wn = function (n) {
        if (!n) return new Date().toDateString();
        var e = n.getDate().toString().padStart(2, '0'),
            t = (n.getMonth() + 1).toString().padStart(2, '0'),
            r = n.getFullYear().toString();
        return ''.concat(e, '.').concat(t, '.').concat(r);
    },
    Fn = function (n) {
        return { rangeStart: n, rangeEnd: void 0 };
    },
    Yn = function (n, e) {
        return n >= e.rangeStart
            ? u(u({}, e), { rangeEnd: n })
            : { rangeStart: n, rangeEnd: e.rangeStart };
    },
    $n = function (n, e) {
        var t = new Date(+e.rangeStart),
            r = new Date(+e.rangeEnd);
        return n >= t && n <= r
            ? An(n, e)
            : n < t
              ? { rangeStart: n, rangeEnd: e.rangeEnd }
              : { rangeStart: e.rangeStart, rangeEnd: n };
    },
    An = function (n, e) {
        var t = new Date(+e.rangeStart);
        return Math.abs(n.getTime() - t.getTime()) <= Math.abs(n.getTime() - e.rangeEnd.getTime())
            ? { rangeStart: n, rangeEnd: e.rangeEnd }
            : { rangeStart: e.rangeStart, rangeEnd: n };
    },
    Rn = function (n) {
        return n.theme.colors.text;
    },
    On = function (n) {
        return n.theme.colors.chosenDay;
    },
    In = function (n) {
        return n.theme.colors.disabledDay;
    },
    Nn = function (n) {
        return n.theme.colors.firstDayRange;
    },
    jn = function (n) {
        return n.theme.colors.middleDayRange;
    },
    Pn = function (n) {
        return n.theme.colors.primary;
    },
    Vn = function (n) {
        return n.theme.colors.weekendDay;
    },
    Hn = function (n) {
        return n.theme.colors.holiday;
    },
    Bn = e.div(
        q ||
            (q = l(
                [
                    '\n    position: relative;\n    font-size: ',
                    'px;\n    font-weight: ',
                    ';\n    text-align: center;\n    padding: ',
                    ' 6px;\n    max-width: ',
                    ';\n    color: ',
                    ';\n    background-color: ',
                    ';\n    border: 1px solid ',
                    ';\n    border-color: ',
                    ';\n    border-radius: ',
                    ';\n    cursor: pointer;\n\n    &:hover {\n        border: 1px dashed ',
                    ';\n    }\n',
                ],
                [
                    '\n    position: relative;\n    font-size: ',
                    'px;\n    font-weight: ',
                    ';\n    text-align: center;\n    padding: ',
                    ' 6px;\n    max-width: ',
                    ';\n    color: ',
                    ';\n    background-color: ',
                    ';\n    border: 1px solid ',
                    ';\n    border-color: ',
                    ';\n    border-radius: ',
                    ';\n    cursor: pointer;\n\n    &:hover {\n        border: 1px dashed ',
                    ';\n    }\n',
                ],
            )),
        function (n) {
            return n.theme.fonts.fontSize.s;
        },
        function (n) {
            return n.theme.fonts.fontWeight.m;
        },
        function (n) {
            return n.theme.gaps.s;
        },
        function (n) {
            return n.theme.sizes.cellSize;
        },
        function (n) {
            return (function (n, e, t, r, o) {
                switch (!0) {
                    case 'Between' === o:
                        return On;
                    case 'Start' === o:
                    case 'End' === o:
                    case t:
                        return Pn;
                    case r:
                        return Hn;
                    case !n:
                        return In;
                    case e:
                        return Vn;
                    default:
                        return Rn;
                }
            })(n.$isActive, n.$isWeekend, n.$isDaySelected, n.$isHoliday, n.$range);
        },
        function (n) {
            return (function (n, e) {
                switch (!0) {
                    case n:
                        return On;
                    case 'Start' === e:
                        return Nn;
                    case 'Between' === e:
                        return jn;
                    case 'End' === e:
                        return On;
                    default:
                        return Pn;
                }
            })(n.$isDaySelected, n.$range);
        },
        function (n) {
            return n.theme.colors.primary;
        },
        function (n) {
            return n.$isToday
                ? function (n) {
                      return n.theme.colors.chosenDay;
                  }
                : 'none';
        },
        function (n) {
            var e = n.$range;
            return e && 'Start' === e
                ? '10px 0 0 10px'
                : 'Between' === e
                  ? 0
                  : 'End' === e
                    ? '0 10px 10px 0'
                    : '10px';
        },
        function (n) {
            return n.theme.colors.borderDash;
        },
    ),
    Jn = e.div(
        U ||
            (U = l(
                [
                    '\n    position: absolute;\n    left: 40%;\n    top: 2px;\n    width: 6px;\n    height: 6px;\n    border-radius: 50%;\n    border: 1px solid ',
                    ';\n    background-color: ',
                    ';\n',
                ],
                [
                    '\n    position: absolute;\n    left: 40%;\n    top: 2px;\n    width: 6px;\n    height: 6px;\n    border-radius: 50%;\n    border: 1px solid ',
                    ';\n    background-color: ',
                    ';\n',
                ],
            )),
        function (n) {
            return n.theme.colors.primary;
        },
        function (n) {
            return n.theme.colors.taskMarkColor;
        },
    ),
    _n = C(function (e) {
        var t,
            r = e.day,
            o = e.isActive,
            a = e.isWeekend,
            i = void 0 !== a && a,
            c = e.isToday,
            u = e.isHoliday,
            s = void 0 !== u && u,
            l = e.isWithRange,
            d = void 0 !== l && l,
            f = e.isWithSelectedDay,
            m = void 0 !== f && f,
            h = e.isWithTasks,
            p = void 0 !== h && h,
            g = e.minValue,
            y = void 0 === g ? void 0 : g,
            x = e.maxValue,
            v = void 0 === x ? void 0 : x,
            b = H(),
            D = b.selectedDay,
            w = b.setSelectedDay,
            S = b.setSelectedMonth,
            k = b.setSelectedYear,
            E = O(),
            C = E.range,
            z = E.setRange,
            T = n.useCallback(
                function () {
                    (y &&
                        v &&
                        !(function (n, e, t) {
                            return n.getTime() >= e.getTime() && n.getTime() <= t.getTime();
                        })(r, y, v)) ||
                        (d
                            ? z(function (n) {
                                  return (function (n, e) {
                                      return e && e.rangeStart
                                          ? e.rangeEnd
                                              ? $n(n, e)
                                              : Yn(n, e)
                                          : Fn(n);
                                  })(r, n);
                              })
                            : m && (o || (S(r.getMonth()), k(r.getFullYear())), w(r)));
                },
                [m, d, o, r, y, v],
            ),
            M = Tn(Wn(r));
        return n.createElement(
            Bn,
            {
                'data-testid': 'day-of-week',
                $isActive: o,
                $isWeekend: i,
                $isToday: c,
                $isHoliday: s,
                $range:
                    ((t = r),
                    (function (n, e) {
                        var t = e || {},
                            r = t.rangeStart,
                            o = t.rangeEnd;
                        if (r && n.getTime() === r.getTime()) return 'Start';
                        if (r && o) {
                            if (n.getTime() === o.getTime()) return 'End';
                            if (n > r && n < o) return 'Between';
                        }
                    })(t, C)),
                onClick: T,
                $isDaySelected: zn(r, D),
            },
            p && 0 !== M.length && n.createElement(Jn, null),
            r.getDate(),
        );
    }),
    qn = function (n) {
        return n.theme.colors.chosenDay;
    },
    Un = function (n) {
        return n.theme.colors.primary;
    },
    Kn = function (n) {
        return n.theme.colors.text;
    },
    Gn = e(S)(
        K ||
            (K = l(
                ['\n    color: ', ';\n    background-color: ', ';\n'],
                ['\n    color: ', ';\n    background-color: ', ';\n'],
            )),
        function (n) {
            return n.$isMonthSelected ? Un : Kn;
        },
        function (n) {
            return n.$isMonthSelected ? qn : Un;
        },
    ),
    Ln = C(function (e) {
        var t = e.month,
            r = e.isSelected,
            o = H(),
            a = o.setCalendarType,
            i = o.setSelectedMonth,
            c = n.useCallback(function () {
                a('Day'),
                    i(
                        (function (n) {
                            return $[n];
                        })(t),
                    );
            }, []);
        return n.createElement(
            Gn,
            { 'data-testid': 'month-in-grid', $isMonthSelected: r, onClick: c },
            t,
        );
    }),
    Qn = e.div(
        G ||
            (G = l(
                [
                    '\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(7, 1fr);\n',
                ],
                [
                    '\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(7, 1fr);\n',
                ],
            )),
    ),
    Xn = e.div(
        L ||
            (L = l(
                [
                    '\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n',
                ],
                [
                    '\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n',
                ],
            )),
    ),
    Zn = e.div(
        Q ||
            (Q = l(
                [
                    '\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n',
                ],
                [
                    '\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n',
                ],
            )),
    ),
    ne = function (n) {
        return n.theme.colors.chosenDay;
    },
    ee = function (n) {
        return n.theme.colors.primary;
    },
    te = function (n) {
        return n.theme.colors.text;
    },
    re = e(S)(
        X ||
            (X = l(
                ['\n    color: ', ';\n    background-color: ', ';\n'],
                ['\n    color: ', ';\n    background-color: ', ';\n'],
            )),
        function (n) {
            return n.$isYearSelected ? ee : te;
        },
        function (n) {
            return n.$isYearSelected ? ne : ee;
        },
    ),
    oe = C(function (e) {
        var t = e.year,
            r = e.isSelected,
            o = H(),
            a = o.setCalendarType,
            i = o.setSelectedYear,
            c = n.useCallback(function () {
                a('Day'), i(t);
            }, []);
        return n.createElement(
            re,
            { 'data-testid': 'year-in-grid', $isYearSelected: r, onClick: c },
            t,
        );
    }),
    ae = function (e) {
        var t = e.isHolidayDate,
            r = e.isWithRange,
            o = e.isDayWeekend,
            a = e.isWithSelectedDay,
            i = e.isSundayFirst,
            c = void 0 !== i && i,
            u = e.isWithTasks,
            s = e.minValue,
            l = e.maxValue,
            d = H(),
            f = d.today,
            m = d.selectedMonth,
            h = d.selectedYear,
            p = d.calendarType,
            g = c ? 'Sunday' : 'Monday',
            y = n.useMemo(
                function () {
                    if ('Day' === p) return En(m, h, g);
                },
                [p, h, m, g],
            ),
            x = n.useMemo(
                function () {
                    if ('Month' === p)
                        return Object.values($).filter(function (n) {
                            return 'string' == typeof n;
                        });
                },
                [p, m],
            ),
            v = n.useMemo(
                function () {
                    if ('Year' === p)
                        return (function (n) {
                            for (var e = [], t = n - 10; t < n + 10; t++) e.push(t);
                            return e;
                        })(h);
                },
                [p, h],
            );
        return n.createElement(
            n.Fragment,
            null,
            y &&
                n.createElement(
                    Qn,
                    { 'data-testid': 'data-grid-container' },
                    y.map(function (e) {
                        return n.createElement(_n, {
                            key: e.getTime(),
                            day: e,
                            isActive:
                                ((i = e),
                                (c = m),
                                (d = h),
                                i.getMonth() === c && i.getFullYear() === d),
                            isWeekend: o && o(e),
                            isToday: zn(e, f),
                            isHoliday: t && t(e),
                            isWithRange: r,
                            isWithSelectedDay: a,
                            isWithTasks: u,
                            minValue: s,
                            maxValue: l,
                        });
                        var i, c, d;
                    }),
                ),
            x &&
                n.createElement(
                    Xn,
                    null,
                    x.map(function (e) {
                        return n.createElement(Ln, { key: e, month: e, isSelected: Cn(e, m) });
                    }),
                ),
            v &&
                n.createElement(
                    Zn,
                    null,
                    v.map(function (e) {
                        return n.createElement(oe, { key: e, year: e, isSelected: e === h });
                    }),
                ),
        );
    },
    ie = e.span(
        Z ||
            (Z = l(
                [
                    '\n    text-align: center;\n    font-size: ',
                    'px;\n    font-weight: ',
                    ';\n    padding: ',
                    ' 6px;\n',
                ],
                [
                    '\n    text-align: center;\n    font-size: ',
                    'px;\n    font-weight: ',
                    ';\n    padding: ',
                    ' 6px;\n',
                ],
            )),
        function (n) {
            return n.theme.fonts.fontSize.m;
        },
        function (n) {
            return n.theme.fonts.fontWeight.l;
        },
        function (n) {
            return n.theme.gaps.s;
        },
    ),
    ce = function (e) {
        var t = e.day;
        return n.createElement(ie, null, t);
    },
    ue = e.div(
        nn ||
            (nn = l(
                ['\n    display: grid;\n    grid-template-columns: repeat(7, ', ');\n'],
                ['\n    display: grid;\n    grid-template-columns: repeat(7, ', ');\n'],
            )),
        function (n) {
            return n.theme.sizes.cellSize;
        },
    ),
    se = C(function (e) {
        var t = e.isSundayFirst,
            r = void 0 !== t && t,
            o = n.useMemo(
                function () {
                    var n = Object.values(_);
                    return r ? s([n[6]], n.slice(0, 6), !0) : n;
                },
                [r],
            );
        return n.createElement(
            ue,
            null,
            o.map(function (e) {
                return n.createElement(ce, { key: e, day: e });
            }),
        );
    }),
    le = e.div(
        en ||
            (en = l(
                [
                    '\n    width: 100%;\n    ',
                    ';\n    padding: ',
                    ' 0;\n\n    & svg:hover {\n        cursor: pointer;\n    }\n',
                ],
                [
                    '\n    width: 100%;\n    ',
                    ';\n    padding: ',
                    ' 0;\n\n    & svg:hover {\n        cursor: pointer;\n    }\n',
                ],
            )),
        T,
        function (n) {
            return n.theme.gaps.m;
        },
    ),
    de = e.h3(
        tn ||
            (tn = l(
                [
                    '\n    font-family: ',
                    ';\n    font-size: ',
                    'px;\n    font-weight: ',
                    ';\n    color: ',
                    ';\n    cursor: pointer;\n',
                ],
                [
                    '\n    font-family: ',
                    ';\n    font-size: ',
                    'px;\n    font-weight: ',
                    ';\n    color: ',
                    ';\n    cursor: pointer;\n',
                ],
            )),
        function (n) {
            return n.theme.fonts.fontFamily.openSans;
        },
        function (n) {
            return n.theme.fonts.fontSize.m;
        },
        function (n) {
            return n.theme.fonts.fontWeight.l;
        },
        function (n) {
            return n.theme.colors.month;
        },
    ),
    fe = e.span(
        rn ||
            (rn = l(
                ['\n    &:hover {\n        color: ', ';\n    }\n'],
                ['\n    &:hover {\n        color: ', ';\n    }\n'],
            )),
        function (n) {
            return n.theme.colors.chosenDay;
        },
    ),
    me = e.span(
        on ||
            (on = l(
                ['\n    &:hover {\n        color: ', ';\n    }\n'],
                ['\n    &:hover {\n        color: ', ';\n    }\n'],
            )),
        function (n) {
            return n.theme.colors.chosenDay;
        },
    ),
    he = e.img(
        an ||
            (an = l(
                ['\n    color: ', ';\n    cursor: pointer;\n'],
                ['\n    color: ', ';\n    cursor: pointer;\n'],
            )),
        function (n) {
            return n.theme.colors.month;
        },
    ),
    pe = function () {
        var e = H(),
            o = e.selectedMonth,
            a = e.selectedYear,
            i = e.calendarType,
            c = e.setSelectedMonth,
            u = e.setSelectedYear,
            s = e.setCalendarType,
            l = n.useCallback(
                function (n) {
                    return function () {
                        'Day' === i &&
                            (function (n, e, t, r, o, a) {
                                var i = t,
                                    c = e;
                                'Day' === a &&
                                    ('next' === n
                                        ? (c = (e + 1) % 12) < e && i++
                                        : (c = (e + 11) % 12) > e && i--),
                                    o(i),
                                    r(c);
                            })(n, o, a, c, u, i),
                            'Year' === i &&
                                (function (n, e, t) {
                                    t('next' === n ? e + 20 : e - 20);
                                })(n, a, u);
                    };
                },
                [o, a, c, u, i],
            ),
            d = n.useCallback(
                function (n) {
                    return function () {
                        s(n);
                    };
                },
                [s],
            );
        return n.createElement(
            le,
            { 'data-testid': 'month-slider' },
            n.createElement(he, { src: r, alt: 'prevMonth', onClick: l('prev') }),
            n.createElement(
                de,
                null,
                (function () {
                    switch (i) {
                        case 'Day':
                            return n.createElement(
                                n.Fragment,
                                null,
                                n.createElement(fe, { onClick: d('Month') }, $[o], ' '),
                                n.createElement(me, { onClick: d('Year') }, a),
                            );
                        case 'Month':
                            return n.createElement(fe, { onClick: d('Month') }, 'Months');
                        case 'Year':
                            return n.createElement(
                                fe,
                                { onClick: d('Year') },
                                a - 10,
                                ' - ',
                                a + 9,
                            );
                        default:
                            return null;
                    }
                })(),
            ),
            n.createElement(he, { src: t, alt: 'nextMonth', onClick: l('next') }),
        );
    },
    ge = e.div(
        cn ||
            (cn = l(
                [
                    '\n    ',
                    ';\n    width: 100%;\n    max-width: ',
                    ';\n    flex-direction: column;\n    border: 1px solid ',
                    ';\n    border-radius: ',
                    ';\n    padding: ',
                    ';\n',
                ],
                [
                    '\n    ',
                    ';\n    width: 100%;\n    max-width: ',
                    ';\n    flex-direction: column;\n    border: 1px solid ',
                    ';\n    border-radius: ',
                    ';\n    padding: ',
                    ';\n',
                ],
            )),
        z,
        function (n) {
            return n.theme.sizes.calendarWidth;
        },
        function (n) {
            return n.theme.colors.border;
        },
        function (n) {
            var e = n.theme,
                t = n.$isRangeExist,
                r = n.$isWithTasks;
            return t || r ? ''.concat(e.gaps.s, ' ').concat(e.gaps.s, ' 0 0') : e.gaps.s;
        },
        function (n) {
            return n.theme.gaps.m;
        },
    ),
    ye = C(function (e) {
        var t = e.isHolidayDate,
            r = e.isWithRange,
            o = e.isDayWeekend,
            a = e.isWithSelectedDay,
            i = e.isSundayFirst,
            c = e.isWithTasks,
            u = e.minValue,
            s = e.maxValue,
            l = O(),
            d = l.range,
            f = l.setRange,
            m = n.useCallback(
                function () {
                    f(void 0);
                },
                [f],
            ),
            h = r && !!(null == d ? void 0 : d.rangeStart) && !!(null == d ? void 0 : d.rangeEnd);
        return n.createElement(
            A,
            null,
            n.createElement(
                ge,
                { $isRangeExist: h, $isWithTasks: c, 'data-testid': 'calendar' },
                n.createElement(pe, null),
                n.createElement(se, { isSundayFirst: i }),
                n.createElement(ae, {
                    isHolidayDate: t,
                    isWithRange: r,
                    isWithSelectedDay: a,
                    isSundayFirst: i,
                    isDayWeekend: o,
                    isWithTasks: c,
                    minValue: u,
                    maxValue: s,
                }),
            ),
            h && n.createElement(j, { text: 'Clear Interval', onButtonClick: m }),
        );
    }),
    xe = (function () {
        function n() {
            this.calendar = ye;
        }
        return (
            (n.prototype.addDecorator = function (n) {
                this.calendar = n(this.calendar);
            }),
            (n.prototype.getCalendar = function () {
                return this.calendar;
            }),
            n
        );
    })(),
    ve = [
        { name: "New Year's Day", date: new Date('2024-01-01') },
        { name: 'Orthodox Christmas Day', date: new Date('2024-01-07') },
        { name: 'Defender of the Fatherland Day', date: new Date('2024-02-23') },
        { name: "International Women's Day", date: new Date('2024-03-08') },
        { name: 'Constitution Day', date: new Date('2024-03-15') },
        { name: 'Day of Unity of the Peoples of Belarus and Russia', date: new Date('2024-04-02') },
        { name: 'International Labour Day', date: new Date('2024-05-01') },
        { name: 'Commemoration Day', date: new Date('2024-05-03') },
        { name: 'Victory Day', date: new Date('2024-05-09') },
        { name: 'Summer Solstice', date: new Date('2024-06-21') },
        { name: 'Independence Day', date: new Date('2024-07-03') },
        { name: 'National Unity Day', date: new Date('2024-09-17') },
        { name: "Mother's Day", date: new Date('2024-10-14') },
        { name: 'October Revolution Day', date: new Date('2024-11-07') },
        { name: 'Winter Solstice', date: new Date('2024-12-21') },
        { name: 'Christmas Day', date: new Date('2024-12-25') },
    ],
    be = function (n) {
        return ve.some(function (e) {
            return n.getDate() === e.date.getDate() && n.getMonth() === e.date.getMonth();
        });
    },
    De = e.div(
        un ||
            (un = l(
                ['\n    ', ';\n    gap: ', ';\n    width: 100%;\n    margin-bottom: ', ';\n'],
                ['\n    ', ';\n    gap: ', ';\n    width: 100%;\n    margin-bottom: ', ';\n'],
            )),
        z,
        function (n) {
            return n.theme.gaps.s;
        },
        function (n) {
            return n.theme.gaps.l;
        },
    ),
    we = e.input(
        sn ||
            (sn = l(
                [
                    '\n    font-size: ',
                    'px;\n    font-weight: ',
                    ';\n    margin: ',
                    ' 0;\n    padding: ',
                    ';\n    border: 1px solid ',
                    ';\n    border-radius: ',
                    ';\n    background: transparent;\n    flex: 1;\n',
                ],
                [
                    '\n    font-size: ',
                    'px;\n    font-weight: ',
                    ';\n    margin: ',
                    ' 0;\n    padding: ',
                    ';\n    border: 1px solid ',
                    ';\n    border-radius: ',
                    ';\n    background: transparent;\n    flex: 1;\n',
                ],
            )),
        function (n) {
            return n.theme.fonts.fontSize.xl;
        },
        function (n) {
            return n.theme.fonts.fontWeight.m;
        },
        function (n) {
            return n.theme.gaps.s;
        },
        function (n) {
            return n.theme.gaps.s;
        },
        function (n) {
            return n.theme.colors.disabledDay;
        },
        function (n) {
            return n.theme.gaps.xs;
        },
    ),
    Se = e.button(
        ln ||
            (ln = l(
                [
                    '\n    ',
                    ';\n    font-weight: ',
                    ';\n    padding: ',
                    ';\n    border: 1px solid ',
                    ';\n    border-radius: ',
                    ';\n    background: ',
                    ';\n    transition: all 0.3s;\n    cursor: pointer;\n\n    &:hover {\n        background: ',
                    ';\n    }\n\n    &:active {\n        background: ',
                    ';\n    }\n',
                ],
                [
                    '\n    ',
                    ';\n    font-weight: ',
                    ';\n    padding: ',
                    ';\n    border: 1px solid ',
                    ';\n    border-radius: ',
                    ';\n    background: ',
                    ';\n    transition: all 0.3s;\n    cursor: pointer;\n\n    &:hover {\n        background: ',
                    ';\n    }\n\n    &:active {\n        background: ',
                    ';\n    }\n',
                ],
            )),
        z,
        function (n) {
            return n.theme.fonts.fontWeight.m;
        },
        function (n) {
            return n.theme.gaps.m;
        },
        function (n) {
            return n.theme.colors.disabledDay;
        },
        function (n) {
            return n.theme.gaps.xs;
        },
        function (n) {
            return n.theme.colors.primary;
        },
        function (n) {
            return n.theme.colors.middleDayRange;
        },
        function (n) {
            return n.theme.colors.disabledDay;
        },
    ),
    ke = n.memo(function (e) {
        var t = e.taskText,
            r = e.onChange,
            o = e.onAdd;
        return n.createElement(
            De,
            null,
            n.createElement(we, {
                type: 'text',
                placeholder: 'Input new task',
                value: t,
                onChange: r,
                onKeyDown: function (n) {
                    'Enter' === n.key && o();
                },
            }),
            n.createElement(Se, { onClick: o }, 'Add Task'),
        );
    }),
    Ee = e.div(
        dn ||
            (dn = l(
                [
                    '\n    ',
                    ';\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    z-index: 1000;\n',
                ],
                [
                    '\n    ',
                    ';\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    z-index: 1000;\n',
                ],
            )),
        z,
    ),
    Ce = e.div(
        fn ||
            (fn = l(
                [
                    '\n    ',
                    ';\n    flex-direction: column;\n    position: relative;\n    width: ',
                    ';\n    padding: 40px ',
                    ' 20px;\n    border: 1px solid ',
                    ';\n    border-radius: ',
                    ';\n    box-shadow: ',
                    ' 0 6px 10px -2px;\n    background: ',
                    ';\n',
                ],
                [
                    '\n    ',
                    ';\n    flex-direction: column;\n    position: relative;\n    width: ',
                    ';\n    padding: 40px ',
                    ' 20px;\n    border: 1px solid ',
                    ';\n    border-radius: ',
                    ';\n    box-shadow: ',
                    ' 0 6px 10px -2px;\n    background: ',
                    ';\n',
                ],
            )),
        z,
        function (n) {
            return n.theme.sizes.modalSize;
        },
        function (n) {
            return n.theme.gaps.l;
        },
        function (n) {
            return n.theme.colors.chosenDay;
        },
        function (n) {
            return n.theme.gaps.m;
        },
        function (n) {
            return n.theme.colors.text;
        },
        function (n) {
            return n.theme.colors.primary;
        },
    ),
    ze = e.button(
        mn ||
            (mn = l(
                [
                    '\n    font-size: 50px;\n    position: absolute;\n    top: -5px;\n    right: 8px;\n    background: none;\n    border: none;\n    color: ',
                    ';\n    transition: color 0.3s;\n    cursor: pointer;\n\n    &:hover {\n        color: ',
                    ';\n    }\n',
                ],
                [
                    '\n    font-size: 50px;\n    position: absolute;\n    top: -5px;\n    right: 8px;\n    background: none;\n    border: none;\n    color: ',
                    ';\n    transition: color 0.3s;\n    cursor: pointer;\n\n    &:hover {\n        color: ',
                    ';\n    }\n',
                ],
            )),
        function (n) {
            return n.theme.colors.text;
        },
        function (n) {
            return n.theme.colors.errorText;
        },
    ),
    Te = e.h2(
        hn ||
            (hn = l(
                ['\n    font-size: ', 'px;\n    font-weight: ', ';\n    margin-bottom: ', ';\n'],
                ['\n    font-size: ', 'px;\n    font-weight: ', ';\n    margin-bottom: ', ';\n'],
            )),
        function (n) {
            return n.theme.fonts.fontSize.xxl;
        },
        function (n) {
            return n.theme.fonts.fontWeight.m;
        },
        function (n) {
            return n.theme.gaps.l;
        },
    ),
    Me = e.div(
        pn ||
            (pn = l(
                [
                    '\n    width: 100%;\n    padding: 0 ',
                    ';\n    max-height: 50vh;\n    overflow-y: auto;\n',
                ],
                [
                    '\n    width: 100%;\n    padding: 0 ',
                    ';\n    max-height: 50vh;\n    overflow-y: auto;\n',
                ],
            )),
        function (n) {
            return n.theme.gaps.s;
        },
    ),
    We = e.div(
        gn ||
            (gn = l(
                ['\n    ', ';\n    width: 100%;\n    gap: ', ';\n    margin-bottom: ', ';\n'],
                ['\n    ', ';\n    width: 100%;\n    gap: ', ';\n    margin-bottom: ', ';\n'],
            )),
        T,
        function (n) {
            return n.theme.gaps.s;
        },
        function (n) {
            return n.theme.gaps.s;
        },
    ),
    Fe = e.p(
        yn ||
            (yn = l(
                [
                    '\n    font-size: ',
                    'px;\n    font-weight: ',
                    ';\n    text-decoration: ',
                    ';\n    flex: 1;\n',
                ],
                [
                    '\n    font-size: ',
                    'px;\n    font-weight: ',
                    ';\n    text-decoration: ',
                    ';\n    flex: 1;\n',
                ],
            )),
        function (n) {
            return n.theme.fonts.fontSize.xl;
        },
        function (n) {
            return n.theme.fonts.fontWeight.m;
        },
        function (n) {
            return n.$isCompleted ? 'line-through' : 'none';
        },
    ),
    Ye = e.button(
        xn ||
            (xn = l(
                [
                    '\n    flex: 0;\n    ',
                    ';\n    font-weight: ',
                    ';\n    padding: ',
                    ';\n    border: 1px solid ',
                    ';\n    border-radius: ',
                    ';\n    background: ',
                    ';\n    transition: all 0.3s;\n    cursor: pointer;\n\n    &:hover {\n        background: ',
                    ';\n    }\n\n    &:active {\n        background: ',
                    ';\n    }\n',
                ],
                [
                    '\n    flex: 0;\n    ',
                    ';\n    font-weight: ',
                    ';\n    padding: ',
                    ';\n    border: 1px solid ',
                    ';\n    border-radius: ',
                    ';\n    background: ',
                    ';\n    transition: all 0.3s;\n    cursor: pointer;\n\n    &:hover {\n        background: ',
                    ';\n    }\n\n    &:active {\n        background: ',
                    ';\n    }\n',
                ],
            )),
        z,
        function (n) {
            return n.theme.fonts.fontWeight.m;
        },
        function (n) {
            return n.theme.gaps.s;
        },
        function (n) {
            return n.theme.colors.disabledDay;
        },
        function (n) {
            return n.theme.gaps.xs;
        },
        function (n) {
            return n.theme.colors.primary;
        },
        function (n) {
            return n.theme.colors.middleDayRange;
        },
        function (n) {
            return n.theme.colors.disabledDay;
        },
    ),
    $e = n.memo(function (e) {
        var t = e.task,
            r = e.setTasks,
            o = t.id,
            a = t.text,
            i = t.isCompleted,
            c = H().selectedDay,
            s = Wn(c);
        return n.createElement(
            We,
            null,
            n.createElement('input', {
                type: 'checkbox',
                checked: i,
                onChange: function () {
                    var n = Tn(s).map(function (n) {
                        return n.id === o ? u(u({}, n), { isCompleted: !n.isCompleted }) : n;
                    });
                    r(n), Mn(s, n);
                },
            }),
            n.createElement(Fe, { $isCompleted: i }, a),
            n.createElement(
                Ye,
                {
                    onClick: function () {
                        var n = Tn(s).filter(function (n) {
                            return n.id !== o;
                        });
                        r(n),
                            0 === n.length
                                ? (function (n) {
                                      localStorage.removeItem(n);
                                  })(s)
                                : Mn(s, n);
                    },
                },
                'Delete',
            ),
        );
    }),
    Ae = C(function (e) {
        var t = e.onClose,
            r = n.useState(''),
            a = r[0],
            i = r[1],
            c = n.useState([]),
            u = c[0],
            l = c[1],
            d = H().selectedDay,
            f = Wn(d || new Date());
        n.useEffect(
            function () {
                var n = Tn(f);
                n && l(n);
            },
            [d],
        );
        var m = n.useCallback(function (n) {
                i(n.target.value);
            }, []),
            h = n.useCallback(
                function () {
                    if ('' !== a.trim()) {
                        var n = s([], u, !0),
                            e = { id: String(new Date().getTime()), text: a, isCompleted: !1 };
                        n.push(e), l(n), Mn(f, n), i('');
                    }
                },
                [a, f],
            );
        return o.createPortal(
            n.createElement(
                Ee,
                null,
                n.createElement(
                    Ce,
                    { 'data-testid': 'modal' },
                    n.createElement(ze, { onClick: t }, '×'),
                    n.createElement(Te, null, 'Tasks for ', f),
                    n.createElement(ke, { taskText: a, onChange: m, onAdd: h }),
                    n.createElement(
                        Me,
                        null,
                        0 !== u.length
                            ? u.map(function (e) {
                                  return n.createElement($e, { key: e.id, task: e, setTasks: l });
                              })
                            : 'Your tasks will be here',
                    ),
                ),
            ),
            document.body,
        );
    }),
    Re = function (n) {
        return 0 === n.getDay() || 6 === n.getDay();
    },
    Oe = new Date(),
    Ie = function (e) {
        var t = e.children,
            r = n.useState(Oe)[0],
            o = n.useState(void 0),
            a = o[0],
            i = o[1],
            c = n.useState(Oe.getMonth()),
            u = c[0],
            s = c[1],
            l = n.useState(Oe.getFullYear()),
            d = l[0],
            f = l[1],
            m = n.useState('Day'),
            h = {
                today: r,
                selectedDay: a,
                selectedMonth: u,
                selectedYear: d,
                calendarType: m[0],
                setSelectedDay: i,
                setSelectedMonth: s,
                setSelectedYear: f,
                setCalendarType: m[1],
            };
        return n.createElement(V.Provider, { value: h }, t);
    },
    Ne = function (n) {
        return n.split('.').map(function (n) {
            return parseInt(n);
        });
    },
    je = e.input(
        vn ||
            (vn = l(
                [
                    '\n    font-size: ',
                    'px;\n    width: 100%;\n    border: none;\n    background: transparent;\n',
                ],
                [
                    '\n    font-size: ',
                    'px;\n    width: 100%;\n    border: none;\n    background: transparent;\n',
                ],
            )),
        function (n) {
            return n.theme.fonts.fontSize.l;
        },
    ),
    Pe = C(function (e) {
        var t = H(),
            r = t.setSelectedDay,
            o = t.setSelectedMonth,
            a = t.setSelectedYear,
            i = e.inputText,
            c = e.setInputText,
            u = e.setIsCalendarOpen,
            s = e.setInvalidInputError,
            l = n.useCallback(
                function (n) {
                    var e = n.target.value;
                    if ((s(''), !B.test(e)))
                        return n.preventDefault(), void s('Date should be in format: dd.mm.yyyy');
                    e.length > 10 ? n.preventDefault() : c(e);
                },
                [i],
            ),
            d = n.useCallback(function (n) {
                var e,
                    t = n.target.value;
                if ('Enter' === n.key) {
                    if (((e = t), !J.test(e)))
                        return void s('Date should be in format: dd.mm.yyyy');
                    if (
                        !(function (n) {
                            var e = Ne(n),
                                t = e[0],
                                r = e[1],
                                o = e[2],
                                a = new Date(o, r - 1, t),
                                i = a.getDate() === t,
                                c = a.getMonth() === r - 1,
                                u = a.getFullYear() === o;
                            return i && c && u;
                        })(t)
                    )
                        return void s("It seems this date doesn't exist :(");
                    var i = Ne(t),
                        c = i[0],
                        u = i[1],
                        l = i[2],
                        d = new Date(l, u - 1, c);
                    a(l), o(u - 1), r(d);
                }
            }, []),
            f = n.useCallback(function () {
                u(!0);
            }, []);
        return n.createElement(je, {
            placeholder: 'DD.MM.YYYY',
            type: 'text',
            value: i,
            onChange: l,
            onKeyDown: d,
            onFocus: f,
        });
    }),
    Ve = function (n) {
        return n.theme.gaps.s;
    },
    He = e.section(
        bn ||
            (bn = l(
                [
                    '\n    display: flex;\n    flex-direction: column;\n    max-width: ',
                    ';\n\n    & svg:hover {\n        cursor: pointer;\n    }\n',
                ],
                [
                    '\n    display: flex;\n    flex-direction: column;\n    max-width: ',
                    ';\n\n    & svg:hover {\n        cursor: pointer;\n    }\n',
                ],
            )),
        function (n) {
            return n.theme.sizes.calendarWidth;
        },
    ),
    Be = e.div(
        Dn ||
            (Dn = l(
                [
                    '\n    ',
                    ';\n    padding: ',
                    ' ',
                    ';\n    border: 1px solid ',
                    ';\n    border-radius: ',
                    ';\n    gap: ',
                    ';\n    margin: ',
                    ' auto;\n',
                ],
                [
                    '\n    ',
                    ';\n    padding: ',
                    ' ',
                    ';\n    border: 1px solid ',
                    ';\n    border-radius: ',
                    ';\n    gap: ',
                    ';\n    margin: ',
                    ' auto;\n',
                ],
            )),
        z,
        Ve,
        function (n) {
            return n.theme.gaps.xm;
        },
        function (n) {
            return n.theme.colors.border;
        },
        Ve,
        Ve,
        Ve,
    ),
    Je = e.div(wn || (wn = l([''], ['']))),
    _e = e.p(
        Sn ||
            (Sn = l(
                ['\n    font-size: 12px;\n    color: red;\n'],
                ['\n    font-size: 12px;\n    color: red;\n'],
            )),
    ),
    qe = C(function (e) {
        var t = e.CalendarView,
            r = n.useState(''),
            o = r[0],
            c = r[1],
            u = n.useState(!1),
            s = u[0],
            l = u[1],
            d = n.useState(''),
            f = d[0],
            m = d[1];
        return n.createElement(
            Ie,
            null,
            n.createElement(
                He,
                { 'data-testid': 'date-picker' },
                n.createElement(
                    Je,
                    null,
                    n.createElement('p', null, 'Date'),
                    f && n.createElement(_e, null, f),
                ),
                n.createElement(
                    Be,
                    null,
                    n.createElement(k, {
                        src: a,
                        alt: 'Toggle calendar',
                        onClick: function () {
                            l(function (n) {
                                return !n;
                            });
                        },
                        'data-testid': 'calendar-icon-button',
                    }),
                    n.createElement(Pe, {
                        inputText: o,
                        setInputText: c,
                        setIsCalendarOpen: l,
                        setInvalidInputError: m,
                    }),
                    n.createElement(k, {
                        src: i,
                        alt: 'Clear text',
                        onClick: function () {
                            c('');
                        },
                    }),
                ),
                s && n.createElement(t, null),
            ),
        );
    });
(exports.CalendarProvider = Ie),
    (exports.DatePicker = qe),
    (exports.RangeProvider = function (e) {
        var t = e.children,
            r = n.useState({ rangeStart: void 0, rangeEnd: void 0 }),
            o = { range: r[0], setRange: r[1] };
        return n.createElement(R.Provider, { value: o }, t);
    }),
    (exports.UtilityCalendar = xe),
    (exports.withHolidays = function (e) {
        var t = function (t) {
                return n.createElement(e, u({}, t, { isHolidayDate: be }));
            },
            r = e.displayName || e.name;
        return (t.displayName = 'withHolidays('.concat(r, ')')), t;
    }),
    (exports.withRange = function (e) {
        var t = function (t) {
                return n.createElement(e, u({}, t, { isWithRange: !0 }));
            },
            r = e.displayName || e.name;
        return (t.displayName = 'withRange('.concat(r, ')')), t;
    }),
    (exports.withSelectedDay = function (e) {
        var t = function (t) {
                return n.createElement(e, u({}, t, { isWithSelectedDay: !0 }));
            },
            r = e.displayName || e.name;
        return (t.displayName = 'withSelectedDay('.concat(r, ')')), t;
    }),
    (exports.withSundayFirst = function (e) {
        var t = function (t) {
                return n.createElement(e, u({}, t, { isSundayFirst: !0 }));
            },
            r = e.displayName || e.name;
        return (t.displayName = 'withSundayFirst('.concat(r, ')')), t;
    }),
    (exports.withTasks = function (e) {
        var t = function (t) {
                var r = n.useState(!1),
                    o = r[0],
                    a = r[1],
                    i = H().selectedDay,
                    c = n.useCallback(function () {
                        a(function (n) {
                            return !n;
                        });
                    }, []),
                    s = 0 !== Tn(Wn(i)).length;
                return n.createElement(
                    n.Fragment,
                    null,
                    n.createElement(e, u({}, t, { isWithTasks: !0 })),
                    i &&
                        n.createElement(j, {
                            text: s ? 'View Tasks' : 'Add task',
                            onButtonClick: c,
                        }),
                    o && n.createElement(Ae, { onClose: c }),
                );
            },
            r = e.displayName || e.name;
        return (t.displayName = 'withTasks('.concat(r, ')')), t;
    }),
    (exports.withWeekends = function (e) {
        var t = function (t) {
                return n.createElement(e, u({}, t, { isDayWeekend: Re }));
            },
            r = e.displayName || e.name;
        return (t.displayName = 'withWeekendsDays('.concat(r, ')')), t;
    });
//# sourceMappingURL=index.js.map
