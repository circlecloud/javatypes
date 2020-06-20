declare namespace java {
    namespace rmi {
        /**
         * An <code>RMISecurityException</code> signals that a security exception
         * has occurred during the execution of one of
         * <code>java.rmi.RMISecurityManager</code>'s methods.
         * @author Roger Riggs
         * @since JDK1.1
         * @deprecated Use {#link java.lang.SecurityException} instead.
         *  Application code should never directly reference this class, and
         *  <code>RMISecurityManager</code> no longer throws this subclass of
         *  <code>java.lang.SecurityException</code>.
         */
        // @ts-ignore
        class RMISecurityException extends java.lang.SecurityException {
            /**
             * Construct an <code>RMISecurityException</code> with a detail message.
             * @param name the detail message
             * @since JDK1.1
             * @deprecated no replacement
             */
            // @ts-ignore
            constructor(name: string)
            /**
             * Construct an <code>RMISecurityException</code> with a detail message.
             * @param name the detail message
             * @param arg ignored
             * @since JDK1.1
             * @deprecated no replacement
             */
            // @ts-ignore
            constructor(name: string, arg: string)
        }
    }
}
