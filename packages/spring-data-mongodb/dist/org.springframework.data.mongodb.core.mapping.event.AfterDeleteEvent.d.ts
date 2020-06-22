declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace mapping {
                        namespace event {
                            /**
                             * Event being thrown after a single or a set of documents has/have been deleted. The {@link Document} held in the event
                             * will be the query document <em>after</am> it has been mapped onto the domain type handled.
                             * @author Martin Baumgartner
                             * @author Christoph Strobl
                             * @author Mark Paluch
                             */
                            // @ts-ignore
                            class AfterDeleteEvent<T> extends org.springframework.data.mongodb.core.mapping.event.AbstractDeleteEvent<T> {
                                /**
                                 * Creates a new {@link AfterDeleteEvent} for the given {@link Document}, type and collectionName.
                                 * @param dbo must not be {#literal null}.
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
