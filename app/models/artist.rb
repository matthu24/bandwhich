class Artist < ApplicationRecord
  validates :name, presence: true
  has_many :albums
  has_many :tracks
  has_many :comments
end
