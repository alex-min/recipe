recipes = File.open('./recipes.json', encoding: 'utf-8').read
JSON.parse(recipes.each_line.first)
models = []
recipes.each_line do |line|
    begin
        recipe = JSON.parse(line)
        models << ReceipeParser.save(recipe)
    rescue JSON::ParserError
    end
end
print(models)
Recipe.import models
