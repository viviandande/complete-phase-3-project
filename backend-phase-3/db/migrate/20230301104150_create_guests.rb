class CreateGuests < ActiveRecord::Migration[6.1]
  def change
    create_table :guests do |t|
      t.string :firstname
      t.string :lastname
      t.string :email
      t.integer :seatno
      t.string :typeofaccess

      t.timestamps
    end
  end
end
