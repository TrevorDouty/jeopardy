import { ProxyState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsService.js";


//Private
function _draw() {

}

//Public
export default class QuestionsController {
  constructor() {
    ProxyState.on("questions", _draw);
    _draw()
  }



}
