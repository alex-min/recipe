Rails.application.routes.draw do
  get '/', to: 'recipe#index'
  post '/search', to: 'recipe#search'
end
