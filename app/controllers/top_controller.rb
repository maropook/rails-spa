class TopController < ApplicationController

    def show
        # パラメーターを設定

        # URIを設定
        uri = URI.parse("https://api.coindesk.com/v1/bpi/currentprice.json")

        @query = uri.query

        response = Net::HTTP.start(uri.host, uri.port) do |http|
          # 接続時の待機時間
          http.open_timeout = 10
          # ブロックする最大秒数
          http.read_timeout = 20
          # APIをリクエスト
          http.get(uri.request_uri)
        end
        # 例外処理
        begin
        @results = JSON.parse(response)
          @result = JSON.parse(response.body)
          @results = JSON.parse(response)
          @id = @result[0]["id"]


          # エラー処理
        rescue => e
          @message = "e.message"
        end
    end

    def index
    end

    def index1
    end

    def index2
    end

    def index3
    end

    def index4
    end

    def index5
    end

    def index6
    end
end
