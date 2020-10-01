class Recipe < ApplicationRecord
    has_many :ingredients

    def self.containing_ingredients(ingredients)
        self.joins(:ingredients)
            .where("ingredients.name ilike any (array[?])", ingredients.map {|val| "%#{val}%" })
            .distinct
    end
end
