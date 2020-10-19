import { ProxyState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsService.js";


//Private
function _draw() {

  let template = ProxyState.questions
  document.getElementById('questions').innerHTML = template

}

//Public
export default class QuestionsController {
  constructor() {
    ProxyState.on("questions", _draw);
    _draw()
  }
  answers() {
    questionsService.answers()
  }


}
