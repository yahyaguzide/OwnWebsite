import styled from "styled-components";
import device from "../../utils/deviceSize";

export const InfoBar = styled.div`
  width: 100%;
  height: auto;
  background-color: grey;
  padding-top: 20px;
  left: 0;

  @media ${device.laptop} {
    padding: 10px;
    position: absolute;
    margin-bottom: 0;
    bottom: 0;
    overflow: hidden;
  }
`;
