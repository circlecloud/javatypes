declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace mapping {
                        /**
                         * {@link RedisPersistentEntity} implementation.
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @param <T>
                         */
                        // @ts-ignore
                        class BasicRedisPersistentEntity<T> extends java.lang.Object implements org.springframework.data.redis.core.mapping.RedisPersistentEntity<T> {
                            /**
                             * Creates new {@link BasicRedisPersistentEntity}.
                             * @param information must not be {#literal null}.
                             * @param fallbackKeySpaceResolver can be {#literal null}.
                             * @param timeToLiveAccessor can be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(information: object, fallbackKeySpaceResolver: KeySpaceResolver, timeToLiveAccessor: org.springframework.data.redis.core.TimeToLiveAccessor)
                            // @ts-ignore
                            public getTimeToLiveAccessor(): org.springframework.data.redis.core.TimeToLiveAccessor
                            // @ts-ignore
                            public hasExplictTimeToLiveProperty(): boolean
                            // @ts-ignore
                            public getExplicitTimeToLiveProperty(): org.springframework.data.redis.core.mapping.RedisPersistentProperty
                            // @ts-ignore
                            returnPropertyIfBetterIdPropertyCandidateOrNull(property: org.springframework.data.redis.core.mapping.RedisPersistentProperty): org.springframework.data.redis.core.mapping.RedisPersistentProperty
                        }
                    }
                }
            }
        }
    }
}
