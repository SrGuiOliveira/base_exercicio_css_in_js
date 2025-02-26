import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const VagaLink = styled.a`
  border-color: ${colors.secondColor};
  background-color: ${colors.mainColor};
  color: ${colors.secondColor};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
`

export const Vaga = styled.li`
  border: 1px solid ${colors.mainColor};
  background-color: ${colors.secondColor};
  color: ${colors.mainColor};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: ${colors.mainColor};
    color: ${colors.secondColor};
  }

  &:hover ${VagaLink} {
    border-color: ${colors.mainColor};
    background-color: ${colors.secondColor};
    color: ${colors.mainColor};
  }
`

export const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`
