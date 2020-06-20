declare namespace java {
    namespace net {
        /**
         * This interface defines a factory for content handlers. An
         * implementation of this interface should map a MIME type into an
         * instance of {@code ContentHandler}.
         * <p>
         * This interface is used by the {@code URLStreamHandler} class
         * to create a {@code ContentHandler} for a MIME type.
         * @author James Gosling
         * @see java.net.ContentHandler
         * @see java.net.URLStreamHandler
         * @since JDK1.0
         */
        // @ts-ignore
        interface ContentHandlerFactory {
            /**
             * Creates a new {@code ContentHandler} to read an object from
             * a {@code URLStreamHandler}.
             * @param mimetype   the MIME type for which a content handler is desired.
             * @return a new {#code ContentHandler} to read an object from a
             *           {@code URLStreamHandler}.
             * @see java.net.ContentHandler
             * @see java.net.URLStreamHandler
             */
            // @ts-ignore
            createContentHandler(mimetype: string): java.net.ContentHandler
        }
    }
}
