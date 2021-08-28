
rails6で、vue.jsでaxiosを利用する


$rails new rails_api

$cd rails_api

$rails s

$rails g controller top show
コントローラーとビューを作成

get "", to: "top#show"
ルーティングlocalhost:3000/でshow.html.erbを表示できるようにする

def show
end
top_controller.rbに以上を追記

$bundle exec rails webpacker:install:vue
以下のコマンドを実行すれば，vue.jsを利用するにあたり必要なファイルを用意してくれる

show.html.erbに
<%= javascript_pack_tag 'hello_vue' %>
<%= stylesheet_pack_tag 'hello_vue' %>
を追加

「Hello Vue!!」と表示されていれば、環境構築は完了です.

axiosを利用するのでインストール
yarn add axios

show.html.erb



Access to XMLHttpRequest at 'http://localhost:8000/api/entries/1/?format=json' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
