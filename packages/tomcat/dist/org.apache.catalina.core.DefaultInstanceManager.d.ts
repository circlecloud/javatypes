declare namespace org {
    namespace apache {
        namespace catalina {
            namespace core {
                // @ts-ignore
                class DefaultInstanceManager extends java.lang.Object implements org.apache.tomcat.InstanceManager {
                    // @ts-ignore
                    constructor(context: javax.naming.Context, injectionMap: java.util.Map<java.lang.String | string, java.util.Map<java.lang.String | string, java.lang.String | string>>, catalinaContext: org.apache.catalina.Context, containerClassLoader: java.lang.ClassLoader)
                    /**
                     * The string manager for this package.
                     */
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    // @ts-ignore
                    readonly classLoader: java.lang.ClassLoader
                    // @ts-ignore
                    readonly containerClassLoader: java.lang.ClassLoader
                    // @ts-ignore
                    readonly privileged: boolean
                    // @ts-ignore
                    readonly ignoreAnnotations: boolean
                    // @ts-ignore
                    public newInstance(clazz: java.lang.Class<any>): any
                    // @ts-ignore
                    public newInstance(className: java.lang.String | string): any
                    // @ts-ignore
                    public newInstance(className: java.lang.String | string, classLoader: java.lang.ClassLoader): any
                    // @ts-ignore
                    public newInstance(o: java.lang.Object | any): void
                    // @ts-ignore
                    public destroyInstance(instance: java.lang.Object | any): void
                    /**
                     * Call postConstruct method on the specified instance recursively from
                     * deepest superclass to actual class.
                     * @param instance object to call postconstruct methods on
                     * @param clazz    (super) class to examine for postConstruct annotation.
                     * @throws IllegalAccessException if postConstruct method is inaccessible.
                     * @throws java.lang.reflect.InvocationTargetException
                     *                                 if call fails
                     */
                    // @ts-ignore
                    postConstruct(instance: java.lang.Object | any, clazz: java.lang.Class<any>): void
                    /**
                     * Call preDestroy method on the specified instance recursively from deepest
                     * superclass to actual class.
                     * @param instance object to call preDestroy methods on
                     * @param clazz    (super) class to examine for preDestroy annotation.
                     * @throws IllegalAccessException if preDestroy method is inaccessible.
                     * @throws java.lang.reflect.InvocationTargetException
                     *                                 if call fails
                     */
                    // @ts-ignore
                    preDestroy(instance: java.lang.Object | any, clazz: java.lang.Class<any>): void
                    // @ts-ignore
                    public backgroundProcess(): void
                    /**
                     * Make sure that the annotations cache has been populated for the provided
                     * class.
                     * @param clazz         clazz to populate annotations for
                     * @param injections    map of injections for this class from xml deployment
                     *                       descriptor
                     * @throws IllegalAccessException       if injection target is inaccessible
                     * @throws javax.naming.NamingException if value cannot be looked up in jndi
                     * @throws java.lang.reflect.InvocationTargetException
                     *                                       if injection fails
                     */
                    // @ts-ignore
                    populateAnnotationsCache(clazz: java.lang.Class<any>, injections: java.util.Map<java.lang.String | string, java.lang.String | string>): void
                    /**
                     * Inject resources in specified instance.
                     * @param instance   instance to inject into
                     * @param injections map of injections for this class from xml deployment descriptor
                     * @throws IllegalAccessException       if injection target is inaccessible
                     * @throws javax.naming.NamingException if value cannot be looked up in jndi
                     * @throws java.lang.reflect.InvocationTargetException
                     *                                       if injection fails
                     */
                    // @ts-ignore
                    processAnnotations(instance: java.lang.Object | any, injections: java.util.Map<java.lang.String | string, java.lang.String | string>): void
                    /**
                     * Makes cache size available to unit tests.
                     * @return the cache size
                     */
                    // @ts-ignore
                    getAnnotationCacheSize(): number /*int*/
                    // @ts-ignore
                    loadClassMaybePrivileged(className: java.lang.String | string, classLoader: java.lang.ClassLoader): java.lang.Class<any>
                    // @ts-ignore
                    loadClass(className: java.lang.String | string, classLoader: java.lang.ClassLoader): java.lang.Class<any>
                    /**
                     * Inject resources in specified field.
                     * @param context  jndi context to extract value from
                     * @param instance object to inject into
                     * @param field    field target for injection
                     * @param name     jndi name value is bound under
                     * @param clazz    class annotation is defined in
                     * @throws IllegalAccessException       if field is inaccessible
                     * @throws javax.naming.NamingException if value is not accessible in naming context
                     */
                    // @ts-ignore
                    static lookupFieldResource(context: javax.naming.Context, instance: java.lang.Object | any, field: java.lang.reflect.Field, name: java.lang.String | string, clazz: java.lang.Class<any>): void
                    /**
                     * Inject resources in specified method.
                     * @param context  jndi context to extract value from
                     * @param instance object to inject into
                     * @param method   field target for injection
                     * @param name     jndi name value is bound under
                     * @param clazz    class annotation is defined in
                     * @throws IllegalAccessException       if method is inaccessible
                     * @throws javax.naming.NamingException if value is not accessible in naming context
                     * @throws java.lang.reflect.InvocationTargetException
                     *                                       if setter call fails
                     */
                    // @ts-ignore
                    static lookupMethodResource(context: javax.naming.Context, instance: java.lang.Object | any, method: java.lang.reflect.Method, name: java.lang.String | string, clazz: java.lang.Class<any>): void
                }
            }
        }
    }
}
