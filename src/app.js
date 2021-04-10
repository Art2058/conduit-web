import Component from './components/component.js'

export default class App extends Component {
	constructor(target) {
		super(target, 'div')

		this.children = []
	}

	render() {
		this.children.forEach(child => child.render && child.render())
	}
}
