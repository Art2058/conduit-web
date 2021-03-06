export default class BaseComponent {
	$parent
	$

	constructor(target, tag, attributes) {
		let insertPosition

		if (target instanceof Array) {
			;[this.$parent, insertPosition] = target
		} else {
			this.$parent = target
		}

		const $ = document.createElement(tag)
		attributes &&
			Object.entries(attributes).forEach(([fieldName, fieldValue]) => {
				if (fieldName === 'styles') {
					return Object.entries(fieldValue).forEach(([fieldName, fieldValue]) => {
						$.style[fieldName] = fieldValue
					})
				}

				$[fieldName] = fieldValue
			})

		this.$ = $

		insertPosition
			? this.$parent.insertAdjacentElement(insertPosition, this.$)
			: this.$parent.append(this.$)
	}

	bindEvents() {
		// field를 돌면서 핸들러 네이밍일 경우 this를 바인딩하고 event listen.

		Object.entries(this).forEach(([fieldName, fieldValue]) => {
			if (fieldName.indexOf('on') !== 0) return

			const eventType = fieldName.slice(2).toLowerCase()

			this.$.addEventListener(eventType, fieldValue)
		})
	}

	// https://stackoverflow.com/questions/20910147/how-to-move-all-html-element-children-to-another-parent-using-javascript
	HTML($parent, template) {
		if (!template) {
			template = $parent
			$parent = this.$
		}

		$parent.innerHTML = template
	}

	addHTML($parent, template) {
		if (!template) {
			template = $parent
			$parent = this.$
		}

		const $temp = document.createElement('div')
		$temp.innerHTML = template

		$parent.append(...$temp.childNodes)
	}
}
