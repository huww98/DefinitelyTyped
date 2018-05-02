/// <reference path="./common.d.ts" />

declare namespace M {
    class Timepicker extends Component<TimepickerOptions> {
        /**
         * Get Instance
         */
        static getInstance(elem: Element): Timepicker;

        /**
         * If the picker is open.
         */
        isOpen: boolean;

        /**
         * The selected time.
         */
        time: string;

        /**
         * Open timepicker
         */
        open(): void;

        /**
         * Close timepicker
         */
        close(): void;

        /**
         * Show hours or minutes view on timepicker
         * @param view The name of the view you want to switch to, 'hours' or 'minutes'.
         */
        showView(view: "hours" | "minutes"): void;
    }

    interface TimepickerOptions {
        /**
         * Duration of the transition from/to the hours/minutes view.
         * @default 350
         */
        duration: number;

        /**
         * Specify a selector for a DOM element to render the calendar in, by default it will be placed before the input.
         */
        container: string;

        /**
         * Show the clear button in the Timepicker
         * @default false
         */
        showClearBtn: boolean;

        /**
         * Default time to set on the timepicker 'now' or '13:14'
         * @default 'now';
         */
        defaultTime: string;

        /**
         * Millisecond offset from the defaultTime.
         * @default 0
         */
        fromNow: number;

        /**
         * Internationalization options
         */
        i18n: Partial<InternationalizationOptions>;

        /**
         * Automatically close picker when minute is selected.
         * @default false;
         */
        autoClose: boolean;

        /**
         * Use 12 hour AM/PM clock instead of 24 hour clock.
         * @default true
         */
        twelveHour: boolean;

        /**
         * Vibrate device when dragging clock hand.
         * @default true
         */
        vibrate: boolean;
    }
}

interface JQuery {
    timepicker(method: keyof Pick<M.Timepicker, "open" | "close" | "destroy">): JQuery;
    timepicker(method: keyof Pick<M.Timepicker, "showView">, view: "hours" | "minutes"): JQuery;
    timepicker(options?: Partial<M.TimepickerOptions>): JQuery;
}
