<template>
    <div class="product">
        <span v-if="product.label" class="product__label">{{ product.label }}</span>
        <v-lazy-image 
                      class="product__img"
                      :src="product.img"
                      :alt="product.title"
                      width="170"
                      height="173"
        />
        <div class="product__wrap">
            <h3 class="product__title">{{ product.title }}</h3>
            <p v-if="product.info" class="product__info">{{ product.info }}</p>
        </div>
        <p v-if="product.desc" class="product__desc">{{ product.desc }}</p>
        <p class="product__price">{{ product.price }}</p>
        <div 
            :class="['product__cart', product.isInCart && 'product__cart--active']" 
            @click="addToCart"
        >
            <v-lazy-image
                          v-for="item in 2"
                          class="product__icon"
                          :src="item === 2 ? '/src/assets/cart-active.png' : '/src/assets/cart.png'"
                          alt="Cart"
                          width="33"
                          height="33"
                          :key="`cart-${item}`"
            />
        </div>
    </div>
</template>

<script>
import VLazyImage from "v-lazy-image";

export default {
    name: 'VProduct',

    components: { VLazyImage },
    
    props: {
        product: {
            type: Object,
            requared: true
        }
    },

    data() {
        return {
            productsData: this.product
        };
    },

    methods: {
        addToCart() {
            if (!this.product.isInCart) this.$emit('addToCart', this.product.id);
        }
    }
};
</script>

<style scoped lang="scss">
.product {
    @include flex-helper(stretch);

    position: relative;
    flex-direction: column;
    min-width: 260px;
    margin-bottom: 25px;
    padding: 36px 15px 19px;
    border: 2px solid cl(border-card);
    border-radius: map-get($border-radius, insta);

    &::after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: -26px;
        transform: translateX(-50%);
        width: 80px;
        height: 44px;
        display: flex;
        background-image: url('@/assets/border.svg');
        background-position:  top center;
        background-repeat: no-repeat;
        background-size: contain;
    }

    @include media(down, sm) {
        margin-right: 15px;
    }
}

.product__label {
    @include flex-helper(center);
    @include btn(label, label, label);
    @include font(small, 600);

    position: absolute;
    top: 20px;
    left: 19px;
    width: 60px;
    height: 25px;
    color: cl('white');
}

.product__img {
    width: 100%;
    height: 100%;
    max-width: 170px;
    max-height: 173px;
    margin-bottom: 30px;
}

.product__wrap {
    @include flex-helper(space-between);

    width: calc(100% - 13px);
    margin-left: 10px;
    margin-bottom: auto;
    padding-bottom: 8px;
}

.product__title {
    @include font(main, 600);

    line-height: 140%;
}

.product__info,
.product__desc {
    @include font(small);

    line-height: 140%;
}

.product__info {
    transform: translateY(1px);
}

.product__desc {
    width: calc(100% - 13px);
    margin-left: 10px;
}

.product__price {
    @include font(subtitle, 300);

    margin-top: auto;
    margin-bottom: 10px;
    padding-top: 19px;
    line-height: 140%;
}

.product__cart {
    @include transition(border-color);

    position: relative;
    width: 33px;
    height: 33px;
    margin-bottom: -35px;
    border: 2px solid cl(border-card);
    border-radius: map-get($border-radius, rounded);
    cursor: pointer;
    z-index: 3;
}

.product__cart {
    background: transparent;
    box-shadow: none;
    border: 2px solid cl(border-card);

    .product__icon {
        opacity: 0;

        &:first-child {
            opacity: 1;
        }
    }
}

.product__cart:hover,
.product__cart--active {
    @include btn(cart, label, btn);

    .product__icon {
        opacity: 1;

        &:first-child {
            opacity: 0;
        }
    }
}

.product__icon {
    @include absolute-center();
    @include transition(opacity);

    width: 12px;
    height: 14px;
    transform: translate(calc(-50% + 1px), calc(-50% - 1px));
}
</style>
