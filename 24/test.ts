/*
    * interface reopen:
*/

/*
type buttons = {
    up: string,
    right: string;
}

type last = buttons & {
    down: string,
    left: string;
}
*/

// [1] Home Page
interface Settings {
    readonly theme: Boolean;        // [readonly] and [?][optional operator]
    font: string
};

// [2] Articles page
interface Settings {
    sidebar?: boolean               // [readonly] and [?][optional operator]
};

// [3] Contact page
interface Settings {
    external: boolean
};

let userSettings: Settings = {
    theme: true,                    // [readonly]  =>> assigned first time only
    font: "Open Sans",
    sidebar: false,
    external: true
};
