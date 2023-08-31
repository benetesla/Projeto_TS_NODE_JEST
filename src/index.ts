/* eslint-disable import/no-unresolved */
/* eslint-disable prettier/prettier */
import { Genfile } from 'controller/generate.controller';
import inquirer from 'inquirer';
// eslint-disable-next-line import/no-unresolved
import { IAnswers } from 'interfaces/answers.interface';
import { question } from 'services/questions';


class Init {
    constructor() {
        inquirer.prompt(question).then((answers: IAnswers) => {
            Genfile.gen(answers)
        });
    }
}

new Init();
