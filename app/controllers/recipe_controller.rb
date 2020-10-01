class RecipeController < ApplicationController
    def index
    end

    def search
        ingredients = params.as_json["_json"]
        render json: Recipe.containing_ingredients(ingredients).limit(20)
    end
end
