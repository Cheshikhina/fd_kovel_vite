<template>
    <div :class="['fix-menu', hideOnXs && 'fix-menu--hide', isShow && 'fix-menu--visible']">
        <div class="fix-menu__wrap">
            <v-lazy-image class="fix-menu__logo" src="/src/assets/logo-header.png" width="112" height="67" alt="Logo" />
            <v-btn-tel class="fix-menu__tel" />
        </div>
    </div>
</template>

<script>
import { debounce } from '@/misc/functions';
import VLazyImage from "v-lazy-image";
import VLink from '@/components/components/VLink.vue';
import VBtnTel from '@/components/components/VBtnTel.vue';

export default {
    name: 'VFixMenu',

    components: {
        VLazyImage,
        VLink,
        VBtnTel
    },

    props: {
        hideOnXs: {
            type: Boolean,
            default: false,
        },

        minOffsetTop: {
            type: Number,
            default: 500,
        },
    },

    data() {
        return {
            isShow: false,
            offsetTop: null,
        };
    },

    computed: {
        isNotXSFormat() {
            const width = window.innerWidth;

            return this.hideOnXs ? width >= 576 : true;
        },
    },

    beforeMount() {
        this.setOffsetTarget();

        document.addEventListener('scroll', this.setVisibility);
        window.addEventListener('resize', this.setOffsetTarget);
    },

    destroyed() {
        document.removeEventListener('scroll', this.setVisibility);
        window.removeEventListener('resize', this.setOffsetTarget);
    },

    methods: {
        setVisibility: debounce(function() {
            if (this.isNotXSFormat) {
                const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

                this.isShow = scrollTop >= this.offsetTop;
            }
        }, 20),

        setOffsetTarget: debounce(function() {
            if (this.isNotXSFormat) {
                this.offsetTop = this.minOffsetTop;
            }
        }, 50),
    }
};
</script>

<style scoped lang="scss">
.fix-menu {
    @include transition(opacity visibility);

    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    width: 100%;
    background-color: cl(header, 0.8);
    visibility: hidden;
    opacity: 0;
    z-index: 11;

    &.fix-menu--visible {
        visibility: visible;
        opacity: 1;
    }

    &.fix-menu--hide {
        @include media(down, sm) {
            display: none;
        }
    }
}

.fix-menu__wrap {
    @include make-container();
    @include flex-helper(space-between);

    align-items: baseline;
    padding: 15px 0 35px;

    @include media(down, md) {
        padding: 20px 0 35px;
    }
}

.fix-menu__logo {
    transform: translateY(17px);

    @include media(down, md) {
        width: 89px;
        height: 44px;
        transform: translateY(14px);
    }
}

.fix-menu__tel span {
    @include media(down, md) {
        margin-right: 8px;
    }
}
</style>
