/*! For license information please see LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [2], {
        1026: function(e, t, n) {
            "use strict";

            function r(e) {
                return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
            }

            function l(e, t) {
                void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach((function(n) {
                    void 0 === e[n] ? e[n] = t[n] : r(t[n]) && r(e[n]) && Object.keys(t[n]).length > 0 && l(e[n], t[n])
                }))
            }
            n.r(t);
            var o = "undefined" != typeof document ? document : {},
                d = {
                    body: {},
                    addEventListener: function() {},
                    removeEventListener: function() {},
                    activeElement: {
                        blur: function() {},
                        nodeName: ""
                    },
                    querySelector: function() {
                        return null
                    },
                    querySelectorAll: function() {
                        return []
                    },
                    getElementById: function() {
                        return null
                    },
                    createEvent: function() {
                        return {
                            initEvent: function() {}
                        }
                    },
                    createElement: function() {
                        return {
                            children: [],
                            childNodes: [],
                            style: {},
                            setAttribute: function() {},
                            getElementsByTagName: function() {
                                return []
                            }
                        }
                    },
                    createElementNS: function() {
                        return {}
                    },
                    importNode: function() {
                        return null
                    },
                    location: {
                        hash: "",
                        host: "",
                        hostname: "",
                        href: "",
                        origin: "",
                        pathname: "",
                        protocol: "",
                        search: ""
                    }
                };
            l(o, d);
            var c = "undefined" != typeof window ? window : {};
            l(c, {
                document: d,
                navigator: {
                    userAgent: ""
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                },
                history: {
                    replaceState: function() {},
                    pushState: function() {},
                    go: function() {},
                    back: function() {}
                },
                CustomEvent: function() {
                    return this
                },
                addEventListener: function() {},
                removeEventListener: function() {},
                getComputedStyle: function() {
                    return {
                        getPropertyValue: function() {
                            return ""
                        }
                    }
                },
                Image: function() {},
                Date: function() {},
                screen: {},
                setTimeout: function() {},
                clearTimeout: function() {},
                matchMedia: function() {
                    return {}
                }
            });
            class h {
                constructor(e) {
                    const t = this;
                    for (let i = 0; i < e.length; i += 1) t[i] = e[i];
                    return t.length = e.length, this
                }
            }

            function m(e, t) {
                const n = [];
                let i = 0;
                if (e && !t && e instanceof h) return e;
                if (e)
                    if ("string" == typeof e) {
                        let r, l;
                        const html = e.trim();
                        if (html.indexOf("<") >= 0 && html.indexOf(">") >= 0) {
                            let e = "div";
                            for (0 === html.indexOf("<li") && (e = "ul"), 0 === html.indexOf("<tr") && (e = "tbody"), 0 !== html.indexOf("<td") && 0 !== html.indexOf("<th") || (e = "tr"), 0 === html.indexOf("<tbody") && (e = "table"), 0 === html.indexOf("<option") && (e = "select"), l = o.createElement(e), l.innerHTML = html, i = 0; i < l.childNodes.length; i += 1) n.push(l.childNodes[i])
                        } else
                            for (r = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || o).querySelectorAll(e.trim()) : [o.getElementById(e.trim().split("#")[1])], i = 0; i < r.length; i += 1) r[i] && n.push(r[i])
                    } else if (e.nodeType || e === c || e === o) n.push(e);
                else if (e.length > 0 && e[0].nodeType)
                    for (i = 0; i < e.length; i += 1) n.push(e[i]);
                return new h(n)
            }

            function f(e) {
                const t = [];
                for (let i = 0; i < e.length; i += 1) - 1 === t.indexOf(e[i]) && t.push(e[i]);
                return t
            }
            m.fn = h.prototype, m.Class = h, m.Dom7 = h;
            "resize scroll".split(" ");
            const v = {
                addClass: function(e) {
                    if (void 0 === e) return this;
                    const t = e.split(" ");
                    for (let i = 0; i < t.length; i += 1)
                        for (let e = 0; e < this.length; e += 1) void 0 !== this[e] && void 0 !== this[e].classList && this[e].classList.add(t[i]);
                    return this
                },
                removeClass: function(e) {
                    const t = e.split(" ");
                    for (let i = 0; i < t.length; i += 1)
                        for (let e = 0; e < this.length; e += 1) void 0 !== this[e] && void 0 !== this[e].classList && this[e].classList.remove(t[i]);
                    return this
                },
                hasClass: function(e) {
                    return !!this[0] && this[0].classList.contains(e)
                },
                toggleClass: function(e) {
                    const t = e.split(" ");
                    for (let i = 0; i < t.length; i += 1)
                        for (let e = 0; e < this.length; e += 1) void 0 !== this[e] && void 0 !== this[e].classList && this[e].classList.toggle(t[i]);
                    return this
                },
                attr: function(e, t) {
                    if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                    for (let i = 0; i < this.length; i += 1)
                        if (2 === arguments.length) this[i].setAttribute(e, t);
                        else
                            for (const t in e) this[i][t] = e[t], this[i].setAttribute(t, e[t]);
                    return this
                },
                removeAttr: function(e) {
                    for (let i = 0; i < this.length; i += 1) this[i].removeAttribute(e);
                    return this
                },
                data: function(e, t) {
                    let n;
                    if (void 0 !== t) {
                        for (let i = 0; i < this.length; i += 1) n = this[i], n.dom7ElementDataStorage || (n.dom7ElementDataStorage = {}), n.dom7ElementDataStorage[e] = t;
                        return this
                    }
                    if (n = this[0], n) {
                        if (n.dom7ElementDataStorage && e in n.dom7ElementDataStorage) return n.dom7ElementDataStorage[e];
                        const t = n.getAttribute(`data-${e}`);
                        return t || void 0
                    }
                },
                transform: function(e) {
                    for (let i = 0; i < this.length; i += 1) {
                        const t = this[i].style;
                        t.webkitTransform = e, t.transform = e
                    }
                    return this
                },
                transition: function(e) {
                    "string" != typeof e && (e = `${e}ms`);
                    for (let i = 0; i < this.length; i += 1) {
                        const t = this[i].style;
                        t.webkitTransitionDuration = e, t.transitionDuration = e
                    }
                    return this
                },
                on: function(...e) {
                    let [t, n, r, l] = e;

                    function o(e) {
                        const t = e.target;
                        if (!t) return;
                        const l = e.target.dom7EventData || [];
                        if (l.indexOf(e) < 0 && l.unshift(e), m(t).is(n)) r.apply(t, l);
                        else {
                            const e = m(t).parents();
                            for (let t = 0; t < e.length; t += 1) m(e[t]).is(n) && r.apply(e[t], l)
                        }
                    }

                    function d(e) {
                        const t = e && e.target && e.target.dom7EventData || [];
                        t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t)
                    }
                    "function" == typeof e[1] && ([t, r, l] = e, n = void 0), l || (l = !1);
                    const c = t.split(" ");
                    let h;
                    for (let i = 0; i < this.length; i += 1) {
                        const e = this[i];
                        if (n)
                            for (h = 0; h < c.length; h += 1) {
                                const t = c[h];
                                e.dom7LiveListeners || (e.dom7LiveListeners = {}), e.dom7LiveListeners[t] || (e.dom7LiveListeners[t] = []), e.dom7LiveListeners[t].push({
                                    listener: r,
                                    proxyListener: o
                                }), e.addEventListener(t, o, l)
                            } else
                                for (h = 0; h < c.length; h += 1) {
                                    const t = c[h];
                                    e.dom7Listeners || (e.dom7Listeners = {}), e.dom7Listeners[t] || (e.dom7Listeners[t] = []), e.dom7Listeners[t].push({
                                        listener: r,
                                        proxyListener: d
                                    }), e.addEventListener(t, d, l)
                                }
                    }
                    return this
                },
                off: function(...e) {
                    let [t, n, r, l] = e;
                    "function" == typeof e[1] && ([t, r, l] = e, n = void 0), l || (l = !1);
                    const o = t.split(" ");
                    for (let i = 0; i < o.length; i += 1) {
                        const e = o[i];
                        for (let t = 0; t < this.length; t += 1) {
                            const o = this[t];
                            let d;
                            if (!n && o.dom7Listeners ? d = o.dom7Listeners[e] : n && o.dom7LiveListeners && (d = o.dom7LiveListeners[e]), d && d.length)
                                for (let t = d.length - 1; t >= 0; t -= 1) {
                                    const n = d[t];
                                    r && n.listener === r || r && n.listener && n.listener.dom7proxy && n.listener.dom7proxy === r ? (o.removeEventListener(e, n.proxyListener, l), d.splice(t, 1)) : r || (o.removeEventListener(e, n.proxyListener, l), d.splice(t, 1))
                                }
                        }
                    }
                    return this
                },
                trigger: function(...e) {
                    const t = e[0].split(" "),
                        n = e[1];
                    for (let i = 0; i < t.length; i += 1) {
                        const r = t[i];
                        for (let t = 0; t < this.length; t += 1) {
                            const l = this[t];
                            let d;
                            try {
                                d = new c.CustomEvent(r, {
                                    detail: n,
                                    bubbles: !0,
                                    cancelable: !0
                                })
                            } catch (e) {
                                d = o.createEvent("Event"), d.initEvent(r, !0, !0), d.detail = n
                            }
                            l.dom7EventData = e.filter(((data, e) => e > 0)), l.dispatchEvent(d), l.dom7EventData = [], delete l.dom7EventData
                        }
                    }
                    return this
                },
                transitionEnd: function(e) {
                    const t = ["webkitTransitionEnd", "transitionend"],
                        n = this;
                    let i;

                    function r(l) {
                        if (l.target === this)
                            for (e.call(this, l), i = 0; i < t.length; i += 1) n.off(t[i], r)
                    }
                    if (e)
                        for (i = 0; i < t.length; i += 1) n.on(t[i], r);
                    return this
                },
                outerWidth: function(e) {
                    if (this.length > 0) {
                        if (e) {
                            const e = this.styles();
                            return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                        }
                        return this[0].offsetWidth
                    }
                    return null
                },
                outerHeight: function(e) {
                    if (this.length > 0) {
                        if (e) {
                            const e = this.styles();
                            return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                        }
                        return this[0].offsetHeight
                    }
                    return null
                },
                offset: function() {
                    if (this.length > 0) {
                        const e = this[0],
                            t = e.getBoundingClientRect(),
                            body = o.body,
                            n = e.clientTop || body.clientTop || 0,
                            r = e.clientLeft || body.clientLeft || 0,
                            l = e === c ? c.scrollY : e.scrollTop,
                            d = e === c ? c.scrollX : e.scrollLeft;
                        return {
                            top: t.top + l - n,
                            left: t.left + d - r
                        }
                    }
                    return null
                },
                css: function(e, t) {
                    let i;
                    if (1 === arguments.length) {
                        if ("string" != typeof e) {
                            for (i = 0; i < this.length; i += 1)
                                for (let t in e) this[i].style[t] = e[t];
                            return this
                        }
                        if (this[0]) return c.getComputedStyle(this[0], null).getPropertyValue(e)
                    }
                    if (2 === arguments.length && "string" == typeof e) {
                        for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
                        return this
                    }
                    return this
                },
                each: function(e) {
                    if (!e) return this;
                    for (let i = 0; i < this.length; i += 1)
                        if (!1 === e.call(this[i], i, this[i])) return this;
                    return this
                },
                html: function(html) {
                    if (void 0 === html) return this[0] ? this[0].innerHTML : void 0;
                    for (let i = 0; i < this.length; i += 1) this[i].innerHTML = html;
                    return this
                },
                text: function(text) {
                    if (void 0 === text) return this[0] ? this[0].textContent.trim() : null;
                    for (let i = 0; i < this.length; i += 1) this[i].textContent = text;
                    return this
                },
                is: function(e) {
                    const t = this[0];
                    let n, i;
                    if (!t || void 0 === e) return !1;
                    if ("string" == typeof e) {
                        if (t.matches) return t.matches(e);
                        if (t.webkitMatchesSelector) return t.webkitMatchesSelector(e);
                        if (t.msMatchesSelector) return t.msMatchesSelector(e);
                        for (n = m(e), i = 0; i < n.length; i += 1)
                            if (n[i] === t) return !0;
                        return !1
                    }
                    if (e === o) return t === o;
                    if (e === c) return t === c;
                    if (e.nodeType || e instanceof h) {
                        for (n = e.nodeType ? [e] : e, i = 0; i < n.length; i += 1)
                            if (n[i] === t) return !0;
                        return !1
                    }
                    return !1
                },
                index: function() {
                    let i, e = this[0];
                    if (e) {
                        for (i = 0; null !== (e = e.previousSibling);) 1 === e.nodeType && (i += 1);
                        return i
                    }
                },
                eq: function(e) {
                    if (void 0 === e) return this;
                    const t = this.length;
                    let n;
                    return e > t - 1 ? new h([]) : e < 0 ? (n = t + e, new h(n < 0 ? [] : [this[n]])) : new h([this[e]])
                },
                append: function(...e) {
                    let t;
                    for (let n = 0; n < e.length; n += 1) {
                        t = e[n];
                        for (let i = 0; i < this.length; i += 1)
                            if ("string" == typeof t) {
                                const e = o.createElement("div");
                                for (e.innerHTML = t; e.firstChild;) this[i].appendChild(e.firstChild)
                            } else if (t instanceof h)
                            for (let e = 0; e < t.length; e += 1) this[i].appendChild(t[e]);
                        else this[i].appendChild(t)
                    }
                    return this
                },
                prepend: function(e) {
                    let i, t;
                    for (i = 0; i < this.length; i += 1)
                        if ("string" == typeof e) {
                            const n = o.createElement("div");
                            for (n.innerHTML = e, t = n.childNodes.length - 1; t >= 0; t -= 1) this[i].insertBefore(n.childNodes[t], this[i].childNodes[0])
                        } else if (e instanceof h)
                        for (t = 0; t < e.length; t += 1) this[i].insertBefore(e[t], this[i].childNodes[0]);
                    else this[i].insertBefore(e, this[i].childNodes[0]);
                    return this
                },
                next: function(e) {
                    return this.length > 0 ? e ? this[0].nextElementSibling && m(this[0].nextElementSibling).is(e) ? new h([this[0].nextElementSibling]) : new h([]) : this[0].nextElementSibling ? new h([this[0].nextElementSibling]) : new h([]) : new h([])
                },
                nextAll: function(e) {
                    const t = [];
                    let n = this[0];
                    if (!n) return new h([]);
                    for (; n.nextElementSibling;) {
                        const r = n.nextElementSibling;
                        e ? m(r).is(e) && t.push(r) : t.push(r), n = r
                    }
                    return new h(t)
                },
                prev: function(e) {
                    if (this.length > 0) {
                        const t = this[0];
                        return e ? t.previousElementSibling && m(t.previousElementSibling).is(e) ? new h([t.previousElementSibling]) : new h([]) : t.previousElementSibling ? new h([t.previousElementSibling]) : new h([])
                    }
                    return new h([])
                },
                prevAll: function(e) {
                    const t = [];
                    let n = this[0];
                    if (!n) return new h([]);
                    for (; n.previousElementSibling;) {
                        const r = n.previousElementSibling;
                        e ? m(r).is(e) && t.push(r) : t.push(r), n = r
                    }
                    return new h(t)
                },
                parent: function(e) {
                    const t = [];
                    for (let i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? m(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
                    return m(f(t))
                },
                parents: function(e) {
                    const t = [];
                    for (let i = 0; i < this.length; i += 1) {
                        let n = this[i].parentNode;
                        for (; n;) e ? m(n).is(e) && t.push(n) : t.push(n), n = n.parentNode
                    }
                    return m(f(t))
                },
                closest: function(e) {
                    let t = this;
                    return void 0 === e ? new h([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
                },
                find: function(e) {
                    const t = [];
                    for (let i = 0; i < this.length; i += 1) {
                        const n = this[i].querySelectorAll(e);
                        for (let e = 0; e < n.length; e += 1) t.push(n[e])
                    }
                    return new h(t)
                },
                children: function(e) {
                    const t = [];
                    for (let i = 0; i < this.length; i += 1) {
                        const n = this[i].childNodes;
                        for (let r = 0; r < n.length; r += 1) e ? 1 === n[r].nodeType && m(n[r]).is(e) && t.push(n[r]) : 1 === n[r].nodeType && t.push(n[r])
                    }
                    return new h(f(t))
                },
                filter: function(e) {
                    const t = [],
                        n = this;
                    for (let i = 0; i < n.length; i += 1) e.call(n[i], i, n[i]) && t.push(n[i]);
                    return new h(t)
                },
                remove: function() {
                    for (let i = 0; i < this.length; i += 1) this[i].parentNode && this[i].parentNode.removeChild(this[i]);
                    return this
                },
                add: function(...e) {
                    const t = this;
                    let i, n;
                    for (i = 0; i < e.length; i += 1) {
                        const r = m(e[i]);
                        for (n = 0; n < r.length; n += 1) t[t.length] = r[n], t.length += 1
                    }
                    return t
                },
                styles: function() {
                    return this[0] ? c.getComputedStyle(this[0], null) : {}
                }
            };
            Object.keys(v).forEach((e => {
                m.fn[e] = m.fn[e] || v[e]
            }));
            const w = {
                    deleteProps(e) {
                        const object = e;
                        Object.keys(object).forEach((e => {
                            try {
                                object[e] = null
                            } catch (e) {}
                            try {
                                delete object[e]
                            } catch (e) {}
                        }))
                    },
                    nextTick: (e, t = 0) => setTimeout(e, t),
                    now: () => Date.now(),
                    getTranslate(e, t = "x") {
                        let n, r, l;
                        const o = c.getComputedStyle(e, null);
                        return c.WebKitCSSMatrix ? (r = o.transform || o.webkitTransform, r.split(",").length > 6 && (r = r.split(", ").map((a => a.replace(",", "."))).join(", ")), l = new c.WebKitCSSMatrix("none" === r ? "" : r)) : (l = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), n = l.toString().split(",")), "x" === t && (r = c.WebKitCSSMatrix ? l.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === t && (r = c.WebKitCSSMatrix ? l.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), r || 0
                    },
                    parseUrlQuery(e) {
                        const t = {};
                        let i, n, param, r, l = e || c.location.href;
                        if ("string" == typeof l && l.length)
                            for (l = l.indexOf("?") > -1 ? l.replace(/\S*\?/, "") : "", n = l.split("&").filter((e => "" !== e)), r = n.length, i = 0; i < r; i += 1) param = n[i].replace(/#\S+/g, "").split("="), t[decodeURIComponent(param[0])] = void 0 === param[1] ? void 0 : decodeURIComponent(param[1]) || "";
                        return t
                    },
                    isObject: e => "object" == typeof e && null !== e && e.constructor && e.constructor === Object,
                    extend(...e) {
                        const t = Object(e[0]);
                        for (let i = 1; i < e.length; i += 1) {
                            const n = e[i];
                            if (null != n) {
                                const e = Object.keys(Object(n));
                                for (let r = 0, l = e.length; r < l; r += 1) {
                                    const l = e[r],
                                        desc = Object.getOwnPropertyDescriptor(n, l);
                                    void 0 !== desc && desc.enumerable && (w.isObject(t[l]) && w.isObject(n[l]) ? w.extend(t[l], n[l]) : !w.isObject(t[l]) && w.isObject(n[l]) ? (t[l] = {}, w.extend(t[l], n[l])) : t[l] = n[l])
                                }
                            }
                        }
                        return t
                    }
                },
                y = {
                    touch: !!("ontouchstart" in c || c.DocumentTouch && o instanceof c.DocumentTouch),
                    pointerEvents: !!c.PointerEvent && "maxTouchPoints" in c.navigator && c.navigator.maxTouchPoints >= 0,
                    observer: "MutationObserver" in c || "WebkitMutationObserver" in c,
                    passiveListener: function() {
                        let e = !1;
                        try {
                            const t = Object.defineProperty({}, "passive", {
                                get() {
                                    e = !0
                                }
                            });
                            c.addEventListener("testPassiveListener", null, t)
                        } catch (e) {}
                        return e
                    }(),
                    gestures: "ongesturestart" in c
                };
            class x {
                constructor(e = {}) {
                    const t = this;
                    t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach((e => {
                        t.on(e, t.params.on[e])
                    }))
                }
                on(e, t, n) {
                    const r = this;
                    if ("function" != typeof t) return r;
                    const l = n ? "unshift" : "push";
                    return e.split(" ").forEach((e => {
                        r.eventsListeners[e] || (r.eventsListeners[e] = []), r.eventsListeners[e][l](t)
                    })), r
                }
                once(e, t, n) {
                    const r = this;
                    if ("function" != typeof t) return r;

                    function l(...n) {
                        r.off(e, l), l.f7proxy && delete l.f7proxy, t.apply(r, n)
                    }
                    return l.f7proxy = t, r.on(e, l, n)
                }
                off(e, t) {
                    const n = this;
                    return n.eventsListeners ? (e.split(" ").forEach((e => {
                        void 0 === t ? n.eventsListeners[e] = [] : n.eventsListeners[e] && n.eventsListeners[e].length && n.eventsListeners[e].forEach(((r, l) => {
                            (r === t || r.f7proxy && r.f7proxy === t) && n.eventsListeners[e].splice(l, 1)
                        }))
                    })), n) : n
                }
                emit(...e) {
                    const t = this;
                    if (!t.eventsListeners) return t;
                    let n, data, r;
                    "string" == typeof e[0] || Array.isArray(e[0]) ? (n = e[0], data = e.slice(1, e.length), r = t) : (n = e[0].events, data = e[0].data, r = e[0].context || t);
                    return (Array.isArray(n) ? n : n.split(" ")).forEach((e => {
                        if (t.eventsListeners && t.eventsListeners[e]) {
                            const n = [];
                            t.eventsListeners[e].forEach((e => {
                                n.push(e)
                            })), n.forEach((e => {
                                e.apply(r, data)
                            }))
                        }
                    })), t
                }
                useModulesParams(e) {
                    const t = this;
                    t.modules && Object.keys(t.modules).forEach((n => {
                        const r = t.modules[n];
                        r.params && w.extend(e, r.params)
                    }))
                }
                useModules(e = {}) {
                    const t = this;
                    t.modules && Object.keys(t.modules).forEach((n => {
                        const r = t.modules[n],
                            l = e[n] || {};
                        r.instance && Object.keys(r.instance).forEach((e => {
                            const n = r.instance[e];
                            t[e] = "function" == typeof n ? n.bind(t) : n
                        })), r.on && t.on && Object.keys(r.on).forEach((e => {
                            t.on(e, r.on[e])
                        })), r.create && r.create.bind(t)(l)
                    }))
                }
                static set components(e) {
                    this.use && this.use(e)
                }
                static installModule(e, ...t) {
                    const n = this;
                    n.prototype.modules || (n.prototype.modules = {});
                    const r = e.name || `${Object.keys(n.prototype.modules).length}_${w.now()}`;
                    return n.prototype.modules[r] = e, e.proto && Object.keys(e.proto).forEach((t => {
                        n.prototype[t] = e.proto[t]
                    })), e.static && Object.keys(e.static).forEach((t => {
                        n[t] = e.static[t]
                    })), e.install && e.install.apply(n, t), n
                }
                static use(e, ...t) {
                    const n = this;
                    return Array.isArray(e) ? (e.forEach((e => n.installModule(e))), n) : n.installModule(e, ...t)
                }
            }
            var E = {
                updateSize: function() {
                    const e = this;
                    let t, n;
                    const r = e.$el;
                    t = void 0 !== e.params.width ? e.params.width : r[0].clientWidth, n = void 0 !== e.params.height ? e.params.height : r[0].clientHeight, 0 === t && e.isHorizontal() || 0 === n && e.isVertical() || (t = t - parseInt(r.css("padding-left"), 10) - parseInt(r.css("padding-right"), 10), n = n - parseInt(r.css("padding-top"), 10) - parseInt(r.css("padding-bottom"), 10), w.extend(e, {
                        width: t,
                        height: n,
                        size: e.isHorizontal() ? t : n
                    }))
                },
                updateSlides: function() {
                    const e = this,
                        t = e.params,
                        {
                            $wrapperEl: n,
                            size: r,
                            rtlTranslate: l,
                            wrongRTL: o
                        } = e,
                        d = e.virtual && t.virtual.enabled,
                        h = d ? e.virtual.slides.length : e.slides.length,
                        m = n.children(`.${e.params.slideClass}`),
                        f = d ? e.virtual.slides.length : m.length;
                    let v = [];
                    const y = [],
                        x = [];

                    function E(e) {
                        return !t.cssMode || e !== m.length - 1
                    }
                    let T = t.slidesOffsetBefore;
                    "function" == typeof T && (T = t.slidesOffsetBefore.call(e));
                    let S = t.slidesOffsetAfter;
                    "function" == typeof S && (S = t.slidesOffsetAfter.call(e));
                    const C = e.snapGrid.length,
                        $ = e.snapGrid.length;
                    let M, P, k = t.spaceBetween,
                        z = -T,
                        I = 0,
                        L = 0;
                    if (void 0 === r) return;
                    "string" == typeof k && k.indexOf("%") >= 0 && (k = parseFloat(k.replace("%", "")) / 100 * r), e.virtualSize = -k, l ? m.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : m.css({
                        marginRight: "",
                        marginBottom: ""
                    }), t.slidesPerColumn > 1 && (M = Math.floor(f / t.slidesPerColumn) === f / e.params.slidesPerColumn ? f : Math.ceil(f / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (M = Math.max(M, t.slidesPerView * t.slidesPerColumn)));
                    const O = t.slidesPerColumn,
                        D = M / O,
                        A = Math.floor(f / t.slidesPerColumn);
                    for (let i = 0; i < f; i += 1) {
                        P = 0;
                        const n = m.eq(i);
                        if (t.slidesPerColumn > 1) {
                            let r, l, o;
                            if ("row" === t.slidesPerColumnFill && t.slidesPerGroup > 1) {
                                const e = Math.floor(i / (t.slidesPerGroup * t.slidesPerColumn)),
                                    d = i - t.slidesPerColumn * t.slidesPerGroup * e,
                                    c = 0 === e ? t.slidesPerGroup : Math.min(Math.ceil((f - e * O * t.slidesPerGroup) / O), t.slidesPerGroup);
                                o = Math.floor(d / c), l = d - o * c + e * t.slidesPerGroup, r = l + o * M / O, n.css({
                                    "-webkit-box-ordinal-group": r,
                                    "-moz-box-ordinal-group": r,
                                    "-ms-flex-order": r,
                                    "-webkit-order": r,
                                    order: r
                                })
                            } else "column" === t.slidesPerColumnFill ? (l = Math.floor(i / O), o = i - l * O, (l > A || l === A && o === O - 1) && (o += 1, o >= O && (o = 0, l += 1))) : (o = Math.floor(i / D), l = i - o * D);
                            n.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== o && t.spaceBetween && `${t.spaceBetween}px`)
                        }
                        if ("none" !== n.css("display")) {
                            if ("auto" === t.slidesPerView) {
                                const r = c.getComputedStyle(n[0], null),
                                    l = n[0].style.transform,
                                    o = n[0].style.webkitTransform;
                                if (l && (n[0].style.transform = "none"), o && (n[0].style.webkitTransform = "none"), t.roundLengths) P = e.isHorizontal() ? n.outerWidth(!0) : n.outerHeight(!0);
                                else if (e.isHorizontal()) {
                                    const e = parseFloat(r.getPropertyValue("width")),
                                        t = parseFloat(r.getPropertyValue("padding-left")),
                                        n = parseFloat(r.getPropertyValue("padding-right")),
                                        l = parseFloat(r.getPropertyValue("margin-left")),
                                        o = parseFloat(r.getPropertyValue("margin-right")),
                                        d = r.getPropertyValue("box-sizing");
                                    P = d && "border-box" === d ? e + l + o : e + t + n + l + o
                                } else {
                                    const e = parseFloat(r.getPropertyValue("height")),
                                        t = parseFloat(r.getPropertyValue("padding-top")),
                                        n = parseFloat(r.getPropertyValue("padding-bottom")),
                                        l = parseFloat(r.getPropertyValue("margin-top")),
                                        o = parseFloat(r.getPropertyValue("margin-bottom")),
                                        d = r.getPropertyValue("box-sizing");
                                    P = d && "border-box" === d ? e + l + o : e + t + n + l + o
                                }
                                l && (n[0].style.transform = l), o && (n[0].style.webkitTransform = o), t.roundLengths && (P = Math.floor(P))
                            } else P = (r - (t.slidesPerView - 1) * k) / t.slidesPerView, t.roundLengths && (P = Math.floor(P)), m[i] && (e.isHorizontal() ? m[i].style.width = `${P}px` : m[i].style.height = `${P}px`);
                            m[i] && (m[i].swiperSlideSize = P), x.push(P), t.centeredSlides ? (z = z + P / 2 + I / 2 + k, 0 === I && 0 !== i && (z = z - r / 2 - k), 0 === i && (z = z - r / 2 - k), Math.abs(z) < .001 && (z = 0), t.roundLengths && (z = Math.floor(z)), L % t.slidesPerGroup == 0 && v.push(z), y.push(z)) : (t.roundLengths && (z = Math.floor(z)), (L - Math.min(e.params.slidesPerGroupSkip, L)) % e.params.slidesPerGroup == 0 && v.push(z), y.push(z), z = z + P + k), e.virtualSize += P + k, I = P, L += 1
                        }
                    }
                    let B;
                    if (e.virtualSize = Math.max(e.virtualSize, r) + S, l && o && ("slide" === t.effect || "coverflow" === t.effect) && n.css({
                            width: `${e.virtualSize+t.spaceBetween}px`
                        }), t.setWrapperSize && (e.isHorizontal() ? n.css({
                            width: `${e.virtualSize+t.spaceBetween}px`
                        }) : n.css({
                            height: `${e.virtualSize+t.spaceBetween}px`
                        })), t.slidesPerColumn > 1 && (e.virtualSize = (P + t.spaceBetween) * M, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? n.css({
                            width: `${e.virtualSize+t.spaceBetween}px`
                        }) : n.css({
                            height: `${e.virtualSize+t.spaceBetween}px`
                        }), t.centeredSlides)) {
                        B = [];
                        for (let i = 0; i < v.length; i += 1) {
                            let n = v[i];
                            t.roundLengths && (n = Math.floor(n)), v[i] < e.virtualSize + v[0] && B.push(n)
                        }
                        v = B
                    }
                    if (!t.centeredSlides) {
                        B = [];
                        for (let i = 0; i < v.length; i += 1) {
                            let n = v[i];
                            t.roundLengths && (n = Math.floor(n)), v[i] <= e.virtualSize - r && B.push(n)
                        }
                        v = B, Math.floor(e.virtualSize - r) - Math.floor(v[v.length - 1]) > 1 && v.push(e.virtualSize - r)
                    }
                    if (0 === v.length && (v = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? l ? m.filter(E).css({
                            marginLeft: `${k}px`
                        }) : m.filter(E).css({
                            marginRight: `${k}px`
                        }) : m.filter(E).css({
                            marginBottom: `${k}px`
                        })), t.centeredSlides && t.centeredSlidesBounds) {
                        let e = 0;
                        x.forEach((n => {
                            e += n + (t.spaceBetween ? t.spaceBetween : 0)
                        })), e -= t.spaceBetween;
                        const n = e - r;
                        v = v.map((e => e < 0 ? -T : e > n ? n + S : e))
                    }
                    if (t.centerInsufficientSlides) {
                        let e = 0;
                        if (x.forEach((n => {
                                e += n + (t.spaceBetween ? t.spaceBetween : 0)
                            })), e -= t.spaceBetween, e < r) {
                            const t = (r - e) / 2;
                            v.forEach(((e, n) => {
                                v[n] = e - t
                            })), y.forEach(((e, n) => {
                                y[n] = e + t
                            }))
                        }
                    }
                    w.extend(e, {
                        slides: m,
                        snapGrid: v,
                        slidesGrid: y,
                        slidesSizesGrid: x
                    }), f !== h && e.emit("slidesLengthChange"), v.length !== C && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), y.length !== $ && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
                },
                updateAutoHeight: function(e) {
                    const t = this,
                        n = [];
                    let i, r = 0;
                    if ("number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed), "auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                        if (t.params.centeredSlides) t.visibleSlides.each(((e, t) => {
                            n.push(t)
                        }));
                        else
                            for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                                const e = t.activeIndex + i;
                                if (e > t.slides.length) break;
                                n.push(t.slides.eq(e)[0])
                            } else n.push(t.slides.eq(t.activeIndex)[0]);
                    for (i = 0; i < n.length; i += 1)
                        if (void 0 !== n[i]) {
                            const e = n[i].offsetHeight;
                            r = e > r ? e : r
                        }
                    r && t.$wrapperEl.css("height", `${r}px`)
                },
                updateSlidesOffset: function() {
                    const e = this,
                        t = e.slides;
                    for (let i = 0; i < t.length; i += 1) t[i].swiperSlideOffset = e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop
                },
                updateSlidesProgress: function(e = this && this.translate || 0) {
                    const t = this,
                        n = t.params,
                        {
                            slides: r,
                            rtlTranslate: l
                        } = t;
                    if (0 === r.length) return;
                    void 0 === r[0].swiperSlideOffset && t.updateSlidesOffset();
                    let o = -e;
                    l && (o = e), r.removeClass(n.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                    for (let i = 0; i < r.length; i += 1) {
                        const e = r[i],
                            d = (o + (n.centeredSlides ? t.minTranslate() : 0) - e.swiperSlideOffset) / (e.swiperSlideSize + n.spaceBetween);
                        if (n.watchSlidesVisibility || n.centeredSlides && n.autoHeight) {
                            const l = -(o - e.swiperSlideOffset),
                                d = l + t.slidesSizesGrid[i];
                            (l >= 0 && l < t.size - 1 || d > 1 && d <= t.size || l <= 0 && d >= t.size) && (t.visibleSlides.push(e), t.visibleSlidesIndexes.push(i), r.eq(i).addClass(n.slideVisibleClass))
                        }
                        e.progress = l ? -d : d
                    }
                    t.visibleSlides = m(t.visibleSlides)
                },
                updateProgress: function(e) {
                    const t = this;
                    if (void 0 === e) {
                        const n = t.rtlTranslate ? -1 : 1;
                        e = t && t.translate && t.translate * n || 0
                    }
                    const n = t.params,
                        r = t.maxTranslate() - t.minTranslate();
                    let {
                        progress: progress,
                        isBeginning: l,
                        isEnd: o
                    } = t;
                    const d = l,
                        c = o;
                    0 === r ? (progress = 0, l = !0, o = !0) : (progress = (e - t.minTranslate()) / r, l = progress <= 0, o = progress >= 1), w.extend(t, {
                        progress: progress,
                        isBeginning: l,
                        isEnd: o
                    }), (n.watchSlidesProgress || n.watchSlidesVisibility || n.centeredSlides && n.autoHeight) && t.updateSlidesProgress(e), l && !d && t.emit("reachBeginning toEdge"), o && !c && t.emit("reachEnd toEdge"), (d && !l || c && !o) && t.emit("fromEdge"), t.emit("progress", progress)
                },
                updateSlidesClasses: function() {
                    const e = this,
                        {
                            slides: t,
                            params: n,
                            $wrapperEl: r,
                            activeIndex: l,
                            realIndex: o
                        } = e,
                        d = e.virtual && n.virtual.enabled;
                    let c;
                    t.removeClass(`${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`), c = d ? e.$wrapperEl.find(`.${n.slideClass}[data-swiper-slide-index="${l}"]`) : t.eq(l), c.addClass(n.slideActiveClass), n.loop && (c.hasClass(n.slideDuplicateClass) ? r.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${o}"]`).addClass(n.slideDuplicateActiveClass) : r.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${o}"]`).addClass(n.slideDuplicateActiveClass));
                    let h = c.nextAll(`.${n.slideClass}`).eq(0).addClass(n.slideNextClass);
                    n.loop && 0 === h.length && (h = t.eq(0), h.addClass(n.slideNextClass));
                    let m = c.prevAll(`.${n.slideClass}`).eq(0).addClass(n.slidePrevClass);
                    n.loop && 0 === m.length && (m = t.eq(-1), m.addClass(n.slidePrevClass)), n.loop && (h.hasClass(n.slideDuplicateClass) ? r.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${h.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass) : r.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${h.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass), m.hasClass(n.slideDuplicateClass) ? r.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${m.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass) : r.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${m.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass))
                },
                updateActiveIndex: function(e) {
                    const t = this,
                        n = t.rtlTranslate ? t.translate : -t.translate,
                        {
                            slidesGrid: r,
                            snapGrid: l,
                            params: o,
                            activeIndex: d,
                            realIndex: c,
                            snapIndex: h
                        } = t;
                    let m, f = e;
                    if (void 0 === f) {
                        for (let i = 0; i < r.length; i += 1) void 0 !== r[i + 1] ? n >= r[i] && n < r[i + 1] - (r[i + 1] - r[i]) / 2 ? f = i : n >= r[i] && n < r[i + 1] && (f = i + 1) : n >= r[i] && (f = i);
                        o.normalizeSlideIndex && (f < 0 || void 0 === f) && (f = 0)
                    }
                    if (l.indexOf(n) >= 0) m = l.indexOf(n);
                    else {
                        const e = Math.min(o.slidesPerGroupSkip, f);
                        m = e + Math.floor((f - e) / o.slidesPerGroup)
                    }
                    if (m >= l.length && (m = l.length - 1), f === d) return void(m !== h && (t.snapIndex = m, t.emit("snapIndexChange")));
                    const v = parseInt(t.slides.eq(f).attr("data-swiper-slide-index") || f, 10);
                    w.extend(t, {
                        snapIndex: m,
                        realIndex: v,
                        previousIndex: d,
                        activeIndex: f
                    }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), c !== v && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
                },
                updateClickedSlide: function(e) {
                    const t = this,
                        n = t.params,
                        r = m(e.target).closest(`.${n.slideClass}`)[0];
                    let l = !1;
                    if (r)
                        for (let i = 0; i < t.slides.length; i += 1) t.slides[i] === r && (l = !0);
                    if (!r || !l) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
                    t.clickedSlide = r, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(m(r).attr("data-swiper-slide-index"), 10) : t.clickedIndex = m(r).index(), n.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
                }
            };
            var T = {
                getTranslate: function(e = (this.isHorizontal() ? "x" : "y")) {
                    const {
                        params: t,
                        rtlTranslate: n,
                        translate: r,
                        $wrapperEl: l
                    } = this;
                    if (t.virtualTranslate) return n ? -r : r;
                    if (t.cssMode) return r;
                    let o = w.getTranslate(l[0], e);
                    return n && (o = -o), o || 0
                },
                setTranslate: function(e, t) {
                    const n = this,
                        {
                            rtlTranslate: r,
                            params: l,
                            $wrapperEl: o,
                            wrapperEl: d,
                            progress: progress
                        } = n;
                    let c, h = 0,
                        m = 0;
                    n.isHorizontal() ? h = r ? -e : e : m = e, l.roundLengths && (h = Math.floor(h), m = Math.floor(m)), l.cssMode ? d[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal() ? -h : -m : l.virtualTranslate || o.transform(`translate3d(${h}px, ${m}px, 0px)`), n.previousTranslate = n.translate, n.translate = n.isHorizontal() ? h : m;
                    const f = n.maxTranslate() - n.minTranslate();
                    c = 0 === f ? 0 : (e - n.minTranslate()) / f, c !== progress && n.updateProgress(e), n.emit("setTranslate", n.translate, t)
                },
                minTranslate: function() {
                    return -this.snapGrid[0]
                },
                maxTranslate: function() {
                    return -this.snapGrid[this.snapGrid.length - 1]
                },
                translateTo: function(e = 0, t = this.params.speed, n = !0, r = !0, l) {
                    const o = this,
                        {
                            params: d,
                            wrapperEl: c
                        } = o;
                    if (o.animating && d.preventInteractionOnTransition) return !1;
                    const h = o.minTranslate(),
                        m = o.maxTranslate();
                    let f;
                    if (f = r && e > h ? h : r && e < m ? m : e, o.updateProgress(f), d.cssMode) {
                        const e = o.isHorizontal();
                        return 0 === t ? c[e ? "scrollLeft" : "scrollTop"] = -f : c.scrollTo ? c.scrollTo({
                            [e ? "left" : "top"]: -f,
                            behavior: "smooth"
                        }) : c[e ? "scrollLeft" : "scrollTop"] = -f, !0
                    }
                    return 0 === t ? (o.setTransition(0), o.setTranslate(f), n && (o.emit("beforeTransitionStart", t, l), o.emit("transitionEnd"))) : (o.setTransition(t), o.setTranslate(f), n && (o.emit("beforeTransitionStart", t, l), o.emit("transitionStart")), o.animating || (o.animating = !0, o.onTranslateToWrapperTransitionEnd || (o.onTranslateToWrapperTransitionEnd = function(e) {
                        o && !o.destroyed && e.target === this && (o.$wrapperEl[0].removeEventListener("transitionend", o.onTranslateToWrapperTransitionEnd), o.$wrapperEl[0].removeEventListener("webkitTransitionEnd", o.onTranslateToWrapperTransitionEnd), o.onTranslateToWrapperTransitionEnd = null, delete o.onTranslateToWrapperTransitionEnd, n && o.emit("transitionEnd"))
                    }), o.$wrapperEl[0].addEventListener("transitionend", o.onTranslateToWrapperTransitionEnd), o.$wrapperEl[0].addEventListener("webkitTransitionEnd", o.onTranslateToWrapperTransitionEnd))), !0
                }
            };
            var S = {
                setTransition: function(e, t) {
                    const n = this;
                    n.params.cssMode || n.$wrapperEl.transition(e), n.emit("setTransition", e, t)
                },
                transitionStart: function(e = !0, t) {
                    const n = this,
                        {
                            activeIndex: r,
                            params: l,
                            previousIndex: o
                        } = n;
                    if (l.cssMode) return;
                    l.autoHeight && n.updateAutoHeight();
                    let d = t;
                    if (d || (d = r > o ? "next" : r < o ? "prev" : "reset"), n.emit("transitionStart"), e && r !== o) {
                        if ("reset" === d) return void n.emit("slideResetTransitionStart");
                        n.emit("slideChangeTransitionStart"), "next" === d ? n.emit("slideNextTransitionStart") : n.emit("slidePrevTransitionStart")
                    }
                },
                transitionEnd: function(e = !0, t) {
                    const n = this,
                        {
                            activeIndex: r,
                            previousIndex: l,
                            params: o
                        } = n;
                    if (n.animating = !1, o.cssMode) return;
                    n.setTransition(0);
                    let d = t;
                    if (d || (d = r > l ? "next" : r < l ? "prev" : "reset"), n.emit("transitionEnd"), e && r !== l) {
                        if ("reset" === d) return void n.emit("slideResetTransitionEnd");
                        n.emit("slideChangeTransitionEnd"), "next" === d ? n.emit("slideNextTransitionEnd") : n.emit("slidePrevTransitionEnd")
                    }
                }
            };
            var C = {
                slideTo: function(e = 0, t = this.params.speed, n = !0, r) {
                    const l = this;
                    let o = e;
                    o < 0 && (o = 0);
                    const {
                        params: d,
                        snapGrid: c,
                        slidesGrid: h,
                        previousIndex: m,
                        activeIndex: f,
                        rtlTranslate: v,
                        wrapperEl: w
                    } = l;
                    if (l.animating && d.preventInteractionOnTransition) return !1;
                    const y = Math.min(l.params.slidesPerGroupSkip, o);
                    let x = y + Math.floor((o - y) / l.params.slidesPerGroup);
                    x >= c.length && (x = c.length - 1), (f || d.initialSlide || 0) === (m || 0) && n && l.emit("beforeSlideChangeStart");
                    const E = -c[x];
                    if (l.updateProgress(E), d.normalizeSlideIndex)
                        for (let i = 0; i < h.length; i += 1) - Math.floor(100 * E) >= Math.floor(100 * h[i]) && (o = i);
                    if (l.initialized && o !== f) {
                        if (!l.allowSlideNext && E < l.translate && E < l.minTranslate()) return !1;
                        if (!l.allowSlidePrev && E > l.translate && E > l.maxTranslate() && (f || 0) !== o) return !1
                    }
                    let T;
                    if (T = o > f ? "next" : o < f ? "prev" : "reset", v && -E === l.translate || !v && E === l.translate) return l.updateActiveIndex(o), d.autoHeight && l.updateAutoHeight(), l.updateSlidesClasses(), "slide" !== d.effect && l.setTranslate(E), "reset" !== T && (l.transitionStart(n, T), l.transitionEnd(n, T)), !1;
                    if (d.cssMode) {
                        const e = l.isHorizontal();
                        let n = -E;
                        return v && (n = w.scrollWidth - w.offsetWidth - n), 0 === t ? w[e ? "scrollLeft" : "scrollTop"] = n : w.scrollTo ? w.scrollTo({
                            [e ? "left" : "top"]: n,
                            behavior: "smooth"
                        }) : w[e ? "scrollLeft" : "scrollTop"] = n, !0
                    }
                    return 0 === t ? (l.setTransition(0), l.setTranslate(E), l.updateActiveIndex(o), l.updateSlidesClasses(), l.emit("beforeTransitionStart", t, r), l.transitionStart(n, T), l.transitionEnd(n, T)) : (l.setTransition(t), l.setTranslate(E), l.updateActiveIndex(o), l.updateSlidesClasses(), l.emit("beforeTransitionStart", t, r), l.transitionStart(n, T), l.animating || (l.animating = !0, l.onSlideToWrapperTransitionEnd || (l.onSlideToWrapperTransitionEnd = function(e) {
                        l && !l.destroyed && e.target === this && (l.$wrapperEl[0].removeEventListener("transitionend", l.onSlideToWrapperTransitionEnd), l.$wrapperEl[0].removeEventListener("webkitTransitionEnd", l.onSlideToWrapperTransitionEnd), l.onSlideToWrapperTransitionEnd = null, delete l.onSlideToWrapperTransitionEnd, l.transitionEnd(n, T))
                    }), l.$wrapperEl[0].addEventListener("transitionend", l.onSlideToWrapperTransitionEnd), l.$wrapperEl[0].addEventListener("webkitTransitionEnd", l.onSlideToWrapperTransitionEnd))), !0
                },
                slideToLoop: function(e = 0, t = this.params.speed, n = !0, r) {
                    const l = this;
                    let o = e;
                    return l.params.loop && (o += l.loopedSlides), l.slideTo(o, t, n, r)
                },
                slideNext: function(e = this.params.speed, t = !0, n) {
                    const r = this,
                        {
                            params: l,
                            animating: o
                        } = r,
                        d = r.activeIndex < l.slidesPerGroupSkip ? 1 : l.slidesPerGroup;
                    if (l.loop) {
                        if (o) return !1;
                        r.loopFix(), r._clientLeft = r.$wrapperEl[0].clientLeft
                    }
                    return r.slideTo(r.activeIndex + d, e, t, n)
                },
                slidePrev: function(e = this.params.speed, t = !0, n) {
                    const r = this,
                        {
                            params: l,
                            animating: o,
                            snapGrid: d,
                            slidesGrid: c,
                            rtlTranslate: h
                        } = r;
                    if (l.loop) {
                        if (o) return !1;
                        r.loopFix(), r._clientLeft = r.$wrapperEl[0].clientLeft
                    }

                    function m(e) {
                        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                    }
                    const f = m(h ? r.translate : -r.translate),
                        v = d.map((e => m(e)));
                    c.map((e => m(e))), d[v.indexOf(f)];
                    let w, y = d[v.indexOf(f) - 1];
                    return void 0 === y && l.cssMode && d.forEach((e => {
                        !y && f >= e && (y = e)
                    })), void 0 !== y && (w = c.indexOf(y), w < 0 && (w = r.activeIndex - 1)), r.slideTo(w, e, t, n)
                },
                slideReset: function(e = this.params.speed, t = !0, n) {
                    return this.slideTo(this.activeIndex, e, t, n)
                },
                slideToClosest: function(e = this.params.speed, t = !0, n, r = .5) {
                    const l = this;
                    let o = l.activeIndex;
                    const d = Math.min(l.params.slidesPerGroupSkip, o),
                        c = d + Math.floor((o - d) / l.params.slidesPerGroup),
                        h = l.rtlTranslate ? l.translate : -l.translate;
                    if (h >= l.snapGrid[c]) {
                        const e = l.snapGrid[c];
                        h - e > (l.snapGrid[c + 1] - e) * r && (o += l.params.slidesPerGroup)
                    } else {
                        const e = l.snapGrid[c - 1];
                        h - e <= (l.snapGrid[c] - e) * r && (o -= l.params.slidesPerGroup)
                    }
                    return o = Math.max(o, 0), o = Math.min(o, l.slidesGrid.length - 1), l.slideTo(o, e, t, n)
                },
                slideToClickedSlide: function() {
                    const e = this,
                        {
                            params: t,
                            $wrapperEl: n
                        } = e,
                        r = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                    let l, o = e.clickedIndex;
                    if (t.loop) {
                        if (e.animating) return;
                        l = parseInt(m(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? o < e.loopedSlides - r / 2 || o > e.slides.length - e.loopedSlides + r / 2 ? (e.loopFix(), o = n.children(`.${t.slideClass}[data-swiper-slide-index="${l}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), w.nextTick((() => {
                            e.slideTo(o)
                        }))) : e.slideTo(o) : o > e.slides.length - r ? (e.loopFix(), o = n.children(`.${t.slideClass}[data-swiper-slide-index="${l}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), w.nextTick((() => {
                            e.slideTo(o)
                        }))) : e.slideTo(o)
                    } else e.slideTo(o)
                }
            };
            var $ = {
                loopCreate: function() {
                    const e = this,
                        {
                            params: t,
                            $wrapperEl: n
                        } = e;
                    n.children(`.${t.slideClass}.${t.slideDuplicateClass}`).remove();
                    let r = n.children(`.${t.slideClass}`);
                    if (t.loopFillGroupWithBlank) {
                        const e = t.slidesPerGroup - r.length % t.slidesPerGroup;
                        if (e !== t.slidesPerGroup) {
                            for (let i = 0; i < e; i += 1) {
                                const e = m(o.createElement("div")).addClass(`${t.slideClass} ${t.slideBlankClass}`);
                                n.append(e)
                            }
                            r = n.children(`.${t.slideClass}`)
                        }
                    }
                    "auto" !== t.slidesPerView || t.loopedSlides || (t.loopedSlides = r.length), e.loopedSlides = Math.ceil(parseFloat(t.loopedSlides || t.slidesPerView, 10)), e.loopedSlides += t.loopAdditionalSlides, e.loopedSlides > r.length && (e.loopedSlides = r.length);
                    const l = [],
                        d = [];
                    r.each(((t, n) => {
                        const o = m(n);
                        t < e.loopedSlides && d.push(n), t < r.length && t >= r.length - e.loopedSlides && l.push(n), o.attr("data-swiper-slide-index", t)
                    }));
                    for (let i = 0; i < d.length; i += 1) n.append(m(d[i].cloneNode(!0)).addClass(t.slideDuplicateClass));
                    for (let i = l.length - 1; i >= 0; i -= 1) n.prepend(m(l[i].cloneNode(!0)).addClass(t.slideDuplicateClass))
                },
                loopFix: function() {
                    const e = this;
                    e.emit("beforeLoopFix");
                    const {
                        activeIndex: t,
                        slides: n,
                        loopedSlides: r,
                        allowSlidePrev: l,
                        allowSlideNext: o,
                        snapGrid: d,
                        rtlTranslate: c
                    } = e;
                    let h;
                    e.allowSlidePrev = !0, e.allowSlideNext = !0;
                    const m = -d[t] - e.getTranslate();
                    if (t < r) {
                        h = n.length - 3 * r + t, h += r;
                        e.slideTo(h, 0, !1, !0) && 0 !== m && e.setTranslate((c ? -e.translate : e.translate) - m)
                    } else if (t >= n.length - r) {
                        h = -n.length + t + r, h += r;
                        e.slideTo(h, 0, !1, !0) && 0 !== m && e.setTranslate((c ? -e.translate : e.translate) - m)
                    }
                    e.allowSlidePrev = l, e.allowSlideNext = o, e.emit("loopFix")
                },
                loopDestroy: function() {
                    const {
                        $wrapperEl: e,
                        params: t,
                        slides: n
                    } = this;
                    e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), n.removeAttr("data-swiper-slide-index")
                }
            };
            var M = {
                setGrabCursor: function(e) {
                    const t = this;
                    if (y.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                    const n = t.el;
                    n.style.cursor = "move", n.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", n.style.cursor = e ? "-moz-grabbin" : "-moz-grab", n.style.cursor = e ? "grabbing" : "grab"
                },
                unsetGrabCursor: function() {
                    const e = this;
                    y.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.el.style.cursor = "")
                }
            };
            var P = {
                appendSlide: function(e) {
                    const t = this,
                        {
                            $wrapperEl: n,
                            params: r
                        } = t;
                    if (r.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
                        for (let i = 0; i < e.length; i += 1) e[i] && n.append(e[i]);
                    else n.append(e);
                    r.loop && t.loopCreate(), r.observer && y.observer || t.update()
                },
                prependSlide: function(e) {
                    const t = this,
                        {
                            params: n,
                            $wrapperEl: r,
                            activeIndex: l
                        } = t;
                    n.loop && t.loopDestroy();
                    let o = l + 1;
                    if ("object" == typeof e && "length" in e) {
                        for (let i = 0; i < e.length; i += 1) e[i] && r.prepend(e[i]);
                        o = l + e.length
                    } else r.prepend(e);
                    n.loop && t.loopCreate(), n.observer && y.observer || t.update(), t.slideTo(o, 0, !1)
                },
                addSlide: function(e, t) {
                    const n = this,
                        {
                            $wrapperEl: r,
                            params: l,
                            activeIndex: o
                        } = n;
                    let d = o;
                    l.loop && (d -= n.loopedSlides, n.loopDestroy(), n.slides = r.children(`.${l.slideClass}`));
                    const c = n.slides.length;
                    if (e <= 0) return void n.prependSlide(t);
                    if (e >= c) return void n.appendSlide(t);
                    let h = d > e ? d + 1 : d;
                    const m = [];
                    for (let i = c - 1; i >= e; i -= 1) {
                        const e = n.slides.eq(i);
                        e.remove(), m.unshift(e)
                    }
                    if ("object" == typeof t && "length" in t) {
                        for (let i = 0; i < t.length; i += 1) t[i] && r.append(t[i]);
                        h = d > e ? d + t.length : d
                    } else r.append(t);
                    for (let i = 0; i < m.length; i += 1) r.append(m[i]);
                    l.loop && n.loopCreate(), l.observer && y.observer || n.update(), l.loop ? n.slideTo(h + n.loopedSlides, 0, !1) : n.slideTo(h, 0, !1)
                },
                removeSlide: function(e) {
                    const t = this,
                        {
                            params: n,
                            $wrapperEl: r,
                            activeIndex: l
                        } = t;
                    let o = l;
                    n.loop && (o -= t.loopedSlides, t.loopDestroy(), t.slides = r.children(`.${n.slideClass}`));
                    let d, c = o;
                    if ("object" == typeof e && "length" in e) {
                        for (let i = 0; i < e.length; i += 1) d = e[i], t.slides[d] && t.slides.eq(d).remove(), d < c && (c -= 1);
                        c = Math.max(c, 0)
                    } else d = e, t.slides[d] && t.slides.eq(d).remove(), d < c && (c -= 1), c = Math.max(c, 0);
                    n.loop && t.loopCreate(), n.observer && y.observer || t.update(), n.loop ? t.slideTo(c + t.loopedSlides, 0, !1) : t.slideTo(c, 0, !1)
                },
                removeAllSlides: function() {
                    const e = this,
                        t = [];
                    for (let i = 0; i < e.slides.length; i += 1) t.push(i);
                    e.removeSlide(t)
                }
            };
            const k = function() {
                const e = c.navigator.platform,
                    t = c.navigator.userAgent,
                    n = {
                        ios: !1,
                        android: !1,
                        androidChrome: !1,
                        desktop: !1,
                        iphone: !1,
                        ipod: !1,
                        ipad: !1,
                        edge: !1,
                        ie: !1,
                        firefox: !1,
                        macos: !1,
                        windows: !1,
                        cordova: !(!c.cordova && !c.phonegap),
                        phonegap: !(!c.cordova && !c.phonegap),
                        electron: !1
                    },
                    r = c.screen.width,
                    l = c.screen.height,
                    o = t.match(/(Android);?[\s\/]+([\d.]+)?/);
                let d = t.match(/(iPad).*OS\s([\d_]+)/);
                const h = t.match(/(iPod)(.*OS\s([\d_]+))?/),
                    m = !d && t.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                    f = t.indexOf("MSIE ") >= 0 || t.indexOf("Trident/") >= 0,
                    v = t.indexOf("Edge/") >= 0,
                    w = t.indexOf("Gecko/") >= 0 && t.indexOf("Firefox/") >= 0,
                    x = "Win32" === e,
                    E = t.toLowerCase().indexOf("electron") >= 0;
                let T = "MacIntel" === e;
                return !d && T && y.touch && (1024 === r && 1366 === l || 834 === r && 1194 === l || 834 === r && 1112 === l || 768 === r && 1024 === l) && (d = t.match(/(Version)\/([\d.]+)/), T = !1), n.ie = f, n.edge = v, n.firefox = w, o && !x && (n.os = "android", n.osVersion = o[2], n.android = !0, n.androidChrome = t.toLowerCase().indexOf("chrome") >= 0), (d || m || h) && (n.os = "ios", n.ios = !0), m && !h && (n.osVersion = m[2].replace(/_/g, "."), n.iphone = !0), d && (n.osVersion = d[2].replace(/_/g, "."), n.ipad = !0), h && (n.osVersion = h[3] ? h[3].replace(/_/g, ".") : null, n.ipod = !0), n.ios && n.osVersion && t.indexOf("Version/") >= 0 && "10" === n.osVersion.split(".")[0] && (n.osVersion = t.toLowerCase().split("version/")[1].split(" ")[0]), n.webView = !(!(m || d || h) || !t.match(/.*AppleWebKit(?!.*Safari)/i) && !c.navigator.standalone) || c.matchMedia && c.matchMedia("(display-mode: standalone)").matches, n.webview = n.webView, n.standalone = n.webView, n.desktop = !(n.ios || n.android) || E, n.desktop && (n.electron = E, n.macos = T, n.windows = x, n.macos && (n.os = "macos"), n.windows && (n.os = "windows")), n.pixelRatio = c.devicePixelRatio || 1, n
            }();

            function z(e) {
                const t = this,
                    data = t.touchEventsData,
                    {
                        params: n,
                        touches: r
                    } = t;
                if (t.animating && n.preventInteractionOnTransition) return;
                let l = e;
                l.originalEvent && (l = l.originalEvent);
                const d = m(l.target);
                if ("wrapper" === n.touchEventsTarget && !d.closest(t.wrapperEl).length) return;
                if (data.isTouchEvent = "touchstart" === l.type, !data.isTouchEvent && "which" in l && 3 === l.which) return;
                if (!data.isTouchEvent && "button" in l && l.button > 0) return;
                if (data.isTouched && data.isMoved) return;
                if (n.noSwiping && d.closest(n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`)[0]) return void(t.allowClick = !0);
                if (n.swipeHandler && !d.closest(n.swipeHandler)[0]) return;
                r.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX, r.currentY = "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY;
                const h = r.currentX,
                    f = r.currentY,
                    v = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection,
                    y = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;
                if (!v || !(h <= y || h >= c.screen.width - y)) {
                    if (w.extend(data, {
                            isTouched: !0,
                            isMoved: !1,
                            allowTouchCallbacks: !0,
                            isScrolling: void 0,
                            startMoving: void 0
                        }), r.startX = h, r.startY = f, data.touchStartTime = w.now(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, n.threshold > 0 && (data.allowThresholdMove = !1), "touchstart" !== l.type) {
                        let e = !0;
                        d.is(data.formElements) && (e = !1), o.activeElement && m(o.activeElement).is(data.formElements) && o.activeElement !== d[0] && o.activeElement.blur();
                        const r = e && t.allowTouchMove && n.touchStartPreventDefault;
                        (n.touchStartForcePreventDefault || r) && l.preventDefault()
                    }
                    t.emit("touchStart", l)
                }
            }

            function I(e) {
                const t = this,
                    data = t.touchEventsData,
                    {
                        params: n,
                        touches: r,
                        rtlTranslate: l
                    } = t;
                let d = e;
                if (d.originalEvent && (d = d.originalEvent), !data.isTouched) return void(data.startMoving && data.isScrolling && t.emit("touchMoveOpposite", d));
                if (data.isTouchEvent && "touchmove" !== d.type) return;
                const c = "touchmove" === d.type && d.targetTouches && (d.targetTouches[0] || d.changedTouches[0]),
                    h = "touchmove" === d.type ? c.pageX : d.pageX,
                    f = "touchmove" === d.type ? c.pageY : d.pageY;
                if (d.preventedByNestedSwiper) return r.startX = h, void(r.startY = f);
                if (!t.allowTouchMove) return t.allowClick = !1, void(data.isTouched && (w.extend(r, {
                    startX: h,
                    startY: f,
                    currentX: h,
                    currentY: f
                }), data.touchStartTime = w.now()));
                if (data.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
                    if (t.isVertical()) {
                        if (f < r.startY && t.translate <= t.maxTranslate() || f > r.startY && t.translate >= t.minTranslate()) return data.isTouched = !1, void(data.isMoved = !1)
                    } else if (h < r.startX && t.translate <= t.maxTranslate() || h > r.startX && t.translate >= t.minTranslate()) return;
                if (data.isTouchEvent && o.activeElement && d.target === o.activeElement && m(d.target).is(data.formElements)) return data.isMoved = !0, void(t.allowClick = !1);
                if (data.allowTouchCallbacks && t.emit("touchMove", d), d.targetTouches && d.targetTouches.length > 1) return;
                r.currentX = h, r.currentY = f;
                const v = r.currentX - r.startX,
                    y = r.currentY - r.startY;
                if (t.params.threshold && Math.sqrt(v ** 2 + y ** 2) < t.params.threshold) return;
                if (void 0 === data.isScrolling) {
                    let e;
                    t.isHorizontal() && r.currentY === r.startY || t.isVertical() && r.currentX === r.startX ? data.isScrolling = !1 : v * v + y * y >= 25 && (e = 180 * Math.atan2(Math.abs(y), Math.abs(v)) / Math.PI, data.isScrolling = t.isHorizontal() ? e > n.touchAngle : 90 - e > n.touchAngle)
                }
                if (data.isScrolling && t.emit("touchMoveOpposite", d), void 0 === data.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (data.startMoving = !0)), data.isScrolling) return void(data.isTouched = !1);
                if (!data.startMoving) return;
                t.allowClick = !1, !n.cssMode && d.cancelable && d.preventDefault(), n.touchMoveStopPropagation && !n.nested && d.stopPropagation(), data.isMoved || (n.loop && t.loopFix(), data.startTranslate = t.getTranslate(), t.setTransition(0), t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"), data.allowMomentumBounce = !1, !n.grabCursor || !0 !== t.allowSlideNext && !0 !== t.allowSlidePrev || t.setGrabCursor(!0), t.emit("sliderFirstMove", d)), t.emit("sliderMove", d), data.isMoved = !0;
                let x = t.isHorizontal() ? v : y;
                r.diff = x, x *= n.touchRatio, l && (x = -x), t.swipeDirection = x > 0 ? "prev" : "next", data.currentTranslate = x + data.startTranslate;
                let E = !0,
                    T = n.resistanceRatio;
                if (n.touchReleaseOnEdges && (T = 0), x > 0 && data.currentTranslate > t.minTranslate() ? (E = !1, n.resistance && (data.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + data.startTranslate + x) ** T)) : x < 0 && data.currentTranslate < t.maxTranslate() && (E = !1, n.resistance && (data.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - data.startTranslate - x) ** T)), E && (d.preventedByNestedSwiper = !0), !t.allowSlideNext && "next" === t.swipeDirection && data.currentTranslate < data.startTranslate && (data.currentTranslate = data.startTranslate), !t.allowSlidePrev && "prev" === t.swipeDirection && data.currentTranslate > data.startTranslate && (data.currentTranslate = data.startTranslate), n.threshold > 0) {
                    if (!(Math.abs(x) > n.threshold || data.allowThresholdMove)) return void(data.currentTranslate = data.startTranslate);
                    if (!data.allowThresholdMove) return data.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, data.currentTranslate = data.startTranslate, void(r.diff = t.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
                }
                n.followFinger && !n.cssMode && ((n.freeMode || n.watchSlidesProgress || n.watchSlidesVisibility) && (t.updateActiveIndex(), t.updateSlidesClasses()), n.freeMode && (0 === data.velocities.length && data.velocities.push({
                    position: r[t.isHorizontal() ? "startX" : "startY"],
                    time: data.touchStartTime
                }), data.velocities.push({
                    position: r[t.isHorizontal() ? "currentX" : "currentY"],
                    time: w.now()
                })), t.updateProgress(data.currentTranslate), t.setTranslate(data.currentTranslate))
            }

            function L(e) {
                const t = this,
                    data = t.touchEventsData,
                    {
                        params: n,
                        touches: r,
                        rtlTranslate: l,
                        $wrapperEl: o,
                        slidesGrid: d,
                        snapGrid: c
                    } = t;
                let h = e;
                if (h.originalEvent && (h = h.originalEvent), data.allowTouchCallbacks && t.emit("touchEnd", h), data.allowTouchCallbacks = !1, !data.isTouched) return data.isMoved && n.grabCursor && t.setGrabCursor(!1), data.isMoved = !1, void(data.startMoving = !1);
                n.grabCursor && data.isMoved && data.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                const m = w.now(),
                    f = m - data.touchStartTime;
                if (t.allowClick && (t.updateClickedSlide(h), t.emit("tap click", h), f < 300 && m - data.lastClickTime < 300 && t.emit("doubleTap doubleClick", h)), data.lastClickTime = w.now(), w.nextTick((() => {
                        t.destroyed || (t.allowClick = !0)
                    })), !data.isTouched || !data.isMoved || !t.swipeDirection || 0 === r.diff || data.currentTranslate === data.startTranslate) return data.isTouched = !1, data.isMoved = !1, void(data.startMoving = !1);
                let v;
                if (data.isTouched = !1, data.isMoved = !1, data.startMoving = !1, v = n.followFinger ? l ? t.translate : -t.translate : -data.currentTranslate, n.cssMode) return;
                if (n.freeMode) {
                    if (v < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                    if (v > -t.maxTranslate()) return void(t.slides.length < c.length ? t.slideTo(c.length - 1) : t.slideTo(t.slides.length - 1));
                    if (n.freeModeMomentum) {
                        if (data.velocities.length > 1) {
                            const e = data.velocities.pop(),
                                r = data.velocities.pop(),
                                l = e.position - r.position,
                                time = e.time - r.time;
                            t.velocity = l / time, t.velocity /= 2, Math.abs(t.velocity) < n.freeModeMinimumVelocity && (t.velocity = 0), (time > 150 || w.now() - e.time > 300) && (t.velocity = 0)
                        } else t.velocity = 0;
                        t.velocity *= n.freeModeMomentumVelocityRatio, data.velocities.length = 0;
                        let e = 1e3 * n.freeModeMomentumRatio;
                        const r = t.velocity * e;
                        let d = t.translate + r;
                        l && (d = -d);
                        let h, m = !1;
                        const f = 20 * Math.abs(t.velocity) * n.freeModeMomentumBounceRatio;
                        let v;
                        if (d < t.maxTranslate()) n.freeModeMomentumBounce ? (d + t.maxTranslate() < -f && (d = t.maxTranslate() - f), h = t.maxTranslate(), m = !0, data.allowMomentumBounce = !0) : d = t.maxTranslate(), n.loop && n.centeredSlides && (v = !0);
                        else if (d > t.minTranslate()) n.freeModeMomentumBounce ? (d - t.minTranslate() > f && (d = t.minTranslate() + f), h = t.minTranslate(), m = !0, data.allowMomentumBounce = !0) : d = t.minTranslate(), n.loop && n.centeredSlides && (v = !0);
                        else if (n.freeModeSticky) {
                            let e;
                            for (let t = 0; t < c.length; t += 1)
                                if (c[t] > -d) {
                                    e = t;
                                    break
                                }
                            d = Math.abs(c[e] - d) < Math.abs(c[e - 1] - d) || "next" === t.swipeDirection ? c[e] : c[e - 1], d = -d
                        }
                        if (v && t.once("transitionEnd", (() => {
                                t.loopFix()
                            })), 0 !== t.velocity) {
                            if (e = l ? Math.abs((-d - t.translate) / t.velocity) : Math.abs((d - t.translate) / t.velocity), n.freeModeSticky) {
                                const r = Math.abs((l ? -d : d) - t.translate),
                                    o = t.slidesSizesGrid[t.activeIndex];
                                e = r < o ? n.speed : r < 2 * o ? 1.5 * n.speed : 2.5 * n.speed
                            }
                        } else if (n.freeModeSticky) return void t.slideToClosest();
                        n.freeModeMomentumBounce && m ? (t.updateProgress(h), t.setTransition(e), t.setTranslate(d), t.transitionStart(!0, t.swipeDirection), t.animating = !0, o.transitionEnd((() => {
                            t && !t.destroyed && data.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(n.speed), setTimeout((() => {
                                t.setTranslate(h), o.transitionEnd((() => {
                                    t && !t.destroyed && t.transitionEnd()
                                }))
                            }), 0))
                        }))) : t.velocity ? (t.updateProgress(d), t.setTransition(e), t.setTranslate(d), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, o.transitionEnd((() => {
                            t && !t.destroyed && t.transitionEnd()
                        })))) : t.updateProgress(d), t.updateActiveIndex(), t.updateSlidesClasses()
                    } else if (n.freeModeSticky) return void t.slideToClosest();
                    return void((!n.freeModeMomentum || f >= n.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses()))
                }
                let y = 0,
                    x = t.slidesSizesGrid[0];
                for (let i = 0; i < d.length; i += i < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup) {
                    const e = i < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
                    void 0 !== d[i + e] ? v >= d[i] && v < d[i + e] && (y = i, x = d[i + e] - d[i]) : v >= d[i] && (y = i, x = d[d.length - 1] - d[d.length - 2])
                }
                const E = (v - d[y]) / x,
                    T = y < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
                if (f > n.longSwipesMs) {
                    if (!n.longSwipes) return void t.slideTo(t.activeIndex);
                    "next" === t.swipeDirection && (E >= n.longSwipesRatio ? t.slideTo(y + T) : t.slideTo(y)), "prev" === t.swipeDirection && (E > 1 - n.longSwipesRatio ? t.slideTo(y + T) : t.slideTo(y))
                } else {
                    if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
                    t.navigation && (h.target === t.navigation.nextEl || h.target === t.navigation.prevEl) ? h.target === t.navigation.nextEl ? t.slideTo(y + T) : t.slideTo(y) : ("next" === t.swipeDirection && t.slideTo(y + T), "prev" === t.swipeDirection && t.slideTo(y))
                }
            }

            function O() {
                const e = this,
                    {
                        params: t,
                        el: n
                    } = e;
                if (n && 0 === n.offsetWidth) return;
                t.breakpoints && e.setBreakpoint();
                const {
                    allowSlideNext: r,
                    allowSlidePrev: l,
                    snapGrid: o
                } = e;
                e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = l, e.allowSlideNext = r, e.params.watchOverflow && o !== e.snapGrid && e.checkOverflow()
            }

            function D(e) {
                const t = this;
                t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
            }

            function A() {
                const e = this,
                    {
                        wrapperEl: t,
                        rtlTranslate: n
                    } = e;
                let r;
                e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = n ? t.scrollWidth - t.offsetWidth - t.scrollLeft : -t.scrollLeft : e.translate = -t.scrollTop, -0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
                const l = e.maxTranslate() - e.minTranslate();
                r = 0 === l ? 0 : (e.translate - e.minTranslate()) / l, r !== e.progress && e.updateProgress(n ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
            }
            let B = !1;

            function G() {}
            var N = {
                init: !0,
                direction: "horizontal",
                touchEventsTarget: "container",
                initialSlide: 0,
                speed: 300,
                cssMode: !1,
                updateOnWindowResize: !0,
                preventInteractionOnTransition: !1,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                freeMode: !1,
                freeModeMomentum: !0,
                freeModeMomentumRatio: 1,
                freeModeMomentumBounce: !0,
                freeModeMomentumBounceRatio: 1,
                freeModeMomentumVelocityRatio: 1,
                freeModeSticky: !1,
                freeModeMinimumVelocity: .02,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerColumnFill: "column",
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                centeredSlides: !1,
                centeredSlidesBounds: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !1,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 0,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                watchSlidesVisibility: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                loopFillGroupWithBlank: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                containerModifierClass: "swiper-container-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-invisible-blank",
                slideActiveClass: "swiper-slide-active",
                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                slidePrevClass: "swiper-slide-prev",
                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                wrapperClass: "swiper-wrapper",
                runCallbacksOnInit: !0
            };
            const H = {
                    update: E,
                    translate: T,
                    transition: S,
                    slide: C,
                    loop: $,
                    grabCursor: M,
                    manipulation: P,
                    events: {
                        attachEvents: function() {
                            const e = this,
                                {
                                    params: t,
                                    touchEvents: n,
                                    el: r,
                                    wrapperEl: l
                                } = e;
                            e.onTouchStart = z.bind(e), e.onTouchMove = I.bind(e), e.onTouchEnd = L.bind(e), t.cssMode && (e.onScroll = A.bind(e)), e.onClick = D.bind(e);
                            const d = !!t.nested;
                            if (!y.touch && y.pointerEvents) r.addEventListener(n.start, e.onTouchStart, !1), o.addEventListener(n.move, e.onTouchMove, d), o.addEventListener(n.end, e.onTouchEnd, !1);
                            else {
                                if (y.touch) {
                                    const l = !("touchstart" !== n.start || !y.passiveListener || !t.passiveListeners) && {
                                        passive: !0,
                                        capture: !1
                                    };
                                    r.addEventListener(n.start, e.onTouchStart, l), r.addEventListener(n.move, e.onTouchMove, y.passiveListener ? {
                                        passive: !1,
                                        capture: d
                                    } : d), r.addEventListener(n.end, e.onTouchEnd, l), n.cancel && r.addEventListener(n.cancel, e.onTouchEnd, l), B || (o.addEventListener("touchstart", G), B = !0)
                                }(t.simulateTouch && !k.ios && !k.android || t.simulateTouch && !y.touch && k.ios) && (r.addEventListener("mousedown", e.onTouchStart, !1), o.addEventListener("mousemove", e.onTouchMove, d), o.addEventListener("mouseup", e.onTouchEnd, !1))
                            }(t.preventClicks || t.preventClicksPropagation) && r.addEventListener("click", e.onClick, !0), t.cssMode && l.addEventListener("scroll", e.onScroll), t.updateOnWindowResize ? e.on(k.ios || k.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", O, !0) : e.on("observerUpdate", O, !0)
                        },
                        detachEvents: function() {
                            const e = this,
                                {
                                    params: t,
                                    touchEvents: n,
                                    el: r,
                                    wrapperEl: l
                                } = e,
                                d = !!t.nested;
                            if (!y.touch && y.pointerEvents) r.removeEventListener(n.start, e.onTouchStart, !1), o.removeEventListener(n.move, e.onTouchMove, d), o.removeEventListener(n.end, e.onTouchEnd, !1);
                            else {
                                if (y.touch) {
                                    const l = !("onTouchStart" !== n.start || !y.passiveListener || !t.passiveListeners) && {
                                        passive: !0,
                                        capture: !1
                                    };
                                    r.removeEventListener(n.start, e.onTouchStart, l), r.removeEventListener(n.move, e.onTouchMove, d), r.removeEventListener(n.end, e.onTouchEnd, l), n.cancel && r.removeEventListener(n.cancel, e.onTouchEnd, l)
                                }(t.simulateTouch && !k.ios && !k.android || t.simulateTouch && !y.touch && k.ios) && (r.removeEventListener("mousedown", e.onTouchStart, !1), o.removeEventListener("mousemove", e.onTouchMove, d), o.removeEventListener("mouseup", e.onTouchEnd, !1))
                            }(t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", e.onClick, !0), t.cssMode && l.removeEventListener("scroll", e.onScroll), e.off(k.ios || k.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", O)
                        }
                    },
                    breakpoints: {
                        setBreakpoint: function() {
                            const e = this,
                                {
                                    activeIndex: t,
                                    initialized: n,
                                    loopedSlides: r = 0,
                                    params: l,
                                    $el: o
                                } = e,
                                d = l.breakpoints;
                            if (!d || d && 0 === Object.keys(d).length) return;
                            const c = e.getBreakpoint(d);
                            if (c && e.currentBreakpoint !== c) {
                                const h = c in d ? d[c] : void 0;
                                h && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach((param => {
                                    const e = h[param];
                                    void 0 !== e && (h[param] = "slidesPerView" !== param || "AUTO" !== e && "auto" !== e ? "slidesPerView" === param ? parseFloat(e) : parseInt(e, 10) : "auto")
                                }));
                                const m = h || e.originalParams,
                                    f = l.slidesPerColumn > 1,
                                    v = m.slidesPerColumn > 1;
                                f && !v ? o.removeClass(`${l.containerModifierClass}multirow ${l.containerModifierClass}multirow-column`) : !f && v && (o.addClass(`${l.containerModifierClass}multirow`), "column" === m.slidesPerColumnFill && o.addClass(`${l.containerModifierClass}multirow-column`));
                                const y = m.direction && m.direction !== l.direction,
                                    x = l.loop && (m.slidesPerView !== l.slidesPerView || y);
                                y && n && e.changeDirection(), w.extend(e.params, m), w.extend(e, {
                                    allowTouchMove: e.params.allowTouchMove,
                                    allowSlideNext: e.params.allowSlideNext,
                                    allowSlidePrev: e.params.allowSlidePrev
                                }), e.currentBreakpoint = c, x && n && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - r + e.loopedSlides, 0, !1)), e.emit("breakpoint", m)
                            }
                        },
                        getBreakpoint: function(e) {
                            if (!e) return;
                            let t = !1;
                            const n = Object.keys(e).map((e => {
                                if ("string" == typeof e && 0 === e.indexOf("@")) {
                                    const t = parseFloat(e.substr(1));
                                    return {
                                        value: c.innerHeight * t,
                                        point: e
                                    }
                                }
                                return {
                                    value: e,
                                    point: e
                                }
                            }));
                            n.sort(((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10)));
                            for (let i = 0; i < n.length; i += 1) {
                                const {
                                    point: e,
                                    value: r
                                } = n[i];
                                r <= c.innerWidth && (t = e)
                            }
                            return t || "max"
                        }
                    },
                    checkOverflow: {
                        checkOverflow: function() {
                            const e = this,
                                t = e.params,
                                n = e.isLocked,
                                r = e.slides.length > 0 && t.slidesOffsetBefore + t.spaceBetween * (e.slides.length - 1) + e.slides[0].offsetWidth * e.slides.length;
                            t.slidesOffsetBefore && t.slidesOffsetAfter && r ? e.isLocked = r <= e.size : e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, n !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), n && n !== e.isLocked && (e.isEnd = !1, e.navigation && e.navigation.update())
                        }
                    },
                    classes: {
                        addClasses: function() {
                            const {
                                classNames: e,
                                params: t,
                                rtl: n,
                                $el: r
                            } = this, l = [];
                            l.push("initialized"), l.push(t.direction), t.freeMode && l.push("free-mode"), t.autoHeight && l.push("autoheight"), n && l.push("rtl"), t.slidesPerColumn > 1 && (l.push("multirow"), "column" === t.slidesPerColumnFill && l.push("multirow-column")), k.android && l.push("android"), k.ios && l.push("ios"), t.cssMode && l.push("css-mode"), l.forEach((n => {
                                e.push(t.containerModifierClass + n)
                            })), r.addClass(e.join(" "))
                        },
                        removeClasses: function() {
                            const {
                                $el: e,
                                classNames: t
                            } = this;
                            e.removeClass(t.join(" "))
                        }
                    },
                    images: {
                        loadImage: function(e, t, n, r, l, o) {
                            let image;

                            function d() {
                                o && o()
                            }
                            m(e).parent("picture")[0] || e.complete && l ? d() : t ? (image = new c.Image, image.onload = d, image.onerror = d, r && (image.sizes = r), n && (image.srcset = n), t && (image.src = t)) : d()
                        },
                        preloadImages: function() {
                            const e = this;

                            function t() {
                                null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                            }
                            e.imagesToLoad = e.$el.find("img");
                            for (let i = 0; i < e.imagesToLoad.length; i += 1) {
                                const n = e.imagesToLoad[i];
                                e.loadImage(n, n.currentSrc || n.getAttribute("src"), n.srcset || n.getAttribute("srcset"), n.sizes || n.getAttribute("sizes"), !0, t)
                            }
                        }
                    }
                },
                X = {};
            class V extends x {
                constructor(...e) {
                    let t, n;
                    1 === e.length && e[0].constructor && e[0].constructor === Object ? n = e[0] : [t, n] = e, n || (n = {}), n = w.extend({}, n), t && !n.el && (n.el = t), super(n), Object.keys(H).forEach((e => {
                        Object.keys(H[e]).forEach((t => {
                            V.prototype[t] || (V.prototype[t] = H[e][t])
                        }))
                    }));
                    const r = this;
                    void 0 === r.modules && (r.modules = {}), Object.keys(r.modules).forEach((e => {
                        const t = r.modules[e];
                        if (t.params) {
                            const e = Object.keys(t.params)[0],
                                r = t.params[e];
                            if ("object" != typeof r || null === r) return;
                            if (!(e in n) || !("enabled" in r)) return;
                            !0 === n[e] && (n[e] = {
                                enabled: !0
                            }), "object" != typeof n[e] || "enabled" in n[e] || (n[e].enabled = !0), n[e] || (n[e] = {
                                enabled: !1
                            })
                        }
                    }));
                    const l = w.extend({}, N);
                    r.useModulesParams(l), r.params = w.extend({}, l, X, n), r.originalParams = w.extend({}, r.params), r.passedParams = w.extend({}, n), r.$ = m;
                    const o = m(r.params.el);
                    if (t = o[0], !t) return;
                    if (o.length > 1) {
                        const e = [];
                        return o.each(((t, r) => {
                            const l = w.extend({}, n, {
                                el: r
                            });
                            e.push(new V(l))
                        })), e
                    }
                    let d;
                    return t.swiper = r, o.data("swiper", r), t && t.shadowRoot && t.shadowRoot.querySelector ? (d = m(t.shadowRoot.querySelector(`.${r.params.wrapperClass}`)), d.children = e => o.children(e)) : d = o.children(`.${r.params.wrapperClass}`), w.extend(r, {
                        $el: o,
                        el: t,
                        $wrapperEl: d,
                        wrapperEl: d[0],
                        classNames: [],
                        slides: m(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: () => "horizontal" === r.params.direction,
                        isVertical: () => "vertical" === r.params.direction,
                        rtl: "rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction"),
                        rtlTranslate: "horizontal" === r.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction")),
                        wrongRTL: "-webkit-box" === d.css("display"),
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: r.params.allowSlideNext,
                        allowSlidePrev: r.params.allowSlidePrev,
                        touchEvents: function() {
                            const e = ["touchstart", "touchmove", "touchend", "touchcancel"];
                            let t = ["mousedown", "mousemove", "mouseup"];
                            return y.pointerEvents && (t = ["pointerdown", "pointermove", "pointerup"]), r.touchEventsTouch = {
                                start: e[0],
                                move: e[1],
                                end: e[2],
                                cancel: e[3]
                            }, r.touchEventsDesktop = {
                                start: t[0],
                                move: t[1],
                                end: t[2]
                            }, y.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop
                        }(),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            formElements: "input, select, option, textarea, button, video, label",
                            lastClickTime: w.now(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: r.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), r.useModules(), r.params.init && r.init(), r
                }
                slidesPerViewDynamic() {
                    const {
                        params: e,
                        slides: t,
                        slidesGrid: n,
                        size: r,
                        activeIndex: l
                    } = this;
                    let o = 1;
                    if (e.centeredSlides) {
                        let e, n = t[l].swiperSlideSize;
                        for (let i = l + 1; i < t.length; i += 1) t[i] && !e && (n += t[i].swiperSlideSize, o += 1, n > r && (e = !0));
                        for (let i = l - 1; i >= 0; i -= 1) t[i] && !e && (n += t[i].swiperSlideSize, o += 1, n > r && (e = !0))
                    } else
                        for (let i = l + 1; i < t.length; i += 1) n[i] - n[l] < r && (o += 1);
                    return o
                }
                update() {
                    const e = this;
                    if (!e || e.destroyed) return;
                    const {
                        snapGrid: t,
                        params: n
                    } = e;

                    function r() {
                        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                            n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                        e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses()
                    }
                    let l;
                    n.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (r(), e.params.autoHeight && e.updateAutoHeight()) : (l = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), l || r()), n.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
                }
                changeDirection(e, t = !0) {
                    const n = this,
                        r = n.params.direction;
                    return e || (e = "horizontal" === r ? "vertical" : "horizontal"), e === r || "horizontal" !== e && "vertical" !== e || (n.$el.removeClass(`${n.params.containerModifierClass}${r}`).addClass(`${n.params.containerModifierClass}${e}`), n.params.direction = e, n.slides.each(((t, n) => {
                        "vertical" === e ? n.style.width = "" : n.style.height = ""
                    })), n.emit("changeDirection"), t && n.update()), n
                }
                init() {
                    const e = this;
                    e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"))
                }
                destroy(e = !0, t = !0) {
                    const n = this,
                        {
                            params: r,
                            $el: l,
                            $wrapperEl: o,
                            slides: d
                        } = n;
                    return void 0 === n.params || n.destroyed || (n.emit("beforeDestroy"), n.initialized = !1, n.detachEvents(), r.loop && n.loopDestroy(), t && (n.removeClasses(), l.removeAttr("style"), o.removeAttr("style"), d && d.length && d.removeClass([r.slideVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), n.emit("destroy"), Object.keys(n.eventsListeners).forEach((e => {
                        n.off(e)
                    })), !1 !== e && (n.$el[0].swiper = null, n.$el.data("swiper", null), w.deleteProps(n)), n.destroyed = !0), null
                }
                static extendDefaults(e) {
                    w.extend(X, e)
                }
                static get extendedDefaults() {
                    return X
                }
                static get defaults() {
                    return N
                }
                static get Class() {
                    return x
                }
                static get $() {
                    return m
                }
            }
            var Y = {
                    name: "device",
                    proto: {
                        device: k
                    },
                    static: {
                        device: k
                    }
                },
                F = {
                    name: "support",
                    proto: {
                        support: y
                    },
                    static: {
                        support: y
                    }
                };
            const W = {
                isEdge: !!c.navigator.userAgent.match(/Edge/g),
                isSafari: function() {
                    const e = c.navigator.userAgent.toLowerCase();
                    return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
                }(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(c.navigator.userAgent)
            };
            var R = {
                    name: "browser",
                    proto: {
                        browser: W
                    },
                    static: {
                        browser: W
                    }
                },
                j = {
                    name: "resize",
                    create() {
                        const e = this;
                        w.extend(e, {
                            resize: {
                                resizeHandler() {
                                    e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                                },
                                orientationChangeHandler() {
                                    e && !e.destroyed && e.initialized && e.emit("orientationchange")
                                }
                            }
                        })
                    },
                    on: {
                        init() {
                            c.addEventListener("resize", this.resize.resizeHandler), c.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                        },
                        destroy() {
                            c.removeEventListener("resize", this.resize.resizeHandler), c.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                        }
                    }
                };
            const U = {
                func: c.MutationObserver || c.WebkitMutationObserver,
                attach(e, t = {}) {
                    const n = this,
                        r = new(0, U.func)((e => {
                            if (1 === e.length) return void n.emit("observerUpdate", e[0]);
                            const t = function() {
                                n.emit("observerUpdate", e[0])
                            };
                            c.requestAnimationFrame ? c.requestAnimationFrame(t) : c.setTimeout(t, 0)
                        }));
                    r.observe(e, {
                        attributes: void 0 === t.attributes || t.attributes,
                        childList: void 0 === t.childList || t.childList,
                        characterData: void 0 === t.characterData || t.characterData
                    }), n.observer.observers.push(r)
                },
                init() {
                    const e = this;
                    if (y.observer && e.params.observer) {
                        if (e.params.observeParents) {
                            const t = e.$el.parents();
                            for (let i = 0; i < t.length; i += 1) e.observer.attach(t[i])
                        }
                        e.observer.attach(e.$el[0], {
                            childList: e.params.observeSlideChildren
                        }), e.observer.attach(e.$wrapperEl[0], {
                            attributes: !1
                        })
                    }
                },
                destroy() {
                    this.observer.observers.forEach((e => {
                        e.disconnect()
                    })), this.observer.observers = []
                }
            };
            var K = {
                name: "observer",
                params: {
                    observer: !1,
                    observeParents: !1,
                    observeSlideChildren: !1
                },
                create() {
                    const e = this;
                    w.extend(e, {
                        observer: {
                            init: U.init.bind(e),
                            attach: U.attach.bind(e),
                            destroy: U.destroy.bind(e),
                            observers: []
                        }
                    })
                },
                on: {
                    init() {
                        this.observer.init()
                    },
                    destroy() {
                        this.observer.destroy()
                    }
                }
            };
            const _ = {
                update(e) {
                    const t = this,
                        {
                            slidesPerView: n,
                            slidesPerGroup: r,
                            centeredSlides: l
                        } = t.params,
                        {
                            addSlidesBefore: o,
                            addSlidesAfter: d
                        } = t.params.virtual,
                        {
                            from: c,
                            to: h,
                            slides: m,
                            slidesGrid: f,
                            renderSlide: v,
                            offset: y
                        } = t.virtual;
                    t.updateActiveIndex();
                    const x = t.activeIndex || 0;
                    let E, T, S;
                    E = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", l ? (T = Math.floor(n / 2) + r + o, S = Math.floor(n / 2) + r + d) : (T = n + (r - 1) + o, S = r + d);
                    const C = Math.max((x || 0) - S, 0),
                        $ = Math.min((x || 0) + T, m.length - 1),
                        M = (t.slidesGrid[C] || 0) - (t.slidesGrid[0] || 0);

                    function P() {
                        t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
                    }
                    if (w.extend(t.virtual, {
                            from: C,
                            to: $,
                            offset: M,
                            slidesGrid: t.slidesGrid
                        }), c === C && h === $ && !e) return t.slidesGrid !== f && M !== y && t.slides.css(E, `${M}px`), void t.updateProgress();
                    if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
                        offset: M,
                        from: C,
                        to: $,
                        slides: function() {
                            const e = [];
                            for (let i = C; i <= $; i += 1) e.push(m[i]);
                            return e
                        }()
                    }), void P();
                    const k = [],
                        z = [];
                    if (e) t.$wrapperEl.find(`.${t.params.slideClass}`).remove();
                    else
                        for (let i = c; i <= h; i += 1)(i < C || i > $) && t.$wrapperEl.find(`.${t.params.slideClass}[data-swiper-slide-index="${i}"]`).remove();
                    for (let i = 0; i < m.length; i += 1) i >= C && i <= $ && (void 0 === h || e ? z.push(i) : (i > h && z.push(i), i < c && k.push(i)));
                    z.forEach((e => {
                        t.$wrapperEl.append(v(m[e], e))
                    })), k.sort(((a, b) => b - a)).forEach((e => {
                        t.$wrapperEl.prepend(v(m[e], e))
                    })), t.$wrapperEl.children(".swiper-slide").css(E, `${M}px`), P()
                },
                renderSlide(e, t) {
                    const n = this,
                        r = n.params.virtual;
                    if (r.cache && n.virtual.cache[t]) return n.virtual.cache[t];
                    const l = r.renderSlide ? m(r.renderSlide.call(n, e, t)) : m(`<div class="${n.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);
                    return l.attr("data-swiper-slide-index") || l.attr("data-swiper-slide-index", t), r.cache && (n.virtual.cache[t] = l), l
                },
                appendSlide(e) {
                    const t = this;
                    if ("object" == typeof e && "length" in e)
                        for (let i = 0; i < e.length; i += 1) e[i] && t.virtual.slides.push(e[i]);
                    else t.virtual.slides.push(e);
                    t.virtual.update(!0)
                },
                prependSlide(e) {
                    const t = this,
                        n = t.activeIndex;
                    let r = n + 1,
                        l = 1;
                    if (Array.isArray(e)) {
                        for (let i = 0; i < e.length; i += 1) e[i] && t.virtual.slides.unshift(e[i]);
                        r = n + e.length, l = e.length
                    } else t.virtual.slides.unshift(e);
                    if (t.params.virtual.cache) {
                        const e = t.virtual.cache,
                            n = {};
                        Object.keys(e).forEach((t => {
                            const r = e[t],
                                o = r.attr("data-swiper-slide-index");
                            o && r.attr("data-swiper-slide-index", parseInt(o, 10) + 1), n[parseInt(t, 10) + l] = r
                        })), t.virtual.cache = n
                    }
                    t.virtual.update(!0), t.slideTo(r, 0)
                },
                removeSlide(e) {
                    const t = this;
                    if (null == e) return;
                    let n = t.activeIndex;
                    if (Array.isArray(e))
                        for (let i = e.length - 1; i >= 0; i -= 1) t.virtual.slides.splice(e[i], 1), t.params.virtual.cache && delete t.virtual.cache[e[i]], e[i] < n && (n -= 1), n = Math.max(n, 0);
                    else t.virtual.slides.splice(e, 1), t.params.virtual.cache && delete t.virtual.cache[e], e < n && (n -= 1), n = Math.max(n, 0);
                    t.virtual.update(!0), t.slideTo(n, 0)
                },
                removeAllSlides() {
                    const e = this;
                    e.virtual.slides = [], e.params.virtual.cache && (e.virtual.cache = {}), e.virtual.update(!0), e.slideTo(0, 0)
                }
            };
            var Z = {
                name: "virtual",
                params: {
                    virtual: {
                        enabled: !1,
                        slides: [],
                        cache: !0,
                        renderSlide: null,
                        renderExternal: null,
                        addSlidesBefore: 0,
                        addSlidesAfter: 0
                    }
                },
                create() {
                    const e = this;
                    w.extend(e, {
                        virtual: {
                            update: _.update.bind(e),
                            appendSlide: _.appendSlide.bind(e),
                            prependSlide: _.prependSlide.bind(e),
                            removeSlide: _.removeSlide.bind(e),
                            removeAllSlides: _.removeAllSlides.bind(e),
                            renderSlide: _.renderSlide.bind(e),
                            slides: e.params.virtual.slides,
                            cache: {}
                        }
                    })
                },
                on: {
                    beforeInit() {
                        const e = this;
                        if (!e.params.virtual.enabled) return;
                        e.classNames.push(`${e.params.containerModifierClass}virtual`);
                        const t = {
                            watchSlidesProgress: !0
                        };
                        w.extend(e.params, t), w.extend(e.originalParams, t), e.params.initialSlide || e.virtual.update()
                    },
                    setTranslate() {
                        this.params.virtual.enabled && this.virtual.update()
                    }
                }
            };
            const J = {
                handle(e) {
                    const t = this,
                        {
                            rtlTranslate: n
                        } = t;
                    let r = e;
                    r.originalEvent && (r = r.originalEvent);
                    const l = r.keyCode || r.charCode,
                        d = t.params.keyboard.pageUpDown,
                        h = d && 33 === l,
                        m = d && 34 === l,
                        f = 37 === l,
                        v = 39 === l,
                        w = 38 === l,
                        y = 40 === l;
                    if (!t.allowSlideNext && (t.isHorizontal() && v || t.isVertical() && y || m)) return !1;
                    if (!t.allowSlidePrev && (t.isHorizontal() && f || t.isVertical() && w || h)) return !1;
                    if (!(r.shiftKey || r.altKey || r.ctrlKey || r.metaKey || o.activeElement && o.activeElement.nodeName && ("input" === o.activeElement.nodeName.toLowerCase() || "textarea" === o.activeElement.nodeName.toLowerCase()))) {
                        if (t.params.keyboard.onlyInViewport && (h || m || f || v || w || y)) {
                            let e = !1;
                            if (t.$el.parents(`.${t.params.slideClass}`).length > 0 && 0 === t.$el.parents(`.${t.params.slideActiveClass}`).length) return;
                            const r = c.innerWidth,
                                l = c.innerHeight,
                                o = t.$el.offset();
                            n && (o.left -= t.$el[0].scrollLeft);
                            const d = [
                                [o.left, o.top],
                                [o.left + t.width, o.top],
                                [o.left, o.top + t.height],
                                [o.left + t.width, o.top + t.height]
                            ];
                            for (let i = 0; i < d.length; i += 1) {
                                const t = d[i];
                                t[0] >= 0 && t[0] <= r && t[1] >= 0 && t[1] <= l && (e = !0)
                            }
                            if (!e) return
                        }
                        t.isHorizontal() ? ((h || m || f || v) && (r.preventDefault ? r.preventDefault() : r.returnValue = !1), ((m || v) && !n || (h || f) && n) && t.slideNext(), ((h || f) && !n || (m || v) && n) && t.slidePrev()) : ((h || m || w || y) && (r.preventDefault ? r.preventDefault() : r.returnValue = !1), (m || y) && t.slideNext(), (h || w) && t.slidePrev()), t.emit("keyPress", l)
                    }
                },
                enable() {
                    const e = this;
                    e.keyboard.enabled || (m(o).on("keydown", e.keyboard.handle), e.keyboard.enabled = !0)
                },
                disable() {
                    const e = this;
                    e.keyboard.enabled && (m(o).off("keydown", e.keyboard.handle), e.keyboard.enabled = !1)
                }
            };
            var Q = {
                name: "keyboard",
                params: {
                    keyboard: {
                        enabled: !1,
                        onlyInViewport: !0,
                        pageUpDown: !0
                    }
                },
                create() {
                    const e = this;
                    w.extend(e, {
                        keyboard: {
                            enabled: !1,
                            enable: J.enable.bind(e),
                            disable: J.disable.bind(e),
                            handle: J.handle.bind(e)
                        }
                    })
                },
                on: {
                    init() {
                        const e = this;
                        e.params.keyboard.enabled && e.keyboard.enable()
                    },
                    destroy() {
                        const e = this;
                        e.keyboard.enabled && e.keyboard.disable()
                    }
                }
            };
            const ee = {
                lastScrollTime: w.now(),
                lastEventBeforeSnap: void 0,
                recentWheelEvents: [],
                event: () => c.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
                    const e = "onwheel";
                    let t = e in o;
                    if (!t) {
                        const element = o.createElement("div");
                        element.setAttribute(e, "return;"), t = "function" == typeof element[e]
                    }
                    return !t && o.implementation && o.implementation.hasFeature && !0 !== o.implementation.hasFeature("", "") && (t = o.implementation.hasFeature("Events.wheel", "3.0")), t
                }() ? "wheel" : "mousewheel",
                normalize(e) {
                    let t = 0,
                        n = 0,
                        r = 0,
                        l = 0;
                    return "detail" in e && (n = e.detail), "wheelDelta" in e && (n = -e.wheelDelta / 120), "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0), r = 10 * t, l = 10 * n, "deltaY" in e && (l = e.deltaY), "deltaX" in e && (r = e.deltaX), e.shiftKey && !r && (r = l, l = 0), (r || l) && e.deltaMode && (1 === e.deltaMode ? (r *= 40, l *= 40) : (r *= 800, l *= 800)), r && !t && (t = r < 1 ? -1 : 1), l && !n && (n = l < 1 ? -1 : 1), {
                        spinX: t,
                        spinY: n,
                        pixelX: r,
                        pixelY: l
                    }
                },
                handleMouseEnter() {
                    this.mouseEntered = !0
                },
                handleMouseLeave() {
                    this.mouseEntered = !1
                },
                handle(e) {
                    let t = e;
                    const n = this,
                        r = n.params.mousewheel;
                    n.params.cssMode && t.preventDefault();
                    let l = n.$el;
                    if ("container" !== n.params.mousewheel.eventsTarged && (l = m(n.params.mousewheel.eventsTarged)), !n.mouseEntered && !l[0].contains(t.target) && !r.releaseOnEdges) return !0;
                    t.originalEvent && (t = t.originalEvent);
                    let o = 0;
                    const d = n.rtlTranslate ? -1 : 1,
                        data = ee.normalize(t);
                    if (r.forceToAxis)
                        if (n.isHorizontal()) {
                            if (!(Math.abs(data.pixelX) > Math.abs(data.pixelY))) return !0;
                            o = -data.pixelX * d
                        } else {
                            if (!(Math.abs(data.pixelY) > Math.abs(data.pixelX))) return !0;
                            o = -data.pixelY
                        }
                    else o = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * d : -data.pixelY;
                    if (0 === o) return !0;
                    if (r.invert && (o = -o), n.params.freeMode) {
                        const e = {
                                time: w.now(),
                                delta: Math.abs(o),
                                direction: Math.sign(o)
                            },
                            {
                                lastEventBeforeSnap: l
                            } = n.mousewheel,
                            d = l && e.time < l.time + 500 && e.delta <= l.delta && e.direction === l.direction;
                        if (!d) {
                            n.mousewheel.lastEventBeforeSnap = void 0, n.params.loop && n.loopFix();
                            let l = n.getTranslate() + o * r.sensitivity;
                            const c = n.isBeginning,
                                h = n.isEnd;
                            if (l >= n.minTranslate() && (l = n.minTranslate()), l <= n.maxTranslate() && (l = n.maxTranslate()), n.setTransition(0), n.setTranslate(l), n.updateProgress(), n.updateActiveIndex(), n.updateSlidesClasses(), (!c && n.isBeginning || !h && n.isEnd) && n.updateSlidesClasses(), n.params.freeModeSticky) {
                                clearTimeout(n.mousewheel.timeout), n.mousewheel.timeout = void 0;
                                const t = n.mousewheel.recentWheelEvents;
                                t.length >= 15 && t.shift();
                                const r = t.length ? t[t.length - 1] : void 0,
                                    l = t[0];
                                if (t.push(e), r && (e.delta > r.delta || e.direction !== r.direction)) t.splice(0);
                                else if (t.length >= 15 && e.time - l.time < 500 && l.delta - e.delta >= 1 && e.delta <= 6) {
                                    const r = o > 0 ? .8 : .2;
                                    n.mousewheel.lastEventBeforeSnap = e, t.splice(0), n.mousewheel.timeout = w.nextTick((() => {
                                        n.slideToClosest(n.params.speed, !0, void 0, r)
                                    }), 0)
                                }
                                n.mousewheel.timeout || (n.mousewheel.timeout = w.nextTick((() => {
                                    n.mousewheel.lastEventBeforeSnap = e, t.splice(0), n.slideToClosest(n.params.speed, !0, void 0, .5)
                                }), 500))
                            }
                            if (d || n.emit("scroll", t), n.params.autoplay && n.params.autoplayDisableOnInteraction && n.autoplay.stop(), l === n.minTranslate() || l === n.maxTranslate()) return !0
                        }
                    } else {
                        const t = {
                                time: w.now(),
                                delta: Math.abs(o),
                                direction: Math.sign(o),
                                raw: e
                            },
                            r = n.mousewheel.recentWheelEvents;
                        r.length >= 2 && r.shift();
                        const l = r.length ? r[r.length - 1] : void 0;
                        if (r.push(t), l ? (t.direction !== l.direction || t.delta > l.delta || t.time > l.time + 150) && n.mousewheel.animateSlider(t) : n.mousewheel.animateSlider(t), n.mousewheel.releaseScroll(t)) return !0
                    }
                    return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
                },
                animateSlider(e) {
                    const t = this;
                    return e.delta >= 6 && w.now() - t.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), t.emit("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), t.emit("scroll", e.raw)), t.mousewheel.lastScrollTime = (new c.Date).getTime(), !1)
                },
                releaseScroll(e) {
                    const t = this,
                        n = t.params.mousewheel;
                    if (e.direction < 0) {
                        if (t.isEnd && !t.params.loop && n.releaseOnEdges) return !0
                    } else if (t.isBeginning && !t.params.loop && n.releaseOnEdges) return !0;
                    return !1
                },
                enable() {
                    const e = this,
                        t = ee.event();
                    if (e.params.cssMode) return e.wrapperEl.removeEventListener(t, e.mousewheel.handle), !0;
                    if (!t) return !1;
                    if (e.mousewheel.enabled) return !1;
                    let n = e.$el;
                    return "container" !== e.params.mousewheel.eventsTarged && (n = m(e.params.mousewheel.eventsTarged)), n.on("mouseenter", e.mousewheel.handleMouseEnter), n.on("mouseleave", e.mousewheel.handleMouseLeave), n.on(t, e.mousewheel.handle), e.mousewheel.enabled = !0, !0
                },
                disable() {
                    const e = this,
                        t = ee.event();
                    if (e.params.cssMode) return e.wrapperEl.addEventListener(t, e.mousewheel.handle), !0;
                    if (!t) return !1;
                    if (!e.mousewheel.enabled) return !1;
                    let n = e.$el;
                    return "container" !== e.params.mousewheel.eventsTarged && (n = m(e.params.mousewheel.eventsTarged)), n.off(t, e.mousewheel.handle), e.mousewheel.enabled = !1, !0
                }
            };
            const te = {
                update() {
                    const e = this,
                        t = e.params.navigation;
                    if (e.params.loop) return;
                    const {
                        $nextEl: n,
                        $prevEl: r
                    } = e.navigation;
                    r && r.length > 0 && (e.isBeginning ? r.addClass(t.disabledClass) : r.removeClass(t.disabledClass), r[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), n && n.length > 0 && (e.isEnd ? n.addClass(t.disabledClass) : n.removeClass(t.disabledClass), n[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass))
                },
                onPrevClick(e) {
                    const t = this;
                    e.preventDefault(), t.isBeginning && !t.params.loop || t.slidePrev()
                },
                onNextClick(e) {
                    const t = this;
                    e.preventDefault(), t.isEnd && !t.params.loop || t.slideNext()
                },
                init() {
                    const e = this,
                        t = e.params.navigation;
                    if (!t.nextEl && !t.prevEl) return;
                    let n, r;
                    t.nextEl && (n = m(t.nextEl), e.params.uniqueNavElements && "string" == typeof t.nextEl && n.length > 1 && 1 === e.$el.find(t.nextEl).length && (n = e.$el.find(t.nextEl))), t.prevEl && (r = m(t.prevEl), e.params.uniqueNavElements && "string" == typeof t.prevEl && r.length > 1 && 1 === e.$el.find(t.prevEl).length && (r = e.$el.find(t.prevEl))), n && n.length > 0 && n.on("click", e.navigation.onNextClick), r && r.length > 0 && r.on("click", e.navigation.onPrevClick), w.extend(e.navigation, {
                        $nextEl: n,
                        nextEl: n && n[0],
                        $prevEl: r,
                        prevEl: r && r[0]
                    })
                },
                destroy() {
                    const e = this,
                        {
                            $nextEl: t,
                            $prevEl: n
                        } = e.navigation;
                    t && t.length && (t.off("click", e.navigation.onNextClick), t.removeClass(e.params.navigation.disabledClass)), n && n.length && (n.off("click", e.navigation.onPrevClick), n.removeClass(e.params.navigation.disabledClass))
                }
            };
            const se = {
                update() {
                    const e = this,
                        t = e.rtl,
                        n = e.params.pagination;
                    if (!n.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length) return;
                    const r = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        l = e.pagination.$el;
                    let o;
                    const d = e.params.loop ? Math.ceil((r - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                    if (e.params.loop ? (o = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup), o > r - 1 - 2 * e.loopedSlides && (o -= r - 2 * e.loopedSlides), o > d - 1 && (o -= d), o < 0 && "bullets" !== e.params.paginationType && (o = d + o)) : o = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === n.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
                        const r = e.pagination.bullets;
                        let d, c, h;
                        if (n.dynamicBullets && (e.pagination.bulletSize = r.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), l.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (n.dynamicMainBullets + 4) + "px"), n.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += o - e.previousIndex, e.pagination.dynamicBulletIndex > n.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = n.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), d = o - e.pagination.dynamicBulletIndex, c = d + (Math.min(r.length, n.dynamicMainBullets) - 1), h = (c + d) / 2), r.removeClass(`${n.bulletActiveClass} ${n.bulletActiveClass}-next ${n.bulletActiveClass}-next-next ${n.bulletActiveClass}-prev ${n.bulletActiveClass}-prev-prev ${n.bulletActiveClass}-main`), l.length > 1) r.each(((e, t) => {
                            const r = m(t),
                                l = r.index();
                            l === o && r.addClass(n.bulletActiveClass), n.dynamicBullets && (l >= d && l <= c && r.addClass(`${n.bulletActiveClass}-main`), l === d && r.prev().addClass(`${n.bulletActiveClass}-prev`).prev().addClass(`${n.bulletActiveClass}-prev-prev`), l === c && r.next().addClass(`${n.bulletActiveClass}-next`).next().addClass(`${n.bulletActiveClass}-next-next`))
                        }));
                        else {
                            const t = r.eq(o),
                                l = t.index();
                            if (t.addClass(n.bulletActiveClass), n.dynamicBullets) {
                                const t = r.eq(d),
                                    o = r.eq(c);
                                for (let i = d; i <= c; i += 1) r.eq(i).addClass(`${n.bulletActiveClass}-main`);
                                if (e.params.loop)
                                    if (l >= r.length - n.dynamicMainBullets) {
                                        for (let i = n.dynamicMainBullets; i >= 0; i -= 1) r.eq(r.length - i).addClass(`${n.bulletActiveClass}-main`);
                                        r.eq(r.length - n.dynamicMainBullets - 1).addClass(`${n.bulletActiveClass}-prev`)
                                    } else t.prev().addClass(`${n.bulletActiveClass}-prev`).prev().addClass(`${n.bulletActiveClass}-prev-prev`), o.next().addClass(`${n.bulletActiveClass}-next`).next().addClass(`${n.bulletActiveClass}-next-next`);
                                else t.prev().addClass(`${n.bulletActiveClass}-prev`).prev().addClass(`${n.bulletActiveClass}-prev-prev`), o.next().addClass(`${n.bulletActiveClass}-next`).next().addClass(`${n.bulletActiveClass}-next-next`)
                            }
                        }
                        if (n.dynamicBullets) {
                            const l = Math.min(r.length, n.dynamicMainBullets + 4),
                                o = (e.pagination.bulletSize * l - e.pagination.bulletSize) / 2 - h * e.pagination.bulletSize,
                                d = t ? "right" : "left";
                            r.css(e.isHorizontal() ? d : "top", `${o}px`)
                        }
                    }
                    if ("fraction" === n.type && (l.find(`.${n.currentClass}`).text(n.formatFractionCurrent(o + 1)), l.find(`.${n.totalClass}`).text(n.formatFractionTotal(d))), "progressbar" === n.type) {
                        let t;
                        t = n.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                        const r = (o + 1) / d;
                        let c = 1,
                            h = 1;
                        "horizontal" === t ? c = r : h = r, l.find(`.${n.progressbarFillClass}`).transform(`translate3d(0,0,0) scaleX(${c}) scaleY(${h})`).transition(e.params.speed)
                    }
                    "custom" === n.type && n.renderCustom ? (l.html(n.renderCustom(e, o + 1, d)), e.emit("paginationRender", e, l[0])) : e.emit("paginationUpdate", e, l[0]), l[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](n.lockClass)
                },
                render() {
                    const e = this,
                        t = e.params.pagination;
                    if (!t.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length) return;
                    const n = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        r = e.pagination.$el;
                    let l = "";
                    if ("bullets" === t.type) {
                        const o = e.params.loop ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                        for (let i = 0; i < o; i += 1) t.renderBullet ? l += t.renderBullet.call(e, i, t.bulletClass) : l += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;
                        r.html(l), e.pagination.bullets = r.find(`.${t.bulletClass}`)
                    }
                    "fraction" === t.type && (l = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`, r.html(l)), "progressbar" === t.type && (l = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : `<span class="${t.progressbarFillClass}"></span>`, r.html(l)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
                },
                init() {
                    const e = this,
                        t = e.params.pagination;
                    if (!t.el) return;
                    let n = m(t.el);
                    0 !== n.length && (e.params.uniqueNavElements && "string" == typeof t.el && n.length > 1 && (n = e.$el.find(t.el)), "bullets" === t.type && t.clickable && n.addClass(t.clickableClass), n.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (n.addClass(`${t.modifierClass}${t.type}-dynamic`), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && n.addClass(t.progressbarOppositeClass), t.clickable && n.on("click", `.${t.bulletClass}`, (function(t) {
                        t.preventDefault();
                        let n = m(this).index() * e.params.slidesPerGroup;
                        e.params.loop && (n += e.loopedSlides), e.slideTo(n)
                    })), w.extend(e.pagination, {
                        $el: n,
                        el: n[0]
                    }))
                },
                destroy() {
                    const e = this,
                        t = e.params.pagination;
                    if (!t.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length) return;
                    const n = e.pagination.$el;
                    n.removeClass(t.hiddenClass), n.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && n.off("click", `.${t.bulletClass}`)
                }
            };
            const ae = {
                setTranslate() {
                    const e = this;
                    if (!e.params.scrollbar.el || !e.scrollbar.el) return;
                    const {
                        scrollbar: t,
                        rtlTranslate: n,
                        progress: progress
                    } = e, {
                        dragSize: r,
                        trackSize: l,
                        $dragEl: o,
                        $el: d
                    } = t, c = e.params.scrollbar;
                    let h = r,
                        m = (l - r) * progress;
                    n ? (m = -m, m > 0 ? (h = r - m, m = 0) : -m + r > l && (h = l + m)) : m < 0 ? (h = r + m, m = 0) : m + r > l && (h = l - m), e.isHorizontal() ? (o.transform(`translate3d(${m}px, 0, 0)`), o[0].style.width = `${h}px`) : (o.transform(`translate3d(0px, ${m}px, 0)`), o[0].style.height = `${h}px`), c.hide && (clearTimeout(e.scrollbar.timeout), d[0].style.opacity = 1, e.scrollbar.timeout = setTimeout((() => {
                        d[0].style.opacity = 0, d.transition(400)
                    }), 1e3))
                },
                setTransition(e) {
                    const t = this;
                    t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e)
                },
                updateSize() {
                    const e = this;
                    if (!e.params.scrollbar.el || !e.scrollbar.el) return;
                    const {
                        scrollbar: t
                    } = e, {
                        $dragEl: n,
                        $el: r
                    } = t;
                    n[0].style.width = "", n[0].style.height = "";
                    const l = e.isHorizontal() ? r[0].offsetWidth : r[0].offsetHeight,
                        o = e.size / e.virtualSize,
                        d = o * (l / e.size);
                    let c;
                    c = "auto" === e.params.scrollbar.dragSize ? l * o : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? n[0].style.width = `${c}px` : n[0].style.height = `${c}px`, r[0].style.display = o >= 1 ? "none" : "", e.params.scrollbar.hide && (r[0].style.opacity = 0), w.extend(t, {
                        trackSize: l,
                        divider: o,
                        moveDivider: d,
                        dragSize: c
                    }), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
                },
                getPointerPosition(e) {
                    return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
                },
                setDragPosition(e) {
                    const t = this,
                        {
                            scrollbar: n,
                            rtlTranslate: r
                        } = t,
                        {
                            $el: l,
                            dragSize: o,
                            trackSize: d,
                            dragStartPos: c
                        } = n;
                    let h;
                    h = (n.getPointerPosition(e) - l.offset()[t.isHorizontal() ? "left" : "top"] - (null !== c ? c : o / 2)) / (d - o), h = Math.max(Math.min(h, 1), 0), r && (h = 1 - h);
                    const m = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * h;
                    t.updateProgress(m), t.setTranslate(m), t.updateActiveIndex(), t.updateSlidesClasses()
                },
                onDragStart(e) {
                    const t = this,
                        n = t.params.scrollbar,
                        {
                            scrollbar: r,
                            $wrapperEl: l
                        } = t,
                        {
                            $el: o,
                            $dragEl: d
                        } = r;
                    t.scrollbar.isTouched = !0, t.scrollbar.dragStartPos = e.target === d[0] || e.target === d ? r.getPointerPosition(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), l.transition(100), d.transition(100), r.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), o.transition(0), n.hide && o.css("opacity", 1), t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"), t.emit("scrollbarDragStart", e)
                },
                onDragMove(e) {
                    const t = this,
                        {
                            scrollbar: n,
                            $wrapperEl: r
                        } = t,
                        {
                            $el: l,
                            $dragEl: o
                        } = n;
                    t.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, n.setDragPosition(e), r.transition(0), l.transition(0), o.transition(0), t.emit("scrollbarDragMove", e))
                },
                onDragEnd(e) {
                    const t = this,
                        n = t.params.scrollbar,
                        {
                            scrollbar: r,
                            $wrapperEl: l
                        } = t,
                        {
                            $el: o
                        } = r;
                    t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""), l.transition("")), n.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = w.nextTick((() => {
                        o.css("opacity", 0), o.transition(400)
                    }), 1e3)), t.emit("scrollbarDragEnd", e), n.snapOnRelease && t.slideToClosest())
                },
                enableDraggable() {
                    const e = this;
                    if (!e.params.scrollbar.el) return;
                    const {
                        scrollbar: t,
                        touchEventsTouch: n,
                        touchEventsDesktop: r,
                        params: l
                    } = e, d = t.$el[0], c = !(!y.passiveListener || !l.passiveListeners) && {
                        passive: !1,
                        capture: !1
                    }, h = !(!y.passiveListener || !l.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    y.touch ? (d.addEventListener(n.start, e.scrollbar.onDragStart, c), d.addEventListener(n.move, e.scrollbar.onDragMove, c), d.addEventListener(n.end, e.scrollbar.onDragEnd, h)) : (d.addEventListener(r.start, e.scrollbar.onDragStart, c), o.addEventListener(r.move, e.scrollbar.onDragMove, c), o.addEventListener(r.end, e.scrollbar.onDragEnd, h))
                },
                disableDraggable() {
                    const e = this;
                    if (!e.params.scrollbar.el) return;
                    const {
                        scrollbar: t,
                        touchEventsTouch: n,
                        touchEventsDesktop: r,
                        params: l
                    } = e, d = t.$el[0], c = !(!y.passiveListener || !l.passiveListeners) && {
                        passive: !1,
                        capture: !1
                    }, h = !(!y.passiveListener || !l.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    y.touch ? (d.removeEventListener(n.start, e.scrollbar.onDragStart, c), d.removeEventListener(n.move, e.scrollbar.onDragMove, c), d.removeEventListener(n.end, e.scrollbar.onDragEnd, h)) : (d.removeEventListener(r.start, e.scrollbar.onDragStart, c), o.removeEventListener(r.move, e.scrollbar.onDragMove, c), o.removeEventListener(r.end, e.scrollbar.onDragEnd, h))
                },
                init() {
                    const e = this;
                    if (!e.params.scrollbar.el) return;
                    const {
                        scrollbar: t,
                        $el: n
                    } = e, r = e.params.scrollbar;
                    let l = m(r.el);
                    e.params.uniqueNavElements && "string" == typeof r.el && l.length > 1 && 1 === n.find(r.el).length && (l = n.find(r.el));
                    let o = l.find(`.${e.params.scrollbar.dragClass}`);
                    0 === o.length && (o = m(`<div class="${e.params.scrollbar.dragClass}"></div>`), l.append(o)), w.extend(t, {
                        $el: l,
                        el: l[0],
                        $dragEl: o,
                        dragEl: o[0]
                    }), r.draggable && t.enableDraggable()
                },
                destroy() {
                    this.scrollbar.disableDraggable()
                }
            };
            const ie = {
                setTransform(e, progress) {
                    const {
                        rtl: t
                    } = this, n = m(e), r = t ? -1 : 1, p = n.attr("data-swiper-parallax") || "0";
                    let l = n.attr("data-swiper-parallax-x"),
                        o = n.attr("data-swiper-parallax-y");
                    const d = n.attr("data-swiper-parallax-scale"),
                        c = n.attr("data-swiper-parallax-opacity");
                    if (l || o ? (l = l || "0", o = o || "0") : this.isHorizontal() ? (l = p, o = "0") : (o = p, l = "0"), l = l.indexOf("%") >= 0 ? parseInt(l, 10) * progress * r + "%" : l * progress * r + "px", o = o.indexOf("%") >= 0 ? parseInt(o, 10) * progress + "%" : o * progress + "px", null != c) {
                        const e = c - (c - 1) * (1 - Math.abs(progress));
                        n[0].style.opacity = e
                    }
                    if (null == d) n.transform(`translate3d(${l}, ${o}, 0px)`);
                    else {
                        const e = d - (d - 1) * (1 - Math.abs(progress));
                        n.transform(`translate3d(${l}, ${o}, 0px) scale(${e})`)
                    }
                },
                setTranslate() {
                    const e = this,
                        {
                            $el: t,
                            slides: n,
                            progress: progress,
                            snapGrid: r
                        } = e;
                    t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(((t, n) => {
                        e.parallax.setTransform(n, progress)
                    })), n.each(((t, n) => {
                        let l = n.progress;
                        e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (l += Math.ceil(t / 2) - progress * (r.length - 1)), l = Math.min(Math.max(l, -1), 1), m(n).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(((t, n) => {
                            e.parallax.setTransform(n, l)
                        }))
                    }))
                },
                setTransition(e = this.params.speed) {
                    const {
                        $el: t
                    } = this;
                    t.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(((t, n) => {
                        const r = m(n);
                        let l = parseInt(r.attr("data-swiper-parallax-duration"), 10) || e;
                        0 === e && (l = 0), r.transition(l)
                    }))
                }
            };
            const ne = {
                getDistanceBetweenTouches(e) {
                    if (e.targetTouches.length < 2) return 1;
                    const t = e.targetTouches[0].pageX,
                        n = e.targetTouches[0].pageY,
                        r = e.targetTouches[1].pageX,
                        l = e.targetTouches[1].pageY;
                    return Math.sqrt((r - t) ** 2 + (l - n) ** 2)
                },
                onGestureStart(e) {
                    const t = this,
                        n = t.params.zoom,
                        r = t.zoom,
                        {
                            gesture: l
                        } = r;
                    if (r.fakeGestureTouched = !1, r.fakeGestureMoved = !1, !y.gestures) {
                        if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                        r.fakeGestureTouched = !0, l.scaleStart = ne.getDistanceBetweenTouches(e)
                    }
                    l.$slideEl && l.$slideEl.length || (l.$slideEl = m(e.target).closest(`.${t.params.slideClass}`), 0 === l.$slideEl.length && (l.$slideEl = t.slides.eq(t.activeIndex)), l.$imageEl = l.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), l.$imageWrapEl = l.$imageEl.parent(`.${n.containerClass}`), l.maxRatio = l.$imageWrapEl.attr("data-swiper-zoom") || n.maxRatio, 0 !== l.$imageWrapEl.length) ? (l.$imageEl && l.$imageEl.transition(0), t.zoom.isScaling = !0) : l.$imageEl = void 0
                },
                onGestureChange(e) {
                    const t = this.params.zoom,
                        n = this.zoom,
                        {
                            gesture: r
                        } = n;
                    if (!y.gestures) {
                        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                        n.fakeGestureMoved = !0, r.scaleMove = ne.getDistanceBetweenTouches(e)
                    }
                    r.$imageEl && 0 !== r.$imageEl.length && (n.scale = y.gestures ? e.scale * n.currentScale : r.scaleMove / r.scaleStart * n.currentScale, n.scale > r.maxRatio && (n.scale = r.maxRatio - 1 + (n.scale - r.maxRatio + 1) ** .5), n.scale < t.minRatio && (n.scale = t.minRatio + 1 - (t.minRatio - n.scale + 1) ** .5), r.$imageEl.transform(`translate3d(0,0,0) scale(${n.scale})`))
                },
                onGestureEnd(e) {
                    const t = this,
                        n = t.params.zoom,
                        r = t.zoom,
                        {
                            gesture: l
                        } = r;
                    if (!y.gestures) {
                        if (!r.fakeGestureTouched || !r.fakeGestureMoved) return;
                        if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !k.android) return;
                        r.fakeGestureTouched = !1, r.fakeGestureMoved = !1
                    }
                    l.$imageEl && 0 !== l.$imageEl.length && (r.scale = Math.max(Math.min(r.scale, l.maxRatio), n.minRatio), l.$imageEl.transition(t.params.speed).transform(`translate3d(0,0,0) scale(${r.scale})`), r.currentScale = r.scale, r.isScaling = !1, 1 === r.scale && (l.$slideEl = void 0))
                },
                onTouchStart(e) {
                    const t = this.zoom,
                        {
                            gesture: n,
                            image: image
                        } = t;
                    n.$imageEl && 0 !== n.$imageEl.length && (image.isTouched || (k.android && e.cancelable && e.preventDefault(), image.isTouched = !0, image.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, image.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
                },
                onTouchMove(e) {
                    const t = this,
                        n = t.zoom,
                        {
                            gesture: r,
                            image: image,
                            velocity: l
                        } = n;
                    if (!r.$imageEl || 0 === r.$imageEl.length) return;
                    if (t.allowClick = !1, !image.isTouched || !r.$slideEl) return;
                    image.isMoved || (image.width = r.$imageEl[0].offsetWidth, image.height = r.$imageEl[0].offsetHeight, image.startX = w.getTranslate(r.$imageWrapEl[0], "x") || 0, image.startY = w.getTranslate(r.$imageWrapEl[0], "y") || 0, r.slideWidth = r.$slideEl[0].offsetWidth, r.slideHeight = r.$slideEl[0].offsetHeight, r.$imageWrapEl.transition(0), t.rtl && (image.startX = -image.startX, image.startY = -image.startY));
                    const o = image.width * n.scale,
                        d = image.height * n.scale;
                    if (!(o < r.slideWidth && d < r.slideHeight)) {
                        if (image.minX = Math.min(r.slideWidth / 2 - o / 2, 0), image.maxX = -image.minX, image.minY = Math.min(r.slideHeight / 2 - d / 2, 0), image.maxY = -image.minY, image.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, image.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !image.isMoved && !n.isScaling) {
                            if (t.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) return void(image.isTouched = !1);
                            if (!t.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) return void(image.isTouched = !1)
                        }
                        e.cancelable && e.preventDefault(), e.stopPropagation(), image.isMoved = !0, image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX, image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY, image.currentX < image.minX && (image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** .8), image.currentX > image.maxX && (image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** .8), image.currentY < image.minY && (image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** .8), image.currentY > image.maxY && (image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** .8), l.prevPositionX || (l.prevPositionX = image.touchesCurrent.x), l.prevPositionY || (l.prevPositionY = image.touchesCurrent.y), l.prevTime || (l.prevTime = Date.now()), l.x = (image.touchesCurrent.x - l.prevPositionX) / (Date.now() - l.prevTime) / 2, l.y = (image.touchesCurrent.y - l.prevPositionY) / (Date.now() - l.prevTime) / 2, Math.abs(image.touchesCurrent.x - l.prevPositionX) < 2 && (l.x = 0), Math.abs(image.touchesCurrent.y - l.prevPositionY) < 2 && (l.y = 0), l.prevPositionX = image.touchesCurrent.x, l.prevPositionY = image.touchesCurrent.y, l.prevTime = Date.now(), r.$imageWrapEl.transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`)
                    }
                },
                onTouchEnd() {
                    const e = this.zoom,
                        {
                            gesture: t,
                            image: image,
                            velocity: n
                        } = e;
                    if (!t.$imageEl || 0 === t.$imageEl.length) return;
                    if (!image.isTouched || !image.isMoved) return image.isTouched = !1, void(image.isMoved = !1);
                    image.isTouched = !1, image.isMoved = !1;
                    let r = 300,
                        l = 300;
                    const o = n.x * r,
                        d = image.currentX + o,
                        c = n.y * l,
                        h = image.currentY + c;
                    0 !== n.x && (r = Math.abs((d - image.currentX) / n.x)), 0 !== n.y && (l = Math.abs((h - image.currentY) / n.y));
                    const m = Math.max(r, l);
                    image.currentX = d, image.currentY = h;
                    const f = image.width * e.scale,
                        v = image.height * e.scale;
                    image.minX = Math.min(t.slideWidth / 2 - f / 2, 0), image.maxX = -image.minX, image.minY = Math.min(t.slideHeight / 2 - v / 2, 0), image.maxY = -image.minY, image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX), image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY), t.$imageWrapEl.transition(m).transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`)
                },
                onTransitionEnd() {
                    const e = this,
                        t = e.zoom,
                        {
                            gesture: n
                        } = t;
                    n.$slideEl && e.previousIndex !== e.activeIndex && (n.$imageEl && n.$imageEl.transform("translate3d(0,0,0) scale(1)"), n.$imageWrapEl && n.$imageWrapEl.transform("translate3d(0,0,0)"), t.scale = 1, t.currentScale = 1, n.$slideEl = void 0, n.$imageEl = void 0, n.$imageWrapEl = void 0)
                },
                toggle(e) {
                    const t = this.zoom;
                    t.scale && 1 !== t.scale ? t.out() : t.in(e)
                },
                in (e) {
                    const t = this,
                        n = t.zoom,
                        r = t.params.zoom,
                        {
                            gesture: l,
                            image: image
                        } = n;
                    if (l.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? l.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`) : l.$slideEl = t.slides.eq(t.activeIndex), l.$imageEl = l.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), l.$imageWrapEl = l.$imageEl.parent(`.${r.containerClass}`)), !l.$imageEl || 0 === l.$imageEl.length) return;
                    let o, d, c, h, m, f, v, w, y, x, E, T, S, C, $, M, P, k;
                    l.$slideEl.addClass(`${r.zoomedSlideClass}`), void 0 === image.touchesStart.x && e ? (o = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, d = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (o = image.touchesStart.x, d = image.touchesStart.y), n.scale = l.$imageWrapEl.attr("data-swiper-zoom") || r.maxRatio, n.currentScale = l.$imageWrapEl.attr("data-swiper-zoom") || r.maxRatio, e ? (P = l.$slideEl[0].offsetWidth, k = l.$slideEl[0].offsetHeight, c = l.$slideEl.offset().left, h = l.$slideEl.offset().top, m = c + P / 2 - o, f = h + k / 2 - d, y = l.$imageEl[0].offsetWidth, x = l.$imageEl[0].offsetHeight, E = y * n.scale, T = x * n.scale, S = Math.min(P / 2 - E / 2, 0), C = Math.min(k / 2 - T / 2, 0), $ = -S, M = -C, v = m * n.scale, w = f * n.scale, v < S && (v = S), v > $ && (v = $), w < C && (w = C), w > M && (w = M)) : (v = 0, w = 0), l.$imageWrapEl.transition(300).transform(`translate3d(${v}px, ${w}px,0)`), l.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${n.scale})`)
                },
                out() {
                    const e = this,
                        t = e.zoom,
                        n = e.params.zoom,
                        {
                            gesture: r
                        } = t;
                    r.$slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? r.$slideEl = e.$wrapperEl.children(`.${e.params.slideActiveClass}`) : r.$slideEl = e.slides.eq(e.activeIndex), r.$imageEl = r.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), r.$imageWrapEl = r.$imageEl.parent(`.${n.containerClass}`)), r.$imageEl && 0 !== r.$imageEl.length && (t.scale = 1, t.currentScale = 1, r.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), r.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), r.$slideEl.removeClass(`${n.zoomedSlideClass}`), r.$slideEl = void 0)
                },
                enable() {
                    const e = this,
                        t = e.zoom;
                    if (t.enabled) return;
                    t.enabled = !0;
                    const n = !("touchstart" !== e.touchEvents.start || !y.passiveListener || !e.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        },
                        r = !y.passiveListener || {
                            passive: !1,
                            capture: !0
                        },
                        l = `.${e.params.slideClass}`;
                    y.gestures ? (e.$wrapperEl.on("gesturestart", l, t.onGestureStart, n), e.$wrapperEl.on("gesturechange", l, t.onGestureChange, n), e.$wrapperEl.on("gestureend", l, t.onGestureEnd, n)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, l, t.onGestureStart, n), e.$wrapperEl.on(e.touchEvents.move, l, t.onGestureChange, r), e.$wrapperEl.on(e.touchEvents.end, l, t.onGestureEnd, n), e.touchEvents.cancel && e.$wrapperEl.on(e.touchEvents.cancel, l, t.onGestureEnd, n)), e.$wrapperEl.on(e.touchEvents.move, `.${e.params.zoom.containerClass}`, t.onTouchMove, r)
                },
                disable() {
                    const e = this,
                        t = e.zoom;
                    if (!t.enabled) return;
                    e.zoom.enabled = !1;
                    const n = !("touchstart" !== e.touchEvents.start || !y.passiveListener || !e.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        },
                        r = !y.passiveListener || {
                            passive: !1,
                            capture: !0
                        },
                        l = `.${e.params.slideClass}`;
                    y.gestures ? (e.$wrapperEl.off("gesturestart", l, t.onGestureStart, n), e.$wrapperEl.off("gesturechange", l, t.onGestureChange, n), e.$wrapperEl.off("gestureend", l, t.onGestureEnd, n)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, l, t.onGestureStart, n), e.$wrapperEl.off(e.touchEvents.move, l, t.onGestureChange, r), e.$wrapperEl.off(e.touchEvents.end, l, t.onGestureEnd, n), e.touchEvents.cancel && e.$wrapperEl.off(e.touchEvents.cancel, l, t.onGestureEnd, n)), e.$wrapperEl.off(e.touchEvents.move, `.${e.params.zoom.containerClass}`, t.onTouchMove, r)
                }
            };
            const re = {
                loadInSlide(e, t = !0) {
                    const n = this,
                        r = n.params.lazy;
                    if (void 0 === e) return;
                    if (0 === n.slides.length) return;
                    const l = n.virtual && n.params.virtual.enabled ? n.$wrapperEl.children(`.${n.params.slideClass}[data-swiper-slide-index="${e}"]`) : n.slides.eq(e);
                    let o = l.find(`.${r.elementClass}:not(.${r.loadedClass}):not(.${r.loadingClass})`);
                    !l.hasClass(r.elementClass) || l.hasClass(r.loadedClass) || l.hasClass(r.loadingClass) || (o = o.add(l[0])), 0 !== o.length && o.each(((e, o) => {
                        const d = m(o);
                        d.addClass(r.loadingClass);
                        const c = d.attr("data-background"),
                            h = d.attr("data-src"),
                            f = d.attr("data-srcset"),
                            v = d.attr("data-sizes"),
                            w = d.parent("picture");
                        n.loadImage(d[0], h || c, f, v, !1, (() => {
                            if (null != n && n && (!n || n.params) && !n.destroyed) {
                                if (c ? (d.css("background-image", `url("${c}")`), d.removeAttr("data-background")) : (f && (d.attr("srcset", f), d.removeAttr("data-srcset")), v && (d.attr("sizes", v), d.removeAttr("data-sizes")), w.length && w.children("source").each(((e, t) => {
                                        const n = m(t);
                                        n.attr("data-srcset") && (n.attr("srcset", n.attr("data-srcset")), n.removeAttr("data-srcset"))
                                    })), h && (d.attr("src", h), d.removeAttr("data-src"))), d.addClass(r.loadedClass).removeClass(r.loadingClass), l.find(`.${r.preloaderClass}`).remove(), n.params.loop && t) {
                                    const e = l.attr("data-swiper-slide-index");
                                    if (l.hasClass(n.params.slideDuplicateClass)) {
                                        const t = n.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${n.params.slideDuplicateClass})`);
                                        n.lazy.loadInSlide(t.index(), !1)
                                    } else {
                                        const t = n.$wrapperEl.children(`.${n.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`);
                                        n.lazy.loadInSlide(t.index(), !1)
                                    }
                                }
                                n.emit("lazyImageReady", l[0], d[0]), n.params.autoHeight && n.updateAutoHeight()
                            }
                        })), n.emit("lazyImageLoad", l[0], d[0])
                    }))
                },
                load() {
                    const e = this,
                        {
                            $wrapperEl: t,
                            params: n,
                            slides: r,
                            activeIndex: l
                        } = e,
                        o = e.virtual && n.virtual.enabled,
                        d = n.lazy;
                    let c = n.slidesPerView;

                    function h(e) {
                        if (o) {
                            if (t.children(`.${n.slideClass}[data-swiper-slide-index="${e}"]`).length) return !0
                        } else if (r[e]) return !0;
                        return !1
                    }

                    function f(e) {
                        return o ? m(e).attr("data-swiper-slide-index") : m(e).index()
                    }
                    if ("auto" === c && (c = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children(`.${n.slideVisibleClass}`).each(((t, n) => {
                        const r = o ? m(n).attr("data-swiper-slide-index") : m(n).index();
                        e.lazy.loadInSlide(r)
                    }));
                    else if (c > 1)
                        for (let i = l; i < l + c; i += 1) h(i) && e.lazy.loadInSlide(i);
                    else e.lazy.loadInSlide(l);
                    if (d.loadPrevNext)
                        if (c > 1 || d.loadPrevNextAmount && d.loadPrevNextAmount > 1) {
                            const t = d.loadPrevNextAmount,
                                n = c,
                                o = Math.min(l + n + Math.max(t, n), r.length),
                                m = Math.max(l - Math.max(n, t), 0);
                            for (let i = l + c; i < o; i += 1) h(i) && e.lazy.loadInSlide(i);
                            for (let i = m; i < l; i += 1) h(i) && e.lazy.loadInSlide(i)
                        } else {
                            const r = t.children(`.${n.slideNextClass}`);
                            r.length > 0 && e.lazy.loadInSlide(f(r));
                            const l = t.children(`.${n.slidePrevClass}`);
                            l.length > 0 && e.lazy.loadInSlide(f(l))
                        }
                }
            };
            const le = {
                LinearSpline: function(e, t) {
                    const n = function() {
                        let e, t, n;
                        return (r, l) => {
                            for (t = -1, e = r.length; e - t > 1;) n = e + t >> 1, r[n] <= l ? t = n : e = n;
                            return e
                        }
                    }();
                    let r, l;
                    return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
                        return e ? (l = n(this.x, e), r = l - 1, (e - this.x[r]) * (this.y[l] - this.y[r]) / (this.x[l] - this.x[r]) + this.y[r]) : 0
                    }, this
                },
                getInterpolateFunction(e) {
                    const t = this;
                    t.controller.spline || (t.controller.spline = t.params.loop ? new le.LinearSpline(t.slidesGrid, e.slidesGrid) : new le.LinearSpline(t.snapGrid, e.snapGrid))
                },
                setTranslate(e, t) {
                    const n = this,
                        r = n.controller.control;
                    let l, o;

                    function d(e) {
                        const t = n.rtlTranslate ? -n.translate : n.translate;
                        "slide" === n.params.controller.by && (n.controller.getInterpolateFunction(e), o = -n.controller.spline.interpolate(-t)), o && "container" !== n.params.controller.by || (l = (e.maxTranslate() - e.minTranslate()) / (n.maxTranslate() - n.minTranslate()), o = (t - n.minTranslate()) * l + e.minTranslate()), n.params.controller.inverse && (o = e.maxTranslate() - o), e.updateProgress(o), e.setTranslate(o, n), e.updateActiveIndex(), e.updateSlidesClasses()
                    }
                    if (Array.isArray(r))
                        for (let i = 0; i < r.length; i += 1) r[i] !== t && r[i] instanceof V && d(r[i]);
                    else r instanceof V && t !== r && d(r)
                },
                setTransition(e, t) {
                    const n = this,
                        r = n.controller.control;
                    let i;

                    function l(t) {
                        t.setTransition(e, n), 0 !== e && (t.transitionStart(), t.params.autoHeight && w.nextTick((() => {
                            t.updateAutoHeight()
                        })), t.$wrapperEl.transitionEnd((() => {
                            r && (t.params.loop && "slide" === n.params.controller.by && t.loopFix(), t.transitionEnd())
                        })))
                    }
                    if (Array.isArray(r))
                        for (i = 0; i < r.length; i += 1) r[i] !== t && r[i] instanceof V && l(r[i]);
                    else r instanceof V && t !== r && l(r)
                }
            };
            const oe = {
                makeElFocusable: e => (e.attr("tabIndex", "0"), e),
                makeElNotFocusable: e => (e.attr("tabIndex", "-1"), e),
                addElRole: (e, t) => (e.attr("role", t), e),
                addElLabel: (e, label) => (e.attr("aria-label", label), e),
                disableEl: e => (e.attr("aria-disabled", !0), e),
                enableEl: e => (e.attr("aria-disabled", !1), e),
                onEnterKey(e) {
                    const t = this,
                        n = t.params.a11y;
                    if (13 !== e.keyCode) return;
                    const r = m(e.target);
                    t.navigation && t.navigation.$nextEl && r.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(n.lastSlideMessage) : t.a11y.notify(n.nextSlideMessage)), t.navigation && t.navigation.$prevEl && r.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(n.firstSlideMessage) : t.a11y.notify(n.prevSlideMessage)), t.pagination && r.is(`.${t.params.pagination.bulletClass}`) && r[0].click()
                },
                notify(e) {
                    const t = this.a11y.liveRegion;
                    0 !== t.length && (t.html(""), t.html(e))
                },
                updateNavigation() {
                    const e = this;
                    if (e.params.loop || !e.navigation) return;
                    const {
                        $nextEl: t,
                        $prevEl: n
                    } = e.navigation;
                    n && n.length > 0 && (e.isBeginning ? (e.a11y.disableEl(n), e.a11y.makeElNotFocusable(n)) : (e.a11y.enableEl(n), e.a11y.makeElFocusable(n))), t && t.length > 0 && (e.isEnd ? (e.a11y.disableEl(t), e.a11y.makeElNotFocusable(t)) : (e.a11y.enableEl(t), e.a11y.makeElFocusable(t)))
                },
                updatePagination() {
                    const e = this,
                        t = e.params.a11y;
                    e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(((n, r) => {
                        const l = m(r);
                        e.a11y.makeElFocusable(l), e.a11y.addElRole(l, "button"), e.a11y.addElLabel(l, t.paginationBulletMessage.replace(/\{\{index\}\}/, l.index() + 1))
                    }))
                },
                init() {
                    const e = this;
                    e.$el.append(e.a11y.liveRegion);
                    const t = e.params.a11y;
                    let n, r;
                    e.navigation && e.navigation.$nextEl && (n = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (r = e.navigation.$prevEl), n && (e.a11y.makeElFocusable(n), e.a11y.addElRole(n, "button"), e.a11y.addElLabel(n, t.nextSlideMessage), n.on("keydown", e.a11y.onEnterKey)), r && (e.a11y.makeElFocusable(r), e.a11y.addElRole(r, "button"), e.a11y.addElLabel(r, t.prevSlideMessage), r.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", `.${e.params.pagination.bulletClass}`, e.a11y.onEnterKey)
                },
                destroy() {
                    const e = this;
                    let t, n;
                    e.a11y.liveRegion && e.a11y.liveRegion.length > 0 && e.a11y.liveRegion.remove(), e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (n = e.navigation.$prevEl), t && t.off("keydown", e.a11y.onEnterKey), n && n.off("keydown", e.a11y.onEnterKey), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.off("keydown", `.${e.params.pagination.bulletClass}`, e.a11y.onEnterKey)
                }
            };
            const de = {
                init() {
                    const e = this;
                    if (!e.params.history) return;
                    if (!c.history || !c.history.pushState) return e.params.history.enabled = !1, void(e.params.hashNavigation.enabled = !0);
                    const t = e.history;
                    t.initialized = !0, t.paths = de.getPathValues(), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || c.addEventListener("popstate", e.history.setHistoryPopState))
                },
                destroy() {
                    const e = this;
                    e.params.history.replaceState || c.removeEventListener("popstate", e.history.setHistoryPopState)
                },
                setHistoryPopState() {
                    const e = this;
                    e.history.paths = de.getPathValues(), e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1)
                },
                getPathValues() {
                    const e = c.location.pathname.slice(1).split("/").filter((e => "" !== e)),
                        t = e.length;
                    return {
                        key: e[t - 2],
                        value: e[t - 1]
                    }
                },
                setHistory(e, t) {
                    const n = this;
                    if (!n.history.initialized || !n.params.history.enabled) return;
                    const r = n.slides.eq(t);
                    let l = de.slugify(r.attr("data-history"));
                    c.location.pathname.includes(e) || (l = `${e}/${l}`);
                    const o = c.history.state;
                    o && o.value === l || (n.params.history.replaceState ? c.history.replaceState({
                        value: l
                    }, null, l) : c.history.pushState({
                        value: l
                    }, null, l))
                },
                slugify: text => text.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
                scrollToSlide(e, t, n) {
                    const r = this;
                    if (t)
                        for (let i = 0, l = r.slides.length; i < l; i += 1) {
                            const l = r.slides.eq(i);
                            if (de.slugify(l.attr("data-history")) === t && !l.hasClass(r.params.slideDuplicateClass)) {
                                const t = l.index();
                                r.slideTo(t, e, n)
                            }
                        } else r.slideTo(0, e, n)
                }
            };
            const ce = {
                onHashCange() {
                    const e = this;
                    e.emit("hashChange");
                    const t = o.location.hash.replace("#", "");
                    if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
                        const n = e.$wrapperEl.children(`.${e.params.slideClass}[data-hash="${t}"]`).index();
                        if (void 0 === n) return;
                        e.slideTo(n)
                    }
                },
                setHash() {
                    const e = this;
                    if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
                        if (e.params.hashNavigation.replaceState && c.history && c.history.replaceState) c.history.replaceState(null, null, `#${e.slides.eq(e.activeIndex).attr("data-hash")}` || ""), e.emit("hashSet");
                        else {
                            const t = e.slides.eq(e.activeIndex),
                                n = t.attr("data-hash") || t.attr("data-history");
                            o.location.hash = n || "", e.emit("hashSet")
                        }
                },
                init() {
                    const e = this;
                    if (!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled) return;
                    e.hashNavigation.initialized = !0;
                    const t = o.location.hash.replace("#", "");
                    if (t) {
                        const n = 0;
                        for (let i = 0, r = e.slides.length; i < r; i += 1) {
                            const r = e.slides.eq(i);
                            if ((r.attr("data-hash") || r.attr("data-history")) === t && !r.hasClass(e.params.slideDuplicateClass)) {
                                const t = r.index();
                                e.slideTo(t, n, e.params.runCallbacksOnInit, !0)
                            }
                        }
                    }
                    e.params.hashNavigation.watchState && m(c).on("hashchange", e.hashNavigation.onHashCange)
                },
                destroy() {
                    const e = this;
                    e.params.hashNavigation.watchState && m(c).off("hashchange", e.hashNavigation.onHashCange)
                }
            };
            const pe = {
                run() {
                    const e = this,
                        t = e.slides.eq(e.activeIndex);
                    let n = e.params.autoplay.delay;
                    t.attr("data-swiper-autoplay") && (n = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = w.nextTick((() => {
                        e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")), e.params.cssMode && e.autoplay.running && e.autoplay.run()
                    }), n)
                },
                start() {
                    const e = this;
                    return void 0 === e.autoplay.timeout && (!e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0))
                },
                stop() {
                    const e = this;
                    return !!e.autoplay.running && (void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0))
                },
                pause(e) {
                    const t = this;
                    t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run())))
                }
            };
            const ue = {
                setTranslate() {
                    const e = this,
                        {
                            slides: t
                        } = e;
                    for (let i = 0; i < t.length; i += 1) {
                        const t = e.slides.eq(i);
                        let n = -t[0].swiperSlideOffset;
                        e.params.virtualTranslate || (n -= e.translate);
                        let r = 0;
                        e.isHorizontal() || (r = n, n = 0);
                        const l = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                        t.css({
                            opacity: l
                        }).transform(`translate3d(${n}px, ${r}px, 0px)`)
                    }
                },
                setTransition(e) {
                    const t = this,
                        {
                            slides: n,
                            $wrapperEl: r
                        } = t;
                    if (n.transition(e), t.params.virtualTranslate && 0 !== e) {
                        let e = !1;
                        n.transitionEnd((() => {
                            if (e) return;
                            if (!t || t.destroyed) return;
                            e = !0, t.animating = !1;
                            const n = ["webkitTransitionEnd", "transitionend"];
                            for (let i = 0; i < n.length; i += 1) r.trigger(n[i])
                        }))
                    }
                }
            };
            const he = {
                setTranslate() {
                    const e = this,
                        {
                            $el: t,
                            $wrapperEl: n,
                            slides: r,
                            width: l,
                            height: o,
                            rtlTranslate: d,
                            size: c
                        } = e,
                        h = e.params.cubeEffect,
                        f = e.isHorizontal(),
                        v = e.virtual && e.params.virtual.enabled;
                    let w, y = 0;
                    h.shadow && (f ? (w = n.find(".swiper-cube-shadow"), 0 === w.length && (w = m('<div class="swiper-cube-shadow"></div>'), n.append(w)), w.css({
                        height: `${l}px`
                    })) : (w = t.find(".swiper-cube-shadow"), 0 === w.length && (w = m('<div class="swiper-cube-shadow"></div>'), t.append(w))));
                    for (let i = 0; i < r.length; i += 1) {
                        const e = r.eq(i);
                        let t = i;
                        v && (t = parseInt(e.attr("data-swiper-slide-index"), 10));
                        let n = 90 * t,
                            l = Math.floor(n / 360);
                        d && (n = -n, l = Math.floor(-n / 360));
                        const progress = Math.max(Math.min(e[0].progress, 1), -1);
                        let o = 0,
                            w = 0,
                            x = 0;
                        t % 4 == 0 ? (o = 4 * -l * c, x = 0) : (t - 1) % 4 == 0 ? (o = 0, x = 4 * -l * c) : (t - 2) % 4 == 0 ? (o = c + 4 * l * c, x = c) : (t - 3) % 4 == 0 && (o = -c, x = 3 * c + 4 * c * l), d && (o = -o), f || (w = o, o = 0);
                        const E = `rotateX(${f?0:-n}deg) rotateY(${f?n:0}deg) translate3d(${o}px, ${w}px, ${x}px)`;
                        if (progress <= 1 && progress > -1 && (y = 90 * t + 90 * progress, d && (y = 90 * -t - 90 * progress)), e.transform(E), h.slideShadows) {
                            let t = f ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
                                n = f ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
                            0 === t.length && (t = m(`<div class="swiper-slide-shadow-${f?"left":"top"}"></div>`), e.append(t)), 0 === n.length && (n = m(`<div class="swiper-slide-shadow-${f?"right":"bottom"}"></div>`), e.append(n)), t.length && (t[0].style.opacity = Math.max(-progress, 0)), n.length && (n[0].style.opacity = Math.max(progress, 0))
                        }
                    }
                    if (n.css({
                            "-webkit-transform-origin": `50% 50% -${c/2}px`,
                            "-moz-transform-origin": `50% 50% -${c/2}px`,
                            "-ms-transform-origin": `50% 50% -${c/2}px`,
                            "transform-origin": `50% 50% -${c/2}px`
                        }), h.shadow)
                        if (f) w.transform(`translate3d(0px, ${l/2+h.shadowOffset}px, ${-l/2}px) rotateX(90deg) rotateZ(0deg) scale(${h.shadowScale})`);
                        else {
                            const e = Math.abs(y) - 90 * Math.floor(Math.abs(y) / 90),
                                t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2),
                                n = h.shadowScale,
                                r = h.shadowScale / t,
                                l = h.shadowOffset;
                            w.transform(`scale3d(${n}, 1, ${r}) translate3d(0px, ${o/2+l}px, ${-o/2/r}px) rotateX(-90deg)`)
                        }
                    const x = W.isSafari || W.isWebView ? -c / 2 : 0;
                    n.transform(`translate3d(0px,0,${x}px) rotateX(${e.isHorizontal()?0:y}deg) rotateY(${e.isHorizontal()?-y:0}deg)`)
                },
                setTransition(e) {
                    const t = this,
                        {
                            $el: n,
                            slides: r
                        } = t;
                    r.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.cubeEffect.shadow && !t.isHorizontal() && n.find(".swiper-cube-shadow").transition(e)
                }
            };
            const me = {
                setTranslate() {
                    const e = this,
                        {
                            slides: t,
                            rtlTranslate: n
                        } = e;
                    for (let i = 0; i < t.length; i += 1) {
                        const r = t.eq(i);
                        let progress = r[0].progress;
                        e.params.flipEffect.limitRotation && (progress = Math.max(Math.min(r[0].progress, 1), -1));
                        let l = -180 * progress,
                            o = 0,
                            d = -r[0].swiperSlideOffset,
                            c = 0;
                        if (e.isHorizontal() ? n && (l = -l) : (c = d, d = 0, o = -l, l = 0), r[0].style.zIndex = -Math.abs(Math.round(progress)) + t.length, e.params.flipEffect.slideShadows) {
                            let t = e.isHorizontal() ? r.find(".swiper-slide-shadow-left") : r.find(".swiper-slide-shadow-top"),
                                n = e.isHorizontal() ? r.find(".swiper-slide-shadow-right") : r.find(".swiper-slide-shadow-bottom");
                            0 === t.length && (t = m(`<div class="swiper-slide-shadow-${e.isHorizontal()?"left":"top"}"></div>`), r.append(t)), 0 === n.length && (n = m(`<div class="swiper-slide-shadow-${e.isHorizontal()?"right":"bottom"}"></div>`), r.append(n)), t.length && (t[0].style.opacity = Math.max(-progress, 0)), n.length && (n[0].style.opacity = Math.max(progress, 0))
                        }
                        r.transform(`translate3d(${d}px, ${c}px, 0px) rotateX(${o}deg) rotateY(${l}deg)`)
                    }
                },
                setTransition(e) {
                    const t = this,
                        {
                            slides: n,
                            activeIndex: r,
                            $wrapperEl: l
                        } = t;
                    if (n.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
                        let e = !1;
                        n.eq(r).transitionEnd((function() {
                            if (e) return;
                            if (!t || t.destroyed) return;
                            e = !0, t.animating = !1;
                            const n = ["webkitTransitionEnd", "transitionend"];
                            for (let i = 0; i < n.length; i += 1) l.trigger(n[i])
                        }))
                    }
                }
            };
            const fe = {
                setTranslate() {
                    const e = this,
                        {
                            width: t,
                            height: n,
                            slides: r,
                            $wrapperEl: l,
                            slidesSizesGrid: o
                        } = e,
                        d = e.params.coverflowEffect,
                        c = e.isHorizontal(),
                        h = e.translate,
                        f = c ? t / 2 - h : n / 2 - h,
                        v = c ? d.rotate : -d.rotate,
                        w = d.depth;
                    for (let i = 0, e = r.length; i < e; i += 1) {
                        const e = r.eq(i),
                            t = o[i],
                            n = (f - e[0].swiperSlideOffset - t / 2) / t * d.modifier;
                        let l = c ? v * n : 0,
                            h = c ? 0 : v * n,
                            y = -w * Math.abs(n),
                            x = d.stretch;
                        "string" == typeof x && -1 !== x.indexOf("%") && (x = parseFloat(d.stretch) / 100 * t);
                        let E = c ? 0 : x * n,
                            T = c ? x * n : 0,
                            S = 1 - (1 - d.scale) * Math.abs(n);
                        Math.abs(T) < .001 && (T = 0), Math.abs(E) < .001 && (E = 0), Math.abs(y) < .001 && (y = 0), Math.abs(l) < .001 && (l = 0), Math.abs(h) < .001 && (h = 0), Math.abs(S) < .001 && (S = 0);
                        const C = `translate3d(${T}px,${E}px,${y}px)  rotateX(${h}deg) rotateY(${l}deg) scale(${S})`;
                        if (e.transform(C), e[0].style.zIndex = 1 - Math.abs(Math.round(n)), d.slideShadows) {
                            let t = c ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
                                r = c ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
                            0 === t.length && (t = m(`<div class="swiper-slide-shadow-${c?"left":"top"}"></div>`), e.append(t)), 0 === r.length && (r = m(`<div class="swiper-slide-shadow-${c?"right":"bottom"}"></div>`), e.append(r)), t.length && (t[0].style.opacity = n > 0 ? n : 0), r.length && (r[0].style.opacity = -n > 0 ? -n : 0)
                        }
                    }
                    if (y.pointerEvents || y.prefixedPointerEvents) {
                        l[0].style.perspectiveOrigin = `${f}px 50%`
                    }
                },
                setTransition(e) {
                    this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                }
            };
            const ve = {
                init() {
                    const e = this,
                        {
                            thumbs: t
                        } = e.params,
                        n = e.constructor;
                    t.swiper instanceof n ? (e.thumbs.swiper = t.swiper, w.extend(e.thumbs.swiper.originalParams, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    }), w.extend(e.thumbs.swiper.params, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    })) : w.isObject(t.swiper) && (e.thumbs.swiper = new n(w.extend({}, t.swiper, {
                        watchSlidesVisibility: !0,
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    })), e.thumbs.swiperCreated = !0), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick)
                },
                onThumbClick() {
                    const e = this,
                        t = e.thumbs.swiper;
                    if (!t) return;
                    const n = t.clickedIndex,
                        r = t.clickedSlide;
                    if (r && m(r).hasClass(e.params.thumbs.slideThumbActiveClass)) return;
                    if (null == n) return;
                    let l;
                    if (l = t.params.loop ? parseInt(m(t.clickedSlide).attr("data-swiper-slide-index"), 10) : n, e.params.loop) {
                        let t = e.activeIndex;
                        e.slides.eq(t).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, t = e.activeIndex);
                        const n = e.slides.eq(t).prevAll(`[data-swiper-slide-index="${l}"]`).eq(0).index(),
                            r = e.slides.eq(t).nextAll(`[data-swiper-slide-index="${l}"]`).eq(0).index();
                        l = void 0 === n ? r : void 0 === r ? n : r - t < t - n ? r : n
                    }
                    e.slideTo(l)
                },
                update(e) {
                    const t = this,
                        n = t.thumbs.swiper;
                    if (!n) return;
                    const r = "auto" === n.params.slidesPerView ? n.slidesPerViewDynamic() : n.params.slidesPerView,
                        l = t.params.thumbs.autoScrollOffset,
                        o = l && !n.params.loop;
                    if (t.realIndex !== n.realIndex || o) {
                        let d, c, h = n.activeIndex;
                        if (n.params.loop) {
                            n.slides.eq(h).hasClass(n.params.slideDuplicateClass) && (n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft, h = n.activeIndex);
                            const e = n.slides.eq(h).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index(),
                                r = n.slides.eq(h).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();
                            d = void 0 === e ? r : void 0 === r ? e : r - h == h - e ? h : r - h < h - e ? r : e, c = t.activeIndex > t.previousIndex ? "next" : "prev"
                        } else d = t.realIndex, c = d > t.previousIndex ? "next" : "prev";
                        o && (d += "next" === c ? l : -1 * l), n.visibleSlidesIndexes && n.visibleSlidesIndexes.indexOf(d) < 0 && (n.params.centeredSlides ? d = d > h ? d - Math.floor(r / 2) + 1 : d + Math.floor(r / 2) - 1 : d > h && (d = d - r + 1), n.slideTo(d, e ? 0 : void 0))
                    }
                    let d = 1;
                    const c = t.params.thumbs.slideThumbActiveClass;
                    if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (d = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (d = 1), d = Math.floor(d), n.slides.removeClass(c), n.params.loop || n.params.virtual && n.params.virtual.enabled)
                        for (let i = 0; i < d; i += 1) n.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex+i}"]`).addClass(c);
                    else
                        for (let i = 0; i < d; i += 1) n.slides.eq(t.realIndex + i).addClass(c)
                }
            };
            const ge = [Y, F, R, j, K, Z, Q, {
                name: "mousewheel",
                params: {
                    mousewheel: {
                        enabled: !1,
                        releaseOnEdges: !1,
                        invert: !1,
                        forceToAxis: !1,
                        sensitivity: 1,
                        eventsTarged: "container"
                    }
                },
                create() {
                    const e = this;
                    w.extend(e, {
                        mousewheel: {
                            enabled: !1,
                            enable: ee.enable.bind(e),
                            disable: ee.disable.bind(e),
                            handle: ee.handle.bind(e),
                            handleMouseEnter: ee.handleMouseEnter.bind(e),
                            handleMouseLeave: ee.handleMouseLeave.bind(e),
                            animateSlider: ee.animateSlider.bind(e),
                            releaseScroll: ee.releaseScroll.bind(e),
                            lastScrollTime: w.now(),
                            lastEventBeforeSnap: void 0,
                            recentWheelEvents: []
                        }
                    })
                },
                on: {
                    init() {
                        const e = this;
                        !e.params.mousewheel.enabled && e.params.cssMode && e.mousewheel.disable(), e.params.mousewheel.enabled && e.mousewheel.enable()
                    },
                    destroy() {
                        const e = this;
                        e.params.cssMode && e.mousewheel.enable(), e.mousewheel.enabled && e.mousewheel.disable()
                    }
                }
            }, {
                name: "navigation",
                params: {
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: !1,
                        disabledClass: "swiper-button-disabled",
                        hiddenClass: "swiper-button-hidden",
                        lockClass: "swiper-button-lock"
                    }
                },
                create() {
                    const e = this;
                    w.extend(e, {
                        navigation: {
                            init: te.init.bind(e),
                            update: te.update.bind(e),
                            destroy: te.destroy.bind(e),
                            onNextClick: te.onNextClick.bind(e),
                            onPrevClick: te.onPrevClick.bind(e)
                        }
                    })
                },
                on: {
                    init() {
                        this.navigation.init(), this.navigation.update()
                    },
                    toEdge() {
                        this.navigation.update()
                    },
                    fromEdge() {
                        this.navigation.update()
                    },
                    destroy() {
                        this.navigation.destroy()
                    },
                    click(e) {
                        const t = this,
                            {
                                $nextEl: n,
                                $prevEl: r
                            } = t.navigation;
                        if (t.params.navigation.hideOnClick && !m(e.target).is(r) && !m(e.target).is(n)) {
                            let e;
                            n ? e = n.hasClass(t.params.navigation.hiddenClass) : r && (e = r.hasClass(t.params.navigation.hiddenClass)), !0 === e ? t.emit("navigationShow", t) : t.emit("navigationHide", t), n && n.toggleClass(t.params.navigation.hiddenClass), r && r.toggleClass(t.params.navigation.hiddenClass)
                        }
                    }
                }
            }, {
                name: "pagination",
                params: {
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: e => e,
                        formatFractionTotal: e => e,
                        bulletClass: "swiper-pagination-bullet",
                        bulletActiveClass: "swiper-pagination-bullet-active",
                        modifierClass: "swiper-pagination-",
                        currentClass: "swiper-pagination-current",
                        totalClass: "swiper-pagination-total",
                        hiddenClass: "swiper-pagination-hidden",
                        progressbarFillClass: "swiper-pagination-progressbar-fill",
                        progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                        clickableClass: "swiper-pagination-clickable",
                        lockClass: "swiper-pagination-lock"
                    }
                },
                create() {
                    const e = this;
                    w.extend(e, {
                        pagination: {
                            init: se.init.bind(e),
                            render: se.render.bind(e),
                            update: se.update.bind(e),
                            destroy: se.destroy.bind(e),
                            dynamicBulletIndex: 0
                        }
                    })
                },
                on: {
                    init() {
                        const e = this;
                        e.pagination.init(), e.pagination.render(), e.pagination.update()
                    },
                    activeIndexChange() {
                        const e = this;
                        (e.params.loop || void 0 === e.snapIndex) && e.pagination.update()
                    },
                    snapIndexChange() {
                        const e = this;
                        e.params.loop || e.pagination.update()
                    },
                    slidesLengthChange() {
                        const e = this;
                        e.params.loop && (e.pagination.render(), e.pagination.update())
                    },
                    snapGridLengthChange() {
                        const e = this;
                        e.params.loop || (e.pagination.render(), e.pagination.update())
                    },
                    destroy() {
                        this.pagination.destroy()
                    },
                    click(e) {
                        const t = this;
                        if (t.params.pagination.el && t.params.pagination.hideOnClick && t.pagination.$el.length > 0 && !m(e.target).hasClass(t.params.pagination.bulletClass)) {
                            !0 === t.pagination.$el.hasClass(t.params.pagination.hiddenClass) ? t.emit("paginationShow", t) : t.emit("paginationHide", t), t.pagination.$el.toggleClass(t.params.pagination.hiddenClass)
                        }
                    }
                }
            }, {
                name: "scrollbar",
                params: {
                    scrollbar: {
                        el: null,
                        dragSize: "auto",
                        hide: !1,
                        draggable: !1,
                        snapOnRelease: !0,
                        lockClass: "swiper-scrollbar-lock",
                        dragClass: "swiper-scrollbar-drag"
                    }
                },
                create() {
                    const e = this;
                    w.extend(e, {
                        scrollbar: {
                            init: ae.init.bind(e),
                            destroy: ae.destroy.bind(e),
                            updateSize: ae.updateSize.bind(e),
                            setTranslate: ae.setTranslate.bind(e),
                            setTransition: ae.setTransition.bind(e),
                            enableDraggable: ae.enableDraggable.bind(e),
                            disableDraggable: ae.disableDraggable.bind(e),
                            setDragPosition: ae.setDragPosition.bind(e),
                            getPointerPosition: ae.getPointerPosition.bind(e),
                            onDragStart: ae.onDragStart.bind(e),
                            onDragMove: ae.onDragMove.bind(e),
                            onDragEnd: ae.onDragEnd.bind(e),
                            isTouched: !1,
                            timeout: null,
                            dragTimeout: null
                        }
                    })
                },
                on: {
                    init() {
                        const e = this;
                        e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate()
                    },
                    update() {
                        this.scrollbar.updateSize()
                    },
                    resize() {
                        this.scrollbar.updateSize()
                    },
                    observerUpdate() {
                        this.scrollbar.updateSize()
                    },
                    setTranslate() {
                        this.scrollbar.setTranslate()
                    },
                    setTransition(e) {
                        this.scrollbar.setTransition(e)
                    },
                    destroy() {
                        this.scrollbar.destroy()
                    }
                }
            }, {
                name: "parallax",
                params: {
                    parallax: {
                        enabled: !1
                    }
                },
                create() {
                    const e = this;
                    w.extend(e, {
                        parallax: {
                            setTransform: ie.setTransform.bind(e),
                            setTranslate: ie.setTranslate.bind(e),
                            setTransition: ie.setTransition.bind(e)
                        }
                    })
                },
                on: {
                    beforeInit() {
                        const e = this;
                        e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
                    },
                    init() {
                        this.params.parallax.enabled && this.parallax.setTranslate()
                    },
                    setTranslate() {
                        this.params.parallax.enabled && this.parallax.setTranslate()
                    },
                    setTransition(e) {
                        this.params.parallax.enabled && this.parallax.setTransition(e)
                    }
                }
            }, {
                name: "zoom",
                params: {
                    zoom: {
                        enabled: !1,
                        maxRatio: 3,
                        minRatio: 1,
                        toggle: !0,
                        containerClass: "swiper-zoom-container",
                        zoomedSlideClass: "swiper-slide-zoomed"
                    }
                },
                create() {
                    const e = this,
                        t = {
                            enabled: !1,
                            scale: 1,
                            currentScale: 1,
                            isScaling: !1,
                            gesture: {
                                $slideEl: void 0,
                                slideWidth: void 0,
                                slideHeight: void 0,
                                $imageEl: void 0,
                                $imageWrapEl: void 0,
                                maxRatio: 3
                            },
                            image: {
                                isTouched: void 0,
                                isMoved: void 0,
                                currentX: void 0,
                                currentY: void 0,
                                minX: void 0,
                                minY: void 0,
                                maxX: void 0,
                                maxY: void 0,
                                width: void 0,
                                height: void 0,
                                startX: void 0,
                                startY: void 0,
                                touchesStart: {},
                                touchesCurrent: {}
                            },
                            velocity: {
                                x: void 0,
                                y: void 0,
                                prevPositionX: void 0,
                                prevPositionY: void 0,
                                prevTime: void 0
                            }
                        };
                    "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach((n => {
                        t[n] = ne[n].bind(e)
                    })), w.extend(e, {
                        zoom: t
                    });
                    let n = 1;
                    Object.defineProperty(e.zoom, "scale", {
                        get: () => n,
                        set(t) {
                            if (n !== t) {
                                const n = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                                    r = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
                                e.emit("zoomChange", t, n, r)
                            }
                            n = t
                        }
                    })
                },
                on: {
                    init() {
                        const e = this;
                        e.params.zoom.enabled && e.zoom.enable()
                    },
                    destroy() {
                        this.zoom.disable()
                    },
                    touchStart(e) {
                        this.zoom.enabled && this.zoom.onTouchStart(e)
                    },
                    touchEnd(e) {
                        this.zoom.enabled && this.zoom.onTouchEnd(e)
                    },
                    doubleTap(e) {
                        const t = this;
                        t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && t.zoom.toggle(e)
                    },
                    transitionEnd() {
                        const e = this;
                        e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd()
                    },
                    slideChange() {
                        const e = this;
                        e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && e.zoom.onTransitionEnd()
                    }
                }
            }, {
                name: "lazy",
                params: {
                    lazy: {
                        enabled: !1,
                        loadPrevNext: !1,
                        loadPrevNextAmount: 1,
                        loadOnTransitionStart: !1,
                        elementClass: "swiper-lazy",
                        loadingClass: "swiper-lazy-loading",
                        loadedClass: "swiper-lazy-loaded",
                        preloaderClass: "swiper-lazy-preloader"
                    }
                },
                create() {
                    const e = this;
                    w.extend(e, {
                        lazy: {
                            initialImageLoaded: !1,
                            load: re.load.bind(e),
                            loadInSlide: re.loadInSlide.bind(e)
                        }
                    })
                },
                on: {
                    beforeInit() {
                        const e = this;
                        e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1)
                    },
                    init() {
                        const e = this;
                        e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && e.lazy.load()
                    },
                    scroll() {
                        const e = this;
                        e.params.freeMode && !e.params.freeModeSticky && e.lazy.load()
                    },
                    resize() {
                        const e = this;
                        e.params.lazy.enabled && e.lazy.load()
                    },
                    scrollbarDragMove() {
                        const e = this;
                        e.params.lazy.enabled && e.lazy.load()
                    },
                    transitionStart() {
                        const e = this;
                        e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
                    },
                    transitionEnd() {
                        const e = this;
                        e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load()
                    },
                    slideChange() {
                        const e = this;
                        e.params.lazy.enabled && e.params.cssMode && e.lazy.load()
                    }
                }
            }, {
                name: "controller",
                params: {
                    controller: {
                        control: void 0,
                        inverse: !1,
                        by: "slide"
                    }
                },
                create() {
                    const e = this;
                    w.extend(e, {
                        controller: {
                            control: e.params.controller.control,
                            getInterpolateFunction: le.getInterpolateFunction.bind(e),
                            setTranslate: le.setTranslate.bind(e),
                            setTransition: le.setTransition.bind(e)
                        }
                    })
                },
                on: {
                    update() {
                        const e = this;
                        e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
                    },
                    resize() {
                        const e = this;
                        e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
                    },
                    observerUpdate() {
                        const e = this;
                        e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
                    },
                    setTranslate(e, t) {
                        this.controller.control && this.controller.setTranslate(e, t)
                    },
                    setTransition(e, t) {
                        this.controller.control && this.controller.setTransition(e, t)
                    }
                }
            }, {
                name: "a11y",
                params: {
                    a11y: {
                        enabled: !0,
                        notificationClass: "swiper-notification",
                        prevSlideMessage: "Previous slide",
                        nextSlideMessage: "Next slide",
                        firstSlideMessage: "This is the first slide",
                        lastSlideMessage: "This is the last slide",
                        paginationBulletMessage: "Go to slide {{index}}"
                    }
                },
                create() {
                    const e = this;
                    w.extend(e, {
                        a11y: {
                            liveRegion: m(`<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)
                        }
                    }), Object.keys(oe).forEach((t => {
                        e.a11y[t] = oe[t].bind(e)
                    }))
                },
                on: {
                    init() {
                        const e = this;
                        e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation())
                    },
                    toEdge() {
                        this.params.a11y.enabled && this.a11y.updateNavigation()
                    },
                    fromEdge() {
                        this.params.a11y.enabled && this.a11y.updateNavigation()
                    },
                    paginationUpdate() {
                        this.params.a11y.enabled && this.a11y.updatePagination()
                    },
                    destroy() {
                        this.params.a11y.enabled && this.a11y.destroy()
                    }
                }
            }, {
                name: "history",
                params: {
                    history: {
                        enabled: !1,
                        replaceState: !1,
                        key: "slides"
                    }
                },
                create() {
                    const e = this;
                    w.extend(e, {
                        history: {
                            init: de.init.bind(e),
                            setHistory: de.setHistory.bind(e),
                            setHistoryPopState: de.setHistoryPopState.bind(e),
                            scrollToSlide: de.scrollToSlide.bind(e),
                            destroy: de.destroy.bind(e)
                        }
                    })
                },
                on: {
                    init() {
                        const e = this;
                        e.params.history.enabled && e.history.init()
                    },
                    destroy() {
                        const e = this;
                        e.params.history.enabled && e.history.destroy()
                    },
                    transitionEnd() {
                        const e = this;
                        e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex)
                    },
                    slideChange() {
                        const e = this;
                        e.history.initialized && e.params.cssMode && e.history.setHistory(e.params.history.key, e.activeIndex)
                    }
                }
            }, {
                name: "hash-navigation",
                params: {
                    hashNavigation: {
                        enabled: !1,
                        replaceState: !1,
                        watchState: !1
                    }
                },
                create() {
                    const e = this;
                    w.extend(e, {
                        hashNavigation: {
                            initialized: !1,
                            init: ce.init.bind(e),
                            destroy: ce.destroy.bind(e),
                            setHash: ce.setHash.bind(e),
                            onHashCange: ce.onHashCange.bind(e)
                        }
                    })
                },
                on: {
                    init() {
                        const e = this;
                        e.params.hashNavigation.enabled && e.hashNavigation.init()
                    },
                    destroy() {
                        const e = this;
                        e.params.hashNavigation.enabled && e.hashNavigation.destroy()
                    },
                    transitionEnd() {
                        const e = this;
                        e.hashNavigation.initialized && e.hashNavigation.setHash()
                    },
                    slideChange() {
                        const e = this;
                        e.hashNavigation.initialized && e.params.cssMode && e.hashNavigation.setHash()
                    }
                }
            }, {
                name: "autoplay",
                params: {
                    autoplay: {
                        enabled: !1,
                        delay: 3e3,
                        waitForTransition: !0,
                        disableOnInteraction: !0,
                        stopOnLastSlide: !1,
                        reverseDirection: !1
                    }
                },
                create() {
                    const e = this;
                    w.extend(e, {
                        autoplay: {
                            running: !1,
                            paused: !1,
                            run: pe.run.bind(e),
                            start: pe.start.bind(e),
                            stop: pe.stop.bind(e),
                            pause: pe.pause.bind(e),
                            onVisibilityChange() {
                                "hidden" === document.visibilityState && e.autoplay.running && e.autoplay.pause(), "visible" === document.visibilityState && e.autoplay.paused && (e.autoplay.run(), e.autoplay.paused = !1)
                            },
                            onTransitionEnd(t) {
                                e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
                            }
                        }
                    })
                },
                on: {
                    init() {
                        const e = this;
                        e.params.autoplay.enabled && (e.autoplay.start(), document.addEventListener("visibilitychange", e.autoplay.onVisibilityChange))
                    },
                    beforeTransitionStart(e, t) {
                        const n = this;
                        n.autoplay.running && (t || !n.params.autoplay.disableOnInteraction ? n.autoplay.pause(e) : n.autoplay.stop())
                    },
                    sliderFirstMove() {
                        const e = this;
                        e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause())
                    },
                    touchEnd() {
                        const e = this;
                        e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && e.autoplay.run()
                    },
                    destroy() {
                        const e = this;
                        e.autoplay.running && e.autoplay.stop(), document.removeEventListener("visibilitychange", e.autoplay.onVisibilityChange)
                    }
                }
            }, {
                name: "effect-fade",
                params: {
                    fadeEffect: {
                        crossFade: !1
                    }
                },
                create() {
                    const e = this;
                    w.extend(e, {
                        fadeEffect: {
                            setTranslate: ue.setTranslate.bind(e),
                            setTransition: ue.setTransition.bind(e)
                        }
                    })
                },
                on: {
                    beforeInit() {
                        const e = this;
                        if ("fade" !== e.params.effect) return;
                        e.classNames.push(`${e.params.containerModifierClass}fade`);
                        const t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        w.extend(e.params, t), w.extend(e.originalParams, t)
                    },
                    setTranslate() {
                        "fade" === this.params.effect && this.fadeEffect.setTranslate()
                    },
                    setTransition(e) {
                        "fade" === this.params.effect && this.fadeEffect.setTransition(e)
                    }
                }
            }, {
                name: "effect-cube",
                params: {
                    cubeEffect: {
                        slideShadows: !0,
                        shadow: !0,
                        shadowOffset: 20,
                        shadowScale: .94
                    }
                },
                create() {
                    const e = this;
                    w.extend(e, {
                        cubeEffect: {
                            setTranslate: he.setTranslate.bind(e),
                            setTransition: he.setTransition.bind(e)
                        }
                    })
                },
                on: {
                    beforeInit() {
                        const e = this;
                        if ("cube" !== e.params.effect) return;
                        e.classNames.push(`${e.params.containerModifierClass}cube`), e.classNames.push(`${e.params.containerModifierClass}3d`);
                        const t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            resistanceRatio: 0,
                            spaceBetween: 0,
                            centeredSlides: !1,
                            virtualTranslate: !0
                        };
                        w.extend(e.params, t), w.extend(e.originalParams, t)
                    },
                    setTranslate() {
                        "cube" === this.params.effect && this.cubeEffect.setTranslate()
                    },
                    setTransition(e) {
                        "cube" === this.params.effect && this.cubeEffect.setTransition(e)
                    }
                }
            }, {
                name: "effect-flip",
                params: {
                    flipEffect: {
                        slideShadows: !0,
                        limitRotation: !0
                    }
                },
                create() {
                    const e = this;
                    w.extend(e, {
                        flipEffect: {
                            setTranslate: me.setTranslate.bind(e),
                            setTransition: me.setTransition.bind(e)
                        }
                    })
                },
                on: {
                    beforeInit() {
                        const e = this;
                        if ("flip" !== e.params.effect) return;
                        e.classNames.push(`${e.params.containerModifierClass}flip`), e.classNames.push(`${e.params.containerModifierClass}3d`);
                        const t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        w.extend(e.params, t), w.extend(e.originalParams, t)
                    },
                    setTranslate() {
                        "flip" === this.params.effect && this.flipEffect.setTranslate()
                    },
                    setTransition(e) {
                        "flip" === this.params.effect && this.flipEffect.setTransition(e)
                    }
                }
            }, {
                name: "effect-coverflow",
                params: {
                    coverflowEffect: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        scale: 1,
                        modifier: 1,
                        slideShadows: !0
                    }
                },
                create() {
                    const e = this;
                    w.extend(e, {
                        coverflowEffect: {
                            setTranslate: fe.setTranslate.bind(e),
                            setTransition: fe.setTransition.bind(e)
                        }
                    })
                },
                on: {
                    beforeInit() {
                        const e = this;
                        "coverflow" === e.params.effect && (e.classNames.push(`${e.params.containerModifierClass}coverflow`), e.classNames.push(`${e.params.containerModifierClass}3d`), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
                    },
                    setTranslate() {
                        "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
                    },
                    setTransition(e) {
                        "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
                    }
                }
            }, {
                name: "thumbs",
                params: {
                    thumbs: {
                        swiper: null,
                        multipleActiveThumbs: !0,
                        autoScrollOffset: 0,
                        slideThumbActiveClass: "swiper-slide-thumb-active",
                        thumbsContainerClass: "swiper-container-thumbs"
                    }
                },
                create() {
                    const e = this;
                    w.extend(e, {
                        thumbs: {
                            swiper: null,
                            init: ve.init.bind(e),
                            update: ve.update.bind(e),
                            onThumbClick: ve.onThumbClick.bind(e)
                        }
                    })
                },
                on: {
                    beforeInit() {
                        const e = this,
                            {
                                thumbs: t
                            } = e.params;
                        t && t.swiper && (e.thumbs.init(), e.thumbs.update(!0))
                    },
                    slideChange() {
                        this.thumbs.swiper && this.thumbs.update()
                    },
                    update() {
                        this.thumbs.swiper && this.thumbs.update()
                    },
                    resize() {
                        this.thumbs.swiper && this.thumbs.update()
                    },
                    observerUpdate() {
                        this.thumbs.swiper && this.thumbs.update()
                    },
                    setTransition(e) {
                        const t = this.thumbs.swiper;
                        t && t.setTransition(e)
                    },
                    beforeDestroy() {
                        const e = this.thumbs.swiper;
                        e && this.thumbs.swiperCreated && e && e.destroy()
                    }
                }
            }];
            void 0 === V.use && (V.use = V.Class.use, V.installModule = V.Class.installModule), V.use(ge);
            t.default = V
        },
        871: function(e, t, n) {
            ! function(e, t, n) {
                "use strict";
                var r;
                t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t, n = n && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n,
                    function(e) {
                        e.SwiperComponent = "Swiper", e.SwiperSlideComponent = "SwiperSlide", e.SwiperDirective = "swiper", e.SwiperInstance = "$swiper"
                    }(r || (r = {}));
                var l, o, d = Object.freeze({
                    containerClass: "swiper-container",
                    wrapperClass: "swiper-wrapper",
                    slideClass: "swiper-slide"
                });
                (function(e) {
                    e.Ready = "ready", e.ClickSlide = "clickSlide"
                })(l || (l = {})),
                function(e) {
                    e.AutoUpdate = "autoUpdate", e.AutoDestroy = "autoDestroy", e.DeleteInstanceOnDestroy = "deleteInstanceOnDestroy", e.CleanupStylesOnDestroy = "cleanupStylesOnDestroy"
                }(o || (o = {}));
                var c = ["init", "beforeDestroy", "slideChange", "slideChangeTransitionStart", "slideChangeTransitionEnd", "slideNextTransitionStart", "slideNextTransitionEnd", "slidePrevTransitionStart", "slidePrevTransitionEnd", "transitionStart", "transitionEnd", "touchStart", "touchMove", "touchMoveOpposite", "sliderMove", "touchEnd", "click", "tap", "doubleTap", "imagesReady", "progress", "reachBeginning", "reachEnd", "fromEdge", "setTranslate", "setTransition", "resize", "observerUpdate", "beforeLoopFix", "loopFix"];

                function h() {
                    for (var s = 0, i = 0, e = arguments.length; i < e; i++) s += arguments[i].length;
                    var t = Array(s),
                        n = 0;
                    for (i = 0; i < e; i++)
                        for (var a = arguments[i], r = 0, l = a.length; r < l; r++, n++) t[n] = a[r];
                    return t
                }
                var m, f = function(e) {
                        return e.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/\s+/g, "-").toLowerCase()
                    },
                    v = function(e, t, n) {
                        var r, o, d;
                        if (e && !e.destroyed) {
                            var c = (null === (r = t.composedPath) || void 0 === r ? void 0 : r.call(t)) || t.path;
                            if ((null == t ? void 0 : t.target) && c) {
                                var h = Array.from(e.slides),
                                    m = Array.from(c);
                                if (h.includes(t.target) || m.some((function(e) {
                                        return h.includes(e)
                                    }))) {
                                    var v = e.clickedIndex,
                                        w = Number(null === (d = null === (o = e.clickedSlide) || void 0 === o ? void 0 : o.dataset) || void 0 === d ? void 0 : d.swiperSlideIndex),
                                        y = Number.isInteger(w) ? w : null;
                                    n(l.ClickSlide, v, y), n(f(l.ClickSlide), v, y)
                                }
                            }
                        }
                    },
                    w = function(e, t) {
                        c.forEach((function(n) {
                            e.on(n, (function() {
                                for (var e = arguments, r = [], l = 0; l < arguments.length; l++) r[l] = e[l];
                                t.apply(void 0, h([n], r));
                                var o = f(n);
                                o !== n && t.apply(void 0, h([o], r))
                            }))
                        }))
                    },
                    y = "instanceName";

                function x(e, t) {
                    var n = function(e, t) {
                            var n, r, l, o, d = null === (r = null === (n = e.data) || void 0 === n ? void 0 : n.attrs) || void 0 === r ? void 0 : r[t];
                            return void 0 !== d ? d : null === (o = null === (l = e.data) || void 0 === l ? void 0 : l.attrs) || void 0 === o ? void 0 : o[f(t)]
                        },
                        c = function(element, e, t) {
                            return e.arg || n(t, y) || element.id || r.SwiperInstance
                        },
                        h = function(element, e, t) {
                            var n = c(element, e, t);
                            return t.context[n] || null
                        },
                        m = function(e) {
                            return e.value || t
                        },
                        x = function(input) {
                            return [!0, void 0, null, ""].includes(input)
                        },
                        E = function(e) {
                            var t, n, r = (null === (t = e.data) || void 0 === t ? void 0 : t.on) || (null === (n = e.componentOptions) || void 0 === n ? void 0 : n.listeners);
                            return function(e) {
                                for (var t, n = arguments, l = [], o = 1; o < arguments.length; o++) l[o - 1] = n[o];
                                var d = null === (t = r) || void 0 === t ? void 0 : t[e];
                                d && d.fns.apply(d, l)
                            }
                        };
                    return {
                        bind: function(element, e, t) {
                            -1 === element.className.indexOf(d.containerClass) && (element.className += (element.className ? " " : "") + d.containerClass), element.addEventListener("click", (function(n) {
                                var r = E(t),
                                    l = h(element, e, t);
                                v(l, n, r)
                            }))
                        },
                        inserted: function(element, t, n) {
                            var r = n.context,
                                o = m(t),
                                d = c(element, t, n),
                                h = E(n),
                                f = r,
                                v = null == f ? void 0 : f[d];
                            v && !v.destroyed || (v = new e(element, o), f[d] = v, w(v, h), h(l.Ready, v))
                        },
                        componentUpdated: function(element, e, t) {
                            var r, l, d, c, f, v, w, y, E, T, S, C, $ = n(t, o.AutoUpdate);
                            if (x($)) {
                                var M = h(element, e, t);
                                if (M) {
                                    var P = m(e).loop;
                                    P && (null === (l = null === (r = M) || void 0 === r ? void 0 : r.loopDestroy) || void 0 === l || l.call(r)), null === (d = null == M ? void 0 : M.update) || void 0 === d || d.call(M), null === (f = null === (c = M.navigation) || void 0 === c ? void 0 : c.update) || void 0 === f || f.call(c), null === (w = null === (v = M.pagination) || void 0 === v ? void 0 : v.render) || void 0 === w || w.call(v), null === (E = null === (y = M.pagination) || void 0 === y ? void 0 : y.update) || void 0 === E || E.call(y), P && (null === (S = null === (T = M) || void 0 === T ? void 0 : T.loopCreate) || void 0 === S || S.call(T), null === (C = null == M ? void 0 : M.update) || void 0 === C || C.call(M))
                                }
                            }
                        },
                        unbind: function(element, e, t) {
                            var r, l = n(t, o.AutoDestroy);
                            if (x(l)) {
                                var d = h(element, e, t);
                                d && d.initialized && (null === (r = null == d ? void 0 : d.destroy) || void 0 === r || r.call(d, x(n(t, o.DeleteInstanceOnDestroy)), x(n(t, o.CleanupStylesOnDestroy))))
                            }
                        }
                    }
                }

                function E(e) {
                    var t;
                    return n.extend({
                        name: r.SwiperComponent,
                        props: (t = {
                            defaultOptions: {
                                type: Object,
                                required: !1,
                                default: function() {
                                    return {}
                                }
                            },
                            options: {
                                type: Object,
                                required: !1
                            }
                        }, t[o.AutoUpdate] = {
                            type: Boolean,
                            default: !0
                        }, t[o.AutoDestroy] = {
                            type: Boolean,
                            default: !0
                        }, t[o.DeleteInstanceOnDestroy] = {
                            type: Boolean,
                            required: !1,
                            default: !0
                        }, t[o.CleanupStylesOnDestroy] = {
                            type: Boolean,
                            required: !1,
                            default: !0
                        }, t),
                        data: function() {
                            var e;
                            return (e = {})[r.SwiperInstance] = null, e
                        },
                        computed: {
                            swiperInstance: {
                                cache: !1,
                                set: function(e) {
                                    this[r.SwiperInstance] = e
                                },
                                get: function() {
                                    return this[r.SwiperInstance]
                                }
                            },
                            swiperOptions: function() {
                                return this.options || this.defaultOptions
                            },
                            wrapperClass: function() {
                                return this.swiperOptions.wrapperClass || d.wrapperClass
                            }
                        },
                        methods: {
                            handleSwiperClick: function(e) {
                                v(this.swiperInstance, e, this.$emit.bind(this))
                            },
                            autoReLoopSwiper: function() {
                                var e, t;
                                if (this.swiperInstance && this.swiperOptions.loop) {
                                    var n = this.swiperInstance;
                                    null === (e = null == n ? void 0 : n.loopDestroy) || void 0 === e || e.call(n), null === (t = null == n ? void 0 : n.loopCreate) || void 0 === t || t.call(n)
                                }
                            },
                            updateSwiper: function() {
                                var e, t, n, r, l, d, c, h;
                                this[o.AutoUpdate] && this.swiperInstance && (this.autoReLoopSwiper(), null === (t = null === (e = this.swiperInstance) || void 0 === e ? void 0 : e.update) || void 0 === t || t.call(e), null === (r = null === (n = this.swiperInstance.navigation) || void 0 === n ? void 0 : n.update) || void 0 === r || r.call(n), null === (d = null === (l = this.swiperInstance.pagination) || void 0 === l ? void 0 : l.render) || void 0 === d || d.call(l), null === (h = null === (c = this.swiperInstance.pagination) || void 0 === c ? void 0 : c.update) || void 0 === h || h.call(c))
                            },
                            destroySwiper: function() {
                                var e, t;
                                this[o.AutoDestroy] && this.swiperInstance && this.swiperInstance.initialized && (null === (t = null === (e = this.swiperInstance) || void 0 === e ? void 0 : e.destroy) || void 0 === t || t.call(e, this[o.DeleteInstanceOnDestroy], this[o.CleanupStylesOnDestroy]))
                            },
                            initSwiper: function() {
                                this.swiperInstance = new e(this.$el, this.swiperOptions), w(this.swiperInstance, this.$emit.bind(this)), this.$emit(l.Ready, this.swiperInstance)
                            }
                        },
                        mounted: function() {
                            this.swiperInstance || this.initSwiper()
                        },
                        activated: function() {
                            this.updateSwiper()
                        },
                        updated: function() {
                            this.updateSwiper()
                        },
                        beforeDestroy: function() {
                            this.$nextTick(this.destroySwiper)
                        },
                        render: function(e) {
                            return e("div", {
                                staticClass: d.containerClass,
                                on: {
                                    click: this.handleSwiperClick
                                }
                            }, [this.$slots[m.ParallaxBg], e("div", {
                                class: this.wrapperClass
                            }, this.$slots.default), this.$slots[m.Pagination], this.$slots[m.PrevButton], this.$slots[m.NextButton], this.$slots[m.Scrollbar]])
                        }
                    })
                }! function(e) {
                    e.ParallaxBg = "parallax-bg", e.Pagination = "pagination", e.Scrollbar = "scrollbar", e.PrevButton = "button-prev", e.NextButton = "button-next"
                }(m || (m = {}));
                var T = n.extend({
                        name: r.SwiperSlideComponent,
                        computed: {
                            slideClass: function() {
                                var e, t;
                                return (null === (t = null === (e = this.$parent) || void 0 === e ? void 0 : e.swiperOptions) || void 0 === t ? void 0 : t.slideClass) || d.slideClass
                            }
                        },
                        methods: {
                            update: function() {
                                var e, t = this.$parent;
                                t[o.AutoUpdate] && (null === (e = null == t ? void 0 : t.swiperInstance) || void 0 === e || e.update())
                            }
                        },
                        mounted: function() {
                            this.update()
                        },
                        updated: function() {
                            this.update()
                        },
                        render: function(e) {
                            return e("div", {
                                class: this.slideClass
                            }, this.$slots.default)
                        }
                    }),
                    S = function(e) {
                        var t = function(n, l) {
                            if (!t.installed) {
                                var o = E(e);
                                l && (o.options.props.defaultOptions.default = function() {
                                    return l
                                }), n.component(r.SwiperComponent, o), n.component(r.SwiperSlideComponent, T), n.directive(r.SwiperDirective, x(e, l)), t.installed = !0
                            }
                        };
                        return t
                    };

                function C(e) {
                    var t;
                    return (t = {
                        version: "4.1.1",
                        install: S(e),
                        directive: x(e)
                    })[r.SwiperComponent] = E(e), t[r.SwiperSlideComponent] = T, t
                }
                var $ = C(t),
                    M = $.version,
                    P = $.install,
                    k = $.directive,
                    z = $.Swiper,
                    I = $.SwiperSlide;
                e.Swiper = z, e.SwiperSlide = I, e.default = $, e.directive = k, e.install = P, e.version = M, Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }(t, n(1026), n(2))
        }
    }
]);