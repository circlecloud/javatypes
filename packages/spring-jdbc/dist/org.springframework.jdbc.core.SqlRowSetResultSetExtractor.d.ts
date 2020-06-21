declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace core {
                /**
                 * {@link ResultSetExtractor} implementation that returns a Spring {@link SqlRowSet}
                 * representation for each given {@link ResultSet}.
                 * <p>The default implementation uses a standard JDBC CachedRowSet underneath.
                 * @author Juergen Hoeller
                 * @since 1.2
                 * @see #newCachedRowSet
                 * @see org.springframework.jdbc.support.rowset.SqlRowSet
                 * @see JdbcTemplate#queryForRowSet(String)
                 * @see javax.sql.rowset.CachedRowSet
                 */
                // @ts-ignore
                class SqlRowSetResultSetExtractor extends java.lang.Object implements org.springframework.jdbc.core.ResultSetExtractor<org.springframework.jdbc.support.rowset.SqlRowSet> {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public extractData(rs: java.sql.ResultSet): org.springframework.jdbc.support.rowset.SqlRowSet
                    /**
                     * Create a {@link SqlRowSet} that wraps the given {@link ResultSet},
                     * representing its data in a disconnected fashion.
                     * <p>This implementation creates a Spring {@link ResultSetWrappingSqlRowSet}
                     * instance that wraps a standard JDBC {@link CachedRowSet} instance.
                     * Can be overridden to use a different implementation.
                     * @param rs the original ResultSet (connected)
                     * @return the disconnected SqlRowSet
                     * @throws SQLException if thrown by JDBC methods
                     * @see #newCachedRowSet()
                     * @see org.springframework.jdbc.support.rowset.ResultSetWrappingSqlRowSet
                     */
                    // @ts-ignore
                    createSqlRowSet(rs: java.sql.ResultSet): org.springframework.jdbc.support.rowset.SqlRowSet
                    /**
                     * Create a new {@link CachedRowSet} instance, to be populated by
                     * the {@code createSqlRowSet} implementation.
                     * <p>The default implementation uses JDBC 4.1's {@link RowSetFactory}.
                     * @return a new CachedRowSet instance
                     * @throws SQLException if thrown by JDBC methods
                     * @see #createSqlRowSet
                     * @see RowSetProvider#newFactory()
                     * @see RowSetFactory#createCachedRowSet()
                     */
                    // @ts-ignore
                    newCachedRowSet(): javax.sql.rowset.CachedRowSet
                }
            }
        }
    }
}
