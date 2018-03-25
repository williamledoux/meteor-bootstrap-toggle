Template.BootstrapToggle.onRendered(function onBootstrapToggleRendered() {
	
	var options = this.data.options || {};
	var sv = this.data.var;
	var input = this.find("input[type=checkbox][data-toggle^=customToggle]");
	var $input = $(input).bootstrapToggle(options);
	
	$input.change(function(e){
		if($(this).prop('checked'))
			Session.set(sv, true);
		else
			Session.set(sv, false);
	})
	
	Tracker.autorun(function(){
		var test = Session.get(sv);
		if(test){
			$input.bootstrapToggle('on');
		}else{
			$input.bootstrapToggle('off');
		}
	});

});
