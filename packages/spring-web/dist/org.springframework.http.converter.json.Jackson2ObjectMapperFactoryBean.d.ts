declare namespace org {
    namespace springframework {
        namespace http {
            namespace converter {
                namespace json {
                    /**
                     * A {@link FactoryBean} for creating a Jackson 2.x {@link ObjectMapper} (default) or
                     * {@link XmlMapper} ({@code createXmlMapper} property set to true) with setters
                     * to enable or disable Jackson features from within XML configuration.
                     * <p>It customizes Jackson defaults properties with the following ones:
                     * <ul>
                     * <li>{@link MapperFeature#DEFAULT_VIEW_INCLUSION} is disabled</li>
                     * <li>{@link DeserializationFeature#FAIL_ON_UNKNOWN_PROPERTIES} is disabled</li>
                     * </ul>
                     * <p>Example usage with
                     * {@link MappingJackson2HttpMessageConverter}:
                     * <pre class="code">
                     * &lt;bean class="org.springframework.http.converter.json.MappingJackson2HttpMessageConverter">
                     * &lt;property name="objectMapper">
                     * &lt;bean class="org.springframework.http.converter.json.Jackson2ObjectMapperFactoryBean"
                     * p:autoDetectFields="false"
                     * p:autoDetectGettersSetters="false"
                     * p:annotationIntrospector-ref="jaxbAnnotationIntrospector" />
                     * &lt;/property>
                     * &lt;/bean>
                     * </pre>
                     * <p>Example usage with MappingJackson2JsonView:
                     * <pre class="code">
                     * &lt;bean class="org.springframework.web.servlet.view.json.MappingJackson2JsonView">
                     * &lt;property name="objectMapper">
                     * &lt;bean class="org.springframework.http.converter.json.Jackson2ObjectMapperFactoryBean"
                     * p:failOnEmptyBeans="false"
                     * p:indentOutput="true">
                     * &lt;property name="serializers">
                     * &lt;array>
                     * &lt;bean class="org.mycompany.MyCustomSerializer" />
                     * &lt;/array>
                     * &lt;/property>
                     * &lt;/bean>
                     * &lt;/property>
                     * &lt;/bean>
                     * </pre>
                     * <p>In case there are no specific setters provided (for some rarely used options),
                     * you can still use the more general methods  {@link #setFeaturesToEnable} and
                     * {@link #setFeaturesToDisable}.
                     * <pre class="code">
                     * &lt;bean class="org.springframework.http.converter.json.Jackson2ObjectMapperFactoryBean">
                     * &lt;property name="featuresToEnable">
                     * &lt;array>
                     * &lt;util:constant static-field="com.fasterxml.jackson.databind.SerializationFeature.WRAP_ROOT_VALUE"/>
                     * &lt;util:constant static-field="com.fasterxml.jackson.databind.SerializationFeature.CLOSE_CLOSEABLE"/>
                     * &lt;/array>
                     * &lt;/property>
                     * &lt;property name="featuresToDisable">
                     * &lt;array>
                     * &lt;util:constant static-field="com.fasterxml.jackson.databind.MapperFeature.USE_ANNOTATIONS"/>
                     * &lt;/array>
                     * &lt;/property>
                     * &lt;/bean>
                     * </pre>
                     * <p>It also automatically registers the following well-known modules if they are
                     * detected on the classpath:
                     * <ul>
                     * <li><a href="https://github.com/FasterXML/jackson-datatype-jdk7">jackson-datatype-jdk7</a>:
                     * support for Java 7 types like {@link java.nio.file.Path}</li>
                     * <li><a href="https://github.com/FasterXML/jackson-datatype-jdk8">jackson-datatype-jdk8</a>:
                     * support for other Java 8 types like {@link java.util.Optional}</li>
                     * <li><a href="https://github.com/FasterXML/jackson-datatype-jsr310">jackson-datatype-jsr310</a>:
                     * support for Java 8 Date & Time API types</li>
                     * <li><a href="https://github.com/FasterXML/jackson-datatype-joda">jackson-datatype-joda</a>:
                     * support for Joda-Time types</li>
                     * <li><a href="https://github.com/FasterXML/jackson-module-kotlin">jackson-module-kotlin</a>:
                     * support for Kotlin classes and data classes</li>
                     * </ul>
                     * <p>In case you want to configure Jackson's {@link ObjectMapper} with a custom {@link Module},
                     * you can register one or more such Modules by class name via {@link #setModulesToInstall}:
                     * <pre class="code">
                     * &lt;bean class="org.springframework.http.converter.json.Jackson2ObjectMapperFactoryBean">
                     * &lt;property name="modulesToInstall" value="myapp.jackson.MySampleModule,myapp.jackson.MyOtherModule"/>
                     * &lt;/bean
                     * </pre>
                     * <p>Compatible with Jackson 2.6 and higher, as of Spring 4.3.
                     * @author <a href="mailto:dmitry.katsubo#gmail.com">Dmitry Katsubo</a>
                     * @author Rossen Stoyanchev
                     * @author Brian Clozel
                     * @author Juergen Hoeller
                     * @author Tadaya Tsuyukubo
                     * @author Sebastien Deleuze
                     * @since 3.2
                     */
                    // @ts-ignore
                    class Jackson2ObjectMapperFactoryBean extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Set the {@link ObjectMapper} instance to use. If not set, the {@link ObjectMapper}
                         * will be created using its default constructor.
                         */
                        // @ts-ignore
                        setObjectMapper(objectMapper: ObjectMapper): void
                        /**
                         * If set to true and no custom {@link ObjectMapper} has been set, a {@link XmlMapper}
                         * will be created using its default constructor.
                         * @since 4.1
                         */
                        // @ts-ignore
                        setCreateXmlMapper(createXmlMapper: boolean): void
                        /**
                         * Define the {@link JsonFactory} to be used to create the {@link ObjectMapper}
                         * instance.
                         * @since 5.0
                         */
                        // @ts-ignore
                        setFactory(factory: JsonFactory): void
                        /**
                         * Define the format for date/time with the given {@link DateFormat}.
                         * <p>Note: Setting this property makes the exposed {@link ObjectMapper}
                         * non-thread-safe, according to Jackson's thread safety rules.
                         * @see #setSimpleDateFormat(String)
                         */
                        // @ts-ignore
                        setDateFormat(dateFormat: java.text.DateFormat): void
                        /**
                         * Define the date/time format with a {@link SimpleDateFormat}.
                         * <p>Note: Setting this property makes the exposed {@link ObjectMapper}
                         * non-thread-safe, according to Jackson's thread safety rules.
                         * @see #setDateFormat(DateFormat)
                         */
                        // @ts-ignore
                        setSimpleDateFormat(format: string): void
                        /**
                         * Override the default {@link Locale} to use for formatting.
                         * Default value used is {@link Locale#getDefault()}.
                         * @since 4.1.5
                         */
                        // @ts-ignore
                        setLocale(locale: java.util.Locale): void
                        /**
                         * Override the default {@link TimeZone} to use for formatting.
                         * Default value used is UTC (NOT local timezone).
                         * @since 4.1.5
                         */
                        // @ts-ignore
                        setTimeZone(timeZone: java.util.TimeZone): void
                        /**
                         * Set an {@link AnnotationIntrospector} for both serialization and deserialization.
                         */
                        // @ts-ignore
                        setAnnotationIntrospector(annotationIntrospector: AnnotationIntrospector): void
                        /**
                         * Specify a {@link com.fasterxml.jackson.databind.PropertyNamingStrategy} to
                         * configure the {@link ObjectMapper} with.
                         * @since 4.0.2
                         */
                        // @ts-ignore
                        setPropertyNamingStrategy(propertyNamingStrategy: PropertyNamingStrategy): void
                        /**
                         * Specify a {@link TypeResolverBuilder} to use for Jackson's default typing.
                         * @since 4.2.2
                         */
                        // @ts-ignore
                        setDefaultTyping(typeResolverBuilder: object): void
                        /**
                         * Set a custom inclusion strategy for serialization.
                         * @see com.fasterxml.jackson.annotation.JsonInclude.Include
                         */
                        // @ts-ignore
                        setSerializationInclusion(serializationInclusion: JsonInclude.Include): void
                        /**
                         * Set the global filters to use in order to support {@link JsonFilter @JsonFilter} annotated POJO.
                         * @since 4.2
                         * @see Jackson2ObjectMapperBuilder#filters(FilterProvider)
                         */
                        // @ts-ignore
                        setFilters(filters: FilterProvider): void
                        /**
                         * Add mix-in annotations to use for augmenting specified class or interface.
                         * @param mixIns a Map of entries with target classes (or interface) whose annotations
                         *  to effectively override as key and mix-in classes (or interface) whose
                         *  annotations are to be "added" to target's annotations as value.
                         * @since 4.1.2
                         * @see com.fasterxml.jackson.databind.ObjectMapper#addMixInAnnotations(Class, Class)
                         */
                        // @ts-ignore
                        setMixIns(mixIns: java.util.Map<java.lang.Class<any>, java.lang.Class<?>>): void
                        /**
                         * Configure custom serializers. Each serializer is registered for the type
                         * returned by {@link JsonSerializer#handledType()}, which must not be {@code null}.
                         * @see #setSerializersByType(Map)
                         */
                        // @ts-ignore
                        setSerializers(...serializers: any[]): void
                        /**
                         * Configure custom serializers for the given types.
                         * @see #setSerializers(JsonSerializer...)
                         */
                        // @ts-ignore
                        setSerializersByType(serializers: java.util.Map<java.lang.Class<any>, <any>>): void
                        /**
                         * Configure custom deserializers. Each deserializer is registered for the type
                         * returned by {@link JsonDeserializer#handledType()}, which must not be {@code null}.
                         * @since 4.3
                         * @see #setDeserializersByType(Map)
                         */
                        // @ts-ignore
                        setDeserializers(...deserializers: any[]): void
                        /**
                         * Configure custom deserializers for the given types.
                         */
                        // @ts-ignore
                        setDeserializersByType(deserializers: java.util.Map<java.lang.Class<any>, <any>>): void
                        /**
                         * Shortcut for {@link MapperFeature#AUTO_DETECT_FIELDS} option.
                         */
                        // @ts-ignore
                        setAutoDetectFields(autoDetectFields: boolean): void
                        /**
                         * Shortcut for {@link MapperFeature#AUTO_DETECT_SETTERS}/
                         * {@link MapperFeature#AUTO_DETECT_GETTERS}/{@link MapperFeature#AUTO_DETECT_IS_GETTERS}
                         * options.
                         */
                        // @ts-ignore
                        setAutoDetectGettersSetters(autoDetectGettersSetters: boolean): void
                        /**
                         * Shortcut for {@link MapperFeature#DEFAULT_VIEW_INCLUSION} option.
                         * @since 4.1
                         */
                        // @ts-ignore
                        setDefaultViewInclusion(defaultViewInclusion: boolean): void
                        /**
                         * Shortcut for {@link DeserializationFeature#FAIL_ON_UNKNOWN_PROPERTIES} option.
                         * @since 4.1.1
                         */
                        // @ts-ignore
                        setFailOnUnknownProperties(failOnUnknownProperties: boolean): void
                        /**
                         * Shortcut for {@link SerializationFeature#FAIL_ON_EMPTY_BEANS} option.
                         */
                        // @ts-ignore
                        setFailOnEmptyBeans(failOnEmptyBeans: boolean): void
                        /**
                         * Shortcut for {@link SerializationFeature#INDENT_OUTPUT} option.
                         */
                        // @ts-ignore
                        setIndentOutput(indentOutput: boolean): void
                        /**
                         * Define if a wrapper will be used for indexed (List, array) properties or not by
                         * default (only applies to {@link XmlMapper}).
                         * @since 4.3
                         */
                        // @ts-ignore
                        setDefaultUseWrapper(defaultUseWrapper: boolean): void
                        /**
                         * Specify features to enable.
                         * @see com.fasterxml.jackson.core.JsonParser.Feature
                         * @see com.fasterxml.jackson.core.JsonGenerator.Feature
                         * @see com.fasterxml.jackson.databind.SerializationFeature
                         * @see com.fasterxml.jackson.databind.DeserializationFeature
                         * @see com.fasterxml.jackson.databind.MapperFeature
                         */
                        // @ts-ignore
                        setFeaturesToEnable(...featuresToEnable: any[]): void
                        /**
                         * Specify features to disable.
                         * @see com.fasterxml.jackson.core.JsonParser.Feature
                         * @see com.fasterxml.jackson.core.JsonGenerator.Feature
                         * @see com.fasterxml.jackson.databind.SerializationFeature
                         * @see com.fasterxml.jackson.databind.DeserializationFeature
                         * @see com.fasterxml.jackson.databind.MapperFeature
                         */
                        // @ts-ignore
                        setFeaturesToDisable(...featuresToDisable: any[]): void
                        /**
                         * Set a complete list of modules to be registered with the {@link ObjectMapper}.
                         * <p>Note: If this is set, no finding of modules is going to happen - not by
                         * Jackson, and not by Spring either (see {@link #setFindModulesViaServiceLoader}).
                         * As a consequence, specifying an empty list here will suppress any kind of
                         * module detection.
                         * <p>Specify either this or {@link #setModulesToInstall}, not both.
                         * @since 4.0
                         * @see com.fasterxml.jackson.databind.Module
                         */
                        // @ts-ignore
                        setModules(modules: Array<Module>): void
                        /**
                         * Specify one or more modules by class (or class name in XML)
                         * to be registered with the {@link ObjectMapper}.
                         * <p>Modules specified here will be registered after
                         * Spring's autodetection of JSR-310 and Joda-Time, or Jackson's
                         * finding of modules (see {@link #setFindModulesViaServiceLoader}),
                         * allowing to eventually override their configuration.
                         * <p>Specify either this or {@link #setModules}, not both.
                         * @since 4.0.1
                         * @see com.fasterxml.jackson.databind.Module
                         */
                        // @ts-ignore
                        setModulesToInstall(...modules: java.lang.Class[]): void
                        /**
                         * Set whether to let Jackson find available modules via the JDK ServiceLoader,
                         * based on META-INF metadata in the classpath. Requires Jackson 2.2 or higher.
                         * <p>If this mode is not set, Spring's Jackson2ObjectMapperFactoryBean itself
                         * will try to find the JSR-310 and Joda-Time support modules on the classpath -
                         * provided that Java 8 and Joda-Time themselves are available, respectively.
                         * @since 4.0.1
                         * @see com.fasterxml.jackson.databind.ObjectMapper#findModules()
                         */
                        // @ts-ignore
                        setFindModulesViaServiceLoader(findModules: boolean): void
                        // @ts-ignore
                        setBeanClassLoader(beanClassLoader: java.lang.ClassLoader): void
                        /**
                         * Customize the construction of Jackson handlers
                         * ({@link JsonSerializer}, {@link JsonDeserializer}, {@link KeyDeserializer},
                         * {@code TypeResolverBuilder} and {@code TypeIdResolver}).
                         * @since 4.1.3
                         * @see Jackson2ObjectMapperFactoryBean#setApplicationContext(ApplicationContext)
                         */
                        // @ts-ignore
                        setHandlerInstantiator(handlerInstantiator: HandlerInstantiator): void
                        /**
                         * Set the builder {@link ApplicationContext} in order to autowire Jackson handlers
                         * ({@link JsonSerializer}, {@link JsonDeserializer}, {@link KeyDeserializer},
                         * {@code TypeResolverBuilder} and {@code TypeIdResolver}).
                         * @since 4.1.3
                         * @see Jackson2ObjectMapperBuilder#applicationContext(ApplicationContext)
                         * @see SpringHandlerInstantiator
                         */
                        // @ts-ignore
                        setApplicationContext(applicationContext: ApplicationContext): void
                        // @ts-ignore
                        afterPropertiesSet(): void
                        /**
                         * Return the singleton ObjectMapper.
                         */
                        // @ts-ignore
                        getObject(): ObjectMapper
                        // @ts-ignore
                        getObjectType(): java.lang.Class<?>
                        // @ts-ignore
                        isSingleton(): boolean
                    }
                }
            }
        }
    }
}
