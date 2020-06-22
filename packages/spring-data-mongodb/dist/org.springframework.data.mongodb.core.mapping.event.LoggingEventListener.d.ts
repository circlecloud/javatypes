declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace mapping {
                        namespace event {
                            /**
                             * {@link ApplicationListener} for Mongo mapping events logging the events.
                             * @author Jon Brisbin
                             * @author Martin Baumgartner
                             * @author Oliver Gierke
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class LoggingEventListener extends org.springframework.data.mongodb.core.mapping.event.AbstractMongoEventListener<java.lang.Object | any> {
                                // @ts-ignore
                                constructor()
                                // @ts-ignore
                                public onBeforeConvert(event: org.springframework.data.mongodb.core.mapping.event.BeforeConvertEvent<java.lang.Object | any>): void
                                // @ts-ignore
                                public onBeforeSave(event: org.springframework.data.mongodb.core.mapping.event.BeforeSaveEvent<java.lang.Object | any>): void
                                // @ts-ignore
                                public onAfterSave(event: org.springframework.data.mongodb.core.mapping.event.AfterSaveEvent<java.lang.Object | any>): void
                                // @ts-ignore
                                public onAfterLoad(event: org.springframework.data.mongodb.core.mapping.event.AfterLoadEvent<java.lang.Object | any>): void
                                // @ts-ignore
                                public onAfterConvert(event: org.springframework.data.mongodb.core.mapping.event.AfterConvertEvent<java.lang.Object | any>): void
                                // @ts-ignore
                                public onAfterDelete(event: org.springframework.data.mongodb.core.mapping.event.AfterDeleteEvent<java.lang.Object | any>): void
                                // @ts-ignore
                                public onBeforeDelete(event: org.springframework.data.mongodb.core.mapping.event.BeforeDeleteEvent<java.lang.Object | any>): void
                            }
                        }
                    }
                }
            }
        }
    }
}
