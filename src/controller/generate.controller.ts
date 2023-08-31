/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
import { EChoicesBoil } from "enum/choices-boilerplate-enum";
import { Error } from "enum/error.enum";
import { IAnswers } from "interfaces/answers.interface";
class GenerateController {
    public gen(answers: IAnswers) {
        try {
            switch (answers.tech) {
                case EChoicesBoil.JAVASCRIPT:
                    break;
                case EChoicesBoil.NODEJS:
                    break;
                case EChoicesBoil.TYPESCRIPT:
                    break;
                case EChoicesBoil.PYTHON:
                    break;
                case EChoicesBoil.JAVA:
                    break;
                case EChoicesBoil.CPP:
                    break;
                case EChoicesBoil.SASS:
                    break;
                case EChoicesBoil.Tawin:
                    break;
                default:
                    break;

            }
        } catch (error) {
            console.log(Error.GENERATE_ERROR + error);
        }
    }
    
}
export const gen = new GenerateController();