var CP = ( function(){
     var table = {};
     return {
	 stacks: {},
	 all_cards: {},
	 how_many: 0,
         // for movie effect
	 postopone: function(move,time){
	     setTimeout(function(){ 
		 CP[move.action].apply(CP,move.params);},time);	     
	 },
	 do_plays: function(data) {
	     console.log(data);
	     b = jQuery.parseJSON( data.moves);
	     for ( var i = 0; i< b.length ; i++) {
		 move = b[i];
		 CP.postopone(move,i*100);
	     }
	 },
	 from_stack_move: function(stack_from,i,stack_to){
	     card = CP.stacks[stack_from].cards[i];
	     CP.move_card(stack_from,i,CP.stacks[stack_to].xnext,CP.stacks[stack_to].ynext,CP.stacks[stack_to].znext);
	     newstack = CP.stacks[stack_to];
	     card.stack_id = stack_to;
	     card.in_stack_pos =newstack.cards.length;
	     newstack.cards[newstack.cards.length] = card;
	     newstack.update_next_pos();
	     CP.stacks[stack_to]=newstack;
	 },
	 create_stack: function(stack_id,
				stack_type,
				xpos,
				ypos,
				pixdist,
				positions){
	     this.stacks[stack_id] = Stack.create(stack_id,
					     stack_type,
					     xpos,
					     ypos,
					     pixdist,
					     positions,this.get_table());
	 },
	 move_card: function(stack_id,i,px,py,pz){
	     CP.stacks[stack_id].cards[i].move_to(px,py,pz);
	     CP.stacks[stack_id].remove_card(i,true);
	 },

	 create_table: function(ele,pxsize){
	     table = {
		 parent: ele,
		 pxsize: pxsize
	     };
	     ele.css({"font-size": pxsize+'px' }); 
	     ele.css({position: 'relative'});
	     return table;
	 },

	 get_pxsize: function(){
	     return table.pxsize;
	 },

	 add_card_to_stack: function(stack_id,card_id,show){
	     c = Cards.create_card(card_id);
	     c.stack_id = stack_id;
	     CP.stacks[stack_id].add_card(c);
	     if (show === true ) {
		 CP.show_stack(stack_id);
	     }
	 },

	 flip_card: function(stack_id,i,card_id){
	     card = CP.stacks[stack_id].cards[i];
	     CP.stacks[stack_id].remove_card(i,true);
	     card.get_div().hide();
	     CP.add_card_to_stack(stack_id,card_id,true);
	 },

	 show_stack: function(stack_id) {
	     CP.stacks[stack_id].show();
	 },

	 get_table: function(){
	     return table.parent;
	 },
	 // optimal size is 5px 
	 // every other position will scale

	 scale: function(x) {
	     return x* (this.get_pxsize() / 5)
	 },

	 get_data:function() {
	     $.ajax({
		 dataType: "json",
		 url: "/games/1/get_json/",
		 data: { from: 12 },
		 success: function(result) {
		     CP.do_plays(result);
		 },
		 error: function(result){
		     console.log(result);
		 }
		 
	     });
	 },
	 get_passians_data: function(){
	     return { moves:
		      [{
			  action: "create_stack",
			  params: ["draw","0",30,30,20] },
		       {
			  action: "add_card_to_stack",
			  params: ["draw",53,true] },
		       {
			  action: "create_stack",
			  params: ["col1","V",200,30,20] },
		       {  
			  action: "add_card_to_stack",
			  params: ["col1",12,true] },
		       {
			  action: "create_stack",
			  params: ["col2","V",300,30,20] },
		       {  
			  action: "add_card_to_stack",
			  params: ["col2",53,true] },
		       {  
			  action: "add_card_to_stack",
			  params: ["col2",44,true] },
		       {
			  action: "create_stack",
			  params: ["col3","V",400,30,20] },
		       {  
			  action: "add_card_to_stack",
			  params: ["col3",53,true] },
		       {  
			  action: "add_card_to_stack",
			  params: ["col3",53,true] },
		       {  
			  action: "add_card_to_stack",
			  params: ["col3",1,true] },
       		       {
			  action: "create_stack",
			  params: ["col4","V",500,30,20] },
		       {  
			  action: "add_card_to_stack",
			  params: ["col4",53,true] },
		       {  
			  action: "add_card_to_stack",
			  params: ["col4",53,true] },
		       {  
			  action: "add_card_to_stack",
			  params: ["col4",53,true] },
		       {  
			  action: "add_card_to_stack",
			   params: ["col4",16,true] },
		       {
			  action: "create_stack",
			  params: ["col5","V",600,30,20] },
		       {
			  action: "add_cards_to_stack",
			  params: ["col5",[53,53,53,53,2],true] },
		       {
			  action: "create_stack",
			  params: ["col6","V",700,30,20] },
		       {
			  action: "add_cards_to_stack",
			  params: ["col6",[53,53,53,53,53,32],true] },
		       {
			  action: "create_stack",
			  params: ["col7","V",800,30,20] },
		       {
			  action: "add_cards_to_stack",
			  params: ["col7",[53,53,53,53,53,53,41],true] },
       		       {
			   action: "from_stack_move",
			   params: ["col4",3,"col7"]},

		       {   action: "move_stack",
			   params: ["col7",800,130]},

		       {   action: "move_stack",
			   params: ["col7",800,30]},
       		       {
			   action: "flip_card",
			   params: ["col4",2,44]},
       		       {
			   action: "from_stack_move",
			   params: ["col4",2,"col6"]},
		       {
			   action: "flip_card",
			   params: ["col4",1,45]},
       		       {
			  action: "create_stack",
			  params: ["draw_open","0",120,30,20] },	       
		       {
			   action: "add_card_to_stack",
			   params: ["draw",53]},
       		       
		       {
			   action: "flip_card",
			   params: ["draw",1,17]},
       		       {
			   action: "from_stack_move",
			   params: ["draw",1,"draw_open"]},
       		       {
			  action: "create_stack",
  			  params: ["up0","0",910,30] },
       		       {
			  action: "create_stack",
  			  params: ["up1","0",910,150] },
       		       {
			  action: "create_stack",
  			  params: ["up2","0",910,270] },
       		       {
			  action: "create_stack",
  			  params: ["up3","0",910,390] },
       		       {
			   action: "from_stack_move",
			   params: ["col3",2,"up0"]},
       		       {
			   action: "flip_card",
			   params: ["col3",1,28]},
       		       {
			   action: "from_stack_move",
			   params: ["draw_open",0,"up1"]},
		       {
			   action: "add_card_to_stack",
			   params: ["draw",53]},
		       {
			   action: "flip_card",
			   params: ["draw",1,51]},
       		       {
			   action: "from_stack_move",
			   params: ["draw",1,"draw_open"]},
       		       {
			   action: "from_stack_move",
			   params: ["col5",4,"up0"]},
       		       {
			   action: "flip_card",
			   params: ["col5",3,29]},
       		       {
			   action: "from_stack_move",
			   params: ["col3",1,"up1"]},
       		       {
			   action: "flip_card",
			   params: ["col3",0,37]},

		      ]};
	 },
	 insert_card_in_stack: function(stack_id,card_id,i){
	     card = Cards.create_card(card_id);	     
	     CP.stacks[stack_id].insert_card(i,card);
	     CP.stacks[stack_id].cards[i].show(this.parent);
	 },
	 add_cards_to_stack: function(stack_id,cards_ids,showstack){
	     for(i=0;i<cards_ids.length; i++){
		 CP.add_card_to_stack(stack_id,cards_ids[i],'card' + cards_ids[i],true);
	     }
	     if (showstack === true ){
		 CP.show_stack(stack_id);
	     }
	 },
	 move_stack: function(stack_id,px,py){
	     CP.stacks[stack_id].move_to(px,py);
	 }
     };
 }());


$(document).ready(function(){
     var ele = $("#cardtable");
     var table = CP.create_table(ele,5);
     b = CP.get_data();

});
