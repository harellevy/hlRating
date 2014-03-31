(function ($) {
		    // remove class by prefix
        $.fn.removePrefixedClasses = function (prefix) {
			    var classes = $(this).attr("class").split(" ").filter(function(c) {
			      return c.lastIndexOf(prefix, 0) !== 0;
			    });
			    $(this).attr("class", classes.join(" "));
        };

        // rating function
        $.fn.wpRating = function (numOfOptions, halfs){
        	var $thisRating = $(this);
        	var listOfOption = '<ul>'
			      for (i = 0; i <= numOfOptions; i++){
				      if (i != 0) listOfOption += '<li class="s-'+ i +'"></li>';
				      if (halfs == true && numOfOptions != i) listOfOption += '<li class="s-'+ i +'-5"></li>';
			      }
			      listOfOption += '</ul>';
      			$thisRating.append(listOfOption);
              	$(this).hover(function(){
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
      			});
        }

}(jQuery));
