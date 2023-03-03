class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :typeofevent
      t.string :date
      t.string :time
      t.integer :numberofguests
    end
  end
end
