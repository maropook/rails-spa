Rails.application.routes.draw do
get "", to: "top#article"
get "todo", to: "top#todo"
get "chat", to: "top#chat"
get "show", to: "top#show"
get "rakuten", to: "top#rakuten"
get "book", to: "top#book"

end
