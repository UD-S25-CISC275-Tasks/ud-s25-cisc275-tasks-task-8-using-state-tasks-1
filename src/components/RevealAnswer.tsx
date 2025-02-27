import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <div>
            <h3>Reveal Answer</h3>
            <Button onClick={() => setVisible(true)}>Show Answer</Button>
            {visible && <p>42</p>}
        </div>
    );
}
