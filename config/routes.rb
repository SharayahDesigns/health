Rails.application.routes.draw do

namespace :api do
  get "all_good", to: "appointments#all_connecting"
  resources :patients
  resources :appointments
  resources :doctors

post 'patients/:id/appointments', to: "appointments#create_with_pat"
post 'doctors/:id/appointments', to: "appointments#create_with_doc"



end

end
