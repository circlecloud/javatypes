declare namespace javax {
    namespace sql {
        /**
         * A <code>StatementEvent</code> is sent to all <code>StatementEventListener</code>s which were
         * registered with a <code>PooledConnection</code>. This occurs when the driver determines that a
         * <code>PreparedStatement</code> that is associated with the <code>PooledConnection</code> has been closed or the driver determines
         * is invalid.
         * <p>
         * @since 1.6
         */
        // @ts-ignore
        class StatementEvent extends java.util.EventObject {
            /**
             * Constructs a <code>StatementEvent</code> with the specified <code>PooledConnection</code> and
             * <code>PreparedStatement</code>.  The <code>SQLException</code> contained in the event defaults to
             * null.
             * <p>
             * @param con                   The <code>PooledConnection</code> that the closed or invalid
             *  <code>PreparedStatement</code>is associated with.
             * @param statement             The <code>PreparedStatement</code> that is being closed or is invalid
             *  <p>
             * @throws IllegalArgumentException if <code>con</code> is null.
             * @since 1.6
             */
            // @ts-ignore
            constructor(con: javax.sql.PooledConnection, statement: java.sql.PreparedStatement)
            /**
             * Constructs a <code>StatementEvent</code> with the specified <code>PooledConnection</code>,
             * <code>PreparedStatement</code> and <code>SQLException</code>
             * <p>
             * @param con                   The <code>PooledConnection</code> that the closed or invalid <code>PreparedStatement</code>
             *  is associated with.
             * @param statement             The <code>PreparedStatement</code> that is being closed or is invalid
             * @param exception             The <code>SQLException </code>the driver is about to throw to
             *                                               the application
             * @throws IllegalArgumentException if <code>con</code> is null.
             *  <p>
             * @since 1.6
             */
            // @ts-ignore
            constructor(con: javax.sql.PooledConnection, statement: java.sql.PreparedStatement, exception: java.sql.SQLException)
            /**
             * Returns the <code>PreparedStatement</code> that is being closed or is invalid
             * <p>
             * @return The <code>PreparedStatement</code> that is being closed or is invalid
             *  <p>
             * @since 1.6
             */
            // @ts-ignore
            getStatement(): java.sql.PreparedStatement
            /**
             * Returns the <code>SQLException</code> the driver is about to throw
             * <p>
             * @return The <code>SQLException</code> the driver is about to throw
             *  <p>
             * @since 1.6
             */
            // @ts-ignore
            getSQLException(): java.sql.SQLException
        }
    }
}
