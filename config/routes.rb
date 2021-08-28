Rails.application.routes.draw do

get "", to: "top#show"
get "index", to: "top#index"
get "index1", to: "top#index1"
get "index2", to: "top#index2"
get "index3", to: "top#index3"
get "index4", to: "top#index4"
get "index5", to: "top#index5"
get "index6", to: "top#index6"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
