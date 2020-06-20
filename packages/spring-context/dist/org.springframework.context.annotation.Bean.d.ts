declare namespace org {
    namespace springframework {
        namespace context {
            namespace annotation {
                /**
                 * Indicates that a method produces a bean to be managed by the Spring container.
                 * <h3>Overview</h3>
                 * <p>The names and semantics of the attributes to this annotation are intentionally
                 * similar to those of the {@code <bean/>} element in the Spring XML schema. For
                 * example:
                 * <pre class="code">
                 * &#064;Bean
                 * public MyBean myBean() {
                 * // instantiate and configure MyBean obj
                 * return obj;
                 * }
                 * </pre>
                 * <h3>Bean Names</h3>
                 * <p>While a {@link #name} attribute is available, the default strategy for
                 * determining the name of a bean is to use the name of the {@code @Bean} method.
                 * This is convenient and intuitive, but if explicit naming is desired, the
                 * {@code name} attribute (or its alias {@code value}) may be used. Also note
                 * that {@code name} accepts an array of Strings, allowing for multiple names
                 * (i.e. a primary bean name plus one or more aliases) for a single bean.
                 * <pre class="code">
                 * &#064;Bean({"b1", "b2"}) // bean available as 'b1' and 'b2', but not 'myBean'
                 * public MyBean myBean() {
                 * // instantiate and configure MyBean obj
                 * return obj;
                 * }
                 * </pre>
                 * <h3>Profile, Scope, Lazy, DependsOn, Primary, Order</h3>
                 * <p>Note that the {@code @Bean} annotation does not provide attributes for profile,
                 * scope, lazy, depends-on or primary. Rather, it should be used in conjunction with
                 * {@link Scope @Scope}, {@link Lazy @Lazy}, {@link DependsOn @DependsOn} and
                 * {@link Primary @Primary} annotations to declare those semantics. For example:
                 * <pre class="code">
                 * &#064;Bean
                 * &#064;Profile("production")
                 * &#064;Scope("prototype")
                 * public MyBean myBean() {
                 * // instantiate and configure MyBean obj
                 * return obj;
                 * }
                 * </pre>
                 * The semantics of the above-mentioned annotations match their use at the component
                 * class level: {@code @Profile} allows for selective inclusion of certain beans.
                 * {@code @Scope} changes the bean's scope from singleton to the specified scope.
                 * {@code @Lazy} only has an actual effect in case of the default singleton scope.
                 * {@code @DependsOn} enforces the creation of specific other beans before this
                 * bean will be created, in addition to any dependencies that the bean expressed
                 * through direct references, which is typically helpful for singleton startup.
                 * {@code @Primary} is a mechanism to resolve ambiguity at the injection point level
                 * if a single target component needs to be injected but several beans match by type.
                 * <p>Additionally, {@code @Bean} methods may also declare qualifier annotations
                 * and {@link org.springframework.core.annotation.Order @Order} values, to be
                 * taken into account during injection point resolution just like corresponding
                 * annotations on the corresponding component classes but potentially being very
                 * individual per bean definition (in case of multiple definitions with the same
                 * bean class). Qualifiers narrow the set of candidates after the initial type match;
                 * order values determine the order of resolved elements in case of collection
                 * injection points (with several target beans matching by type and qualifier).
                 * <p><b>NOTE:</b> {@code @Order} values may influence priorities at injection points,
                 * but please be aware that they do not influence singleton startup order which is an
                 * orthogonal concern determined by dependency relationships and {@code @DependsOn}
                 * declarations as mentioned above. Also, {@link javax.annotation.Priority} is not
                 * available at this level since it cannot be declared on methods; its semantics can
                 * be modeled through {@code @Order} values in combination with {@code @Primary} on
                 * a single bean per type.
                 * <h3>{@code @Bean} Methods in {@code @Configuration} Classes</h3>
                 * <p>Typically, {@code @Bean} methods are declared within {@code @Configuration}
                 * classes. In this case, bean methods may reference other {@code @Bean} methods in the
                 * same class by calling them <i>directly</i>. This ensures that references between beans
                 * are strongly typed and navigable. Such so-called <em>'inter-bean references'</em> are
                 * guaranteed to respect scoping and AOP semantics, just like {@code getBean()} lookups
                 * would. These are the semantics known from the original 'Spring JavaConfig' project
                 * which require CGLIB subclassing of each such configuration class at runtime. As a
                 * consequence, {@code @Configuration} classes and their factory methods must not be
                 * marked as final or private in this mode. For example:
                 * <pre class="code">
                 * &#064;Configuration
                 * public class AppConfig {
                 * &#064;Bean
                 * public FooService fooService() {
                 * return new FooService(fooRepository());
                 * }
                 * &#064;Bean
                 * public FooRepository fooRepository() {
                 * return new JdbcFooRepository(dataSource());
                 * }
                 * // ...
                 * }</pre>
                 * <h3>{@code @Bean} <em>Lite</em> Mode</h3>
                 * <p>{@code @Bean} methods may also be declared within classes that are <em>not</em>
                 * annotated with {@code @Configuration}. For example, bean methods may be declared
                 * in a {@code @Component} class or even in a <em>plain old class</em>. In such cases,
                 * a {@code @Bean} method will get processed in a so-called <em>'lite'</em> mode.
                 * <p>Bean methods in <em>lite</em> mode will be treated as plain <em>factory
                 * methods</em> by the container (similar to {@code factory-method} declarations
                 * in XML), with scoping and lifecycle callbacks properly applied. The containing
                 * class remains unmodified in this case, and there are no unusual constraints for
                 * the containing class or the factory methods.
                 * <p>In contrast to the semantics for bean methods in {@code @Configuration} classes,
                 * <em>'inter-bean references'</em> are not supported in <em>lite</em> mode. Instead,
                 * when one {@code @Bean}-method invokes another {@code @Bean}-method in <em>lite</em>
                 * mode, the invocation is a standard Java method invocation; Spring does not intercept
                 * the invocation via a CGLIB proxy. This is analogous to inter-{@code @Transactional}
                 * method calls where in proxy mode, Spring does not intercept the invocation &mdash;
                 * Spring does so only in AspectJ mode.
                 * <p>For example:
                 * <pre class="code">
                 * &#064;Component
                 * public class Calculator {
                 * public int sum(int a, int b) {
                 * return a+b;
                 * }
                 * &#064;Bean
                 * public MyBean myBean() {
                 * return new MyBean();
                 * }
                 * }</pre>
                 * <h3>Bootstrapping</h3>
                 * <p>See the @{@link Configuration} javadoc for further details including how to bootstrap
                 * the container using {@link AnnotationConfigApplicationContext} and friends.
                 * <h3>{@code BeanFactoryPostProcessor}-returning {@code @Bean} methods</h3>
                 * <p>Special consideration must be taken for {@code @Bean} methods that return Spring
                 * {@link org.springframework.beans.factory.config.BeanFactoryPostProcessor BeanFactoryPostProcessor}
                 * ({@code BFPP}) types. Because {@code BFPP} objects must be instantiated very early in the
                 * container lifecycle, they can interfere with processing of annotations such as {@code @Autowired},
                 * {@code @Value}, and {@code @PostConstruct} within {@code @Configuration} classes. To avoid these
                 * lifecycle issues, mark {@code BFPP}-returning {@code @Bean} methods as {@code static}. For example:
                 * <pre class="code">
                 * &#064;Bean
                 * public static PropertySourcesPlaceholderConfigurer pspc() {
                 * // instantiate, configure and return pspc ...
                 * }
                 * </pre>
                 * By marking this method as {@code static}, it can be invoked without causing instantiation of its
                 * declaring {@code @Configuration} class, thus avoiding the above-mentioned lifecycle conflicts.
                 * Note however that {@code static} {@code @Bean} methods will not be enhanced for scoping and AOP
                 * semantics as mentioned above. This works out in {@code BFPP} cases, as they are not typically
                 * referenced by other {@code @Bean} methods. As a reminder, a WARN-level log message will be
                 * issued for any non-static {@code @Bean} methods having a return type assignable to
                 * {@code BeanFactoryPostProcessor}.
                 * @author Rod Johnson
                 * @author Costin Leau
                 * @author Chris Beams
                 * @author Juergen Hoeller
                 * @author Sam Brannen
                 * @since 3.0
                 * @see Configuration
                 * @see Scope
                 * @see DependsOn
                 * @see Lazy
                 * @see Primary
                 * @see org.springframework.stereotype.Component
                 * @see org.springframework.beans.factory.annotation.Autowired
                 * @see org.springframework.beans.factory.annotation.Value
                 */
                // @ts-ignore
                class Bean implements java.lang.annotation.Annotation {
                }
            }
        }
    }
}
