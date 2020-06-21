declare namespace org {
    namespace springframework {
        namespace context {
            namespace annotation {
                /**
                 * Indicates that a bean should be given preference when multiple candidates
                 * are qualified to autowire a single-valued dependency. If exactly one
                 * 'primary' bean exists among the candidates, it will be the autowired value.
                 * <p>This annotation is semantically equivalent to the {@code <bean>} element's
                 * {@code primary} attribute in Spring XML.
                 * <p>May be used on any class directly or indirectly annotated with
                 * {@code @Component} or on methods annotated with @{@link Bean}.
                 * <h2>Example</h2>
                 * <pre class="code">
                 * &#064;Component
                 * public class FooService {
                 * private FooRepository fooRepository;
                 * &#064;Autowired
                 * public FooService(FooRepository fooRepository) {
                 * this.fooRepository = fooRepository;
                 * }
                 * }
                 * &#064;Component
                 * public class JdbcFooRepository extends FooRepository {
                 * public JdbcFooRepository(DataSource dataSource) {
                 * // ...
                 * }
                 * }
                 * &#064;Primary
                 * &#064;Component
                 * public class HibernateFooRepository extends FooRepository {
                 * public HibernateFooRepository(SessionFactory sessionFactory) {
                 * // ...
                 * }
                 * }
                 * </pre>
                 * <p>Because {@code HibernateFooRepository} is marked with {@code @Primary},
                 * it will be injected preferentially over the jdbc-based variant assuming both
                 * are present as beans within the same Spring application context, which is
                 * often the case when component-scanning is applied liberally.
                 * <p>Note that using {@code @Primary} at the class level has no effect unless
                 * component-scanning is being used. If a {@code @Primary}-annotated class is
                 * declared via XML, {@code @Primary} annotation metadata is ignored, and
                 * {@code <bean primary="true|false"/>} is respected instead.
                 * @author Chris Beams
                 * @author Juergen Hoeller
                 * @since 3.0
                 * @see Lazy
                 * @see Bean
                 * @see ComponentScan
                 * @see org.springframework.stereotype.Component
                 */
                // @ts-ignore
                abstract class Primary implements java.lang.annotation.Annotation {
                }
            }
        }
    }
}
