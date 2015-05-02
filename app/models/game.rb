class Game < ActiveRecord::Base
  @@STATES = %w(JUST_CREATED,IN_GAME)
  def self.get_state(s) 
    @@STATES.index(s)
  end

end
