declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace datasource {
                /**
                 * Simple interface to be implemented by handles for a JDBC Connection.
                 * Used by JpaDialect, for example.
                 * @author Juergen Hoeller
                 * @since 1.1
                 * @see SimpleConnectionHandle
                 * @see ConnectionHolder
                 */
                // @ts-ignore
                interface ConnectionHandle {
                    /**
                     * Fetch the JDBC Connection that this handle refers to.
                     */
                    // @ts-ignore
                    getConnection(): java.sql.Connection
                    /**
                     * Release the JDBC Connection that this handle refers to.
                     * <p>The default implementation is empty, assuming that the lifecycle
                     * of the connection is managed externally.
                     * @param con the JDBC Connection to release
                     */
                    // @ts-ignore
                    releaseConnection(con: java.sql.Connection): void
                }
            }
        }
    }
}
