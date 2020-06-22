declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace ScanOptions {
                        /**
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @since 1.4
                         */
                        // @ts-ignore
                        class ScanOptionsBuilder extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            /**
                             * Returns the current {@link ScanOptionsBuilder} configured with the given {@code count}.
                             * @param count
                             * @return 
                             */
                            // @ts-ignore
                            public count(count: number /*long*/): org.springframework.data.redis.core.ScanOptions.ScanOptionsBuilder
                            /**
                             * Returns the current {@link ScanOptionsBuilder} configured with the given {@code pattern}.
                             * @param pattern
                             * @return 
                             */
                            // @ts-ignore
                            public match(pattern: java.lang.String | string): org.springframework.data.redis.core.ScanOptions.ScanOptionsBuilder
                            /**
                             * Builds a new {@link ScanOptions} objects.
                             * @return a new {#link ScanOptions} objects.
                             */
                            // @ts-ignore
                            public build(): org.springframework.data.redis.core.ScanOptions
                        }
                    }
                }
            }
        }
    }
}
