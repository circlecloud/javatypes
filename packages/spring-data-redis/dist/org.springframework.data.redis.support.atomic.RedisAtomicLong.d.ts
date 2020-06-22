declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace support {
                    namespace atomic {
                        /**
                         * Atomic long backed by Redis. Uses Redis atomic increment/decrement and watch/multi/exec operations for CAS
                         * operations.
                         * @author Costin Leau
                         * @author Thomas Darimont
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @author Ning Wei
                         * @see java.util.concurrent.atomic.AtomicLong
                         */
                        // @ts-ignore
                        class RedisAtomicLong extends java.lang.Number implements java.io.Serializable, org.springframework.data.redis.core.BoundKeyOperations<java.lang.String | string> {
                            /**
                             * Constructs a new {@link RedisAtomicLong} instance. Uses the value existing in Redis or {@code 0} if none is found.
                             * @param redisCounter Redis key of this counter.
                             * @param factory connection factory.
                             */
                            // @ts-ignore
                            constructor(redisCounter: java.lang.String | string, factory: org.springframework.data.redis.connection.RedisConnectionFactory)
                            /**
                             * Constructs a new {@link RedisAtomicLong} instance with a {@code initialValue} that overwrites the existing value at
                             * {@code redisCounter}.
                             * @param redisCounter Redis key of this counter.
                             * @param factory connection factory.
                             * @param initialValue initial value to set.
                             */
                            // @ts-ignore
                            constructor(redisCounter: java.lang.String | string, factory: org.springframework.data.redis.connection.RedisConnectionFactory, initialValue: number /*long*/)
                            /**
                             * Constructs a new {@link RedisAtomicLong} instance. Uses the value existing in Redis or {@code 0} if none is found.
                             * @param redisCounter Redis key of this counter.
                             * @param template the template.
                             * @see #RedisAtomicLong(String, RedisConnectionFactory, long)
                             */
                            // @ts-ignore
                            constructor(redisCounter: java.lang.String | string, template: org.springframework.data.redis.core.RedisOperations<java.lang.String | string, java.lang.Long | number>)
                            /**
                             * Constructs a new {@link RedisAtomicLong} instance with a {@code initialValue} that overwrites the existing value.
                             * <p>
                             * Note: You need to configure the given {@code template} with appropriate {@link RedisSerializer} for the key and
                             * value. The key serializer must be able to deserialize to a {@link String} and the value serializer must be able to
                             * deserialize to a {@link Long}.
                             * <p>
                             * As an alternative one could use the {@link #RedisAtomicLong(String, RedisConnectionFactory, Long)} constructor
                             * which uses appropriate default serializers, in this case {@link StringRedisSerializer} for the key and
                             * {@link GenericToStringSerializer} for the value.
                             * @param redisCounter Redis key of this counter.
                             * @param template the template
                             * @param initialValue initial value to set if the Redis key is absent.
                             */
                            // @ts-ignore
                            constructor(redisCounter: java.lang.String | string, template: org.springframework.data.redis.core.RedisOperations<java.lang.String | string, java.lang.Long | number>, initialValue: number /*long*/)
                            /**
                             * Get the current value.
                             * @return the current value.
                             */
                            // @ts-ignore
                            public get(): number /*long*/
                            /**
                             * Set to the given value.
                             * @param newValue the new value.
                             */
                            // @ts-ignore
                            public set(newValue: number /*long*/): void
                            /**
                             * Set to the given value and return the old value.
                             * @param newValue the new value.
                             * @return the previous value.
                             */
                            // @ts-ignore
                            public getAndSet(newValue: number /*long*/): number /*long*/
                            /**
                             * Atomically set the value to the given updated value if the current value {@code ==} the expected value.
                             * @param expect the expected value.
                             * @param update the new value.
                             * @return {#literal true} if successful. {@literal false} indicates that the actual value was not equal to the
                             *          expected value.
                             */
                            // @ts-ignore
                            public compareAndSet(expect: number /*long*/, update: number /*long*/): boolean
                            /**
                             * Atomically increment by one the current value.
                             * @return the previous value.
                             */
                            // @ts-ignore
                            public getAndIncrement(): number /*long*/
                            /**
                             * Atomically decrement by one the current value.
                             * @return the previous value.
                             */
                            // @ts-ignore
                            public getAndDecrement(): number /*long*/
                            /**
                             * Atomically add the given value to current value.
                             * @param delta the value to add.
                             * @return the previous value.
                             */
                            // @ts-ignore
                            public getAndAdd(delta: number /*long*/): number /*long*/
                            /**
                             * Atomically increment by one the current value.
                             * @return the updated value.
                             */
                            // @ts-ignore
                            public incrementAndGet(): number /*long*/
                            /**
                             * Atomically decrement by one the current value.
                             * @return the updated value.
                             */
                            // @ts-ignore
                            public decrementAndGet(): number /*long*/
                            /**
                             * Atomically add the given value to current value.
                             * @param delta the value to add.
                             * @return the updated value.
                             */
                            // @ts-ignore
                            public addAndGet(delta: number /*long*/): number /*long*/
                            /**
                             * @return the String representation of the current value.
                             */
                            // @ts-ignore
                            public toString(): string
                            // @ts-ignore
                            public getKey(): string
                            // @ts-ignore
                            public getType(): org.springframework.data.redis.connection.DataType
                            // @ts-ignore
                            public getExpire(): number
                            // @ts-ignore
                            public expire(timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): java.lang.Boolean
                            // @ts-ignore
                            public expireAt(date: java.util.Date): java.lang.Boolean
                            // @ts-ignore
                            public persist(): java.lang.Boolean
                            // @ts-ignore
                            public rename(newKey: java.lang.String | string): void
                            // @ts-ignore
                            public intValue(): number /*int*/
                            // @ts-ignore
                            public longValue(): number /*long*/
                            // @ts-ignore
                            public floatValue(): number /*float*/
                            // @ts-ignore
                            public doubleValue(): number /*double*/
                        }
                    }
                }
            }
        }
    }
}
