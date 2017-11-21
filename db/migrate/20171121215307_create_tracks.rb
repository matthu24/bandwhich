class CreateTracks < ActiveRecord::Migration[5.1]
  def change
    create_table :tracks do |t|
      t.integer :user_id
      t.integer :album_id
      t.string :title
      t.integer :track_num
      t.string :audio_file_name
      t.timestamps
    end
  end
end
