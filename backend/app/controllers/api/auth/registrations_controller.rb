module Api
  module Auth
    class RegistrationsController < ::DeviseTokenAuth::RegistrationsController
      private

      def sign_up_params
        params.require(:registration).permit(:userName, :email, :password, :password_confirmation)
      end

      def account_update_params
        params.require(:registration).permit(:userName, :email, :avatar)
      end
    end
  end
end