class DeviseTokenAuthCreateUsers < ActiveRecord::Migration[6.0]
  def change
    
    create_table(:users) do |t|
      t.string :provider, :null => false, :default => "google"
      t.string :uid, :null => false, :default => ""
      t.string :nickname
      t.string :email
      t.string :thumbnail
      t.string :access_token

      t.timestamps
    end

    add_index :users, :email,                unique: true
    add_index :users, [:uid, :provider],     unique: true
  end
end
