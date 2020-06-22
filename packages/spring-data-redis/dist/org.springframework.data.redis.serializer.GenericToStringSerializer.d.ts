declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace serializer {
                    /**
                     * Generic String to byte[] (and back) serializer. Relies on the Spring {@link ConversionService} to transform objects
                     * into String and vice versa. The Strings are convert into bytes and vice-versa using the specified charset (by default
                     * UTF-8). <b>Note:</b> The conversion service initialization happens automatically if the class is defined as a Spring
                     * bean. <b>Note:</b> Does not handle nulls in any special way delegating everything to the container.
                     * @author Costin Leau
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     */
                    // @ts-ignore
                    class GenericToStringSerializer<T> extends java.lang.Object implements org.springframework.data.redis.serializer.RedisSerializer<T> {
                        // @ts-ignore
                        constructor(type: java.lang.Class<T>)
                        // @ts-ignore
                        constructor(type: java.lang.Class<T>, charset: java.nio.charset.Charset)
                        // @ts-ignore
                        public setConversionService(conversionService: ConversionService): void
                        // @ts-ignore
                        public setTypeConverter(typeConverter: TypeConverter): void
                        // @ts-ignore
                        public deserialize(bytes: number /*byte*/[]): T
                        // @ts-ignore
                        public serialize(object: T): number /*byte*/[]
                        // @ts-ignore
                        public setBeanFactory(beanFactory: BeanFactory): void
                    }
                }
            }
        }
    }
}
