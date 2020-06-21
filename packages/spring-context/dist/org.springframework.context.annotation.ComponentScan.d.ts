declare namespace org {
    namespace springframework {
        namespace context {
            namespace annotation {
                /**
                 * Configures component scanning directives for use with @{@link Configuration} classes.
                 * Provides support parallel with Spring XML's {@code <context:component-scan>} element.
                 * <p>Either {@link #basePackageClasses} or {@link #basePackages} (or its alias
                 * {@link #value}) may be specified to define specific packages to scan. If specific
                 * packages are not defined, scanning will occur from the package of the
                 * class that declares this annotation.
                 * <p>Note that the {@code <context:component-scan>} element has an
                 * {@code annotation-config} attribute; however, this annotation does not. This is because
                 * in almost all cases when using {@code @ComponentScan}, default annotation config
                 * processing (e.g. processing {@code @Autowired} and friends) is assumed. Furthermore,
                 * when using {@link AnnotationConfigApplicationContext}, annotation config processors are
                 * always registered, meaning that any attempt to disable them at the
                 * {@code @ComponentScan} level would be ignored.
                 * <p>See {@link Configuration @Configuration}'s Javadoc for usage examples.
                 * @author Chris Beams
                 * @author Juergen Hoeller
                 * @author Sam Brannen
                 * @since 3.1
                 * @see Configuration
                 */
                // @ts-ignore
                abstract class ComponentScan implements java.lang.annotation.Annotation {
                }
            }
        }
    }
}
