import BaseComponent from '../components/base-component.js'

export default class ExceptionErrorMessage extends BaseComponent {
	constructor(message) {
		super(document.body, 'div', {
			innerHTML: `
        <p>알 수 없는 에러가 발생했습니다.</p>
        <p>${message}</p>
        <p>페이지 클릭 시 개발 화면으로 돌아갑니다.</p>
      `,
			className: 'CriticalErrorMessage',
			styles: {
				position: 'fixed',
				zIndex: 2000,
				top: 0,
				left: 0,
				right: 0,
				bottom: 0
			}
		})

		this.bindEvents()
	}

	onClick = () => {
		this.$.remove()
	}
}
