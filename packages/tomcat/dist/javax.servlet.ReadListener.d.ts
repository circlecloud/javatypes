declare namespace javax {
    namespace servlet {
        /**
         * Receives notification of read events when using non-blocking IO.
         * @since Servlet 3.1
         */
        // @ts-ignore
        interface ReadListener extends java.util.EventListener {
            /**
             * Invoked when data is available to read. The container will invoke this
             * method the first time for a request as soon as there is data to read.
             * Subsequent invocations will only occur if a call to
             * {@link ServletInputStream#isReady()} has returned false and data has
             * subsequently become available to read.
             * @throws IOException id an I/O error occurs while processing the event
             */
            // @ts-ignore
            onDataAvailable(): void
            /**
             * Invoked when the request body has been fully read.
             * @throws IOException id an I/O error occurs while processing the event
             */
            // @ts-ignore
            onAllDataRead(): void
            /**
             * Invoked if an error occurs while reading the request body.
             * @param throwable The exception that occurred
             */
            // @ts-ignore
            onError(throwable: java.lang.Throwable | Error): void
        }
    }
}
