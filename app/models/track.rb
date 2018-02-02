class Track < ApplicationRecord
  validates :title, presence: true
  belongs_to :album
  belongs_to :artist

  def self.top_results(query_param)
    #param is array of letters from query
    param = query_param.downcase.split('');
    #turn array into string separating each letter with %
    param = param.join('%');
    #add % to beginning and end
    param = '%' + param + '%';
    #active record qury: search tracks where title(lowercase) is like param and limit to 5 results
    Track.where('lower(title) LIKE ?', param).limit(5)

  end

end
