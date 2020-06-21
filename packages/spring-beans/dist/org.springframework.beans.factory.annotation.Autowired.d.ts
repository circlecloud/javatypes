declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace annotation {
                    /**
                     * Marks a constructor, field, setter method, or config method as to be autowired by
                     * Spring's dependency injection facilities. This is an alternative to the JSR-330
                     * {@link javax.inject.Inject} annotation, adding required-vs-optional semantics.
                     * <h3>Autowired Constructors</h3>
                     * <p>Only one constructor of any given bean class may declare this annotation with the
                     * {@link #required} attribute set to {@code true}, indicating <i>the</i> constructor
                     * to autowire when used as a Spring bean. Furthermore, if the {@code required}
                     * attribute is set to {@code true}, only a single constructor may be annotated
                     * with {@code @Autowired}. If multiple <i>non-required</i> constructors declare the
                     * annotation, they will be considered as candidates for autowiring. The constructor
                     * with the greatest number of dependencies that can be satisfied by matching beans
                     * in the Spring container will be chosen. If none of the candidates can be satisfied,
                     * then a primary/default constructor (if present) will be used. Similarly, if a
                     * class declares multiple constructors but none of them is annotated with
                     * {@code @Autowired}, then a primary/default constructor (if present) will be used.
                     * If a class only declares a single constructor to begin with, it will always be used,
                     * even if not annotated. An annotated constructor does not have to be public.
                     * <h3>Autowired Fields</h3>
                     * <p>Fields are injected right after construction of a bean, before any config methods
                     * are invoked. Such a config field does not have to be public.
                     * <h3>Autowired Methods</h3>
                     * <p>Config methods may have an arbitrary name and any number of arguments; each of
                     * those arguments will be autowired with a matching bean in the Spring container.
                     * Bean property setter methods are effectively just a special case of such a general
                     * config method. Such config methods do not have to be public.
                     * <h3>Autowired Parameters</h3>
                     * <p>Although {@code @Autowired} can technically be declared on individual method
                     * or constructor parameters since Spring Framework 5.0, most parts of the
                     * framework ignore such declarations. The only part of the core Spring Framework
                     * that actively supports autowired parameters is the JUnit Jupiter support in
                     * the {@code spring-test} module (see the
                     * <a href="https://docs.spring.io/spring/docs/current/spring-framework-reference/testing.html#testcontext-junit-jupiter-di">TestContext framework</a>
                     * reference documentation for details).
                     * <h3>Multiple Arguments and 'required' Semantics</h3>
                     * <p>In the case of a multi-arg constructor or method, the {@link #required} attribute
                     * is applicable to all arguments. Individual parameters may be declared as Java-8 style
                     * {@link java.util.Optional} or, as of Spring Framework 5.0, also as {@code @Nullable}
                     * or a not-null parameter type in Kotlin, overriding the base 'required' semantics.
                     * <h3>Autowiring Arrays, Collections, and Maps</h3>
                     * <p>In case of an array, {@link java.util.Collection}, or {@link java.util.Map}
                     * dependency type, the container autowires all beans matching the declared value
                     * type. For such purposes, the map keys must be declared as type {@code String}
                     * which will be resolved to the corresponding bean names. Such a container-provided
                     * collection will be ordered, taking into account
                     * {@link org.springframework.core.Ordered Ordered} and
                     * {@link org.springframework.core.annotation.Order @Order} values of the target
                     * components, otherwise following their registration order in the container.
                     * Alternatively, a single matching target bean may also be a generally typed
                     * {@code Collection} or {@code Map} itself, getting injected as such.
                     * <h3>Not supported in {@code BeanPostProcessor} or {@code BeanFactoryPostProcessor}</h3>
                     * <p>Note that actual injection is performed through a
                     * {@link org.springframework.beans.factory.config.BeanPostProcessor
                     * BeanPostProcessor} which in turn means that you <em>cannot</em>
                     * use {@code @Autowired} to inject references into
                     * {@link org.springframework.beans.factory.config.BeanPostProcessor
                     * BeanPostProcessor} or
                     * {@link org.springframework.beans.factory.config.BeanFactoryPostProcessor BeanFactoryPostProcessor}
                     * types. Please consult the javadoc for the {@link AutowiredAnnotationBeanPostProcessor}
                     * class (which, by default, checks for the presence of this annotation).
                     * @author Juergen Hoeller
                     * @author Mark Fisher
                     * @author Sam Brannen
                     * @since 2.5
                     * @see AutowiredAnnotationBeanPostProcessor
                     * @see Qualifier
                     * @see Value
                     */
                    // @ts-ignore
                    abstract class Autowired implements java.lang.annotation.Annotation {
                    }
                }
            }
        }
    }
}
