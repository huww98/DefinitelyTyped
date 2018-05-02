/// <reference path="./common.d.ts" />

declare namespace M {
    class Slider extends Component<SliderOptions> {
        /**
         * ID of the dropdown element
         */
        el: Element;

        /**
         * ID of the dropdown element
         */
        options: SliderOptions;

        /**
         * Index of current slide
         */
        activeIndex: number;

        /**
         * Pause slider autoslide
         */
        pause(): void;

        /**
         * Start slider autoslide
         */
        start(): void;

        /**
         * Move to next slider
         */
        next(): void;

        /**
         * Move to prev slider
         */
        prev(): void;
    }

    interface SliderOptions {
        /**
         * Callback function called when Tap Target is opened
         * @default Set to false to hide slide indicators
         */
        indicators: boolean;

        /**
         * Set height of slider
         * @default 400
         */
        height: number;

        /**
         * Set the duration of the transition animation in ms
         * @default 500
         */
        duration: number;

        /**
         * Set the duration between transitions in ms
         * @default 6000
         */
        interval: number;
    }
}
