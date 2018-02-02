class Artist < ApplicationRecord
  validates :name, presence: true
  has_many :albums
  has_many :tracks
  has_many :comments

  def self.top_results(query_param)
    #param is array of letters from query
    param = query_param.downcase.split('');
    #turn array into string separating each letter with %
    param = param.join('%');
    #add % to beginning and end
    param = '%' + param + '%';
    #active record qury
    Artist.where('lower(name) LIKE ?', param).limit(5)

  end

end
