class Pasians
  attr_accessor :cols
  def initialize
    @stack_draw = [] 
    @stack_open_draw = [] 
    @cols = [] 
    @stacks_open = [] 
    7.times do |col|
      @cols << [] 
    end  
    4.times do |colors|
      @stacks_open << [] 
    end
  end
  
  def shuffle
    all = []
    52.times do |c|
      all << c + 1
    end  
    i = 0;
    all.shuffle!    
    7.times do |x|
      (x+1).times do |y|
        @cols[x][y] = all.delete_at(0)
        i= i+1
      end
    end  
    @stack_draw = all
    self
  end
end
