declare namespace java {
    namespace net {
        /**
         * This interface defines a factory for {@code URL} stream
         * protocol handlers.
         * <p>
         * It is used by the {@code URL} class to create a
         * {@code URLStreamHandler} for a specific protocol.
         * @author Arthur van Hoff
         * @see java.net.URL
         * @see java.net.URLStreamHandler
         * @since JDK1.0
         */
        // @ts-ignore
        interface URLStreamHandlerFactory {
            /**
             * Creates a new {@code URLStreamHandler} instance with the specified
             * protocol.
             * @param protocol   the protocol ("{#code ftp}",
             *                      "{@code http}", "{@code nntp}", etc.).
             * @return a {#code URLStreamHandler} for the specific protocol.
             * @see java.net.URLStreamHandler
             */
            // @ts-ignore
            createURLStreamHandler(protocol: java.lang.String | string): java.net.URLStreamHandler
        }
    }
}
