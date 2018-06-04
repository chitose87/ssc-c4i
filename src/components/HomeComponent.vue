<template lang="pug">
    #HomeComponent
        .info
            p
                span Teams:
                span(v-for="ele in settingData.val.teams") {{ele.name}}
            p
                span UID:
                span {{userData.val.uid}}
            p
                span Display Name:
                span {{userData.val.name}}
            p
                span Team:
                span {{userTeam.name}}
                span(v-bind:style="{'background-color': userTeam.color }")

        .body
            a.btn(href="#sineIn") Sine In
            a.btn(href="#member") Member
            a.btn(href="#settings") Game Settings
            a.btn(href="#mission") Mission

</template>
<style lang="scss">
    #HomeComponent {
        display: flex;
        flex: 1;
        flex-direction: column;
        padding: 2rem;
        justify-content: center;
        align-items: center;
        position: relative;
        .info {
            position: absolute;
            padding: 1rem;
            top: 0;
            left: 0;
        }
        .body {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            height: 100%;
            position: relative;
            .btn {
                width: auto;
                padding-left: 0.5em;
                padding-right: 0.5em;
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
    export default class HomeComponent extends Vue {
        settingData = FBC.settingData;
        userData = FBC.userData;
        usersData = FBC.usersData;
        userTeam = {name: "", color: ""};

        mounted() {
//            this.updated();
        }

        updated() {
            let v = this.settingData.val.teams[this.userData.val.team];
            if (v) this.userTeam = v;
        }

        submit() {
        }
    }
</script>