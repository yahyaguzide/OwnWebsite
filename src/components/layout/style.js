import styled from 'styled-components'
import device from '../../utils/deviceSize'

export const sidePanelContainer = styled.div`
  visibility: hidden;
  opacity: 0;
  padding-right: 2em;
  padding-left: 2em;
  transition: opacity 1s ease, visibility 1s;

  @media ${device.laptop} {
    visibility: visible;
    opacity: 1;
  }
`

export const layoutContainer = styled.div`
  transition: width 4s ease;
  @media ${device.laptop} {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
`
