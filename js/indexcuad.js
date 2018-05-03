$(function(){				
				
        /*
          Author: Chrysto Panayotov ( info@bassta.bg )
          For GreenSock forums user azuki
          License : http://bassta.bg/license/
          
        */
  
				var $parallaxContainer 	  = $("#parallax-container"); //our container
				var $parallaxItems		    = $parallaxContainer.find(".parallax");  //elements
				var fixer				          = 0.0008;		//experiment with the value
				
				$(document).on("mousemove", function(event){					
							
					var pageX =  event.pageX - ($parallaxContainer.width() * 0.5);  //get the mouseX - negative on left, positive on right
					var pageY =  event.pageY - ($parallaxContainer.height() * 0.5); //same here, get the y. use console.log(pageY) to see the values
					
          //here we move each item
					$parallaxItems.each(function(){
						
						var item 	= $(this);
						var speedX	= item.data("speed-x");  				
						var speedY	= item.data("speed-y");
						
            /*TweenLite.to(item, 0.5, {
							x: (item.position().left + pageX * speedX )*fixer,    //calculate the new X based on mouse position * speed 
							y: (item.position().top + pageY * speedY)*fixer
						});*/
            
            //or use set - not so smooth, but better performance
            TweenLite.set(item, {
							x: (item.position().left + pageX * speedX )*fixer,
							y: (item.position().top + pageY * speedY)*fixer
						});
						
					});
				});				
			});