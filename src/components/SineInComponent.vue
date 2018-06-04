<template lang="pug">
    #SineInComponent
        table
            tr
                th UID
                td {{userData.val.uid}}
            tr
                th Display Name
                td
                    input(type="text",placeholder="Display Name",v-model="userData.val.name")

        button.btn(v-on:click="submit") submit

</template>
<style lang="scss">
    #SineInComponent {
        display: flex;
        flex: 1;
        flex-direction: column;
        padding: 2rem;
        justify-content: center;
        align-items: center;
        table {
            tr {
                line-height: 2rem;
                th {
                    padding-right: 1rem;
                    text-align: left;
                }
                td {

                }
            }
        }
        input {
            padding: 0.5em;
        }
        .btn {
            display: block;
            width: auto;
            padding-left: 0.5em;
            padding-right: 0.5em;
            margin-top: 1rem;
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
    export default class SineInComponent extends Vue {
        userData = FBC.userData;

        mounted() {
        }

        submit() {
            FBC.updateUserData();
            location.hash = "#home";
        }
    }
</script>