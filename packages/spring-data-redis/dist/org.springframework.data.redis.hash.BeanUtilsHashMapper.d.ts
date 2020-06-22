declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace hash {
                    /**
                     * HashMapper based on Apache Commons BeanUtils project. Does NOT supports nested properties.
                     * @author Costin Leau
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     */
                    // @ts-ignore
                    class BeanUtilsHashMapper<T> extends java.lang.Object implements org.springframework.data.redis.hash.HashMapper<T, java.lang.String | string, java.lang.String | string> {
                        /**
                         * Create a new {@link BeanUtilsHashMapper} for the given {@code type}.
                         * @param type must not be {#literal null}.
                         */
                        // @ts-ignore
                        constructor(type: java.lang.Class<T>)
                        // @ts-ignore
                        public fromHash(hash: java.util.Map<java.lang.String | string, java.lang.String | string>): T
                        // @ts-ignore
                        public toHash(object: T): java.util.Map<java.lang.String | string, java.lang.String | string>
                    }
                }
            }
        }
    }
}
