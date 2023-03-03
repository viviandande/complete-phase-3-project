class CreateVenues < ActiveRecord::Migration[6.1]
  def change
    create_table :venues do |t|
      t.integer :event_id
      t.integer :guest_id

      t.timestamps
    end
  end
end
