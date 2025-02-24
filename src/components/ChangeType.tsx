import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");

    function toggleType(): void {
        setType(
            type === "multiple_choice_question" ?
                "short_answer_question"
            :   "multiple_choice_question"
        );
    }
    return (
        <div>
            <Button onClick={toggleType}>Change Type</Button>
            {type === "multiple_choice_question" ?
                <div>Multiple Choice</div>
            :   <div>Short Answer</div>}
        </div>
    );
}
