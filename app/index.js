export default class App {
    #name;

    constructor(name) {
        this.#name = name;
    }

    toString() {
        return `App name:${this.#name}`;
    }
}
