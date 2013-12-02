CapybaraApp::Application.routes.draw do
  root to: 'welcome#index'
  resources :javascript

end
