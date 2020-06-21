declare namespace java {
    namespace net {
        /**
         * Represent channels for retrieving resources from the
         * ResponseCache. Instances of such a class provide an
         * InputStream that returns the entity body, and also a
         * getHeaders() method which returns the associated response headers.
         * @author Yingxian Wang
         * @since 1.5
         */
        // @ts-ignore
        abstract class CacheResponse extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * Returns the response headers as a Map.
             * @return An immutable Map from response header field names to
             *          lists of field values. The status line has null as its
             *          field name.
             * @throws IOException if an I/O error occurs
             *             while getting the response headers
             */
            // @ts-ignore
            public abstract getHeaders(): java.util.Map<java.lang.String | string, java.util.List<java.lang.String | string> | Array<java.lang.String | string>>
            /**
             * Returns the response body as an InputStream.
             * @return an InputStream from which the response body can
             *          be accessed
             * @throws IOException if an I/O error occurs while
             *          getting the response body
             */
            // @ts-ignore
            public abstract getBody(): java.io.InputStream
        }
    }
}
