// Style your elements here
import styled from 'styled-components/macro'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #24263c;
`
export const PasswordManager = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #475569;
  border-radius: 10px;
  padding: 40px;
  font-family: 'Roboto';
`

export const PasswordTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
  font-family:"Roboto"
  color: #edeeff;
  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`

export const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #edeeff;
  margin-top: 0px;
  margin-bottom: 30px;
`

export const InputPassword = styled.input`
  height: 40px;
  background-color: #edeeff;
  padding: 4px 8px;
  width: 100%;
  color: #000;
  outline: none;
  border: none;
`
export const ErrorMessage = styled.p`
  color: #ef4444;
  font-family: 'Roboto';
  font-size: 16px;
`
