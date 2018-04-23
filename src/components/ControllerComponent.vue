<template lang="pug">
    #ControllerComponent
        .layout--left
            .layout--map
                button.btn(v-bind:class="(options.mode == 'map'?'current':'')",v-on:click="options.mode = 'map'") Map
                button.btn.half(v-bind:class="(options.isMapAll?'current':'')",v-on:click="options.isMapAll=!options.isMapAll") All
                button.btn.half(v-bind:class="(options.isMapTeam?'current':'')",v-on:click="options.isMapTeam=!options.isMapTeam") Team
                button.btn.half(v-bind:class="(options.isMapPlatoon?'current':'')",v-on:click="options.isMapPlatoon=!options.isMapPlatoon") Platoon
                button.btn.half(v-bind:class="(options.isMapAlone?'current':'')",v-on:click="options.isMapAlone=!options.isMapAlone") Alone
            button.btn(v-bind:class="(options.mode == 'sign'?'current':'')",v-on:click="options.mode = 'sign'") Sign
            button.btn.blank
            button.btn.blank
            hr.hr-1
            button.btn Fn
        .layout--right
            button.btn.blank
            button.btn.t T
            button.btn.f F
            button.btn.blank

</template>
<style lang="scss">
    @import "../style/util";

    #ControllerComponent {
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        position: absolute;
        width: 100%;
        height: 100%;

        .layout-- {
            &map {
                display: flex;
                align-items: flex-end;
                .half {
                    border-left: 0;
                }
            }
            &left, &right {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
        }
    }

</style>
<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import {Singleton} from "../ts/Singleton";

    @Component
    export default class ControllerComponent extends Vue {
        options = {};

        mounted() {
            this.options = Singleton.controllerOptions;
        }
    }
</script>