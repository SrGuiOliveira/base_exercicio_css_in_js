import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Formulario = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${colors.secondColor};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

export const BtnPesquisar = styled.button`
  background-color: ${colors.mainColor};
  border: 1px solid ${colors.mainColor};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${colors.secondColor};
  margin-left: 8px;
  cursor: pointer;
`
export const Campo = styled.input`
  padding: 0 16px;
  outline-color: ${colors.mainColor};
`
