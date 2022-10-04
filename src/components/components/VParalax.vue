<template>
    <div class="paralax" ref="parallax" />
</template>

<script>
export default {
    name: 'VParalax',

    data() {
        return {
            backgroundPosition: null,
            defPos: null,
        };
    },
    
    mounted() {
        this.$nextTick(() => {
            this.backgroundPosition = window.getComputedStyle(this.$refs.parallax).backgroundPosition;
            this.defPos = this.backgroundPosition.match(/[0-9\\.]+/g);

            if (document.documentElement.clientWidth > 992) {
                document.addEventListener('mousemove', this.parallax, false);
            }
        });
    },

    beforeDestroy() {
        document.removeEventListener('mousemove', this.parallax, false);
    },

    methods: {
        parallax(e) {
            const elem = this.$refs.parallax;
            const _w = window.innerWidth / 2;
            const _h = window.innerHeight / 2;
            const _mouseX = e.clientX;
            const _mouseY = e.clientY;

            const _depth1 = `${this.defPos[0] - (_mouseX - _w) * 0.00030}% ${this.defPos[1] - (_mouseY - _h) * 0.015}%`;

            let _depth2 = '';
            let _depth3 = '';
            if (this.defPos[2]) {
                _depth2 = `, ${this.defPos[2] - (_mouseX - _w) * -0.0010}% ${this.defPos[3] - (_mouseY - _h) * -0.01}%`;
            }
            if (this.defPos[4]) {
                _depth3 = `, ${this.defPos[4] - (_mouseX - _w) * 0.0010}% ${this.defPos[5] - (_mouseY - _h) * 0.005}%`;
            }

            const position = `${_depth1}${_depth2}${_depth3}`;
            elem.style.backgroundPosition = position;
        },
    }
};
</script>

<style scoped lang="scss">
.paralax {
    position: absolute;
    z-index: 1;
}
</style>

