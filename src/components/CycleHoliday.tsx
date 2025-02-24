import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎄" | "🎃" | "💌" | "🦃" | "🥮";

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎄");

    const HOLIDAYS_CHRONOLOGICAL: Record<Holiday, Holiday> = {
        "🎄": "💌",
        "💌": "🥮",
        "🥮": "🎃",
        "🎃": "🦃",
        "🦃": "🎄"
    };
    const HOLIDAYS_ALPHABETICAL: Record<Holiday, Holiday> = {
        "🎄": "🎃",
        "🎃": "🥮",
        "🥮": "🦃",
        "🦃": "💌",
        "💌": "🎄"
    };

    return (
        <div>
            <div>
                <Button
                    onClick={() => {
                        setHoliday(HOLIDAYS_CHRONOLOGICAL[holiday]);
                    }}
                >
                    Year
                </Button>
                <Button
                    onClick={() => {
                        setHoliday(HOLIDAYS_ALPHABETICAL[holiday]);
                    }}
                >
                    Alphabet
                </Button>
            </div>
            <div>Holiday: {holiday}</div>
        </div>
    );
}
