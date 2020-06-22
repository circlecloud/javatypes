declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace messaging {
                        namespace ChangeStreamRequest {
                            /**
                             * {@link SubscriptionRequest.RequestOptions} implementation specific to a {@link ChangeStreamRequest}.
                             * @author Christoph Strobl
                             * @since 2.1
                             */
                            // @ts-ignore
                            class ChangeStreamRequestOptions extends java.lang.Object implements org.springframework.data.mongodb.core.messaging.SubscriptionRequest.RequestOptions {
                                /**
                                 * Create new {@link ChangeStreamRequestOptions}.
                                 * @param collectionName can be {#literal null}.
                                 * @param options must not be {#literal null}.
                                 */
                                // @ts-ignore
                                constructor(databaseName: java.lang.String | string, collectionName: java.lang.String | string, options: org.springframework.data.mongodb.core.ChangeStreamOptions)
                                // @ts-ignore
                                public static of(options: org.springframework.data.mongodb.core.messaging.SubscriptionRequest.RequestOptions): org.springframework.data.mongodb.core.messaging.ChangeStreamRequest.ChangeStreamRequestOptions
                                /**
                                 * Get the {@link ChangeStreamOptions} defined.
                                 * @return never {#literal null}.
                                 */
                                // @ts-ignore
                                public getChangeStreamOptions(): org.springframework.data.mongodb.core.ChangeStreamOptions
                                // @ts-ignore
                                public getCollectionName(): string
                                // @ts-ignore
                                public getDatabaseName(): string
                            }
                        }
                    }
                }
            }
        }
    }
}
