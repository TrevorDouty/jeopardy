import { ProxyState } from "../AppState.js";
import { questionService } from "../Services/QuestionService.js";
import Question from "../Models/Question.js"


//Private
function _draw() {
  let template = ''
  template = ProxyState.question.Template

  document.getElementById('question').innerHTML = template

}

//Public
export default class QuestionController {
  constructor() {
    ProxyState.on("question", _draw);
    _draw()
  }



}
