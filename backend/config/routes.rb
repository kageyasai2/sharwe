Rails.application.routes.draw do
  namespace :api do
    namespace :auth do
      post '/sign_in', to: 'oauth#google'
    end
  end
end
