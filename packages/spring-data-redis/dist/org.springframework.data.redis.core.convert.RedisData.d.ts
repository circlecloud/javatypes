declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace convert {
                        /**
                         * Data object holding {@link Bucket} representing the domain object to be stored in a Redis hash. Index information
                         * points to additional structures holding the objects is for searching.
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @since 1.7
                         */
                        // @ts-ignore
                        class RedisData extends java.lang.Object {
                            /**
                             * Creates new {@link RedisData} with empty {@link Bucket}.
                             */
                            // @ts-ignore
                            constructor()
                            /**
                             * Creates new {@link RedisData} with {@link Bucket} holding provided values.
                             * @param raw should not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(raw: java.util.Map<number /*byte*/[], number /*byte*/[]>)
                            /**
                             * Creates new {@link RedisData} with {@link Bucket}
                             * @param bucket must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(bucket: org.springframework.data.redis.core.convert.Bucket)
                            /**
                             * Set the id to be used as part of the key.
                             * @param id
                             */
                            // @ts-ignore
                            public setId(id: java.lang.String | string): void
                            /**
                             * @return 
                             */
                            // @ts-ignore
                            public getId(): string
                            /**
                             * Get the time before expiration in seconds.
                             * @return {#literal null} if not set.
                             */
                            // @ts-ignore
                            public getTimeToLive(): number
                            /**
                             * @param index must not be {#literal null}.
                             */
                            // @ts-ignore
                            public addIndexedData(index: org.springframework.data.redis.core.convert.IndexedData): void
                            /**
                             * @param indexes must not be {#literal null}.
                             */
                            // @ts-ignore
                            public addIndexedData(indexes: java.util.Collection<org.springframework.data.redis.core.convert.IndexedData> | Array<org.springframework.data.redis.core.convert.IndexedData>): void
                            /**
                             * @return never {#literal null}.
                             */
                            // @ts-ignore
                            public getIndexedData(): Array<org.springframework.data.redis.core.convert.IndexedData>
                            /**
                             * @return 
                             */
                            // @ts-ignore
                            public getKeyspace(): string
                            /**
                             * @param keyspace
                             */
                            // @ts-ignore
                            public setKeyspace(keyspace: java.lang.String | string): void
                            /**
                             * @return 
                             */
                            // @ts-ignore
                            public getBucket(): org.springframework.data.redis.core.convert.Bucket
                            /**
                             * Set the time before expiration in {@link TimeUnit#SECONDS}.
                             * @param timeToLive can be {#literal null}.
                             */
                            // @ts-ignore
                            public setTimeToLive(timeToLive: java.lang.Long | number): void
                            /**
                             * Set the time before expiration converting the given arguments to {@link TimeUnit#SECONDS}.
                             * @param timeToLive must not be {#literal null}
                             * @param timeUnit must not be {#literal null}
                             */
                            // @ts-ignore
                            public setTimeToLive(timeToLive: java.lang.Long | number, timeUnit: java.util.concurrent.TimeUnit): void
                            // @ts-ignore
                            public toString(): string
                        }
                    }
                }
            }
        }
    }
}
