<template lang="pug">
    #MissionComponent
        map-component(ref="mapComponent")
        .controllerModule
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
    #MissionComponent {
        display: flex;
        flex: 1;
    }
</style>
<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import MapComponent from "./MapComponent.vue";
    import {Singleton} from "../ts/Singleton";

    @Component({
        components: {
            MapComponent
        }
    })
    export default class MissionComponent extends Vue {
        options = Singleton.controllerOptions;

        mounted() {
//            this.$refs.mapComponent.addEventListener("")
//            this.$refs.controllerComponent
        }
    }
</script>