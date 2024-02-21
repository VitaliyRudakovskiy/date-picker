import n, {
    Component as e,
    createContext as t,
    useState as r,
    useContext as o,
    useCallback as a,
    useMemo as i,
    memo as c,
    useEffect as u,
} from 'react';
import s, { createGlobalStyle as l, ThemeProvider as d, css as f } from 'styled-components';
import m from '@/assets/next.svg';
import h from '@/assets/prev.svg';
import p from 'react-dom';
import g from '@/assets/calendar.svg';
import y from '@/assets/clear.svg';
var x = function (n, e) {
    return (
        (x =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
                function (n, e) {
                    n.__proto__ = e;
                }) ||
            function (n, e) {
                for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t]);
            }),
        x(n, e)
    );
};
var v = function () {
    return (
        (v =
            Object.assign ||
            function (n) {
                for (var e, t = 1, r = arguments.length; t < r; t++)
                    for (var o in (e = arguments[t]))
                        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                return n;
            }),
        v.apply(this, arguments)
    );
};
function b(n, e, t) {
    if (t || 2 === arguments.length)
        for (var r, o = 0, a = e.length; o < a; o++)
            (!r && o in e) || (r || (r = Array.prototype.slice.call(e, 0, o)), (r[o] = e[o]));
    return n.concat(r || Array.prototype.slice.call(e));
}
function D(n, e) {
    return Object.defineProperty ? Object.defineProperty(n, 'raw', { value: e }) : (n.raw = e), n;
}
'function' == typeof SuppressedError && SuppressedError;
var w,
    S,
    E,
    k,
    z,
    T,
    C,
    W,
    M = {
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
    F = {
        fontFamily: { openSans: "'Open Sans', sans-serif" },
        fontSize: { xxl: 21, xl: 18, l: 15, m: 14, s: 13 },
        fontWeight: { l: 700, m: 600, s: 400 },
    },
    Y = { xxs: '0.1rem', xs: '0.3125rem', s: '0.5rem', m: '0.625rem', xm: '0.9375rem', l: '1rem' },
    $ = l(
        w ||
            (w = D(
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
        F.fontFamily.openSans,
        M.text,
    ),
    A = s.div(
        S ||
            (S = D(
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
        F.fontSize.s,
        F.fontWeight.m,
        Y.s,
        M.primary,
        Y.m,
        M.borderDash,
    ),
    O = s.img(
        E ||
            (E = D(
                ['\n    width: 16px;\n    height: 16px;\n    color: ', ';\n    cursor: pointer;\n'],
                ['\n    width: 16px;\n    height: 16px;\n    color: ', ';\n    cursor: pointer;\n'],
            )),
        M.disabledDay,
    ),
    R = {
        colors: v({}, M),
        fonts: v({}, F),
        gaps: v({}, Y),
        sizes: v(
            {},
            { cellSize: '30px', calendarWidth: '230px', modalSize: '400px', tablet: '784px' },
        ),
    },
    I = function (e) {
        return function (t) {
            return n.createElement(
                d,
                { theme: R },
                n.createElement($, null),
                n.createElement(e, v({}, t)),
            );
        };
    },
    N = f(
        k ||
            (k = D(
                ['\n    display: flex;\n    justify-content: center;\n    align-items: center;\n'],
                ['\n    display: flex;\n    justify-content: center;\n    align-items: center;\n'],
            )),
    ),
    j = f(
        z ||
            (z = D(
                [
                    '\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n',
                ],
                [
                    '\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n',
                ],
            )),
    ),
    V = function (n) {
        return n.theme.gaps.l;
    },
    P = s.div(
        T ||
            (T = D(
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
        N,
        V,
        V,
    ),
    B = s.p(
        C ||
            (C = D(
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
s.span(
    W ||
        (W = D(
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
var H,
    J,
    _ = I(
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
                    x(n, e),
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
                              P,
                              { 'data-testid': 'error-boundary' },
                              n.createElement('h2', null, 'Oops! Something went wrong'),
                              n.createElement(B, null, r && r.toString()),
                          )
                        : this.props.children;
                }),
                t
            );
        })(e),
    ),
    K = t({ range: void 0, setRange: function () {} }),
    U = function () {
        return o(K);
    },
    L = function (e) {
        var t = e.children,
            o = r({ rangeStart: void 0, rangeEnd: void 0 }),
            a = { range: o[0], setRange: o[1] };
        return n.createElement(K.Provider, { value: a }, t);
    },
    q = function (n) {
        return n.theme.gaps.s;
    },
    G = s.button(
        H ||
            (H = D(
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
        q,
        q,
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
    Q = n.memo(function (e) {
        var t = e.text,
            r = e.onButtonClick;
        return n.createElement(G, { onClick: r }, t);
    }),
    X = new Date(),
    Z = t({
        today: X,
        selectedDay: void 0,
        selectedMonth: X.getMonth(),
        selectedYear: X.getFullYear(),
        calendarType: 'Day',
        setSelectedDay: function () {},
        setSelectedMonth: function () {},
        setSelectedYear: function () {},
        setCalendarType: function () {},
    }),
    nn = function () {
        return o(Z);
    },
    en = /^[0-9.]*$/,
    tn = /^(\d{2})\.(\d{2})\.(\d{4})$/,
    rn = {
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
})(J || (J = {}));
var on,
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
    En,
    kn,
    zn,
    Tn,
    Cn,
    Wn,
    Mn,
    Fn,
    Yn,
    $n,
    An,
    On,
    Rn = function (n, e) {
        return new Date(n, e + 1, 0).getDate();
    },
    In = function (n, e, t) {
        var r = Rn(e, n),
            o = 'Monday' === t,
            a = (function (n, e) {
                return new Date(n, e, 1).getDay();
            })(e, n),
            i = o ? (7 + a - 1) % 7 : (7 + a) % 7,
            c = (function (n, e) {
                return 0 === e ? { month: 11, year: n - 1 } : { month: e - 1, year: n };
            })(e, n),
            u = c.month,
            s = c.year,
            l = (function (n, e) {
                return 11 === e ? { month: 0, year: n + 1 } : { month: e + 1, year: n };
            })(e, n),
            d = l.month,
            f = l.year,
            m = Rn(s, u),
            h = Array.from({ length: i }, function (n, e) {
                return new Date(s, u, m - i + e + 1);
            }),
            p = Array.from({ length: r }, function (t, r) {
                return new Date(e, n, r + 1);
            }),
            g = r + i,
            y = 7 * Math.ceil(g / 7) - g,
            x = Array.from({ length: y }, function (n, e) {
                return new Date(f, d, e + 1);
            });
        return b(b(b([], h, !0), p, !0), x, !0);
    },
    Nn = function (n, e) {
        return J[e] === n;
    },
    jn = function (n, e) {
        return (
            !!e &&
            n.getDate() === e.getDate() &&
            n.getMonth() === e.getMonth() &&
            n.getFullYear() === e.getFullYear()
        );
    },
    Vn = function (n) {
        if (!n) return [];
        var e = localStorage.getItem(n);
        return e ? JSON.parse(e) : [];
    },
    Pn = function (n, e) {
        localStorage.setItem(n, JSON.stringify(e));
    },
    Bn = function (n) {
        if (!n) return new Date().toDateString();
        var e = n.getDate().toString().padStart(2, '0'),
            t = (n.getMonth() + 1).toString().padStart(2, '0'),
            r = n.getFullYear().toString();
        return ''.concat(e, '.').concat(t, '.').concat(r);
    },
    Hn = function (n) {
        return { rangeStart: n, rangeEnd: void 0 };
    },
    Jn = function (n, e) {
        return n >= e.rangeStart
            ? v(v({}, e), { rangeEnd: n })
            : { rangeStart: n, rangeEnd: e.rangeStart };
    },
    _n = function (n, e) {
        var t = new Date(+e.rangeStart),
            r = new Date(+e.rangeEnd);
        return n >= t && n <= r
            ? Kn(n, e)
            : n < t
              ? { rangeStart: n, rangeEnd: e.rangeEnd }
              : { rangeStart: e.rangeStart, rangeEnd: n };
    },
    Kn = function (n, e) {
        var t = new Date(+e.rangeStart);
        return Math.abs(n.getTime() - t.getTime()) <= Math.abs(n.getTime() - e.rangeEnd.getTime())
            ? { rangeStart: n, rangeEnd: e.rangeEnd }
            : { rangeStart: e.rangeStart, rangeEnd: n };
    },
    Un = function (n) {
        return n.theme.colors.text;
    },
    Ln = function (n) {
        return n.theme.colors.chosenDay;
    },
    qn = function (n) {
        return n.theme.colors.disabledDay;
    },
    Gn = function (n) {
        return n.theme.colors.firstDayRange;
    },
    Qn = function (n) {
        return n.theme.colors.middleDayRange;
    },
    Xn = function (n) {
        return n.theme.colors.primary;
    },
    Zn = function (n) {
        return n.theme.colors.weekendDay;
    },
    ne = function (n) {
        return n.theme.colors.holiday;
    },
    ee = s.div(
        on ||
            (on = D(
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
                        return Ln;
                    case 'Start' === o:
                    case 'End' === o:
                    case t:
                        return Xn;
                    case r:
                        return ne;
                    case !n:
                        return qn;
                    case e:
                        return Zn;
                    default:
                        return Un;
                }
            })(n.$isActive, n.$isWeekend, n.$isDaySelected, n.$isHoliday, n.$range);
        },
        function (n) {
            return (function (n, e) {
                switch (!0) {
                    case n:
                        return Ln;
                    case 'Start' === e:
                        return Gn;
                    case 'Between' === e:
                        return Qn;
                    case 'End' === e:
                        return Ln;
                    default:
                        return Xn;
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
    te = s.div(
        an ||
            (an = D(
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
    re = I(function (e) {
        var t,
            r = e.day,
            o = e.isActive,
            i = e.isWeekend,
            c = void 0 !== i && i,
            u = e.isToday,
            s = e.isHoliday,
            l = void 0 !== s && s,
            d = e.isWithRange,
            f = void 0 !== d && d,
            m = e.isWithSelectedDay,
            h = void 0 !== m && m,
            p = e.isWithTasks,
            g = void 0 !== p && p,
            y = e.minValue,
            x = void 0 === y ? void 0 : y,
            v = e.maxValue,
            b = void 0 === v ? void 0 : v,
            D = nn(),
            w = D.selectedDay,
            S = D.setSelectedDay,
            E = D.setSelectedMonth,
            k = D.setSelectedYear,
            z = U(),
            T = z.range,
            C = z.setRange,
            W = a(
                function () {
                    (x &&
                        b &&
                        !(function (n, e, t) {
                            return n.getTime() >= e.getTime() && n.getTime() <= t.getTime();
                        })(r, x, b)) ||
                        (f
                            ? C(function (n) {
                                  return (function (n, e) {
                                      return e && e.rangeStart
                                          ? e.rangeEnd
                                              ? _n(n, e)
                                              : Jn(n, e)
                                          : Hn(n);
                                  })(r, n);
                              })
                            : h && (o || (E(r.getMonth()), k(r.getFullYear())), S(r)));
                },
                [h, f, o, r, x, b],
            ),
            M = Vn(Bn(r));
        return n.createElement(
            ee,
            {
                'data-testid': 'day-of-week',
                $isActive: o,
                $isWeekend: c,
                $isToday: u,
                $isHoliday: l,
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
                    })(t, T)),
                onClick: W,
                $isDaySelected: jn(r, w),
            },
            g && 0 !== M.length && n.createElement(te, null),
            r.getDate(),
        );
    }),
    oe = function (n) {
        return n.theme.colors.chosenDay;
    },
    ae = function (n) {
        return n.theme.colors.primary;
    },
    ie = function (n) {
        return n.theme.colors.text;
    },
    ce = s(A)(
        cn ||
            (cn = D(
                ['\n    color: ', ';\n    background-color: ', ';\n'],
                ['\n    color: ', ';\n    background-color: ', ';\n'],
            )),
        function (n) {
            return n.$isMonthSelected ? ae : ie;
        },
        function (n) {
            return n.$isMonthSelected ? oe : ae;
        },
    ),
    ue = I(function (e) {
        var t = e.month,
            r = e.isSelected,
            o = nn(),
            i = o.setCalendarType,
            c = o.setSelectedMonth,
            u = a(function () {
                i('Day'),
                    c(
                        (function (n) {
                            return J[n];
                        })(t),
                    );
            }, []);
        return n.createElement(
            ce,
            { 'data-testid': 'month-in-grid', $isMonthSelected: r, onClick: u },
            t,
        );
    }),
    se = s.div(
        un ||
            (un = D(
                [
                    '\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(7, 1fr);\n',
                ],
                [
                    '\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(7, 1fr);\n',
                ],
            )),
    ),
    le = s.div(
        sn ||
            (sn = D(
                [
                    '\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n',
                ],
                [
                    '\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n',
                ],
            )),
    ),
    de = s.div(
        ln ||
            (ln = D(
                [
                    '\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n',
                ],
                [
                    '\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n',
                ],
            )),
    ),
    fe = function (n) {
        return n.theme.colors.chosenDay;
    },
    me = function (n) {
        return n.theme.colors.primary;
    },
    he = function (n) {
        return n.theme.colors.text;
    },
    pe = s(A)(
        dn ||
            (dn = D(
                ['\n    color: ', ';\n    background-color: ', ';\n'],
                ['\n    color: ', ';\n    background-color: ', ';\n'],
            )),
        function (n) {
            return n.$isYearSelected ? me : he;
        },
        function (n) {
            return n.$isYearSelected ? fe : me;
        },
    ),
    ge = I(function (e) {
        var t = e.year,
            r = e.isSelected,
            o = nn(),
            i = o.setCalendarType,
            c = o.setSelectedYear,
            u = a(function () {
                i('Day'), c(t);
            }, []);
        return n.createElement(
            pe,
            { 'data-testid': 'year-in-grid', $isYearSelected: r, onClick: u },
            t,
        );
    }),
    ye = function (e) {
        var t = e.isHolidayDate,
            r = e.isWithRange,
            o = e.isDayWeekend,
            a = e.isWithSelectedDay,
            c = e.isSundayFirst,
            u = void 0 !== c && c,
            s = e.isWithTasks,
            l = e.minValue,
            d = e.maxValue,
            f = nn(),
            m = f.today,
            h = f.selectedMonth,
            p = f.selectedYear,
            g = f.calendarType,
            y = u ? 'Sunday' : 'Monday',
            x = i(
                function () {
                    if ('Day' === g) return In(h, p, y);
                },
                [g, p, h, y],
            ),
            v = i(
                function () {
                    if ('Month' === g)
                        return Object.values(J).filter(function (n) {
                            return 'string' == typeof n;
                        });
                },
                [g, h],
            ),
            b = i(
                function () {
                    if ('Year' === g)
                        return (function (n) {
                            for (var e = [], t = n - 10; t < n + 10; t++) e.push(t);
                            return e;
                        })(p);
                },
                [g, p],
            );
        return n.createElement(
            n.Fragment,
            null,
            x &&
                n.createElement(
                    se,
                    { 'data-testid': 'data-grid-container' },
                    x.map(function (e) {
                        return n.createElement(re, {
                            key: e.getTime(),
                            day: e,
                            isActive:
                                ((i = e),
                                (c = h),
                                (u = p),
                                i.getMonth() === c && i.getFullYear() === u),
                            isWeekend: o && o(e),
                            isToday: jn(e, m),
                            isHoliday: t && t(e),
                            isWithRange: r,
                            isWithSelectedDay: a,
                            isWithTasks: s,
                            minValue: l,
                            maxValue: d,
                        });
                        var i, c, u;
                    }),
                ),
            v &&
                n.createElement(
                    le,
                    null,
                    v.map(function (e) {
                        return n.createElement(ue, { key: e, month: e, isSelected: Nn(e, h) });
                    }),
                ),
            b &&
                n.createElement(
                    de,
                    null,
                    b.map(function (e) {
                        return n.createElement(ge, { key: e, year: e, isSelected: e === p });
                    }),
                ),
        );
    },
    xe = s.span(
        fn ||
            (fn = D(
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
    ve = function (e) {
        var t = e.day;
        return n.createElement(xe, null, t);
    },
    be = s.div(
        mn ||
            (mn = D(
                ['\n    display: grid;\n    grid-template-columns: repeat(7, ', ');\n'],
                ['\n    display: grid;\n    grid-template-columns: repeat(7, ', ');\n'],
            )),
        function (n) {
            return n.theme.sizes.cellSize;
        },
    ),
    De = I(function (e) {
        var t = e.isSundayFirst,
            r = void 0 !== t && t,
            o = i(
                function () {
                    var n = Object.values(rn);
                    return r ? b([n[6]], n.slice(0, 6), !0) : n;
                },
                [r],
            );
        return n.createElement(
            be,
            null,
            o.map(function (e) {
                return n.createElement(ve, { key: e, day: e });
            }),
        );
    }),
    we = s.div(
        hn ||
            (hn = D(
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
        j,
        function (n) {
            return n.theme.gaps.m;
        },
    ),
    Se = s.h3(
        pn ||
            (pn = D(
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
    Ee = s.span(
        gn ||
            (gn = D(
                ['\n    &:hover {\n        color: ', ';\n    }\n'],
                ['\n    &:hover {\n        color: ', ';\n    }\n'],
            )),
        function (n) {
            return n.theme.colors.chosenDay;
        },
    ),
    ke = s.span(
        yn ||
            (yn = D(
                ['\n    &:hover {\n        color: ', ';\n    }\n'],
                ['\n    &:hover {\n        color: ', ';\n    }\n'],
            )),
        function (n) {
            return n.theme.colors.chosenDay;
        },
    ),
    ze = s.img(
        xn ||
            (xn = D(
                ['\n    color: ', ';\n    cursor: pointer;\n'],
                ['\n    color: ', ';\n    cursor: pointer;\n'],
            )),
        function (n) {
            return n.theme.colors.month;
        },
    ),
    Te = function () {
        var e = nn(),
            t = e.selectedMonth,
            r = e.selectedYear,
            o = e.calendarType,
            i = e.setSelectedMonth,
            c = e.setSelectedYear,
            u = e.setCalendarType,
            s = a(
                function (n) {
                    return function () {
                        'Day' === o &&
                            (function (n, e, t, r, o, a) {
                                var i = t,
                                    c = e;
                                'Day' === a &&
                                    ('next' === n
                                        ? (c = (e + 1) % 12) < e && i++
                                        : (c = (e + 11) % 12) > e && i--),
                                    o(i),
                                    r(c);
                            })(n, t, r, i, c, o),
                            'Year' === o &&
                                (function (n, e, t) {
                                    t('next' === n ? e + 20 : e - 20);
                                })(n, r, c);
                    };
                },
                [t, r, i, c, o],
            ),
            l = a(
                function (n) {
                    return function () {
                        u(n);
                    };
                },
                [u],
            );
        return n.createElement(
            we,
            { 'data-testid': 'month-slider' },
            n.createElement(ze, { src: h, alt: 'prevMonth', onClick: s('prev') }),
            n.createElement(
                Se,
                null,
                (function () {
                    switch (o) {
                        case 'Day':
                            return n.createElement(
                                n.Fragment,
                                null,
                                n.createElement(Ee, { onClick: l('Month') }, J[t], ' '),
                                n.createElement(ke, { onClick: l('Year') }, r),
                            );
                        case 'Month':
                            return n.createElement(Ee, { onClick: l('Month') }, 'Months');
                        case 'Year':
                            return n.createElement(
                                Ee,
                                { onClick: l('Year') },
                                r - 10,
                                ' - ',
                                r + 9,
                            );
                        default:
                            return null;
                    }
                })(),
            ),
            n.createElement(ze, { src: m, alt: 'nextMonth', onClick: s('next') }),
        );
    },
    Ce = s.div(
        vn ||
            (vn = D(
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
        N,
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
    We = I(function (e) {
        var t = e.isHolidayDate,
            r = e.isWithRange,
            o = e.isDayWeekend,
            i = e.isWithSelectedDay,
            c = e.isSundayFirst,
            u = e.isWithTasks,
            s = e.minValue,
            l = e.maxValue,
            d = U(),
            f = d.range,
            m = d.setRange,
            h = a(
                function () {
                    m(void 0);
                },
                [m],
            ),
            p = r && !!(null == f ? void 0 : f.rangeStart) && !!(null == f ? void 0 : f.rangeEnd);
        return n.createElement(
            _,
            null,
            n.createElement(
                Ce,
                { $isRangeExist: p, $isWithTasks: u, 'data-testid': 'calendar' },
                n.createElement(Te, null),
                n.createElement(De, { isSundayFirst: c }),
                n.createElement(ye, {
                    isHolidayDate: t,
                    isWithRange: r,
                    isWithSelectedDay: i,
                    isSundayFirst: c,
                    isDayWeekend: o,
                    isWithTasks: u,
                    minValue: s,
                    maxValue: l,
                }),
            ),
            p && n.createElement(Q, { text: 'Clear Interval', onButtonClick: h }),
        );
    }),
    Me = (function () {
        function n() {
            this.calendar = We;
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
    Fe = [
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
    Ye = function (n) {
        return Fe.some(function (e) {
            return n.getDate() === e.date.getDate() && n.getMonth() === e.date.getMonth();
        });
    },
    $e = function (e) {
        var t = function (t) {
                return n.createElement(e, v({}, t, { isHolidayDate: Ye }));
            },
            r = e.displayName || e.name;
        return (t.displayName = 'withHolidays('.concat(r, ')')), t;
    },
    Ae = function (e) {
        var t = function (t) {
                return n.createElement(e, v({}, t, { isWithRange: !0 }));
            },
            r = e.displayName || e.name;
        return (t.displayName = 'withRange('.concat(r, ')')), t;
    },
    Oe = function (e) {
        var t = function (t) {
                return n.createElement(e, v({}, t, { isWithSelectedDay: !0 }));
            },
            r = e.displayName || e.name;
        return (t.displayName = 'withSelectedDay('.concat(r, ')')), t;
    },
    Re = function (e) {
        var t = function (t) {
                return n.createElement(e, v({}, t, { isSundayFirst: !0 }));
            },
            r = e.displayName || e.name;
        return (t.displayName = 'withSundayFirst('.concat(r, ')')), t;
    },
    Ie = s.div(
        bn ||
            (bn = D(
                ['\n    ', ';\n    gap: ', ';\n    width: 100%;\n    margin-bottom: ', ';\n'],
                ['\n    ', ';\n    gap: ', ';\n    width: 100%;\n    margin-bottom: ', ';\n'],
            )),
        N,
        function (n) {
            return n.theme.gaps.s;
        },
        function (n) {
            return n.theme.gaps.l;
        },
    ),
    Ne = s.input(
        Dn ||
            (Dn = D(
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
    je = s.button(
        wn ||
            (wn = D(
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
        N,
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
    Ve = c(function (e) {
        var t = e.taskText,
            r = e.onChange,
            o = e.onAdd;
        return n.createElement(
            Ie,
            null,
            n.createElement(Ne, {
                type: 'text',
                placeholder: 'Input new task',
                value: t,
                onChange: r,
                onKeyDown: function (n) {
                    'Enter' === n.key && o();
                },
            }),
            n.createElement(je, { onClick: o }, 'Add Task'),
        );
    }),
    Pe = s.div(
        Sn ||
            (Sn = D(
                [
                    '\n    ',
                    ';\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    z-index: 1000;\n',
                ],
                [
                    '\n    ',
                    ';\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    z-index: 1000;\n',
                ],
            )),
        N,
    ),
    Be = s.div(
        En ||
            (En = D(
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
        N,
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
    He = s.button(
        kn ||
            (kn = D(
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
    Je = s.h2(
        zn ||
            (zn = D(
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
    _e = s.div(
        Tn ||
            (Tn = D(
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
    Ke = s.div(
        Cn ||
            (Cn = D(
                ['\n    ', ';\n    width: 100%;\n    gap: ', ';\n    margin-bottom: ', ';\n'],
                ['\n    ', ';\n    width: 100%;\n    gap: ', ';\n    margin-bottom: ', ';\n'],
            )),
        j,
        function (n) {
            return n.theme.gaps.s;
        },
        function (n) {
            return n.theme.gaps.s;
        },
    ),
    Ue = s.p(
        Wn ||
            (Wn = D(
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
    Le = s.button(
        Mn ||
            (Mn = D(
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
        N,
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
    qe = c(function (e) {
        var t = e.task,
            r = e.setTasks,
            o = t.id,
            a = t.text,
            i = t.isCompleted,
            c = nn().selectedDay,
            u = Bn(c);
        return n.createElement(
            Ke,
            null,
            n.createElement('input', {
                type: 'checkbox',
                checked: i,
                onChange: function () {
                    var n = Vn(u).map(function (n) {
                        return n.id === o ? v(v({}, n), { isCompleted: !n.isCompleted }) : n;
                    });
                    r(n), Pn(u, n);
                },
            }),
            n.createElement(Ue, { $isCompleted: i }, a),
            n.createElement(
                Le,
                {
                    onClick: function () {
                        var n = Vn(u).filter(function (n) {
                            return n.id !== o;
                        });
                        r(n),
                            0 === n.length
                                ? (function (n) {
                                      localStorage.removeItem(n);
                                  })(u)
                                : Pn(u, n);
                    },
                },
                'Delete',
            ),
        );
    }),
    Ge = I(function (e) {
        var t = e.onClose,
            o = r(''),
            i = o[0],
            c = o[1],
            s = r([]),
            l = s[0],
            d = s[1],
            f = nn().selectedDay,
            m = Bn(f || new Date());
        u(
            function () {
                var n = Vn(m);
                n && d(n);
            },
            [f],
        );
        var h = a(function (n) {
                c(n.target.value);
            }, []),
            g = a(
                function () {
                    if ('' !== i.trim()) {
                        var n = b([], l, !0),
                            e = { id: String(new Date().getTime()), text: i, isCompleted: !1 };
                        n.push(e), d(n), Pn(m, n), c('');
                    }
                },
                [i, m],
            );
        return p.createPortal(
            n.createElement(
                Pe,
                null,
                n.createElement(
                    Be,
                    { 'data-testid': 'modal' },
                    n.createElement(He, { onClick: t }, '×'),
                    n.createElement(Je, null, 'Tasks for ', m),
                    n.createElement(Ve, { taskText: i, onChange: h, onAdd: g }),
                    n.createElement(
                        _e,
                        null,
                        0 !== l.length
                            ? l.map(function (e) {
                                  return n.createElement(qe, { key: e.id, task: e, setTasks: d });
                              })
                            : 'Your tasks will be here',
                    ),
                ),
            ),
            document.body,
        );
    }),
    Qe = function (e) {
        var t = function (t) {
                var o = r(!1),
                    i = o[0],
                    c = o[1],
                    u = nn().selectedDay,
                    s = a(function () {
                        c(function (n) {
                            return !n;
                        });
                    }, []),
                    l = 0 !== Vn(Bn(u)).length;
                return n.createElement(
                    n.Fragment,
                    null,
                    n.createElement(e, v({}, t, { isWithTasks: !0 })),
                    u &&
                        n.createElement(Q, {
                            text: l ? 'View Tasks' : 'Add task',
                            onButtonClick: s,
                        }),
                    i && n.createElement(Ge, { onClose: s }),
                );
            },
            o = e.displayName || e.name;
        return (t.displayName = 'withTasks('.concat(o, ')')), t;
    },
    Xe = function (n) {
        return 0 === n.getDay() || 6 === n.getDay();
    },
    Ze = function (e) {
        var t = function (t) {
                return n.createElement(e, v({}, t, { isDayWeekend: Xe }));
            },
            r = e.displayName || e.name;
        return (t.displayName = 'withWeekendsDays('.concat(r, ')')), t;
    },
    nt = new Date(),
    et = function (e) {
        var t = e.children,
            o = r(nt)[0],
            a = r(void 0),
            i = a[0],
            c = a[1],
            u = r(nt.getMonth()),
            s = u[0],
            l = u[1],
            d = r(nt.getFullYear()),
            f = d[0],
            m = d[1],
            h = r('Day'),
            p = {
                today: o,
                selectedDay: i,
                selectedMonth: s,
                selectedYear: f,
                calendarType: h[0],
                setSelectedDay: c,
                setSelectedMonth: l,
                setSelectedYear: m,
                setCalendarType: h[1],
            };
        return n.createElement(Z.Provider, { value: p }, t);
    },
    tt = function (n) {
        return n.split('.').map(function (n) {
            return parseInt(n);
        });
    },
    rt = s.input(
        Fn ||
            (Fn = D(
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
    ot = I(function (e) {
        var t = nn(),
            r = t.setSelectedDay,
            o = t.setSelectedMonth,
            i = t.setSelectedYear,
            c = e.inputText,
            u = e.setInputText,
            s = e.setIsCalendarOpen,
            l = e.setInvalidInputError,
            d = a(
                function (n) {
                    var e = n.target.value;
                    if ((l(''), !en.test(e)))
                        return n.preventDefault(), void l('Date should be in format: dd.mm.yyyy');
                    e.length > 10 ? n.preventDefault() : u(e);
                },
                [c],
            ),
            f = a(function (n) {
                var e,
                    t = n.target.value;
                if ('Enter' === n.key) {
                    if (((e = t), !tn.test(e)))
                        return void l('Date should be in format: dd.mm.yyyy');
                    if (
                        !(function (n) {
                            var e = tt(n),
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
                        return void l("It seems this date doesn't exist :(");
                    var a = tt(t),
                        c = a[0],
                        u = a[1],
                        s = a[2],
                        d = new Date(s, u - 1, c);
                    i(s), o(u - 1), r(d);
                }
            }, []),
            m = a(function () {
                s(!0);
            }, []);
        return n.createElement(rt, {
            placeholder: 'DD.MM.YYYY',
            type: 'text',
            value: c,
            onChange: d,
            onKeyDown: f,
            onFocus: m,
        });
    }),
    at = function (n) {
        return n.theme.gaps.s;
    },
    it = s.section(
        Yn ||
            (Yn = D(
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
    ct = s.div(
        $n ||
            ($n = D(
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
        N,
        at,
        function (n) {
            return n.theme.gaps.xm;
        },
        function (n) {
            return n.theme.colors.border;
        },
        at,
        at,
        at,
    ),
    ut = s.div(An || (An = D([''], ['']))),
    st = s.p(
        On ||
            (On = D(
                ['\n    font-size: 12px;\n    color: red;\n'],
                ['\n    font-size: 12px;\n    color: red;\n'],
            )),
    ),
    lt = I(function (e) {
        var t = e.CalendarView,
            o = r(''),
            a = o[0],
            i = o[1],
            c = r(!1),
            u = c[0],
            s = c[1],
            l = r(''),
            d = l[0],
            f = l[1];
        return n.createElement(
            et,
            null,
            n.createElement(
                it,
                { 'data-testid': 'date-picker' },
                n.createElement(
                    ut,
                    null,
                    n.createElement('p', null, 'Date'),
                    d && n.createElement(st, null, d),
                ),
                n.createElement(
                    ct,
                    null,
                    n.createElement(O, {
                        src: g,
                        alt: 'Toggle calendar',
                        onClick: function () {
                            s(function (n) {
                                return !n;
                            });
                        },
                        'data-testid': 'calendar-icon-button',
                    }),
                    n.createElement(ot, {
                        inputText: a,
                        setInputText: i,
                        setIsCalendarOpen: s,
                        setInvalidInputError: f,
                    }),
                    n.createElement(O, {
                        src: y,
                        alt: 'Clear text',
                        onClick: function () {
                            i('');
                        },
                    }),
                ),
                u && n.createElement(t, null),
            ),
        );
    });
export {
    et as CalendarProvider,
    lt as DatePicker,
    L as RangeProvider,
    Me as UtilityCalendar,
    $e as withHolidays,
    Ae as withRange,
    Oe as withSelectedDay,
    Re as withSundayFirst,
    Qe as withTasks,
    Ze as withWeekends,
};
//# sourceMappingURL=index.es.js.map
