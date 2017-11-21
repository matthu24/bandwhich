class Track < ApplicationRecord
  validates :title, presence: true
  belongs_to :album
  belongs_to :user
end
