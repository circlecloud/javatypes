declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace messaging {
                        namespace TailableCursorRequest {
                            namespace TailableCursorRequestOptions {
                                /**
                                 * Builder for creating {@link TailableCursorRequestOptions}.
                                 * @author Christoph Strobl
                                 * @since 2.1
                                 */
                                // @ts-ignore
                                class TailableCursorRequestOptionsBuilder extends java.lang.Object {
                                    /**
                                     * Set the collection name to tail.
                                     * @param collection must not be {#literal null} nor {@literal empty}.
                                     * @return this.
                                     */
                                    // @ts-ignore
                                    public collection(collection: java.lang.String | string): org.springframework.data.mongodb.core.messaging.TailableCursorRequest.TailableCursorRequestOptions.TailableCursorRequestOptionsBuilder
                                    /**
                                     * Set the filter to apply.
                                     * @param filter the {#link Query } to apply for filtering events. Must not be {@literal null}.
                                     * @return this.
                                     */
                                    // @ts-ignore
                                    public filter(filter: org.springframework.data.mongodb.core.query.Query): org.springframework.data.mongodb.core.messaging.TailableCursorRequest.TailableCursorRequestOptions.TailableCursorRequestOptionsBuilder
                                    /**
                                     * @return the built {#link TailableCursorRequestOptions}.
                                     */
                                    // @ts-ignore
                                    public build(): org.springframework.data.mongodb.core.messaging.TailableCursorRequest.TailableCursorRequestOptions
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
