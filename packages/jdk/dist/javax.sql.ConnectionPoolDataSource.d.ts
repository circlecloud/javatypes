declare namespace javax {
    namespace sql {
        /**
         * A factory for <code>PooledConnection</code>
         * objects.  An object that implements this interface will typically be
         * registered with a naming service that is based on the
         * Java&trade; Naming and Directory Interface
         * (JNDI).
         * @since 1.4
         */
        // @ts-ignore
        interface ConnectionPoolDataSource extends javax.sql.CommonDataSource {
            /**
             * Attempts to establish a physical database connection that can
             * be used as a pooled connection.
             * @return a <code>PooledConnection</code> object that is a physical
             *          connection to the database that this
             *          <code>ConnectionPoolDataSource</code> object represents
             * @exception SQLException if a database access error occurs
             * @exception java.sql.SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.4
             */
            // @ts-ignore
            getPooledConnection(): javax.sql.PooledConnection
            /**
             * Attempts to establish a physical database connection that can
             * be used as a pooled connection.
             * @param user the database user on whose behalf the connection is being made
             * @param password the user's password
             * @return a <code>PooledConnection</code> object that is a physical
             *          connection to the database that this
             *          <code>ConnectionPoolDataSource</code> object represents
             * @exception SQLException if a database access error occurs
             * @exception java.sql.SQLFeatureNotSupportedException if the JDBC driver does not support
             *  this method
             * @since 1.4
             */
            // @ts-ignore
            getPooledConnection(user: java.lang.String | string, password: java.lang.String | string): javax.sql.PooledConnection
        }
    }
}
