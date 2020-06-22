declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace messaging {
                        namespace Message {
                            /**
                             * @author Christoph Strobl
                             * @since 2.1
                             */
                            // @ts-ignore
                            class MessageProperties extends java.lang.Object {
                                // @ts-ignore
                                constructor()
                                /**
                                 * The database name the message originates from.
                                 * @return 
                                 */
                                // @ts-ignore
                                public getDatabaseName(): string
                                /**
                                 * The collection name the message originates from.
                                 * @return 
                                 */
                                // @ts-ignore
                                public getCollectionName(): string
                                /**
                                 * @return empty {#link MessageProperties}.
                                 */
                                // @ts-ignore
                                public static empty(): org.springframework.data.mongodb.core.messaging.Message.MessageProperties
                                /**
                                 * Obtain a shiny new {@link MessagePropertiesBuilder} and start defining options in this fancy fluent way. Just
                                 * don't forget to call {@link MessagePropertiesBuilder#build() build()} when your're done.
                                 * @return new instance of {#link MessagePropertiesBuilder}.
                                 */
                                // @ts-ignore
                                public static builder(): org.springframework.data.mongodb.core.messaging.Message.MessageProperties.MessagePropertiesBuilder
                            }
                        }
                    }
                }
            }
        }
    }
}
