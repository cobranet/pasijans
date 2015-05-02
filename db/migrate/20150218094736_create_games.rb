class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.column :user_id,:integer
      t.column :state, :integer
      t.timestamps
    end
  end
end
