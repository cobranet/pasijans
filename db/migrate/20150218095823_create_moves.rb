class CreateMoves < ActiveRecord::Migration
  def change
    create_table :moves do |t|
      t.column :game_id,:integer
      t.column :move, :string
      t.timestamps
    end
  end
end
