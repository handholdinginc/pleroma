defmodule Pleroma.Web.ActivityPub.ActivityPubController do
  use Pleroma.Web, :controller
  alias Pleroma.{User, Repo, Object}
  alias Pleroma.Web.ActivityPub.{ObjectView, UserView}
  alias Pleroma.Web.ActivityPub.ActivityPub

  def user(conn, %{"nickname" => nickname}) do
    with %User{} = user <- User.get_cached_by_nickname(nickname),
         {:ok, user} <- Pleroma.Web.WebFinger.ensure_keys_present(user) do
      json(conn, UserView.render("user.json", %{user: user}))
    end
  end

  def object(conn, %{"uuid" => uuid}) do
    with ap_id <- o_status_url(conn, :object, uuid),
         %Object{} = object <- Object.get_cached_by_ap_id(ap_id) do
      json(conn, ObjectView.render("object.json", %{object: object}))
    end
  end

  # TODO: Move signature failure halt into plug
  def inbox(%{assigns: %{valid_signature: true}} = conn, params) do
    with {:ok, data} <- ActivityPub.prepare_incoming(params),
         {:ok, activity} <- ActivityPub.insert(data, false) do
      json(conn, "ok")
    end
  end
end
