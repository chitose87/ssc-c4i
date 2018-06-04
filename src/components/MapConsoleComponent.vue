<template lang="pug">
    #MapConsoleComponent(v-show="isShow")
        ul
            li(v-for="a in filter")
                button.btn(v-bind:class="(selectedFilter == a.value?'current':'')",v-on:click="selectedFilter = a.value") {{a.label}}
        ul
            li(v-for="a in item")
                button.btn(v-bind:class="(selectedItem == a.value?'current':'')",v-on:click="selectedItem = a.value") {{a.label}}

</template>
<style lang="scss">
    @import "../style/util";

    #MapConsoleComponent {
        position: absolute;
        top: 0;
        left: 0;
        z-index: $z-index_on;
        > ul {
            list-style: none;
            display: flex;
            max-width: 5rem;
            > li {
            }
        }
    }

</style>
<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import {Singleton} from "../ts/Singleton";

    @Component
    export default class MapConsoleComponent extends Vue {
        isShow: boolean = false;
        item = [
            {label: "A"}
        ];
        filter = [
            {label: "A"}
        ];
        selectedFilter: string = "";
        selectedItem: string = "";

        show(filter, list, x, y) {
            this.filter = filter;
            this.item = list;
            this.$el.style.transform = `matrix(1,0,0,1,${x},${y})`;

            this.selectedFilter = "";
            this.selectedItem = "";
            this.isShow = true;
        }

        mounted() {
        }
    }
</script>