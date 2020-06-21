declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace datasource {
                /**
                 * Simple implementation of the {@link ConnectionHandle} interface,
                 * containing a given JDBC Connection.
                 * @author Juergen Hoeller
                 * @since 1.1
                 */
                // @ts-ignore
                class SimpleConnectionHandle extends java.lang.Object implements org.springframework.jdbc.datasource.ConnectionHandle {
                    /**
                     * Create a new SimpleConnectionHandle for the given Connection.
                     * @param connection the JDBC Connection
                     */
                    // @ts-ignore
                    constructor(connection: java.sql.Connection)
                    /**
                     * Return the specified Connection as-is.
                     */
                    // @ts-ignore
                    public getConnection(): java.sql.Connection
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
