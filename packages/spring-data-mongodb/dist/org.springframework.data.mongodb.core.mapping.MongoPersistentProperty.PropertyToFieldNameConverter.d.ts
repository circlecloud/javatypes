declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace mapping {
                        namespace MongoPersistentProperty {
                            /**
                             * Simple {@link Converter} implementation to transform a {@link MongoPersistentProperty} into its field name.
                             * @author Oliver Gierke
                             */
                            // @ts-ignore
                            class PropertyToFieldNameConverter extends java.lang.Enum<org.springframework.data.mongodb.core.mapping.MongoPersistentProperty.PropertyToFieldNameConverter> {
                                // @ts-ignore
                                public static readonly INSTANCE: org.springframework.data.mongodb.core.mapping.MongoPersistentProperty.PropertyToFieldNameConverter
                                // @ts-ignore
                                public static values(): org.springframework.data.mongodb.core.mapping.MongoPersistentProperty.PropertyToFieldNameConverter[]
                                // @ts-ignore
                                public static valueOf(name: java.lang.String | string): org.springframework.data.mongodb.core.mapping.MongoPersistentProperty.PropertyToFieldNameConverter
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
