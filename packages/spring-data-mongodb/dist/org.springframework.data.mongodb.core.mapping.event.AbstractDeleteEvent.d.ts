declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace mapping {
                        namespace event {
                            /**
                             * Base class for delete events.
                             * @author Martin Baumgartner
                             * @author Christoph Strobl
                             * @author Mark Paluch
                             */
                            // @ts-ignore
                            abstract class AbstractDeleteEvent<T> extends org.springframework.data.mongodb.core.mapping.event.MongoMappingEvent<Document> {
                                /**
                                 * Creates a new {@link AbstractDeleteEvent} for the given {@link Document} and type.
                                 * @param document must not be {#literal null}.
                                 * @param type may be {#literal null}.
                                 * @param collectionName must not be {#literal null}.
                                 * @since 1.8
                                 */
                                // @ts-ignore
                                constructor(document: Document, type: java.lang.Class<T>, collectionName: java.lang.String | string)
                                /**
                                 * Returns the type for which the {@link AbstractDeleteEvent} shall be invoked for.
                                 * @return 
                                 */
                                // @ts-ignore
                                public getType(): java.lang.Class<T>
                            }
                        }
                    }
                }
            }
        }
    }
}
