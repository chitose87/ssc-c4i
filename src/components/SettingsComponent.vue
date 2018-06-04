<template lang="pug">
    #SettingsComponent
        // General
        .body(v-if="(mode=='general')")

        // Teams
        .body(v-if="(mode=='teams')")
            p Teams
            table
                tr
                    th Name
                    th Color
                tr(v-for="ele in settingData.val.teams")
                    td
                        input(v-model="ele.name",v-on:change="onChange")
                    td
                        span.colorTip(v-bind:style="{'background-color': ele.color }")
                        input(v-model="ele.color",v-on:change="onChange")
            button.btn(v-on:click="addTeam") +

        // Map
        .body.map(v-if="(mode=='map')")
            map-component(ref="mapComponent")
            //.map__icons
                svg.btn(viewBox="0 0 512 512",v-on:touchstart="onMapIconDown('base')",ref="baseIcon")
                    path(d="M451.679,161.238h-0.015L296.946,16.2C285.488,5.434,270.647-0.023,255.992,0c-14.654-0.023-29.496,5.434-40.969,16.2L60.321,161.238c-12.078,11.317-18.924,27.144-18.924,43.694v247.174c-0.016,16.463,6.737,31.584,17.542,42.351c10.758,10.805,25.88,17.55,42.351,17.542h309.42c16.456,0.008,31.576-6.737,42.351-17.542c10.789-10.758,17.558-25.888,17.542-42.351V204.932C470.603,188.368,463.741,172.556,451.679,161.238z M422.912,452.107c-0.015,3.446-1.335,6.341-3.586,8.623c-2.282,2.251-5.185,3.571-8.615,3.578H308.993v-105.97H203.007v105.97H101.29c-3.446-0.015-6.349-1.327-8.631-3.57c-2.251-2.282-3.571-5.186-3.571-8.631V204.932c0-3.384,1.382-6.59,3.85-8.896L247.655,50.991c2.391-2.236,5.278-3.284,8.336-3.299c3.059,0.016,5.947,1.064,8.337,3.291l154.718,145.038v0.008c2.468,2.313,3.865,5.534,3.865,8.903V452.107z")
                //svg.btn(viewBox="0 0 512 512",v-on:touchstart="onMapIconDown('base')",ref="baseIcon")
                    path(d="M451.679,161.238h-0.015L296.946,16.2C285.488,5.434,270.647-0.023,255.992,0c-14.654-0.023-29.496,5.434-40.969,16.2L60.321,161.238c-12.078,11.317-18.924,27.144-18.924,43.694v247.174c-0.016,16.463,6.737,31.584,17.542,42.351c10.758,10.805,25.88,17.55,42.351,17.542h309.42c16.456,0.008,31.576-6.737,42.351-17.542c10.789-10.758,17.558-25.888,17.542-42.351V204.932C470.603,188.368,463.741,172.556,451.679,161.238z M422.912,452.107c-0.015,3.446-1.335,6.341-3.586,8.623c-2.282,2.251-5.185,3.571-8.615,3.578H308.993v-105.97H203.007v105.97H101.29c-3.446-0.015-6.349-1.327-8.631-3.57c-2.251-2.282-3.571-5.186-3.571-8.631V204.932c0-3.384,1.382-6.59,3.85-8.896L247.655,50.991c2.391-2.236,5.278-3.284,8.336-3.299c3.059,0.016,5.947,1.064,8.337,3.291l154.718,145.038v0.008c2.468,2.313,3.865,5.534,3.865,8.903V452.107z")
                //svg.btn(viewBox="0 0 512 512",v-on:touchstart="onMapIconDown('base')",ref="baseIcon")
                    path(d="M451.679,161.238h-0.015L296.946,16.2C285.488,5.434,270.647-0.023,255.992,0c-14.654-0.023-29.496,5.434-40.969,16.2L60.321,161.238c-12.078,11.317-18.924,27.144-18.924,43.694v247.174c-0.016,16.463,6.737,31.584,17.542,42.351c10.758,10.805,25.88,17.55,42.351,17.542h309.42c16.456,0.008,31.576-6.737,42.351-17.542c10.789-10.758,17.558-25.888,17.542-42.351V204.932C470.603,188.368,463.741,172.556,451.679,161.238z M422.912,452.107c-0.015,3.446-1.335,6.341-3.586,8.623c-2.282,2.251-5.185,3.571-8.615,3.578H308.993v-105.97H203.007v105.97H101.29c-3.446-0.015-6.349-1.327-8.631-3.57c-2.251-2.282-3.571-5.186-3.571-8.631V204.932c0-3.384,1.382-6.59,3.85-8.896L247.655,50.991c2.391-2.236,5.278-3.284,8.336-3.299c3.059,0.016,5.947,1.064,8.337,3.291l154.718,145.038v0.008c2.468,2.313,3.865,5.534,3.865,8.903V452.107z")
            input.map__url(v-model="settingData.val.mapUrl",v-on:change="onChange")

        .controllerModule
            .layout--left
                button.btn(v-bind:class="mode=='general'?'current':''",v-on:click="mode='general'") General
                button.btn(v-bind:class="mode=='teams'?'current':''",v-on:click="mode='teams'") Teams
                button.btn(v-bind:class="mode=='map'?'current':''",v-on:click="mode='map'") Map
                button.btn.blank
                hr.hr-1
                button.btn Fn
            .layout--right
                button.btn.blank
                button.btn(v-on:click="save",v-bind:disabled="saveDisabled") Save
                a.btn(href="javascript:history.back()") Back
                a.btn(href="#home") Home


</template>
<style lang="scss">
    @import "../style/util";

    #SettingsComponent {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .body {
            padding: 0 2.5rem;
            position: relative;
            z-index: $z-index_on;

            &.map {
                width: 100%;
                height: 100%;
                padding: 0 0rem;
                z-index: inherit;
                /*
                .map__icons {
                    position: absolute;
                    left: 4rem;
                    bottom: 1rem;
                    z-index: $z-index_on;
                    svg {
                        padding: 0.5rem;
                        * {
                            fill: $color_white;
                        }
                    }
                }
                */
                .map__url {
                    position: absolute;
                    top: 1rem;
                    left: 4rem;
                    z-index: $z-index_on;
                }
            }
            .colorTip {
                display: inline-block;
                width: 1rem;
                height: 1rem;
            }
        }
    }
</style>
<script lang="ts">
    import {Vue, Component, Watch} from "vue-property-decorator";
    import {FBC} from "../ts/FirebaseController";
    import {UserData} from "../ts/data/UserData";
    import {Singleton} from "../ts/Singleton";
    import MapComponent from "./MapComponent.vue";

    @Component({
        components: {
            MapComponent
        }
    })
    export default class SettingsComponent extends Vue {
        mode: string = "general";
        settingData = FBC.settingData;
        saveDisabled: boolean = true;

        mounted() {
            Singleton.controllerOptions.mode = "map";
        }

        updated() {
        }

        addTeam() {
            let u;
            while (true) {
                u = "_" + Math.floor(Math.random() * 1000);
                if (!this.settingData.val.teams[u]) {
                    break;
                }
            }
            this.$set(this.settingData.val.teams, u, {name: "", color: ""});
            this.saveDisabled = false;
        }

        onChange() {
            this.saveDisabled = false;
        }

        save() {
            // saves
            let teams = this.settingData.val.teams;
            for (let key in teams) {
                let ele = teams[key];
                if (ele.name == "") {
                    delete teams[key];
                } else if (ele.name != key) {
                    teams[ele.name] = ele;
                    delete teams[key];
                }
            }
            FBC.updateSettingsData();
            this.saveDisabled = true;
        }

        back() {

        }

//        onMapIconDown(iconName: string) {
//            let $icon: HTMLElement = <HTMLElement>this.$refs[`${iconName}Icon`];
//            let mapComponent: MapComponent = <MapComponent>this.$refs.mapComponent;
//            let rect = $icon.getBoundingClientRect();
//
//            let before = {x: rect.left, y: rect.top};
//            let after = {x: 0, y: 0};
//
//            let onMove = (e: any) => {
//                after
//            };
//
//            let onEnd = (e: any) => {
//                window.removeEventListener("touchmove", onMove);
//                window.removeEventListener("touchend", onEnd);
//            };
//            window.addEventListener("touchmove", onMove);
//            window.addEventListener("touchend", onEnd);
//        }
    }
</script>