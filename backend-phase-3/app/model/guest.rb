class Guest < ActiveRecord::Base
    has_many :venues
    has_many :events, through: :venues
end