<template>
    <section class="bottom-section">
        <v-paralax class="bottom-section__paralax" />
        <div class="bottom-section__wrap">
            <h2 class="bottom-section__title">Fill out the form and we will call you</h2>
            <form @submit.prevent="onSubmit" class="bottom-section__form">
                <v-input name="user" type="text" label="Your name" @update:input="input" :text-data="user" />
                <v-input name="phone" type="tel" label="Phone number" @update:input="input" :text-data="phone" />
                <button type="submit" class="bottom-section__submit">
                    Сall back
                    <v-icon name="submit" />
                </button>
            </form>
            <p v-if="isSubmit" class="bottom-section__text">Form sent</p>
            <p v-if="isNotSubmit" class="bottom-section__text">Form not submitted. Fill in all fields of the form</p>
            <v-lazy-image class="bottom-section__img" src="/src/assets/bottom-car.png" alt="Car" width="684" height="342" />
        </div>
    </section>
</template>

<script>
import VLazyImage from "v-lazy-image";
import VParalax from "@/components/components/VParalax.vue";
import VInput from "@/components/components/VInput.vue";
import VIcon from "@/components/components/VIcon.vue";

export default {
    name: 'VBottomSection',

    components: { 
        VLazyImage,
        VParalax,
        VInput,
        VIcon
    },

    data() {
        return {
            user: null,
            phone: null,
            isSubmit: false,
            isNotSubmit: false
        }
    },

    methods: {
        onSubmit: function(event) {
            if(this.user && this.phone) {
                this.user = this.phone = [];
                this.isSubmit = true;
            } else {
                this.isNotSubmit = true;
            }

            setTimeout( () => {
                this.isSubmit = false;
                this.isNotSubmit = false;
            }, 2000);
        },

        input(value) {
            let inputValue = eval("(" + value + ")");
            if (inputValue.user) this.user = inputValue.user;
            if (inputValue.phone) this.phone = inputValue.phone;
        }
    }
};
</script>

<style scoped lang="scss">
.bottom-section {
    position: relative;
    min-height: 575px;
    background-color: cl(header);
}

.bottom-section__paralax {
    top: 108px;
    left: 50%;
    width: 100%;
    height: calc(100% + 100px);
    background-image: url('@/assets/bottom-1.svg'),
                      url('@/assets/bottom-2.svg');
    background-repeat: no-repeat;
    background-position: 63% 3%, -30% 37.5%;
    transform: translateX(-50%);
    z-index: 1;

    @media (min-width: 1920px) {
        background-position: 50% 68%, 50% 34.5%;
    }
}

.bottom-section__wrap {
    @include make-container();
    @include flex-helper();

    position: relative;
    flex-direction: column;
    min-height: 575px;
    padding-top: 82px;
    z-index: 2;

    @include media(down, md) {
        padding-top: 40px;
    }
}

.bottom-section__title {
    @include font(title, 700);

    max-width: 584px;
    margin-bottom: 42px;
    line-height: 150%;
    text-align: center;

    @include media(down, md) {
        margin-bottom: 30px;
        font-size: map-get($font-size, subtitle);
        line-height: 1;
    }
}

.bottom-section__form {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 860px;
    gap: 25px;
    margin-bottom: 15px;
    z-index: 2;

    @include media(up, md) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 40px;
    }
}

.bottom-section__submit {
    @include flex-helper(center);
    @include btn(btn, submit, input);
    @include font(btn, 700);

    padding: 19px 31px;
    color: cl('white');

    svg {
        @include transition(transform);

        width: 32px;
        height: 9px;
        margin-top: -5px;
        margin-left: 31px;
    }

    &:hover svg {
        transform: translateX(3px);
    }

    @include media(down, md) {
        font-size: map-get($font-size, main);
    }
}

.bottom-section__img {
    position: absolute;
    bottom: -68px;
    left: calc(50% - 50px);
    display: flex;
    transform: translateX(-50%);
    animation: car 5s ease-in-out 0s infinite alternate;

    @include media(down, md) {
        position: relative;
        left: 50%;
        bottom: 0;
        margin-top: 0;
        animation: none;
    }
}

.bottom-section__text {
    height: 0;
}
</style>

