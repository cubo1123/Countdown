import React from 'react'
import './styles.scss'
import { setEnd } from 'actions'
import { connect } from 'react-redux'
import { TimeItem } from 'components'

class _App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      days: '',
      hours: '',
      minutes: '',
      seconds: ''
    }
  }

  componentWillMount () {
    this.props.setEnd(new Date('May 12, 2019 12:00:00').getTime())
    setInterval(this.tick.bind(this), 1000)
  }

  tick () {
    let t = this.props.end - new Date().getTime()
    if (t >= 0) {
      this.setState({ days: { measure: 'days', value: Math.floor(t / (1000 * 60 * 60 * 24)) } })
      this.setState({ hours: { measure: 'hours', value: Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) } })
      this.setState({ minutes: { measure: 'minutes', value: Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)) } })
      this.setState({ seconds: { measure: 'seconds', value: Math.floor((t % (1000 * 60)) / 1000) } })
    } else {

    }
  }
  render () {
    return (
      <div>
        <TimeItem data={this.state.days}/>
        <TimeItem data={this.state.hours}/>
        <TimeItem data={this.state.minutes}/>
        <TimeItem data={this.state.seconds}/>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  setEnd: end => dispatch(setEnd(end))
})

const mapStateToProps = state => ({
  end: state.end
}
)

const App = connect(mapStateToProps, mapDispatchToProps)(_App)
export { App }
