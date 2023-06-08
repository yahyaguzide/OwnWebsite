import React from "react";

import { TerminalContainer, TerminalPrompt } from "./style";

function TypewriterText({ children, delay }) {
  const text = children;
  return (
    <div>
      <TerminalPrompt className="doNotAnimate">
        _<span>{">"}</span>
      </TerminalPrompt>
      <TerminalContainer>
        <div
          className="animate"
          style={{ "--steps": text.length, "--delay": delay + "s" }}
        >
          {text}
        </div>
      </TerminalContainer>
    </div>
  );
}

export default TypewriterText;
