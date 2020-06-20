declare namespace org {
    namespace springframework {
        namespace ejb {
            namespace access {
                /**
                 * Base class for interceptors proxying remote Stateless Session Beans.
                 * Designed for EJB 2.x, but works for EJB 3 Session Beans as well.
                 * <p>Such an interceptor must be the last interceptor in the advice chain.
                 * In this case, there is no target object.
                 * @author Rod Johnson
                 * @author Juergen Hoeller
                 */
                // @ts-ignore
                class AbstractRemoteSlsbInvokerInterceptor extends org.springframework.ejb.access.AbstractSlsbInvokerInterceptor {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set whether to refresh the EJB home on connect failure.
                     * Default is "false".
                     * <p>Can be turned on to allow for hot restart of the EJB server.
                     * If a cached EJB home throws an RMI exception that indicates a
                     * remote connect failure, a fresh home will be fetched and the
                     * invocation will be retried.
                     * @see java.rmi.ConnectException
                     * @see java.rmi.ConnectIOException
                     * @see java.rmi.NoSuchObjectException
                     */
                    // @ts-ignore
                    setRefreshHomeOnConnectFailure(refreshHomeOnConnectFailure: boolean): void
                    // @ts-ignore
                    isHomeRefreshable(): boolean
                    /**
                     * Check for EJB3-style home object that serves as EJB component directly.
                     */
                    // @ts-ignore
                    getCreateMethod(home: any): java.lang.reflect.Method
                    /**
                     * Fetches an EJB home object and delegates to {@code doInvoke}.
                     * <p>If configured to refresh on connect failure, it will call
                     * {@link #refreshAndRetry} on corresponding RMI exceptions.
                     * @see #getHome
                     * @see #doInvoke
                     * @see #refreshAndRetry
                     */
                    // @ts-ignore
                    invokeInContext(invocation: MethodInvocation): java.lang.Object
                    /**
                     * Determine whether the given RMI exception indicates a connect failure.
                     * <p>The default implementation delegates to RmiClientInterceptorUtils.
                     * @param ex the RMI exception to check
                     * @return whether the exception should be treated as connect failure
                     * @see org.springframework.remoting.rmi.RmiClientInterceptorUtils#isConnectFailure
                     */
                    // @ts-ignore
                    isConnectFailure(ex: java.rmi.RemoteException): boolean
                    /**
                     * Refresh the EJB home object and retry the given invocation.
                     * Called by invoke on connect failure.
                     * @param invocation the AOP method invocation
                     * @return the invocation result, if any
                     * @throws Throwable in case of invocation failure
                     * @see #invoke
                     */
                    // @ts-ignore
                    refreshAndRetry(invocation: MethodInvocation): java.lang.Object
                    /**
                     * Perform the given invocation on the current EJB home.
                     * Template method to be implemented by subclasses.
                     * @param invocation the AOP method invocation
                     * @return the invocation result, if any
                     * @throws Throwable in case of invocation failure
                     * @see #getHome
                     * @see #newSessionBeanInstance
                     */
                    // @ts-ignore
                    abstract doInvoke(invocation: MethodInvocation): java.lang.Object
                    /**
                     * Return a new instance of the stateless session bean.
                     * To be invoked by concrete remote SLSB invoker subclasses.
                     * <p>Can be overridden to change the algorithm.
                     * @throws NamingException if thrown by JNDI
                     * @throws InvocationTargetException if thrown by the create method
                     * @see #create
                     */
                    // @ts-ignore
                    newSessionBeanInstance(): java.lang.Object
                    /**
                     * Remove the given EJB instance.
                     * To be invoked by concrete remote SLSB invoker subclasses.
                     * @param ejb the EJB instance to remove
                     * @see javax.ejb.EJBObject#remove
                     */
                    // @ts-ignore
                    removeSessionBeanInstance(ejb: EJBObject): void
                }
            }
        }
    }
}
