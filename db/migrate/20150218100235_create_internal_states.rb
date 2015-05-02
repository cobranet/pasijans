class CreateInternalStates < ActiveRecord::Migration
  def change
    create_table :internal_states do |t|
      t.column :game_id,:integer
      t.column :json_state,:text
      t.timestamps
    end
  end
end
