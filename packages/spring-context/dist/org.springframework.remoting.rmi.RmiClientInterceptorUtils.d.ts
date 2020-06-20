declare namespace org {
    namespace springframework {
        namespace remoting {
            namespace rmi {
                /**
                 * Factored-out methods for performing invocations within an RMI client.
                 * Can handle both RMI and non-RMI service interfaces working on an RMI stub.
                 * <p>Note: This is an SPI class, not intended to be used by applications.
                 * @author Juergen Hoeller
                 * @since 1.1
                 */
                // @ts-ignore
                class RmiClientInterceptorUtils extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Perform a raw method invocation on the given RMI stub,
                     * letting reflection exceptions through as-is.
                     * @param invocation the AOP MethodInvocation
                     * @param stub the RMI stub
                     * @return the invocation result, if any
                     * @throws InvocationTargetException if thrown by reflection
                     */
                    // @ts-ignore
                    invokeRemoteMethod(invocation: MethodInvocation, stub: any): java.lang.Object
                    /**
                     * Wrap the given arbitrary exception that happened during remote access
                     * in either a RemoteException or a Spring RemoteAccessException (if the
                     * method signature does not support RemoteException).
                     * <p>Only call this for remote access exceptions, not for exceptions
                     * thrown by the target service itself!
                     * @param method the invoked method
                     * @param ex the exception that happened, to be used as cause for the
                     *  RemoteAccessException or RemoteException
                     * @param message the message for the RemoteAccessException respectively
                     *  RemoteException
                     * @return the exception to be thrown to the caller
                     */
                    // @ts-ignore
                    convertRmiAccessException(method: java.lang.reflect.Method, ex: Error, message: string): java.lang.Exception
                    /**
                     * Convert the given RemoteException that happened during remote access
                     * to Spring's RemoteAccessException if the method signature does not
                     * support RemoteException. Else, return the original RemoteException.
                     * @param method the invoked method
                     * @param ex the RemoteException that happened
                     * @param serviceName the name of the service (for debugging purposes)
                     * @return the exception to be thrown to the caller
                     */
                    // @ts-ignore
                    convertRmiAccessException(method: java.lang.reflect.Method, ex: java.rmi.RemoteException, serviceName: string): java.lang.Exception
                    /**
                     * Convert the given RemoteException that happened during remote access
                     * to Spring's RemoteAccessException if the method signature does not
                     * support RemoteException. Else, return the original RemoteException.
                     * @param method the invoked method
                     * @param ex the RemoteException that happened
                     * @param isConnectFailure whether the given exception should be considered
                     *  a connect failure
                     * @param serviceName the name of the service (for debugging purposes)
                     * @return the exception to be thrown to the caller
                     */
                    // @ts-ignore
                    convertRmiAccessException(method: java.lang.reflect.Method, ex: java.rmi.RemoteException, isConnectFailure: boolean, serviceName: string): java.lang.Exception
                    /**
                     * Determine whether the given RMI exception indicates a connect failure.
                     * <p>Treats RMI's ConnectException, ConnectIOException, UnknownHostException,
                     * NoSuchObjectException and StubNotFoundException as connect failure.
                     * @param ex the RMI exception to check
                     * @return whether the exception should be treated as connect failure
                     * @see java.rmi.ConnectException
                     * @see java.rmi.ConnectIOException
                     * @see java.rmi.UnknownHostException
                     * @see java.rmi.NoSuchObjectException
                     * @see java.rmi.StubNotFoundException
                     */
                    // @ts-ignore
                    isConnectFailure(ex: java.rmi.RemoteException): boolean
                }
            }
        }
    }
}
