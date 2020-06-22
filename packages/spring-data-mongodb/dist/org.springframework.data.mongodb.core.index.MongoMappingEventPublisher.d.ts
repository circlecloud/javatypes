declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace index {
                        /**
                         * An implementation of ApplicationEventPublisher that will only fire {@link MappingContextEvent}s for use by the index
                         * creator when MongoTemplate is used 'stand-alone', that is not declared inside a Spring {@link ApplicationContext}.
                         * Declare {@link MongoTemplate} inside an {@link ApplicationContext} to enable the publishing of all persistence events
                         * such as {@link AfterLoadEvent}, {@link AfterSaveEvent}, etc.
                         * @author Jon Brisbin
                         * @author Oliver Gierke
                         * @author Mark Paluch
                         */
                        // @ts-ignore
                        class MongoMappingEventPublisher extends java.lang.Object {
                            /**
                             * Creates a new {@link MongoMappingEventPublisher} for the given {@link ApplicationListener}.
                             * @param indexCreator must not be {#literal null}.
                             * @since 2.1
                             */
                            // @ts-ignore
                            constructor(indexCreator: object)
                            // @ts-ignore
                            public publishEvent(event: ApplicationEvent): void
                        }
                    }
                }
            }
        }
    }
}
