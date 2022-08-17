$w.onReady(function () {
	$w('#button1').onClick( () => {
		console.log("goodbye")
		$w('#text3').html = `<h1 style="color:maroon;font-size:30px;background-color:yellow"><b>You clicked the button, you moron!</b></h2>`
	})
});