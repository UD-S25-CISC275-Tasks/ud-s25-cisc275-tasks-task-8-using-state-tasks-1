import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [revealed, setVisible] = useState<boolean>(false);

    function changeVisibility(): void {
        setVisible(!revealed);
    }

    return (
        <div>
            <Button onClick={changeVisibility}>{"Reveal Answer"}</Button>
            {revealed && <div>42</div>}
        </div>
    );
}
