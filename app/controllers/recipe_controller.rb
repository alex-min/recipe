class RecipeController < ApplicationController
    def index
    end

    def search
        queries = params.as_json["_json"]
        ingredients = queries.map {|val| "%#{val}%" }
        render json: Recipe.joins(:ingredients)
            .where("ingredients.name ilike any (array[?])", ingredients)
            .limit(10)
    end
end
