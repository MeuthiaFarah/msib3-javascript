$(function () {
	/* gambar ayam */
	$(".ayam").on("click", function () {
		$(".gambarAyam")
			.attr({
				src: "image/ayam.jfif",
			})
			.height(160);
		$("<audio><audio/>")
			.attr({
				src: "sound/rooster_059e5f1f5412596.mp3",
				volume: 0.4,
				autoplay: "autoplay",
			})
			.appendTo(".gambarAyam");
	});

	/* gambar burung */
	$(".burung").on("click", function () {
		$(".gambarBurung")
			.attr({
				src: "image/burung.jfif",
			})
			.width(250)
			.height(160);
		$("<audio><audio/>")
			.attr({
				src: "sound/birdsound_2e23b7365331295.mp3",
				volume: 0.4,
				autoplay: "autoplay",
			})
			.appendTo(".gambarBurung");
	});

	/* gambar bebek */
	$(".bebek").on("click", function () {
		$(".gambarBebek")
			.attr({
				src: "image/bebek2.jfif",
			})
			.width(238)
			.height(160);

		$("<audio><audio/>")
			.attr({
				src: "sound/duck_c30ca1fe4840374.mp3",
				volume: 0.4,
				autoplay: "autoplay",
			})
			.appendTo(".gambarBebek");
	});

	/* gambar elang */
	$(".elang").on("click", function () {
		$(".gambarElang")
			.attr({
				src: "image/elang.jfif",
			})
			.width(238)
			.height(160);
		$("<audio><audio/>")
			.attr({
				src: "sound/eaglevoice_44d568045010874.mp3",
				volume: 0.4,
				autoplay: "autoplay",
			})
			.appendTo(".gambarElang");
	});

	/* gambar sapi */
	$(".sapi").on("click", function () {
		$(".gambarASapi")
			.attr({
				src: "image/sapi.jfif",
			})
			.height(160);
		$("<audio><audio/>")
			.attr({
				src: "sound/cow_83d3771e4682664.mp3",
				volume: 0.4,
				autoplay: "autoplay",
			})
			.appendTo(".gambarSapi");
  });
  
  	/* gambar domba */
	$(".domba").on("click", function () {
		$(".gambarDomba")
			.attr({
				src: "image/domba.jfif",
			})
			.height(160);
		$("<audio><audio/>")
			.attr({
				src: "sound/sheep_825b938f5207854.mp3",
				volume: 0.4,
				autoplay: "autoplay",
			})
			.appendTo(".gambarDomba");
  });
  
  	/* gambar kambing */
	$(".kambing").on("click", function () {
		$(".gambarKambing")
			.attr({
				src: "image/kambing.jfif",
			})
			.height(160);
		$("<audio><audio/>")
			.attr({
				src: "sound/rooster_059e5f1f5412596.mp3",
				volume: 0.4,
				autoplay: "autoplay",
			})
			.appendTo(".gambarAyam");
  });
  
  	/* gambar ayam */
	$(".ayam").on("click", function () {
		$(".gambarAyam")
			.attr({
				src: "image/ayam.jfif",
			})
			.height(160);
		$("<audio><audio/>")
			.attr({
				src: "sound/rooster_059e5f1f5412596.mp3",
				volume: 0.4,
				autoplay: "autoplay",
			})
			.appendTo(".gambarAyam");
	});
});
