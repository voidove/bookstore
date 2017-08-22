var booksModule = booksModule || {};

app.booksModule = (function () {
	return {
		initModules: function () {
			booksModule.controller.init();
		}
	}
})();