class LoggedinUserSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :access_token,
    :nickname,
    :email,
    :thumbnail,
    :provider
  )
end