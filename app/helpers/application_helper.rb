module ApplicationHelper
  def current_user
    # uses ||= (or equals)
    # this assigns the current_user to the user with the given session ID only if there is no current_user and no session ID
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end
end