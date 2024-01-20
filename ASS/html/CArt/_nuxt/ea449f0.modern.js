(window.webpackJsonp = window.webpackJsonp || []).push([
    [93], {
        1046: function(e, o, n) {
            "use strict";
            n.r(o);
            var t = n(1),
                r = n(0),
                c = (n(6), n(26), n(7), n(18), n(30), n(929)),
                l = n(45);

            function d(e, o) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    o && (t = t.filter((function(o) {
                        return Object.getOwnPropertyDescriptor(e, o).enumerable
                    }))), n.push.apply(n, t)
                }
                return n
            }

            function v(e) {
                for (var o = 1; o < arguments.length; o++) {
                    var n = null != arguments[o] ? arguments[o] : {};
                    o % 2 ? d(Object(n), !0).forEach((function(o) {
                        Object(r.a)(e, o, n[o])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function(o) {
                        Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o))
                    }))
                }
                return e
            }
            var h = {
                    components: {
                        HeaderDesk: c.default,
                        BackToTop: () => n.e(7).then(n.bind(null, 1050))
                    },
                    computed: v(v({}, Object(l.e)("province", ["province", "listProvince"])), Object(l.e)("account", ["session"])),
                    mounted() {
                        var e = this;
                        return Object(t.a)((function*() {
                            var o;
                            yield e.getListProvinceGraphql();
                            var n = e.$cookies.get("USER"),
                                t = e.$cookies.get("token"),
                                r = e.$cookies.get("guest_token"),
                                c = e.$cookies.get("cps_province") || e.province;
                            if (t && n ? (console.log("Logged In"), e.$set(n, "loggedIn", !0), e.$set(n, "token", t), e.handleLogin({
                                    user: n
                                }), e.updateCookie()) : t && !n ? (console.log("Update user profile"), yield e.getProfileUser({
                                    accessToken: t
                                })) : t || e.$cookies.remove("USER"), !t && !r) {
                                yield e.createToken();
                                var l = e.$cookies.get("guest_token") || "";
                                yield e.getSession({
                                    token: l
                                }), yield e.changeSessionProvinceId({
                                    provinceId: c.id
                                })
                            }
                            if ((r || t) && (yield e.getSession({
                                    token: r || t
                                })), null !== (o = e.session) && void 0 !== o && o.required_login && (e.$route.path.includes("abandonment") || e.$route.path.includes("payment/") || e.$route.path.includes("success") || (e.setShowModal({
                                    show: !0,
                                    title: "Vui lòng đăng nhập tài khoản Smember để xem ưu đãi và thanh toán dễ dàng hơn.",
                                    disable: !0
                                }), "/" !== e.$route.path && (yield e.$router.push("/")))), e.session.province_id !== c.id && t)
                                if (e.session.province_id) {
                                    var d = e.listProvince.findIndex((o => {
                                        var n;
                                        return o.id === (null === (n = e.session) || void 0 === n ? void 0 : n.province_id)
                                    }));
                                    yield e.handleChangeProvince({
                                        province: e.listProvince[d],
                                        isReload: !1
                                    })
                                } else yield e.handleChangeProvince({
                                    province: c,
                                    isReload: !1
                                });
                            else e.setChangeProvince(c)
                        }))()
                    },
                    methods: v(v(v(v(v({}, Object(l.d)("account", ["handleLogin", "updateCookie", "setShowModal"])), Object(l.b)("account", ["getProfileUser", "createToken", "getSession"])), Object(l.d)("province", ["setChangeProvince"])), Object(l.b)("quote", ["changeSessionProvinceId"])), Object(l.b)("province", ["getListProvinceGraphql", "handleChangeProvince"]))
                },
                f = (n(984), n(44)),
                component = Object(f.a)(h, (function() {
                    var e = this,
                        o = e._self._c;
                    return o("div", {
                        staticClass: "bg-main"
                    }, [o("HeaderDesk"), e._v(" "), o("Nuxt"), e._v(" "), o("BackToTop")], 1)
                }), [], !1, null, "78dc3ec0", null);
            o.default = component.exports
        },
        886: function(e, o, n) {
            var content = n(985);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, n(51).default)("74bac58e", content, !0, {
                sourceMap: !1
            })
        },
        984: function(e, o, n) {
            "use strict";
            n(886)
        },
        985: function(e, o, n) {
            var t = n(50)((function(i) {
                return i[1]
            }));
            t.push([e.i, ".bg-main[data-v-78dc3ec0]{background:#f4f6f8}", ""]), t.locals = {}, e.exports = t
        }
    }
]);