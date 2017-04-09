




let musicPlayer={
    play: function(song, artist) {
        this.text = "\"<em>" + song.name + "</em>\"" + " by " + artist + ". Album <b>" + song.album + "</b>, " + song.year;
    },

    pause: function(){
        if (this.playing){
            this.playing = false;
            document.write("Pausing player. Thanks for listening.");}
    }
};





let model = {
    Flume : {
        tracks : [
            {
                name : "Never be like you",
                year : 2016,
                album : "Skin",
                songlink : "https://www.youtube.com/embed/Ly7uj0JwgKg"
            },
            {
                name : "Insane",
                year : 2012,
                album : "Flume",
                songlink : "https://www.youtube.com/embed/peRS3KGNxoY"
            },
            {
                name: "Numb & Getting Colder feat. Kučka - Baauer Remix",
                year : 2017,
                album: "SkinRemixes",
                songlink : "https://www.youtube.com/embed/rs5Lrzr7KRc"
            },

            {
                name: "Ta-ku - Higher (Flume Remix)",
                year : 2012,
                album: "Flume",
                songlink : "https://www.youtube.com/embed/4l15evegaKo"

            },
            {
                name: "Sleepless feat. Jezzabell Doran",
                year : 2012,
                album: "Flume",
                songlink : "https://www.youtube.com/embed/V7-yAX9ijuM"

            },
            {
                name: "Take a Chance feat. Little Dragon",
                year : 2016,
                album: "Skin",
                songlink : "https://www.youtube.com/embed/5IqDR2WjVl8"

            },
            {
                name: "Weekend feat. Moses Sumney",
                year : 2017,
                album: "Skin Companion EP II",
                songlink : "https://www.youtube.com/embed/DT9BrbtKdTM"

            },
            {
                name: "Ezra",
                year : 2012,
                album: "Flume",
                songlink : "https://www.youtube.com/embed/MGtKETJIcZs"

            }
        ]
    },
    Kendrick  : {
        tracks : [
            {
                name : "M.A.A.D City",
                year : 2012,
                album : "Good Kid, M.A.A.D City",
                songlink : "https://www.youtube.com/embed/10yrPDf92hY"
            },
            {
                name : "Money Trees",
                year : 2012,
                album : "Good Kid, M.A.A.D City",
                songlink : "https://www.youtube.com/embed/NtxmnBQmfZs"
            },
            {
                name: "HUMBLE",
                year: 2017,
                album: "Album",
                songlink : "https://www.youtube.com/embed/tvTRZJ-4EyI"

            },
            {
                name: "Real feat. Anna Wise",
                year: 2012,
                album: "Good Kid, M.A.A.D City",
                songlink : "https://www.youtube.com/embed/ns1ykzcCJlM"

            },

            {
                name: "The Recipe ft. Dr. Dre",
                year: 2012,
                album: "Good Kid, M.A.A.D City",
                songlink : "https://www.youtube.com/embed/YpugK0RpEaU"

            },

            {
                name: "i",
                year: 2015,
                album: "To Pimp a Butterfly",
                songlink : "https://www.youtube.com/embed/jltN3fLFmTQ"

            },
            {
                name: "Rigamortis",
                year: 2011,
                album: "Section.80",
                songlink : "https://www.youtube.com/embed/Niu9KMEGsx4"

            },
            {
                name: "LOOK OUT FOR DETOX",
                year: 2010,
                album: "",
                songlink : "https://www.youtube.com/embed/B5eT6TaEtPI"

            },
            {
                name: "A.D.H.D",
                year: 2011,
                album: "Section.80",
                songlink: "https://www.youtube.com/embed/QjlFqgRbICY"

            }


        ]
    },
    Guerra  : {
        tracks : [
            {
                name : "La Cosquillita",
                year : 1994,
                album : "Fogaraté",
                songlink : "https://www.youtube.com/embed/vMmuZdzEdDU"
            },
            {
                name : "A Pedir Su Mano",
                year : 1990,
                album : "Bachata Rosa",
                songlink : "https://www.youtube.com/embed/hGYhaIeDQSE"
            },
            {
                name: "Guavaberry",
                year: 1987,
                album: "Mientras Más Lo Pienso...Tú",
                songlink : "https://www.youtube.com/embed/frdeisutNpc"

            },
            {
                name: "Burbujas de amor",
                year: 1990,
                album: "Bachata Rosa",
                songlink : "https://www.youtube.com/embed/PkhSqy7ldEg"

            },

            {
                name: "Ojalá Que Llueva Café",
                year: 1989,
                album: "Ojalá Que Llueva Café",
                songlink : "https://www.youtube.com/embed/XZOLOggfWp0"

            }



        ]
    }



}

function myFunction() {
    let artistInput = document.getElementById("artist").value;
    let trackInput = document.getElementById("track").value;
    trackInput = parseInt(trackInput);

    if (!model.hasOwnProperty(artistInput)) {
        // warning shit goes here
        return window.alert("Incorrect artist input. Please enter one of the following: Flume, Kendrick, Guerra");
    }

    let song = model[artistInput].tracks[trackInput - 1];
    let link = song.songlink;

    musicPlayer.play(song, artistInput, model[artistInput].name);
    let myText = musicPlayer.text;
    console.log(myText);
    document.getElementById("demo").innerHTML = myText;
    document.getElementById("ytplayer").src = link + '?rel=0&autoplay=1';


}

let input = document.querySelector('#artist');


input.addEventListener('blur', function()
{

    let playListArtist = input.value;
    let trackInput = document.getElementById("track");
    if (model.hasOwnProperty(playListArtist)) {
        let trackCount = model[playListArtist].tracks.length;
        trackInput.max = trackCount;
        trackInput.disabled = false;
        if (trackInput.value > trackCount) {
            trackInput.value = trackCount;
        }
    } else {
        trackInput.value = 0;
        trackInput.disabled = true;
    }

});
