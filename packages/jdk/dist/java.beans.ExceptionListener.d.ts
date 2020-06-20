declare namespace java {
    namespace beans {
        /**
         * An ExceptionListener is notified of internal exceptions.
         * @since 1.4
         * @author Philip Milne
         */
        // @ts-ignore
        interface ExceptionListener {
            /**
             * This method is called when a recoverable exception has
             * been caught.
             * @param e The exception that was caught.
             */
            // @ts-ignore
            exceptionThrown(e: java.lang.Exception): void
        }
    }
}
