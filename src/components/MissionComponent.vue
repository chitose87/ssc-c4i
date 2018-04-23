<template lang="pug">
    #MissionComponent
        map-component(ref="mapComponent")
        controller-component(ref="controllerComponent")

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
    import ControllerComponent from "./ControllerComponent.vue";

    @Component({
        components: {
            MapComponent
            , ControllerComponent
        }
    })
    export default class MissionComponent extends Vue {
    }
</script>