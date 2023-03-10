const moviesData = [
    {
    "id": "1",
    "name": "Fury*",
    "language": "English",
    "genre": "Action",
    "poster": "https://cairoscene.com/Content/Admin/Uploads/Articles/ArticlesMainPhoto/24366/64d011c5-7029-45ce-a764-48840151f38c.jpg",
    "img1": "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/303910/de52d1380fef19c2a46d47432d99acbb72630e8f.jpg",
    "img2": "https://hbomax-images.warnermediacdn.com/images/GYQl0igvCbMJRmQEAAABJ/tileburnedin?size=1280x720&partner=hbomaxcom&v=4bae507d7149ee90c1b6156bb9c69672&host=art-gallery.api.hbo.com&language=en-us&w=1280",
    "img3": "https://rogermooresmovienation.files.wordpress.com/2014/10/furytank.jpg",
    "img4": "https://wallpaperaccess.com/full/3843928.jpg",
    "year": 2017,
    "rating": 18.7,
    "length": 658,
    "description": "Wardaddy, along with his crew of five members, embarks on a mission that puts many lives in danger. The crew members realise that the odds are against them, but still decide to attack the Nazi army."
    },
    {
    "id": "37",
    "name": "Echo 3",
    "language": "English",
    "genre": "Action",
    "poster": "https://9to5mac.com/wp-content/uploads/sites/6/2022/11/apple-tv-how-to-watch-echo-3.jpg?quality=82&strip=all&w=1280",
    "img1": "https://is3-ssl.mzstatic.com/image/thumb/vt7su-xCPQYO5Z-IftduYw/1478x832.webp",
    "img2": "https://is4-ssl.mzstatic.com/image/thumb/TsljGgWY42kFveG-cN5F8g/1478x832.webp",
    "img3": "https://is5-ssl.mzstatic.com/image/thumb/ax7HypW4DZozOciug777Ug/1478x832.webp",
    "img4": "https://is1-ssl.mzstatic.com/image/thumb/LuBdfdc5NQxmIu-Ct7MP-A/1478x832.webp",
    "year": 2020,
    "rating": 8.7,
    "length": 258,
    "description": "An American football coach is hired to manage a British soccer team; what he lacks in knowledge, he makes up for in optimism, determination and biscuits."
    },
    {
    "id": "2",
    "name": "Snoopy Dog",
    "language": "English",
    "genre": "Kids",
    "poster": "https://i.pcmag.com/imagery/articles/07oCJ3YhbtprekjbkcWSeww-1.fit_lim.v1639598477.jpg",
    "img1": "https://is5-ssl.mzstatic.com/image/thumb/P-1f-E_Qew_9syoQd34Wlw/738x416.webp",
    "img2": "https://is2-ssl.mzstatic.com/image/thumb/_dJgnWG8W30_qMRZYCEx-Q/738x416.webp",
    "img3": "https://is5-ssl.mzstatic.com/image/thumb/y7Tj8Ig4DTzSgbm4DcoFyw/738x416.webp",
    "img4": "https://is5-ssl.mzstatic.com/image/thumb/owNSUO3F109RC75YDPMY7A/738x416.webp",
    "year": 2022,
    "rating": 6.7,
    "length": 298,
    "description": ""
    },
    {
    "id": "3",
    "name": "Little America",
    "language": "English",
    "genre": "Sports",
    "poster": "https://wikinaghd.ir/wp-content/uploads/2021/04/Apple_TV_Little_America.jpg",
    "img1": "https://is4-ssl.mzstatic.com/image/thumb/6wFf_-RqrHBr0E4LYGqfFA/998x562.webp",
    "img2": "https://is2-ssl.mzstatic.com/image/thumb/6xU5xjTtE3Qf6jiElfzNnw/998x562.webp",
    "img3": "https://is1-ssl.mzstatic.com/image/thumb/hCVzyZHM4I8jcIuJI1kflw/998x562.webp",
    "img4": "https://is5-ssl.mzstatic.com/image/thumb/DU0jSdbhnj70MZLTxcc2tA/998x562.webp",
    "year": 2012,
    "rating": 7.7,
    "length": 198,
    "description": ""
    },
    {
    "id": "4",
    "name": "Mythic Quest",
    "language": "English",
    "genre": "Fantasy",
    "poster": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2021/05/Apple_TV_Mythic_Quest_key_art_sh_cr.jpg.large_2x.jpg?w=2000&quality=82&strip=all&ssl=1",
    "img1": "https://is5-ssl.mzstatic.com/image/thumb/HVKS5eWUgpZGnGLZ_LKOLA/1478x832.webp",
    "img2": "https://is1-ssl.mzstatic.com/image/thumb/WjlQKORkjpFp9UKVvDONoQ/1478x832.webp",
    "img3": "https://is5-ssl.mzstatic.com/image/thumb/gFvq8IWsA_jjfHyOZpCixg/1478x832.webp",
    "img4": "https://is4-ssl.mzstatic.com/image/thumb/uw-JK6juPR73Wf-_q-Glbw/1478x832.webp",
    "year": 2012,
    "rating": 8.7,
    "length": 208,
    "description": ""
    },
    {
    "id": "23",
    "name": "Shantaram",
    "language": "Hindi",
    "genre": "Action",
    "poster": "https://scontent.fdel27-1.fna.fbcdn.net/v/t39.30808-6/312057012_541454944456176_3055889668964635433_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_ohc=GTswc0etSycAX-u-q9U&_nc_ht=scontent.fdel27-1.fna&oh=00_AfB62e_NsgwViq8dYf3o_9vVNYqb-MnzBrGwRoCJl5c34g&oe=639DF0AB",
    "img1": "https://is1-ssl.mzstatic.com/image/thumb/-umklNB2w52CcA-GMOzDkg/1478x832.webp",
    "img2": "https://is3-ssl.mzstatic.com/image/thumb/d-0hLyKiyAFZiAjf8TeqEw/1478x832.webp",
    "img3": "https://is1-ssl.mzstatic.com/image/thumb/diyOT6dFMlEGVMmxsZVliA/1478x832.webp",
    "img4": "https://is3-ssl.mzstatic.com/image/thumb/GK-12TWuAjRn9lR05xbPCg/1478x832.webp",
    "year": 2021,
    "rating": 10.21,
    "length": 789,
    "description": "Charlie Hunnam says he fell in love with India while creating Apple TV series Shantaram: ???It???s timeless, alive?????? "
    },
    {
    "id": "24",
    "name": "Prehistoric Planet",
    "language": "Hindi",
    "genre": "Action",
    "poster": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/05/prehistoric-planet-how-to-watch.jpg?w=2000&quality=82&strip=all&ssl=1",
    "img1": "https://is2-ssl.mzstatic.com/image/thumb/fTvDeFfLqG-ttBBEF1hJhw/1478x832.webp",
    "img2": "https://is5-ssl.mzstatic.com/image/thumb/C0VU3Ga4Kq_RQzhye1HlWw/1478x832.webp",
    "img3": "https://is3-ssl.mzstatic.com/image/thumb/xhEFZGLxRUSgO0NERRSZ7g/1478x832.webp",
    "img4": "https://is2-ssl.mzstatic.com/image/thumb/fTvDeFfLqG-ttBBEF1hJhw/1478x832.webp",
    "year": 2011,
    "rating": 20.21,
    "length": 706,
    "description": "To kick off the summer season, Apple TV+ has dropped a dino-sized documentary miniseries that you don't want to miss; here's how to watch Prehistoric Planet, plus a complete overview of its contents and the talent behind the massive project."
    },
    {
    "id": "25",
    "name": "Severence",
    "language": "Hindi",
    "genre": "Thriller",
    "poster": "https://www.cnet.com/a/img/resize/5ef49c0a6d40249c0bde71e9d4027b99dec56328/hub/2022/04/07/0007f1a1-0ef4-4c1d-9e09-3f86838247e2/severance-apple-tv-plus.jpg?auto=webp&fit=crop&height=675&width=1200",
    "img1": "https://is4-ssl.mzstatic.com/image/thumb/nJIcm0Q2C3IxB5JYf9w8mg/1478x832.webp",
    "img2": "https://is2-ssl.mzstatic.com/image/thumb/MLEnUjQIU0JZyzsk-Unm0A/1478x832.webp",
    "img3": "https://is2-ssl.mzstatic.com/image/thumb/FNgZ32eROSB3rV8jJe6vKQ/1478x832.webp",
    "year": 2014,
    "img4": "https://is4-ssl.mzstatic.com/image/thumb/nJIcm0Q2C3IxB5JYf9w8mg/1478x832.webp",
    "rating": 4.21,
    "length": 606,
    "description": "Mark leads a team of office workers whose memories have been surgically divided between their work and personal lives; when a mysterious colleague appears outside of work, it begins a journey to discover the truth about their jobs.."
    },
    {
    "id": "26",
    "name": "Shinning Girl",
    "language": "Spanish",
    "genre": "Thriller",
    "poster": "https://cdn.mos.cms.futurecdn.net/VoxQpHuKdHjgTwvFR3NFng-1200-80.jpg.webp",
    "img1": "https://is3-ssl.mzstatic.com/image/thumb/LZg_5ZWc4_bGU6jsD6J9YA/1478x832.webp",
    "img2": "https://is4-ssl.mzstatic.com/image/thumb/fnzQ4QOsOHRDMvzXNdE9Vg/1478x832.webp",
    "img3": "https://is2-ssl.mzstatic.com/image/thumb/rNUiawdlQJKLRPEGnaxrZQ/1478x832.webp",
    "year": 2016,
    "img4": "https://is3-ssl.mzstatic.com/image/thumb/LZg_5ZWc4_bGU6jsD6J9YA/1478x832.webp",
    "rating": 4.81,
    "length": 176,
    "description": "Shining Girls puts a fresh spin on the serial killer thriller with a mind-bending premise, though it takes a while to reveal what it???s up to. "
    },
    {
    "id": "27",
    "name": "Loot",
    "language": "Spanish",
    "genre": "Comedy",
    "poster": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/06/how-to-watch-loot.jpg?w=2000&quality=82&strip=all&ssl=1",
    "img1": "https://is4-ssl.mzstatic.com/image/thumb/Hl50Yf50iJl7ZfLkHPHR6g/1478x832.webp",
    "img2": "https://is1-ssl.mzstatic.com/image/thumb/CUZ2Ar6gyZ1aV4OaIVURiw/1478x832.webp",
    "img3": "https://is4-ssl.mzstatic.com/image/thumb/yJrFyXf6JuKdetRIsFattw/1478x832.webp",
    "img4": "https://is4-ssl.mzstatic.com/image/thumb/Hl50Yf50iJl7ZfLkHPHR6g/1478x832.webp",
    "year": 2017,
    "rating": 4.91,
    "length": 186,
    "description": "Shining Girls puts a fresh spin on the serial killer thriller with a mind-bending premise, though it takes a while to reveal what it???s up to. "
    },
    {
    "id": "39",
    "name": "Interstellar",
    "language": "English",
    "genre": "Fantasy",
    "poster": "https://lotofsense.com/wp-content/uploads/2022/09/tileburnedin.jpg",
    "img1": "https://newcityfilm.com/wp-content/uploads/2014/11/interstellar.thm_.png",
    "img2": "https://www.scienceabc.com/wp-content/uploads/2016/04/INTERL-2.jpg",
    "img3": "https://akcdn.detik.net.id/visual/2022/02/21/interstellar-2014_169.png?w=650",
    "img4": "https://images.bauerhosting.com/legacy/empire-tmdb/films/157336/images/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg?q=80&w=850&ar=16:9&fit=crop&crop=top",
    "year": 2007,
    "rating": 21,
    "length": 60,
    "description": ""
    }]

module.exports = moviesData