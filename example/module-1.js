console.log('module 1');

(function ($) {

    //set jquery to use parent frame scope by default
    isolate.modules.setJqueryToParentScope(function(){		
		console.log('jquery scope set to be parent frame');		
	});

})(window.jQuery);