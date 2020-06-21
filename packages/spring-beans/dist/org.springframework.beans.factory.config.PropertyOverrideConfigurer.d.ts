declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace config {
                    /**
                     * Property resource configurer that overrides bean property values in an application
                     * context definition. It <i>pushes</i> values from a properties file into bean definitions.
                     * <p>Configuration lines are expected to be of the following form:
                     * <pre class="code">beanName.property=value</pre>
                     * Example properties file:
                     * <pre class="code">dataSource.driverClassName=com.mysql.jdbc.Driver
                     * dataSource.url=jdbc:mysql:mydb</pre>
                     * In contrast to PropertyPlaceholderConfigurer, the original definition can have default
                     * values or no values at all for such bean properties. If an overriding properties file does
                     * not have an entry for a certain bean property, the default context definition is used.
                     * <p>Note that the context definition <i>is not</i> aware of being overridden;
                     * so this is not immediately obvious when looking at the XML definition file.
                     * Furthermore, note that specified override values are always <i>literal</i> values;
                     * they are not translated into bean references. This also applies when the original
                     * value in the XML bean definition specifies a bean reference.
                     * <p>In case of multiple PropertyOverrideConfigurers that define different values for
                     * the same bean property, the <i>last</i> one will win (due to the overriding mechanism).
                     * <p>Property values can be converted after reading them in, through overriding
                     * the {@code convertPropertyValue} method. For example, encrypted values
                     * can be detected and decrypted accordingly before processing them.
                     * @author Juergen Hoeller
                     * @author Rod Johnson
                     * @since 12.03.2003
                     * @see #convertPropertyValue
                     * @see PropertyPlaceholderConfigurer
                     */
                    // @ts-ignore
                    class PropertyOverrideConfigurer extends org.springframework.beans.factory.config.PropertyResourceConfigurer {
                        // @ts-ignore
                        constructor()
                        /**
                         * The default bean name separator.
                         */
                        // @ts-ignore
                        public static readonly DEFAULT_BEAN_NAME_SEPARATOR: java.lang.String | string
                        /**
                         * Set the separator to expect between bean name and property path.
                         * Default is a dot (".").
                         */
                        // @ts-ignore
                        public setBeanNameSeparator(beanNameSeparator: java.lang.String | string): void
                        /**
                         * Set whether to ignore invalid keys. Default is "false".
                         * <p>If you ignore invalid keys, keys that do not follow the 'beanName.property' format
                         * (or refer to invalid bean names or properties) will just be logged at debug level.
                         * This allows one to have arbitrary other keys in a properties file.
                         */
                        // @ts-ignore
                        public setIgnoreInvalidKeys(ignoreInvalidKeys: boolean): void
                        // @ts-ignore
                        processProperties(beanFactory: org.springframework.beans.factory.config.ConfigurableListableBeanFactory, props: java.util.Properties): void
                        /**
                         * Process the given key as 'beanName.property' entry.
                         */
                        // @ts-ignore
                        processKey(factory: org.springframework.beans.factory.config.ConfigurableListableBeanFactory, key: java.lang.String | string, value: java.lang.String | string): void
                        /**
                         * Apply the given property value to the corresponding bean.
                         */
                        // @ts-ignore
                        applyPropertyValue(factory: org.springframework.beans.factory.config.ConfigurableListableBeanFactory, beanName: java.lang.String | string, property: java.lang.String | string, value: java.lang.String | string): void
                        /**
                         * Were there overrides for this bean?
                         * Only valid after processing has occurred at least once.
                         * @param beanName name of the bean to query status for
                         * @return whether there were property overrides for the named bean
                         */
                        // @ts-ignore
                        public hasPropertyOverridesFor(beanName: java.lang.String | string): boolean
                    }
                }
            }
        }
    }
}
