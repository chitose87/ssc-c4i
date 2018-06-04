<template lang="pug">
    #LogModule(v-bind:data-inputting="isInputting")
        form(v-on:submit.prevent="onSubmit")
            input(v-model="chatText",v-focus="focusChange")
            button.btn.half(type="submit") SEND

        ul
            li(v-for="ele in logData.val")
                p {{timeString(ele.serverTime)}} {{usersData.val[ele.uid].name}} {{ele.type}}
                p {{ele.value}}

</template>
<style lang="scss">
    #LogModule {
        position: absolute;
        top: 0;
        right: 0;
        width: 30%;
        height: 100%;
        padding: 1rem;
        overflow: scroll;
        &[data-inputting] {
            width: 80%;
        }

        form {
            display: flex;
            input {
                padding: 0 0.5em;
                flex: 1;
                width: 1rem;
            }
            .btn {
            }
        }
        ul {
            list-style: none;
            display: flex;
            flex-direction: column-reverse;
            li {

            }
        }
    }

    [data-status="#mission"] #LogModule {
        right: 3rem;
    }

    [data-status="#settings"] #LogModule {
        display: none;
    }
</style>
<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import {FBC} from "../ts/FirebaseController";
    import {UserData} from "../ts/data/UserData";

    @Component({
        components: {}
    })
    export default class LogModule extends Vue {
        logData = FBC.logData;
        usersData = FBC.usersData;

        isInputting = false;
        chatText = "";

        mounted() {
        }

        timeString(num: number) {
            let d = new Date(num);
            return ('00' + d.getHours()).slice(-2) + ":" + ('00' + d.getMinutes()).slice(-2);
        }

        onSubmit() {
            FBC.sendMessage(this.chatText);
            this.chatText = "";
        }

        focusChange(flag: boolean) {
            this.isInputting = flag;
        }
    }
</script>