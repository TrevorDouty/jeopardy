import { ProxyState } from "../AppState.js";
import Question from "../Models/Question.js";
import { api } from "./AxiosService.js";

class QuestionService {

  constructor() {
    this.getQuestion()
  }


  getQuestion() {
    api.get().then(res => {
      console.log(res.data[0], new Question(res.data[0]))
      ProxyState.question = (new Question(res.data[0]))
      // ProxyState.questions = res.data[0].questions
      // ProxyState.answers = res.data[0].answers
    }).catch(err => console.error(err))
  }
}

export const questionService = new QuestionService();

