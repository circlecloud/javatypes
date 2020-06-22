declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace messaging {
                        namespace SubscriptionRequest {
                            /**
                             * Options for specifying the behaviour of the {@link SubscriptionRequest}.
                             * @author Christoph Strobl
                             * @since 2.1
                             */
                            // @ts-ignore
                            interface RequestOptions {
                                /**
                                 * Get the database name of the db.
                                 * @return the name of the database to subscribe to. Can be {#literal null} in which case the default
                                 *          {@link MongoDbFactory#getDb() database} is used.
                                 */
                                // @ts-ignore
                                getDatabaseName(): string
                                /**
                                 * Get the collection name.
                                 * @return the name of the collection to subscribe to. Can be {#literal null}.
                                 */
                                // @ts-ignore
                                getCollectionName(): string
                                /**
                                 * Create empty options.
                                 * @return new instance of empty {#link RequestOptions}.
                                 */
                                // @ts-ignore
                                none(): org.springframework.data.mongodb.core.messaging.SubscriptionRequest.RequestOptions
                                /**
                                 * Create options with the provided database.
                                 * @param database must not be {#literal null}.
                                 * @return new instance of empty {#link RequestOptions}.
                                 */
                                // @ts-ignore
                                justDatabase(database: java.lang.String | string): org.springframework.data.mongodb.core.messaging.SubscriptionRequest.RequestOptions
                                /**
                                 * Create options with the provided collection.
                                 * @param collection must not be {#literal null}.
                                 * @return new instance of empty {#link RequestOptions}.
                                 */
                                // @ts-ignore
                                justCollection(collection: java.lang.String | string): org.springframework.data.mongodb.core.messaging.SubscriptionRequest.RequestOptions
                                /**
                                 * Create options with the provided database and collection.
                                 * @param database must not be {#literal null}.
                                 * @param collection must not be {#literal null}.
                                 * @return new instance of empty {#link RequestOptions}.
                                 */
                                // @ts-ignore
                                of(database: java.lang.String | string, collection: java.lang.String | string): org.springframework.data.mongodb.core.messaging.SubscriptionRequest.RequestOptions
                            }
                        }
                    }
                }
            }
        }
    }
}
