declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                /**
                 * Batch update callback interface used by the {@link JdbcTemplate} class.
                 * <p>This interface sets values on a {@link java.sql.PreparedStatement} provided
                 * by the JdbcTemplate class, for each of a number of updates in a batch using the
                 * same SQL. Implementations are responsible for setting any necessary parameters.
                 * SQL with placeholders will already have been supplied.
                 * <p>Implementations <i>do not</i> need to concern themselves with SQLExceptions
                 * that may be thrown from operations they attempt. The JdbcTemplate class will
                 * catch and handle SQLExceptions appropriately.
                 * @author Rod Johnson
                 * @since March 2, 2003
                 * @see JdbcTemplate#batchUpdate(String, BatchPreparedStatementSetter)
                 * @see InterruptibleBatchPreparedStatementSetter
                 */
                // @ts-ignore
                interface BatchPreparedStatementSetter {
                    /**
                     * Set parameter values on the given PreparedStatement.
                     * @param ps the PreparedStatement to invoke setter methods on
                     * @param i index of the statement we're issuing in the batch, starting from 0
                     * @throws SQLException if an SQLException is encountered
                     *  (i.e. there is no need to catch SQLException)
                     */
                    // @ts-ignore
                    setValues(ps: java.sql.PreparedStatement, i: number /*int*/): void
                    /**
                     * Return the size of the batch.
                     * @return the number of statements in the batch
                     */
                    // @ts-ignore
                    getBatchSize(): number /*int*/
                }
            }
        }
    }
}
