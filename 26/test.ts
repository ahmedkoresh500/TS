/*
    * [interface]: final discussion:

        [1] [interface] vs [alias type]
            =>> [interface]     =>> can reopen
            =>> [alias type]    =>> can't reopen
        [2] take a look on [HTMLElement interface]
*/

/*
// [1] Home page
interface Settings {
    readonly theme: boolean,
    font: string
};

// [2] Articles page
interface Settings {
    sidebar: boolean
};

// [3] Contact page
interface Settings {
    external: boolean
};
*/

// lesson [12] [13]: [alias type]       =>> [=] is a must
type Settings = {
    readonly theme: boolean;
    font?: string;
    sidebar: boolean;
    external: boolean;
};

// let el = document.getElementById("id") as HTMLElement;   // dataType [assertion type]
// let el = <HTMLElement> document.getElementById("id");    // dataType [assertion type]

let userSettings: Settings = {
    theme: true,                    // [readonly]  =>> assigned first time only
    font: "Open Sans",
    sidebar: false,
    external: true
};

console.log(userSettings.external);
