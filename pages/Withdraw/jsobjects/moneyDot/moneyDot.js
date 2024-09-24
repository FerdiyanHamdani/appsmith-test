export default {
	moneyDot (num) {
		if (num === null || num === undefined) {
			return '';
		} else if (num === 0) {
			return 0;
		}

		const str = num.toString().split('.');

		if (str[0].length >= 4) {
			str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1.');
		}
		
		return str[0];
	}
}