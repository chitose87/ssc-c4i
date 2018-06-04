/* globals document, window, JSON, require, CSInterface, CSEvent, SystemPath, VulcanInterface, VulcanMessage */

import Vue from "vue";
import SineInComponent from "./components/SineInComponent.vue";
import HomeComponent from "./components/HomeComponent.vue";
import MemberComponent from "./components/MemberComponent.vue";
import SettingsComponent from "./components/SettingsComponent.vue";
import MissionComponent from "./components/MissionComponent.vue";
import LogModule from "./components/LogModule.vue";
import {Singleton} from "./ts/Singleton";
import {FBC} from "./ts/FirebaseController";

class Main {
    static instance: Main;
    appVue: Vue;
    body: HTMLElement;
    sineInComponent: SineInComponent;
    homeComponent: HomeComponent;
    // memberComponent: MemberComponent;
    missionComponent: MissionComponent;
    navigateBarHeight: number = -1;

    constructor() {
        Main.instance = this;
        this.body = document.getElementsByTagName("body")[0];

        //
        window.addEventListener("resize", () => this.resize());
        window.addEventListener("hashchange", () => this.hashchange());
        document.addEventListener("touchmove", function (e) {
            // let v = e.target;
            // while (v) {
            //     console.log(v,);
            //     v = v.parentNode;
            // }
            // console.log(e.target);
            e.preventDefault();
        }, {passive: false});


        Vue.directive('change', {
            inserted: function (el, binding) {
                el.addEventListener("change", binding.value);
            }
        });
        Vue.directive('focus', {
            inserted: function (el, binding) {
                el.addEventListener("focus", () => {
                    binding.value(true);
                });
                el.addEventListener("blur", () => {
                    binding.value(false);
                });
            }
        });
        Vue.directive('blur', {
            // inserted: function (el, binding) {
            //     console.log("blur")
            //     // el.addEventListener("blur", binding.value);
            // }
        });

        this.appVue = new Vue({
            el: "#app",
            data: {
                hash: ""
            },
            methods: {},
            components: {
                SineInComponent
                , HomeComponent
                , MemberComponent
                , SettingsComponent
                , MissionComponent
                , LogModule
            }
        });
        this.sineInComponent = <SineInComponent>this.appVue.$refs.sineInComponent;
        this.homeComponent = <HomeComponent>this.appVue.$refs.homeComponent;
        this.missionComponent = <MissionComponent>this.appVue.$refs.missionComponent;

        FBC.init(() => {
            location.hash = "#sineIn";
        }, () => {
            location.hash = "#home";
        });
        window.dispatchEvent(new Event("resize"));
        this.hashchange();
    }

    private resize() {
        let long, short;
        let iw = innerWidth;
        let ih = innerHeight;
        let aw = screen.availWidth;
        let ah = screen.availHeight;

        let v = ah - innerHeight;
        if (this.navigateBarHeight == -1 || this.navigateBarHeight > v) {
            this.navigateBarHeight = v;
        }
        console.log(aw, ah, iw, ih);
        if (ah < aw) {
            long = aw - this.navigateBarHeight;
            short = ah;
        } else {
            long = ah - this.navigateBarHeight;
            short = aw;
        }
        if (ih < iw) {
            this.appVue.$el.style.transform = "";
        } else {
            this.appVue.$el.style.transform = "matrix(6.12323e-17, 1, -1, 6.12323e-17, 375, -2.29621e-14)";
        }
        this.appVue.$el.style.width = `${long}px`;
        this.appVue.$el.style.height = `${short}px`;
        Singleton.appWidth = long;
        Singleton.appHeight = short;
    }

    private hashchange() {
        this.body.setAttribute("data-status", location.hash);
        this.appVue.$set(this.appVue, "hash", location.hash);
    }
}

new Main();
