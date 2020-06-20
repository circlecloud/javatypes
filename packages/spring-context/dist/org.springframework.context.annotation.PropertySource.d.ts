declare namespace org {
    namespace springframework {
        namespace context {
            namespace annotation {
                /**
                 * Annotation providing a convenient and declarative mechanism for adding a
                 * {@link org.springframework.core.env.PropertySource PropertySource} to Spring's
                 * {@link org.springframework.core.env.Environment Environment}. To be used in
                 * conjunction with @{@link Configuration} classes.
                 * <h3>Example usage</h3>
                 * <p>Given a file {@code app.properties} containing the key/value pair
                 * {@code testbean.name=myTestBean}, the following {@code @Configuration} class
                 * uses {@code @PropertySource} to contribute {@code app.properties} to the
                 * {@code Environment}'s set of {@code PropertySources}.
                 * <pre class="code">
                 * &#064;Configuration
                 * &#064;PropertySource("classpath:/com/myco/app.properties")
                 * public class AppConfig {
                 * &#064;Autowired
                 * Environment env;
                 * &#064;Bean
                 * public TestBean testBean() {
                 * TestBean testBean = new TestBean();
                 * testBean.setName(env.getProperty("testbean.name"));
                 * return testBean;
                 * }
                 * }</pre>
                 * <p>Notice that the {@code Environment} object is
                 * {@link org.springframework.beans.factory.annotation.Autowired @Autowired} into the
                 * configuration class and then used when populating the {@code TestBean} object. Given
                 * the configuration above, a call to {@code testBean.getName()} will return "myTestBean".
                 * <h3>Resolving <code>${...}</code> placeholders in {@code <bean>} and {@code @Value} annotations</h3>
                 * <p>In order to resolve ${...} placeholders in {@code <bean>} definitions or {@code @Value}
                 * annotations using properties from a {@code PropertySource}, you must ensure that an
                 * appropriate <em>embedded value resolver</em> is registered in the {@code BeanFactory}
                 * used by the {@code ApplicationContext}. This happens automatically when using
                 * {@code <context:property-placeholder>} in XML. When using {@code @Configuration} classes
                 * this can be achieved by explicitly registering a {@code PropertySourcesPlaceholderConfigurer}
                 * via a {@code static} {@code @Bean} method. Note, however, that explicit registration
                 * of a {@code PropertySourcesPlaceholderConfigurer} via a {@code static} {@code @Bean}
                 * method is typically only required if you need to customize configuration such as the
                 * placeholder syntax, etc. See the "Working with externalized values" section of
                 * {@link Configuration @Configuration}'s javadocs and "a note on
                 * BeanFactoryPostProcessor-returning {@code @Bean} methods" of {@link Bean @Bean}'s
                 * javadocs for details and examples.
                 * <h3>Resolving ${...} placeholders within {@code @PropertySource} resource locations</h3>
                 * <p>Any ${...} placeholders present in a {@code @PropertySource} {@linkplain #value()
                 * resource location} will be resolved against the set of property sources already
                 * registered against the environment. For example:
                 * <pre class="code">
                 * &#064;Configuration
                 * &#064;PropertySource("classpath:/com/${my.placeholder:default/path}/app.properties")
                 * public class AppConfig {
                 * &#064;Autowired
                 * Environment env;
                 * &#064;Bean
                 * public TestBean testBean() {
                 * TestBean testBean = new TestBean();
                 * testBean.setName(env.getProperty("testbean.name"));
                 * return testBean;
                 * }
                 * }</pre>
                 * <p>Assuming that "my.placeholder" is present in one of the property sources already
                 * registered, e.g. system properties or environment variables, the placeholder will
                 * be resolved to the corresponding value. If not, then "default/path" will be used as a
                 * default. Expressing a default value (delimited by colon ":") is optional.  If no
                 * default is specified and a property cannot be resolved, an {@code
                 * IllegalArgumentException} will be thrown.
                 * <h3>A note on property overriding with @PropertySource</h3>
                 * <p>In cases where a given property key exists in more than one {@code .properties}
                 * file, the last {@code @PropertySource} annotation processed will 'win' and override.
                 * <p>For example, given two properties files {@code a.properties} and
                 * {@code b.properties}, consider the following two configuration classes
                 * that reference them with {@code @PropertySource} annotations:
                 * <pre class="code">
                 * &#064;Configuration
                 * &#064;PropertySource("classpath:/com/myco/a.properties")
                 * public class ConfigA { }
                 * &#064;Configuration
                 * &#064;PropertySource("classpath:/com/myco/b.properties")
                 * public class ConfigB { }
                 * </pre>
                 * <p>The override ordering depends on the order in which these classes are registered
                 * with the application context.
                 * <pre class="code">
                 * AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext();
                 * ctx.register(ConfigA.class);
                 * ctx.register(ConfigB.class);
                 * ctx.refresh();
                 * </pre>
                 * <p>In the scenario above, the properties in {@code b.properties} will override any
                 * duplicates that exist in {@code a.properties}, because {@code ConfigB} was registered
                 * last.
                 * <p>In certain situations, it may not be possible or practical to tightly control
                 * property source ordering when using {@code @PropertySource} annotations. For example,
                 * if the {@code @Configuration} classes above were registered via component-scanning,
                 * the ordering is difficult to predict. In such cases - and if overriding is important -
                 * it is recommended that the user fall back to using the programmatic PropertySource API.
                 * See {@link org.springframework.core.env.ConfigurableEnvironment ConfigurableEnvironment}
                 * and {@link org.springframework.core.env.MutablePropertySources MutablePropertySources}
                 * javadocs for details.
                 * <p><b>NOTE: This annotation is repeatable according to Java 8 conventions.</b>
                 * However, all such {@code @PropertySource} annotations need to be declared at the same
                 * level: either directly on the configuration class or as meta-annotations within the
                 * same custom annotation. Mixing of direct annotations and meta-annotations is not
                 * recommended since direct annotations will effectively override meta-annotations.
                 * @author Chris Beams
                 * @author Juergen Hoeller
                 * @author Phillip Webb
                 * @author Sam Brannen
                 * @since 3.1
                 * @see PropertySources
                 * @see Configuration
                 * @see org.springframework.core.env.PropertySource
                 * @see org.springframework.core.env.ConfigurableEnvironment#getPropertySources()
                 * @see org.springframework.core.env.MutablePropertySources
                 */
                // @ts-ignore
                class PropertySource implements java.lang.annotation.Annotation {
                }
            }
        }
    }
}
