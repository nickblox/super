export default class App {
    #name;

    constructor(name = 'App') {
        this.#name = name;
    }

    toString() {
        return `App name:${this.#name}`;
    }
}
