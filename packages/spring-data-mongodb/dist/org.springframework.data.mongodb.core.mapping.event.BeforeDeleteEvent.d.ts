declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace mapping {
                        namespace event {
                            /**
                             * Event being thrown before a document is deleted. The {@link Document} held in the event will represent the query
                             * document <em>before</em> being mapped based on the domain class handled.
                             * @author Martin Baumgartner
                             * @author Christoph Strobl
                             * @author Mark Paluch
                             */
                            // @ts-ignore
                            class BeforeDeleteEvent<T> extends org.springframework.data.mongodb.core.mapping.event.AbstractDeleteEvent<T> {
                                /**
                                 * Creates a new {@link BeforeDeleteEvent} for the given {@link Document}, type and collectionName.
                                 * @param document must not be {#literal null}.
                                 * @param type may be {#literal null}.
                                 * @param collectionName must not be {#literal null}.
                                 * @since 1.8
                                 */
                                // @ts-ignore
                                constructor(document: Document, type: java.lang.Class<T>, collectionName: java.lang.String | string)
                            }
                        }
                    }
                }
            }
        }
    }
}
