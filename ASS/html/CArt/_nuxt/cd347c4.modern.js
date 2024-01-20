(window.webpackJsonp = window.webpackJsonp || []).push([
    [3], {
        853: function(o, t, e) {
            "use strict";
            e.r(t);
            e(52), e(18), e(30);
            var c = e(1),
                r = e(0),
                l = (e(6), e(26), e(7), e(871)),
                n = e(45),
                d = e(114);

            function m(o, t) {
                var e = Object.keys(o);
                if (Object.getOwnPropertySymbols) {
                    var c = Object.getOwnPropertySymbols(o);
                    t && (c = c.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(o, t).enumerable
                    }))), e.push.apply(e, c)
                }
                return e
            }

            function h(o) {
                for (var t = 1; t < arguments.length; t++) {
                    var e = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? m(Object(e), !0).forEach((function(t) {
                        Object(r.a)(o, t, e[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e)) : m(Object(e)).forEach((function(t) {
                        Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(e, t))
                    }))
                }
                return o
            }
            var v = {
                    name: "CrossSell",
                    components: {
                        Swiper: l.Swiper,
                        SwiperSlide: l.SwiperSlide,
                        ListProductSelect: () => Promise.resolve().then(e.bind(null, 1025))
                    },
                    props: {
                        idMainProduct: {
                            type: Number,
                            default: 0
                        },
                        priceMainProduct: {
                            type: Number,
                            default: 0
                        }
                    },
                    data: () => ({
                        btnLoading: {},
                        listCombo: [],
                        selectedColor: {},
                        selectedCategory: {},
                        options: {
                            slidesPerView: 2.5,
                            slidesPerGroup: 2,
                            spaceBetween: 10,
                            slidesPerColumn: 1,
                            slidesPerColumnFill: "row",
                            loop: !1,
                            navigation: {
                                nextEl: ".swiper-button-next",
                                prevEl: ".swiper-button-prev"
                            },
                            breakpoints: {
                                20: {
                                    slidesPerView: 2.3,
                                    spaceBetween: 10
                                },
                                717: {
                                    slidesPerView: 3.3,
                                    spaceBetween: 10
                                }
                            }
                        },
                        subTotalCombo: 0,
                        savePrice: 0,
                        listAddToCart: []
                    }),
                    computed: h(h(h(h(h({}, Object(n.e)("quote", ["quote"])), Object(n.e)("super-cart", ["checkedItems", "activeTabCartType", "superCart", "productGroupByCartType", "subTotal"])), Object(n.e)("province", ["province"])), Object(n.e)("cross-sell", ["listComboSelected", "productInfo", "dataCombo"])), Object(n.e)("product", ["isShowSelectModal", "selectedCateId", "componentSelected", "listProductInfo"])),
                    watch: {
                        isShowSelectModal: {
                            handler(o) {
                                if (!o && Object.values(this.componentSelected).length)
                                    for (var t of Object.values(this.componentSelected)) this.listComboSelected.includes(t.id) || this.toggleProductCombo({
                                        productId: t.id
                                    })
                            }
                        },
                        listComboSelected: {
                            deep: !0,
                            handler() {
                                this.calculateSubPrice()
                            }
                        },
                        superCart: {
                            deep: !0,
                            handler() {
                                this.mergeArrayCategoryProduct()
                            }
                        }
                    },
                    mounted() {
                        var o = this;
                        return Object(c.a)((function*() {
                            yield o.getListItemProduct(), o.mergeArrayCategoryProduct(), o.calculateSubPrice()
                        }))()
                    },
                    methods: h(h(h(h(h(h(h({
                        formatMoney: d.e,
                        lockScroll: d.m,
                        pushToGA: d.p
                    }, Object(n.d)("cross-sell", ["setProductInfo", "selectProduct", "removeProduct", "setSelectedComboCategory"])), Object(n.d)("product", ["ToggleBuildComponentSelectModal", "setProductCategoryCrossSell"])), Object(n.b)("json-server", ["getDataJsonServerGraphql"])), Object(n.b)("super-cart", ["addToSuperCart"])), Object(n.b)("quote", ["addToCartCombo"])), Object(n.b)("product", ["handleChangeShowModal", "deleteComponentSelectedItem"])), {}, {
                        getListItemProduct() {
                            var o = this;
                            return Object(c.a)((function*() {
                                if (0 === Object.keys(o.productInfo).length) {
                                    var t, e = [];
                                    if (null === (t = o.dataCombo[o.idMainProduct]) || void 0 === t || t.forEach((o => {
                                            "product" === o.sub_type && e.push(o.sub_id)
                                        })), e.length > 0) {
                                        var c = o.$cookies.get("cps_province_id") || o.province.id,
                                            r = "\n                    query products{\n                        products(\n                            filter: {\n                                static: {\n                                  province_id: ".concat(c, ",\n                                  product_id: ").concat('["' + e.join('","') + '"]', ',\n                                  is_parent: ["false","true"],\n                                  stock_available_id: [46]\n                               }\n                            },\n                        ){\n                            filterable{\n                              name\n                              price\n                              thumbnail\n                              parent_id\n                              product_id\n                              special_price\n                              stock_available_id\n                            },\n                        }\n                      }'),
                                            l = "".concat("https://api.cellphones.com.vn/").concat("v2", "/graphql/query"),
                                            n = JSON.stringify({
                                                query: r,
                                                variables: {}
                                            });
                                        try {
                                            var d = yield o.$axios.post(l, n, {
                                                headers: {
                                                    Accept: "application/json",
                                                    "Content-Type": "application/json"
                                                }
                                            });
                                            if (d) d.data.data.products.forEach((t => {
                                                o.setProductInfo({
                                                    productInfo: t,
                                                    parentId: t.filterable.parent_id,
                                                    productId: t.filterable.product_id
                                                })
                                            }))
                                        } catch (o) {
                                            console.error("Lỗi Graphql!!! Check")
                                        }
                                    }
                                }
                            }))()
                        },
                        printPriceCombo(o) {
                            var {
                                item: t,
                                percent: e,
                                maxValue: c,
                                isNormal: r
                            } = o, l = this.calculatePriceCombo({
                                price: r ? t.price : t.special_price || t.specialPrice || t.price,
                                percent: e,
                                maxValue: c
                            });
                            return this.formatMoney(l)
                        },
                        calculatePriceCombo(o) {
                            var {
                                price: t,
                                percent: e,
                                maxValue: c
                            } = o, r = 0 !== e ? t * (e / 100) : t;
                            return (r = 1e3 * Math.round(r / 1e3)) > c && 0 !== c && (r = c), t - r
                        },
                        mergeArrayCategoryProduct() {
                            if (this.listCombo = [], this.dataCombo[this.idMainProduct]) {
                                var o = [];
                                JSON.parse(JSON.stringify(this.dataCombo[this.idMainProduct] || [])).forEach((t => {
                                    "category" !== t.sub_type || this.checkCrossSellCateWasInQuote(t.id) ? !o.includes(t.sub_parent_id) && this.productInfo[t.sub_parent_id] && (this.$set(this.selectedColor, t.sub_parent_id, this.productInfo[t.sub_parent_id][Object.keys(this.productInfo[t.sub_parent_id])[0]].filterable), this.listCombo.push(t), o.push(t.sub_parent_id)) : this.listCombo.push(t)
                                }))
                            }
                        },
                        selecteColor(o) {
                            var {
                                parentId: t,
                                itemProduct: e
                            } = o;
                            this.$set(this.selectedColor, t, {}), this.$set(this.selectedColor, t, e.filterable)
                        },
                        selecteCategory(o) {
                            var t = this;
                            return Object(c.a)((function*() {
                                t.selectedCategory = o, t.setSelectedComboCategory(o), yield t.handleChangeShowModal({
                                    type: "select",
                                    cateId: ["".concat(o.sub_id)],
                                    cateName: o.name
                                }), t.$refs.modalProductList.show(), t.lockScroll(!0)
                            }))()
                        },
                        toggleProductCombo(o) {
                            var t = this;
                            return Object(c.a)((function*() {
                                var {
                                    productId: e,
                                    isCate: c = !1,
                                    cateId: r = 0
                                } = o;
                                t.listComboSelected.includes(e) ? (yield t.removeProduct(e), t.listAddToCart.forEach(((o, c) => {
                                    o.item_id === e && t.listAddToCart.splice(c, 1)
                                }))) : yield t.selectProduct(e), c && (yield t.deleteComponentSelectedItem(r))
                            }))()
                        },
                        calculateSubPrice() {
                            var o;
                            this.subTotalCombo = 0;
                            var t = 0;
                            this.listAddToCart = [], null === (o = this.dataCombo[this.idMainProduct]) || void 0 === o || o.forEach((o => {
                                var e, c, r, l = 0;
                                if (this.listComboSelected.includes(o.sub_id) && "product" === o.sub_type && this.checkShowItemCrossSell(o.sub_id)) l = null === (r = this.selectedColor[o.sub_parent_id]) || void 0 === r ? void 0 : r.price, this.listAddToCart.push({
                                    item_id: o.sub_id,
                                    item_quantity: 1,
                                    combo_item_id: o.id,
                                    main_product_id: this.idMainProduct
                                });
                                else if (this.listComboSelected.includes(null === (e = this.componentSelected["".concat(o.sub_id)]) || void 0 === e ? void 0 : e.id) && "category" === o.sub_type && this.checkShowItemCrossSell(null === (c = this.componentSelected["".concat(o.sub_id)]) || void 0 === c ? void 0 : c.id)) {
                                    var n, d;
                                    l = null === (n = this.componentSelected["".concat(o.sub_id)]) || void 0 === n ? void 0 : n.price, this.listAddToCart.push({
                                        item_id: null === (d = this.componentSelected["".concat(o.sub_id)]) || void 0 === d ? void 0 : d.id,
                                        item_quantity: 1,
                                        combo_item_id: o.id,
                                        main_product_id: this.idMainProduct
                                    })
                                }
                                this.subTotalCombo += this.calculatePriceCombo({
                                    price: l,
                                    percent: o.discount_percent,
                                    maxValue: o.max_value
                                }), t += l
                            })), this.subTotalCombo += this.priceMainProduct, this.savePrice = t + this.priceMainProduct - this.subTotalCombo
                        },
                        addToCartListCombo() {
                            var o = this;
                            return Object(c.a)((function*() {
                                var t = {
                                    item_id: o.idMainProduct,
                                    item_quantity: 0
                                };
                                o.listAddToCart.forEach(((t, e) => {
                                    o.$set(t, "main_product_id", o.idMainProduct)
                                })), o.listAddToCart.length > 0 && (yield o.addToCartCombo({
                                    mainProduct: t,
                                    listSubProduct: o.listAddToCart
                                })), o.mergeArrayCategoryProduct(), o.listAddToCart = []
                            }))()
                        },
                        checkShowItemCrossSell(o) {
                            var t = !0;
                            return this.productGroupByCartType[this.activeTabCartType].forEach((e => {
                                e.item_id === o && (t = !1)
                            })), t
                        },
                        checkCrossSellCateWasInQuote(o) {
                            var t, e = !1;
                            return null === (t = this.superCart) || void 0 === t || null === (t = t.cart_items) || void 0 === t || t.forEach((t => {
                                t.combo_item_id === o && (e = !0)
                            })), e
                        },
                        hideModal() {
                            this.handleChangeShowModal({
                                type: "select"
                            }), this.setProductCategoryCrossSell(0)
                        },
                        addToSuperCartCombo(o) {
                            var t = this;
                            return Object(c.a)((function*() {
                                var {
                                    itemCombo: e,
                                    selectedColorId: c
                                } = o;
                                yield t.addToSuperCart({
                                    productItem: {
                                        itemId: c,
                                        comboItemId: e.id,
                                        mainProductId: t.idMainProduct
                                    },
                                    cartType: "combo"
                                }), t.pushToGA({
                                    step: "combo_cart",
                                    cart_type: "mua_ngay",
                                    event: "add_to_cart",
                                    data: t.listProductInfo,
                                    dataType: "cart",
                                    province: t.province,
                                    grand_total: t.subTotal
                                })
                            }))()
                        }
                    })
                },
                C = (e(956), e(44)),
                component = Object(C.a)(v, (function() {
                    var o, t = this,
                        e = t._self._c;
                    return e("div", {
                        attrs: {
                            id: "crossSellBlock"
                        }
                    }, [t.listCombo.length ? e("swiper", {
                        staticClass: "list-combo",
                        attrs: {
                            options: t.options
                        },
                        scopedSlots: t._u([{
                            key: "button-next",
                            fn: function() {
                                return [e("div", {
                                    staticClass: "swiper-button-next"
                                })]
                            },
                            proxy: !0
                        }, {
                            key: "button-prev",
                            fn: function() {
                                return [e("div", {
                                    staticClass: "swiper-button-prev"
                                })]
                            },
                            proxy: !0
                        }], null, !1, 2048286921)
                    }, t._l(t.listCombo, (function(o) {
                        var c, r, l, n, d, m;
                        return e("swiper-slide", {
                            key: o.sub_id,
                            staticClass: "combo-item"
                        }, ["category" === o.sub_type ? e("div", {
                            staticClass: "combo-category"
                        }, [t.componentSelected && t.componentSelected["".concat(o.sub_id)] ? e("div", {
                            staticClass: "combo-product combo-item-wrapper"
                        }, [e("div", {
                            staticClass: "box-info-top"
                        }, [e("div", {
                            staticClass: "combo-item-img"
                        }, [e("nuxt-img", {
                            attrs: {
                                provider: "CPS_IMG_PROVIDER",
                                format: "webp",
                                width: "358",
                                quality: "80",
                                src: "https://cdn2.cellphones.com.vn/358x/media/catalog/product".concat(t.componentSelected["".concat(o.sub_id)].image)
                            }
                        })], 1), t._v(" "), e("div", {
                            staticClass: "text-left"
                        }, [e("p", {
                            staticClass: "combo-item-name"
                        }, [t._v("\n                " + t._s(t.componentSelected["".concat(o.sub_id)].name) + "\n              ")]), t._v(" "), e("p", {
                            staticClass: "text-price"
                        }, [e("del", [t._v("\n                  " + t._s(t.formatMoney(null === (c = t.componentSelected["".concat(o.sub_id)]) || void 0 === c ? void 0 : c.price)) + "\n                ")])]), t._v(" "), e("p", {
                            staticClass: "text-cross-sell"
                        }, [t._v("\n                Giá mua kèm:\n                " + t._s(t.printPriceCombo({
                            item: t.componentSelected["".concat(o.sub_id)],
                            maxValue: o.max_value,
                            percent: o.discount_percent,
                            isNormal: o.apply_normal_price
                        })) + "đ\n              ")])])]), t._v(" "), e("div", {
                            staticClass: "btn-group-cate-type"
                        }, [e("button", {
                            staticClass: "btn-remove",
                            on: {
                                click: function(e) {
                                    return t.toggleProductCombo({
                                        productId: t.componentSelected["".concat(o.sub_id)].id,
                                        isCate: !0,
                                        cateId: o.sub_id
                                    })
                                }
                            }
                        }, [e("font-awesome-icon", {
                            staticClass: "icon",
                            attrs: {
                                icon: "times"
                            }
                        })], 1), t._v(" "), e("button", {
                            staticClass: "button btn-select btn-primary",
                            on: {
                                click: function(e) {
                                    t.toggleProductCombo({
                                        productId: t.componentSelected["".concat(o.sub_id)].id,
                                        isCate: !0,
                                        cateId: o.sub_id
                                    }), t.selecteCategory(o)
                                }
                            }
                        }, [t._v("\n              Sản phẩm khác\n            ")])]), t._v(" "), e("div", {
                            staticClass: "icon icon-check text-success"
                        }, [e("font-awesome-icon", {
                            attrs: {
                                icon: "check-circle"
                            }
                        })], 1)]) : e("div", {
                            staticClass: "combo-item-wrapper"
                        }, [e("div", {
                            staticClass: "box-info-top"
                        }, [e("div", {
                            staticClass: "combo-item-img"
                        }, [e("nuxt-img", {
                            attrs: {
                                provider: "CPS_IMG_PROVIDER",
                                format: "webp",
                                width: "358",
                                quality: "80",
                                placeholder: "https://cdn2.cellphones.com.vn/100x/media/wysiwyg/placehoder.png",
                                src: "".concat(o.thumbnail || "https://cdn2.cellphones.com.vn/100x/media/wysiwyg/placehoder.png")
                            }
                        })], 1), t._v(" "), e("p", {
                            staticClass: "combo-item-name"
                        }, [t._v(t._s(o.name))]), t._v(" "), o.discount_percent ? e("p", {
                            staticClass: "text-percent"
                        }, [t._v("\n              Giảm thêm " + t._s(o.discount_percent) + "%\n            ")]) : t._e()]), t._v(" "), e("button", {
                            staticClass: "button btn-select",
                            on: {
                                click: function(e) {
                                    return t.selecteCategory(o)
                                }
                            }
                        }, [t._v("\n            Chọn sản phẩm\n          ")])])]) : e("div", {
                            staticClass: "combo-product combo-item-wrapper"
                        }, [e("div", {
                            staticClass: "box-info-top"
                        }, [e("div", {
                            staticClass: "combo-item-img"
                        }, [e("nuxt-img", {
                            attrs: {
                                provider: "CPS_IMG_PROVIDER",
                                format: "webp",
                                width: "358",
                                quality: "80",
                                placeholder: "https://cdn2.cellphones.com.vn/100x/media/wysiwyg/placehoder.png",
                                src: "https://cdn2.cellphones.com.vn/358x/media/catalog/product".concat(null === (r = t.selectedColor[o.sub_parent_id]) || void 0 === r ? void 0 : r.thumbnail)
                            }
                        })], 1), t._v(" "), e("div", {
                            staticClass: "text-left"
                        }, [e("p", {
                            staticClass: "combo-item-name"
                        }, [t._v("\n              " + t._s(null === (l = t.selectedColor[o.sub_parent_id]) || void 0 === l ? void 0 : l.name) + "\n            ")]), t._v(" "), e("p", {
                            staticClass: "text-price"
                        }, [e("del", [t._v("\n                " + t._s(t.formatMoney(null === (n = t.selectedColor[o.sub_parent_id]) || void 0 === n ? void 0 : n.price)) + "đ\n              ")])]), t._v(" "), e("p", {
                            staticClass: "text-cross-sell"
                        }, [t._v("\n              " + t._s(t.printPriceCombo({
                            item: t.selectedColor[o.sub_parent_id],
                            maxValue: o.max_value,
                            percent: o.discount_percent,
                            isNormal: o.apply_normal_price
                        })) + "đ\n            ")])]), t._v(" "), e("div", {
                            staticClass: "box-select-color"
                        }, [t._l(t.productInfo[o.sub_parent_id], (function(c, r, l) {
                            var n, d, m, h;
                            return [e("div", {
                                directives: [{
                                    name: "show",
                                    rawName: "v-show",
                                    value: (null === (n = c.filterable) || void 0 === n ? void 0 : n.parent_id) !== parseInt(r),
                                    expression: "\n                  itemProduct.filterable?.parent_id !== parseInt(idProduct)\n                "
                                }],
                                key: "".concat(r, "-").concat(l),
                                staticClass: "color-wrapper"
                            }, [e("nuxt-img", {
                                staticClass: "color-item button__select-color",
                                class: {
                                    active: (null === (d = t.selectedColor[o.sub_parent_id]) || void 0 === d ? void 0 : d.product_id) === parseInt(r), checked: t.listComboSelected.includes(null === (m = t.selectedColor[o.sub_parent_id]) || void 0 === m ? void 0 : m.product_id)
                                },
                                attrs: {
                                    "data-index": "".concat(r, "-").concat(l),
                                    width: "25",
                                    quality: "80",
                                    provider: "CPS_IMG_PROVIDER",
                                    format: "webp",
                                    placeholder: "https://cdn2.cellphones.com.vn/30x30,webp,q10/media/wysiwyg/placehoder.png",
                                    src: "https://cdn2.cellphones.com.vn/358x/media/catalog/product".concat(null == c || null === (h = c.filterable) || void 0 === h ? void 0 : h.thumbnail)
                                },
                                on: {
                                    click: function(o) {
                                        var e;
                                        return t.selecteColor({
                                            parentId: null === (e = c.filterable) || void 0 === e ? void 0 : e.parent_id,
                                            itemProduct: c
                                        })
                                    }
                                }
                            }), t._v(" "), e("div", {
                                directives: [{
                                    name: "show",
                                    rawName: "v-show",
                                    value: t.listComboSelected.includes(parseInt(r)) || !t.checkShowItemCrossSell(parseInt(r)),
                                    expression: "\n                    listComboSelected.includes(parseInt(idProduct)) ||\n                    !checkShowItemCrossSell(parseInt(idProduct))\n                  "
                                }],
                                staticClass: "icon icon-check-color text-success"
                            }, [e("font-awesome-icon", {
                                attrs: {
                                    icon: "check-circle"
                                }
                            })], 1)], 1)]
                        }))], 2)]), t._v(" "), t.checkShowItemCrossSell(null === (d = t.selectedColor[o.sub_parent_id]) || void 0 === d ? void 0 : d.product_id) ? e("button", {
                            staticClass: "button btn-select button__handle-select",
                            on: {
                                click: function(e) {
                                    return t.addToSuperCartCombo({
                                        itemCombo: o,
                                        selectedColorId: t.selectedColor[o.sub_parent_id].product_id
                                    })
                                }
                            }
                        }, [t._v("\n          Mua kèm\n        ")]) : t._e(), t._v(" "), e("div", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: t.listComboSelected.includes(null === (m = t.selectedColor[o.sub_parent_id]) || void 0 === m ? void 0 : m.product_id),
                                expression: "\n            listComboSelected.includes(\n              selectedColor[item.sub_parent_id]?.product_id\n            )\n          "
                            }],
                            staticClass: "icon icon-check text-success"
                        }, [e("font-awesome-icon", {
                            attrs: {
                                icon: "check-circle"
                            }
                        })], 1)])])
                    })), 1) : t._e(), t._v(" "), t.listComboSelected.length > 0 && t.savePrice > 0 && t.listAddToCart.length > 0 ? e("div", {
                        attrs: {
                            id: "callToAction"
                        }
                    }, [e("div", {
                        staticClass: "button"
                    }, [e("button", {
                        staticClass: "btn button__add-child btn-danger justify-content-center align-items-center",
                        attrs: {
                            id: "buyNow"
                        },
                        on: {
                            click: function(o) {
                                return t.addToCartListCombo("buy_now")
                            }
                        }
                    }, [e("svg", {
                        attrs: {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [e("path", {
                        attrs: {
                            d: "M2 2V2C2.81454 2 3.50205 2.60558 3.60486 3.4136L3.9 5.73333L5.08557 14.275C5.22282 15.2638 6.06825 16 7.06658 16L18.2344 16C19.2431 16 20.0939 15.2489 20.219 14.2481L20.5 12L21 8",
                            stroke: "#121219",
                            "stroke-width": "1.5"
                        }
                    }), t._v(" "), e("path", {
                        attrs: {
                            d: "M9 20.5C9 19.6716 8.32843 19 7.5 19C6.67157 19 6 19.6716 6 20.5C6 21.3284 6.67157 22 7.5 22C8.32843 22 9 21.3284 9 20.5Z",
                            stroke: "#121219",
                            "stroke-width": "1.5"
                        }
                    }), t._v(" "), e("path", {
                        attrs: {
                            d: "M19 20.5C19 19.6716 18.3284 19 17.5 19C16.6716 19 16 19.6716 16 20.5C16 21.3284 16.6716 22 17.5 22C18.3284 22 19 21.3284 19 20.5Z",
                            stroke: "#121219",
                            "stroke-width": "1.5"
                        }
                    }), t._v(" "), e("path", {
                        attrs: {
                            d: "M15.4571 8H9.80026",
                            stroke: "#121219",
                            "stroke-width": "1.5",
                            "stroke-linecap": "round"
                        }
                    }), t._v(" "), e("path", {
                        attrs: {
                            d: "M12.6287 5.17157V10.8284",
                            stroke: "#121219",
                            "stroke-width": "1.5",
                            "stroke-linecap": "round"
                        }
                    })]), t._v(" "), e("span", [t._v("Thêm")])])])]) : t._e(), t._v(" "), e("b-modal", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: "" !== t.selectedCategory.name,
                            expression: "selectedCategory.name !== ''"
                        }],
                        ref: "modalProductList",
                        attrs: {
                            id: "modalProductList",
                            size: "xl",
                            title: t.selectedCategory.name,
                            scrollable: "",
                            "hide-footer": ""
                        },
                        on: {
                            hidden: function(o) {
                                return t.hideModal()
                            }
                        }
                    }, [t.isShowSelectModal && (null === (o = Object.keys(t.selectedCategory)) || void 0 === o ? void 0 : o.length) > 0 ? e("ListProductSelect", {
                        attrs: {
                            "item-combo": t.selectedCategory,
                            "component-item": {
                                name: t.selectedCategory.name
                            },
                            "list-cate-id": ["".concat(t.selectedCategory.sub_id)],
                            "popup-type": "comboSelection",
                            "max-value": t.selectedCategory.max_value,
                            "id-main-product": t.idMainProduct,
                            "apply-normal-price": t.selectedCategory.apply_normal_price,
                            "discount-percent": t.selectedCategory.discount_percent
                        }
                    }) : t._e()], 1)], 1)
                }), [], !1, null, null, null);
            t.default = component.exports;
            installComponents(component, {
                ListProductSelect: e(1025).default
            })
        },
        872: function(o, t, e) {
            var content = e(957);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [o.i, content, ""]
            ]), content.locals && (o.exports = content.locals);
            (0, e(51).default)("b74b6176", content, !0, {
                sourceMap: !1
            })
        },
        956: function(o, t, e) {
            "use strict";
            e(872)
        },
        957: function(o, t, e) {
            var c = e(50)((function(i) {
                return i[1]
            }));
            c.push([o.i, "#crossSellBlock{align-items:center;display:flex;flex-flow:column;position:relative}#crossSellBlock .list-combo{width:100%}#crossSellBlock .list-combo .combo-item{background-color:#fff;border:1px solid rgba(145,158,171,.239);border-radius:8px;height:auto;overflow:hidden}#crossSellBlock .list-combo .combo-item .combo-category,#crossSellBlock .list-combo .combo-item .combo-product{height:100%}#crossSellBlock .list-combo .combo-item .combo-category .combo-item-wrapper .box-info-top .combo-item-name{font-size:1rem}#crossSellBlock .list-combo .combo-item .combo-item-wrapper{display:flex;flex-flow:column;height:100%;justify-content:space-between;padding:10px;position:relative;text-align:center}#crossSellBlock .list-combo .combo-item .combo-item-wrapper .box-info-top{margin-bottom:10px}#crossSellBlock .list-combo .combo-item .combo-item-wrapper .box-info-top .combo-item-img{padding:0}#crossSellBlock .list-combo .combo-item .combo-item-wrapper .box-info-top .combo-item-img img{margin:auto;min-height:80px;width:50%}#crossSellBlock .list-combo .combo-item .combo-item-wrapper .box-info-top .combo-item-name{font-size:.8rem;margin-bottom:5px;-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}#crossSellBlock .list-combo .combo-item .combo-item-wrapper .box-info-top .text-cross-sell,#crossSellBlock .list-combo .combo-item .combo-item-wrapper .box-info-top .text-price{color:gray;font-size:13px;font-weight:500;padding:2px 0}#crossSellBlock .list-combo .combo-item .combo-item-wrapper .box-info-top .text-cross-sell{color:#d70018;font-size:14px}#crossSellBlock .list-combo .combo-item .combo-item-wrapper .box-info-top .text-percent{color:#d70018;font-size:1.1rem;font-weight:500;margin-bottom:5px}#crossSellBlock .list-combo .combo-item .combo-item-wrapper .box-info-top .box-select-color{display:flex;padding:5px 0 0}#crossSellBlock .list-combo .combo-item .combo-item-wrapper .box-info-top .box-select-color .color-wrapper{position:relative}#crossSellBlock .list-combo .combo-item .combo-item-wrapper .box-info-top .box-select-color .color-wrapper .color-item{border-radius:50%;box-shadow:0 0 1px 1px #b8b8b8,0 0 1px .1px #c6c6c6;cursor:pointer;margin-right:5px;padding:5px}#crossSellBlock .list-combo .combo-item .combo-item-wrapper .box-info-top .box-select-color .color-wrapper .color-item.active{box-shadow:0 0 1px 1px #e85555,0 0 1px .1px #b00}#crossSellBlock .list-combo .combo-item .combo-item-wrapper .box-info-top .box-select-color .color-wrapper .icon-check-color{position:absolute;right:0;top:-10px}#crossSellBlock .list-combo .combo-item .combo-item-wrapper .box-info-top .box-select-color .color-wrapper .icon-check-color svg{height:10px;width:10px}#crossSellBlock .list-combo .combo-item .combo-item-wrapper .btn-select:not(.btn-primary){background-color:#d70018}#crossSellBlock .list-combo .combo-item .combo-item-wrapper .btn-select:not(.btn-primary):hover{background-color:rgba(210,1,26,.8)}#crossSellBlock .list-combo .combo-item .combo-item-wrapper .btn-remove,#crossSellBlock .list-combo .combo-item .combo-item-wrapper .btn-select{border:0;border-radius:5px;color:#fff;display:block;font-size:.8rem;font-weight:500;height:30px}#crossSellBlock .list-combo .combo-item .combo-item-wrapper .btn-group-cate-type{display:flex}#crossSellBlock .list-combo .combo-item .combo-item-wrapper .btn-group-cate-type .btn-select{width:calc(100% - 35px)}#crossSellBlock .list-combo .combo-item .combo-item-wrapper .btn-group-cate-type .btn-remove{align-items:center;background-color:transparent;border:1px solid #d02c35;border-radius:50%;display:flex;justify-content:center;margin-right:5px;padding:2px;width:30px}#crossSellBlock .list-combo .combo-item .combo-item-wrapper .btn-group-cate-type .btn-remove svg.icon{height:18px;width:18px}#crossSellBlock .list-combo .combo-item .combo-item-wrapper .btn-group-cate-type .btn-remove svg.icon path{fill:#d02c35}#crossSellBlock .list-combo .combo-item .combo-item-wrapper .icon-check{position:absolute;right:5px;top:5px}#crossSellBlock .list-combo .combo-item .combo-item-wrapper .icon-check svg{height:30px;width:30px}#crossSellBlock .list-combo .swiper-button-next.swiper-button-disabled,#crossSellBlock .list-combo .swiper-button-prev.swiper-button-disabled{display:none}#crossSellBlock .list-combo .swiper-button-prev{left:0}#crossSellBlock .list-combo .swiper-button-next{right:0}#crossSellBlock .list-combo .swiper-button-next,#crossSellBlock .list-combo .swiper-button-prev{background-color:#fff;border-radius:100px 0 0 100px;box-shadow:0 10px 36px 0 rgba(0,0,0,.16),0 0 0 1px rgba(0,0,0,.06);color:#3c3d41}#crossSellBlock .list-combo .swiper-button-next:after,#crossSellBlock .list-combo .swiper-button-prev:after{font-size:1.5rem;transform:translateX(30%)}#crossSellBlock .list-combo .swiper-button-prev{border-radius:0 100px 100px 0}#crossSellBlock .list-combo .swiper-button-prev:after{transform:translateX(-30%)}#crossSellBlock #callToAction{position:absolute;right:0;top:-35px}#crossSellBlock #callToAction span,#crossSellBlock #callToAction strong{display:inline-block}#crossSellBlock #callToAction span.total-price{color:#d02c35;font-weight:600;margin-bottom:5px}#crossSellBlock #callToAction button#buyNow{animation:zoom-in-zoom-out 1s ease infinite;background-color:#d2011a;border-radius:50px;color:#fff;display:flex;height:30px}#crossSellBlock #callToAction button#buyNow svg{margin-right:5px}#crossSellBlock #callToAction button#buyNow svg path{stroke:#fff}#crossSellBlock #callToAction button#buyNow:hover:not(:disabled){background-color:rgba(210,1,26,.8)}#crossSellBlock #callToAction button#buyNow span{font-size:1rem}@media screen and (max-width:767px){#crossSellBlock{width:100%}#crossSellBlock .list-combo{margin-left:-10px;margin-right:-10px;width:100%}#crossSellBlock .list-combo .combo-item .combo-item-wrapper .box-info-top .combo-item-img img{min-height:0}#crossSellBlock #callToAction{margin:0}#crossSellBlock #callToAction button#buyNow{padding:0 10px}#crossSellBlock #callToAction button#buyNow span{font-size:13px}#crossSellBlock #callToAction span,#crossSellBlock #callToAction strong{display:inline-block}}@keyframes zoom-in-zoom-out{0%{transform:scale(1)}50%{transform:scale(1.1)}to{transform:scale(1)}}", ""]), c.locals = {}, o.exports = c
        }
    }
]);