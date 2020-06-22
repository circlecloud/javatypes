declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace messaging {
                        /**
                         * {@link SubscriptionRequest} implementation to be used for listening to
                         * <a href="https://docs.mongodb.com/manual/changeStreams/">Change Streams</a> via a {@link MessageListenerContainer}
                         * using the synchronous MongoDB Java driver.
                         * <p/>
                         * The most trivial use case is subscribing to all events of a specific {@link com.mongodb.client.MongoCollection
                         * collection}
                         * <pre>
                         * <code>
                         * ChangeStreamRequest<Document> request = new ChangeStreamRequest<>(System.out::println, () -> "collection-name");
                         * </code>
                         * </pre>
                         * or {@link com.mongodb.client.MongoDatabase} which receives events from all {@link com.mongodb.client.MongoCollection
                         * collections} in that database.
                         * <pre>
                         * <code>
                         * ChangeStreamRequest<Document> request = new ChangeStreamRequest<>(System.out::println, RequestOptions.justDatabase("test"));
                         * </code>
                         * </pre>
                         * For more advanced scenarios {@link ChangeStreamOptions} offers abstractions for options like filtering, resuming,...
                         * <pre>
                         * <code>
                         * ChangeStreamOptions options = ChangeStreamOptions.builder()
                         * .filter(newAggregation(match(where("age").is(7))))
                         * .returnFullDocumentOnUpdate()
                         * .build();
                         * ChangeStreamRequest<Document> request = new ChangeStreamRequest<>(System.out::println, new ChangeStreamRequestOptions("collection-name", options));
                         * </code>
                         * </pre>
                         * {@link ChangeStreamRequestBuilder} offers a fluent API for creating {@link ChangeStreamRequest} with
                         * {@link ChangeStreamOptions} in one go.
                         * <pre>
                         * <code>
                         * ChangeStreamRequest<Document> request = ChangeStreamRequest.builder()
                         * .collection("collection-name")
                         * .publishTo(System.out::println)
                         * .filter(newAggregation(match(where("age").is(7))))
                         * .fullDocumentLookup(UPDATE_LOOKUP)
                         * .build();
                         * </code>
                         * </pre>
                         * {@link Message Messges} passed to the {@link MessageListener} contain the {@link ChangeStreamDocument} within their
                         * {@link Message#getRaw() raw value} while the {@code fullDocument} is extracted into the {@link Message#getBody()
                         * messages body}. Unless otherwise specified (via {@link ChangeStreamOptions#getFullDocumentLookup()} the
                         * {@link Message#getBody() message body} for {@code update events} will be empty for a {@link Document} target type.
                         * {@link Message#getBody()} Message bodies} that map to a different target type automatically enforce an
                         * {@link FullDocument#UPDATE_LOOKUP}.
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @since 2.1
                         */
                        // @ts-ignore
                        class ChangeStreamRequest<T> extends java.lang.Object implements org.springframework.data.mongodb.core.messaging.SubscriptionRequest<object, T, org.springframework.data.mongodb.core.messaging.ChangeStreamRequest.ChangeStreamRequestOptions> {
                            /**
                             * Create a new {@link ChangeStreamRequest} with options, passing {@link Message messages} to the given
                             * {@link MessageListener}.
                             * @param messageListener must not be {#literal null}.
                             * @param options must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(messageListener: org.springframework.data.mongodb.core.messaging.MessageListener<object, any>, options: org.springframework.data.mongodb.core.messaging.SubscriptionRequest.RequestOptions)
                            // @ts-ignore
                            public getMessageListener(): org.springframework.data.mongodb.core.messaging.MessageListener<object, any>
                            // @ts-ignore
                            public getRequestOptions(): org.springframework.data.mongodb.core.messaging.ChangeStreamRequest.ChangeStreamRequestOptions
                            /**
                             * Obtain a shiny new {@link ChangeStreamRequestBuilder} and start defining your {@link ChangeStreamRequest} in this
                             * fancy fluent way. Just don't forget to call {@link ChangeStreamRequestBuilder#build() build()} when your're done.
                             * @return new instance of {#link ChangeStreamRequest}.
                             */
                            // @ts-ignore
                            public static builder(): org.springframework.data.mongodb.core.messaging.ChangeStreamRequest.ChangeStreamRequestBuilder<any>
                            /**
                             * Obtain a shiny new {@link ChangeStreamRequestBuilder} and start defining your {@link ChangeStreamRequest} in this
                             * fancy fluent way. Just don't forget to call {@link ChangeStreamRequestBuilder#build() build()} when your're done.
                             * @return new instance of {#link ChangeStreamRequest}.
                             */
                            // @ts-ignore
                            public static builder<T>(listener: org.springframework.data.mongodb.core.messaging.MessageListener<object, any>): org.springframework.data.mongodb.core.messaging.ChangeStreamRequest.ChangeStreamRequestBuilder<T>
                        }
                    }
                }
            }
        }
    }
}
