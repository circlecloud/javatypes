declare namespace org {
    namespace springframework {
        namespace jmx {
            namespace support {
                /**
                 * Collection of generic utility methods to support Spring JMX.
                 * Includes a convenient method to locate an MBeanServer.
                 * @author Rob Harrop
                 * @author Juergen Hoeller
                 * @since 1.2
                 * @see #locateMBeanServer
                 */
                // @ts-ignore
                abstract class JmxUtils extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * The key used when extending an existing {@link ObjectName} with the
                     * identity hash code of its corresponding managed resource.
                     */
                    // @ts-ignore
                    public static readonly IDENTITY_OBJECT_NAME_KEY: java.lang.String | string
                    /**
                     * Attempt to find a locally running {@code MBeanServer}. Fails if no
                     * {@code MBeanServer} can be found. Logs a warning if more than one
                     * {@code MBeanServer} found, returning the first one from the list.
                     * @return the {#code MBeanServer} if found
                     * @throws MBeanServerNotFoundException if no {#code MBeanServer} could be found
                     * @see javax.management.MBeanServerFactory#findMBeanServer
                     */
                    // @ts-ignore
                    public static locateMBeanServer(): javax.management.MBeanServer
                    /**
                     * Attempt to find a locally running {@code MBeanServer}. Fails if no
                     * {@code MBeanServer} can be found. Logs a warning if more than one
                     * {@code MBeanServer} found, returning the first one from the list.
                     * @param agentId the agent identifier of the MBeanServer to retrieve.
                     *  If this parameter is {#code null}, all registered MBeanServers are considered.
                     *  If the empty String is given, the platform MBeanServer will be returned.
                     * @return the {#code MBeanServer} if found
                     * @throws MBeanServerNotFoundException if no {#code MBeanServer} could be found
                     * @see javax.management.MBeanServerFactory#findMBeanServer(String)
                     */
                    // @ts-ignore
                    public static locateMBeanServer(agentId: java.lang.String | string): javax.management.MBeanServer
                    /**
                     * Convert an array of {@code MBeanParameterInfo} into an array of
                     * {@code Class} instances corresponding to the parameters.
                     * @param paramInfo the JMX parameter info
                     * @return the parameter types as classes
                     * @throws ClassNotFoundException if a parameter type could not be resolved
                     */
                    // @ts-ignore
                    public static parameterInfoToTypes(paramInfo: javax.management.MBeanParameterInfo[]): java.lang.Class<any>[]
                    /**
                     * Convert an array of {@code MBeanParameterInfo} into an array of
                     * {@code Class} instances corresponding to the parameters.
                     * @param paramInfo the JMX parameter info
                     * @param classLoader the ClassLoader to use for loading parameter types
                     * @return the parameter types as classes
                     * @throws ClassNotFoundException if a parameter type could not be resolved
                     */
                    // @ts-ignore
                    public static parameterInfoToTypes(paramInfo: javax.management.MBeanParameterInfo[], classLoader: java.lang.ClassLoader): java.lang.Class<any>[]
                    /**
                     * Create a {@code String[]} representing the argument signature of a
                     * method. Each element in the array is the fully qualified class name
                     * of the corresponding argument in the methods signature.
                     * @param method the method to build an argument signature for
                     * @return the signature as array of argument types
                     */
                    // @ts-ignore
                    public static getMethodSignature(method: java.lang.reflect.Method): string[]
                    /**
                     * Return the JMX attribute name to use for the given JavaBeans property.
                     * <p>When using strict casing, a JavaBean property with a getter method
                     * such as {@code getFoo()} translates to an attribute called
                     * {@code Foo}. With strict casing disabled, {@code getFoo()}
                     * would translate to just {@code foo}.
                     * @param property the JavaBeans property descriptor
                     * @param useStrictCasing whether to use strict casing
                     * @return the JMX attribute name to use
                     */
                    // @ts-ignore
                    public static getAttributeName(property: java.beans.PropertyDescriptor, useStrictCasing: boolean): string
                    /**
                     * Append an additional key/value pair to an existing {@link ObjectName} with the key being
                     * the static value {@code identity} and the value being the identity hash code of the
                     * managed resource being exposed on the supplied {@link ObjectName}. This can be used to
                     * provide a unique {@link ObjectName} for each distinct instance of a particular bean or
                     * class. Useful when generating {@link ObjectName ObjectNames} at runtime for a set of
                     * managed resources based on the template value supplied by a
                     * {@link org.springframework.jmx.export.naming.ObjectNamingStrategy}.
                     * @param objectName the original JMX ObjectName
                     * @param managedResource the MBean instance
                     * @return an ObjectName with the MBean identity added
                     * @throws MalformedObjectNameException in case of an invalid object name specification
                     * @see org.springframework.util.ObjectUtils#getIdentityHexString(Object)
                     */
                    // @ts-ignore
                    public static appendIdentityToObjectName(objectName: javax.management.ObjectName, managedResource: java.lang.Object | any): javax.management.ObjectName
                    /**
                     * Return the class or interface to expose for the given bean.
                     * This is the class that will be searched for attributes and operations
                     * (for example, checked for annotations).
                     * <p>This implementation returns the superclass for a CGLIB proxy and
                     * the class of the given bean else (for a JDK proxy or a plain bean class).
                     * @param managedBean the bean instance (might be an AOP proxy)
                     * @return the bean class to expose
                     * @see org.springframework.util.ClassUtils#getUserClass(Object)
                     */
                    // @ts-ignore
                    public static getClassToExpose(managedBean: java.lang.Object | any): java.lang.Class<any>
                    /**
                     * Return the class or interface to expose for the given bean class.
                     * This is the class that will be searched for attributes and operations
                     * (for example, checked for annotations).
                     * <p>This implementation returns the superclass for a CGLIB proxy and
                     * the class of the given bean else (for a JDK proxy or a plain bean class).
                     * @param clazz the bean class (might be an AOP proxy class)
                     * @return the bean class to expose
                     * @see org.springframework.util.ClassUtils#getUserClass(Class)
                     */
                    // @ts-ignore
                    public static getClassToExpose(clazz: java.lang.Class<any>): java.lang.Class<any>
                    /**
                     * Determine whether the given bean class qualifies as an MBean as-is.
                     * <p>This implementation checks for {@link javax.management.DynamicMBean}
                     * classes as well as classes with corresponding "*MBean" interface
                     * (Standard MBeans) or corresponding "*MXBean" interface (Java 6 MXBeans).
                     * @param clazz the bean class to analyze
                     * @return whether the class qualifies as an MBean
                     * @see org.springframework.jmx.export.MBeanExporter#isMBean(Class)
                     */
                    // @ts-ignore
                    public static isMBean(clazz: java.lang.Class<any>): boolean
                    /**
                     * Return the Standard MBean interface for the given class, if any
                     * (that is, an interface whose name matches the class name of the
                     * given class but with suffix "MBean").
                     * @param clazz the class to check
                     * @return the Standard MBean interface for the given class
                     */
                    // @ts-ignore
                    public static getMBeanInterface(clazz: java.lang.Class<any>): java.lang.Class<any>
                    /**
                     * Return the Java 6 MXBean interface exists for the given class, if any
                     * (that is, an interface whose name ends with "MXBean" and/or
                     * carries an appropriate MXBean annotation).
                     * @param clazz the class to check
                     * @return whether there is an MXBean interface for the given class
                     */
                    // @ts-ignore
                    public static getMXBeanInterface(clazz: java.lang.Class<any>): java.lang.Class<any>
                }
            }
        }
    }
}
