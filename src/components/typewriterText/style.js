import styled from "styled-components";

export const TerminalPrompt = styled.div`
  display: inline-block;
  font-family: "inconsolata", monospace;
  font-size: 2em;
  margin-left: 1em;
  margin-right: 0.5em;
  overflow: hidden;
  color: #859900;

  span:last-child {
    color: #839496;
  }
`;

export const TerminalContainer = styled.div`
  display: inline-block;
  font-family: "inconsolata", monospace;
  font-size: 2em;

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes doNotAnimate {
    from {
      width: 100%;
      border-right: none;
    }
    to {
      width: 0%;
      border-right: none;
    }
  }

  @keyframes blinkingCursor {
    0%,
    49% {
      border-right: 0.1em solid black;
    }
    50%,
    100% {
      border-right: none;
    }
  }

  .animate {
    overflow: hidden;
    white-space: nowrap;
    width: 0;
    animation: typing 1s steps(var(--steps), end) forwards,
      blinkingCursor 1s infinite;
    animation-delay: var(--delay);
  }
`;
