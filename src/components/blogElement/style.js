import styled from 'styled-components'
import device from '../../utils/deviceSize'

export const blogContainer = styled.div`
  display: block;
  min-width: 10em;
  min-height: 100px;
  max-height: 100px;
  margin-bottom: 1em;
  padding: 1em;
  border-radius: 1em;
  border: 1px solid #bacdd8;
  overflow: hidden;

  transition: max-height 1s ease-in-out;

  :hover {
    background-color: #fcfcfc;
    max-height: 15em;
  }
`
export const blogTitle = styled.div`
  text-align: left;
  display: inline-block;
  padding-left: 1em;
  font-family: Roboto, Courier, monospace;

  p {
    font-weight: bold;
  }
`
export const blogImage = styled.div`
  display: inline;

  img {
    border-radius: 1em;
  }
`

export const tagContainer = styled.div`
  display: block;
`
export const tag = styled.div`
  font-family: Roboto, Courier, monospace;
  display: inline;
  padding-left: 1em;
  padding-right: 1em;
  color: #96c3ff;
  background-color: white;
  border-radius: 2em;
  border: 1px solid #bacdd8;
  margin-right: 0.2em;

  :hover {
    background-color: #96c3ff;
    color: #ffffff;
  }
`

export const blogText = styled.div`
  padding-top: 1em;
  padding-bottom: 1em;
  width: 100%;
  font-family: Roboto, Courier, monospace;
`
