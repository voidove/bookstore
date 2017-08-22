
booksModule.view = (function () {
	return {
		listTemp: '<table class="table">' +
		'<tbody>{{#datalist}}<tr>' +
		'<td>{{id}}</td>' +
		'<td>{{name}}</td>' +
		'<td>{{category}}</td>' +
		'<td>{{read-progress}}</td>' +
		'<td>{{level}}</td>' +
		'</td>{{/datalist}}</tbody>' +
		'</table>'
	}

})();

