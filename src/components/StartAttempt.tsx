import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [inProgress, setInProgress] = useState<boolean>(false);

    function startAttempt() {
        if (attemptsLeft > 0) {
            setInProgress(true);
            setAttemptsLeft(attemptsLeft - 1);
        }
    }

    function stopAttempt() {
        setInProgress(false);
    }

    function mulligan() {
        setAttemptsLeft(attemptsLeft + 1);
    }

    return (
        <div>
            <h3>Start Attempt</h3>
            <p>Attempts Left: {attemptsLeft}</p>
            <Button onClick={startAttempt} disabled={inProgress || attemptsLeft === 0}>
                Start Quiz
            </Button>
            <Button onClick={stopAttempt} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={inProgress}>
                Mulligan (Gain Attempt)
            </Button>
        </div>
    );
}
