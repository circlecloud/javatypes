declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace mapping {
                        namespace event {
                            /**
                             * {@link MongoMappingEvent} thrown after convert of a document.
                             * @author Jon Brisbin
                             * @author Christoph Strobl
                             * @author Mark Paluch
                             */
                            // @ts-ignore
                            class AfterConvertEvent<E> extends org.springframework.data.mongodb.core.mapping.event.MongoMappingEvent<E> {
                                /**
                                 * Creates new {@link AfterConvertEvent}.
                                 * @param document must not be {#literal null}.
                                 * @param source must not be {#literal null}.
                                 * @param collectionName must not be {#literal null}.
                                 * @since 1.8
                                 */
                                // @ts-ignore
                                constructor(document: Document, source: E, collectionName: java.lang.String | string)
                            }
                        }
                    }
                }
            }
        }
    }
}
