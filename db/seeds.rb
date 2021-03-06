# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

User.destroy_all
Artist.destroy_all
Album.destroy_all
Track.destroy_all


u1 = User.create!(username: "Guest", password: "password")

#bio_rand = rand(1) + 1
#bio: faker::Hipster.paragraph(bio_rand)
a1 = Artist.create!(name: "Matthew Hu", genre: "Inspired by the likes of Tchaikovsky and good coffee.  From Seattle, WA.", image_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/MatthewHuProfile.png" )
a2 = Artist.create!(name: "Harry Liu", genre: "These tracks are the culmination of a couple years of work, smiles and laughter from friends from all places.", image_file_name:"https://s3-us-west-1.amazonaws.com/fullstackfiles/HarryLiuProfile2.png")
a5 = Artist.create!(name: "Zach Bolen", genre: "Zach Bolen's 1001 is a delightful and surprising rock album that strays from the Citizens & Saints sound.", image_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/ZachBolenProfile.png")
a4 = Artist.create!(name: "Edan Lewis", genre: "I made these songs, while working at a hotel in Aomori, Japan; from the confines of room 404.", image_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/EdanLewisProfile.png")

a3 = Artist.create!(name: "Melody Hwang", genre: "Melody Hwang's debut album featuring a unique blend of modern electronic pop and traditional orchestral tones", image_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/MelodyHwang2.png" )

a6 = Artist.create!(name: "Linus", genre: "The best friend of Charlie Brown, and the proud co-author of Paper Dream.", image_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/PaperDream4.png" )
a7 = Artist.create!(name: "Surfer-jan", genre: "Sufjan Stevens (born July 1, 1975) is an American singer-songwriter and multi-instrumentalist.", image_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/Sufjan.png" )
a8 = Artist.create!(name: "Sfjn", genre: "Stevens has released albums of varying styles, from the electronica of Enjoy Your Rabbit to the symphony Illinois.", image_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/Sufjan2.png" )
a9 = Artist.create!(name: "Foo", genre: "The release of 2017’s Providence was important for Norfolk, England electronic music artist Nathan Foo.", image_file_name: "https://s3.us-east-2.amazonaws.com/personalwebsite1/Artist9.png")
a10 = Artist.create!(name: "Nirvana Redux", genre: "In 2011 Nirvana Redux, who were at the time essentially just Will Toledo, released an album called Twin Fantasy", image_file_name: "https://s3.us-east-2.amazonaws.com/personalwebsite1/Artist10.png")
a11= Artist.create!(name: "Boo Radley", genre: "Steve Moore and Daniel O’Sullivan have only released a handful of Miracle records over the past seven years.", image_file_name: "https://s3.us-east-2.amazonaws.com/personalwebsite1/Artist11.png")
a12 = Artist.create!(name: "A Dell", genre: "Though A Dell uses the tag “noise” to shorthand their history, Posh Isolation has never sat comfortably within that genre", image_file_name: "https://s3.us-east-2.amazonaws.com/personalwebsite1/Artist12.png")



# :artist_id,:title,:year,:image_file_name
al1 = Album.create!(artist_id: a1.id, title: "Paper Dream", year: 2017, image_file_name:"https://s3-us-west-1.amazonaws.com/fullstackfiles/PaperDream2.png" )
al2 = Album.create!(artist_id: a2.id, title: "Ninth Street", year: 2017, image_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/NinthStreet.png")
al3 = Album.create!(artist_id: a3.id, title: "Suddenly", year: 2015, image_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/Suddenly.png" )
al4 = Album.create!(artist_id: a4.id, title: "The 404 Sessions", year: 2015, image_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/404Session.png" )
al5 = Album.create!(artist_id: a5.id, title: "1001", year: 2017, image_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/1001Album.png" )
al6 = Album.create!(artist_id: a6.id, title: "Christmas Single", year: 2017, image_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/Chrismtas.png" )
al7 = Album.create!(artist_id: a7.id, title: "Illinoisy", year: 2017, image_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/IllinoiseAlbum.png" )
al8 = Album.create!(artist_id: a8.id, title: "Detroit", year: 2017, image_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/DetroitAlbum.png" )
al9 = Album.create!(artist_id: a9.id, title: "Providence", year: 2017, image_file_name: "https://s3.us-east-2.amazonaws.com/personalwebsite1/GenericAlbum.png" )
al10 = Album.create!(artist_id: a10.id, title: "Twin Fantasy", year: 2017, image_file_name: "https://s3.us-east-2.amazonaws.com/personalwebsite1/GenericAlbum.png" )
al11 = Album.create!(artist_id: a11.id, title: "Towers", year: 2017, image_file_name: "https://s3.us-east-2.amazonaws.com/personalwebsite1/GenericAlbum.png" )
al12 = Album.create!(artist_id: a12.id, title: "Computer History", year: 2017, image_file_name: "https://s3.us-east-2.amazonaws.com/personalwebsite1/GenericAlbum.png" )


s1 = Track.create!(artist_id: a1.id , album_id: al1.id , title: "Prelude" , track_num: 1 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/01_Prelude%2Bmastering_1_variant.wav" )
s2 = Track.create!(artist_id: a1.id , album_id: al1.id , title: "Garden" , track_num: 2 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/02_Garden%2Bmastering_3_variant.wav" )
s3 = Track.create!(artist_id: a1.id , album_id: al1.id , title: "Daydreaming" , track_num: 3 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/03_Daydreaming%2Bmastering_3_variant.wav" )
s4 = Track.create!(artist_id: a1.id , album_id: al1.id , title: "Clocks" , track_num: 4 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/04+Clocks.mp3" )
s5 = Track.create!(artist_id: a1.id , album_id: al1.id , title: "In Between" , track_num: 5 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/05+In+Between.mp3" )
# s24 = Track.create!(artist_id: a1.id , album_id: al1.id , title: "Prelude" , track_num: 1 , audio_file_name: "" )
# s25 = Track.create!(artist_id: a1.id , album_id: al1.id , title: "Garden" , track_num: 2 , audio_file_name: "" )
# s26 = Track.create!(artist_id: a1.id , album_id: al1.id , title: "Daydreaming" , track_num: 3 , audio_file_name: "" )
# s27 = Track.create!(artist_id: a1.id , album_id: al1.id , title: "Clocks" , track_num: 4 , audio_file_name: "" )


s6 = Track.create!(artist_id: a2.id , album_id: al2.id , title: "Weight" , track_num: 1 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/01+Weight.mp3" )
s7 = Track.create!(artist_id: a2.id , album_id: al2.id , title: "Paper Clouds" , track_num: 2 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/02+Paper+Clouds.mp3" )
s8 = Track.create!(artist_id: a2.id , album_id: al2.id , title: "Can't You See" , track_num: 3 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/03+Can't+You+See.mp3" )
s9 = Track.create!(artist_id: a2.id , album_id: al2.id , title: "Ninth Street" , track_num: 4 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/04+Ninth+Street.mp3" )
s10 = Track.create!(artist_id: a2.id , album_id: al2.id , title: "Do I Know Me" , track_num: 5 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/05+Do+I+Know+Me.mp3" )
s11 = Track.create!(artist_id: a2.id , album_id: al2.id , title: "Comfort" , track_num: 6 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/06+Comfort.mp3" )
s12 = Track.create!(artist_id: a2.id , album_id: al2.id , title: "Bread and Butter" , track_num: 7 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/07+Bread+and+Butter+(acoustic).mp3" )
s13 = Track.create!(artist_id: a2.id , album_id: al2.id , title: "Love Ray" , track_num: 8 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/08+Love+Ray+ft.+Wei+Yan.mp3" )
s14 = Track.create!(artist_id: a2.id , album_id: al2.id , title: "Hello Friend" , track_num: 9 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/09+Hello+Friend.mp3" )


s15 = Track.create!(artist_id: a3.id , album_id: al3.id , title: "Reformers" , track_num: 1 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/01+Weight.mp3" )
s16 = Track.create!(artist_id: a3.id , album_id: al3.id , title: "Suddenly" , track_num: 2 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/02+Paper+Clouds.mp3" )
s17 = Track.create!(artist_id: a3.id , album_id: al3.id , title: "Beauty Arise" , track_num: 3 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/03+Can't+You+See.mp3" )
s18 = Track.create!(artist_id: a3.id , album_id: al3.id , title: "Love Never Fails" , track_num: 4 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/04+Ninth+Street.mp3" )
s19 = Track.create!(artist_id: a3.id , album_id: al3.id , title: "Come Away With Me" , track_num: 5 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/05+Do+I+Know+Me.mp3" )
s20 = Track.create!(artist_id: a3.id , album_id: al3.id , title: "No Greater Love" , track_num: 6 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/06+Comfort.mp3" )
s21 = Track.create!(artist_id: a3.id , album_id: al3.id , title: "I Surrender" , track_num: 7 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/07+Bread+and+Butter+(acoustic).mp3" )
s23 = Track.create!(artist_id: a3.id , album_id: al3.id , title: "The Secret" , track_num: 8 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/08+Love+Ray+ft.+Wei+Yan.mp3" )

s28 = Track.create!(artist_id: a4.id , album_id: al4.id , title: "Suits and Slippers" , track_num: 1 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/01-Suits-and-Slippers.mp3" )
s29 = Track.create!(artist_id: a4.id , album_id: al4.id , title: "Interlude!" , track_num: 2 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/02-Interlude.mp3" )
s30 = Track.create!(artist_id: a4.id , album_id: al4.id , title: "Foreign Tongue" , track_num: 3 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/03-Foreign-Tongue.mp3" )
s31 = Track.create!(artist_id: a4.id , album_id: al4.id , title: "404" , track_num: 4 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/04-404.mp3" )
s32 = Track.create!(artist_id: a4.id , album_id: al4.id , title: "Onsen" , track_num: 5 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/05-Onsen.mp3" )
s33 = Track.create!(artist_id: a4.id , album_id: al4.id , title: "Shinjuku Station" , track_num: 6 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/06-Shinjuku-Station.mp3" )
s34 = Track.create!(artist_id: a4.id , album_id: al4.id , title: "Sing-a-pore" , track_num: 7 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/07-Sing-a-pore.mp3" )

s36 = Track.create!(artist_id: a5.id , album_id: al5.id , title: "I want to Die" , track_num: 1 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/03+I+Want+To+Die.mp3" )

s37 = Track.create!(artist_id: a6.id , album_id: al6.id , title: "What Child Is This" , track_num: 1 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/What+Child+Is.mp3" )

s38 = Track.create!(artist_id: a7.id , album_id: al7.id , title: "Weight" , track_num: 1 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/01+Weight.mp3" )
s39 = Track.create!(artist_id: a7.id , album_id: al7.id , title: "Paper Clouds" , track_num: 2 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/07+Paper+Clouds.mp3" )
s40 = Track.create!(artist_id: a7.id , album_id: al7.id , title: "Can't You See" , track_num: 3 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/03+Can't+You+See.mp3" )
s41 = Track.create!(artist_id: a7.id , album_id: al7.id , title: "Ninth Street" , track_num: 4 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/04+Ninth+Street.mp3" )
s42 = Track.create!(artist_id: a7.id , album_id: al7.id , title: "Do I Know Me" , track_num: 5 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/05+Do+I+Know+Me.mp3" )
s43 = Track.create!(artist_id: a7.id , album_id: al7.id , title: "Comfort" , track_num: 6 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/06+Comfort.mp3" )
s44 = Track.create!(artist_id: a7.id , album_id: al7.id , title: "Bread and Butter" , track_num: 7 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/07+Bread+and+Butter+(acoustic).mp3" )
s45 = Track.create!(artist_id: a7.id , album_id: al7.id , title: "Love Ray" , track_num: 8 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/08+Love+Ray+ft.+Wei+Yan.mp3" )
s46 = Track.create!(artist_id: a7.id , album_id: al7.id , title: "Hello Friend" , track_num: 9 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/09+Hello+Friend.mp3" )


s47 = Track.create!(artist_id: a8.id , album_id: al8.id , title: "Weight" , track_num: 1 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/01+Weight.mp3" )
s48 = Track.create!(artist_id: a8.id , album_id: al8.id , title: "Paper Clouds" , track_num: 2 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/08+Paper+Clouds.mp3" )
s49 = Track.create!(artist_id: a8.id , album_id: al8.id , title: "Can't You See" , track_num: 3 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/03+Can't+You+See.mp3" )
s50 = Track.create!(artist_id: a8.id , album_id: al8.id , title: "Ninth Street" , track_num: 4 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/04+Ninth+Street.mp3" )
s51 = Track.create!(artist_id: a8.id , album_id: al8.id , title: "Do I Know Me" , track_num: 5 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/05+Do+I+Know+Me.mp3" )
s52 = Track.create!(artist_id: a8.id , album_id: al8.id , title: "Comfort" , track_num: 6 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/06+Comfort.mp3" )
s53 = Track.create!(artist_id: a8.id , album_id: al8.id , title: "Bread and Butter" , track_num: 7 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/08+Bread+and+Butter+(acoustic).mp3" )
s45 = Track.create!(artist_id: a8.id , album_id: al8.id , title: "Love Ray" , track_num: 8 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/08+Love+Ray+ft.+Wei+Yan.mp3" )
s46 = Track.create!(artist_id: a8.id , album_id: al8.id , title: "Hello Friend" , track_num: 9 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/09+Hello+Friend.mp3" )

s47 = Track.create!(artist_id: a9.id , album_id: al9.id , title: "I want to Die" , track_num: 1 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/03+I+Want+To+Die.mp3" )
s48 = Track.create!(artist_id: a10.id , album_id: al10.id , title: "I want to Die" , track_num: 1 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/03+I+Want+To+Die.mp3" )
s49 = Track.create!(artist_id: a11.id , album_id: al11.id , title: "I want to Die" , track_num: 1 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/03+I+Want+To+Die.mp3" )
s50 = Track.create!(artist_id: a12.id , album_id: al12.id , title: "I want to Die" , track_num: 1 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/03+I+Want+To+Die.mp3" )
