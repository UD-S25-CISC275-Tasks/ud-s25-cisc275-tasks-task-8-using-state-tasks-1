import { Question, QuestionType } from "./interfaces/question";

/**
 * Create a new blank question with the given `id`, `name`, and `type`.
 * The `body` and `expected` should be empty strings, the `options` should be an empty list,
 * the `points` should default to 1, and `published` should default to false.
 */
export function makeBlankQuestion(
    id: number,
    name: string,
    type: QuestionType,
): Question {
    return {
        id,
        name,
        type,
        body: "",
        expected: "",
        options: [],
        points: 1,
        published: false,
    };
}

/**
 * Consumes a question and a potential `answer`, and returns whether or not
 * the `answer` is correct. It should be equal to `expected`, ignoring capitalization
 * and trimming whitespace.
 */
export function isCorrect(question: Question, answer: string): boolean {
    return (
        question.expected.trim().toLowerCase() === answer.trim().toLowerCase()
    );
}

/**
 * Consumes a question and a potential `answer`, and returns whether or not
 * the `answer` is valid. For a `short_answer_question`, any answer is valid.
 * For a `multiple_choice_question`, the `answer` must be exactly one of the options.
 */
export function isValid(question: Question, answer: string): boolean {
    return (
        question.type === "short_answer_question" ||
        question.options.includes(answer)
    );
}

/**
 * Consumes a question and produces a string representation combining the
 * `id` and the first 10 characters of the `name`. Example:
 * - id: 9, name: "My First Question" → "9: My First Q"
 */
export function toShortForm(question: Question): string {
    return `${question.id}: ${question.name.slice(0, 10)}`;
}

/**
 * Produces a formatted string representation of the question:
 * - First line: `# Name`
 * - Second line: `Body`
 * - If `multiple_choice_question`, each option should be on its own line, prefixed with "- "
 */
export function toMarkdown(question: Question): string {
    let markdown = `# ${question.name}\n${question.body}`;
    if (question.type === "multiple_choice_question") {
        markdown +=
            "\n" + question.options.map((option) => `- ${option}`).join("\n");
    }
    return markdown;
}

/**
 * Returns a new version of the given question, except the name should now be `newName`.
 */
export function renameQuestion(question: Question, newName: string): Question {
    return { ...question, name: newName };
}

/**
 * Returns a new version of the given question, but toggles the `published` field.
 */
export function publishQuestion(question: Question): Question {
    return { ...question, published: !question.published };
}

/**
 * Creates a copy of a question with:
 * - A new id
 * - The name prefixed with "Copy of"
 * - `published` set to false
 */
export function duplicateQuestion(id: number, oldQuestion: Question): Question {
    return {
        ...oldQuestion,
        id,
        name: `Copy of ${oldQuestion.name}`,
        published: false,
    };
}

/**
 * Returns a new version of the given question, with `newOption` added to `options`.
 * A new copy of the `options` array must be created to maintain immutability.
 */
export function addOption(question: Question, newOption: string): Question {
    return { ...question, options: [...question.options, newOption] };
}

/**
 * Creates a new question that merges properties from two different questions:
 * - Uses `body`, `type`, `options`, and `expected` from `contentQuestion`
 * - Uses `points` from the second provided object
 * - `published` should always be false
 */
export function mergeQuestion(
    id: number,
    name: string,
    contentQuestion: Question,
    { points }: { points: number },
): Question {
    return { ...contentQuestion, id, name, points, published: false };
}