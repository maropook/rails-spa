Rails.application.routes.draw do
get "", to: "top#article"
get "show", to: "top#show"
end
