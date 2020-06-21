declare namespace org {
    namespace springframework {
        namespace context {
            namespace annotation {
                /**
                 * An extension of {@code AnnotationBeanNameGenerator} that uses the fully qualified
                 * class name as the default bean name if an explicit bean name is not supplied via
                 * a supported type-level annotation such as {@code @Component} (see
                 * {@link AnnotationBeanNameGenerator} for details on supported annotations).
                 * <p>Favor this bean naming strategy over {@code AnnotationBeanNameGenerator} if
                 * you run into naming conflicts due to multiple autodetected components having the
                 * same non-qualified class name (i.e., classes with identical names but residing in
                 * different packages).
                 * <p>Note that an instance of this class is used by default for configuration-level
                 * import purposes; whereas, the default for component scanning purposes is a plain
                 * {@code AnnotationBeanNameGenerator}.
                 * @author Juergen Hoeller
                 * @author Sam Brannen
                 * @since 5.2.3
                 * @see org.springframework.beans.factory.support.DefaultBeanNameGenerator
                 * @see AnnotationBeanNameGenerator
                 * @see ConfigurationClassPostProcessor#IMPORT_BEAN_NAME_GENERATOR
                 */
                // @ts-ignore
                class FullyQualifiedAnnotationBeanNameGenerator extends org.springframework.context.annotation.AnnotationBeanNameGenerator {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    buildDefaultBeanName(definition: BeanDefinition): string
                }
            }
        }
    }
}
