declare namespace javax {
    namespace management {
        /**
         * Allows a query to be performed in the context of a specific MBean server.
         * @since 1.5
         */
        // @ts-ignore
        class QueryEval extends java.lang.Object implements java.io.Serializable {
            // @ts-ignore
            constructor()
            /**
             * <p>Sets the MBean server on which the query is to be performed.
             * The setting is valid for the thread performing the set.
             * It is copied to any threads created by that thread at the moment
             * of their creation.</p>
             * <p>For historical reasons, this method is not static, but its
             * behavior does not depend on the instance on which it is
             * called.</p>
             * @param s The MBean server on which the query is to be performed.
             * @see #getMBeanServer
             */
            // @ts-ignore
            setMBeanServer(s: javax.management.MBeanServer): void
            /**
             * <p>Return the MBean server that was most recently given to the
             * {@link #setMBeanServer setMBeanServer} method by this thread.
             * If this thread never called that method, the result is the
             * value its parent thread would have obtained from
             * <code>getMBeanServer</code> at the moment of the creation of
             * this thread, or null if there is no parent thread.</p>
             * @return the MBean server.
             * @see #setMBeanServer
             */
            // @ts-ignore
            getMBeanServer(): javax.management.MBeanServer
        }
    }
}
