// http://jser.me/2013/08/20/javascript%E7%9A%84%E5%87%A0%E7%A7%8D%E4%BD%BF%E7%94%A8%E5%A4%9A%E8%A1%8C%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9A%84%E6%96%B9%E5%BC%8F.html
function getString(fn) {
    return fn.toString().split('\n').slice(1, -1).join('\n') + '\n'
}

var lrc = getString(function() {
    /*
    [00:00.000] 作词 : Nasri Atweh/ADAM MESSINGER/Justin Bieber
    [00:01.000] 作曲 : Nasri Atweh/ADAM MESSINGER/Justin Bieber
    [00:11.85]Baby I will not pow
    [00:14.29]Baby I will not cry
    [00:16.67]Cuz I got your love this christmas time
    [00:21.35]When the snow's on the ground
    [00:23.66]And it's freezing outside
    [00:24.54]I got your love this christmas time
    [00:30.23]On every list I've ever sent
    [00:32.29]You're the gift I'd love the best
    [00:34.66]So take hards and all the risk you wore me up
    [00:39.10]It's your christmas love
    [00:42.41]Hey angle in the snow
    [00:44.60]I'm under the mistletoe
    [00:46.97]You are the one
    [00:48.72]You're my very own christmas love
    [00:51.97]Tell santa I'm cool this year
    [00:54.10]My present is standing right here
    [00:56.47]Thank god above for my very own christmas love
    [01:04.54]Like a beautiful tree' you can light up your room
    [01:09.54]Show kinda star can be remove
    [01:14.10]Like a beautiful carol' I get lost in this song
    [01:19.10]And I will forever sing along
    [01:22.91]On every list I've ever sent
    [01:25.10]You're the gift I'd love the best
    [01:27.35]So take hards and all the risk you wore me up
    [01:32.29]It's your christmas love
    [01:35.41]Hey angle in the snow
    [01:37.60]I'm under the mistletoe
    [01:38.41]You are the one
    [01:41.41]You're my very own christmas love
    [01:44.66]Tell santa I'm cool this year
    [01:46.97]My present is standing right here
    [01:49.54]Thank god above for my very own christmas love
    [01:54.73]All the love that's around the world
    [01:56.66]I can sing you merry merry christmas
    [01:59.72]Merry merry christmas
    [02:01.85]Every boy and every girl
    [02:06.54]Stay close to the ones you love
    [02:11.91]And thank god above
    [02:12.91]That you got someone this year that can feel your heart with cheer
    [02:21.97]Hey angle in the snow
    [02:25.41]I'm under the mistletoe
    [02:27.97]You are the one
    [02:29.41]You're my very own christmas love
    [02:32.78]Tell santa I'm cool this year
    [02:34.97]My present is standing right here
    [02:36.66]Thank god above for my very own christmas love
    [02:42.60]Hey angle in the snow
    [02:44.53]I'm under the mistletoe
    [02:46.99]You are the one
    [02:48.55]You're my very own christmas love
    [02:51.92]Tell santa I'm cool this year
    [02:54.11]My present is standing right here
    [02:56.49]Thank god above for my very own christmas love
    [03:00.00]Merry Xmas! Love you, babe~
    */
}).split('\n').slice(1, -2);

var lrcA = "\
[00:00.000] 作词 : Nasri Atweh/ADAM MESSINGER/Justin Bieber\n\
[00:01.000] 作曲 : Nasri Atweh/ADAM MESSINGER/Justin Bieber\n\
[00:11.85]Baby I will not pow\n\
[00:14.29]Baby I will not cry\n\
[00:16.67]Cuz I got your love this christmas time\n\
[00:21.35]When the snow's on the ground\n\
[00:23.66]And it's freezing outside\n\
[00:24.54]I got your love this christmas time\n\
[00:30.23]On every list I've ever sent\n\
[00:32.29]You're the gift I'd love the best\n\
[00:34.66]So take hards and all the risk you wore me up\n\
[00:39.10]It's your christmas love\n\
[00:42.41]Hey angle in the snow\n\
[00:44.60]I'm under the mistletoe\n\
[00:46.97]You are the one\n\
[00:48.72]You're my very own christmas love\n\
[00:51.97]Tell santa I'm cool this year\n\
[00:54.10]My present is standing right here\n\
[00:56.47]Thank god above for my very own christmas love\n\
[01:04.54]Like a beautiful tree' you can light up your room\n\
[01:09.54]Show kinda star can be remove\n\
[01:14.10]Like a beautiful carol' I get lost in this song\n\
[01:19.10]And I will forever sing along\n\
[01:22.91]On every list I've ever sent\n\
[01:25.10]You're the gift I'd love the best\n\
[01:27.35]So take hards and all the risk you wore me up\n\
[01:32.29]It's your christmas love\n\
[01:35.41]Hey angle in the snow\n\
[01:37.60]I'm under the mistletoe\n\
[01:38.41]You are the one\n\
[01:41.41]You're my very own christmas love\n\
[01:44.66]Tell santa I'm cool this year\n\
[01:46.97]My present is standing right here\n\
[01:49.54]Thank god above for my very own christmas love\n\
[01:54.73]All the love that's around the world\n\
[01:56.66]I can sing you merry merry christmas\n\
[01:59.72]Merry merry christmas\n\
[02:01.85]Every boy and every girl\n\
[02:06.54]Stay close to the ones you love\n\
[02:11.91]And thank god above\n\
[02:12.91]That you got someone this year that can feel your heart with cheer\n\
[02:21.97]Hey angle in the snow\n\
[02:25.41]I'm under the mistletoe\n\
[02:27.97]You are the one\n\
[02:29.41]You're my very own christmas love\n\
[02:32.78]Tell santa I'm cool this year\n\
[02:34.97]My present is standing right here\n\
[02:36.66]Thank god above for my very own christmas love\n\
[02:42.60]Hey angle in the snow\n\
[02:44.53]I'm under the mistletoe\n\
[02:46.99]You are the one\n\
[02:48.55]You're my very own christmas love\n\
[02:51.92]Tell santa I'm cool this year\n\
[02:54.11]My present is standing right here\n\
[02:56.49]Thank god above for my very own christmas love\
"