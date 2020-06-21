declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                /**
                 * Parameterized callback interface used by the {@link JdbcTemplate} class for
                 * batch updates.
                 * <p>This interface sets values on a {@link java.sql.PreparedStatement} provided
                 * by the JdbcTemplate class, for each of a number of updates in a batch using the
                 * same SQL. Implementations are responsible for setting any necessary parameters.
                 * SQL with placeholders will already have been supplied.
                 * <p>Implementations <i>do not</i> need to concern themselves with SQLExceptions
                 * that may be thrown from operations they attempt. The JdbcTemplate class will
                 * catch and handle SQLExceptions appropriately.
                 * @author Nicolas Fabre
                 * @author Thomas Risberg
                 * @since 3.1
                 * @param <T> the argument type
                 * @see JdbcTemplate#batchUpdate(String, java.util.Collection, int, ParameterizedPreparedStatementSetter)
                 */
                // @ts-ignore
                interface ParameterizedPreparedStatementSetter<T> {
                    /**
                     * Set parameter values on the given PreparedStatement.
                     * @param ps the PreparedStatement to invoke setter methods on
                     * @param argument the object containing the values to be set
                     * @throws SQLException if an SQLException is encountered (i.e. there is no need to catch SQLException)
                     */
                    // @ts-ignore
                    setValues(ps: java.sql.PreparedStatement, argument: T): void
                }
            }
        }
    }
}
