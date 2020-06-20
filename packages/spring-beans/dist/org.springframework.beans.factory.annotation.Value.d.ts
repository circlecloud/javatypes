declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace annotation {
                    /**
                     * Annotation at the field or method/constructor parameter level
                     * that indicates a default value expression for the affected argument.
                     * <p>Typically used for expression-driven dependency injection. Also supported
                     * for dynamic resolution of handler method parameters, e.g. in Spring MVC.
                     * <p>A common use case is to assign default field values using
                     * <code>#{systemProperties.myProp}</code> style expressions.
                     * <p>Note that actual processing of the {@code @Value} annotation is performed
                     * by a {@link org.springframework.beans.factory.config.BeanPostProcessor
                     * BeanPostProcessor} which in turn means that you <em>cannot</em> use
                     * {@code @Value} within
                     * {@link org.springframework.beans.factory.config.BeanPostProcessor
                     * BeanPostProcessor} or
                     * {@link org.springframework.beans.factory.config.BeanFactoryPostProcessor BeanFactoryPostProcessor}
                     * types. Please consult the javadoc for the {@link AutowiredAnnotationBeanPostProcessor}
                     * class (which, by default, checks for the presence of this annotation).
                     * @author Juergen Hoeller
                     * @since 3.0
                     * @see AutowiredAnnotationBeanPostProcessor
                     * @see Autowired
                     * @see org.springframework.beans.factory.config.BeanExpressionResolver
                     * @see org.springframework.beans.factory.support.AutowireCandidateResolver#getSuggestedValue
                     */
                    // @ts-ignore
                    class Value implements java.lang.annotation.Annotation {
                    }
                }
            }
        }
    }
}
