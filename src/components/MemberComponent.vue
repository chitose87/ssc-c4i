<template lang="pug">
    #MemberComponent
        .controllerModule
            .layout--left
                button.btn.blank
                button.btn.blank
                button.btn.blank
                button.btn.blank
                hr.hr-1
                button.btn Fn
            .layout--right
                button.btn.blank
                button.btn(v-on:click="save",v-bind:disabled="saveDisabled") Save
                a.btn(href="javascript:history.back()") Back
                a.btn(href="#home") Home

        table
            tr
                //th UID
                th Display Name
                th Team
                th Grade
            tr(v-for="ele in usersData.val")
                //td {{ele.uid}}
                td {{ele.name}}
                td
                    select(v-model="ele.team",v-on:change="onChange")
                        option(v-for="ele in settingData.val.teams",v-bind:value="ele.name") {{ele.name}}

                td {{ele.grade}}

</template>
<style lang="scss">
    @import "../style/util";

    #MemberComponent {
        display: flex;
        flex: 1;
        flex-direction: column;
        padding: 2rem;
        justify-content: center;
        align-items: center;
        table {
            position: relative;
            border-spacing: 0px;
            border-collapse: collapse;
            tr {
                th, td {
                    text-align: left;
                    border: 1px solid $color_white;
                    padding: 0.5em;
                }
                td {
                }
            }
        }
    }
</style>
<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import {FBC} from "../ts/FirebaseController";
    import {UserData} from "../ts/data/UserData";

    @Component({
        components: {}
    })
    export default class MemberComponent extends Vue {
        settingData = FBC.settingData;
        usersData = FBC.usersData;
        saveDisabled: boolean = true;

        mounted() {
        }

        onChange() {
            this.saveDisabled = false;
        }

        save() {
            FBC.updateUsersData();
            this.saveDisabled = true;
        }
    }
</script>