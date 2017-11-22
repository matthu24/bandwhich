class CreateAlbums < ActiveRecord::Migration[5.1]
  def change
    create_table :albums do |t|
      t.integer :artist_id
      t.string :title
      t.integer :year
      t.string :image_file_name
      t.timestamps
    end
  end
end
