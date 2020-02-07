class LoggedinUserSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :access_token,
    :uid
  )
end