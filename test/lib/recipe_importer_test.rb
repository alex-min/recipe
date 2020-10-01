require 'test_helper'

class RecipeImporterTest < ActiveSupport::TestCase
    test "imports receipes properly" do
      recipe = RecipeImporter.import({
        "name" => 'name',
        "difficulty" => 'difficulty',
        "ingredients" => ["apple", "egg"]
      })
      assert recipe.name, "name"
      assert recipe.difficulty, "difficulty"
      assert recipe.ingredients.map{|i| i.name}, ["apple", "egg"]
   end
end