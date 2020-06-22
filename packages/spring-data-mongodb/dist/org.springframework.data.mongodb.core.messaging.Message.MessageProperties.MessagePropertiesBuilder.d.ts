declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace messaging {
                        namespace Message {
                            namespace MessageProperties {
                                /**
                                 * Builder for {@link MessageProperties}.
                                 * @author Christoph Strobl
                                 * @since 2.1
                                 */
                                // @ts-ignore
                                class MessagePropertiesBuilder extends java.lang.Object {
                                    // @ts-ignore
                                    constructor()
                                    /**
                                     * @param dbName must not be {#literal null}.
                                     * @return this.
                                     */
                                    // @ts-ignore
                                    public databaseName(dbName: java.lang.String | string): org.springframework.data.mongodb.core.messaging.Message.MessageProperties.MessagePropertiesBuilder
                                    /**
                                     * @param collectionName must not be {#literal null}.
                                     * @return this
                                     */
                                    // @ts-ignore
                                    public collectionName(collectionName: java.lang.String | string): org.springframework.data.mongodb.core.messaging.Message.MessageProperties.MessagePropertiesBuilder
                                    /**
                                     * @return the built {#link MessageProperties}.
                                     */
                                    // @ts-ignore
                                    public build(): org.springframework.data.mongodb.core.messaging.Message.MessageProperties
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
