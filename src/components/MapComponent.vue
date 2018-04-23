<template lang="pug">
    #MapComponent
        #MapComponent__body
            svg#MapComponent__map
            svg#MapComponent__draw

</template>
<style lang="scss">
    @import "../style/util";

    #MapComponent {
        flex: 1;
        overflow: hidden;
        &__body {
            position: relative;
            z-index: $z-index_on;
        }
        svg {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
        }
    }

</style>
<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import Snap = require("snapsvg");
    import {Singleton} from "../ts/Singleton";

    @Component
    export default class MapComponent extends Vue {
        $body: HTMLElement;
        mapPaper: Snap.Paper;
        drawPaper: Snap.Paper;
        matrix: Snap.Matrix = new Snap.Matrix();

        points = [];

        mounted() {
            this.$body = document.getElementById("MapComponent__body");
            this.mapPaper = Snap("#MapComponent__map");
            this.drawPaper = Snap("#MapComponent__draw");

            window.addEventListener("resize", () => this.resize());
            this.touchs();

            this.points.push(
                this.drawPaper
                    .circle(10, 10, 10)
                    .attr({
                        fill: "red",
                    }));
            this.points.push(
                this.drawPaper
                    .circle(10, 10, 10)
                    .attr({
                        fill: "blue",
                    }));
            this.points.push(
                this.drawPaper
                    .circle(10, 10, 10)
                    .attr({
                        fill: "yellow",
                    }));

            Snap.load("./img/dummy-map.svg", (mapImg) => {
                this.mapPaper.append(mapImg);
                let box: Snap.BBox = mapImg.node.getBBox();
                let scale = Math.min(Singleton.appWidth / box.width, Singleton.appHeight / box.height);
                let nx = box.width * scale;
                let ny = box.height * scale;
                mapImg.node.setAttribute("width", nx);
                mapImg.node.setAttribute("height", ny);
                mapImg.node.setAttribute("x", (Singleton.appWidth - nx) / 2);
                mapImg.node.setAttribute("y", (Singleton.appHeight - ny) / 2);
            });
        }

        private resize() {
            this.mapPaper.attr({viewBox: "0 0 " + Singleton.appWidth + " " + Singleton.appHeight});
            this.drawPaper.attr({viewBox: "0 0 " + Singleton.appWidth + " " + Singleton.appHeight});
        }

        private touchs() {
            let beforeX: number
                , beforeY: number
                , beforeL: number
                , afterX: number
                , afterY: number
                , afterL: number
            ;

            let onStart = (e) => {
                console.log(e.touches.length)
                switch (e.touches.length) {
                    case 0:
                        break;
                    case 1:
                        beforeX = e.touches[0].clientX;
                        beforeY = e.touches[0].clientY;
                        beforeL = afterL = 1;
                        break;
                    default:
                        beforeX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
                        beforeY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
                        beforeL = Math.sqrt(
                            Math.pow(e.touches[0].clientX - e.touches[1].clientX, 2)
                            + Math.pow(e.touches[0].clientY - e.touches[1].clientY, 2));
                        break;
                }
            };
            let onMove = (e) => {
                switch (e.touches.length) {
                    case 1:
                        afterX = e.touches[0].clientX;
                        afterY = e.touches[0].clientY;
                        break;
                    default:
                        afterX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
                        afterY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
                        afterL = Math.sqrt(
                            Math.pow(e.touches[0].clientX - e.touches[1].clientX, 2)
                            + Math.pow(e.touches[0].clientY - e.touches[1].clientY, 2));
                        break;
                }
                this.matrix.e -= afterX - beforeX;
                this.matrix.f -= afterY - beforeY;
                this.matrix.a /= afterL / beforeL;
                this.matrix.d = this.matrix.a;
                this.$body.style.transform = `matrix(${1 / this.matrix.a},${this.matrix.b},${this.matrix.c},${1 / this.matrix.d},${this.matrix.e * -1}, ${this.matrix.f * -1})`;
                this.points[0].attr({
                    cx: this.matrix.x(beforeX, beforeY)
                    , cy: this.matrix.y(beforeX, beforeY)
                });
                beforeX = afterX;
                beforeY = afterY;
                beforeL = afterL;
            };

            let onEnd = onStart;

            this.$el.addEventListener("touchstart", onStart);
            this.$el.addEventListener("touchmove", onMove);
            this.$el.addEventListener("touchend", onEnd);
        }
    }
</script>