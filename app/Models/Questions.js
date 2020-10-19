export default class Questions {
    constructor(data) {
        this.question = data.question
    }

    get Template() {

        return /*html*/`
        <div class="card p-2 value">
            ${this.question}
        </div>
        `
    }
}
