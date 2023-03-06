class ApplicationController < Sinatra::Base

    get '/guests' do
        Guest.all.to_json
    end

    get '/guests/:search' do
        Guest.where("name LIKE :query", query: "%#{params[:search]}%").to_json
    end

    get'/getguest/:id' do
        Guest.find(params[:id]).to_json
    end

    post '/guests' do
        Guest.create(params).to_json
    end

    patch '/guests/:id' do
        Guest.find(params[:id]).update(params)
        Guest.find(params[:id]).to_json
    end

    delete '/guests/:id' do
        Guest.destroy(params[:id])
        Hash.new.to_json
    end


    get '/events' do
        Event.all.to_json
    end

    get '/events/:search' do
        Event.where("name LIKE :query", query: "%#{params[:search]}%").to_json
    end

    get'/getevent/:id' do
        Event.find(params[:id]).to_json(include: :guests)
    end

    post '/events' do
        Event.create(params).to_json
    end

    patch '/events/:id' do
        Event.find(params[:id]).update(params)
        Event.find(params[:id]).to_json
    end

    delete '/events/:id' do
        Event.destroy(params[:id])
        Hash.new.to_json
    end

    get '/venues' do
        Venue.all.to_json
    end
end