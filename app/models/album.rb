class Album < ApplicationRecord
  validates :title, presence: true
  belongs_to :artist
  has_many :tracks

  def self.top_results(query_param)
    #param is array of letters from query
    param = query_param.downcase.split('');
    #turn array into string separating each letter with %
    param = param.join('%');
    #add % to beginning and end
    param = '%' + param + '%';
    #active record qury
    Album.where('lower(title) LIKE ?', param).limit(5)

  end

end
