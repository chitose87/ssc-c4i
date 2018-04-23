/* globals document, window, JSON, require, CSInterface, CSEvent, SystemPath, VulcanInterface, VulcanMessage */

import Vue from "vue";
import MissionComponent from "./components/MissionComponent.vue";
import {Singleton} from "./ts/Singleton";

class Main {
    static instance: Main;
    appVue: Vue;
    body: HTMLElement;
    missionComponent: MissionComponent;

    constructor() {
        Main.instance = this;
        this.body = document.getElementsByTagName("body")[0];

        let opt = {
            get passive() {
                supportsPassive = true;
            }
        }

        //
        window.addEventListener("resize", () => this.resize());
        window.addEventListener("hashchange", () => this.hashchange());
        document.addEventListener("touchmove", function (e) {
            e.preventDefault();
        }, {passive: false});


        this.appVue = new Vue({
            el: "#app",
            data: {
                name: "World",
                hash: ""
            },
            methods: {},
            components: {
                MissionComponent
            }
        });
        this.missionComponent = <MissionComponent>this.appVue.$refs.missionComponent;


        window.dispatchEvent(new Event("resize"));
        this.hashchange();
    }

    private resize() {
        let long, short;
        if (innerHeight < innerWidth) {
            long = innerWidth;
            short = innerHeight;
            this.appVue.$el.style.transform = "";
        } else {
            long = innerHeight;
            short = innerWidth;
            this.appVue.$el.style.transform = "matrix(6.12323e-17, 1, -1, 6.12323e-17, 375, -2.29621e-14)";
        }
        this.appVue.$el.style.width = `${long}px`;
        this.appVue.$el.style.height = `${short}px`;
        Singleton.appWidth = long;
        Singleton.appHeight = short;
    }

    private hashchange() {
        this.body.setAttribute("data-status", location.hash);
    }
}

new Main();
