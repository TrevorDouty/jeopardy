export default class Question {
    constructor(data) {
        this.question = data.question
        this.value = data.value
        this.answer = data.answer
    }

    get Template() {

        return /*html*/`
        
        <div class="card m-auto">
            ${this.question}
        </div>
    <button>Show answer</button>
        
        `
    }
}
