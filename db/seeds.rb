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

u1 = User.create!(username: "guest", password: "password")


a1 = Artist.create!(name: "Matthew Hu", genre: "folk", image_file_name: "https://i.imgur.com/SD87Luu.jpg" )
a2 = Artist.create!(name: "Harry Liu", genre: "pop", image_file_name:"https://i.imgur.com/ha2cGju.jpg")
a3 = Artist.create!(name: "Melody Hwang", genre: "gospel", image_file_name: "https://i.imgur.com/mMm2gJ8.jpg" )

# :artist_id,:title,:year,:image_file_name
al1 = Album.create!(artist_id: a1.id, title: "Paper Dream", year: 2017, image_file_name:"https://i.imgur.com/VFbDBRs.jpg" )
al2 = Album.create!(artist_id: a2.id, title: "Ninth Street", year: 2017, image_file_name: "https://i.imgur.com/PfOGvOH.jpg")
al3 = Album.create!(artist_id: a3.id, title: "Suddenly", year: 2015, image_file_name: "https://i.imgur.com/MtOVLwY.jpg" )
