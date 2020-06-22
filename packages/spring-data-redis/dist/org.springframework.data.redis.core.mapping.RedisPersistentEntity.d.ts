declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace mapping {
                        /**
                         * Redis specific {@link PersistentEntity}.
                         * @author Christoph Strobl
                         * @param <T>
                         * @since 1.7
                         */
                        // @ts-ignore
                        interface RedisPersistentEntity<T> {
                            /**
                             * Get the {@link TimeToLiveAccessor} associated with the entity.
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            getTimeToLiveAccessor(): org.springframework.data.redis.core.TimeToLiveAccessor
                            /**
                             * @return {#literal true} when a property is annotated with {@link org.springframework.data.redis.core.TimeToLive}.
                             * @since 1.8
                             */
                            // @ts-ignore
                            hasExplictTimeToLiveProperty(): boolean
                            /**
                             * Get the {@link PersistentProperty} that is annotated with {@link org.springframework.data.redis.core.TimeToLive}.
                             * @return can be {#null}.
                             * @since 1.8
                             */
                            // @ts-ignore
                            getExplicitTimeToLiveProperty(): org.springframework.data.redis.core.mapping.RedisPersistentProperty
                        }
                    }
                }
            }
        }
    }
}
