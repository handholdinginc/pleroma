# Pleroma: A lightweight social networking server
# Copyright © 2017-2020 Pleroma Authors <https://pleroma.social/>
# SPDX-License-Identifier: AGPL-3.0-only

defmodule Pleroma.Web.ActivityPub.ObjectValidators.CreateNoteValidator do
  use Ecto.Schema

  alias Pleroma.EctoType.ActivityPub.ObjectValidators
  alias Pleroma.Web.ActivityPub.ObjectValidators.NoteValidator

  import Ecto.Changeset

  @primary_key false

  embedded_schema do
    field(:id, ObjectValidators.ObjectID, primary_key: true)
    field(:actor, ObjectValidators.ObjectID)
    field(:type, :string)
    field(:to, {:array, :string})
    field(:cc, {:array, :string})
    field(:bto, {:array, :string}, default: [])
    field(:bcc, {:array, :string}, default: [])

    embeds_one(:object, NoteValidator)
  end

  def cast_data(data) do
    cast(%__MODULE__{}, data, __schema__(:fields))
  end
end
