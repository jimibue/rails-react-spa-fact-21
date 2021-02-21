class Api::FactsController < ApplicationController
    def index
      render json: Fact.all
    end
    
    def create
      fact = Fact.new(fact_params)
      if fact.save
      render json: fact
      else
      render json: { errors: fact.errors }, status: :unprocessable_entity
      end
    end
    
    def update
      fact = Fact.find(params[:id])
      
      if fact.update(fact_params)
       render json: fact
      else
        render json: { errors: fact.errors }, status: :unprocessable_entity
      end
    
    end
    
    def destroy
      fact = Fact.find(params[:id]).destroy
      render json: fact
    end
    
    private
    
      def fact_params
        params.require(:fact).permit(:text, :source, :username, :stars)
      end
    
    end
