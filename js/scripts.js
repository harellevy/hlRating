$(document).ready(function(){

	$('.fa-rating.rate').wpRating(5,true);
/*	$('.fa-rating').hover(function(){
		var $thisRating = $(this);
		$('ul li', this).hover(function(){
			if ($thisRating.hasClass($thisRating.attr('data-rating'))) $thisRating.removeClass($thisRating.attr('data-rating'));
			if ($thisRating.hasClass($thisRating.attr('data-rating-chosen'))) $thisRating.removeClass($thisRating.attr('data-rating-chosen'));
				$nextRating = $(this).attr('class');
				$thisRating.attr('data-rating',$nextRating);
				$thisRating.addClass($nextRating);
		}).click(function(){
				$nextRating = $(this).attr('class');
				$thisRating.attr('data-rating-chosen',$nextRating);
		});
	}, function(){
		$(this).removePrefixedClasses('s-');
		$(this).addClass($(this).attr('data-rating-chosen'));
	});*/
});
