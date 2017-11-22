Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html



  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update, :show,:index] do
      resources :albums, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :albums, only: [:show, :update, :index] do
      resources :tracks, only: [:index]
    end
    resources :tracks, only: [:show, :update, :index]
    # resources :searches, only: [:index, :show]
    # get '/user/:user_id/albums', to: 'albums#select_albums'
  end
end
