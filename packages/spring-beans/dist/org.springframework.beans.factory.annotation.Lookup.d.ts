declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace annotation {
                    /**
                     * An annotation that indicates 'lookup' methods, to be overridden by the container
                     * to redirect them back to the {@link org.springframework.beans.factory.BeanFactory}
                     * for a {@code getBean} call. This is essentially an annotation-based version of the
                     * XML {@code lookup-method} attribute, resulting in the same runtime arrangement.
                     * <p>The resolution of the target bean can either be based on the return type
                     * ({@code getBean(Class)}) or on a suggested bean name ({@code getBean(String)}),
                     * in both cases passing the method's arguments to the {@code getBean} call
                     * for applying them as target factory method arguments or constructor arguments.
                     * <p>Such lookup methods can have default (stub) implementations that will simply
                     * get replaced by the container, or they can be declared as abstract - for the
                     * container to fill them in at runtime. In both cases, the container will generate
                     * runtime subclasses of the method's containing class via CGLIB, which is why such
                     * lookup methods can only work on beans that the container instantiates through
                     * regular constructors: i.e. lookup methods cannot get replaced on beans returned
                     * from factory methods where we cannot dynamically provide a subclass for them.
                     * <p><b>Concrete limitations in typical Spring configuration scenarios:</b>
                     * When used with component scanning or any other mechanism that filters out abstract
                     * beans, provide stub implementations of your lookup methods to be able to declare
                     * them as concrete classes. And please remember that lookup methods won't work on
                     * beans returned from {@code @Bean} methods in configuration classes; you'll have
                     * to resort to {@code @Inject Provider<TargetBean>} or the like instead.
                     * @author Juergen Hoeller
                     * @since 4.1
                     * @see org.springframework.beans.factory.BeanFactory#getBean(Class, Object...)
                     * @see org.springframework.beans.factory.BeanFactory#getBean(String, Object...)
                     */
                    // @ts-ignore
                    abstract class Lookup implements java.lang.annotation.Annotation {
                    }
                }
            }
        }
    }
}
