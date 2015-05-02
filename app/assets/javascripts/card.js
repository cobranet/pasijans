var Cards = (function () {
var divs = [
    "<div class='card-ace spade'><div class='corner top'><span class='number'>A</span><span>&#x2660</span></div><span class='suit middle_center'>&#x2660</span>  <div class='corner bottom'><span class='number'>A</span><span>&#x2660</span></div></div>",
    "<div class='card-two spade'>  <div class='corner top'>    <span class='number'>2</span>    <span>&#x2660</span>  </div>  <span class='suit top_center'>&#x2660</span>  <span class='suit bottom_center'>&#x2660</span>  <div class='corner bottom'>    <span class='number'>2</span>    <span>&#x2660</span>  </div></div>",
    "<div class='card-three spade'>  <div class='corner top'>    <span class='number'>3</span>    <span>&#x2660</span>  </div>  <span class='suit top_center'>&#x2660</span>  <span class='suit middle_center'>&#x2660</span>  <span class='suit bottom_center'>&#x2660</span>  <div class='corner bottom'>    <span class='number'>3</span>    <span>&#x2660</span>  </div></div>",
    "<div class='card-four spade'>  <div class='corner top'>    <span class='number'>4</span>    <span>&#x2660</span>  </div>  <span class='suit top_left'>&#x2660</span>  <span class='suit top_right'>&#x2660</span>  <span class='suit bottom_left'>&#x2660</span>  <span class='suit bottom_right'>&#x2660</span>  <div class='corner bottom'>    <span class='number'>4</span>    <span>&#x2660</span>  </div></div>",
    "<div class='card-five spade'>  <div class='corner top'>    <span class='number'>5</span>    <span>&#x2660</span>  </div>  <span class='suit top_left'>&#x2660</span>  <span class='suit top_right'>&#x2660</span>  <span class='suit bottom_left'>&#x2660</span>  <span class='suit bottom_right'>&#x2660</span>  <span class='suit middle_center'>&#x2660</span>  <div class='corner bottom'>    <span class='number'>5</span>    <span>&#x2660</span>  </div></div>",
    "<div class='card-six spade'>  <div class='corner top'>    <span class='number'>6</span>    <span>&#x2660</span>  </div>  <span class='suit top_left'>&#x2660</span>  <span class='suit top_right'>&#x2660</span>  <span class='suit bottom_left'>&#x2660</span>  <span class='suit bottom_right'>&#x2660</span>  <span class='suit middle_left'>&#x2660</span>  <span class='suit middle_right'>&#x2660</span>  <div class='corner bottom'>    <span class='number'>6</span>    <span>&#x2660</span>  </div></div>",
    "<div class='card-seven spade'>  <div class='corner top'>    <span class='number'>7</span>    <span>&#x2660</span>  </div>  <span class='suit top_left'>&#x2660</span>  <span class='suit top_right'>&#x2660</span>  <span class='suit bottom_left'>&#x2660</span>  <span class='suit bottom_right'>&#x2660</span>  <span class='suit middle_left'>&#x2660</span>  <span class='suit middle_right'>&#x2660</span>  <span class='suit middle_top'>&#x2660</span>  <div class='corner bottom'>    <span class='number'>7</span>    <span>&#x2660</span>  </div></div>",
    "<div class='card-eight spade'>  <div class='corner top'>    <span class='number'>8</span>    <span>&#x2660</span>  </div>  <span class='suit top_left'>&#x2660</span>  <span class='suit top_right'>&#x2660</span>  <span class='suit bottom_left'>&#x2660</span>  <span class='suit bottom_right'>&#x2660</span>  <span class='suit middle_left'>&#x2660</span>  <span class='suit middle_right'>&#x2660</span>  <span class='suit middle_top'>&#x2660</span>  <span class='suit middle_bottom'>&#x2660</span>  <div class='corner bottom'>    <span class='number'>8</span>    <span>&#x2660</span>  </div></div>",
    "<div class='card-nine spade'>  <div class='corner top'>    <span class='number'>9</span>    <span>&#x2660</span>  </div>  <span class='suit top_left'>&#x2660</span>  <span class='suit top_right'>&#x2660</span>  <span class='suit middle_top_left'>&#x2660</span>  <span class='suit middle_top_right'>&#x2660</span>  <span class='suit bottom_left'>&#x2660</span>  <span class='suit bottom_right'>&#x2660</span>  <span class='suit middle_bottom_right'>&#x2660</span>  <span class='suit middle_bottom_left'>&#x2660</span>  <span class='suit middle_center'>&#x2660</span>  <div class='corner bottom'>    <span class='number'>9</span>    <span>&#x2660</span>  </div></div>",
    "<div class='card-ten spade'>  <div class='corner top'>    <span class='number'>10</span>    <span>&#x2660</span>  </div>  <span class='suit top_left'>&#x2660</span>  <span class='suit top_right'>&#x2660</span>  <span class='suit middle_top_left'>&#x2660</span>  <span class='suit middle_top_center'>&#x2660</span>  <span class='suit middle_top_right'>&#x2660</span>  <span class='suit bottom_left'>&#x2660</span>  <span class='suit bottom_right'>&#x2660</span>  <span class='suit middle_bottom_right'>&#x2660</span>  <span class='suit middle_bottom_left'>&#x2660</span>  <span class='suit middle_bottom_center'>&#x2660</span>  <div class='corner bottom'>    <span class='number'>10</span>    <span>&#x2660</span>  </div></div>",
    "<div class='card-jack spade'>  <div class='corner top'>    <span class='number'>J</span>    <span>&#x2660</span>  </div>  <span class='face middle_center'>    <img src='/assets/face-jack-spade.png'></img>  </span>  <div class='corner bottom'>    <span class='number'>J</span>    <span>&#x2660</span>  </div></div>", 
    "<div class='card-queen spade'>  <div class='corner top'>    <span class='number'>Q</span>    <span>&#x2660</span>  </div>  <span class='face middle_center'>    <img src='/assets/face-queen-spade.png'></img>  </span>  <div class='corner bottom'>    <span class='number'>Q</span>    <span>&#x2660</span>  </div></div>",
    "<div class='card-king spade'>  <div class='corner top'>    <span class='number'>K</span>    <span>&#x2660</span>  </div>  <span class='face middle_center'>    <img src='/assets/face-king-spade.png'></img>  </span>  <div class='corner bottom'>    <span class='number'>K</span>    <span>&#x2660</span>  </div></div>",
    "<div class='card-ace diamond'>  <div class='corner top'>    <span class='number'>A</span>    <span>&#x2666</span>  </div>  <span class='suit middle_center'>&#x2666</span>  <div class='corner bottom'>    <span class='number'>A</span>    <span>&#x2666</span>  </div></div>",
    "<div class='card-two diamond'>  <div class='corner top'>    <span class='number'>2</span>    <span>&#x2666</span>  </div>  <span class='suit top_center'>&#x2666</span>  <span class='suit bottom_center'>&#x2666</span>  <div class='corner bottom'>    <span class='number'>2</span>    <span>&#x2666</span>  </div></div>",
    "<div class='card-three diamond'>  <div class='corner top'>    <span class='number'>3</span>    <span>&#x2666</span>  </div>  <span class='suit top_center'>&#x2666</span>  <span class='suit middle_center'>&#x2666</span>  <span class='suit bottom_center'>&#x2666</span>  <div class='corner bottom'>    <span class='number'>3</span>    <span>&#x2666</span>  </div></div>",
    "<div class='card-four diamond'>  <div class='corner top'>    <span class='number'>4</span>    <span>&#x2666</span>  </div>  <span class='suit top_left'>&#x2666</span>  <span class='suit top_right'>&#x2666</span>  <span class='suit bottom_left'>&#x2666</span>  <span class='suit bottom_right'>&#x2666</span>  <div class='corner bottom'>    <span class='number'>4</span>    <span>&#x2666</span>  </div></div>",
    "<div class='card-five diamond'>  <div class='corner top'>    <span class='number'>5</span>    <span>&#x2666</span>  </div>  <span class='suit top_left'>&#x2666</span>  <span class='suit top_right'>&#x2666</span>  <span class='suit bottom_left'>&#x2666</span>  <span class='suit bottom_right'>&#x2666</span>  <span class='suit middle_center'>&#x2666</span>  <div class='corner bottom'>    <span class='number'>5</span>    <span>&#x2666</span>  </div></div>",
    "<div class='card-six diamond'>  <div class='corner top'>    <span class='number'>6</span>    <span>&#x2666</span>  </div>  <span class='suit top_left'>&#x2666</span>  <span class='suit top_right'>&#x2666</span>  <span class='suit bottom_left'>&#x2666</span>  <span class='suit bottom_right'>&#x2666</span>  <span class='suit middle_left'>&#x2666</span>  <span class='suit middle_right'>&#x2666</span>  <div class='corner bottom'>    <span class='number'>6</span>    <span>&#x2666</span>  </div></div>",
    "<div class='card-seven diamond'>  <div class='corner top'>    <span class='number'>7</span>    <span>&#x2666</span>  </div>  <span class='suit top_left'>&#x2666</span>  <span class='suit top_right'>&#x2666</span>  <span class='suit bottom_left'>&#x2666</span>  <span class='suit bottom_right'>&#x2666</span>  <span class='suit middle_left'>&#x2666</span>  <span class='suit middle_right'>&#x2666</span>  <span class='suit middle_top'>&#x2666</span>  <div class='corner bottom'>    <span class='number'>7</span>    <span>&#x2666</span>  </div></div>",
    "<div class='card-eight diamond'>  <div class='corner top'>    <span class='number'>8</span>    <span>&#x2666</span>  </div>  <span class='suit top_left'>&#x2666</span>  <span class='suit top_right'>&#x2666</span>  <span class='suit bottom_left'>&#x2666</span>  <span class='suit bottom_right'>&#x2666</span>  <span class='suit middle_left'>&#x2666</span>  <span class='suit middle_right'>&#x2666</span>  <span class='suit middle_top'>&#x2666</span>  <span class='suit middle_bottom'>&#x2666</span>  <div class='corner bottom'>    <span class='number'>8</span>    <span>&#x2666</span>  </div></div>",
    "<div class='card-nine diamond'>  <div class='corner top'>    <span class='number'>9</span>    <span>&#x2666</span>  </div>  <span class='suit top_left'>&#x2666</span>  <span class='suit top_right'>&#x2666</span>  <span class='suit middle_top_left'>&#x2666</span>  <span class='suit middle_top_right'>&#x2666</span>  <span class='suit bottom_left'>&#x2666</span>  <span class='suit bottom_right'>&#x2666</span>  <span class='suit middle_bottom_right'>&#x2666</span>  <span class='suit middle_bottom_left'>&#x2666</span>  <span class='suit middle_center'>&#x2666</span>  <div class='corner bottom'>    <span class='number'>9</span>    <span>&#x2666</span>  </div></div>",
    "<div class='card-ten diamond'>  <div class='corner top'>    <span class='number'>10</span>    <span>&#x2666</span>  </div>  <span class='suit top_left'>&#x2666</span>  <span class='suit top_right'>&#x2666</span>  <span class='suit middle_top_left'>&#x2666</span>  <span class='suit middle_top_center'>&#x2666</span>  <span class='suit middle_top_right'>&#x2666</span>  <span class='suit bottom_left'>&#x2666</span>  <span class='suit bottom_right'>&#x2666</span>  <span class='suit middle_bottom_right'>&#x2666</span>  <span class='suit middle_bottom_left'>&#x2666</span>  <span class='suit middle_bottom_center'>&#x2666</span>  <div class='corner bottom'>    <span class='number'>10</span>    <span>&#x2666</span>  </div></div>",
    "<div class='card-jack diamond'>  <div class='corner top'>    <span class='number'>J</span>    <span>&#x2666</span>  </div>  <span class='face middle_center'>    <img src='/assets/face-jack-diamond.png'></img>  </span>  <div class='corner bottom'>    <span class='number'>J</span>    <span>&#x2666</span>  </div></div>",
    "<div class='card-queen diamond'>  <div class='corner top'>    <span class='number'>Q</span>    <span>&#x2666</span>  </div>  <span class='face middle_center'>    <img src='/assets/face-queen-diamond.png'></img>  </span>  <div class='corner bottom'>    <span class='number'>Q</span>    <span>&#x2666</span>  </div></div>",
    "<div class='card-king diamond'>  <div class='corner top'>    <span class='number'>K</span>    <span>&#x2666</span>  </div>  <span class='face middle_center'>    <img src='/assets/face-king-diamond.png'></img>  </span>  <div class='corner bottom'>    <span class='number'>K</span>    <span>&#x2666</span>  </div></div>",
    "<div class='card-ace heart'>  <div class='corner top'>    <span class='number'>A</span>    <span>&#x2764</span>  </div>  <span class='suit middle_center'>&#x2764</span>  <div class='corner bottom'>    <span class='number'>A</span>    <span>&#x2764</span>  </div></div>",
    "<div class='card-two heart'>  <div class='corner top'>    <span class='number'>2</span>    <span>&#x2764</span>  </div>  <span class='suit top_center'>&#x2764</span>  <span class='suit bottom_center'>&#x2764</span>  <div class='corner bottom'>    <span class='number'>2</span>    <span>&#x2764</span>  </div></div>",
    "<div class='card-three heart'>  <div class='corner top'>    <span class='number'>3</span>    <span>&#x2764</span>  </div>  <span class='suit top_center'>&#x2764</span>  <span class='suit middle_center'>&#x2764</span>  <span class='suit bottom_center'>&#x2764</span>  <div class='corner bottom'>    <span class='number'>3</span>    <span>&#x2764</span>  </div></div>",
    "<div class='card-four heart'>  <div class='corner top'>    <span class='number'>4</span>    <span>&#x2764</span>  </div>  <span class='suit top_left'>&#x2764</span>  <span class='suit top_right'>&#x2764</span>  <span class='suit bottom_left'>&#x2764</span>  <span class='suit bottom_right'>&#x2764</span>  <div class='corner bottom'>    <span class='number'>4</span>    <span>&#x2764</span>  </div></div>",
    "<div class='card-five heart'>  <div class='corner top'>    <span class='number'>5</span>    <span>&#x2764</span>  </div>  <span class='suit top_left'>&#x2764</span>  <span class='suit top_right'>&#x2764</span>  <span class='suit bottom_left'>&#x2764</span>  <span class='suit bottom_right'>&#x2764</span>  <span class='suit middle_center'>&#x2764</span>  <div class='corner bottom'>    <span class='number'>5</span>    <span>&#x2764</span>  </div></div>",
    "<div class='card-six heart'>  <div class='corner top'>    <span class='number'>6</span>    <span>&#x2764</span>  </div>  <span class='suit top_left'>&#x2764</span>  <span class='suit top_right'>&#x2764</span>  <span class='suit bottom_left'>&#x2764</span>  <span class='suit bottom_right'>&#x2764</span>  <span class='suit middle_left'>&#x2764</span>  <span class='suit middle_right'>&#x2764</span>  <div class='corner bottom'>    <span class='number'>6</span>    <span>&#x2764</span>  </div></div>",
    "<div class='card-seven heart'>  <div class='corner top'>    <span class='number'>7</span>    <span>&#x2764</span>  </div>  <span class='suit top_left'>&#x2764</span>  <span class='suit top_right'>&#x2764</span>  <span class='suit bottom_left'>&#x2764</span>  <span class='suit bottom_right'>&#x2764</span>  <span class='suit middle_left'>&#x2764</span>  <span class='suit middle_right'>&#x2764</span>  <span class='suit middle_top'>&#x2764</span>  <div class='corner bottom'>    <span class='number'>7</span>    <span>&#x2764</span>  </div></div>",
    "<div class='card-eight heart'>  <div class='corner top'>    <span class='number'>8</span>    <span>&#x2764</span>  </div>  <span class='suit top_left'>&#x2764</span>  <span class='suit top_right'>&#x2764</span>  <span class='suit bottom_left'>&#x2764</span>  <span class='suit bottom_right'>&#x2764</span>  <span class='suit middle_left'>&#x2764</span>  <span class='suit middle_right'>&#x2764</span>  <span class='suit middle_top'>&#x2764</span>  <span class='suit middle_bottom'>&#x2764</span>  <div class='corner bottom'>    <span class='number'>8</span>    <span>&#x2764</span>  </div></div>",
    "<div class='card-nine heart'>  <div class='corner top'>    <span class='number'>9</span>    <span>&#x2764</span>  </div>  <span class='suit top_left'>&#x2764</span>  <span class='suit top_right'>&#x2764</span>  <span class='suit middle_top_left'>&#x2764</span>  <span class='suit middle_top_right'>&#x2764</span>  <span class='suit bottom_left'>&#x2764</span>  <span class='suit bottom_right'>&#x2764</span>  <span class='suit middle_bottom_right'>&#x2764</span>  <span class='suit middle_bottom_left'>&#x2764</span>  <span class='suit middle_center'>&#x2764</span>  <div class='corner bottom'>    <span class='number'>9</span>    <span>&#x2764</span>  </div></div>",
    "<div class='card-ten heart'>  <div class='corner top'>    <span class='number'>10</span>    <span>&#x2764</span>  </div>  <span class='suit top_left'>&#x2764</span>  <span class='suit top_right'>&#x2764</span>  <span class='suit middle_top_left'>&#x2764</span>  <span class='suit middle_top_center'>&#x2764</span>  <span class='suit middle_top_right'>&#x2764</span>  <span class='suit bottom_left'>&#x2764</span>  <span class='suit bottom_right'>&#x2764</span>  <span class='suit middle_bottom_right'>&#x2764</span>  <span class='suit middle_bottom_left'>&#x2764</span>  <span class='suit middle_bottom_center'>&#x2764</span>  <div class='corner bottom'>    <span class='number'>10</span>    <span>&#x2764</span>  </div></div>",
    "<div class='card-jack heart'>  <div class='corner top'>    <span class='number'>J</span>    <span>&#x2764</span>  </div>  <span class='face middle_center'>    <img src='/assets/face-jack-heart.png'></img>  </span>  <div class='corner bottom'>    <span class='number'>J</span>    <span>&#x2764</span>  </div></div>",
    "<div class='card-queen heart'>  <div class='corner top'>    <span class='number'>Q</span>    <span>&#x2764</span>  </div>  <span class='face middle_center'>    <img src='/assets/face-queen-heart.png'></img>  </span>  <div class='corner bottom'>    <span class='number'>Q</span>    <span>&#x2764</span>  </div></div>",
    "<div class='card-king heart'>  <div class='corner top'>    <span class='number'>K</span>    <span>&#x2764</span>  </div>  <span class='face middle_center'>    <img src='/assets/face-king-heart.png'></img>  </span>  <div class='corner bottom'>    <span class='number'>K</span>    <span>&#x2764</span>  </div></div>",
    "<div class='card-ace club'>  <div class='corner top'>    <span class='number'>A</span>    <span>&#x2663</span>  </div>  <span class='suit middle_center'>&#x2663</span>  <div class='corner bottom'>    <span class='number'>A</span>    <span>&#x2663</span>  </div></div>",
    "<div class='card-two club'>  <div class='corner top'>    <span class='number'>2</span>    <span>&#x2663</span>  </div>  <span class='suit top_center'>&#x2663</span>  <span class='suit bottom_center'>&#x2663</span>  <div class='corner bottom'>    <span class='number'>2</span>    <span>&#x2663</span>  </div></div>",
    "<div class='card-three club'>  <div class='corner top'>    <span class='number'>3</span>    <span>&#x2663</span>  </div>  <span class='suit top_center'>&#x2663</span>  <span class='suit middle_center'>&#x2663</span>  <span class='suit bottom_center'>&#x2663</span>  <div class='corner bottom'>    <span class='number'>3</span>    <span>&#x2663</span>  </div></div>",
    "<div class='card-four club'>  <div class='corner top'>    <span class='number'>4</span>    <span>&#x2663</span>  </div>  <span class='suit top_left'>&#x2663</span>  <span class='suit top_right'>&#x2663</span>  <span class='suit bottom_left'>&#x2663</span>  <span class='suit bottom_right'>&#x2663</span>  <div class='corner bottom'>    <span class='number'>4</span>    <span>&#x2663</span>  </div></div>",
    "<div class='card-five club'>  <div class='corner top'>    <span class='number'>5</span>    <span>&#x2663</span>  </div>  <span class='suit top_left'>&#x2663</span>  <span class='suit top_right'>&#x2663</span>  <span class='suit bottom_left'>&#x2663</span>  <span class='suit bottom_right'>&#x2663</span>  <span class='suit middle_center'>&#x2663</span>  <div class='corner bottom'>    <span class='number'>5</span>    <span>&#x2663</span>  </div></div>",
    "<div class='card-six club'>  <div class='corner top'>    <span class='number'>6</span>    <span>&#x2663</span>  </div>  <span class='suit top_left'>&#x2663</span>  <span class='suit top_right'>&#x2663</span>  <span class='suit bottom_left'>&#x2663</span>  <span class='suit bottom_right'>&#x2663</span>  <span class='suit middle_left'>&#x2663</span>  <span class='suit middle_right'>&#x2663</span>  <div class='corner bottom'>    <span class='number'>6</span>    <span>&#x2663</span>  </div></div>",
    "<div class='card-seven club'>  <div class='corner top'>    <span class='number'>7</span>    <span>&#x2663</span>  </div>  <span class='suit top_left'>&#x2663</span>  <span class='suit top_right'>&#x2663</span>  <span class='suit bottom_left'>&#x2663</span>  <span class='suit bottom_right'>&#x2663</span>  <span class='suit middle_left'>&#x2663</span>  <span class='suit middle_right'>&#x2663</span>  <span class='suit middle_top'>&#x2663</span>  <div class='corner bottom'>    <span class='number'>7</span>    <span>&#x2663</span>  </div></div>",
    "<div class='card-eight club'>  <div class='corner top'>    <span class='number'>8</span>    <span>&#x2663</span>  </div>  <span class='suit top_left'>&#x2663</span>  <span class='suit top_right'>&#x2663</span>  <span class='suit bottom_left'>&#x2663</span>  <span class='suit bottom_right'>&#x2663</span>  <span class='suit middle_left'>&#x2663</span>  <span class='suit middle_right'>&#x2663</span>  <span class='suit middle_top'>&#x2663</span>  <span class='suit middle_bottom'>&#x2663</span>  <div class='corner bottom'>    <span class='number'>8</span>    <span>&#x2663</span>  </div></div>",
    "<div class='card-nine club'>  <div class='corner top'>    <span class='number'>9</span>    <span>&#x2663</span>  </div>  <span class='suit top_left'>&#x2663</span>  <span class='suit top_right'>&#x2663</span>  <span class='suit middle_top_left'>&#x2663</span>  <span class='suit middle_top_right'>&#x2663</span>  <span class='suit bottom_left'>&#x2663</span>  <span class='suit bottom_right'>&#x2663</span>  <span class='suit middle_bottom_right'>&#x2663</span>  <span class='suit middle_bottom_left'>&#x2663</span>  <span class='suit middle_center'>&#x2663</span>  <div class='corner bottom'>    <span class='number'>9</span>    <span>&#x2663</span>  </div></div>",
    "<div class='card-ten club'>  <div class='corner top'>    <span class='number'>10</span>    <span>&#x2663</span>  </div>  <span class='suit top_left'>&#x2663</span>  <span class='suit top_right'>&#x2663</span>  <span class='suit middle_top_left'>&#x2663</span>  <span class='suit middle_top_center'>&#x2663</span>  <span class='suit middle_top_right'>&#x2663</span>  <span class='suit bottom_left'>&#x2663</span>  <span class='suit bottom_right'>&#x2663</span>  <span class='suit middle_bottom_right'>&#x2663</span>  <span class='suit middle_bottom_left'>&#x2663</span>  <span class='suit middle_bottom_center'>&#x2663</span>  <div class='corner bottom'>    <span class='number'>10</span>    <span>&#x2663</span>  </div></div>",
    "<div class='card-jack club'>  <div class='corner top'>    <span class='number'>J</span>    <span>&#x2663</span>  </div>  <span class='face middle_center'>    <img src='/assets/face-jack-club.png'></img>  </span>  <div class='corner bottom'>    <span class='number'>J</span>    <span>&#x2663</span>  </div></div>",
    "<div class='card-queen club'>  <div class='corner top'>    <span class='number'>Q</span>    <span>&#x2663</span>  </div>  <span class='face middle_center'>    <img src='/assets/face-queen-club.png'></img>  </span>  <div class='corner bottom'>    <span class='number'>Q</span>    <span>&#x2663</span>  </div></div>",
    "<div class='card-king club'>  <div class='corner top'>    <span class='number'>K</span>    <span>&#x2663</span>  </div>  <span class='face middle_center'>    <img src='/assets/face-king-club.png'></img>  </span>  <div class='corner bottom'>    <span class='number'>K</span>    <span>&#x2663</span>  </div></div>",
    "<div class='card-back'>  <span class='middle_center'>    <img src='/assets/back.png'></img>  </span></div>"];
    var how_many = 0;
    return {
         create_card: function(card_id){
	     how_many++;
	     var card = {
	         card_id: card_id,
		 x: 0,
		 y: 0,
		 z: 0,
		 element_id: "card" + how_many ,
		 selected: false,
		 stack_id: null,
		 in_stack_pos: null,
		 stack_id: null,
             info: function (){
		 return "Card id:" + this.card_id + " at (" + this.x + "," + this.y + "," + this.z +")" 
		     + "Stack " + this.stack_id + " @ " + this.in_stack_pos ;
	     },		 
             to_s: function() {
		 return "id:" + this.card_id;
	     },
             jump_to: function(px,py,pz){
		 this.set_position(px,py,pz);
	     },
	     make_div: function() {
		 if (this.card_id != 53 ) {
		     return "<div class='card' id='" + this.element_id + "'>" + divs[card_id-1] +  "</div>";
		 } else {
		     return "<div class='card' id='" + this.element_id + "'>" + divs[52] +  "</div>";
		 };
	     },         
	     get_div: function() {
		 return $('#' + this.element_id);
		 },
	     on_click: function(ele){
		 if (card.selected === false ) {
		     card.select();
		 } else {
		     card.deselect();
		 };
		 alert(card.info());
	     },
             set_position: function(px,py,pz){
		 this.x = px;
		 this.y = py;
		 this.z = pz;
	     },
	     deselect: function(){
		 this.selected = false;
		 this.get_div().removeClass("selected");
	     },
	     select: function() {
		 this.selected = true;
		 this.get_div().addClass("selected");
		 },	 
	     show: function(parent){
		 this.get_div().remove();
		 parent.prepend(this.make_div());
		 this.get_div().css({position: "absolute"}).css({left:this.x + "px",top:this.y+"px", zIndex:this.z });
		 this.get_div().click(this.on_click);
		
	     },
             move_to: function(px,py,pz) {
		 this.get_div().snabbt({ position:[px-this.x, py-this.y ,this.z],
					 duration: 500,
					 delay: 10,
					 easing: 'spring'
				         });
		 this.get_div().css({position: "absolute"}).css({left:this.x + "px",top:this.y+"px",zIndex: pz  })
	         this.x = px;
		 this.y = py;
		 this.z = pz;
	        }
		
	     };
	     return card;
	 }
    };
})();
