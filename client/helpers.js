

export const fetchPostEvent = ({ event, category, action, label }) => {
  fetchPost({event, message: category, action, label});
}
export const fetchPostError = ({message, severity, stack, lineno}) => {
  fetchPost({message, severity, stack, lineno});
}
const fetchPost = (props) => {
  const timestamp =Math.round((new Date()).getTime() / 1000);
  const data = {
    timestamp,
    logtype: 'accesslogs',
    service: 'pcln-logging-service',
    hostname: 'pcln.relax.com',
    ...props,
  }
  fetch('https://log-api.newrelic.com/log/v1', {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      'Content-Type': "application/json",
      'X-License-Key': '01520a55d5bfa6f20f1c53a50b9eef2b99f9NRAL',
      'Accept': '*/*',
      'Content-Length': 133
    },
    credentials: "same-origin"
  }).then(function(response) {
    // console.log(response.status)     //=> number 100–599
    // console.log(response.statusText) //=> String
    // console.log(response.headers)    //=> Headers
    // console.log(response.url)       //=> String
    return response.text()
  }, function(error) {
    error.message //=> String
  })
}
