(function() {
	var tags = document.querySelectorAll("#list p > a");

	window.addEventListener('hashchange', function (e) {
		var hash = window.location.hash.replace(/^#/,'');
		var lis = document.querySelectorAll("#list li");
		if (hash) {
			map(lis, function (li) {
				var tagged = false;
				map(li.querySelectorAll("p > a"), function (t) {
					if (t.innerText === hash) tagged = true;
				});
				li.style.display = tagged ? 'block' : 'none';
			});
		} else {
			map(lis, function (li) {
				li.style.display = 'block';
			});
		}
	});

	function map(coll, fn) { for (var i=0,l=coll.length;i<l;i++)fn(coll[i]); }

	map(tags, function (t) {
		t.addEventListener('click', function (e) {
			var name = t.innerText;
			map(tags, function(tag) {
				activate(name, tag);
			});
			e.preventDefault();
		});
	});

	function activate(name, tag) {
		if (tag.innerText === name) {
			if (tag.className === 'active') {
				tag.className = '';
				window.location.hash = '';
			} else {
				tag.className = 'active';
				window.location.hash = name;
			}
		} else {
			tag.className = '';
		}
	}

	$("pre").each(function(){
		var pre = $(this), min = 480, rate = 200;
		if(pre[0].scrollWidth > min) {
			pre.width(464);
			pre.hover(function() {
				pre.animate({ width: pre[0].scrollWidth + 20 }, rate);
			},
			function() {
				pre.animate({ width: min }, rate);
			});
		}
		else {
		 pre.css('min-width', min + 'px');
		}
	});

}());
