declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                /**
                 * Convenience methods operating on bean factories, in particular
                 * on the {@link ListableBeanFactory} interface.
                 * <p>Returns bean counts, bean names or bean instances,
                 * taking into account the nesting hierarchy of a bean factory
                 * (which the methods defined on the ListableBeanFactory interface don't,
                 * in contrast to the methods defined on the BeanFactory interface).
                 * @author Rod Johnson
                 * @author Juergen Hoeller
                 * @author Chris Beams
                 * @since 04.07.2003
                 */
                // @ts-ignore
                abstract class BeanFactoryUtils extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Separator for generated bean names. If a class name or parent name is not
                     * unique, "#1", "#2" etc will be appended, until the name becomes unique.
                     */
                    // @ts-ignore
                    public static readonly GENERATED_BEAN_NAME_SEPARATOR: java.lang.String | string
                    /**
                     * Return whether the given name is a factory dereference
                     * (beginning with the factory dereference prefix).
                     * @param name the name of the bean
                     * @return whether the given name is a factory dereference
                     * @see BeanFactory#FACTORY_BEAN_PREFIX
                     */
                    // @ts-ignore
                    public static isFactoryDereference(name: java.lang.String | string): boolean
                    /**
                     * Return the actual bean name, stripping out the factory dereference
                     * prefix (if any, also stripping repeated factory prefixes if found).
                     * @param name the name of the bean
                     * @return the transformed name
                     * @see BeanFactory#FACTORY_BEAN_PREFIX
                     */
                    // @ts-ignore
                    public static transformedBeanName(name: java.lang.String | string): string
                    /**
                     * Return whether the given name is a bean name which has been generated
                     * by the default naming strategy (containing a "#..." part).
                     * @param name the name of the bean
                     * @return whether the given name is a generated bean name
                     * @see #GENERATED_BEAN_NAME_SEPARATOR
                     * @see org.springframework.beans.factory.support.BeanDefinitionReaderUtils#generateBeanName
                     * @see org.springframework.beans.factory.support.DefaultBeanNameGenerator
                     */
                    // @ts-ignore
                    public static isGeneratedBeanName(name: java.lang.String | string): boolean
                    /**
                     * Extract the "raw" bean name from the given (potentially generated) bean name,
                     * excluding any "#..." suffixes which might have been added for uniqueness.
                     * @param name the potentially generated bean name
                     * @return the raw bean name
                     * @see #GENERATED_BEAN_NAME_SEPARATOR
                     */
                    // @ts-ignore
                    public static originalBeanName(name: java.lang.String | string): string
                    /**
                     * Count all beans in any hierarchy in which this factory participates.
                     * Includes counts of ancestor bean factories.
                     * <p>Beans that are "overridden" (specified in a descendant factory
                     * with the same name) are only counted once.
                     * @param lbf the bean factory
                     * @return count of beans including those defined in ancestor factories
                     * @see #beanNamesIncludingAncestors
                     */
                    // @ts-ignore
                    public static countBeansIncludingAncestors(lbf: org.springframework.beans.factory.ListableBeanFactory): number /*int*/
                    /**
                     * Return all bean names in the factory, including ancestor factories.
                     * @param lbf the bean factory
                     * @return the array of matching bean names, or an empty array if none
                     * @see #beanNamesForTypeIncludingAncestors
                     */
                    // @ts-ignore
                    public static beanNamesIncludingAncestors(lbf: org.springframework.beans.factory.ListableBeanFactory): string[]
                    /**
                     * Get all bean names for the given type, including those defined in ancestor
                     * factories. Will return unique names in case of overridden bean definitions.
                     * <p>Does consider objects created by FactoryBeans, which means that FactoryBeans
                     * will get initialized. If the object created by the FactoryBean doesn't match,
                     * the raw FactoryBean itself will be matched against the type.
                     * <p>This version of {@code beanNamesForTypeIncludingAncestors} automatically
                     * includes prototypes and FactoryBeans.
                     * @param lbf the bean factory
                     * @param type the type that beans must match (as a {#code ResolvableType})
                     * @return the array of matching bean names, or an empty array if none
                     * @since 4.2
                     * @see ListableBeanFactory#getBeanNamesForType(ResolvableType)
                     */
                    // @ts-ignore
                    public static beanNamesForTypeIncludingAncestors(lbf: org.springframework.beans.factory.ListableBeanFactory, type: ResolvableType): string[]
                    /**
                     * Get all bean names for the given type, including those defined in ancestor
                     * factories. Will return unique names in case of overridden bean definitions.
                     * <p>Does consider objects created by FactoryBeans if the "allowEagerInit"
                     * flag is set, which means that FactoryBeans will get initialized. If the
                     * object created by the FactoryBean doesn't match, the raw FactoryBean itself
                     * will be matched against the type. If "allowEagerInit" is not set,
                     * only raw FactoryBeans will be checked (which doesn't require initialization
                     * of each FactoryBean).
                     * @param lbf the bean factory
                     * @param type the type that beans must match (as a {#code ResolvableType})
                     * @param includeNonSingletons whether to include prototype or scoped beans too
                     *  or just singletons (also applies to FactoryBeans)
                     * @param allowEagerInit whether to initialize <i>lazy-init singletons</i> and
                     *  <i>objects created by FactoryBeans</i> (or by factory methods with a
                     *  "factory-bean" reference) for the type check. Note that FactoryBeans need to be
                     *  eagerly initialized to determine their type: So be aware that passing in "true"
                     *  for this flag will initialize FactoryBeans and "factory-bean" references.
                     * @return the array of matching bean names, or an empty array if none
                     * @since 5.2
                     * @see ListableBeanFactory#getBeanNamesForType(ResolvableType, boolean, boolean)
                     */
                    // @ts-ignore
                    public static beanNamesForTypeIncludingAncestors(lbf: org.springframework.beans.factory.ListableBeanFactory, type: ResolvableType, includeNonSingletons: boolean, allowEagerInit: boolean): string[]
                    /**
                     * Get all bean names whose {@code Class} has the supplied {@link Annotation}
                     * type, including those defined in ancestor factories, without creating any bean
                     * instances yet. Will return unique names in case of overridden bean definitions.
                     * @param lbf the bean factory
                     * @param annotationType the type of annotation to look for
                     * @return the array of matching bean names, or an empty array if none
                     * @since 5.0
                     * @see ListableBeanFactory#getBeanNamesForAnnotation(Class)
                     */
                    // @ts-ignore
                    public static beanNamesForAnnotationIncludingAncestors(lbf: org.springframework.beans.factory.ListableBeanFactory, annotationType: java.lang.Class<any>): string[]
                    /**
                     * Return all beans of the given type or subtypes, also picking up beans defined in
                     * ancestor bean factories if the current bean factory is a HierarchicalBeanFactory.
                     * The returned Map will only contain beans of this type.
                     * <p>Does consider objects created by FactoryBeans, which means that FactoryBeans
                     * will get initialized. If the object created by the FactoryBean doesn't match,
                     * the raw FactoryBean itself will be matched against the type.
                     * <p><b>Note: Beans of the same name will take precedence at the 'lowest' factory level,
                     * i.e. such beans will be returned from the lowest factory that they are being found in,
                     * hiding corresponding beans in ancestor factories.</b> This feature allows for
                     * 'replacing' beans by explicitly choosing the same bean name in a child factory;
                     * the bean in the ancestor factory won't be visible then, not even for by-type lookups.
                     * @param lbf the bean factory
                     * @param type type of bean to match
                     * @return the Map of matching bean instances, or an empty Map if none
                     * @throws BeansException if a bean could not be created
                     * @see ListableBeanFactory#getBeansOfType(Class)
                     */
                    // @ts-ignore
                    public static beansOfTypeIncludingAncestors<T>(lbf: org.springframework.beans.factory.ListableBeanFactory, type: java.lang.Class<T>): java.util.Map<java.lang.String | string, T>
                    /**
                     * Return all beans of the given type or subtypes, also picking up beans defined in
                     * ancestor bean factories if the current bean factory is a HierarchicalBeanFactory.
                     * The returned Map will only contain beans of this type.
                     * <p>Does consider objects created by FactoryBeans if the "allowEagerInit" flag is set,
                     * which means that FactoryBeans will get initialized. If the object created by the
                     * FactoryBean doesn't match, the raw FactoryBean itself will be matched against the
                     * type. If "allowEagerInit" is not set, only raw FactoryBeans will be checked
                     * (which doesn't require initialization of each FactoryBean).
                     * <p><b>Note: Beans of the same name will take precedence at the 'lowest' factory level,
                     * i.e. such beans will be returned from the lowest factory that they are being found in,
                     * hiding corresponding beans in ancestor factories.</b> This feature allows for
                     * 'replacing' beans by explicitly choosing the same bean name in a child factory;
                     * the bean in the ancestor factory won't be visible then, not even for by-type lookups.
                     * @param lbf the bean factory
                     * @param type type of bean to match
                     * @param includeNonSingletons whether to include prototype or scoped beans too
                     *  or just singletons (also applies to FactoryBeans)
                     * @param allowEagerInit whether to initialize <i>lazy-init singletons</i> and
                     *  <i>objects created by FactoryBeans</i> (or by factory methods with a
                     *  "factory-bean" reference) for the type check. Note that FactoryBeans need to be
                     *  eagerly initialized to determine their type: So be aware that passing in "true"
                     *  for this flag will initialize FactoryBeans and "factory-bean" references.
                     * @return the Map of matching bean instances, or an empty Map if none
                     * @throws BeansException if a bean could not be created
                     * @see ListableBeanFactory#getBeansOfType(Class, boolean, boolean)
                     */
                    // @ts-ignore
                    public static beansOfTypeIncludingAncestors<T>(lbf: org.springframework.beans.factory.ListableBeanFactory, type: java.lang.Class<T>, includeNonSingletons: boolean, allowEagerInit: boolean): java.util.Map<java.lang.String | string, T>
                    /**
                     * Return a single bean of the given type or subtypes, also picking up beans
                     * defined in ancestor bean factories if the current bean factory is a
                     * HierarchicalBeanFactory. Useful convenience method when we expect a
                     * single bean and don't care about the bean name.
                     * <p>Does consider objects created by FactoryBeans, which means that FactoryBeans
                     * will get initialized. If the object created by the FactoryBean doesn't match,
                     * the raw FactoryBean itself will be matched against the type.
                     * <p>This version of {@code beanOfTypeIncludingAncestors} automatically includes
                     * prototypes and FactoryBeans.
                     * <p><b>Note: Beans of the same name will take precedence at the 'lowest' factory level,
                     * i.e. such beans will be returned from the lowest factory that they are being found in,
                     * hiding corresponding beans in ancestor factories.</b> This feature allows for
                     * 'replacing' beans by explicitly choosing the same bean name in a child factory;
                     * the bean in the ancestor factory won't be visible then, not even for by-type lookups.
                     * @param lbf the bean factory
                     * @param type type of bean to match
                     * @return the matching bean instance
                     * @throws NoSuchBeanDefinitionException if no bean of the given type was found
                     * @throws NoUniqueBeanDefinitionException if more than one bean of the given type was found
                     * @throws BeansException if the bean could not be created
                     * @see #beansOfTypeIncludingAncestors(ListableBeanFactory, Class)
                     */
                    // @ts-ignore
                    public static beanOfTypeIncludingAncestors<T>(lbf: org.springframework.beans.factory.ListableBeanFactory, type: java.lang.Class<T>): T
                    /**
                     * Return a single bean of the given type or subtypes, also picking up beans
                     * defined in ancestor bean factories if the current bean factory is a
                     * HierarchicalBeanFactory. Useful convenience method when we expect a
                     * single bean and don't care about the bean name.
                     * <p>Does consider objects created by FactoryBeans if the "allowEagerInit" flag is set,
                     * which means that FactoryBeans will get initialized. If the object created by the
                     * FactoryBean doesn't match, the raw FactoryBean itself will be matched against the
                     * type. If "allowEagerInit" is not set, only raw FactoryBeans will be checked
                     * (which doesn't require initialization of each FactoryBean).
                     * <p><b>Note: Beans of the same name will take precedence at the 'lowest' factory level,
                     * i.e. such beans will be returned from the lowest factory that they are being found in,
                     * hiding corresponding beans in ancestor factories.</b> This feature allows for
                     * 'replacing' beans by explicitly choosing the same bean name in a child factory;
                     * the bean in the ancestor factory won't be visible then, not even for by-type lookups.
                     * @param lbf the bean factory
                     * @param type type of bean to match
                     * @param includeNonSingletons whether to include prototype or scoped beans too
                     *  or just singletons (also applies to FactoryBeans)
                     * @param allowEagerInit whether to initialize <i>lazy-init singletons</i> and
                     *  <i>objects created by FactoryBeans</i> (or by factory methods with a
                     *  "factory-bean" reference) for the type check. Note that FactoryBeans need to be
                     *  eagerly initialized to determine their type: So be aware that passing in "true"
                     *  for this flag will initialize FactoryBeans and "factory-bean" references.
                     * @return the matching bean instance
                     * @throws NoSuchBeanDefinitionException if no bean of the given type was found
                     * @throws NoUniqueBeanDefinitionException if more than one bean of the given type was found
                     * @throws BeansException if the bean could not be created
                     * @see #beansOfTypeIncludingAncestors(ListableBeanFactory, Class, boolean, boolean)
                     */
                    // @ts-ignore
                    public static beanOfTypeIncludingAncestors<T>(lbf: org.springframework.beans.factory.ListableBeanFactory, type: java.lang.Class<T>, includeNonSingletons: boolean, allowEagerInit: boolean): T
                    /**
                     * Return a single bean of the given type or subtypes, not looking in ancestor
                     * factories. Useful convenience method when we expect a single bean and
                     * don't care about the bean name.
                     * <p>Does consider objects created by FactoryBeans, which means that FactoryBeans
                     * will get initialized. If the object created by the FactoryBean doesn't match,
                     * the raw FactoryBean itself will be matched against the type.
                     * <p>This version of {@code beanOfType} automatically includes
                     * prototypes and FactoryBeans.
                     * @param lbf the bean factory
                     * @param type type of bean to match
                     * @return the matching bean instance
                     * @throws NoSuchBeanDefinitionException if no bean of the given type was found
                     * @throws NoUniqueBeanDefinitionException if more than one bean of the given type was found
                     * @throws BeansException if the bean could not be created
                     * @see ListableBeanFactory#getBeansOfType(Class)
                     */
                    // @ts-ignore
                    public static beanOfType<T>(lbf: org.springframework.beans.factory.ListableBeanFactory, type: java.lang.Class<T>): T
                    /**
                     * Return a single bean of the given type or subtypes, not looking in ancestor
                     * factories. Useful convenience method when we expect a single bean and
                     * don't care about the bean name.
                     * <p>Does consider objects created by FactoryBeans if the "allowEagerInit"
                     * flag is set, which means that FactoryBeans will get initialized. If the
                     * object created by the FactoryBean doesn't match, the raw FactoryBean itself
                     * will be matched against the type. If "allowEagerInit" is not set,
                     * only raw FactoryBeans will be checked (which doesn't require initialization
                     * of each FactoryBean).
                     * @param lbf the bean factory
                     * @param type type of bean to match
                     * @param includeNonSingletons whether to include prototype or scoped beans too
                     *  or just singletons (also applies to FactoryBeans)
                     * @param allowEagerInit whether to initialize <i>lazy-init singletons</i> and
                     *  <i>objects created by FactoryBeans</i> (or by factory methods with a
                     *  "factory-bean" reference) for the type check. Note that FactoryBeans need to be
                     *  eagerly initialized to determine their type: So be aware that passing in "true"
                     *  for this flag will initialize FactoryBeans and "factory-bean" references.
                     * @return the matching bean instance
                     * @throws NoSuchBeanDefinitionException if no bean of the given type was found
                     * @throws NoUniqueBeanDefinitionException if more than one bean of the given type was found
                     * @throws BeansException if the bean could not be created
                     * @see ListableBeanFactory#getBeansOfType(Class, boolean, boolean)
                     */
                    // @ts-ignore
                    public static beanOfType<T>(lbf: org.springframework.beans.factory.ListableBeanFactory, type: java.lang.Class<T>, includeNonSingletons: boolean, allowEagerInit: boolean): T
                }
            }
        }
    }
}
