declare namespace org {
    namespace springframework {
        namespace jndi {
            namespace support {
                /**
                 * Simple JNDI-based implementation of Spring's
                 * {@link org.springframework.beans.factory.BeanFactory} interface.
                 * Does not support enumerating bean definitions, hence doesn't implement
                 * the {@link org.springframework.beans.factory.ListableBeanFactory} interface.
                 * <p>This factory resolves given bean names as JNDI names within the
                 * Java EE application's "java:comp/env/" namespace. It caches the resolved
                 * types for all obtained objects, and optionally also caches shareable
                 * objects (if they are explicitly marked as
                 * {@link #addShareableResource shareable resource}.
                 * <p>The main intent of this factory is usage in combination with Spring's
                 * {@link org.springframework.context.annotation.CommonAnnotationBeanPostProcessor},
                 * configured as "resourceFactory" for resolving {@code @Resource}
                 * annotations as JNDI objects without intermediate bean definitions.
                 * It may be used for similar lookup scenarios as well, of course,
                 * in particular if BeanFactory-style type checking is required.
                 * @author Juergen Hoeller
                 * @since 2.5
                 * @see org.springframework.beans.factory.support.DefaultListableBeanFactory
                 * @see org.springframework.context.annotation.CommonAnnotationBeanPostProcessor
                 */
                // @ts-ignore
                class SimpleJndiBeanFactory extends org.springframework.jndi.JndiLocatorSupport {
                    // @ts-ignore
                    constructor()
                    /**
                     * Add the name of a shareable JNDI resource,
                     * which this factory is allowed to cache once obtained.
                     * @param shareableResource the JNDI name
                     *  (typically within the "java:comp/env/" namespace)
                     */
                    // @ts-ignore
                    public addShareableResource(shareableResource: java.lang.String | string): void
                    /**
                     * Set a list of names of shareable JNDI resources,
                     * which this factory is allowed to cache once obtained.
                     * @param shareableResources the JNDI names
                     *  (typically within the "java:comp/env/" namespace)
                     */
                    // @ts-ignore
                    public setShareableResources(...shareableResources: java.lang.String[] | string[]): void
                    // @ts-ignore
                    public getBean(name: java.lang.String | string): any
                    // @ts-ignore
                    public getBean<T>(name: java.lang.String | string, requiredType: java.lang.Class<T>): T
                    // @ts-ignore
                    public getBean(name: java.lang.String | string, ...args: java.lang.Object[] | any[]): any
                    // @ts-ignore
                    public getBean<T>(requiredType: java.lang.Class<T>): T
                    // @ts-ignore
                    public getBean<T>(requiredType: java.lang.Class<T>, ...args: java.lang.Object[] | any[]): T
                    // @ts-ignore
                    public getBeanProvider<T>(requiredType: java.lang.Class<T>): object
                    // @ts-ignore
                    public getBeanProvider<T>(requiredType: ResolvableType): object
                    // @ts-ignore
                    public containsBean(name: java.lang.String | string): boolean
                    // @ts-ignore
                    public isSingleton(name: java.lang.String | string): boolean
                    // @ts-ignore
                    public isPrototype(name: java.lang.String | string): boolean
                    // @ts-ignore
                    public isTypeMatch(name: java.lang.String | string, typeToMatch: ResolvableType): boolean
                    // @ts-ignore
                    public getType(name: java.lang.String | string): java.lang.Class<any>
                    // @ts-ignore
                    public getType(name: java.lang.String | string, allowFactoryBeanInit: boolean): java.lang.Class<any>
                    // @ts-ignore
                    public getAliases(name: java.lang.String | string): string[]
                }
            }
        }
    }
}
