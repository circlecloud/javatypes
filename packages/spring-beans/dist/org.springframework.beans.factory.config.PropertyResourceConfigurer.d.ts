declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace config {
                    /**
                     * Allows for configuration of individual bean property values from a property resource,
                     * i.e. a properties file. Useful for custom config files targeted at system
                     * administrators that override bean properties configured in the application context.
                     * <p>Two concrete implementations are provided in the distribution:
                     * <ul>
                     * <li>{@link PropertyOverrideConfigurer} for "beanName.property=value" style overriding
                     * (<i>pushing</i> values from a properties file into bean definitions)
                     * <li>{@link PropertyPlaceholderConfigurer} for replacing "${...}" placeholders
                     * (<i>pulling</i> values from a properties file into bean definitions)
                     * </ul>
                     * <p>Property values can be converted after reading them in, through overriding
                     * the {@link #convertPropertyValue} method. For example, encrypted values
                     * can be detected and decrypted accordingly before processing them.
                     * @author Juergen Hoeller
                     * @since 02.10.2003
                     * @see PropertyOverrideConfigurer
                     * @see PropertyPlaceholderConfigurer
                     */
                    // @ts-ignore
                    class PropertyResourceConfigurer extends PropertiesLoaderSupport implements org.springframework.beans.factory.config.BeanFactoryPostProcessor {
                        // @ts-ignore
                        constructor()
                        /**
                         * Set the order value of this object for sorting purposes.
                         * @see PriorityOrdered
                         */
                        // @ts-ignore
                        setOrder(order: number /*int*/): void
                        // @ts-ignore
                        getOrder(): int
                        /**
                         * {@linkplain #mergeProperties Merge}, {@linkplain #convertProperties convert} and
                         * {@linkplain #processProperties process} properties against the given bean factory.
                         * @throws BeanInitializationException if any properties cannot be loaded
                         */
                        // @ts-ignore
                        postProcessBeanFactory(beanFactory: org.springframework.beans.factory.config.ConfigurableListableBeanFactory): void
                        /**
                         * Convert the given merged properties, converting property values
                         * if necessary. The result will then be processed.
                         * <p>The default implementation will invoke {@link #convertPropertyValue}
                         * for each property value, replacing the original with the converted value.
                         * @param props the Properties to convert
                         * @see #processProperties
                         */
                        // @ts-ignore
                        convertProperties(props: java.util.Properties): void
                        /**
                         * Convert the given property from the properties source to the value
                         * which should be applied.
                         * <p>The default implementation calls {@link #convertPropertyValue(String)}.
                         * @param propertyName the name of the property that the value is defined for
                         * @param propertyValue the original value from the properties source
                         * @return the converted value, to be used for processing
                         * @see #convertPropertyValue(String)
                         */
                        // @ts-ignore
                        convertProperty(propertyName: string, propertyValue: string): java.lang.String
                        /**
                         * Convert the given property value from the properties source to the value
                         * which should be applied.
                         * <p>The default implementation simply returns the original value.
                         * Can be overridden in subclasses, for example to detect
                         * encrypted values and decrypt them accordingly.
                         * @param originalValue the original value from the properties source
                         *  (properties file or local "properties")
                         * @return the converted value, to be used for processing
                         * @see #setProperties
                         * @see #setLocations
                         * @see #setLocation
                         * @see #convertProperty(String, String)
                         */
                        // @ts-ignore
                        convertPropertyValue(originalValue: string): java.lang.String
                        /**
                         * Apply the given Properties to the given BeanFactory.
                         * @param beanFactory the BeanFactory used by the application context
                         * @param props the Properties to apply
                         * @throws org.springframework.beans.BeansException in case of errors
                         */
                        // @ts-ignore
                        abstract processProperties(beanFactory: org.springframework.beans.factory.config.ConfigurableListableBeanFactory, props: java.util.Properties): void
                    }
                }
            }
        }
    }
}
