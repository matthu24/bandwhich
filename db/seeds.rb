# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Artist.destroy_all

u1 = User.create!(username: "guest", password: "password")


a1 = Artist.create!(name: "Matthew Hu", genre: "folk", image_file_name: "https://i.imgur.com/YpAtKSL.jpg" )
a2 = Artist.create!(name: "Harry Liu", genre: "pop", image_file_name:"https://i.imgur.com/ha2cGju.jpg")
a3 = Artist.create!(name: "Melody Hwang", genre: "gospel", image_file_name: "https://i.imgur.com/mMm2gJ8.jpg" )
