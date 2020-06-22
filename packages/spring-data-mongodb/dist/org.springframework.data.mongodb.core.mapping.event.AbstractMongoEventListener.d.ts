declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace mapping {
                        namespace event {
                            /**
                             * Base class to implement domain class specific {@link ApplicationListener}s.
                             * @author Jon Brisbin
                             * @author Oliver Gierke
                             * @author Martin Baumgartner
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            abstract class AbstractMongoEventListener<E> extends java.lang.Object {
                                /**
                                 * Creates a new {@link AbstractMongoEventListener}.
                                 */
                                // @ts-ignore
                                constructor()
                                // @ts-ignore
                                public onApplicationEvent(event: org.springframework.data.mongodb.core.mapping.event.MongoMappingEvent<any>): void
                                /**
                                 * Captures {@link BeforeConvertEvent}.
                                 * @param event never {#literal null}.
                                 * @since 1.8
                                 */
                                // @ts-ignore
                                public onBeforeConvert(event: org.springframework.data.mongodb.core.mapping.event.BeforeConvertEvent<E>): void
                                /**
                                 * Captures {@link BeforeSaveEvent}.
                                 * @param event will never be {#literal null}.
                                 * @since 1.8
                                 */
                                // @ts-ignore
                                public onBeforeSave(event: org.springframework.data.mongodb.core.mapping.event.BeforeSaveEvent<E>): void
                                /**
                                 * Captures {@link AfterSaveEvent}.
                                 * @param event will never be {#literal null}.
                                 * @since 1.8
                                 */
                                // @ts-ignore
                                public onAfterSave(event: org.springframework.data.mongodb.core.mapping.event.AfterSaveEvent<E>): void
                                /**
                                 * Captures {@link AfterLoadEvent}.
                                 * @param event will never be {#literal null}.
                                 * @since 1.8
                                 */
                                // @ts-ignore
                                public onAfterLoad(event: org.springframework.data.mongodb.core.mapping.event.AfterLoadEvent<E>): void
                                /**
                                 * Captures {@link AfterConvertEvent}.
                                 * @param event will never be {#literal null}.
                                 * @since 1.8
                                 */
                                // @ts-ignore
                                public onAfterConvert(event: org.springframework.data.mongodb.core.mapping.event.AfterConvertEvent<E>): void
                                /**
                                 * Captures {@link AfterDeleteEvent}.
                                 * @param event will never be {#literal null}.
                                 * @since 1.8
                                 */
                                // @ts-ignore
                                public onAfterDelete(event: org.springframework.data.mongodb.core.mapping.event.AfterDeleteEvent<E>): void
                                /**
                                 * Capture {@link BeforeDeleteEvent}.
                                 * @param event will never be {#literal null}.
                                 * @since 1.8
                                 */
                                // @ts-ignore
                                public onBeforeDelete(event: org.springframework.data.mongodb.core.mapping.event.BeforeDeleteEvent<E>): void
                            }
                        }
                    }
                }
            }
        }
    }
}
