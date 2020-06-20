declare namespace org {
    namespace springframework {
        namespace remoting {
            namespace rmi {
                /**
                 * Interface for RMI invocation handlers instances on the server,
                 * wrapping exported services. A client uses a stub implementing
                 * this interface to access such a service.
                 * <p>This is an SPI interface, not to be used directly by applications.
                 * @author Juergen Hoeller
                 * @since 14.05.2003
                 */
                // @ts-ignore
                interface RmiInvocationHandler extends java.rmi.Remote {
                    /**
                     * Return the name of the target interface that this invoker operates on.
                     * @return the name of the target interface, or {#code null} if none
                     * @throws RemoteException in case of communication errors
                     * @see RmiServiceExporter#getServiceInterface()
                     */
                    // @ts-ignore
                    getTargetInterfaceName(): java.lang.String
                    /**
                     * Apply the given invocation to the target object.
                     * <p>Called by
                     * {@link RmiClientInterceptor#doInvoke(org.aopalliance.intercept.MethodInvocation, RmiInvocationHandler)}.
                     * @param invocation object that encapsulates invocation parameters
                     * @return the object returned from the invoked method, if any
                     * @throws RemoteException in case of communication errors
                     * @throws NoSuchMethodException if the method name could not be resolved
                     * @throws IllegalAccessException if the method could not be accessed
                     * @throws InvocationTargetException if the method invocation resulted in an exception
                     */
                    // @ts-ignore
                    invoke(invocation: org.springframework.remoting.support.RemoteInvocation): java.lang.Object
                }
            }
        }
    }
}
