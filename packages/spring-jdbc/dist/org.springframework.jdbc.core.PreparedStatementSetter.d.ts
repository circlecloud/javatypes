declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                /**
                 * General callback interface used by the {@link JdbcTemplate} class.
                 * <p>This interface sets values on a {@link java.sql.PreparedStatement} provided
                 * by the JdbcTemplate class, for each of a number of updates in a batch using the
                 * same SQL. Implementations are responsible for setting any necessary parameters.
                 * SQL with placeholders will already have been supplied.
                 * <p>It's easier to use this interface than {@link PreparedStatementCreator}:
                 * The JdbcTemplate will create the PreparedStatement, with the callback
                 * only being responsible for setting parameter values.
                 * <p>Implementations <i>do not</i> need to concern themselves with
                 * SQLExceptions that may be thrown from operations they attempt.
                 * The JdbcTemplate class will catch and handle SQLExceptions appropriately.
                 * @author Rod Johnson
                 * @since March 2, 2003
                 * @see JdbcTemplate#update(String, PreparedStatementSetter)
                 * @see JdbcTemplate#query(String, PreparedStatementSetter, ResultSetExtractor)
                 */
                // @ts-ignore
                interface PreparedStatementSetter {
                    /**
                     * Set parameter values on the given PreparedStatement.
                     * @param ps the PreparedStatement to invoke setter methods on
                     * @throws SQLException if an SQLException is encountered
                     *  (i.e. there is no need to catch SQLException)
                     */
                    // @ts-ignore
                    setValues(ps: java.sql.PreparedStatement): void
                }
            }
        }
    }
}
