<template lang="pug">
    #MapComponent
        svg(ref="svg",v-bind:viewBox="'0 0 '+singleton.appWidth+' '+singleton.appHeight")
            g(ref="root")
                image(ref="mapImage")
            g(v-bind:transform="'translate(100,'+(singleton.appHeight-60)+')'").
                <g id="iconBase">
                    <rect x="0.5" y="0.5" stroke="#FFFFFF" stroke-miterlimit="10" width="50" height="50"/>
                    <path fill="#FFFFFF" d="M38.9,19L38.9,19L28.3,9.1C27.5,8.4,26.5,8,25.5,8c-1,0-2,0.4-2.8,1.1L12.1,19c-0.8,0.8-1.3,1.9-1.3,3
                        v16.9c0,1.1,0.5,2.2,1.2,2.9c0.7,0.7,1.8,1.2,2.9,1.2h21.2c1.1,0,2.2-0.5,2.9-1.2c0.7-0.7,1.2-1.8,1.2-2.9V22
                        C40.2,20.9,39.7,19.8,38.9,19z M36.9,38.9c0,0.2-0.1,0.4-0.2,0.6c-0.2,0.2-0.4,0.2-0.6,0.2h-7v-7.2h-7.2v7.2h-7
                        c-0.2,0-0.4-0.1-0.6-0.2c-0.2-0.2-0.2-0.4-0.2-0.6V22c0-0.2,0.1-0.5,0.3-0.6l10.6-9.9c0.2-0.2,0.4-0.2,0.6-0.2
                        c0.2,0,0.4,0.1,0.6,0.2l10.6,9.9v0c0.2,0.2,0.3,0.4,0.3,0.6L36.9,38.9L36.9,38.9z"/>
                </g>
                <g>
                    <rect x="60.5" y="0.5" stroke="#FFFFFF" stroke-miterlimit="10" width="50" height="50"/>
                    <path fill="#FFFFFF" d="M98.9,19L98.9,19L88.3,9.1C87.5,8.4,86.5,8,85.5,8c-1,0-2,0.4-2.8,1.1L72.1,19c-0.8,0.8-1.3,1.9-1.3,3
                        v16.9c0,1.1,0.5,2.2,1.2,2.9c0.7,0.7,1.8,1.2,2.9,1.2h21.2c1.1,0,2.2-0.5,2.9-1.2c0.7-0.7,1.2-1.8,1.2-2.9V22
                        C100.2,20.9,99.7,19.8,98.9,19z M96.9,38.9c0,0.2-0.1,0.4-0.2,0.6c-0.2,0.2-0.4,0.2-0.6,0.2h-7v-7.2h-7.2v7.2h-7
                        c-0.2,0-0.4-0.1-0.6-0.2c-0.2-0.2-0.2-0.4-0.2-0.6V22c0-0.2,0.1-0.5,0.3-0.6l10.6-9.9c0.2-0.2,0.4-0.2,0.6-0.2
                        c0.2,0,0.4,0.1,0.6,0.2l10.6,9.9v0c0.2,0.2,0.3,0.4,0.3,0.6L96.9,38.9L96.9,38.9z"/>
                </g>
                <g>
                    <rect x="120.5" y="0.5" stroke="#FFFFFF" stroke-miterlimit="10" width="50" height="50"/>
                    <path fill="#FFFFFF" d="M158.9,19L158.9,19l-10.6-9.9c-0.8-0.7-1.8-1.1-2.8-1.1c-1,0-2,0.4-2.8,1.1L132.1,19
                        c-0.8,0.8-1.3,1.9-1.3,3v16.9c0,1.1,0.5,2.2,1.2,2.9c0.7,0.7,1.8,1.2,2.9,1.2h21.2c1.1,0,2.2-0.5,2.9-1.2c0.7-0.7,1.2-1.8,1.2-2.9
                        V22C160.2,20.9,159.7,19.8,158.9,19z M156.9,38.9c0,0.2-0.1,0.4-0.2,0.6c-0.2,0.2-0.4,0.2-0.6,0.2h-7v-7.2h-7.2v7.2h-7
                        c-0.2,0-0.4-0.1-0.6-0.2c-0.2-0.2-0.2-0.4-0.2-0.6V22c0-0.2,0.1-0.5,0.3-0.6l10.6-9.9c0.2-0.2,0.4-0.2,0.6-0.2
                        c0.2,0,0.4,0.1,0.6,0.2l10.6,9.9v0c0.2,0.2,0.3,0.4,0.3,0.6L156.9,38.9L156.9,38.9z"/>
                </g>
                <g>
                    <rect x="180.5" y="0.5" stroke="#FFFFFF" stroke-miterlimit="10" width="50" height="50"/>
                    <path fill="#FFFFFF" d="M218.9,19L218.9,19l-10.6-9.9c-0.8-0.7-1.8-1.1-2.8-1.1c-1,0-2,0.4-2.8,1.1L192.1,19
                        c-0.8,0.8-1.3,1.9-1.3,3v16.9c0,1.1,0.5,2.2,1.2,2.9c0.7,0.7,1.8,1.2,2.9,1.2h21.2c1.1,0,2.2-0.5,2.9-1.2c0.7-0.7,1.2-1.8,1.2-2.9
                        V22C220.2,20.9,219.7,19.8,218.9,19z M216.9,38.9c0,0.2-0.1,0.4-0.2,0.6c-0.2,0.2-0.4,0.2-0.6,0.2h-7v-7.2h-7.2v7.2h-7
                        c-0.2,0-0.4-0.1-0.6-0.2c-0.2-0.2-0.2-0.4-0.2-0.6V22c0-0.2,0.1-0.5,0.3-0.6l10.6-9.9c0.2-0.2,0.4-0.2,0.6-0.2
                        c0.2,0,0.4,0.1,0.6,0.2l10.6,9.9v0c0.2,0.2,0.3,0.4,0.3,0.6L216.9,38.9L216.9,38.9z"/>
                </g>

        img(v-bind="{src:settingData.val.mapUrl}",ref="mapLoader",style="display: none;")
        map-console-component(ref="mapConsoleComponent")

</template>
<style lang="scss">
    @import "../style/util";

    #MapComponent {
        flex: 1;
        overflow: hidden;
        svg {
            display: block;
            position: relative;
            z-index: $z-index_on;
            top: 0;
            left: 0;
        }
    }

</style>
<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import {Singleton} from "../ts/Singleton";
    import {SignIcon} from "../ts/SignIcon";
    import {FBC} from "../ts/FirebaseController";
    import MapConsoleComponent from "./MapConsoleComponent.vue";

    @Component({
        components: {
            MapConsoleComponent
        }
    })
    export default class MapComponent extends Vue {
        singleton = Singleton;
        settingData = FBC.settingData;
        $svg: HTMLElement;
        $group: SVGGElement;
        mapConsoleComponent: MapConsoleComponent;
        sVGMatrix: SVGMatrix;

        points = [];

        mounted() {
            this.$svg = this.$refs.svg;
            this.$group = this.$refs.root;
            this.sVGMatrix = this.$group.getCTM();
            this.mapConsoleComponent = <MapConsoleComponent>this.$refs.mapConsoleComponent;

            window.addEventListener("resize", () => this.resize());

            let loader = this.$refs.mapLoader;
            let image = this.$refs.mapImage;
            let ImageLoadFunc = () => {
//                let image = document.createElementNS('http://www.w3.org/2000/svg', 'image');
                image.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', loader.src);
                let scale = Math.min(Singleton.appWidth / loader.width, Singleton.appHeight / loader.height);
                let nx = loader.width * scale;
                let ny = loader.height * scale;
                image.setAttributeNS(null, "width", nx);
                image.setAttributeNS(null, "height", ny);
                image.setAttributeNS(null, "x", (Singleton.appWidth - nx) / 2);
                image.setAttributeNS(null, "y", (Singleton.appHeight - ny) / 2);
            };
            if (loader.addEventListener) {
                loader.addEventListener("load", ImageLoadFunc);
            } else if (image.attachEvent) {
                loader.attachEvent("onload", ImageLoadFunc);
            } else {
                loader.onload = ImageLoadFunc;
            }
            this.touchs();
        }

        private resize() {
//            this.$svg.setAttribute("viewBox", `0 0 ${Singleton.appWidth} ${Singleton.appHeight}`);
        }

        private touchs() {
            console.log("touchs");

            interface Log {
                l: number,
                r: number,
                p: any
            };

            let before: Log = {l: 1, r: 0, p: this.$svg.createSVGPoint()};
            let after: Log = {l: 1, r: 0, p: this.$svg.createSVGPoint()};
            let p1: SVGPoint;
            let p2: SVGPoint;
            let points = [];

            let onStart = (e) => {
                update(e, before);
//                p1 = after.p.matrixTransform(this.$group.node.getCTM().inverse());
//                this.$group.node.setAttribute("transform-origin", `${after.p.x}px ${after.p.y}px`);
//                p2 = after.p.matrixTransform(this.$group.node.getCTM().inverse());
//                this.sVGMatrix = this.sVGMatrix.translate(p2.x - p1.x, p2.y - p1.y);
//                this.$group.transform(`matrix(${this.sVGMatrix.a},${this.sVGMatrix.b},${this.sVGMatrix.c},${this.sVGMatrix.d},${this.sVGMatrix.e},${this.sVGMatrix.f})`);
//                let v = before;
//                before = after;
//                after = v;
                switch (Singleton.controllerOptions.mode) {
                    case "map":
                        break;
                    case "sign":
                        let icon: SignIcon = new SignIcon();
                        this.$group.appendChild(icon.$el);
                        icon.x = p1.x;
                        icon.y = p1.y;
                        break;
                }
            };

            let onMove = (e: any) => {
                update(e, after);
                switch (Singleton.controllerOptions.mode) {
                    case "map":
//                        console.log(after.p.x - before.p.x, after.p.y - before.p.y)
//                        p2 = after.p.matrixTransform(this.$group.node.getCTM().inverse());
//                        this.$group.node.setAttribute("transform-origin", `${p2.x}px ${p2.y}px`);
                        let beforeW = Singleton.appWidth * this.sVGMatrix.a;
                        let beforeH = Singleton.appHeight * this.sVGMatrix.a;
                        let xp = p1.x / beforeW;
                        let yp = p1.y / beforeH;
                        this.sVGMatrix.a *= after.l / before.l;
                        this.sVGMatrix.d = this.sVGMatrix.a;
                        let afterW = Singleton.appWidth * this.sVGMatrix.a;
                        let afterH = Singleton.appHeight * this.sVGMatrix.a;

                        this.sVGMatrix = this.sVGMatrix.translate(
                            (after.p.x - before.p.x) / this.sVGMatrix.a - ((afterW - beforeW) * xp)
                            , (after.p.y - before.p.y) / this.sVGMatrix.a - ((afterH - beforeH) * yp)
                        );

//                        this.sVGMatrix = this.sVGMatrix.rotate((after.r - before.r) * 180 / Math.PI);
                        this.$group.setAttribute("transform", `matrix(${this.sVGMatrix.a},${this.sVGMatrix.b},${this.sVGMatrix.c},${this.sVGMatrix.d},${this.sVGMatrix.e},${this.sVGMatrix.f})`);
//                        this.points[0].attr({
//                            cx: p1.x
//                            , cy: p1.y
//                        });
                        break;
                    case "sign":
                        points.push({x: p1.x, y: p1.y});
//                        this.points.push(
//                            this.$group
//                                .circle(p1.x, p1.y, 10)
//                                .attr({
//                                    fill: "yellow",
//                                }));
                        break;
                }
                let v = before;
                before = after;
                after = v;
            };

            let onEnd = (e: any) => {
                switch (Singleton.controllerOptions.mode) {
                    case "map":
                        break;
                    case "sign":
                        let icon: SignIcon = new SignIcon();
                        this.$group.appendChild(icon.$el);
                        icon.x = p1.x;
                        icon.y = p1.y;

                        this.mapConsoleComponent.show(
                            [
                                {label: "All", value: "a"}
                                , {label: "Team", value: "b"}
                                , {label: "Platoon", value: "c"}
                            ],
                            [
                                {label: "Enemy!", value: "a"}
                                , {label: "Enemy down!", value: "b"}
                                , {label: "Im here", value: "c"}
                                , {label: "Clear!", value: "d"}
                            ]
                            , p1.x
                            , p1.y
                        );
                        break;
                }
            };

            let update = (e: any, obj: Log) => {
                switch (e.touches.length) {
                    case 1:
                        obj.p.x = e.touches[0].clientX;
                        obj.p.y = e.touches[0].clientY;
                        break;
                    default:
                        obj.p.x = (e.touches[0].clientX + e.touches[1].clientX) / 2;
                        obj.p.y = (e.touches[0].clientY + e.touches[1].clientY) / 2;
                        let xx = e.touches[0].clientX - e.touches[1].clientX;
                        let yy = e.touches[0].clientY - e.touches[1].clientY;
                        obj.l = Math.sqrt(xx * xx + yy * yy);
                        obj.r = Math.atan2(yy, xx);
                        break;
                }
                p1 = obj.p.matrixTransform(this.$group.getCTM().inverse());
            };

            this.$svg.addEventListener("touchstart", onStart);
            this.$svg.addEventListener("touchmove", onMove);
            this.$svg.addEventListener("touchend", onEnd);
        }
    }
</script>