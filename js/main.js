$(document).ready(function() {
    var plinks = [
       	       	{
            name: 'september',
            plink: 'http://steamcommunity.com/profiles/76561198088889097'
        },
		{
            name: 'nayuta',
            plink: 'http://steamcommunity.com/profiles/76561198268673985'
       },       
	   {
            name: 'boxxy',
            plink: 'http://steamcommunity.com/profiles/76561198068185131'
        },
		{
            name: 'skodd',
            plink: 'http://steamcommunity.com/profiles/76561198081593239'
		},
		{
            name: 'lolzy',
            plink: 'http://steamcommunity.com/profiles/76561198106147426'
		},
        {
            name: 'exeqt',
            plink: 'http://steamcommunity.com/profiles/76561198322491765'
		},
		{
            name: 'cha',
            plink: 'http://steamcommunity.com/profiles/76561198249090462'
		},
		{
            name: 'sov',
            plink: 'http://steamcommunity.com/profiles/76561198136501009'
		},
		];    
	
    for (var i in plinks) {
        var plink = plinks[i];
        $('#marquee').append('<a href="' + plink.plink + '" target="_blank">' + plink.name + '</a>');
        var plink = $('#marquee').children('a').last();
        if (i != plinks.length - 1) {
            $('#marquee').append(' - ')
        }
    }
    $('#marquee').marquee({
        duration: 7000,
        gap: 310,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true
    })

	window.SetVolume = function(val)
	{
    var player = document.getElementById('video');
    console.log('Before: ' + player.volume);
    player.volume = val / 10;
    console.log('After: ' + player.volume);
	}
	
	});