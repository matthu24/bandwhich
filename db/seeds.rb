# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Artist.destroy_all
Album.destroy_all
Track.destroy_all

u1 = User.create!(username: "guest", password: "password")


a1 = Artist.create!(name: "Matthew Hu", genre: "folk", image_file_name: "https://i.imgur.com/SD87Luu.jpg" )
a2 = Artist.create!(name: "Harry Liu", genre: "pop", image_file_name:"https://i.imgur.com/ha2cGju.jpg")
a3 = Artist.create!(name: "Melody Hwang", genre: "gospel", image_file_name: "https://i.imgur.com/mMm2gJ8.jpg" )
a4 = Artist.create!(name: "Edan Lewis", genre: "indie", image_file_name: "https://i.imgur.com/0TaHyLy.jpg")

# :artist_id,:title,:year,:image_file_name
al1 = Album.create!(artist_id: a1.id, title: "Paper Dream", year: 2017, image_file_name:"https://i.imgur.com/VFbDBRs.jpg" )
al2 = Album.create!(artist_id: a2.id, title: "Ninth Street", year: 2017, image_file_name: "https://i.imgur.com/PfOGvOH.jpg")
al3 = Album.create!(artist_id: a3.id, title: "Suddenly", year: 2015, image_file_name: "https://i.imgur.com/MtOVLwY.jpg" )
al4 = Album.create!(artist_id: a4.id, title: "The 404 Sessions", year: 2015, image_file_name: "https://i.imgur.com/5eCsBP0.jpg" )


s1 = Track.create!(artist_id: a1.id , album_id: al1.id , title: "Prelude" , track_num: 1 , audio_file_name: "" )
s2 = Track.create!(artist_id: a1.id , album_id: al1.id , title: "Garden" , track_num: 2 , audio_file_name: "" )
s3 = Track.create!(artist_id: a1.id , album_id: al1.id , title: "Daydreaming" , track_num: 3 , audio_file_name: "" )
s4 = Track.create!(artist_id: a1.id , album_id: al1.id , title: "Clocks" , track_num: 4 , audio_file_name: "" )
s5 = Track.create!(artist_id: a1.id , album_id: al1.id , title: "In Between" , track_num: 5 , audio_file_name: "" )
s24 = Track.create!(artist_id: a1.id , album_id: al1.id , title: "Prelude" , track_num: 1 , audio_file_name: "" )
s25 = Track.create!(artist_id: a1.id , album_id: al1.id , title: "Garden" , track_num: 2 , audio_file_name: "" )
s26 = Track.create!(artist_id: a1.id , album_id: al1.id , title: "Daydreaming" , track_num: 3 , audio_file_name: "" )
s27 = Track.create!(artist_id: a1.id , album_id: al1.id , title: "Clocks" , track_num: 4 , audio_file_name: "" )


s6 = Track.create!(artist_id: a2.id , album_id: al2.id , title: "Weight" , track_num: 1 , audio_file_name: "" )
s7 = Track.create!(artist_id: a2.id , album_id: al2.id , title: "Paper Clouds" , track_num: 2 , audio_file_name: "" )
s8 = Track.create!(artist_id: a2.id , album_id: al2.id , title: "Can't You See" , track_num: 3 , audio_file_name: "" )
s9 = Track.create!(artist_id: a2.id , album_id: al2.id , title: "Ninth Street" , track_num: 4 , audio_file_name: "" )
s10 = Track.create!(artist_id: a2.id , album_id: al2.id , title: "Do I Know Me" , track_num: 5 , audio_file_name: "" )
s11 = Track.create!(artist_id: a2.id , album_id: al2.id , title: "Comfort" , track_num: 6 , audio_file_name: "" )
s12 = Track.create!(artist_id: a2.id , album_id: al2.id , title: "Bread and Butter" , track_num: 7 , audio_file_name: "" )
s13 = Track.create!(artist_id: a2.id , album_id: al2.id , title: "Love Ray" , track_num: 8 , audio_file_name: "" )
s14 = Track.create!(artist_id: a2.id , album_id: al2.id , title: "Hello Friend" , track_num: 9 , audio_file_name: "" )


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
s32 = Track.create!(artist_id: a4.id , album_id: al4.id , title: "Onseen" , track_num: 5 , audio_file_name: "" )
s33 = Track.create!(artist_id: a4.id , album_id: al4.id , title: "Shinjuku Station" , track_num: 6 , audio_file_name: "" )
s34 = Track.create!(artist_id: a4.id , album_id: al4.id , title: "Sing-a-pore" , track_num: 7 , audio_file_name: "" )
s35 = Track.create!(artist_id: a4.id , album_id: al4.id , title: "Karoake" , track_num: 8 , audio_file_name: "" )
