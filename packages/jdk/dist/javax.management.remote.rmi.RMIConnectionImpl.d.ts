declare namespace javax {
    namespace management {
        namespace remote {
            namespace rmi {
                /**
                 * <p>Implementation of the {@link RMIConnection} interface.  User
                 * code will not usually reference this class.</p>
                 * @since 1.5
                 */
                // @ts-ignore
                class RMIConnectionImpl extends java.lang.Object implements javax.management.remote.rmi.RMIConnection, java.rmi.server.Unreferenced {
                    /**
                     * Constructs a new {@link RMIConnection}. This connection can be
                     * used with either the JRMP or IIOP transport. This object does
                     * not export itself: it is the responsibility of the caller to
                     * export it appropriately (see {@link
                     * RMIJRMPServerImpl#makeClient(String,Subject)} and {@link
                     * RMIIIOPServerImpl#makeClient(String,Subject)}.
                     * @param rmiServer The RMIServerImpl object for which this
                     *  connection is created.  The behavior is unspecified if this
                     *  parameter is null.
                     * @param connectionId The ID for this connection.  The behavior
                     *  is unspecified if this parameter is null.
                     * @param defaultClassLoader The default ClassLoader to be used
                     *  when deserializing marshalled objects.  Can be null, to signify
                     *  the bootstrap class loader.
                     * @param subject the authenticated subject to be used for
                     *  authorization.  Can be null, to signify that no subject has
                     *  been authenticated.
                     * @param env the environment containing attributes for the new
                     *  <code>RMIServerImpl</code>.  Can be null, equivalent to an
                     *  empty map.
                     */
                    // @ts-ignore
                    constructor(rmiServer: javax.management.remote.rmi.RMIServerImpl, connectionId: string, defaultClassLoader: java.lang.ClassLoader, subject: javax.security.auth.Subject, env: java.util.Map<java.lang.String, any>)
                    // @ts-ignore
                    getConnectionId(): java.lang.String
                    // @ts-ignore
                    close(): void
                    // @ts-ignore
                    unreferenced(): void
                    // @ts-ignore
                    createMBean(className: string, name: javax.management.ObjectName, delegationSubject: javax.security.auth.Subject): javax.management.ObjectInstance
                    // @ts-ignore
                    createMBean(className: string, name: javax.management.ObjectName, loaderName: javax.management.ObjectName, delegationSubject: javax.security.auth.Subject): javax.management.ObjectInstance
                    // @ts-ignore
                    createMBean(className: string, name: javax.management.ObjectName, params: java.rmi.MarshalledObject, signature: string[], delegationSubject: javax.security.auth.Subject): javax.management.ObjectInstance
                    // @ts-ignore
                    createMBean(className: string, name: javax.management.ObjectName, loaderName: javax.management.ObjectName, params: java.rmi.MarshalledObject, signature: string[], delegationSubject: javax.security.auth.Subject): javax.management.ObjectInstance
                    // @ts-ignore
                    unregisterMBean(name: javax.management.ObjectName, delegationSubject: javax.security.auth.Subject): void
                    // @ts-ignore
                    getObjectInstance(name: javax.management.ObjectName, delegationSubject: javax.security.auth.Subject): javax.management.ObjectInstance
                    // @ts-ignore
                    queryMBeans(name: javax.management.ObjectName, query: java.rmi.MarshalledObject, delegationSubject: javax.security.auth.Subject): java.util.Set<javax.management.ObjectInstance>
                    // @ts-ignore
                    queryNames(name: javax.management.ObjectName, query: java.rmi.MarshalledObject, delegationSubject: javax.security.auth.Subject): java.util.Set<javax.management.ObjectName>
                    // @ts-ignore
                    isRegistered(name: javax.management.ObjectName, delegationSubject: javax.security.auth.Subject): boolean
                    // @ts-ignore
                    getMBeanCount(delegationSubject: javax.security.auth.Subject): java.lang.Integer
                    // @ts-ignore
                    getAttribute(name: javax.management.ObjectName, attribute: string, delegationSubject: javax.security.auth.Subject): java.lang.Object
                    // @ts-ignore
                    getAttributes(name: javax.management.ObjectName, attributes: string[], delegationSubject: javax.security.auth.Subject): javax.management.AttributeList
                    // @ts-ignore
                    setAttribute(name: javax.management.ObjectName, attribute: java.rmi.MarshalledObject, delegationSubject: javax.security.auth.Subject): void
                    // @ts-ignore
                    setAttributes(name: javax.management.ObjectName, attributes: java.rmi.MarshalledObject, delegationSubject: javax.security.auth.Subject): javax.management.AttributeList
                    // @ts-ignore
                    invoke(name: javax.management.ObjectName, operationName: string, params: java.rmi.MarshalledObject, signature: string[], delegationSubject: javax.security.auth.Subject): java.lang.Object
                    // @ts-ignore
                    getDefaultDomain(delegationSubject: javax.security.auth.Subject): java.lang.String
                    // @ts-ignore
                    getDomains(delegationSubject: javax.security.auth.Subject): java.lang.String[]
                    // @ts-ignore
                    getMBeanInfo(name: javax.management.ObjectName, delegationSubject: javax.security.auth.Subject): javax.management.MBeanInfo
                    // @ts-ignore
                    isInstanceOf(name: javax.management.ObjectName, className: string, delegationSubject: javax.security.auth.Subject): boolean
                    // @ts-ignore
                    addNotificationListeners(names: javax.management.ObjectName[], filters: java.rmi.MarshalledObject[], delegationSubjects: javax.security.auth.Subject[]): java.lang.Integer[]
                    // @ts-ignore
                    addNotificationListener(name: javax.management.ObjectName, listener: javax.management.ObjectName, filter: java.rmi.MarshalledObject, handback: java.rmi.MarshalledObject, delegationSubject: javax.security.auth.Subject): void
                    // @ts-ignore
                    removeNotificationListeners(name: javax.management.ObjectName, listenerIDs: number[], delegationSubject: javax.security.auth.Subject): void
                    // @ts-ignore
                    removeNotificationListener(name: javax.management.ObjectName, listener: javax.management.ObjectName, delegationSubject: javax.security.auth.Subject): void
                    // @ts-ignore
                    removeNotificationListener(name: javax.management.ObjectName, listener: javax.management.ObjectName, filter: java.rmi.MarshalledObject, handback: java.rmi.MarshalledObject, delegationSubject: javax.security.auth.Subject): void
                    // @ts-ignore
                    fetchNotifications(clientSequenceNumber: number /*long*/, maxNotifications: number /*int*/, timeout: number /*long*/): javax.management.remote.NotificationResult
                    /**
                     * <p>Returns a string representation of this object.  In general,
                     * the <code>toString</code> method returns a string that
                     * "textually represents" this object. The result should be a
                     * concise but informative representation that is easy for a
                     * person to read.</p>
                     * @return a String representation of this object.
                     */
                    // @ts-ignore
                    toString(): java.lang.String
                }
            }
        }
    }
}
