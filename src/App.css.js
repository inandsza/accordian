import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: verdana;
  }
`

export const Container = styled.div`
  margin: 16px;
`

export const Accordian = styled.div`
  border-radius: 6px;
  margin: 0.5rem 1rem;
  color: blue;
  border: 1px solid grey;
  width: 80%;
  margin: 16px auto;
  max-width: 800px;
`

export const Question = styled.div`
  color: blue;
  border-bottom: 1px solid grey;
  background: #00bcd4;
  padding: 12px;
`

export const Answer = styled.div`
  color: #111;
  padding: 12px;
  display: none;

  ${p => p.isOpen && 'display: block'}
`

export const Toggler = styled.span`
  cursor: pointer;
  float: right;
`
