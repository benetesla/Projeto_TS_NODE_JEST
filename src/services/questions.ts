// eslint-disable-next-line import/no-unresolved
import { EChoicesBoil } from "enum/choices-boilerplate-enum";

/* eslint-disable prettier/prettier */
export const question = [
    {
        type: 'list',
        name: 'tech',
        message: 'What is your favorite programming language?',
        choices: [EChoicesBoil.JAVA, EChoicesBoil.TYPESCRIPT, EChoicesBoil.PYTHON, EChoicesBoil.JAVASCRIPT],
        default: 'Javascript',
    },
    {
        type: 'input',
        name: 'techName',
        message: 'What is your favorite programming language?',
        validate(foldername: string) {
            if (foldername.length) return true;
            return 'Please enter a folder name';

        }
    }
]