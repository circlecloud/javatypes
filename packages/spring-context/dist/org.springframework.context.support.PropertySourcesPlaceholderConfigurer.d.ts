declare namespace org {
    namespace springframework {
        namespace context {
            namespace support {
                /**
                 * Specialization of {@link PlaceholderConfigurerSupport} that resolves ${...} placeholders
                 * within bean definition property values and {@code @Value} annotations against the current
                 * Spring {@link Environment} and its set of {@link PropertySources}.
                 * <p>This class is designed as a general replacement for {@code PropertyPlaceholderConfigurer}.
                 * It is used by default to support the {@code property-placeholder} element in working against
                 * the spring-context-3.1 or higher XSD; whereas, spring-context versions &lt;= 3.0 default to
                 * {@code PropertyPlaceholderConfigurer} to ensure backward compatibility. See the spring-context
                 * XSD documentation for complete details.
                 * <p>Any local properties (e.g. those added via {@link #setProperties}, {@link #setLocations}
                 * et al.) are added as a {@code PropertySource}. Search precedence of local properties is
                 * based on the value of the {@link #setLocalOverride localOverride} property, which is by
                 * default {@code false} meaning that local properties are to be searched last, after all
                 * environment property sources.
                 * <p>See {@link org.springframework.core.env.ConfigurableEnvironment} and related javadocs
                 * for details on manipulating environment property sources.
                 * @author Chris Beams
                 * @author Juergen Hoeller
                 * @since 3.1
                 * @see org.springframework.core.env.ConfigurableEnvironment
                 * @see org.springframework.beans.factory.config.PlaceholderConfigurerSupport
                 * @see org.springframework.beans.factory.config.PropertyPlaceholderConfigurer
                 */
                // @ts-ignore
                class PropertySourcesPlaceholderConfigurer extends PlaceholderConfigurerSupport implements org.springframework.context.EnvironmentAware {
                    // @ts-ignore
                    constructor()
                    /**
                     * {@value} is the name given to the {@link PropertySource} for the set of
                     * {@linkplain #mergeProperties() merged properties} supplied to this configurer.
                     */
                    // @ts-ignore
                    public static readonly LOCAL_PROPERTIES_PROPERTY_SOURCE_NAME: java.lang.String | string
                    /**
                     * {@value} is the name given to the {@link PropertySource} that wraps the
                     * {@linkplain #setEnvironment environment} supplied to this configurer.
                     */
                    // @ts-ignore
                    public static readonly ENVIRONMENT_PROPERTIES_PROPERTY_SOURCE_NAME: java.lang.String | string
                    /**
                     * Customize the set of {@link PropertySources} to be used by this configurer.
                     * <p>Setting this property indicates that environment property sources and
                     * local properties should be ignored.
                     * @see #postProcessBeanFactory
                     */
                    // @ts-ignore
                    public setPropertySources(propertySources: PropertySources): void
                    /**
                     * {@code PropertySources} from the given {@link Environment}
                     * will be searched when replacing ${...} placeholders.
                     * @see #setPropertySources
                     * @see #postProcessBeanFactory
                     */
                    // @ts-ignore
                    public setEnvironment(environment: Environment): void
                    /**
                     * Processing occurs by replacing ${...} placeholders in bean definitions by resolving each
                     * against this configurer's set of {@link PropertySources}, which includes:
                     * <ul>
                     * <li>all {@linkplain org.springframework.core.env.ConfigurableEnvironment#getPropertySources
                     * environment property sources}, if an {@code Environment} {@linkplain #setEnvironment is present}
                     * <li>{@linkplain #mergeProperties merged local properties}, if {@linkplain #setLocation any}
                     * {@linkplain #setLocations have} {@linkplain #setProperties been}
                     * {@linkplain #setPropertiesArray specified}
                     * <li>any property sources set by calling {@link #setPropertySources}
                     * </ul>
                     * <p>If {@link #setPropertySources} is called, <strong>environment and local properties will be
                     * ignored</strong>. This method is designed to give the user fine-grained control over property
                     * sources, and once set, the configurer makes no assumptions about adding additional sources.
                     */
                    // @ts-ignore
                    public postProcessBeanFactory(beanFactory: ConfigurableListableBeanFactory): void
                    /**
                     * Visit each bean definition in the given bean factory and attempt to replace ${...} property
                     * placeholders with values from the given properties.
                     */
                    // @ts-ignore
                    processProperties(beanFactoryToProcess: ConfigurableListableBeanFactory, propertyResolver: ConfigurablePropertyResolver): void
                    /**
                     * Implemented for compatibility with
                     * {@link org.springframework.beans.factory.config.PlaceholderConfigurerSupport}.
                     * @deprecated in favor of
                     *  {#link #processProperties(ConfigurableListableBeanFactory, ConfigurablePropertyResolver)}
                     * @throws UnsupportedOperationException in this implementation
                     */
                    // @ts-ignore
                    processProperties(beanFactory: ConfigurableListableBeanFactory, props: java.util.Properties): void
                    /**
                     * Return the property sources that were actually applied during
                     * {@link #postProcessBeanFactory(ConfigurableListableBeanFactory) post-processing}.
                     * @return the property sources that were applied
                     * @throws IllegalStateException if the property sources have not yet been applied
                     * @since 4.0
                     */
                    // @ts-ignore
                    public getAppliedPropertySources(): PropertySources
                }
            }
        }
    }
}
