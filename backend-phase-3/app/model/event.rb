class Event < ActiveRecord::Base
    has_many :venues
    has_many :guests, through: :venues
end