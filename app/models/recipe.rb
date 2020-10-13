module ActiveRecord
    module QueryMethods
      def select_append(*fields)
        if(!select_values.any?)
          fields.unshift(arel_table[Arel.star])
        end
        select(*fields)
      end
    end
end
  
class Recipe < ApplicationRecord
    has_many :ingredients

    def self.containing_ingredients(ingredients)
        self.joins(:ingredients)
            .select_append('count(ingredients.name)')
            .where('ingredients.name ilike any (array[?])', ingredients.map {|val| "% #{val} %" })
            .order('count(ingredients.name) desc')
            .group(:id)
            
    end
end
