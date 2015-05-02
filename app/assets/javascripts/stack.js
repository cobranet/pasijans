var Stack =( function(){
    return {
    	 create: function(stack_id,
			  stack_type,
			  xpos,
			  ypos,
			  pixdist,
			  positions,
			  divele){
	     if ( stack_type === "F" ) {
		 for (var k = 0; k< positions.length; k++){
		     positions[k] = positions[k];
		 } 
	     } else {
		 pixdist = pixdist;
	     };
	     var stack = {
		 id: stack_id,
		 cards: [],
		 parent: divele,
		 tstack: stack_type,
		 dpx: pixdist,
		 positions: positions,
		 x: xpos,
		 y: ypos,
		 xnext: xpos,
		 ynext: ypos,
		 znext: 1,
		 add_card: function(card){
		     card.in_stack_pos = this.cards.length;
		     card.stack_id = this.id;
		     this.cards[this.cards.length] = card;
		     card.set_position(this.xnext,this.ynext,this.znext);
		     this.update_next_pos();
		 },
		 show: function(){
		     for (var i=0;i< this.cards.length; i++){
			 this.cards[i].show(this.parent);
			 }
		 },
		 insert_card: function (atpos,card) {
		     var new_cards = [];
		     
		     for ( var i=0;i<this.cards.length;i++){
			 if (i < atpos) {
			         new_cards[i] = this.cards[i];

			 }  else 
			     if ( i >= atpos) {
				 new_cards[i+1] = this.cards[i];
				 new_cards[i+1].in_stack_pos=[i+1];
			 }
	              }
		     new_cards[atpos] = card;
		     new_cards[atpos].in_stack_pos = atpos;
		     new_cards[atpos].stack_id = this.id;
		     this.cards = new_cards;
		     for ( var k = 0; k < this.cards.length; k++){
			 this.update_card_position(k).show(this.parent);
			 this.cards[k].show(this.parent);
		     }
		 },
		 update_card_position: function(i){
		     
		     if(this.tstack === 'V') {
			 this.cards[i].set_position(this.x,this.dpx*i+this.y,i);
		      };
		     if (this.tstack === 'H') {
			 this.cards[i].set_position(this.x + this.dpx*i,this.y,i);
		     }
		     if (this.tstack === '0') {
			 this.cards[i].set_position(this.x,this.y,i);
		     }
		     return this.cards[i];
		 },
		 remove_card: function(atpos,showstack) {
		     this.cards[atpos].in_stack_pos = null;
		     this.cards[atpos].stack_id = null;
		     this.cards.splice(atpos,1);		     
		     for(var i=atpos; i< this.cards.length; i++){
			 this.cards[i].in_stack_pos = this.cards[i].in_stack_pos-1;
			 this.update_card_position(i);
		     };
		     this.update_next_pos();
		     if (showstack === true) {
			 this.show();
		     }
		 },
		 move_to:function(xpos,ypos){
		     this.x = xpos;
		     this.y = ypos;
		     for (var i=0;i< this.cards.length; i++){
			 if ( this.tstack === 'H' ) {
			     this.cards[i].move_to(xpos+this.dpx*i,ypos,i);
			 }
			 if ( this.tstack === 'V' ) {
			     this.cards[i].move_to(xpos,this.dpx*i+ypos,i);
			 }
			 if (this.tstack === '0'){
			     this.cards[i].move_to(xpos,ypos,i);
			 }
		     }
		     this.update_next_pos();  
		 },
		 update_next_pos: function(){
		     if (this.tstack === 'H' ) {
			 this.xnext = this.x + this.cards.length*this.dpx;
			 this.ynext = this.y;
		     }
		     if (this.tstack === 'V') {
			 this.ynext = this.y + this.cards.length*this.dpx;
			 this.xnext = this.x;
		     }
		     if (this.tstack === '0') {
			 this.ynext = this.y;
			 this.xnext = this.x;
		     }
		     this.znext = this.znext + 1;
		 },
		 jump_to:function(xpos,ypos){
		     this.x = xpos;
		     this.y = ypos;
		     for (var i=0;i< this.cards.length; i++){
			 if (this.tstack === 'H'){
			     this.cards[i].jump_to(xpos+this.dpx*i,ypos,i);
			 }
			 if (this.tstack === 'V'){
			     this.cards[i].jump_to(xpos,this.dpx*i+ypos,i);
			 }
			 if (this.tstack === '0'){
			     this.cards[i].jump_to(xpos,ypos,i);
			 }
		     }
		     this.update_next_pos();
		 },
		 get_card: function(i) {
		     return this.cards[i];
		 }
	     };
	     return stack;
	 },

     };
   })();
