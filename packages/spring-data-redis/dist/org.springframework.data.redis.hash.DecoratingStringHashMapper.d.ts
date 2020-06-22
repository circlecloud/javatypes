declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace hash {
                    /**
                     * Delegating hash mapper used for flattening objects into Strings. Suitable when dealing with mappers that support
                     * Strings and type conversion.
                     * @author Costin Leau
                     */
                    // @ts-ignore
                    class DecoratingStringHashMapper<T> extends java.lang.Object implements org.springframework.data.redis.hash.HashMapper<T, java.lang.String | string, java.lang.String | string> {
                        // @ts-ignore
                        constructor(mapper: org.springframework.data.redis.hash.HashMapper<T, any, any>)
                        // @ts-ignore
                        public fromHash(hash: java.util.Map<any>): T
                        // @ts-ignore
                        public toHash(object: T): java.util.Map<java.lang.String | string, java.lang.String | string>
                    }
                }
            }
        }
    }
}
