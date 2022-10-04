<template>
    <section class="products">
        <v-paralax class="products__paralax" />
        <h2 class="products__title">Popular dishes</h2>
        <div class="products__wrapper">
            <div class="products__wrap">
                <v-tabs 
                        :tabs-data="tabsList"
                        :active-tab="tabsList[0] || ''"
                        @update:activeTab="getActiveTab"
                />
            </div>
            <div class="products__wrap">
                <div class="products__box">
                    <template v-for="(product, index) in productData" :key="index">
                        <v-product v-if="index < counter" :product="product" @addToCart="addToCart" />
                    </template>
                </div>
            </div>
        </div>
        <button 
                v-if="isShowBtn"
                class="products__btn"
                type="button"
                aria-label="More products"
                @click="getMoreProducts"
        >
            <v-icon class="products__btn-icon" name="more" />
        </button>
        <v-cart 
                :cart="cart"
                @update:removeProduct="removeProduct"
        />
    </section>
</template>

<script>
import axios from 'axios';
import VTabs from '@/components/blocks/VTabs.vue';
import VCart from '@/components/blocks/VCart.vue';
import VProduct from '@/components/components/VProduct.vue';
import VIcon from '@/components/components/VIcon.vue';
import VParalax from "@/components/components/VParalax.vue";

export default {
    name: 'VProducts',

    components: {
        VTabs,
        VCart,
        VProduct,
        VIcon,
        VParalax
    },

    computed: {
        productData() {
            return this.products ? this.products[this.activeTab] : [];
        },

        format: {
            cache: false,
            get() {
                const width = window.innerWidth;

                return this.lgFormat ? width >= 577 && width <= 1291 : false;
            },
        },

        isNotXSFormat: {
            cache: false,
            get() {
                const width = window.innerWidth;

                return this.hideOnXs ? width >= 576 : true;
            },
        },

        count() {
            return this.lgFormat ? 6 : 8;
        },

        counter() {
            if (this.tabsList) {
                for (const key of this.tabsList) {
                    this.counterData[key] = this.hideOnXs ? this.products[key].length : 
                                            this.counterData[key] > 8 ? this.counterData[key] : this.count;
                }
            }

            return Object.keys(this.counterData)?.length ? this.counterData[this.activeTab] :  this.count;
        },

        isShowBtn() {
            return this.productData?.length ? (this.productData.length > this.counter) : false;
        },
    },

    data() {
        return {
            products: [],
            tabsList: [],
            activeTab: 0,
            counterData: {},
            hideOnXs: false,
            lgFormat: false,
            cart: []
        };
    },

    async beforeMount() {
        await axios.get('/productlist')
        .then(res => {
           this.products = res.data.products;
           this.tabsList = Object.keys(this.products);
        });

        this.getFormat();
        window.addEventListener('resize', this.getFormat);
        this.cart = JSON.parse(localStorage.getItem('cart')) || [];
    },

    destroyed() {
        window.removeEventListener('resize', this.getFormat);
    },

    methods: {
        getActiveTab(value) {
            this.activeTab = value;
        },

        getMoreProducts() {
            return this.counterData[this.activeTab] = this.counterData[this.activeTab] +  this.count;
        },

        getFormat() {
            const width = window.innerWidth;
            this.hideOnXs = width <= 575;
            this.lgFormat = width >= 577 && width <= 1291;
        },

        addLocalStorage(value) {
            localStorage.setItem('cart', JSON.stringify(value));
        },

        addToCart(value) {
            this.products[this.activeTab].reduce((obj, product) => {
                if (product.id === value) {
                    product.isInCart = true;
                    return this.cart.push(product);
                }
            }, {});

            this.addLocalStorage(this.cart);
        },

        removeProduct(value) {
            for (let key in this.products) {
                this.products[key].reduce((obj, product) => {
                    if (value ? product.id === value : true) {
                        product.isInCart = false;
                    }
                }, {});
            }

            this.cart = !value ? [] : this.cart.filter(product => product.id != value);
            this.addLocalStorage(this.cart);
        }
    }
};
</script>

<style scoped lang="scss">
.products {
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 140px;
    padding-bottom: 103px;
}

.products__wrapper {
    overflow: hidden;
}

.products__wrap {
    @include flex-helper(center);

    flex-direction: column;

    @include media(down, md) {
        align-items: flex-start;
        overflow-y: scroll;

        &::-webkit-scrollbar {
            width: 0;
        }
    }
}

.products__title {
    @include make-container();
    @include font(title, 700);

    padding-bottom: 49px;
    line-height: 59px;
    text-align: center;

    @include media(down, md) {
        @include font(subtitle, 700);

        padding-bottom: 30px;
        line-height: 1;
    }
}

.products__box {
    @include make-container();

    display: flex;
    padding-top: 50px;
    padding-bottom: 16px;

    @include media(up, sm) {
        display: grid;
        gap: 20px;
        grid-template-columns: repeat(2, 1fr);
    }

    @include media(up, lg) {
        grid-template-columns: repeat(3, 1fr);
    }

    @include media(up, xl) {
        gap: 21px 40px;
        grid-template-columns: repeat(4, 1fr);
    }
}

.products__btn {
    @include flex-helper(center);
    @include btn(btn, btn, btn);

    width: 60px;
    height: 60px;
    margin: 50px auto 0;
    padding: 18px 17px 17px 18px;
    overflow: hidden;

    &:hover .products__btn-icon {
        transform: rotate(180deg);
    }
}

.products__btn-icon {
    @include transition(transform);
    color: cl('white');
}

.products__paralax {
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background-image: url('@/assets/svg/point.svg'),
                      url('@/assets/svg/point.svg'),
                      url('@/assets/middle.svg');
    background-repeat: no-repeat;
    background-position: center, center, 50% 51%;
    transform: translate(-50%, -50%);
    z-index: -1;

    @media (min-width: 1920px) {
        background-position: center, center, 50% 51%;
    }
}
</style>
