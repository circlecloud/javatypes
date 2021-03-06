declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace mapping {
                        namespace event {
                            /**
                             * {@link MongoMappingEvent} triggered after save of a document.
                             * @author Jon Brisbin
                             * @author Christoph Strobl
                             * @author Mark Paluch
                             */
                            // @ts-ignore
                            class AfterSaveEvent<E> extends org.springframework.data.mongodb.core.mapping.event.MongoMappingEvent<E> {
                                /**
                                 * Creates new {@link AfterSaveEvent}.
                                 * @param source must not be {#literal null}.
                                 * @param document must not be {#literal null}.
                                 * @param collectionName must not be {#literal null}.
                                 * @since 1.8
                                 */
                                // @ts-ignore
                                constructor(source: E, document: Document, collectionName: java.lang.String | string)
                            }
                        }
                    }
                }
            }
        }
    }
}
