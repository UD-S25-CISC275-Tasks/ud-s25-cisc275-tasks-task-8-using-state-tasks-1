import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function Counter(): React.JSX.Element {
    const [num, setValue] = useState<number>(0);
    return (
        <span>
            <Button
                onClick={() => {
                    setValue(num + 1);
                }}
            >
                Add One
            </Button>
            to {num}.
        </span>
    );
}
