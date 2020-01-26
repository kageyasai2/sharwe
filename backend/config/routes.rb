Rails.application.routes.draw do
  namespace :api do
    mount_devise_token_auth_for 'User', at: 'auth',controllers: {
      sessions: 'api/auth/sessions',
      registrations: 'api/auth/registrations'
    }
  end
end
