export default class Questions {
    constructor(data) {
        this.question = data.question
        this.value = data.value
        this.answer = data.answer
    }

    get Template() {

        return /*html*/`
        <div class="card p-2 value">
            ${this.question}
        </div>
        `
    }
}
