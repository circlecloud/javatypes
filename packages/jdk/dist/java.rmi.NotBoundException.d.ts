declare namespace java {
    namespace rmi {
        /**
         * A <code>NotBoundException</code> is thrown if an attempt
         * is made to lookup or unbind in the registry a name that has
         * no associated binding.
         * @since JDK1.1
         * @author Ann Wollrath
         * @author Roger Riggs
         * @see java.rmi.Naming#lookup(String)
         * @see java.rmi.Naming#unbind(String)
         * @see java.rmi.registry.Registry#lookup(String)
         * @see java.rmi.registry.Registry#unbind(String)
         */
        // @ts-ignore
        class NotBoundException extends java.lang.Exception {
            /**
             * Constructs a <code>NotBoundException</code> with no
             * specified detail message.
             * @since JDK1.1
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a <code>NotBoundException</code> with the specified
             * detail message.
             * @param s the detail message
             * @since JDK1.1
             */
            // @ts-ignore
            constructor(s: java.lang.String | string)
        }
    }
}
