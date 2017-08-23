
define(['books/books-model', 'books/books-view', 'mustache'], function (booksModel, booksView, Mustache) {
	return {
		init: function () {
			var dataList = {};
			var template = booksView.listTemp;

			booksModel.getBookItems().done(function (data) {
				dataList['datalist'] = data;
				var output = Mustache.render(template, dataList);
				$('#books-wrapper').append(output);
			});
		}
	}
});