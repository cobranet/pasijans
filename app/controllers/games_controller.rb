class GamesController < ApplicationController

  def show
    @move = params[:move]
    @game = Game.find(params[:id].to_i)
    @int_state = InternalState.new(1)
  end

  def get_json
    @int_state = InternalState.new(1)
    render json: @int_state.json(params[:from])
  end

  def create
    user = current_user
    g = Game.new
    g.user_id = user.id
    g.state = Game.get_state("JUST_CREATED")
    g.save!
    redirect_to game_path(g.id)
  end
end
