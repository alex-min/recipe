recipes = File.open("#{__dir__}/recipes.json", encoding: 'utf-8').read
JSON.parse(recipes.each_line.first)
models = []
recipes.each_line do |line|
    return if line == "\n"
    recipe = JSON.parse(line)
    models << RecipeImporter.import(recipe)
end
Recipe.import models, recursive: true
