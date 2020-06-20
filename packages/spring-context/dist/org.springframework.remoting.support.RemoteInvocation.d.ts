declare namespace org {
    namespace springframework {
        namespace remoting {
            namespace support {
                /**
                 * Encapsulates a remote invocation, providing core method invocation properties
                 * in a serializable fashion. Used for RMI and HTTP-based serialization invokers.
                 * <p>This is an SPI class, typically not used directly by applications.
                 * Can be subclassed for additional invocation parameters.
                 * <p>Both {@link RemoteInvocation} and {@link RemoteInvocationResult} are designed
                 * for use with standard Java serialization as well as JavaBean-style serialization.
                 * @author Juergen Hoeller
                 * @since 25.02.2004
                 * @see RemoteInvocationResult
                 * @see RemoteInvocationFactory
                 * @see RemoteInvocationExecutor
                 * @see org.springframework.remoting.rmi.RmiProxyFactoryBean
                 * @see org.springframework.remoting.rmi.RmiServiceExporter
                 * @see org.springframework.remoting.httpinvoker.HttpInvokerProxyFactoryBean
                 * @see org.springframework.remoting.httpinvoker.HttpInvokerServiceExporter
                 */
                // @ts-ignore
                class RemoteInvocation extends java.lang.Object implements java.io.Serializable {
                    /**
                     * Create a new RemoteInvocation for the given AOP method invocation.
                     * @param methodInvocation the AOP invocation to convert
                     */
                    // @ts-ignore
                    constructor(methodInvocation: MethodInvocation)
                    /**
                     * Create a new RemoteInvocation for the given parameters.
                     * @param methodName the name of the method to invoke
                     * @param parameterTypes the parameter types of the method
                     * @param arguments the arguments for the invocation
                     */
                    // @ts-ignore
                    constructor(methodName: string, parameterTypes: java.lang.Class[], arguments: any[])
                    /**
                     * Create a new RemoteInvocation for JavaBean-style deserialization
                     * (e.g. with Jackson).
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Set the name of the target method.
                     * <p>This setter is intended for JavaBean-style deserialization.
                     */
                    // @ts-ignore
                    setMethodName(methodName: string): void
                    /**
                     * Return the name of the target method.
                     */
                    // @ts-ignore
                    getMethodName(): java.lang.String
                    /**
                     * Set the parameter types of the target method.
                     * <p>This setter is intended for JavaBean-style deserialization.
                     */
                    // @ts-ignore
                    setParameterTypes(parameterTypes: java.lang.Class[]): void
                    /**
                     * Return the parameter types of the target method.
                     */
                    // @ts-ignore
                    getParameterTypes(): java.lang.Class[]
                    /**
                     * Set the arguments for the target method call.
                     * <p>This setter is intended for JavaBean-style deserialization.
                     */
                    // @ts-ignore
                    setArguments(arguments: any[]): void
                    /**
                     * Return the arguments for the target method call.
                     */
                    // @ts-ignore
                    getArguments(): java.lang.Object[]
                    /**
                     * Add an additional invocation attribute. Useful to add additional
                     * invocation context without having to subclass RemoteInvocation.
                     * <p>Attribute keys have to be unique, and no overriding of existing
                     * attributes is allowed.
                     * <p>The implementation avoids to unnecessarily create the attributes
                     * Map, to minimize serialization size.
                     * @param key the attribute key
                     * @param value the attribute value
                     * @throws IllegalStateException if the key is already bound
                     */
                    // @ts-ignore
                    addAttribute(key: string, value: java.io.Serializable): void
                    /**
                     * Retrieve the attribute for the given key, if any.
                     * <p>The implementation avoids to unnecessarily create the attributes
                     * Map, to minimize serialization size.
                     * @param key the attribute key
                     * @return the attribute value, or {#code null} if not defined
                     */
                    // @ts-ignore
                    getAttribute(key: string): java.io.Serializable
                    /**
                     * Set the attributes Map. Only here for special purposes:
                     * Preferably, use {@link #addAttribute} and {@link #getAttribute}.
                     * @param attributes the attributes Map
                     * @see #addAttribute
                     * @see #getAttribute
                     */
                    // @ts-ignore
                    setAttributes(attributes: java.util.Map<java.lang.String, java.io.Serializable>): void
                    /**
                     * Return the attributes Map. Mainly here for debugging purposes:
                     * Preferably, use {@link #addAttribute} and {@link #getAttribute}.
                     * @return the attributes Map, or {#code null} if none created
                     * @see #addAttribute
                     * @see #getAttribute
                     */
                    // @ts-ignore
                    getAttributes(): java.util.Map<java.lang.String, java.io.Serializable>
                    /**
                     * Perform this invocation on the given target object.
                     * Typically called when a RemoteInvocation is received on the server.
                     * @param targetObject the target object to apply the invocation to
                     * @return the invocation result
                     * @throws NoSuchMethodException if the method name could not be resolved
                     * @throws IllegalAccessException if the method could not be accessed
                     * @throws InvocationTargetException if the method invocation resulted in an exception
                     * @see java.lang.reflect.Method#invoke
                     */
                    // @ts-ignore
                    invoke(targetObject: any): java.lang.Object
                    // @ts-ignore
                    toString(): java.lang.String
                }
            }
        }
    }
}
