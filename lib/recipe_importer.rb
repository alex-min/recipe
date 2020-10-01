class RecipeImporter
    def self.import(data)
        recipe = Recipe.new(
            name: data["name"],
            difficulty: data["difficulty"]
        )
        recipe.ingredients = data["ingredients"].map do |ingredient|
            Ingredient.new(name: ingredient)
        end
        recipe
    end
end