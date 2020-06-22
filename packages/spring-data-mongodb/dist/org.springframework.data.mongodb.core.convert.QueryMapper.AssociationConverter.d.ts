declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace convert {
                        namespace QueryMapper {
                            /**
                             * Converter to skip all properties after an association property was rendered.
                             * @author Oliver Gierke
                             */
                            // @ts-ignore
                            class AssociationConverter extends java.lang.Object {
                                /**
                                 * Creates a new {@link AssociationConverter} for the given {@link Association}.
                                 * @param association must not be {#literal null}.
                                 */
                                // @ts-ignore
                                constructor(association: object)
                                // @ts-ignore
                                public convert(source: org.springframework.data.mongodb.core.mapping.MongoPersistentProperty): string
                            }
                        }
                    }
                }
            }
        }
    }
}
