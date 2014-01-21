document.observe('dom:loaded', function(event) {

	$('tape_measure_drag').style.transition = 'left .5s ease 0s';
	setTimeout(function() {
		$('tape_measure_drag').style.left = "-1140px";
	}, 100);

	new Draggable('tape_measure_drag', { constraint: 'horizontal', handle: 'tape_measure_drag', 
		onDrag: function(e) {
			var offset = $('tape_measure_drag').positionedOffset().left;
			var value = ((offset-140)/80)*-1;
			value = (Math.round(value * 4) / 4).toFixed(2);

			if(value > 0) {
				$('measurementInput').value = value;
			}
		},
		snap: function(y) {
			return [(y < 140) ? (y > -6260 ? y : -6260) : 140 ];
		} 
	});


	$('measurementInput').observe('keyup', function(e) {
		$('tape_measure_drag').style.transition = 'left .5s ease 0s';
		var offset = $('tape_measure_drag').positionedOffset().left;
		var value = this.value;
		value = (Math.round(value * 4) / 4).toFixed(2);

		offset = -1*((value*80)-140);

		$('tape_measure_drag').style.left = (offset)+"px";

	});

	$('measurementInput').observe('mousedown', function(e) {
		$('tape_measure_drag').style.transition = '';
	});

	$('tape_measure_drag').observe('mousedown', function(e) {
		$('tape_measure_drag').style.transition = '';
	});

});