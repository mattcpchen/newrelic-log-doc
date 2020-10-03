import React from 'react'
import { fetchPostEvent } from "./helpers";
import { Heading } from "pcln-design-system";
import { CardHolder, OutlineButton } from './UIContainers'

const LogEventContainer = () => {
  const logLandingPage = () => {
    fetchPostEvent({
      event: 'log event',
      category: 'Hotel+Landing',
      action: 'page-rendered',
      label: 'Hotel Landing Rendered',
    })
  }
  const logPricePinEvent = () => {
    fetchPostEvent({
      event: 'log event',
      category: 'hotel+list+mapview',
      action: 'button_click',
      label: 'price_pin'
    })
  }
  const logPpnPhoneNumber = () => {
    fetchPostEvent({
      event: 'log event',
      category: 'Hotel+Details',
      action: 'phone-sales-Above-Room-load',
      label: '646-123-4567'
    })
  }

  return (
    <CardHolder>
      <Heading.h3>Log Events</Heading.h3>
      <OutlineButton btnColor='secondary' onClick={logLandingPage}>Log Event >> Landing Page</OutlineButton>
      <OutlineButton btnColor='secondary' onClick={logPricePinEvent}>Log Event >> Price Pin</OutlineButton>
      <OutlineButton btnColor='secondary' onClick={logPpnPhoneNumber}>Log Event >> PPN PhoneNumber</OutlineButton>
    </CardHolder>
  )
}

export default LogEventContainer;
