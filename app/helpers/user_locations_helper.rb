module UserLocationsHelper
  def handle_reorder(size, update_params)
    to_splice = update_params[:source]
    to_insert = update_params[:destination]
    return if
      to_splice == to_insert || 
      to_splice < 0 ||
      to_insert < 0 ||
      to_splice > size ||
      to_insert > size

    query =
      <<-SQL
        UPDATE user_locations
        SET priority = CASE
          WHEN priority = #{to_splice} THEN #{to_insert}

          WHEN #{to_insert} > #{to_splice}
            AND priority <= #{to_insert}
            AND priority > #{to_splice}
            THEN priority - 1

          WHEN #{to_insert} < #{to_splice}
            AND priority >= #{to_insert}
            AND priority < #{to_splice}
            THEN priority + 1

          ELSE priority
        END
        WHERE user_locations.user_id = #{@user.id}
      SQL

    res = ActiveRecord::Base.connection.execute(query)
    if res
      render json: { destination: to_insert, source: to_splice}
    else
      render json: { error: 'Database error for patch request' }
    end
  end
end