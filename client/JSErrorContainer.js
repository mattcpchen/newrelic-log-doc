import React from 'react'
import {Button, Heading} from 'pcln-design-system'
import { CardHolder } from './UIContainers'

const SolidButton = ({onClick, children}) => (
  <Button
    m={2}
    width='120px'
    style={{borderRadius: '5px'}}
    color='primary'
    onClick={onClick}
  >{children}</Button>
)

const JSErrorContainer = () => {
  const logError = (errValue) => {
    newrelic.noticeError(errValue);
  }
  const logRealError = (errValue) => {
    throw new Error(errValue);
  }
  return (
    <CardHolder>
      <Heading.h3>JS Errors</Heading.h3>
      <SolidButton onClick={logError.bind(null, 'Notice Error 01')}>NoticeErr 01</SolidButton>
      <SolidButton onClick={logError.bind(null, 'Notice Error 02')}>NoticeErr 02</SolidButton>
      <SolidButton onClick={logError.bind(null, 'Notice Error 03')}>NoticeErr 03</SolidButton>
      <SolidButton onClick={logRealError.bind(null, 'JS Error 01')}>JS Error 01</SolidButton>
      <SolidButton onClick={logRealError.bind(null, 'JS Error 02')}>JS Error 02</SolidButton>
      <SolidButton onClick={logRealError.bind(null, 'JS Error 03')}>JS Error 03</SolidButton>
    </CardHolder>
  )
}

export default JSErrorContainer
