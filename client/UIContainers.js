import React from 'react'
import styled from 'styled-components'
import {Box, Text, Button, Card, Label, Checkbox, Link, Flex} from 'pcln-design-system'
import { List, Chart } from 'pcln-icons'

const StyledLink = styled(Link)`
  display: flex
  width: 450px;
`

const InfoCheckHolder = styled(Box)`
  display: block;
  position: relative;
  width: 450px;
  margin: 0 auto;
`

export const InfoCheckBoxes = ({checkBoxes, checkedBox, onHandleChange}) => (
  <InfoCheckHolder>
    {checkBoxes && checkBoxes.map(checkBox => (
      <Label fontSize={1} key={checkBox.type}>
        <Checkbox
          id={checkBox.content}
          checked={checkedBox===checkBox.type}
          onChange={() => onHandleChange(checkBox.type)}
        />
        {checkBox.content}
      </Label>
    ))}
  </InfoCheckHolder>
)

export const DocLinks = ({docLinks}) => (
  <Box>
    <StyledLink target='_blank' href='https://one.newrelic.com/'>
      <Chart
        color='blue'
        title='Airplane Icon'
        titleId='unique-airplane-title-id'
        desc='Airplane Icon description'
        descId='unique-airplane-desc-id'
        mr={1}
      />
      <Text>https://one.newrelic.com/</Text>
    </StyledLink>
    {docLinks.map(docLink => (
      <StyledLink target='_blank' key={docLink.content} href={docLink.href}>
        <List
          color='blue'
          title='Airplane Icon'
          titleId='unique-airplane-title-id'
          desc='Airplane Icon description'
          descId='unique-airplane-desc-id'
          mr={1}
        />
        {docLink.content}
      </StyledLink>
    ))}
  </Box>
)

export const CardHolder = styled(Card)`
  display: block;
  position: relative;
  width: 450px;
  margin: 20px auto;
  padding: 10px;
`

const StyledButton = styled(Button)`
  border-radius: 5px;
`
export const OutlineButton = ({btnColor, onClick, children}) => (
  <StyledButton
    variation="outline"
    m={2}
    color={btnColor}
    onClick={onClick}
  >{children}</StyledButton>
)
