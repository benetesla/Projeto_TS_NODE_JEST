/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
import { EChoicesBoil } from "enum/choices-boilerplate-enum";
import { Error } from "enum/error.enum";
import fs from 'fs';
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
            if (!foldername) {
                return Error.ERROR_NULL
            }
            if (/[^a-z0-9]/i.test(foldername)) {
                return Error.ERROR_SPACE
            }
            if (foldername === "Tesla_CLI_Test" || foldername === "projeto_cli") {
                return Error.ERROR_RESERVED
            }
            try {
                const dir = `${process.cwd()}/${foldername}`;
                if (fs.existsSync(dir)) {
                    return Error.ERROR_FOLDER_EXISTS
                }
            } catch (err) {
                console.log(err)
            }

            return true;
        }

    }
]