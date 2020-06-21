declare namespace org {
    namespace springframework {
        namespace context {
            namespace annotation {
                /**
                 * {@link org.springframework.beans.factory.config.BeanPostProcessor} implementation
                 * that supports common Java annotations out of the box, in particular the JSR-250
                 * annotations in the {@code javax.annotation} package. These common Java
                 * annotations are supported in many Java EE 5 technologies (e.g. JSF 1.2),
                 * as well as in Java 6's JAX-WS.
                 * <p>This post-processor includes support for the {@link javax.annotation.PostConstruct}
                 * and {@link javax.annotation.PreDestroy} annotations - as init annotation
                 * and destroy annotation, respectively - through inheriting from
                 * {@link InitDestroyAnnotationBeanPostProcessor} with pre-configured annotation types.
                 * <p>The central element is the {@link javax.annotation.Resource} annotation
                 * for annotation-driven injection of named beans, by default from the containing
                 * Spring BeanFactory, with only {@code mappedName} references resolved in JNDI.
                 * The {@link #setAlwaysUseJndiLookup "alwaysUseJndiLookup" flag} enforces JNDI lookups
                 * equivalent to standard Java EE 5 resource injection for {@code name} references
                 * and default names as well. The target beans can be simple POJOs, with no special
                 * requirements other than the type having to match.
                 * <p>The JAX-WS {@link javax.xml.ws.WebServiceRef} annotation is supported too,
                 * analogous to {@link javax.annotation.Resource} but with the capability of creating
                 * specific JAX-WS service endpoints. This may either point to an explicitly defined
                 * resource by name or operate on a locally specified JAX-WS service class. Finally,
                 * this post-processor also supports the EJB 3 {@link javax.ejb.EJB} annotation,
                 * analogous to {@link javax.annotation.Resource} as well, with the capability to
                 * specify both a local bean name and a global JNDI name for fallback retrieval.
                 * The target beans can be plain POJOs as well as EJB 3 Session Beans in this case.
                 * <p>The common annotations supported by this post-processor are available in
                 * Java 6 (JDK 1.6) as well as in Java EE 5/6 (which provides a standalone jar for
                 * its common annotations as well, allowing for use in any Java 5 based application).
                 * <p>For default usage, resolving resource names as Spring bean names,
                 * simply define the following in your application context:
                 * <pre class="code">
                 * &lt;bean class="org.springframework.context.annotation.CommonAnnotationBeanPostProcessor"/&gt;</pre>
                 * For direct JNDI access, resolving resource names as JNDI resource references
                 * within the Java EE application's "java:comp/env/" namespace, use the following:
                 * <pre class="code">
                 * &lt;bean class="org.springframework.context.annotation.CommonAnnotationBeanPostProcessor"&gt;
                 * &lt;property name="alwaysUseJndiLookup" value="true"/&gt;
                 * &lt;/bean&gt;</pre>
                 * {@code mappedName} references will always be resolved in JNDI,
                 * allowing for global JNDI names (including "java:" prefix) as well. The
                 * "alwaysUseJndiLookup" flag just affects {@code name} references and
                 * default names (inferred from the field name / property name).
                 * <p><b>NOTE:</b> A default CommonAnnotationBeanPostProcessor will be registered
                 * by the "context:annotation-config" and "context:component-scan" XML tags.
                 * Remove or turn off the default annotation configuration there if you intend
                 * to specify a custom CommonAnnotationBeanPostProcessor bean definition!
                 * <p><b>NOTE:</b> Annotation injection will be performed <i>before</i> XML injection; thus
                 * the latter configuration will override the former for properties wired through
                 * both approaches.
                 * @author Juergen Hoeller
                 * @author Sam Brannen
                 * @since 2.5
                 * @see #setAlwaysUseJndiLookup
                 * @see #setResourceFactory
                 * @see org.springframework.beans.factory.annotation.InitDestroyAnnotationBeanPostProcessor
                 * @see org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor
                 */
                // @ts-ignore
                class CommonAnnotationBeanPostProcessor extends InitDestroyAnnotationBeanPostProcessor implements java.io.Serializable {
                    /**
                     * Create a new CommonAnnotationBeanPostProcessor,
                     * with the init and destroy annotation types set to
                     * {@link javax.annotation.PostConstruct} and {@link javax.annotation.PreDestroy},
                     * respectively.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Ignore the given resource type when resolving {@code @Resource}
                     * annotations.
                     * <p>By default, the {@code javax.xml.ws.WebServiceContext} interface
                     * will be ignored, since it will be resolved by the JAX-WS runtime.
                     * @param resourceType the resource type to ignore
                     */
                    // @ts-ignore
                    public ignoreResourceType(resourceType: java.lang.String | string): void
                    /**
                     * Set whether to allow a fallback to a type match if no explicit name has been
                     * specified. The default name (i.e. the field name or bean property name) will
                     * still be checked first; if a bean of that name exists, it will be taken.
                     * However, if no bean of that name exists, a by-type resolution of the
                     * dependency will be attempted if this flag is "true".
                     * <p>Default is "true". Switch this flag to "false" in order to enforce a
                     * by-name lookup in all cases, throwing an exception in case of no name match.
                     * @see org.springframework.beans.factory.config.AutowireCapableBeanFactory#resolveDependency
                     */
                    // @ts-ignore
                    public setFallbackToDefaultTypeMatch(fallbackToDefaultTypeMatch: boolean): void
                    /**
                     * Set whether to always use JNDI lookups equivalent to standard Java EE 5 resource
                     * injection, <b>even for {@code name} attributes and default names</b>.
                     * <p>Default is "false": Resource names are used for Spring bean lookups in the
                     * containing BeanFactory; only {@code mappedName} attributes point directly
                     * into JNDI. Switch this flag to "true" for enforcing Java EE style JNDI lookups
                     * in any case, even for {@code name} attributes and default names.
                     * @see #setJndiFactory
                     * @see #setResourceFactory
                     */
                    // @ts-ignore
                    public setAlwaysUseJndiLookup(alwaysUseJndiLookup: boolean): void
                    /**
                     * Specify the factory for objects to be injected into {@code @Resource} /
                     * {@code @WebServiceRef} / {@code @EJB} annotated fields and setter methods,
                     * <b>for {@code mappedName} attributes that point directly into JNDI</b>.
                     * This factory will also be used if "alwaysUseJndiLookup" is set to "true" in order
                     * to enforce JNDI lookups even for {@code name} attributes and default names.
                     * <p>The default is a {@link org.springframework.jndi.support.SimpleJndiBeanFactory}
                     * for JNDI lookup behavior equivalent to standard Java EE 5 resource injection.
                     * @see #setResourceFactory
                     * @see #setAlwaysUseJndiLookup
                     */
                    // @ts-ignore
                    public setJndiFactory(jndiFactory: BeanFactory): void
                    /**
                     * Specify the factory for objects to be injected into {@code @Resource} /
                     * {@code @WebServiceRef} / {@code @EJB} annotated fields and setter methods,
                     * <b>for {@code name} attributes and default names</b>.
                     * <p>The default is the BeanFactory that this post-processor is defined in,
                     * if any, looking up resource names as Spring bean names. Specify the resource
                     * factory explicitly for programmatic usage of this post-processor.
                     * <p>Specifying Spring's {@link org.springframework.jndi.support.SimpleJndiBeanFactory}
                     * leads to JNDI lookup behavior equivalent to standard Java EE 5 resource injection,
                     * even for {@code name} attributes and default names. This is the same behavior
                     * that the "alwaysUseJndiLookup" flag enables.
                     * @see #setAlwaysUseJndiLookup
                     */
                    // @ts-ignore
                    public setResourceFactory(resourceFactory: BeanFactory): void
                    // @ts-ignore
                    public setBeanFactory(beanFactory: BeanFactory): void
                    // @ts-ignore
                    public postProcessMergedBeanDefinition(beanDefinition: RootBeanDefinition, beanType: java.lang.Class<any>, beanName: java.lang.String | string): void
                    // @ts-ignore
                    public resetBeanDefinition(beanName: java.lang.String | string): void
                    // @ts-ignore
                    public postProcessBeforeInstantiation(beanClass: java.lang.Class<any>, beanName: java.lang.String | string): any
                    // @ts-ignore
                    public postProcessAfterInstantiation(bean: java.lang.Object | any, beanName: java.lang.String | string): boolean
                    // @ts-ignore
                    public postProcessProperties(pvs: PropertyValues, bean: java.lang.Object | any, beanName: java.lang.String | string): PropertyValues
                    // @ts-ignore
                    public postProcessPropertyValues(pvs: PropertyValues, pds: java.beans.PropertyDescriptor[], bean: java.lang.Object | any, beanName: java.lang.String | string): PropertyValues
                    /**
                     * Obtain a lazily resolving resource proxy for the given name and type,
                     * delegating to {@link #getResource} on demand once a method call comes in.
                     * @param element the descriptor for the annotated field/method
                     * @param requestingBeanName the name of the requesting bean
                     * @return the resource object (never {#code null})
                     * @since 4.2
                     * @see #getResource
                     * @see Lazy
                     */
                    // @ts-ignore
                    buildLazyResourceProxy(element: org.springframework.context.annotation.CommonAnnotationBeanPostProcessor.LookupElement, requestingBeanName: java.lang.String | string): any
                    /**
                     * Obtain the resource object for the given name and type.
                     * @param element the descriptor for the annotated field/method
                     * @param requestingBeanName the name of the requesting bean
                     * @return the resource object (never {#code null})
                     * @throws NoSuchBeanDefinitionException if no corresponding target resource found
                     */
                    // @ts-ignore
                    getResource(element: org.springframework.context.annotation.CommonAnnotationBeanPostProcessor.LookupElement, requestingBeanName: java.lang.String | string): any
                    /**
                     * Obtain a resource object for the given name and type through autowiring
                     * based on the given factory.
                     * @param factory the factory to autowire against
                     * @param element the descriptor for the annotated field/method
                     * @param requestingBeanName the name of the requesting bean
                     * @return the resource object (never {#code null})
                     * @throws NoSuchBeanDefinitionException if no corresponding target resource found
                     */
                    // @ts-ignore
                    autowireResource(factory: BeanFactory, element: org.springframework.context.annotation.CommonAnnotationBeanPostProcessor.LookupElement, requestingBeanName: java.lang.String | string): any
                }
            }
        }
    }
}
