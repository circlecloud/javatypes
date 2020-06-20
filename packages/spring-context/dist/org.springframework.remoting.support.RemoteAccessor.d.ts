declare namespace org {
    namespace springframework {
        namespace remoting {
            namespace support {
                /**
                 * Abstract base class for classes that access a remote service.
                 * Provides a "serviceInterface" bean property.
                 * <p>Note that the service interface being used will show some signs of
                 * remotability, like the granularity of method calls that it offers.
                 * Furthermore, it has to have serializable arguments etc.
                 * <p>Accessors are supposed to throw Spring's generic
                 * {@link org.springframework.remoting.RemoteAccessException} in case
                 * of remote invocation failure, provided that the service interface
                 * does not declare {@code java.rmi.RemoteException}.
                 * @author Juergen Hoeller
                 * @since 13.05.2003
                 * @see org.springframework.remoting.RemoteAccessException
                 * @see java.rmi.RemoteException
                 */
                // @ts-ignore
                class RemoteAccessor extends org.springframework.remoting.support.RemotingSupport {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set the interface of the service to access.
                     * The interface must be suitable for the particular service and remoting strategy.
                     * <p>Typically required to be able to create a suitable service proxy,
                     * but can also be optional if the lookup returns a typed proxy.
                     */
                    // @ts-ignore
                    setServiceInterface(serviceInterface: java.lang.Class<any>): void
                    /**
                     * Return the interface of the service to access.
                     */
                    // @ts-ignore
                    getServiceInterface(): java.lang.Class<?>
                }
            }
        }
    }
}
