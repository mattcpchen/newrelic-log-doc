import React from 'react'
import { fetchPostError } from "./helpers";
import { Heading }  from "pcln-design-system";
import { CardHolder, OutlineButton } from './UIContainers'

const LogEventContainer = () => {
  const logPoiSearchError = () => {
    fetchPostError({
      message: 'logErr >> logPoiSearch',
      severity: 3,
      stack: `molecules/POISearch POISearch.js`,
    })
  }
  const logExpressDetailError = () => {
    fetchPostError({
      message: 'logErr >> ogExpressDetail',
      severity: 3,
      stack: `pages/ExpressDetail index.js`,
      lineno: 153,
    })
  }
  return (
    <CardHolder>
      <Heading.h3>Log Errors</Heading.h3>
      <OutlineButton btnColor='error' onClick={logPoiSearchError}>Log Error >> POI Search</OutlineButton>
      <OutlineButton btnColor='error' onClick={logExpressDetailError}>Log Error >> ExpressDetail</OutlineButton>
    </CardHolder>
  )
}

export default LogEventContainer;
