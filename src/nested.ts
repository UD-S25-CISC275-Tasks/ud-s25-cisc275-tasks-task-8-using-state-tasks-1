import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    let publishedQuestions: Question[] = [];
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].published) {
            publishedQuestions.push(questions[i]);
        }
    }
    return publishedQuestions;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    let newList = questions.filter(
        (q) => q.body !== "" || q.expected !== "" || q.options.length > 0,
    );

    return newList;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number,
): Question | null {
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].id == id) {
            return questions[i];
        }
    }
    return null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    let newArr: Question[] = [];
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].id !== id) {
            newArr.push(questions[i]);
        }
    }
    return newArr;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    let newStr: string[] = [];
    for (let i = 0; i < questions.length; i++) {
        newStr.push(questions[i].name);
    }
    return newStr;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    let total: number = 0;
    for (let i = 0; i < questions.length; i++) {
        total += questions[i].points;
    }
    return total;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    let count: number = 0;
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].published) {
            count += questions[i].points;
        }
    }
    return count;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const header = "id,name,options,points,published"; // First row: header
    const rows = questions.map(
        (q) =>
            `${q.id},${q.name},${q.options.length},${q.points},${q.published}`,
    );
    return [header, ...rows].join("\n");
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    let ansList: Answer[] = [];
    for (let i = 0; i < questions.length; i++) {
        ansList.push({
            questionId: questions[i].id,
            text: "",
            submitted: false,
            correct: false,
        });
    }
    return ansList;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    let quesList: Question[] = [];
    for (let i = 0; i < questions.length; i++) {
        quesList.push({ ...questions[i], published: true });
    }
    return quesList;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].type !== questions[0].type) {
            return false;
        }
    }
    return true;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType,
): Question[] {
    let emptyQues: Question = makeBlankQuestion(id, name, type);
    let newArray: Question[] = [];
    for (let i = 0; i < questions.length; i++) {
        newArray.push({ ...questions[i] });
    }
    newArray.push(emptyQues);

    return newArray;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string,
): Question[] {
    let empList: Question[] = [];

    for (let i = 0; i < questions.length; i++) {
        if (questions[i].id == targetId) {
            empList.push({ ...questions[i], name: newName }); //IF CONDITION MATCHES ADD IT TO THE LIST AND CHANGE THE NAME
        } else {
            empList.push({ ...questions[i] }); //IF IT DOES NOT MATCH JUST COPY IT NORMALLY
        }
    }
    return empList;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType,
): Question[] {
    let eList: Question[] = [];

    for (let i = 0; i < questions.length; i++) {
        if (questions[i].id === targetId) {
            //check first conditiong
            let updatedQuestion = { ...questions[i], type: newQuestionType }; //local variable updated
            if (newQuestionType !== "multiple_choice_question") {
                //second conditiong
                updatedQuestion.options = [];
            }
            eList.push(updatedQuestion);
        } else {
            eList.push({ ...questions[i] }); //if nun matches just copy the normal list
        }
    }
    return eList;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string,
): Question[] {
    let eArray: Question[] = [];
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].id == targetId) {
            let newQues = {
                ...questions[i],
                options: [...questions[i].options],
            };
            if (targetOptionIndex == -1) {
                newQues.options.push(newOption);
            } else if (
                targetOptionIndex >= 0 &&
                targetOptionIndex < newQues.options.length
            ) {
                newQues.options[targetOptionIndex] = newOption;
            }
            eArray.push(newQues);
        } else {
            eArray.push(questions[i]);
        }
    }
    return eArray;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number,
): Question[] {
    let emptyArray: Question[] = [];

    for (let i = 0; i < questions.length; i++) {
        emptyArray.push({ ...questions[i] });
        if (questions[i].id == targetId) {
            let dup = duplicateQuestion(newId, questions[i]);
            emptyArray.push(dup);
        }
    }
    return emptyArray;
}
