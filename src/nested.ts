import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { makeBlankQuestion, duplicateQuestion } from "./objects";

/**
 * Returns only the published questions from the given array.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    return questions.filter((question) => question.published);
}

/**
 * Returns only non-empty questions, where `body` and `expected`
 * are not empty strings, and `options` is not an empty array.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    return questions.filter(
        (question) =>
            question.body.trim() !== "" ||
            question.expected.trim() !== "" ||
            question.options.length > 0
    );
}

/**
 * Finds a question by `id` and returns it; if not found, return `null`.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    return questions.find((question) => question.id === id) || null;
}

/**
 * Returns a new array without the question that matches the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    return questions.filter((question) => question.id !== id);
}

/**
 * Returns an array of only the `name` properties from the given questions.
 */
export function getNames(questions: Question[]): string[] {
    return questions.map((question) => question.name);
}

/**
 * Returns the sum of all question points.
 */
export function sumPoints(questions: Question[]): number {
    return questions.reduce((total, question) => total + question.points, 0);
}

/**
 * Returns the sum of points for only published questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    return questions
        .filter((question) => question.published)
        .reduce((total, question) => total + question.points, 0);
}

/**
 * Converts an array of questions into a CSV (Comma-Separated Values) string format.
 */
export function toCSV(questions: Question[]): string {
    const headers = "id,name,options,points,published";
    const rows = questions
        .map(
            (q) =>
                `${q.id},${q.name},${q.options.length},${q.points},${q.published}`
        )
        .join("\n");
    return `${headers}\n${rows}`;
}

/**
 * Creates an array of Answers corresponding to the given Questions.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    return questions.map((question) => ({
        questionId: question.id,
        text: "",
        submitted: false,
        correct: false
    }));
}

/**
 * Returns a new array where all questions are now published.
 */
export function publishAll(questions: Question[]): Question[] {
    return questions.map((question) => ({ ...question, published: true }));
}

/**
 * Checks if all questions in the array are the same type.
 */
export function sameType(questions: Question[]): boolean {
    return questions.every(
        (question) => question.type === questions[0]?.type
    );
}

/**
 * Returns a new array with a blank question added to the end.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    return [...questions, makeBlankQuestion(id, name, type)];
}

/**
 * Returns a new array where the question with `targetId` has its name changed to `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    return questions.map((question) =>
        question.id === targetId ? { ...question, name: newName } : question
    );
}

/**
 * Changes the type of a question and resets `options` if necessary.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    return questions.map((question) =>
        question.id === targetId
            ? {
                  ...question,
                  type: newQuestionType,
                  options:
                      newQuestionType !== "multiple_choice_question"
                          ? []
                          : question.options
              }
            : question
    );
}

/**
 * Updates the options of a question by adding/replacing an option at a specified index.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    return questions.map((question) =>
        question.id === targetId
            ? {
                  ...question,
                  options:
                      targetOptionIndex === -1
                          ? [...question.options, newOption]
                          : question.options.map((opt, index) =>
                                index === targetOptionIndex ? newOption : opt
                            )
              }
            : question
    );
}

/**
 * Duplicates a question with a new ID and inserts it directly after the original question.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const index = questions.findIndex((q) => q.id === targetId);
    if (index === -1) return questions; // If not found, return the original array

    const duplicatedQuestion = duplicateQuestion(newId, questions[index]);
    return [
        ...questions.slice(0, index + 1),
        duplicatedQuestion,
        ...questions.slice(index + 1)
    ];
}