(window.webpackJsonp = window.webpackJsonp || []).push([
    [7], {
        1050: function(o, t, n) {
            "use strict";
            n.r(t);
            var e = {
                    name: "BackToTop",
                    mounted() {
                        window.addEventListener("scroll", this.listenOnEventScroll)
                    },
                    methods: {
                        scrollToSmoothly: n(114).s,
                        listenOnEventScroll() {
                            var button = document.getElementById("backToTop");
                            window.scrollY > 300 ? button.classList.add("show") : button.classList.remove("show")
                        }
                    }
                },
                c = (n(992), n(44)),
                component = Object(c.a)(e, (function() {
                    var o = this,
                        t = o._self._c;
                    return t("button", {
                        staticClass: "btn-back-to-top button__back-to-top",
                        attrs: {
                            id: "backToTop",
                            title: "Back to top"
                        },
                        on: {
                            click: function(t) {
                                return o.scrollToSmoothly(0, 500)
                            }
                        }
                    }, [t("font-awesome-icon", {
                        staticClass: "icon-up",
                        attrs: {
                            icon: "chevron-up"
                        }
                    }), o._v(" "), t("strong", [o._v("Lên đầu")])], 1)
                }), [], !1, null, null, null);
            t.default = component.exports
        },
        890: function(o, t, n) {
            var content = n(993);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [o.i, content, ""]
            ]), content.locals && (o.exports = content.locals);
            (0, n(51).default)("e0c8230c", content, !0, {
                sourceMap: !1
            })
        },
        992: function(o, t, n) {
            "use strict";
            n(890)
        },
        993: function(o, t, n) {
            var e = n(50)((function(i) {
                return i[1]
            }));
            e.push([o.i, "#backToTop{align-items:center;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);background:rgba(215,0,24,.7);border:0;border-radius:10px;bottom:110px;box-shadow:0 1px 2px 0 rgba(60,64,67,.1),0 2px 6px 2px rgba(60,64,67,.15);color:#fff;cursor:pointer;display:flex;flex-direction:column;height:45px;justify-content:center;opacity:0;padding:2px;position:fixed;right:calc(50% - 600px);-webkit-text-decoration:none;text-decoration:none;width:45px;z-index:100}#backToTop.show{opacity:1}#backToTop .icon-up{width:10px}#backToTop .icon-up svg{fill:#fff;font-weight:600}#backToTop strong{color:#fff;font-size:10px}@media screen and (max-width:1200px){#backToTop{right:5px}}", ""]), e.locals = {}, o.exports = e
        }
    }
]);