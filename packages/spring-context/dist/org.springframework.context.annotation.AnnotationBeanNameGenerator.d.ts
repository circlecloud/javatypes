declare namespace org {
    namespace springframework {
        namespace context {
            namespace annotation {
                /**
                 * {@link BeanNameGenerator} implementation for bean classes annotated with the
                 * {@link org.springframework.stereotype.Component @Component} annotation or
                 * with another annotation that is itself annotated with {@code @Component} as a
                 * meta-annotation. For example, Spring's stereotype annotations (such as
                 * {@link org.springframework.stereotype.Repository @Repository}) are
                 * themselves annotated with {@code @Component}.
                 * <p>Also supports Java EE 6's {@link javax.annotation.ManagedBean} and
                 * JSR-330's {@link javax.inject.Named} annotations, if available. Note that
                 * Spring component annotations always override such standard annotations.
                 * <p>If the annotation's value doesn't indicate a bean name, an appropriate
                 * name will be built based on the short name of the class (with the first
                 * letter lower-cased). For example:
                 * <pre class="code">com.xyz.FooServiceImpl -&gt; fooServiceImpl</pre>
                 * @author Juergen Hoeller
                 * @author Mark Fisher
                 * @since 2.5
                 * @see org.springframework.stereotype.Component#value()
                 * @see org.springframework.stereotype.Repository#value()
                 * @see org.springframework.stereotype.Service#value()
                 * @see org.springframework.stereotype.Controller#value()
                 * @see javax.inject.Named#value()
                 * @see FullyQualifiedAnnotationBeanNameGenerator
                 */
                // @ts-ignore
                class AnnotationBeanNameGenerator extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * A convenient constant for a default {@code AnnotationBeanNameGenerator} instance,
                     * as used for component scanning purposes.
                     * @since 5.2
                     */
                    // @ts-ignore
                    public static readonly INSTANCE: org.springframework.context.annotation.AnnotationBeanNameGenerator
                    // @ts-ignore
                    public generateBeanName(definition: BeanDefinition, registry: BeanDefinitionRegistry): string
                    /**
                     * Derive a bean name from one of the annotations on the class.
                     * @param annotatedDef the annotation-aware bean definition
                     * @return the bean name, or {#code null} if none is found
                     */
                    // @ts-ignore
                    determineBeanNameFromAnnotation(annotatedDef: AnnotatedBeanDefinition): string
                    /**
                     * Check whether the given annotation is a stereotype that is allowed
                     * to suggest a component name through its annotation {@code value()}.
                     * @param annotationType the name of the annotation class to check
                     * @param metaAnnotationTypes the names of meta-annotations on the given annotation
                     * @param attributes the map of attributes for the given annotation
                     * @return whether the annotation qualifies as a stereotype with component name
                     */
                    // @ts-ignore
                    isStereotypeWithNameValue(annotationType: java.lang.String | string, metaAnnotationTypes: java.util.Set<java.lang.String | string> | Array<java.lang.String | string>, attributes: java.util.Map<java.lang.String | string, java.lang.Object | any>): boolean
                    /**
                     * Derive a default bean name from the given bean definition.
                     * <p>The default implementation delegates to {@link #buildDefaultBeanName(BeanDefinition)}.
                     * @param definition the bean definition to build a bean name for
                     * @param registry the registry that the given bean definition is being registered with
                     * @return the default bean name (never {#code null})
                     */
                    // @ts-ignore
                    buildDefaultBeanName(definition: BeanDefinition, registry: BeanDefinitionRegistry): string
                    /**
                     * Derive a default bean name from the given bean definition.
                     * <p>The default implementation simply builds a decapitalized version
                     * of the short class name: e.g. "mypackage.MyJdbcDao" -> "myJdbcDao".
                     * <p>Note that inner classes will thus have names of the form
                     * "outerClassName.InnerClassName", which because of the period in the
                     * name may be an issue if you are autowiring by name.
                     * @param definition the bean definition to build a bean name for
                     * @return the default bean name (never {#code null})
                     */
                    // @ts-ignore
                    buildDefaultBeanName(definition: BeanDefinition): string
                }
            }
        }
    }
}
