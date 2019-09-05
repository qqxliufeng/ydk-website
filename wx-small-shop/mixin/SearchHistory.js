export default {
	methods: {
		saveHistory (id, item) {
			if (localStorage) {
				let histories = this.getHistory(id)
				if (!histories.includes(item)) {
					histories.push(item)
					localStorage.setItem(id, histories.join(','))
				}
			}
		},
		getHistory (id) {
			let historyJson = []
			if (localStorage) {
				historyJson = localStorage.getItem(id)
			}
			if (historyJson && historyJson !== '' && typeof historyJson === 'string') {
				return historyJson.split(',')
			}
			return []
		},
		clearHistory (id) {
			if (localStorage) {
				localStorage.setItem(id, '')
			}
		}
	}
}
