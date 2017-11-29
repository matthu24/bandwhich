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

u1 = User.create!(username: "guest", password: "password")

#bio_rand = rand(1) + 1
#bio: faker::Hipster.paragraph(bio_rand)
a1 = Artist.create!(name: "Matthew Hu", genre: "Inspired by the likes of Tchaikovsky and good coffee.  From Seattle, WA.", image_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/MatthewHuProfile.png" )
a2 = Artist.create!(name: "Harry Liu", genre: "Singer-songwriter from Bay Area, CA. Vibes. Grooves. Jams. Let's go.  These tracks are the culmination of a couple years of work, smiles and laughter from friends from all places, and the support of a very special person. I hope you pick out the love, life, and thoughts in the songs you're about to hear.", image_file_name:"https://i.imgur.com/ha2cGju.jpg")
a3 = Artist.create!(name: "Melody Hwang", genre: "I consider myself a storyteller who loves using music as a means of changing the world.  Melody Hwang's debut album featuring powerfully expressive songs in a unique blend of modern electronic pop and traditional orchestral tones", image_file_name: "https://i.imgur.com/mMm2gJ8.jpg" )
a4 = Artist.create!(name: "Edan Lewis", genre: "I made these songs, while working at a hotel in Aomori, Japan; from the confines of room 404.", image_file_name: "https://i.imgur.com/0TaHyLy.jpg")

# :artist_id,:title,:year,:image_file_name
al1 = Album.create!(artist_id: a1.id, title: "Paper Dream", year: 2017, image_file_name:"https://i.imgur.com/VFbDBRs.jpg" )
al2 = Album.create!(artist_id: a2.id, title: "Ninth Street", year: 2017, image_file_name: "https://i.imgur.com/PfOGvOH.jpg")
al3 = Album.create!(artist_id: a3.id, title: "Suddenly", year: 2015, image_file_name: "https://i.imgur.com/MtOVLwY.jpg" )
al4 = Album.create!(artist_id: a4.id, title: "The 404 Sessions", year: 2015, image_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/404Session.png" )


s1 = Track.create!(artist_id: a1.id , album_id: al1.id , title: "Prelude" , track_num: 1 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/01_Prelude%2Bmastering_1_variant.wav" )
s2 = Track.create!(artist_id: a1.id , album_id: al1.id , title: "Garden" , track_num: 2 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/02_Garden%2Bmastering_3_variant.wav" )
s3 = Track.create!(artist_id: a1.id , album_id: al1.id , title: "Daydreaming" , track_num: 3 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/03_Daydreaming%2Bmastering_3_variant.wav" )
s4 = Track.create!(artist_id: a1.id , album_id: al1.id , title: "Clocks" , track_num: 4 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/04_Clocks_mix6+(1).wav" )
s5 = Track.create!(artist_id: a1.id , album_id: al1.id , title: "In Between" , track_num: 5 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/05_In_Between%2Bmastering_3_variant.wav" )
s24 = Track.create!(artist_id: a1.id , album_id: al1.id , title: "Prelude" , track_num: 1 , audio_file_name: "" )
s25 = Track.create!(artist_id: a1.id , album_id: al1.id , title: "Garden" , track_num: 2 , audio_file_name: "" )
s26 = Track.create!(artist_id: a1.id , album_id: al1.id , title: "Daydreaming" , track_num: 3 , audio_file_name: "" )
s27 = Track.create!(artist_id: a1.id , album_id: al1.id , title: "Clocks" , track_num: 4 , audio_file_name: "" )


s6 = Track.create!(artist_id: a2.id , album_id: al2.id , title: "Weight" , track_num: 1 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/01+Weight.mp3" )
s7 = Track.create!(artist_id: a2.id , album_id: al2.id , title: "Paper Clouds" , track_num: 2 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/02+Paper+Clouds.mp3" )
s8 = Track.create!(artist_id: a2.id , album_id: al2.id , title: "Can't You See" , track_num: 3 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/03+Can't+You+See.mp3" )
s9 = Track.create!(artist_id: a2.id , album_id: al2.id , title: "Ninth Street" , track_num: 4 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/04+Ninth+Street.mp3" )
s10 = Track.create!(artist_id: a2.id , album_id: al2.id , title: "Do I Know Me" , track_num: 5 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/05+Do+I+Know+Me.mp3" )
s11 = Track.create!(artist_id: a2.id , album_id: al2.id , title: "Comfort" , track_num: 6 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/06+Comfort.mp3" )
s12 = Track.create!(artist_id: a2.id , album_id: al2.id , title: "Bread and Butter" , track_num: 7 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/07+Bread+and+Butter+(acoustic).mp3" )
s13 = Track.create!(artist_id: a2.id , album_id: al2.id , title: "Love Ray" , track_num: 8 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/08+Love+Ray+ft.+Wei+Yan.mp3" )
s14 = Track.create!(artist_id: a2.id , album_id: al2.id , title: "Hello Friend" , track_num: 9 , audio_file_name: "https://s3-us-west-1.amazonaws.com/fullstackfiles/09+Hello+Friend.mp3" )


s15 = Track.create!(artist_id: a3.id , album_id: al3.id , title: "Reformers" , track_num: 1 , audio_file_name: "" )
s16 = Track.create!(artist_id: a3.id , album_id: al3.id , title: "Suddenly" , track_num: 2 , audio_file_name: "" )
s17 = Track.create!(artist_id: a3.id , album_id: al3.id , title: "Beauty Arise" , track_num: 3 , audio_file_name: "" )
s18 = Track.create!(artist_id: a3.id , album_id: al3.id , title: "Love Never Fails" , track_num: 4 , audio_file_name: "" )
s19 = Track.create!(artist_id: a3.id , album_id: al3.id , title: "Come Away With Me" , track_num: 5 , audio_file_name: "" )
s20 = Track.create!(artist_id: a3.id , album_id: al3.id , title: "No Greater Love" , track_num: 6 , audio_file_name: "" )
s21 = Track.create!(artist_id: a3.id , album_id: al3.id , title: "I Surrender" , track_num: 7 , audio_file_name: "" )
s23 = Track.create!(artist_id: a3.id , album_id: al3.id , title: "The Secret of the Secret Place" , track_num: 8 , audio_file_name: "" )

s28 = Track.create!(artist_id: a4.id , album_id: al4.id , title: "Suits and Slippers" , track_num: 1 , audio_file_name: "" )
s29 = Track.create!(artist_id: a4.id , album_id: al4.id , title: "Interlude!" , track_num: 2 , audio_file_name: "" )
s30 = Track.create!(artist_id: a4.id , album_id: al4.id , title: "Foreign Tongue" , track_num: 3 , audio_file_name: "" )
s31 = Track.create!(artist_id: a4.id , album_id: al4.id , title: "404" , track_num: 4 , audio_file_name: "" )
s32 = Track.create!(artist_id: a4.id , album_id: al4.id , title: "Onsen" , track_num: 5 , audio_file_name: "" )
s33 = Track.create!(artist_id: a4.id , album_id: al4.id , title: "Shinjuku Station" , track_num: 6 , audio_file_name: "" )
s34 = Track.create!(artist_id: a4.id , album_id: al4.id , title: "Sing-a-pore" , track_num: 7 , audio_file_name: "" )
s35 = Track.create!(artist_id: a4.id , album_id: al4.id , title: "Karoake" , track_num: 8 , audio_file_name: "" )
