declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace mapping {
                        namespace event {
                            /**
                             * javax.validation dependant entities validator. When it is registered as Spring component its automatically invoked
                             * before entities are saved in database.
                             * @author Maciej Walkowiak
                             * @author Oliver Gierke
                             * @author Christoph Strobl
                             */
                            // @ts-ignore
                            class ValidatingMongoEventListener extends org.springframework.data.mongodb.core.mapping.event.AbstractMongoEventListener<java.lang.Object | any> {
                                /**
                                 * Creates a new {@link ValidatingMongoEventListener} using the given {@link Validator}.
                                 * @param validator must not be {#literal null}.
                                 */
                                // @ts-ignore
                                constructor(validator: Validator)
                                // @ts-ignore
                                public onBeforeSave(event: org.springframework.data.mongodb.core.mapping.event.BeforeSaveEvent<java.lang.Object | any>): void
                            }
                        }
                    }
                }
            }
        }
    }
}
