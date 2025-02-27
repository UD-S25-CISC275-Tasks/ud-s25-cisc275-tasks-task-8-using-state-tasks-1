import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    const holidays = ["🎄 Christmas", "🎃 Halloween", "🎆 New Year", "🦃 Thanksgiving", "❤️ Valentine's Day"];
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    function nextHoliday(): void {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % holidays.length);
    }

    return (
        <div>
            <h3>Cycle Holiday</h3>
            <p>Current Holiday: {holidays[currentIndex]}</p>
            <Button onClick={nextHoliday}>Next Holiday</Button>
        </div>
    );
}
