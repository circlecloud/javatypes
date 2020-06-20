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
                        deserializerInstance(config: DeserializationConfig, annotated: Annotated, implClass: java.lang.Class<any>): <any>
                        // @ts-ignore
                        keyDeserializerInstance(config: DeserializationConfig, annotated: Annotated, implClass: java.lang.Class<any>): KeyDeserializer
                        // @ts-ignore
                        serializerInstance(config: SerializationConfig, annotated: Annotated, implClass: java.lang.Class<any>): <any>
                        // @ts-ignore
                        typeResolverBuilderInstance(config: object, annotated: Annotated, implClass: java.lang.Class<any>): <any>
                        // @ts-ignore
                        typeIdResolverInstance(config: object, annotated: Annotated, implClass: java.lang.Class<any>): TypeIdResolver
                        /**
                         * @since 4.3
                         */
                        // @ts-ignore
                        valueInstantiatorInstance(config: object, annotated: Annotated, implClass: java.lang.Class<any>): ValueInstantiator
                        /**
                         * @since 4.3
                         */
                        // @ts-ignore
                        objectIdGeneratorInstance(config: object, annotated: Annotated, implClass: java.lang.Class<any>): <any>
                        /**
                         * @since 4.3
                         */
                        // @ts-ignore
                        resolverIdGeneratorInstance(config: object, annotated: Annotated, implClass: java.lang.Class<any>): ObjectIdResolver
                        /**
                         * @since 4.3
                         */
                        // @ts-ignore
                        namingStrategyInstance(config: object, annotated: Annotated, implClass: java.lang.Class<any>): PropertyNamingStrategy
                        /**
                         * @since 4.3
                         */
                        // @ts-ignore
                        converterInstance(config: object, annotated: Annotated, implClass: java.lang.Class<any>): <any>
                        /**
                         * @since 4.3
                         */
                        // @ts-ignore
                        virtualPropertyWriterInstance(config: object, implClass: java.lang.Class<any>): VirtualBeanPropertyWriter
                    }
                }
            }
        }
    }
}
