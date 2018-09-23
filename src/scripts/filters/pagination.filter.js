angular.module('pagination.filter', []).filter("pagination", _paginationFilter)

function _paginationFilter() {
	return (data, start) => {
		if (!data || !data.length) {
			return;
		}
		return data.slice(start)
	}
}
