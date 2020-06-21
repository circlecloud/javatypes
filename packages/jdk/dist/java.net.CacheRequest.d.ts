declare namespace java {
    namespace net {
        /**
         * Represents channels for storing resources in the
         * ResponseCache. Instances of such a class provide an
         * OutputStream object which is called by protocol handlers to
         * store the resource data into the cache, and also an abort() method
         * which allows a cache store operation to be interrupted and
         * abandoned. If an IOException is encountered while reading the
         * response or writing to the cache, the current cache store operation
         * will be aborted.
         * @author Yingxian Wang
         * @since 1.5
         */
        // @ts-ignore
        abstract class CacheRequest extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * Returns an OutputStream to which the response body can be
             * written.
             * @return an OutputStream to which the response body can
             *          be written
             * @throws IOException if an I/O error occurs while
             *          writing the response body
             */
            // @ts-ignore
            public abstract getBody(): java.io.OutputStream
            /**
             * Aborts the attempt to cache the response. If an IOException is
             * encountered while reading the response or writing to the cache,
             * the current cache store operation will be abandoned.
             */
            // @ts-ignore
            public abstract abort(): void
        }
    }
}
