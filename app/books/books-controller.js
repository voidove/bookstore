
booksModule.controller = (function () {

	return {
		init: function () {
			var dataList = {};
			var template = booksModule.view.listTemp;

			booksModule.model.getBookItems().done(function (data) {
				dataList['datalist'] = data;
				var output = Mustache.render(template, dataList);
				$('#books-wrapper').append(output);
			});
		}
	}
})();