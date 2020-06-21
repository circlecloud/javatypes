declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace annotation {
                    /**
                     * Marks a method (typically a JavaBean setter method) as being 'required': that is,
                     * the setter method must be configured to be dependency-injected with a value.
                     * <p>Please do consult the javadoc for the {@link RequiredAnnotationBeanPostProcessor}
                     * class (which, by default, checks for the presence of this annotation).
                     * @author Rob Harrop
                     * @since 2.0
                     * @see RequiredAnnotationBeanPostProcessor
                     * @deprecated as of 5.1, in favor of using constructor injection for required settings
                     *  (or a custom {#link org.springframework.beans.factory.InitializingBean} implementation)
                     */
                    // @ts-ignore
                    abstract class Required implements java.lang.annotation.Annotation {
                    }
                }
            }
        }
    }
}
