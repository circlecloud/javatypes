declare namespace org {
    namespace springframework {
        namespace remoting {
            namespace rmi {
                /**
                 * Convenient superclass for RMI-based remote exporters. Provides a facility
                 * to automatically wrap a given plain Java service object with an
                 * RmiInvocationWrapper, exposing the {@link RmiInvocationHandler} remote interface.
                 * <p>Using the RMI invoker mechanism, RMI communication operates at the {@link RmiInvocationHandler}
                 * level, sharing a common invoker stub for any number of services. Service interfaces are <i>not</i>
                 * required to extend {@code java.rmi.Remote} or declare {@code java.rmi.RemoteException}
                 * on all service methods. However, in and out parameters still have to be serializable.
                 * @author Juergen Hoeller
                 * @since 1.2.5
                 * @see RmiServiceExporter
                 * @see JndiRmiServiceExporter
                 */
                // @ts-ignore
                abstract class RmiBasedExporter extends org.springframework.remoting.support.RemoteInvocationBasedExporter {
                    // @ts-ignore
                    constructor()
                    /**
                     * Determine the object to export: either the service object itself
                     * or a RmiInvocationWrapper in case of a non-RMI service object.
                     * @return the RMI object to export
                     * @see #setService
                     * @see #setServiceInterface
                     */
                    // @ts-ignore
                    getObjectToExport(): java.rmi.Remote
                    /**
                     * Redefined here to be visible to RmiInvocationWrapper.
                     * Simply delegates to the corresponding superclass method.
                     */
                    // @ts-ignore
                    invoke(invocation: org.springframework.remoting.support.RemoteInvocation, targetObject: java.lang.Object | any): any
                }
            }
        }
    }
}
