(window.webpackJsonp = window.webpackJsonp || []).push([
    [34], {
        1022: function(e, t, o) {
            "use strict";
            o.r(t);
            o(18);
            var r = o(114),
                c = {
                    name: "BoxPrice",
                    components: {
                        RenderHtml: o(427).a
                    },
                    props: {
                        price: {
                            type: Number,
                            default: 0
                        },
                        specialPrice: {
                            type: Number,
                            default: 0
                        },
                        hcInstall: {
                            type: Boolean,
                            default: !1
                        },
                        warrantyOldProduct: {
                            type: String,
                            default: ""
                        },
                        isShowDiscountPercent: {
                            type: Boolean,
                            default: !1
                        },
                        isOld: {
                            type: Boolean,
                            default: !1
                        },
                        isHidePrice: {
                            type: Object,
                            default: () => ({
                                status: !1,
                                letters: 0
                            })
                        },
                        stockAvailable: {
                            type: Number,
                            default: 46
                        },
                        titlePrice: {
                            type: String,
                            default: ""
                        }
                    },
                    computed: {
                        warranty() {
                            return ["cũ đẹp", "trầy xước", "xước cấn", "đổi bảo hành"].includes(this.warrantyOldProduct.toLowerCase()) ? '<div class="old-product-warranty-tag p-1">Bảo hành 6 tháng</div>\n                <div class="old-product-warranty-tag p-1">Đổi trả 30 ngày</div>' : ["đã kích hoạt", "hàng trưng bày"].includes(this.warrantyOldProduct.toLowerCase()) ? '<div class="old-product-warranty-tag p-1">Bảo hành 12 tháng</div>\n                <div class="old-product-warranty-tag p-1">Đổi trả 30 ngày</div>' : ""
                        }
                    },
                    methods: {
                        formatMoney: r.e,
                        productPercentSale: r.n,
                        getShowPrice: r.h,
                        hidePrice: r.k
                    }
                },
                n = (o(847), o(44)),
                component = Object(n.a)(c, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", {
                        staticClass: "block-box-price"
                    }, [e.hcInstall ? t("div", {
                        staticClass: "box-info__installment"
                    }, [e._v("Trả góp 0%")]) : e._e(), e._v(" "), e.warrantyOldProduct ? t("RenderHtml", {
                        staticClass: "is-flex mb-3 box-old-product-warranty",
                        attrs: {
                            html: e.warranty
                        }
                    }) : e._e(), e._v(" "), t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: 56 === e.stockAvailable,
                            expression: "stockAvailable === 56"
                        }],
                        staticClass: "title-price"
                    }, [e._v("\n    " + e._s(e.titlePrice) + ":\n  ")]), e._v(" "), t("div", {
                        staticClass: "box-info__box-price"
                    }, [e.getShowPrice(e.price, e.specialPrice) > 0 ? t("p", {
                        staticClass: "product__price--show"
                    }, [e._v("\n      " + e._s(e.isHidePrice.status ? e.hidePrice(e.formatMoney(e.getShowPrice(e.price, e.specialPrice)), e.isHidePrice.letters) : e.formatMoney(e.getShowPrice(e.price, e.specialPrice))) + "đ\n    ")]) : t("p", {
                        staticClass: "product__price--show"
                    }, [e._v("Giá Liên Hệ")]), e._v(" "), e.specialPrice !== e.price && e.specialPrice > 0 && e.price ? [e.isOld ? e._e() : t("p", {
                        staticClass: "product__price--through"
                    }, [e._v("\n        " + e._s(e.formatMoney(e.price)) + "đ\n      ")]), e._v(" "), e.isShowDiscountPercent ? t("div", {
                        staticClass: "product__price--percent"
                    }, [t("p", {
                        staticClass: "product__price--percent-detail"
                    }, [e._v("\n          Giảm " + e._s(e.productPercentSale(e.price, e.specialPrice)) + "%\n        ")])]) : e._e()] : e._e()], 2)], 1)
                }), [], !1, null, null, null);
            t.default = component.exports
        },
        744: function(e, t, o) {
            var content = o(848);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, o(51).default)("b42d29bc", content, !0, {
                sourceMap: !1
            })
        },
        847: function(e, t, o) {
            "use strict";
            o(744)
        },
        848: function(e, t, o) {
            var r = o(50)((function(i) {
                return i[1]
            }));
            r.push([e.i, ".block-box-price .box-info__installment{background-color:#fef2f2;border:1px solid #d70018;border-radius:5px;color:#d70018;font-size:12px;margin-bottom:10px!important;padding:4px 5px;width:-moz-fit-content;width:fit-content}.block-box-price .box-old-product-warranty{gap:10px}.block-box-price .box-old-product-warranty .old-product-warranty-tag{border:1px solid #d1d5db;border-radius:5px;font-size:12px}.block-box-price .box-info__box-price{align-items:flex-end;display:flex;flex-wrap:wrap;gap:8px}.block-box-price .box-info__box-price .product__price--show{color:#d70018;display:inline-block;font-size:17px;font-weight:500;line-height:1}.block-box-price .box-info__box-price .product__price--through{color:#707070;display:inline-block;font-size:14px;font-weight:500;position:relative;-webkit-text-decoration:line-through;text-decoration:line-through;top:2px}.block-box-price .box-info__box-price .product__price--percent{background-color:#d70018;border-radius:3px;height:26px;width:80px}.block-box-price .box-info__box-price .product__price--percent p{color:#fff;font-size:12px;font-weight:500;text-align:center;width:100%}@media only screen and (max-width:600px){.block-box-price{margin-top:0}.block-box-price .box-info__installment{margin-bottom:5px!important}.block-box-price .box-info__box-price{align-items:flex-end;display:flex;flex-wrap:wrap}.block-box-price .box-info__box-price .product__price--show{font-size:16px;font-weight:600;margin-bottom:0;margin-right:5px}.block-box-price .box-info__box-price .product__price--through{font-size:12px;margin:0}.block-box-price .box-info__box-price .product__price--percent{height:25px;width:70px}.block-box-price .box-info__box-price .product__price--percent-detail{font-size:9px;line-height:1.5}}", ""]), r.locals = {}, e.exports = r
        }
    }
]);