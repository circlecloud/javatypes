declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                /**
                 * One of the two central callback interfaces used by the JdbcTemplate class.
                 * This interface creates a PreparedStatement given a connection, provided
                 * by the JdbcTemplate class. Implementations are responsible for providing
                 * SQL and any necessary parameters.
                 * <p>Implementations <i>do not</i> need to concern themselves with
                 * SQLExceptions that may be thrown from operations they attempt.
                 * The JdbcTemplate class will catch and handle SQLExceptions appropriately.
                 * <p>A PreparedStatementCreator should also implement the SqlProvider interface
                 * if it is able to provide the SQL it uses for PreparedStatement creation.
                 * This allows for better contextual information in case of exceptions.
                 * @author Rod Johnson
                 * @see JdbcTemplate#execute(PreparedStatementCreator, PreparedStatementCallback)
                 * @see JdbcTemplate#query(PreparedStatementCreator, RowCallbackHandler)
                 * @see JdbcTemplate#update(PreparedStatementCreator)
                 * @see SqlProvider
                 */
                // @ts-ignore
                interface PreparedStatementCreator {
                    /**
                     * Create a statement in this connection. Allows implementations to use
                     * PreparedStatements. The JdbcTemplate will close the created statement.
                     * @param con the connection used to create statement
                     * @return a prepared statement
                     * @throws SQLException there is no need to catch SQLExceptions
                     *  that may be thrown in the implementation of this method.
                     *  The JdbcTemplate class will handle them.
                     */
                    // @ts-ignore
                    createPreparedStatement(con: java.sql.Connection): java.sql.PreparedStatement
                }
            }
        }
    }
}
