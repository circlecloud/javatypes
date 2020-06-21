declare namespace java {
    namespace rmi {
        /**
         * An <code>AlreadyBoundException</code> is thrown if an attempt
         * is made to bind an object in the registry to a name that already
         * has an associated binding.
         * @since JDK1.1
         * @author Ann Wollrath
         * @author Roger Riggs
         * @see java.rmi.Naming#bind(String, java.rmi.Remote)
         * @see java.rmi.registry.Registry#bind(String, java.rmi.Remote)
         */
        // @ts-ignore
        class AlreadyBoundException extends java.lang.Exception {
            /**
             * Constructs an <code>AlreadyBoundException</code> with no
             * specified detail message.
             * @since JDK1.1
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs an <code>AlreadyBoundException</code> with the specified
             * detail message.
             * @param s the detail message
             * @since JDK1.1
             */
            // @ts-ignore
            constructor(s: java.lang.String | string)
        }
    }
}
