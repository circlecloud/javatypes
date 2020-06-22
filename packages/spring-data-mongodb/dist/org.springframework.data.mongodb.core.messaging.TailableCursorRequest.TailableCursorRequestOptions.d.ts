declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace messaging {
                        namespace TailableCursorRequest {
                            /**
                             * {@link SubscriptionRequest.RequestOptions} implementation specific to a {@link TailableCursorRequest}.
                             * @author Christoph Strobl
                             * @since 2.1
                             */
                            // @ts-ignore
                            class TailableCursorRequestOptions extends java.lang.Object implements org.springframework.data.mongodb.core.messaging.SubscriptionRequest.RequestOptions {
                                // @ts-ignore
                                public static of(options: org.springframework.data.mongodb.core.messaging.SubscriptionRequest.RequestOptions): org.springframework.data.mongodb.core.messaging.TailableCursorRequest.TailableCursorRequestOptions
                                /**
                                 * Obtain a shiny new {@link TailableCursorRequestOptionsBuilder} and start defining options in this fancy fluent
                                 * way. Just don't forget to call {@link TailableCursorRequestOptionsBuilder#build() build()} when your're done.
                                 * @return new instance of {#link TailableCursorRequestOptionsBuilder}.
                                 */
                                // @ts-ignore
                                public static builder(): org.springframework.data.mongodb.core.messaging.TailableCursorRequest.TailableCursorRequestOptions.TailableCursorRequestOptionsBuilder
                                // @ts-ignore
                                public getCollectionName(): string
                                // @ts-ignore
                                public getQuery(): java.util.Optional<org.springframework.data.mongodb.core.query.Query>
                            }
                        }
                    }
                }
            }
        }
    }
}
