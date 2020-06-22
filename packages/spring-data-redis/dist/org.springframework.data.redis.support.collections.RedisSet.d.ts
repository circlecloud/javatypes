declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace support {
                    namespace collections {
                        /**
                         * Redis extension for the {@link Set} contract. Supports {@link Set} specific operations backed by Redis operations.
                         * @author Costin Leau
                         * @author Christoph Strobl
                         */
                        // @ts-ignore
                        interface RedisSet<E> extends org.springframework.data.redis.support.collections.RedisCollection<E>, java.util.Set<E> {
                            // @ts-ignore
                            intersect(set: org.springframework.data.redis.support.collections.RedisSet<any>): Array<E>
                            // @ts-ignore
                            intersect(sets: java.util.Collection<any> | Array<any>): Array<E>
                            // @ts-ignore
                            union(set: org.springframework.data.redis.support.collections.RedisSet<any>): Array<E>
                            // @ts-ignore
                            union(sets: java.util.Collection<any> | Array<any>): Array<E>
                            // @ts-ignore
                            diff(set: org.springframework.data.redis.support.collections.RedisSet<any>): Array<E>
                            // @ts-ignore
                            diff(sets: java.util.Collection<any> | Array<any>): Array<E>
                            // @ts-ignore
                            intersectAndStore(set: org.springframework.data.redis.support.collections.RedisSet<any>, destKey: java.lang.String | string): org.springframework.data.redis.support.collections.RedisSet<E>
                            // @ts-ignore
                            intersectAndStore(sets: java.util.Collection<any> | Array<any>, destKey: java.lang.String | string): org.springframework.data.redis.support.collections.RedisSet<E>
                            // @ts-ignore
                            unionAndStore(set: org.springframework.data.redis.support.collections.RedisSet<any>, destKey: java.lang.String | string): org.springframework.data.redis.support.collections.RedisSet<E>
                            // @ts-ignore
                            unionAndStore(sets: java.util.Collection<any> | Array<any>, destKey: java.lang.String | string): org.springframework.data.redis.support.collections.RedisSet<E>
                            // @ts-ignore
                            diffAndStore(set: org.springframework.data.redis.support.collections.RedisSet<any>, destKey: java.lang.String | string): org.springframework.data.redis.support.collections.RedisSet<E>
                            // @ts-ignore
                            diffAndStore(sets: java.util.Collection<any> | Array<any>, destKey: java.lang.String | string): org.springframework.data.redis.support.collections.RedisSet<E>
                            /**
                             * @since 1.4
                             * @return 
                             */
                            // @ts-ignore
                            scan(): java.util.Iterator<E>
                        }
                    }
                }
            }
        }
    }
}
