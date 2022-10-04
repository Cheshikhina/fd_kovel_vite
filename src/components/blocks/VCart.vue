<template>
    <div :class="['cart', { 'cart--open': (isNotEmptyCart && isOpen) }]" >
        <div class="cart__overlay" aria-hidden="true" @click="this.isOpen = false" />
        <button 
                class="cart__main-btn"
                type="button"
                @click="this.isOpen = this.isNotEmptyCart && true"
        >
            <v-icon class="cart__icon" name="cart" />
            <span class="cart__icon-text" v-if="isNotEmptyCart">{{ cart.length }}</span>
        </button>
        <div class="cart__profile" v-if="isNotEmptyCart && isOpen">
            <div class="cart__wrap">
                <div  class="cart__box cart__box--basket">
                    <h2 class="cart__title">Basket <span>({{ cart.length }})</span></h2>
                    <button 
                            class="cart__btn"
                            type="button"
                            @click="this.isOpen = false"
                    >
                        Close
                    </button>
                </div>
                <div class="cart__box">
                    <p class="cart__subtitle">Order Total</p>
                    <span class="cart__text">{{ total }}</span>
                </div>
                <div class="cart__box">
                    <p class="cart__subtitle">Content</p>
                    <button 
                            class="cart__btn"
                            type="button"
                            @click="removeProduct(false)"
                    >
                    Remove all
                    </button>
                </div>
                <template v-if="cart">
                    <div v-for="product in cart" class="cart__card" :key="product.id">
                        <v-lazy-image 
                                    class="cart__card-img"
                                    :src="product.img"
                                    :alt="product.title"
                                    width="96"
                                    height="49"
                        />
                        <div class="cart__card-wrap">
                            <p class="cart__card-title">{{ product.title }}</p>
                            <p class="cart__card-price">{{ product.price }}</p>
                            <button 
                                    class="cart__btn"
                                    type="button"
                                    @click="removeProduct(product.id)"
                            >
                            Remove
                            </button>
                        </div>
                    </div>
                </template>
                <button class="cart__submit" type="button" @click="removeProduct(false)">Place order</button>
            </div>

        </div>
    </div>
</template>

<script>
import VLazyImage from "v-lazy-image";
import VIcon from '@/components/components/VIcon.vue';

export default {
    name: 'VCart',

    components: {
        VLazyImage,
        VIcon
    },

    props: {
        cart: {
            type: Array,
            requared: true,
            default: []
        }
    },

    computed: {
        total() {
            let sum = `${this.cart.reduce((price, item) => price + parseInt(item.price), 0)} USD`;

            return this.cart ? sum : 0;
        },

        isNotEmptyCart() {
            return this.cart.length > 0;
        }
    },

    data() {
        return {
            isOpen: false
        }
    },

    watch: {
        isOpen() {
            if (window.innerWidth >= 576) {
                document.body.style = this.isNotEmptyCart && this.isOpen ? `overflow-y: hidden;`: '';
            
                setTimeout( () => {
                    if(this.isOpen){
                        let profileCart = document.getElementsByClassName('cart__profile')[0];
                        let {top, height} = profileCart.getBoundingClientRect();
                        let heightWindow = document.documentElement.clientHeight;

                        if (heightWindow < (top + height)) {
                            profileCart.style.height = heightWindow - top + 'px';
                        }
                    }
                }, 0);
            }
        },
    },

    methods: {
        removeProduct(product) {
            if (!product || this.cart.length === 1) this.isOpen = false;

            this.$emit('update:removeProduct', product);
        }
    }
};
</script>

<style scoped lang="scss">
.cart {
    @include make-container();
    @include flex-helper(center);

    position: relative;


    @include media(up, sm) {
        order: -1;
        top: -65px;
    }
}

.cart--open {

    .cart__main-btn {
        opacity: 0;

        @include media(down, sm) {
            width: 0;
            height: 0;
        }
    }
    
    @include media(up, sm) {
        .cart__overlay {
            width: 300vw;
            height: 300vh;
            background-color: cl('black', 0.3);
            top: -150vh;
            left: -150vw;
            z-index: 100;
        }

        .cart__profile {
            z-index: 101;
        }
    }
}

.cart__overlay {
    position: absolute
}

.cart__main-btn {
    @include transition(background-color opacity);

    position: absolute;
    top: 0;
    width: 77px;
    height: 77px;
    background-color: cl('white');
    box-shadow: map-get($box-shadow, btn);
    border-radius: map-get($border-radius, btn);
    z-index: 2;

    &:hover {        
        background: map-get($background, btn);

        .cart__icon {
            color: cl('white');
        }

        .cart__icon-text {
            color: cl('orange');
            background-color: cl('white');
            box-shadow: map-get($box-shadow, btn);
        }
    }
}

.cart__icon {
    @include transition(color);

    width: 40px;
    height: 40px;
    color: cl('orange');
}

.cart__icon-text {
    @include flex-helper(center);
    @include transition(background-color color box-shadow);
    @include font(main, 600);

    position: absolute;
    bottom: 0;
    right: 0;
    width: 28px;
    height: 28px;
    color: cl('white');
    background-color: cl('orange');
    border-radius: map-get($border-radius, rounded);
}

.cart__profile {
    position: absolute;
    top: 0;
    z-index: 1;
    min-width: 300px;
    max-width: 300px;
    background-color: cl('white');
    box-shadow: map-get($box-shadow, btn);
    border-radius: map-get($border-radius, insta);
    overflow: hidden;

    @include media(down, sm) {
        width: 100%;
        max-width: 100%;
    }
}

.cart__main-btn,
.cart__profile {
    right: 0;

    @include media(up, xl) {
        right: -79px;
    }

    @include media(down, sm) {
        position: relative;
    }
}


.cart__wrap {
    width: 100%;
    height: 100%;
    padding: 30px 15px 15px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 0;
    }
}

.cart__box {
    @include flex-helper(space-between);
    
    margin-bottom: 15px;
}

.cart__box--basket {
    margin-bottom: 20px;
}

.cart__title {
    @include font(subtitle, 600);
}

.cart__text {
    font-weight: map-get($font-weight, 600);
}

.cart__card {
    display: flex;
    padding-top: 10px;
    padding-bottom: 10px;

    &:last-of-type {
        margin-bottom: 20px;
    }
}

.cart__card-img {
    width: 80px !important;
    max-width: 80px;
    height: 80px !important;
    flex: 1 0 auto;
}

.cart__card-wrap {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 30px;
}

.cart__card-title {
    @include font(btn, 400);

    margin-bottom: 15px;
}

.cart__card-price {
    display: flex;
    padding-bottom: 10px;
    margin-bottom: auto;
    font-weight: map-get($font-weight, 600);
}

.cart__btn {
    @include link-hover();
}

.cart__submit {
    @include flex-helper(center);
    @include btn(btn, btn, btn);
    @include transition(background-color opacity);
    
    padding: 10px 30px;
    margin: auto;
    font-weight: map-get($font-weight, 600);
    color: cl('white');
}
</style>

