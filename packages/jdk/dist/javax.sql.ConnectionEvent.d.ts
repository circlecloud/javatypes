declare namespace javax {
    namespace sql {
        /**
         * <P>An <code>Event</code> object that provides information about the
         * source of a connection-related event.  <code>ConnectionEvent</code>
         * objects are generated when an application closes a pooled connection
         * and when an error occurs.  The <code>ConnectionEvent</code> object
         * contains two kinds of information:
         * <UL>
         * <LI>The pooled connection closed by the application
         * <LI>In the case of an error event, the <code>SQLException</code>
         * about to be thrown to the application
         * </UL>
         * @since 1.4
         */
        // @ts-ignore
        class ConnectionEvent extends java.util.EventObject {
            /**
             * <P>Constructs a <code>ConnectionEvent</code> object initialized with
             * the given <code>PooledConnection</code> object. <code>SQLException</code>
             * defaults to <code>null</code>.
             * @param con the pooled connection that is the source of the event
             * @throws IllegalArgumentException if <code>con</code> is null.
             */
            // @ts-ignore
            constructor(con: javax.sql.PooledConnection)
            /**
             * <P>Constructs a <code>ConnectionEvent</code> object initialized with
             * the given <code>PooledConnection</code> object and
             * <code>SQLException</code> object.
             * @param con the pooled connection that is the source of the event
             * @param ex the SQLException about to be thrown to the application
             * @throws IllegalArgumentException if <code>con</code> is null.
             */
            // @ts-ignore
            constructor(con: javax.sql.PooledConnection, ex: java.sql.SQLException)
            /**
             * <P>Retrieves the <code>SQLException</code> for this
             * <code>ConnectionEvent</code> object. May be <code>null</code>.
             * @return the SQLException about to be thrown or <code>null</code>
             */
            // @ts-ignore
            public getSQLException(): java.sql.SQLException
        }
    }
}
