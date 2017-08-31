
import booksModel from './books-model';
import listTemp from './books-view';

function init() {
	var dataList = {};
	var template = listTemp();

	booksModel.getBookItems().done(function (data) {
		dataList['datalist'] = data;
		var output = Mustache.render(template, dataList);
		$('#books-wrapper').append(output);
	});
}

export {init};
