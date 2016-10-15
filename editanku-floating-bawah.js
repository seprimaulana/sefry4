soundManager.url = 'swf/';
soundManager.flashVersion = 9;
soundManager.useHTML5Audio = true;
soundManager.debugMode = false;

//amplify.store('fap-playlist', null);

$(document).ready(function(){

	
	setTimeout(function() {
		var wp = window.fapPopupWin ?  'popup' : 'bottom';
		$('#fap').fullwidthAudioPlayer({wrapperColor: '#04027C',  mainColor: '#00A9A6', fillColor: '#FFFFFF',
										metaColor: '#9AFFFF', fillColorHover: '#000000', strokeColor: '#FFFFFF', activeTrackColor: '#000000',
										wrapperPosition: wp, mainPosition: 'center', layout: 'fullwidth',
										autoPlay: 0, socials: 1, volume: 1, playlist: 1, autoPopup: 0, sortable: true, animatePageOnPlayerTop: 0										});
	}, 201);

		$('#api-toggle').click(function() {
		$.fullwidthAudioPlayer.toggle();
	});

	$('#api-clear').click(function() {
		$.fullwidthAudioPlayer.clear();
	});


	$('#api-add-track').click(function() {
		var trackLink = $('input[name="track_link"]').val();
		if(!trackLink) {
			alert("Please add a MP3 URL or a Soundcloud link!");
			return false;
		}

		$.fullwidthAudioPlayer.addTrack(trackLink, $('input[name="track_title"]').val(), $('input[name="track_meta"]').val(), $('input[name="track_cover"]').val(), $('input[name="track_url"]').val(), $('input[name="track_playIt"]').is(':checked'));
		resetFields();

		return false;
	});
		function resetFields() {
		$('input[name="track_link"]').val('');
		$('input[name="track_title"]').val('');
		$('input[name="track_meta"]').val('');
		$('input[name="track_cover"]').val('');
		$('input[name="track_url"]').val('');
	};


	$('input[name="wrapper_color"], input[name="main_color"], input[name="fill_color"], input[name="fill_color_hover"], input[name="meta_color"], input[name="stroke_color"]').spectrum({
		onSubmit: function(hsb, hex, rgb, el) {
			$(el).val('#' +hex);
			$(el).ColorPickerHide();
		},
		onBeforeShow: function () {
			$(this).ColorPickerSetColor(this.value);
		}
	});

	$('input:radio[name=wrapper_position]').filter('[value=bottom]').prop('checked', true);
    $('input:radio[name=main_position]').filter('[value=center]').prop('checked', true);
    $('input:radio[name=layout]').filter('[value=fullwidth]').prop('checked', true);

	$('#fap').bind('onFapReady', function(evt, trackData) {
		//$.fullwidthAudioPlayer.volume(0);
	});
});
