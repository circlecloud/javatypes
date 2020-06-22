declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    /**
                     * {@link Message} implementation specific to MongoDB <a href="https://docs.mongodb.com/manual/changeStreams/">Change
                     * Streams</a>.
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @since 2.1
                     */
                    // @ts-ignore
                    class ChangeStreamEvent<T> extends java.lang.Object {
                        /**
                         * @param raw can be {#literal null}.
                         * @param targetType must not be {#literal null}.
                         * @param converter must not be {#literal null}.
                         */
                        // @ts-ignore
                        constructor(raw: object, targetType: java.lang.Class<T>, converter: org.springframework.data.mongodb.core.convert.MongoConverter)
                        /**
                         * Get the raw {@link ChangeStreamDocument} as emitted by the driver.
                         * @return can be {#literal null}.
                         */
                        // @ts-ignore
                        public getRaw(): object
                        /**
                         * Get the {@link ChangeStreamDocument#getClusterTime() cluster time} as {@link Instant} the event was emitted at.
                         * @return can be {#literal null}.
                         */
                        // @ts-ignore
                        public getTimestamp(): java.time.Instant
                        /**
                         * Get the {@link ChangeStreamDocument#getResumeToken() resume token} for this event.
                         * @return can be {#literal null}.
                         */
                        // @ts-ignore
                        public getResumeToken(): BsonValue
                        /**
                         * Get the {@link ChangeStreamDocument#getOperationType() operation type} for this event.
                         * @return can be {#literal null}.
                         */
                        // @ts-ignore
                        public getOperationType(): OperationType
                        /**
                         * Get the database name the event was originated at.
                         * @return can be {#literal null}.
                         */
                        // @ts-ignore
                        public getDatabaseName(): string
                        /**
                         * Get the collection name the event was originated at.
                         * @return can be {#literal null}.
                         */
                        // @ts-ignore
                        public getCollectionName(): string
                        /**
                         * Get the potentially converted {@link ChangeStreamDocument#getFullDocument()}.
                         * @return {#literal null} when {@link #getRaw()} or {@link ChangeStreamDocument#getFullDocument()} is
                         *          {@literal null}.
                         */
                        // @ts-ignore
                        public getBody(): T
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
