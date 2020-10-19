import { ProxyState } from "../AppState.js";
import Questions from "../Models/Questions.js";
import { api } from "./AxiosService.js";

class QuestionsService {

  constructor() {
    this.getQuestion()
  }

  answers() {
    if (ProxyState.answers) {
      api.get(ProxyState.answers).then(res => {

        ProxyState.answers = res.data.answer
        console.log(res.data)
        ProxyState.questions = res.data.question.map(rawQuestion => new (rawQuestion))
      }).catch(err => console.error(err))
    }
  }
  getQuestion() {
    api.get().then(res => {
      console.log(res.data[0], new Questions(res.data[0]))
      ProxyState.questions.push(new Questions(res.data[0]))
      // ProxyState.questions = res.data[0].questions
      // ProxyState.answers = res.data[0].answers
    }).catch(err => console.error(err))
  }
}

export const questionsService = new QuestionsService();

