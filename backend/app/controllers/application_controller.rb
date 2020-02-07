class ApplicationController < ActionController::API
  before_action :authenticate_user!

  # トークン生成済みのユーザーのみ認証する
  def authenticate_user!
    user = authenticate_user_from_token
    if user
      @current_user = user
    else
      raise Exceptions::AuthenticationError
    end
  end

  def authenticate_user_from_token
    token = request.headers['Authorization']
    user = User.find_by(access_token: token)

    if user && user.secure_token_compare(token)
      user
    else
      nil
    end
  end

  def authenticate(user)
    user.update_access_token!
    @current_user = user
  end
  
  def sign_in?
    !!@current_user
  end

  def success_res(status, message: nil, data: nil)
    render status: status, json: {
      status: status,
      message: message,
      data: data,
    }
  end

  def error_res(status, message: nil, err: nil)
    render status: status, json: {
      status: status,
      message: message,
      errors: [
        { message: err }
      ],
      data: nil
    }
  end
end
