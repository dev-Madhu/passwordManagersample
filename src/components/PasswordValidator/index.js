// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  PasswordManager,
  PasswordTitle,
  Description,
  InputPassword,
  ErrorMessage,
} from './styledComponents'

const PasswordValidator = () => {
  const [userInput, setUserInput] = useState('')

  const onChangeUserName = event => {
    setUserInput(event.target.value)
  }

  const errorMsg =
    userInput.length <= 8 ? 'Your password must be at least 8 characters' : null
  return (
    <MainContainer>
      <PasswordManager>
        <PasswordTitle>Password Validator</PasswordTitle>
        <Description>Check how strong and secure is your password</Description>
        <InputPassword
          type="password"
          value={userInput}
          onChange={onChangeUserName}
        />
        <ErrorMessage>{errorMsg}</ErrorMessage>
      </PasswordManager>
    </MainContainer>
  )
}
export default PasswordValidator
