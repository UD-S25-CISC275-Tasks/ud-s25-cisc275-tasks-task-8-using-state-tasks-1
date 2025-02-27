import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function Counter(): React.JSX.Element {
    const [value, setValue] = useState<number>(0);

    return (
        <div>
            <h3>Counter: {value}</h3>
            <Button onClick={() => setValue(value + 1)}>Increase</Button>
            <Button onClick={() => setValue(value - 1)}>Decrease</Button>
        </div>
    );
}
