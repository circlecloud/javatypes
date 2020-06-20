declare namespace javax {
    namespace sql {
        namespace rowset {
            /**
             * An interface that defines the implementation of a factory that is used
             * to obtain different types of {@code RowSet} implementations.
             * @author Lance Andersen
             * @since 1.7
             */
            // @ts-ignore
            interface RowSetFactory {
                /**
                 * <p>Creates a new instance of a CachedRowSet.</p>
                 * @return A new instance of a CachedRowSet.
                 * @throws SQLException if a CachedRowSet cannot
                 *    be created.
                 * @since 1.7
                 */
                // @ts-ignore
                createCachedRowSet(): javax.sql.rowset.CachedRowSet
                /**
                 * <p>Creates a new instance of a FilteredRowSet.</p>
                 * @return A new instance of a FilteredRowSet.
                 * @throws SQLException if a FilteredRowSet cannot
                 *    be created.
                 * @since 1.7
                 */
                // @ts-ignore
                createFilteredRowSet(): javax.sql.rowset.FilteredRowSet
                /**
                 * <p>Creates a new instance of a JdbcRowSet.</p>
                 * @return A new instance of a JdbcRowSet.
                 * @throws SQLException if a JdbcRowSet cannot
                 *    be created.
                 * @since 1.7
                 */
                // @ts-ignore
                createJdbcRowSet(): javax.sql.rowset.JdbcRowSet
                /**
                 * <p>Creates a new instance of a JoinRowSet.</p>
                 * @return A new instance of a JoinRowSet.
                 * @throws SQLException if a JoinRowSet cannot
                 *    be created.
                 * @since 1.7
                 */
                // @ts-ignore
                createJoinRowSet(): javax.sql.rowset.JoinRowSet
                /**
                 * <p>Creates a new instance of a WebRowSet.</p>
                 * @return A new instance of a WebRowSet.
                 * @throws SQLException if a WebRowSet cannot
                 *    be created.
                 * @since 1.7
                 */
                // @ts-ignore
                createWebRowSet(): javax.sql.rowset.WebRowSet
            }
        }
    }
}
