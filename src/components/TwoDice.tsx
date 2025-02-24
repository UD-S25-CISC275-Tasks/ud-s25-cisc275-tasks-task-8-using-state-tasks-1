import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [dice1, setDie1] = useState<number>(1);
    const [dice2, setDie2] = useState<number>(2);

    return (
        <div>
            <span data-testid="left-die">{dice1}</span>
            <span data-testid="right-die">{dice2}</span>
            <div>
                <Button
                    onClick={() => {
                        setDie1(d6());
                    }}
                >
                    Roll Left
                </Button>
                <Button
                    onClick={() => {
                        setDie2(d6());
                    }}
                >
                    Roll Right
                </Button>
            </div>
            <div>
                {dice1 === dice2 && dice1 === 1 && <div>Loser!</div>}
                {dice1 === dice2 && dice1 !== 1 && <div>Winner!</div>}
            </div>
        </div>
    );
}
