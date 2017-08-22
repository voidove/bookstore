booksModule.model = (function ($) {
	var URLS = {
			FETCH: '/mock/bookstore.json'
		},
		bookItems,
		booksModel = this;

	function extract(result) {
		return result.data;
	}

	function cacheBookItems(result) {
		bookItems = extract(result);
		return bookItems;
	}

	booksModel.getBookItems = function () {
		var deferred = $.Deferred();
		$.getJSON( URLS.FETCH).then(function (result) {
			deferred.resolve(result);
			cacheBookItems(result);
		});
		return deferred.promise();
	};

	booksModel.createBookItem = function (bookItem) {
		bookItem.id = bookItems.length;
		bookItems.push(bookItem);
	};

	booksModel.updateBookItem = function (bookItem) {
		var index = _.findIndex(bookItems, function (b) {
			return b.id == bookItem.id
		});
		bookItems[index] = bookItem;
	};

	booksModel.deleteBookItem = function (bookItem) {
		_.remove(bookItems, function (b) {
			return b.id == bookItem.id;
		});
	};


	return booksModel;
})(jQuery);



