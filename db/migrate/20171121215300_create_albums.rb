class CreateAlbums < ActiveRecord::Migration[5.1]
  def change
    create_table :albums do |t|
      t.integer :user_id
      t.string :title
      t.integer :year 
      t.timestamps
    end
  end
end
