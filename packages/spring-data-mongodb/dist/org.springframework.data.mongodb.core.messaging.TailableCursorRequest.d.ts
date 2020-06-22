declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace messaging {
                        /**
                         * {@link SubscriptionRequest} implementation to be used to listen to query results in a
                         * <a href="https://docs.mongodb.com/manual/core/capped-collections/">Capped Collection</a> using a
                         * <a href="https://docs.mongodb.com/manual/core/tailable-cursors/">Tailable Cursor</a>.
                         * <p />
                         * The most trivial use case is subscribing to all events of a specific {@link com.mongodb.client.MongoCollection
                         * collection}.
                         * <pre>
                         * <code>
                         * TailableCursorRequest<Document> request = new TailableCursorRequest<>(System.out::println, () -> "collection-name");
                         * </code>
                         * </pre>
                         * {@link TailableCursorRequestBuilder} offers a fluent API for creating {@link TailableCursorRequest} with
                         * {@link TailableCursorRequestOptions} in one go.
                         * <pre>
                         * <code>
                         * TailableCursorRequest<Document> request = TailableCursorRequest.builder()
                         * .collection("collection-name")
                         * .publishTo(System.out::println)
                         * .build();
                         * </code>
                         * </pre>
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @since 2.1
                         */
                        // @ts-ignore
                        class TailableCursorRequest<T> extends java.lang.Object implements org.springframework.data.mongodb.core.messaging.SubscriptionRequest<Document, T, org.springframework.data.mongodb.core.messaging.SubscriptionRequest.RequestOptions> {
                            /**
                             * Create a new {@link TailableCursorRequest} with options, passing {@link Message messages} to the given
                             * {@link MessageListener}.
                             * @param messageListener must not be {#literal null}.
                             * @param options must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(messageListener: org.springframework.data.mongodb.core.messaging.MessageListener<Document, any>, options: org.springframework.data.mongodb.core.messaging.SubscriptionRequest.RequestOptions)
                            // @ts-ignore
                            public getMessageListener(): org.springframework.data.mongodb.core.messaging.MessageListener<Document, any>
                            // @ts-ignore
                            public getRequestOptions(): org.springframework.data.mongodb.core.messaging.TailableCursorRequest.TailableCursorRequestOptions
                            /**
                             * Obtain a shiny new {@link TailableCursorRequestBuilder} and start defining options in this fancy fluent way. Just
                             * don't forget to call {@link TailableCursorRequestBuilder#build() build()} when your're done.
                             * @return new instance of {#link TailableCursorRequestBuilder}.
                             */
                            // @ts-ignore
                            public static builder(): org.springframework.data.mongodb.core.messaging.TailableCursorRequest.TailableCursorRequestBuilder<any>
                            /**
                             * Obtain a shiny new {@link TailableCursorRequestBuilder} and start defining options in this fancy fluent way. Just
                             * don't forget to call {@link TailableCursorRequestBuilder#build() build()} when your're done.
                             * @return new instance of {#link TailableCursorRequestBuilder}.
                             */
                            // @ts-ignore
                            public static builder<T>(listener: org.springframework.data.mongodb.core.messaging.MessageListener<Document, any>): org.springframework.data.mongodb.core.messaging.TailableCursorRequest.TailableCursorRequestBuilder<T>
                        }
                    }
                }
            }
        }
    }
}
