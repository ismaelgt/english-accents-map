import ReactGA from 'react-ga'

export function sendPlayVideoEvent (id) {
  ReactGA.event({ category: 'Video', action: 'Play', label: id })
}
