class Card
  @@SUITS = %w(SPADE DIAMOND HEART CLUB)
  @@VALUES = %w(A 2 3 4 5 6 7 8 9 10 J Q K)
  @@UNICODE_SUITS = %w( &#x2660 &#x2666 &#x2764 &#x2663) 
  @@CLASS_STR = %w(ace two three four five six seven eight nine ten jack queen king)
  @@SHORT_SUITS = %w(S D H C)
  @@MAJORS = %w(jack queen king)
  @@POSITIONS = [ 
    ["middle_center"], #A

    ["top_center","bottom_center"],#2

    ["top_center","middle_center","bottom_center"], #3

    ["top_left","top_right","bottom_left","bottom_right"], #4

    ["top_left","top_right","bottom_left","bottom_right","middle_center"],#5

    ["top_left","top_right","bottom_left","bottom_right","middle_left",
      "middle_right"],#6

    ["top_left","top_right","bottom_left","bottom_right","middle_left",
      "middle_right","middle_top"],#7

    ["top_left","top_right","bottom_left","bottom_right","middle_left",
      "middle_right","middle_top","middle_bottom"],#8

    ["top_left","top_right","middle_top_left","middle_top_right","bottom_left",
      "bottom_right","middle_bottom_right","middle_bottom_left","middle_center"], #9

    ["top_left","top_right","middle_top_left","middle_top_center","middle_top_right",
      "bottom_left","bottom_right","middle_bottom_right","middle_bottom_left","middle_bottom_center"]]
                  
  

                  
  attr_accessor :value, :suit

  def html_class_str 
    @@CLASS_STR[@value_num]
  end

  def unicode_suit
    @@UNICODE_SUITS[@suit_num]
  end
  
  def cimage
      ActionController::Base.helpers.asset_path("face-#{@@MAJORS[@value_num-10]}-#{@suit.downcase}.png")
  end

  def self.make_back
    div = ""
    div = 
      "<div class='card-back'>" +
        "  <span class='middle_center'>" +
        "    <img src='#{ActionController::Base.helpers.asset_path("back.png")}'></img>" + 
        "  </span>" +
      "</div>"
  end

  def make_div
    div = "" 
    div =
      "<div class='card-#{html_class_str} #{@suit.downcase}'>" + 
      "  <div class='corner top'>" +
      "    <span class='number'>#{@value}</span>" +
      "    <span>#{unicode_suit}</span>" +
      "  </div>"
    if @value_num < 10 
      @@POSITIONS[@value_num].each do |pos| 
        div = div + 
        "  <span class='suit #{pos}'>#{unicode_suit}</span>"
      end 
    else
      div = div + "" +
        "  <span class='face middle_center'>" +
        "    <img src='#{cimage}'></img>" + 
        "  </span>" 
    end
    div = div + "" +
      "  <div class='corner bottom'>" +
      "    <span class='number'>#{@value}</span>" + 
      "    <span>#{unicode_suit}</span>" +
      "  </div>"
     div =div + "" + "</div>"         
     div.html_safe
  end

  def initialize(id)
    @id = id
    @suit_num =  (id-1)/13
    @value_num =  (id-1) % 13
    @suit = @@SUITS[@suit_num]
    @value =@@VALUES[@value_num]
  end

  def self.suits 
    @@SUITS
  end

  def self.values 
    @@VALUES
  end

  def to_s
    "#{@value}#{@@SHORT_SUITS[@suit_num]}"
  end
end
