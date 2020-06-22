declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace convert {
                        namespace DefaultMongoTypeMapper {
                            /**
                             * {@link TypeAliasAccessor} to store aliases in a {@link Document}.
                             * @author Oliver Gierke
                             */
                            // @ts-ignore
                            class DocumentTypeAliasAccessor extends java.lang.Object {
                                // @ts-ignore
                                constructor(typeKey: java.lang.String | string)
                                // @ts-ignore
                                public readAliasFrom(source: Bson): Alias
                                // @ts-ignore
                                public writeTypeTo(sink: Bson, alias: java.lang.Object | any): void
                            }
                        }
                    }
                }
            }
        }
    }
}
