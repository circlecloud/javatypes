declare namespace org {
    namespace springframework {
        namespace http {
            namespace converter {
                namespace json {
                    /**
                     * Allows for creating Jackson ({@link JsonSerializer}, {@link JsonDeserializer},
                     * {@link KeyDeserializer}, {@link TypeResolverBuilder}, {@link TypeIdResolver})
                     * beans with autowiring against a Spring {@link ApplicationContext}.
                     * <p>As of Spring 4.3, this overrides all factory methods in {@link HandlerInstantiator},
                     * including non-abstract ones and recently introduced ones from Jackson 2.4 and 2.5:
                     * for {@link ValueInstantiator}, {@link ObjectIdGenerator}, {@link ObjectIdResolver},
                     * {@link PropertyNamingStrategy}, {@link Converter}, {@link VirtualBeanPropertyWriter}.
                     * @author Sebastien Deleuze
                     * @author Juergen Hoeller
                     * @since 4.1.3
                     * @see Jackson2ObjectMapperBuilder#handlerInstantiator(HandlerInstantiator)
                     * @see ApplicationContext#getAutowireCapableBeanFactory()
                     * @see HandlerInstantiator
                     */
                    // @ts-ignore
                    class SpringHandlerInstantiator extends HandlerInstantiator {
                        /**
                         * Create a new SpringHandlerInstantiator for the given BeanFactory.
                         * @param beanFactory the target BeanFactory
                         */
                        // @ts-ignore
                        constructor(beanFactory: AutowireCapableBeanFactory)
                        // @ts-ignore
                        public deserializerInstance(config: DeserializationConfig, annotated: Annotated, implClass: java.lang.Class<any>): object
                        // @ts-ignore
                        public keyDeserializerInstance(config: DeserializationConfig, annotated: Annotated, implClass: java.lang.Class<any>): KeyDeserializer
                        // @ts-ignore
                        public serializerInstance(config: SerializationConfig, annotated: Annotated, implClass: java.lang.Class<any>): object
                        // @ts-ignore
                        public typeResolverBuilderInstance(config: object, annotated: Annotated, implClass: java.lang.Class<any>): object
                        // @ts-ignore
                        public typeIdResolverInstance(config: object, annotated: Annotated, implClass: java.lang.Class<any>): TypeIdResolver
                        /**
                         * @since 4.3
                         */
                        // @ts-ignore
                        public valueInstantiatorInstance(config: object, annotated: Annotated, implClass: java.lang.Class<any>): ValueInstantiator
                        /**
                         * @since 4.3
                         */
                        // @ts-ignore
                        public objectIdGeneratorInstance(config: object, annotated: Annotated, implClass: java.lang.Class<any>): object
                        /**
                         * @since 4.3
                         */
                        // @ts-ignore
                        public resolverIdGeneratorInstance(config: object, annotated: Annotated, implClass: java.lang.Class<any>): ObjectIdResolver
                        /**
                         * @since 4.3
                         */
                        // @ts-ignore
                        public namingStrategyInstance(config: object, annotated: Annotated, implClass: java.lang.Class<any>): PropertyNamingStrategy
                        /**
                         * @since 4.3
                         */
                        // @ts-ignore
                        public converterInstance(config: object, annotated: Annotated, implClass: java.lang.Class<any>): object
                        /**
                         * @since 4.3
                         */
                        // @ts-ignore
                        public virtualPropertyWriterInstance(config: object, implClass: java.lang.Class<any>): VirtualBeanPropertyWriter
                    }
                }
            }
        }
    }
}
