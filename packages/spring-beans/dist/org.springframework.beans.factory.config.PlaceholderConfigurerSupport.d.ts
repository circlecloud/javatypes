declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace config {
                    /**
                     * Abstract base class for property resource configurers that resolve placeholders
                     * in bean definition property values. Implementations <em>pull</em> values from a
                     * properties file or other {@linkplain org.springframework.core.env.PropertySource
                     * property source} into bean definitions.
                     * <p>The default placeholder syntax follows the Ant / Log4J / JSP EL style:
                     * <pre class="code">${...}</pre>
                     * Example XML bean definition:
                     * <pre class="code">
                     * &lt;bean id="dataSource" class="org.springframework.jdbc.datasource.DriverManagerDataSource"/&gt;
                     * &lt;property name="driverClassName" value="${driver}"/&gt;
                     * &lt;property name="url" value="jdbc:${dbname}"/&gt;
                     * &lt;/bean&gt;
                     * </pre>
                     * Example properties file:
                     * <pre class="code">driver=com.mysql.jdbc.Driver
                     * dbname=mysql:mydb</pre>
                     * Annotated bean definitions may take advantage of property replacement using
                     * the {@link org.springframework.beans.factory.annotation.Value @Value} annotation:
                     * <pre class="code">@Value("${person.age}")</pre>
                     * Implementations check simple property values, lists, maps, props, and bean names
                     * in bean references. Furthermore, placeholder values can also cross-reference
                     * other placeholders, like:
                     * <pre class="code">rootPath=myrootdir
                     * subPath=${rootPath}/subdir</pre>
                     * In contrast to {@link PropertyOverrideConfigurer}, subclasses of this type allow
                     * filling in of explicit placeholders in bean definitions.
                     * <p>If a configurer cannot resolve a placeholder, a {@link BeanDefinitionStoreException}
                     * will be thrown. If you want to check against multiple properties files, specify multiple
                     * resources via the {@link #setLocations locations} property. You can also define multiple
                     * configurers, each with its <em>own</em> placeholder syntax. Use {@link
                     * #ignoreUnresolvablePlaceholders} to intentionally suppress throwing an exception if a
                     * placeholder cannot be resolved.
                     * <p>Default property values can be defined globally for each configurer instance
                     * via the {@link #setProperties properties} property, or on a property-by-property basis
                     * using the default value separator which is {@code ":"} by default and
                     * customizable via {@link #setValueSeparator(String)}.
                     * <p>Example XML property with default value:
                     * <pre class="code">
                     * <property name="url" value="jdbc:${dbname:defaultdb}"/>
                     * </pre>
                     * @author Chris Beams
                     * @author Juergen Hoeller
                     * @since 3.1
                     * @see PropertyPlaceholderConfigurer
                     * @see org.springframework.context.support.PropertySourcesPlaceholderConfigurer
                     */
                    // @ts-ignore
                    abstract class PlaceholderConfigurerSupport extends org.springframework.beans.factory.config.PropertyResourceConfigurer implements org.springframework.beans.factory.BeanNameAware, org.springframework.beans.factory.BeanFactoryAware {
                        // @ts-ignore
                        constructor()
                        /**
                         * Default placeholder prefix: {@value}.
                         */
                        // @ts-ignore
                        public static readonly DEFAULT_PLACEHOLDER_PREFIX: java.lang.String | string
                        /**
                         * Default placeholder suffix: {@value}.
                         */
                        // @ts-ignore
                        public static readonly DEFAULT_PLACEHOLDER_SUFFIX: java.lang.String | string
                        /**
                         * Default value separator: {@value}.
                         */
                        // @ts-ignore
                        public static readonly DEFAULT_VALUE_SEPARATOR: java.lang.String | string
                        /**
                         * Defaults to {@value #DEFAULT_PLACEHOLDER_PREFIX}.
                         */
                        // @ts-ignore
                        placeholderPrefix: java.lang.String | string
                        /**
                         * Defaults to {@value #DEFAULT_PLACEHOLDER_SUFFIX}.
                         */
                        // @ts-ignore
                        placeholderSuffix: java.lang.String | string
                        /**
                         * Defaults to {@value #DEFAULT_VALUE_SEPARATOR}.
                         */
                        // @ts-ignore
                        valueSeparator: java.lang.String | string
                        // @ts-ignore
                        trimValues: boolean
                        // @ts-ignore
                        nullValue: java.lang.String | string
                        // @ts-ignore
                        ignoreUnresolvablePlaceholders: boolean
                        /**
                         * Set the prefix that a placeholder string starts with.
                         * The default is {@value #DEFAULT_PLACEHOLDER_PREFIX}.
                         */
                        // @ts-ignore
                        public setPlaceholderPrefix(placeholderPrefix: java.lang.String | string): void
                        /**
                         * Set the suffix that a placeholder string ends with.
                         * The default is {@value #DEFAULT_PLACEHOLDER_SUFFIX}.
                         */
                        // @ts-ignore
                        public setPlaceholderSuffix(placeholderSuffix: java.lang.String | string): void
                        /**
                         * Specify the separating character between the placeholder variable
                         * and the associated default value, or {@code null} if no such
                         * special character should be processed as a value separator.
                         * The default is {@value #DEFAULT_VALUE_SEPARATOR}.
                         */
                        // @ts-ignore
                        public setValueSeparator(valueSeparator: java.lang.String | string): void
                        /**
                         * Specify whether to trim resolved values before applying them,
                         * removing superfluous whitespace from the beginning and end.
                         * <p>Default is {@code false}.
                         * @since 4.3
                         */
                        // @ts-ignore
                        public setTrimValues(trimValues: boolean): void
                        /**
                         * Set a value that should be treated as {@code null} when resolved
                         * as a placeholder value: e.g. "" (empty String) or "null".
                         * <p>Note that this will only apply to full property values,
                         * not to parts of concatenated values.
                         * <p>By default, no such null value is defined. This means that
                         * there is no way to express {@code null} as a property value
                         * unless you explicitly map a corresponding value here.
                         */
                        // @ts-ignore
                        public setNullValue(nullValue: java.lang.String | string): void
                        /**
                         * Set whether to ignore unresolvable placeholders.
                         * <p>Default is "false": An exception will be thrown if a placeholder fails
                         * to resolve. Switch this flag to "true" in order to preserve the placeholder
                         * String as-is in such a case, leaving it up to other placeholder configurers
                         * to resolve it.
                         */
                        // @ts-ignore
                        public setIgnoreUnresolvablePlaceholders(ignoreUnresolvablePlaceholders: boolean): void
                        /**
                         * Only necessary to check that we're not parsing our own bean definition,
                         * to avoid failing on unresolvable placeholders in properties file locations.
                         * The latter case can happen with placeholders for system properties in
                         * resource locations.
                         * @see #setLocations
                         * @see org.springframework.core.io.ResourceEditor
                         */
                        // @ts-ignore
                        public setBeanName(beanName: java.lang.String | string): void
                        /**
                         * Only necessary to check that we're not parsing our own bean definition,
                         * to avoid failing on unresolvable placeholders in properties file locations.
                         * The latter case can happen with placeholders for system properties in
                         * resource locations.
                         * @see #setLocations
                         * @see org.springframework.core.io.ResourceEditor
                         */
                        // @ts-ignore
                        public setBeanFactory(beanFactory: org.springframework.beans.factory.BeanFactory): void
                        // @ts-ignore
                        doProcessProperties(beanFactoryToProcess: org.springframework.beans.factory.config.ConfigurableListableBeanFactory, valueResolver: StringValueResolver): void
                    }
                }
            }
        }
    }
}
