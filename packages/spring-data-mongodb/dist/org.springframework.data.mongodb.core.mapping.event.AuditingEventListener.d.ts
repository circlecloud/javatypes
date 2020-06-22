declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace mapping {
                        namespace event {
                            /**
                             * Event listener to populate auditing related fields on an entity about to be saved.
                             * @author Oliver Gierke
                             * @author Thomas Darimont
                             */
                            // @ts-ignore
                            class AuditingEventListener extends java.lang.Object {
                                /**
                                 * Creates a new {@link AuditingEventListener} using the given {@link MappingContext} and {@link AuditingHandler}
                                 * provided by the given {@link ObjectFactory}.
                                 * @param auditingHandlerFactory must not be {#literal null}.
                                 */
                                // @ts-ignore
                                constructor(auditingHandlerFactory: object)
                                // @ts-ignore
                                public onApplicationEvent(event: org.springframework.data.mongodb.core.mapping.event.BeforeConvertEvent<java.lang.Object | any>): void
                                // @ts-ignore
                                public getOrder(): number /*int*/
                            }
                        }
                    }
                }
            }
        }
    }
}
