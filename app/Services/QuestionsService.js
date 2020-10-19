import { ProxyState } from "../AppState.js";
import Questions from "../Models/Questions.js";

class QuestionsService {
  addValue() {
    ProxyState.questions = [...ProxyState.questions, new Questions({ questions: Math.random() })]
  }
}

export const questionsService = new QuestionsService();

