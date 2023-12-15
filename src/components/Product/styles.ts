import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  display: block;
  position: relative;
  border: 1px solid ${cores.rose};
  margin-bottom: 48px;
`
export const Titulo = styled.h2`
  display: inline-block;
  margin-top: 8px;
  margin-left: 7px;
  font-weight: 700;
  font-size: 18px;
`

export const ContainerTitulo = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Descricao = styled.p`
  margin: 16px 8px 20px 8px;
  font-weight: 400;
  font-size: 14px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Image = styled.img`
  width: 100%;
`
export const Button = styled.button`
  padding: 4px 6px;
  background-color: ${cores.rose};
  color: ${cores.branca};
  margin-bottom: 8px;
  margin-left: 8px;
  border: none;
`
