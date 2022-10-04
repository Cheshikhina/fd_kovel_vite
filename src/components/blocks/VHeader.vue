<template>
    <header class="header">
        <div class="header__wrap">
            <v-lazy-image class="header__logo" src="/src/assets/logo-header.png" width="112" height="67" alt="Logo" />
            <button 
                    :class="['header__btn', isMenuOpen && 'header__btn--open']"
                    type="button"
                    aria-label="Button menu"
                    ref="button"
                    @click="openMenu()"
            >
                <span aria-hidden="true" />
            </button>
            <div class="header__holder">
                <nav class="header__nav">
                    <v-link 
                            v-for="(link, index) in links"
                            v-bind="link"
                            class="header__link"
                            :key="index"
                    />
                </nav>
                <div class="header__box">
                    <p class="header__timetable">Daily 11am - 9pm</p>
                    <v-btn-tel />
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import VLazyImage from "v-lazy-image";
import VLink from '@/components/components/VLink.vue';
import VBtnTel from '@/components/components/VBtnTel.vue';

const linksData = [
    {
        href: '#',
        text: 'Payment',
        isLink: true
    }, {
        href: '#',
        text: 'About us',
        isLink: true
    }, {
        href: '#',
        text: 'Contacts',
        isLink: true
    }
];

export default {
    name: 'VHeader',

    components: {
        VLazyImage,
        VLink,
        VBtnTel
    },

    data() {
        return {
            links: linksData,
            isMenuOpen: false
        };
    },

    methods: {
        openMenu() {
            this.isMenuOpen = !this.isMenuOpen;
            document.body.style= this.isMenuOpen ? `overflow-y: hidden;`: '';
            this.$refs.button.blur();
        }
    }
};
</script>

<style scoped lang="scss">
.header {
    position: relative;
    background-color: cl(header);
}

.header__wrap {
    @include make-container();

    position: relative;
    padding-top: 53px;
    padding-bottom: 50px;
    z-index: 100;

    @include media(down, md) {
        @include flex-helper(space-between);

        padding: 35px 0;
    }
}

.header__btn {
    @include flex-helper(center);
    @include transition(border-color);

    position: absolute;
    top: 50%;
    right: 0;
    width: 40px;
    height: 40px;
    border: 1px solid transparent;
    border-radius: map-get($border-radius, label);
    transform: translateY(-50%);
    z-index: 10;

    @include media(up, md) {
        display: none;
    }

    span {
        @include transition(background-color);
        @include absolute-center();

        width: 35px;
        height: 3px;
        background-color: cl('orange');
        border-radius: map-get($border-radius, label);

        @include before() {
            top: -7px;
        }

        @include after() {
            bottom: -7px;
        }

        &::before,
        &::after {
            @include transition(transform);

            width: 100%;
            height: 100%;
            background-color: cl('orange');
        }
    }

    &:hover {
        border-color: cl('orange');
    }

    &.header__btn--open span {
        background-color: transparent;
        
        &::before,
        &::after {
            top: 50%;
            transform-origin: center;
        }

        &::before {
            transform: rotate(-45deg);
        }

        &::after {
            transform: rotate(45deg);
        }
    }
}

.header__btn--open + .header__holder {
    opacity: 1;
    transform: translateX(0);
}

.header__holder {
    @include transition(transform opacity);
    
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 122px;
    align-items: baseline;
    line-height: 140%;

    @include media(down, md) {
        position: absolute;
        top: 0;
        left: calc(-50vw + 30px + #{map-get($container-max-widths, lg)} / 2);
        display: flex;
        flex-direction: column;
        gap: 30px;
        width: 100vw;
        height: 100vh;
        padding: 150px 100px;
        background-color: cl(header);
        opacity: 0;
        z-index: 5;
        transform: translateX(100%);
    }

    @include media(down, sm) {
        left: -15px;
        padding: 90px 15px;
    }
}

.header__nav {
    @include flex-helper();

    @include media(down, md) {
        flex-direction: column;
    }
}

.header__link:not(:first-child) {
    margin-top: 15px;

    @include media(up, md) {
        margin-top: 0;
        margin-left: 15px;
    }
    
    @include media(up, lg) {
        margin-left: 40px;
    }
}

.header__logo {
    @include absolute-center();

    top: calc(50% - 6px);

    @include media(down, md) {
        position: static;
        width: 96px;
        height: 49px;
        transform: none;
    }
}

.header__box {
    @include flex-helper(flex-end);

    @include media(down, md) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
}

.header__timetable {
    position: relative;
    margin-bottom: 20px;
    margin-left: 13px;

    @include before() {
        top: calc(50% - 2px);
        left: -13px;
        width: 4px;
        height: 4px;
        background-color: cl(point);
        border-radius: map-get($border-radius, circle);
    }
    
    @include media(up, md) {
        display: none;
    }
    
    @include media(up, lg) {
        display: inherit;
        margin-right: 40px;
        margin-bottom: 0;
        margin-left: 0;
    }
}
</style>
