Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :searches, only: [:index]
    resources :users, only: [:create, :update, :show,:index]
    resources :artists, only: [:create,:update,:show,:index] do
      resources :albums, only: [:index]
      resources :comments, only: [:create,:update,:index]
    end
    resource :session, only: [:create, :destroy]
    resources :albums, only: [:show, :update, :index] do
      resources :tracks, only: [:index]
    end
    resources :tracks, only: [:show, :update, :index]
    resources :comments, only: [:destroy,:show]
    # resources :searches, only: [:index, :show]
    # get '/user/:user_id/albums', to: 'albums#select_albums'
  end
end
