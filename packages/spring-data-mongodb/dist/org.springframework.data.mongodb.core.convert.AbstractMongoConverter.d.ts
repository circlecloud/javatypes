declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace convert {
                        /**
                         * Base class for {@link MongoConverter} implementations. Sets up a {@link GenericConversionService} and populates basic
                         * converters. Allows registering {@link CustomConversions}.
                         * @author Jon Brisbin
                         * @author Oliver Gierke
                         * @author Mark Paluch
                         * @author Christoph Strobl
                         */
                        // @ts-ignore
                        abstract class AbstractMongoConverter extends java.lang.Object implements org.springframework.data.mongodb.core.convert.MongoConverter {
                            /**
                             * Creates a new {@link AbstractMongoConverter} using the given {@link GenericConversionService}.
                             * @param conversionService can be {#literal null} and defaults to {@link DefaultConversionService}.
                             */
                            // @ts-ignore
                            constructor(conversionService: GenericConversionService)
                            // @ts-ignore
                            readonly conversionService: GenericConversionService
                            // @ts-ignore
                            conversions: org.springframework.data.mongodb.core.convert.CustomConversions
                            // @ts-ignore
                            instantiators: EntityInstantiators
                            /**
                             * Registers the given custom conversions with the converter.
                             * @param conversions must not be {#literal null}.
                             */
                            // @ts-ignore
                            public setCustomConversions(conversions: org.springframework.data.mongodb.core.convert.CustomConversions): void
                            /**
                             * Registers {@link EntityInstantiators} to customize entity instantiation.
                             * @param instantiators
                             */
                            // @ts-ignore
                            public setInstantiators(instantiators: EntityInstantiators): void
                            // @ts-ignore
                            public getConversionService(): ConversionService
                            // @ts-ignore
                            public afterPropertiesSet(): void
                        }
                    }
                }
            }
        }
    }
}
