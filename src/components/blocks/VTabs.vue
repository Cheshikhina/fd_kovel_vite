<template>
    <div class="tabs">
        <button
            v-for="item in tabsData"
            type="button"
            :class="['tabs__item', currentTab === item && 'tabs__item--active']"
            :key="item"
            v-html="item"
            @click="changeSelectedTab(item)"
        />
    </div>
</template>

<script>
export default {
    name: 'VTabs',

    props: {
        activeTab: {
            type: String,
            required: true,
        },

        tabsData: {
            type: Array,
            required: true,
        }
    },

    data() {
        return {
            currentTab: this.activeTab,
            tabsList: []
        };
    },

    watch: {
        currentTab() {
            this.$emit('update:activeTab', this.currentTab);
        },

        activeTab(value) {
            this.changeSelectedTab(value);
        }
    },

    methods: {
        changeSelectedTab(key) {
            this.currentTab = key;
        }
    }
};
</script>

<style scoped lang="scss">
.tabs {
    @include make-container();
    @include flex-helper(center);
}

.tabs__item {
    @include flex-helper(center);
    @include btn(tabs, false, tabs);
    @include font(main, 600);
    @include transition(background-color color);

    width: 100vw;
    max-width: 135px;
    padding: 16px 17px 17px;
    line-height: 140%;

    &:not(:first-child) {
        margin-left: 31px;

        @include media(down, md) {
            margin-left: 15px;
        }
    }
}

.tabs__item:hover,
.tabs__item--active {
    background: cl('tabs-active');
    color: cl('white');
}
</style>
