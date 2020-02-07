class User < ActiveRecord::Base
  has_secure_token :access_token
  def self.find_for_oauth(auth)
    User.where(uid: auth[:uid], provider: auth[:provider], email: auth[:email]).first_or_initialize
  end

  def update_access_token!
    self.regenerate_access_token
  end

  # (by devise gem) constant-time comparison algorithm to prevent timing attacks
  def self.secure_token_compare(token)
    a = self.access_token
    b = token

    return false if a.blank? || b.blank? || a.bytesize != b.bytesize
    l = a.unpack "C#{a.bytesize}"

    res = 0
    b.each_byte { |byte| res |= byte ^ l.shift }
    res == 0
  end

end
