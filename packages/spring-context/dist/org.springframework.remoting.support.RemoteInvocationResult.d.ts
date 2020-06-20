declare namespace org {
    namespace springframework {
        namespace remoting {
            namespace support {
                /**
                 * Encapsulates a remote invocation result, holding a result value or an exception.
                 * Used for HTTP-based serialization invokers.
                 * <p>This is an SPI class, typically not used directly by applications.
                 * Can be subclassed for additional invocation parameters.
                 * <p>Both {@link RemoteInvocation} and {@link RemoteInvocationResult} are designed
                 * for use with standard Java serialization as well as JavaBean-style serialization.
                 * @author Juergen Hoeller
                 * @since 1.1
                 * @see RemoteInvocation
                 */
                // @ts-ignore
                class RemoteInvocationResult extends java.lang.Object implements java.io.Serializable {
                    /**
                     * Create a new RemoteInvocationResult for the given result value.
                     * @param value the result value returned by a successful invocation
                     *  of the target method
                     */
                    // @ts-ignore
                    constructor(value: any)
                    /**
                     * Create a new RemoteInvocationResult for the given exception.
                     * @param exception the exception thrown by an unsuccessful invocation
                     *  of the target method
                     */
                    // @ts-ignore
                    constructor(exception: Error)
                    /**
                     * Create a new RemoteInvocationResult for JavaBean-style deserialization
                     * (e.g. with Jackson).
                     * @see #setValue
                     * @see #setException
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Set the result value returned by a successful invocation of the
                     * target method, if any.
                     * <p>This setter is intended for JavaBean-style deserialization.
                     * Use {@link #RemoteInvocationResult(Object)} otherwise.
                     * @see #RemoteInvocationResult()
                     */
                    // @ts-ignore
                    setValue(value: any): void
                    /**
                     * Return the result value returned by a successful invocation
                     * of the target method, if any.
                     * @see #hasException
                     */
                    // @ts-ignore
                    getValue(): java.lang.Object
                    /**
                     * Set the exception thrown by an unsuccessful invocation of the
                     * target method, if any.
                     * <p>This setter is intended for JavaBean-style deserialization.
                     * Use {@link #RemoteInvocationResult(Throwable)} otherwise.
                     * @see #RemoteInvocationResult()
                     */
                    // @ts-ignore
                    setException(exception: Error): void
                    /**
                     * Return the exception thrown by an unsuccessful invocation
                     * of the target method, if any.
                     * @see #hasException
                     */
                    // @ts-ignore
                    getException(): java.lang.Throwable
                    /**
                     * Return whether this invocation result holds an exception.
                     * If this returns {@code false}, the result value applies
                     * (even if it is {@code null}).
                     * @see #getValue
                     * @see #getException
                     */
                    // @ts-ignore
                    hasException(): boolean
                    /**
                     * Return whether this invocation result holds an InvocationTargetException,
                     * thrown by an invocation of the target method itself.
                     * @see #hasException()
                     */
                    // @ts-ignore
                    hasInvocationTargetException(): boolean
                    /**
                     * Recreate the invocation result, either returning the result value
                     * in case of a successful invocation of the target method, or
                     * rethrowing the exception thrown by the target method.
                     * @return the result value, if any
                     * @throws Throwable the exception, if any
                     */
                    // @ts-ignore
                    recreate(): java.lang.Object
                }
            }
        }
    }
}
