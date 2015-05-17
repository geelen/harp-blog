import React from 'react'
import Router from 'react-router'
import routes from './routes'

let mainElem = document.querySelector('main')
Router.run(routes, Router.HistoryLocation, (Root) => {
  if (navigator.userAgent.match(/phantomjs/i)) {
    mainElem.innerHTML = React.renderToString(React.createElement(Root))
  } else {
    React.render(React.createElement(Root), mainElem)
  }
})

console.log("Main rendered in " + Math.round(performance.now()) / 1000 + "s")
