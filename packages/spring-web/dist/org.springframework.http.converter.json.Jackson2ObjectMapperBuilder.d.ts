declare namespace org {
    namespace springframework {
        namespace http {
            namespace converter {
                namespace json {
                    /**
                     * A builder used to create {@link ObjectMapper} instances with a fluent API.
                     * <p>It customizes Jackson's default properties with the following ones:
                     * <ul>
                     * <li>{@link MapperFeature#DEFAULT_VIEW_INCLUSION} is disabled</li>
                     * <li>{@link DeserializationFeature#FAIL_ON_UNKNOWN_PROPERTIES} is disabled</li>
                     * </ul>
                     * <p>It also automatically registers the following well-known modules if they are
                     * detected on the classpath:
                     * <ul>
                     * <li><a href="https://github.com/FasterXML/jackson-datatype-jdk8">jackson-datatype-jdk8</a>:
                     * support for other Java 8 types like {@link java.util.Optional}</li>
                     * <li><a href="https://github.com/FasterXML/jackson-datatype-jsr310">jackson-datatype-jsr310</a>:
                     * support for Java 8 Date & Time API types</li>
                     * <li><a href="https://github.com/FasterXML/jackson-datatype-joda">jackson-datatype-joda</a>:
                     * support for Joda-Time types</li>
                     * <li><a href="https://github.com/FasterXML/jackson-module-kotlin">jackson-module-kotlin</a>:
                     * support for Kotlin classes and data classes</li>
                     * </ul>
                     * <p>Compatible with Jackson 2.6 and higher, as of Spring 4.3.
                     * @author Sebastien Deleuze
                     * @author Juergen Hoeller
                     * @author Tadaya Tsuyukubo
                     * @author Eddú Meléndez
                     * @since 4.1.1
                     * @see #build()
                     * @see #configure(ObjectMapper)
                     * @see Jackson2ObjectMapperFactoryBean
                     */
                    // @ts-ignore
                    class Jackson2ObjectMapperBuilder extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * If set to {@code true}, an {@link XmlMapper} will be created using its
                         * default constructor. This is only applicable to {@link #build()} calls,
                         * not to {@link #configure} calls.
                         */
                        // @ts-ignore
                        public createXmlMapper(createXmlMapper: boolean): org.springframework.http.converter.json.Jackson2ObjectMapperBuilder
                        /**
                         * Define the {@link JsonFactory} to be used to create the {@link ObjectMapper}
                         * instance.
                         * @since 5.0
                         */
                        // @ts-ignore
                        public factory(factory: JsonFactory): org.springframework.http.converter.json.Jackson2ObjectMapperBuilder
                        /**
                         * Define the format for date/time with the given {@link DateFormat}.
                         * <p>Note: Setting this property makes the exposed {@link ObjectMapper}
                         * non-thread-safe, according to Jackson's thread safety rules.
                         * @see #simpleDateFormat(String)
                         */
                        // @ts-ignore
                        public dateFormat(dateFormat: java.text.DateFormat): org.springframework.http.converter.json.Jackson2ObjectMapperBuilder
                        /**
                         * Define the date/time format with a {@link SimpleDateFormat}.
                         * <p>Note: Setting this property makes the exposed {@link ObjectMapper}
                         * non-thread-safe, according to Jackson's thread safety rules.
                         * @see #dateFormat(DateFormat)
                         */
                        // @ts-ignore
                        public simpleDateFormat(format: java.lang.String | string): org.springframework.http.converter.json.Jackson2ObjectMapperBuilder
                        /**
                         * Override the default {@link Locale} to use for formatting.
                         * Default value used is {@link Locale#getDefault()}.
                         * @since 4.1.5
                         */
                        // @ts-ignore
                        public locale(locale: java.util.Locale): org.springframework.http.converter.json.Jackson2ObjectMapperBuilder
                        /**
                         * Override the default {@link Locale} to use for formatting.
                         * Default value used is {@link Locale#getDefault()}.
                         * @param localeString the locale ID as a String representation
                         * @since 4.1.5
                         */
                        // @ts-ignore
                        public locale(localeString: java.lang.String | string): org.springframework.http.converter.json.Jackson2ObjectMapperBuilder
                        /**
                         * Override the default {@link TimeZone} to use for formatting.
                         * Default value used is UTC (NOT local timezone).
                         * @since 4.1.5
                         */
                        // @ts-ignore
                        public timeZone(timeZone: java.util.TimeZone): org.springframework.http.converter.json.Jackson2ObjectMapperBuilder
                        /**
                         * Override the default {@link TimeZone} to use for formatting.
                         * Default value used is UTC (NOT local timezone).
                         * @param timeZoneString the zone ID as a String representation
                         * @since 4.1.5
                         */
                        // @ts-ignore
                        public timeZone(timeZoneString: java.lang.String | string): org.springframework.http.converter.json.Jackson2ObjectMapperBuilder
                        /**
                         * Set an {@link AnnotationIntrospector} for both serialization and deserialization.
                         */
                        // @ts-ignore
                        public annotationIntrospector(annotationIntrospector: AnnotationIntrospector): org.springframework.http.converter.json.Jackson2ObjectMapperBuilder
                        /**
                         * Alternative to {@link #annotationIntrospector(AnnotationIntrospector)}
                         * that allows combining with rather than replacing the currently set
                         * introspector, e.g. via
                         * {@link AnnotationIntrospectorPair#pair(AnnotationIntrospector, AnnotationIntrospector)}.
                         * @param pairingFunction a function to apply to the currently set
                         *  introspector (possibly {#code null}); the result of the function becomes
                         *  the new introspector.
                         * @since 5.2.4
                         */
                        // @ts-ignore
                        public annotationIntrospector(pairingFunction: java.util.function$.Function<AnnotationIntrospector, AnnotationIntrospector>): org.springframework.http.converter.json.Jackson2ObjectMapperBuilder
                        /**
                         * Specify a {@link com.fasterxml.jackson.databind.PropertyNamingStrategy} to
                         * configure the {@link ObjectMapper} with.
                         */
                        // @ts-ignore
                        public propertyNamingStrategy(propertyNamingStrategy: PropertyNamingStrategy): org.springframework.http.converter.json.Jackson2ObjectMapperBuilder
                        /**
                         * Specify a {@link TypeResolverBuilder} to use for Jackson's default typing.
                         * @since 4.2.2
                         */
                        // @ts-ignore
                        public defaultTyping(typeResolverBuilder: object): org.springframework.http.converter.json.Jackson2ObjectMapperBuilder
                        /**
                         * Set a custom inclusion strategy for serialization.
                         * @see com.fasterxml.jackson.annotation.JsonInclude.Include
                         */
                        // @ts-ignore
                        public serializationInclusion(serializationInclusion: JsonInclude.Include): org.springframework.http.converter.json.Jackson2ObjectMapperBuilder
                        /**
                         * Set the global filters to use in order to support {@link JsonFilter @JsonFilter} annotated POJO.
                         * @since 4.2
                         * @see MappingJacksonValue#setFilters(FilterProvider)
                         */
                        // @ts-ignore
                        public filters(filters: FilterProvider): org.springframework.http.converter.json.Jackson2ObjectMapperBuilder
                        /**
                         * Add mix-in annotations to use for augmenting specified class or interface.
                         * @param target class (or interface) whose annotations to effectively override
                         * @param mixinSource class (or interface) whose annotations are to be "added"
                         *  to target's annotations as value
                         * @since 4.1.2
                         * @see com.fasterxml.jackson.databind.ObjectMapper#addMixIn(Class, Class)
                         */
                        // @ts-ignore
                        public mixIn(target: java.lang.Class<any>, mixinSource: java.lang.Class<any>): org.springframework.http.converter.json.Jackson2ObjectMapperBuilder
                        /**
                         * Add mix-in annotations to use for augmenting specified class or interface.
                         * @param mixIns a Map of entries with target classes (or interface) whose annotations
                         *  to effectively override as key and mix-in classes (or interface) whose
                         *  annotations are to be "added" to target's annotations as value.
                         * @since 4.1.2
                         * @see com.fasterxml.jackson.databind.ObjectMapper#addMixIn(Class, Class)
                         */
                        // @ts-ignore
                        public mixIns(mixIns: java.util.Map<java.lang.Class<any>, java.lang.Class<any>>): org.springframework.http.converter.json.Jackson2ObjectMapperBuilder
                        /**
                         * Configure custom serializers. Each serializer is registered for the type
                         * returned by {@link JsonSerializer#handledType()}, which must not be {@code null}.
                         * @see #serializersByType(Map)
                         */
                        // @ts-ignore
                        public serializers(...serializers: object[]): org.springframework.http.converter.json.Jackson2ObjectMapperBuilder
                        /**
                         * Configure a custom serializer for the given type.
                         * @since 4.1.2
                         * @see #serializers(JsonSerializer...)
                         */
                        // @ts-ignore
                        public serializerByType(type: java.lang.Class<any>, serializer: object): org.springframework.http.converter.json.Jackson2ObjectMapperBuilder
                        /**
                         * Configure custom serializers for the given types.
                         * @see #serializers(JsonSerializer...)
                         */
                        // @ts-ignore
                        public serializersByType(serializers: java.util.Map<java.lang.Class<any>, object>): org.springframework.http.converter.json.Jackson2ObjectMapperBuilder
                        /**
                         * Configure custom deserializers. Each deserializer is registered for the type
                         * returned by {@link JsonDeserializer#handledType()}, which must not be {@code null}.
                         * @since 4.3
                         * @see #deserializersByType(Map)
                         */
                        // @ts-ignore
                        public deserializers(...deserializers: object[]): org.springframework.http.converter.json.Jackson2ObjectMapperBuilder
                        /**
                         * Configure a custom deserializer for the given type.
                         * @since 4.1.2
                         */
                        // @ts-ignore
                        public deserializerByType(type: java.lang.Class<any>, deserializer: object): org.springframework.http.converter.json.Jackson2ObjectMapperBuilder
                        /**
                         * Configure custom deserializers for the given types.
                         */
                        // @ts-ignore
                        public deserializersByType(deserializers: java.util.Map<java.lang.Class<any>, object>): org.springframework.http.converter.json.Jackson2ObjectMapperBuilder
                        /**
                         * Shortcut for {@link MapperFeature#AUTO_DETECT_FIELDS} option.
                         */
                        // @ts-ignore
                        public autoDetectFields(autoDetectFields: boolean): org.springframework.http.converter.json.Jackson2ObjectMapperBuilder
                        /**
                         * Shortcut for {@link MapperFeature#AUTO_DETECT_SETTERS}/
                         * {@link MapperFeature#AUTO_DETECT_GETTERS}/{@link MapperFeature#AUTO_DETECT_IS_GETTERS}
                         * options.
                         */
                        // @ts-ignore
                        public autoDetectGettersSetters(autoDetectGettersSetters: boolean): org.springframework.http.converter.json.Jackson2ObjectMapperBuilder
                        /**
                         * Shortcut for {@link MapperFeature#DEFAULT_VIEW_INCLUSION} option.
                         */
                        // @ts-ignore
                        public defaultViewInclusion(defaultViewInclusion: boolean): org.springframework.http.converter.json.Jackson2ObjectMapperBuilder
                        /**
                         * Shortcut for {@link DeserializationFeature#FAIL_ON_UNKNOWN_PROPERTIES} option.
                         */
                        // @ts-ignore
                        public failOnUnknownProperties(failOnUnknownProperties: boolean): org.springframework.http.converter.json.Jackson2ObjectMapperBuilder
                        /**
                         * Shortcut for {@link SerializationFeature#FAIL_ON_EMPTY_BEANS} option.
                         */
                        // @ts-ignore
                        public failOnEmptyBeans(failOnEmptyBeans: boolean): org.springframework.http.converter.json.Jackson2ObjectMapperBuilder
                        /**
                         * Shortcut for {@link SerializationFeature#INDENT_OUTPUT} option.
                         */
                        // @ts-ignore
                        public indentOutput(indentOutput: boolean): org.springframework.http.converter.json.Jackson2ObjectMapperBuilder
                        /**
                         * Define if a wrapper will be used for indexed (List, array) properties or not by
                         * default (only applies to {@link XmlMapper}).
                         * @since 4.3
                         */
                        // @ts-ignore
                        public defaultUseWrapper(defaultUseWrapper: boolean): org.springframework.http.converter.json.Jackson2ObjectMapperBuilder
                        /**
                         * Specify visibility to limit what kind of properties are auto-detected.
                         * @since 5.1
                         * @see com.fasterxml.jackson.annotation.PropertyAccessor
                         * @see com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility
                         */
                        // @ts-ignore
                        public visibility(accessor: PropertyAccessor, visibility: JsonAutoDetect.Visibility): org.springframework.http.converter.json.Jackson2ObjectMapperBuilder
                        /**
                         * Specify features to enable.
                         * @see com.fasterxml.jackson.core.JsonParser.Feature
                         * @see com.fasterxml.jackson.core.JsonGenerator.Feature
                         * @see com.fasterxml.jackson.databind.SerializationFeature
                         * @see com.fasterxml.jackson.databind.DeserializationFeature
                         * @see com.fasterxml.jackson.databind.MapperFeature
                         */
                        // @ts-ignore
                        public featuresToEnable(...featuresToEnable: java.lang.Object[] | any[]): org.springframework.http.converter.json.Jackson2ObjectMapperBuilder
                        /**
                         * Specify features to disable.
                         * @see com.fasterxml.jackson.core.JsonParser.Feature
                         * @see com.fasterxml.jackson.core.JsonGenerator.Feature
                         * @see com.fasterxml.jackson.databind.SerializationFeature
                         * @see com.fasterxml.jackson.databind.DeserializationFeature
                         * @see com.fasterxml.jackson.databind.MapperFeature
                         */
                        // @ts-ignore
                        public featuresToDisable(...featuresToDisable: java.lang.Object[] | any[]): org.springframework.http.converter.json.Jackson2ObjectMapperBuilder
                        /**
                         * Specify one or more modules to be registered with the {@link ObjectMapper}.
                         * Multiple invocations are not additive, the last one defines the modules to
                         * register.
                         * <p>Note: If this is set, no finding of modules is going to happen - not by
                         * Jackson, and not by Spring either (see {@link #findModulesViaServiceLoader}).
                         * As a consequence, specifying an empty list here will suppress any kind of
                         * module detection.
                         * <p>Specify either this or {@link #modulesToInstall}, not both.
                         * @since 4.1.5
                         * @see #modules(List)
                         * @see com.fasterxml.jackson.databind.Module
                         */
                        // @ts-ignore
                        public modules(...modules: Module[]): org.springframework.http.converter.json.Jackson2ObjectMapperBuilder
                        /**
                         * Set a complete list of modules to be registered with the {@link ObjectMapper}.
                         * Multiple invocations are not additive, the last one defines the modules to
                         * register.
                         * <p>Note: If this is set, no finding of modules is going to happen - not by
                         * Jackson, and not by Spring either (see {@link #findModulesViaServiceLoader}).
                         * As a consequence, specifying an empty list here will suppress any kind of
                         * module detection.
                         * <p>Specify either this or {@link #modulesToInstall}, not both.
                         * @see #modules(Module...)
                         * @see com.fasterxml.jackson.databind.Module
                         */
                        // @ts-ignore
                        public modules(modules: java.util.List<Module> | Array<Module>): org.springframework.http.converter.json.Jackson2ObjectMapperBuilder
                        /**
                         * Specify one or more modules to be registered with the {@link ObjectMapper}.
                         * Multiple invocations are not additive, the last one defines the modules
                         * to register.
                         * <p>Modules specified here will be registered after
                         * Spring's autodetection of JSR-310 and Joda-Time, or Jackson's
                         * finding of modules (see {@link #findModulesViaServiceLoader}),
                         * allowing to eventually override their configuration.
                         * <p>Specify either this or {@link #modules}, not both.
                         * @since 4.1.5
                         * @see com.fasterxml.jackson.databind.Module
                         */
                        // @ts-ignore
                        public modulesToInstall(...modules: Module[]): org.springframework.http.converter.json.Jackson2ObjectMapperBuilder
                        /**
                         * Set whether to let Jackson find available modules via the JDK ServiceLoader,
                         * based on META-INF metadata in the classpath.
                         * <p>If this mode is not set, Spring's Jackson2ObjectMapperBuilder itself
                         * will try to find the JSR-310 and Joda-Time support modules on the classpath -
                         * provided that Java 8 and Joda-Time themselves are available, respectively.
                         * @see com.fasterxml.jackson.databind.ObjectMapper#findModules()
                         */
                        // @ts-ignore
                        public findModulesViaServiceLoader(findModules: boolean): org.springframework.http.converter.json.Jackson2ObjectMapperBuilder
                        /**
                         * Set the ClassLoader to use for loading Jackson extension modules.
                         */
                        // @ts-ignore
                        public moduleClassLoader(moduleClassLoader: java.lang.ClassLoader): org.springframework.http.converter.json.Jackson2ObjectMapperBuilder
                        /**
                         * Customize the construction of Jackson handlers ({@link JsonSerializer}, {@link JsonDeserializer},
                         * {@link KeyDeserializer}, {@code TypeResolverBuilder} and {@code TypeIdResolver}).
                         * @since 4.1.3
                         * @see Jackson2ObjectMapperBuilder#applicationContext(ApplicationContext)
                         */
                        // @ts-ignore
                        public handlerInstantiator(handlerInstantiator: HandlerInstantiator): org.springframework.http.converter.json.Jackson2ObjectMapperBuilder
                        /**
                         * Set the Spring {@link ApplicationContext} in order to autowire Jackson handlers ({@link JsonSerializer},
                         * {@link JsonDeserializer}, {@link KeyDeserializer}, {@code TypeResolverBuilder} and {@code TypeIdResolver}).
                         * @since 4.1.3
                         * @see SpringHandlerInstantiator
                         */
                        // @ts-ignore
                        public applicationContext(applicationContext: ApplicationContext): org.springframework.http.converter.json.Jackson2ObjectMapperBuilder
                        /**
                         * Build a new {@link ObjectMapper} instance.
                         * <p>Each build operation produces an independent {@link ObjectMapper} instance.
                         * The builder's settings can get modified, with a subsequent build operation
                         * then producing a new {@link ObjectMapper} based on the most recent settings.
                         * @return the newly built ObjectMapper
                         */
                        // @ts-ignore
                        public build<T extends ObjectMapper>(): T
                        /**
                         * Configure an existing {@link ObjectMapper} instance with this builder's
                         * settings. This can be applied to any number of {@code ObjectMappers}.
                         * @param objectMapper the ObjectMapper to configure
                         */
                        // @ts-ignore
                        public configure(objectMapper: ObjectMapper): void
                        /**
                         * Obtain a {@link Jackson2ObjectMapperBuilder} instance in order to
                         * build a regular JSON {@link ObjectMapper} instance.
                         */
                        // @ts-ignore
                        public static json(): org.springframework.http.converter.json.Jackson2ObjectMapperBuilder
                        /**
                         * Obtain a {@link Jackson2ObjectMapperBuilder} instance in order to
                         * build an {@link XmlMapper} instance.
                         */
                        // @ts-ignore
                        public static xml(): org.springframework.http.converter.json.Jackson2ObjectMapperBuilder
                        /**
                         * Obtain a {@link Jackson2ObjectMapperBuilder} instance in order to
                         * build a Smile data format {@link ObjectMapper} instance.
                         * @since 5.0
                         */
                        // @ts-ignore
                        public static smile(): org.springframework.http.converter.json.Jackson2ObjectMapperBuilder
                        /**
                         * Obtain a {@link Jackson2ObjectMapperBuilder} instance in order to
                         * build a CBOR data format {@link ObjectMapper} instance.
                         * @since 5.0
                         */
                        // @ts-ignore
                        public static cbor(): org.springframework.http.converter.json.Jackson2ObjectMapperBuilder
                    }
                }
            }
        }
    }
}
