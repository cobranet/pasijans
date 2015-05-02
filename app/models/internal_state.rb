class InternalState < ActiveRecord::Base
  attr_accessor :cols
  def initialize(game_id) 
    @p = Pasians.new
    @p.shuffle
  end
  def json(from)
    @moves = []
    @p.cols.each_with_index do |col,i|
      @moves << { action: "create_stack",
                  params: ["col#{i+1}","V",240+i*100,30,30]}
      col.each_with_index do |c,k|
        if col.size == k+1
          @moves << { action: "add_card_to_stack",
                      params: ["col#{i+1}",c,true]}
        else
          @moves << { action: "add_card_to_stack",
                      params: ["col#{i+1}",53,true]}
        end 
      end
    end  
    {moves: @moves.to_json , messages: from }
  end
end
