import React, { useState } from 'react'
import { Flex, Divider, Text, Link } from 'pcln-design-system'
import { DocLinks, InfoCheckBoxes } from './UIContainers'
import JSErrorContainer from './JSErrorContainer'
import LogEventContainer from './LogEventContainer'
import LogErrorContainer from './LogErrorContainer'


const App = () => {
  const [displayBox, setDisplayBox] = useState('jsError')
  const logSections = [{
    type: 'jsError',
    content: 'pcln/apm',
  }, {
    type: 'logEvent',
    content: 'pcln/analytics - PCLNAnalytics.logEvent',
  }, {
    type: 'logError',
    content: 'pcln/analytics - PCLNAnalytics.logError',
  }]
  const handleChange = (chooseType) => {
    setDisplayBox(chooseType)
  }
  return (
    <Flex flexDirection='column' alignItems='center' justifyContent='center'>
      <Text fontSize={4} bold>New Relic Logs</Text>
      <Divider width={'450px'} />
      <InfoCheckBoxes
        checkBoxes={logSections}
        checkedBox={displayBox}
        onHandleChange={handleChange}
      />
      {displayBox === 'jsError' && <JSErrorContainer />}
      {displayBox === 'logEvent' && <LogEventContainer />}
      {displayBox === 'logError' && <LogErrorContainer />}
      <DocLinks docLinks={[{
        content: 'New Relic JSError Docs',
        href: 'https://docs.newrelic.com/docs/browser/new-relic-browser/browser-pro-features/javascript-errors-page-detect-analyze-errors'
      }, {
        content: 'New Relic Log Docs',
        href: 'https://docs.newrelic.com/docs/logs/log-management/get-started/get-started-log-management'
      }]} />
    </Flex>
  )
}

export default App;
