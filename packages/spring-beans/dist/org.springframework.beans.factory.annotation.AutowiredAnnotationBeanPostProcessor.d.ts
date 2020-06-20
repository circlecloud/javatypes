declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace annotation {
                    /**
                     * {@link org.springframework.beans.factory.config.BeanPostProcessor BeanPostProcessor}
                     * implementation that autowires annotated fields, setter methods, and arbitrary
                     * config methods. Such members to be injected are detected through annotations:
                     * by default, Spring's {@link Autowired @Autowired} and {@link Value @Value}
                     * annotations.
                     * <p>Also supports JSR-330's {@link javax.inject.Inject @Inject} annotation,
                     * if available, as a direct alternative to Spring's own {@code @Autowired}.
                     * <h3>Autowired Constructors</h3>
                     * <p>Only one constructor of any given bean class may declare this annotation with
                     * the 'required' attribute set to {@code true}, indicating <i>the</i> constructor
                     * to autowire when used as a Spring bean. Furthermore, if the 'required' attribute
                     * is set to {@code true}, only a single constructor may be annotated with
                     * {@code @Autowired}. If multiple <i>non-required</i> constructors declare the
                     * annotation, they will be considered as candidates for autowiring. The constructor
                     * with the greatest number of dependencies that can be satisfied by matching beans
                     * in the Spring container will be chosen. If none of the candidates can be satisfied,
                     * then a primary/default constructor (if present) will be used. If a class only
                     * declares a single constructor to begin with, it will always be used, even if not
                     * annotated. An annotated constructor does not have to be public.
                     * <h3>Autowired Fields</h3>
                     * <p>Fields are injected right after construction of a bean, before any
                     * config methods are invoked. Such a config field does not have to be public.
                     * <h3>Autowired Methods</h3>
                     * <p>Config methods may have an arbitrary name and any number of arguments; each of
                     * those arguments will be autowired with a matching bean in the Spring container.
                     * Bean property setter methods are effectively just a special case of such a
                     * general config method. Config methods do not have to be public.
                     * <h3>Annotation Config vs. XML Config</h3>
                     * <p>A default {@code AutowiredAnnotationBeanPostProcessor} will be registered
                     * by the "context:annotation-config" and "context:component-scan" XML tags.
                     * Remove or turn off the default annotation configuration there if you intend
                     * to specify a custom {@code AutowiredAnnotationBeanPostProcessor} bean definition.
                     * <p><b>NOTE:</b> Annotation injection will be performed <i>before</i> XML injection;
                     * thus the latter configuration will override the former for properties wired through
                     * both approaches.
                     * <h3>{@literal @}Lookup Methods</h3>
                     * <p>In addition to regular injection points as discussed above, this post-processor
                     * also handles Spring's {@link Lookup @Lookup} annotation which identifies lookup
                     * methods to be replaced by the container at runtime. This is essentially a type-safe
                     * version of {@code getBean(Class, args)} and {@code getBean(String, args)}.
                     * See {@link Lookup @Lookup's javadoc} for details.
                     * @author Juergen Hoeller
                     * @author Mark Fisher
                     * @author Stephane Nicoll
                     * @author Sebastien Deleuze
                     * @author Sam Brannen
                     * @since 2.5
                     * @see #setAutowiredAnnotationType
                     * @see Autowired
                     * @see Value
                     */
                    // @ts-ignore
                    class AutowiredAnnotationBeanPostProcessor extends org.springframework.beans.factory.config.InstantiationAwareBeanPostProcessorAdapter implements org.springframework.beans.factory.support.MergedBeanDefinitionPostProcessor, org.springframework.beans.factory.BeanFactoryAware {
                        /**
                         * Create a new {@code AutowiredAnnotationBeanPostProcessor} for Spring's
                         * standard {@link Autowired @Autowired} and {@link Value @Value} annotations.
                         * <p>Also supports JSR-330's {@link javax.inject.Inject @Inject} annotation,
                         * if available.
                         */
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        readonly logger: Log
                        /**
                         * Set the 'autowired' annotation type, to be used on constructors, fields,
                         * setter methods, and arbitrary config methods.
                         * <p>The default autowired annotation types are the Spring-provided
                         * {@link Autowired @Autowired} and {@link Value @Value} annotations as well
                         * as JSR-330's {@link javax.inject.Inject @Inject} annotation, if available.
                         * <p>This setter property exists so that developers can provide their own
                         * (non-Spring-specific) annotation type to indicate that a member is supposed
                         * to be autowired.
                         */
                        // @ts-ignore
                        setAutowiredAnnotationType(autowiredAnnotationType: java.lang.Class<java.lang.annotation.Annotation>): void
                        /**
                         * Set the 'autowired' annotation types, to be used on constructors, fields,
                         * setter methods, and arbitrary config methods.
                         * <p>The default autowired annotation types are the Spring-provided
                         * {@link Autowired @Autowired} and {@link Value @Value} annotations as well
                         * as JSR-330's {@link javax.inject.Inject @Inject} annotation, if available.
                         * <p>This setter property exists so that developers can provide their own
                         * (non-Spring-specific) annotation types to indicate that a member is supposed
                         * to be autowired.
                         */
                        // @ts-ignore
                        setAutowiredAnnotationTypes(autowiredAnnotationTypes: Array<java.lang.Class<java.lang.annotation.Annotation>>): void
                        /**
                         * Set the name of an attribute of the annotation that specifies whether it is required.
                         * @see #setRequiredParameterValue(boolean)
                         */
                        // @ts-ignore
                        setRequiredParameterName(requiredParameterName: string): void
                        /**
                         * Set the boolean value that marks a dependency as required.
                         * <p>For example if using 'required=true' (the default), this value should be
                         * {@code true}; but if using 'optional=false', this value should be {@code false}.
                         * @see #setRequiredParameterName(String)
                         */
                        // @ts-ignore
                        setRequiredParameterValue(requiredParameterValue: boolean): void
                        // @ts-ignore
                        setOrder(order: number /*int*/): void
                        // @ts-ignore
                        getOrder(): int
                        // @ts-ignore
                        setBeanFactory(beanFactory: org.springframework.beans.factory.BeanFactory): void
                        // @ts-ignore
                        postProcessMergedBeanDefinition(beanDefinition: org.springframework.beans.factory.support.RootBeanDefinition, beanType: java.lang.Class<any>, beanName: string): void
                        // @ts-ignore
                        resetBeanDefinition(beanName: string): void
                        // @ts-ignore
                        determineCandidateConstructors(beanClass: java.lang.Class<any>, beanName: string): java.lang.reflect.Constructor[]
                        // @ts-ignore
                        postProcessProperties(pvs: org.springframework.beans.PropertyValues, bean: any, beanName: string): org.springframework.beans.PropertyValues
                        // @ts-ignore
                        postProcessPropertyValues(pvs: org.springframework.beans.PropertyValues, pds: java.beans.PropertyDescriptor[], bean: any, beanName: string): org.springframework.beans.PropertyValues
                        /**
                         * 'Native' processing method for direct calls with an arbitrary target instance,
                         * resolving all of its fields and methods which are annotated with one of the
                         * configured 'autowired' annotation types.
                         * @param bean the target instance to process
                         * @throws BeanCreationException if autowiring failed
                         * @see #setAutowiredAnnotationTypes(Set)
                         */
                        // @ts-ignore
                        processInjection(bean: any): void
                        /**
                         * Determine if the annotated field or method requires its dependency.
                         * <p>A 'required' dependency means that autowiring should fail when no beans
                         * are found. Otherwise, the autowiring process will simply bypass the field
                         * or method when no beans are found.
                         * @param ann the Autowired annotation
                         * @return whether the annotation indicates that a dependency is required
                         */
                        // @ts-ignore
                        determineRequiredStatus(ann: object): boolean
                        /**
                         * Determine if the annotated field or method requires its dependency.
                         * <p>A 'required' dependency means that autowiring should fail when no beans
                         * are found. Otherwise, the autowiring process will simply bypass the field
                         * or method when no beans are found.
                         * @param ann the Autowired annotation
                         * @return whether the annotation indicates that a dependency is required
                         * @deprecated since 5.2, in favor of {#link #determineRequiredStatus(MergedAnnotation)}
                         */
                        // @ts-ignore
                        determineRequiredStatus(ann: AnnotationAttributes): boolean
                        /**
                         * Obtain all beans of the given type as autowire candidates.
                         * @param type the type of the bean
                         * @return the target beans, or an empty Collection if no bean of this type is found
                         * @throws BeansException if bean retrieval failed
                         */
                        // @ts-ignore
                        findAutowireCandidates<T>(type: java.lang.Class<T>): java.util.Map<java.lang.String, T>
                    }
                }
            }
        }
    }
}
