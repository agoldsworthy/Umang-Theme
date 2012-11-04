( function($) 
{
	$(document).ready(function()
	{
		$(".view-frontpage-content .views-field-field-translations").hide();

		$(".view-frontpage-content").mouseover( function(e)
		{
			$(this).addClass("hovering");
			$(".views-field-field-translations", this).show();
		});

		$(".view-frontpage-content").mouseout( function()
		{
			$(this).removeClass("hovering");
			$(".views-field-field-translations", this).hide();
		});
	});
})(jQuery);