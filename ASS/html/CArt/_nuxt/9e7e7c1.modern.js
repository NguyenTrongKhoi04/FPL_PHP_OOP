(window.webpackJsonp = window.webpackJsonp || []).push([
    [31], {
        1012: function(t, e, o) {
            "use strict";
            o(900)
        },
        1013: function(t, e, o) {
            var r = o(50)((function(i) {
                return i[1]
            }));
            r.push([t.i, "#stickyBottomBar{background-color:#fff;border:1px solid rgba(145,158,171,.239);border-top-left-radius:5px;border-top-right-radius:5px;bottom:0;box-shadow:0 -4px 20px -1px rgba(40,124,234,.15);display:flex;justify-content:space-between;left:50%;margin:auto;max-width:600px;padding:10px 10px 15px;position:fixed;transform:translateX(-50%);width:100%;z-index:11}#stickyBottomBar+.clear{padding-top:68px}#stickyBottomBar .btn-action{background-color:#d70018;border:0;border-radius:5px;color:#fff;cursor:pointer;height:40px;padding:5px 20px}#stickyBottomBar .btn-action.disabled{background-color:silver;color:#717171;cursor:not-allowed}#stickyBottomBar .price-temp p{color:#000}#stickyBottomBar .price-temp span{color:#d70018;font-weight:600}#stickyBottomBar a.go-back{background:var(--main-color);border-radius:5px;color:#fff;margin:auto;max-width:600px;padding:10px;text-align:center;width:100%}@media screen and (max-width:600px){#stickyBottomBar{border-top-left-radius:0;border-top-right-radius:0}#stickyBottomBar+.clear{padding-top:65px}#stickyBottomBar .btn-action{font-size:14px}}", ""]), r.locals = {}, t.exports = r
        },
        1059: function(t, e, o) {
            "use strict";
            o.r(e);
            var r = o(1),
                c = o(0),
                n = (o(18), o(30), o(114)),
                d = o(45);

            function l(t, e) {
                var o = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), o.push.apply(o, r)
                }
                return o
            }

            function y(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var o = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? l(Object(o), !0).forEach((function(e) {
                        Object(c.a)(t, e, o[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : l(Object(o)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
                    }))
                }
                return t
            }
            var h = {
                    name: "StickyBottomBar",
                    data: () => ({
                        Home_URL: "https://cellphones.com.vn/",
                        quantity: 0,
                        actionText: "Đặt ngay"
                    }),
                    mounted() {
                        this.quantity = 0, this.checkQuantity(), this.checkActionText()
                    },
                    computed: y(y(y(y(y({}, Object(d.e)("province", ["province"])), Object(d.e)("quote", ["quote"])), Object(d.e)("product", ["listProductInfo"])), Object(d.e)("abandonment", ["abandonment"])), Object(d.e)("super-cart", ["superCart", "subTotal", "checkedItems", "activeTabCartType", "uniquePromo", "productGroupByCartType", "cartTypeConst", "productStockStatusID"])),
                    methods: y(y({
                        formatMoney: n.e,
                        pushToGA: n.p
                    }, Object(d.b)("quote", ["createQuoteBySuperCart"])), {}, {
                        createQuote() {
                            var t = arguments,
                                e = this;
                            return Object(r.a)((function*() {
                                var o = t.length > 0 && void 0 !== t[0] ? t[0] : "",
                                    r = "",
                                    c = {};
                                switch (e.activeTabCartType) {
                                    case 1:
                                    case 6:
                                    case 9:
                                        r = "/payment-info";
                                        break;
                                    case 2:
                                        r = "/installment";
                                        break;
                                    case 3:
                                        r = "/pre-order"
                                }
                                var n = null;
                                2 === e.activeTabCartType ? (n = 2, e.productGroupByCartType[e.activeTabCartType].forEach((t => {
                                    t.item_id === e.checkedItems[e.activeTabCartType][0] && "home-credit" === o && (r = "/homecredit-installment", n = 1)
                                }))) : [e.cartTypeConst.normalType, e.cartTypeConst.dropshippingType].includes(e.activeTabCartType) && e.productGroupByCartType[e.activeTabCartType].forEach((t => {
                                    [e.productStockStatusID.inStockID, e.productStockStatusID.dropshippingID].includes(e.listProductInfo[t.item_id].filterable.stock_available_id) && e.listProductInfo[t.item_id].filterable.stock > 0 && (c[t.item_id] = t.item_quantity)
                                }));
                                try {
                                    var d, l = {
                                        itemIds: e.checkedItems[e.activeTabCartType],
                                        cartType: e.activeTabCartType,
                                        quantityItems: c,
                                        uniquePromo: e.uniquePromo,
                                        paymentMethod: o
                                    };
                                    n && (l.installmentType = n), yield e.createQuoteBySuperCart(l), null !== (d = e.quote) && void 0 !== d && d.ID && (yield e.$router.push(r))
                                } catch (t) {
                                    console.error(t)
                                }
                            }))()
                        },
                        checkActionText() {
                            switch (this.activeTabCartType) {
                                case 1:
                                    this.actionText = "Mua ngay";
                                    break;
                                case 2:
                                    this.actionText = "Trả góp";
                                    break;
                                case 3:
                                    this.actionText = "Đặt trước ngay";
                                    break;
                                case 6:
                                    this.actionText = "Đặt ngay"
                            }
                        },
                        checkQuantity() {
                            var t;
                            this.quantity = 0, null === (t = this.productGroupByCartType[this.activeTabCartType]) || void 0 === t || t.forEach((t => {
                                this.checkedItems[this.activeTabCartType].includes(t.item_id) && 46 === this.listProductInfo[t.item_id].filterable.stock_available_id && this.listProductInfo[t.item_id].filterable.stock > 0 && (this.quantity += t.item_quantity)
                            })), console.log(this.quantity)
                        }
                    }),
                    watch: {
                        subTotal: {
                            deep: !0,
                            handler() {
                                this.checkQuantity()
                            }
                        },
                        productGroupByCartType: {
                            deep: !0,
                            handler() {
                                this.checkQuantity()
                            }
                        },
                        activeTabCartType() {
                            this.checkActionText()
                        }
                    }
                },
                m = h,
                T = (o(1012), o(44)),
                component = Object(T.a)(m, (function() {
                    var t, e = this,
                        o = e._self._c;
                    return o("div", [o("div", {
                        attrs: {
                            id: "stickyBottomBar"
                        }
                    }, [null !== (t = e.superCart.cart_items) && void 0 !== t && t.length ? [o("div", {
                        staticClass: "price-temp"
                    }, [o("p", [e._v("Tạm tính")]), e._v(" "), o("span", [e._v(e._s(e.formatMoney(e.subTotal)) + "đ")])]), e._v(" "), 2 !== e.activeTabCartType ? [o("button", {
                        staticClass: "btn-action",
                        class: {
                            disabled: e.subTotal <= 0
                        },
                        attrs: {
                            disabled: e.subTotal <= 0
                        },
                        on: {
                            click: function(t) {
                                return e.createQuote()
                            }
                        }
                    }, [e._v("\n                    " + e._s(e.actionText) + "\n                    " + e._s(e.quantity > 0 ? "(".concat(e.quantity, ")") : "") + "\n                ")])] : o("div", {
                        staticClass: "d-flex",
                        staticStyle: {
                            gap: "10px"
                        }
                    }, [o("button", {
                        staticClass: "btn-action",
                        class: {
                            disabled: e.subTotal <= 0
                        },
                        attrs: {
                            disabled: e.subTotal <= 0
                        },
                        on: {
                            click: function(t) {
                                return e.createQuote("home-credit")
                            }
                        }
                    }, [e._v("\n                    Trả góp 0%\n                ")]), e._v(" "), o("button", {
                        staticClass: "btn-action",
                        class: {
                            disabled: e.subTotal <= 0
                        },
                        attrs: {
                            disabled: e.subTotal <= 0
                        },
                        on: {
                            click: function(t) {
                                return e.createQuote()
                            }
                        }
                    }, [e._v("\n                    Trả góp qua thẻ\n                ")])])] : o("a", {
                        staticClass: "go-back",
                        attrs: {
                            href: e.Home_URL
                        }
                    }, [e._v("Quay lại trang chủ")])], 2), e._v(" "), o("div", {
                        staticClass: "clear"
                    })])
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        900: function(t, e, o) {
            var content = o(1013);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(51).default)("10b1a1d1", content, !0, {
                sourceMap: !1
            })
        }
    }
]);