declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace messaging {
                        namespace TailableCursorRequest {
                            /**
                             * Builder for creating {@link TailableCursorRequest}.
                             * @author Mark Paluch
                             * @since 2.1
                             * @see TailableCursorRequestOptions
                             */
                            // @ts-ignore
                            class TailableCursorRequestBuilder<T> extends java.lang.Object {
                                /**
                                 * Set the name of the {@link com.mongodb.client.MongoCollection} to listen to.
                                 * @param collectionName must not be {#literal null} nor empty.
                                 * @return this.
                                 */
                                // @ts-ignore
                                public collection(collectionName: java.lang.String | string): org.springframework.data.mongodb.core.messaging.TailableCursorRequest.TailableCursorRequestBuilder<T>
                                /**
                                 * Set the {@link MessageListener} event {@link Message messages} will be published to.
                                 * @param messageListener must not be {#literal null}.
                                 * @return this.
                                 */
                                // @ts-ignore
                                public publishTo(messageListener: org.springframework.data.mongodb.core.messaging.MessageListener<Document, any>): org.springframework.data.mongodb.core.messaging.TailableCursorRequest.TailableCursorRequestBuilder<T>
                                /**
                                 * Set the filter to apply.
                                 * @param filter the {#link Query } to apply for filtering events. Must not be {@literal null}.
                                 * @return this.
                                 */
                                // @ts-ignore
                                public filter(filter: org.springframework.data.mongodb.core.query.Query): org.springframework.data.mongodb.core.messaging.TailableCursorRequest.TailableCursorRequestBuilder<T>
                                /**
                                 * @return the build {#link ChangeStreamRequest}.
                                 */
                                // @ts-ignore
                                public build(): org.springframework.data.mongodb.core.messaging.TailableCursorRequest<T>
                            }
                        }
                    }
                }
            }
        }
    }
}
