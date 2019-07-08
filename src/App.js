import React from 'react'

import * as Styled from './App.css.js'
import withData from './App.container.hoc.js'
import withState from './App.state.hoc.js'

const AppView = ({
  data,
  openIndex,
  handleToggle
}) => {
  return (
    <Styled.Container>
      <Styled.GlobalStyle />
      {
        data.faqs.map((faq, index) => (
          <Styled.Accordian key={index}>
            <Styled.Question>
              Q: {faq.question}
              <Styled.Toggler onClick={() => handleToggle(index)}>
                [+]
              </Styled.Toggler>
            </Styled.Question>
            <Styled.Answer isOpen={openIndex === index}>
              {faq.answer}
            </Styled.Answer>
          </Styled.Accordian>
        ))
      }
    </Styled.Container>
  )
}

export default withState(withData(AppView))
