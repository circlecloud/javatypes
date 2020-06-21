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
                    constructor(rmiServer: javax.management.remote.rmi.RMIServerImpl, connectionId: java.lang.String | string, defaultClassLoader: java.lang.ClassLoader, subject: javax.security.auth.Subject, env: java.util.Map<java.lang.String | string, any>)
                    // @ts-ignore
                    public getConnectionId(): string
                    // @ts-ignore
                    public close(): void
                    // @ts-ignore
                    public unreferenced(): void
                    // @ts-ignore
                    public createMBean(className: java.lang.String | string, name: javax.management.ObjectName, delegationSubject: javax.security.auth.Subject): javax.management.ObjectInstance
                    // @ts-ignore
                    public createMBean(className: java.lang.String | string, name: javax.management.ObjectName, loaderName: javax.management.ObjectName, delegationSubject: javax.security.auth.Subject): javax.management.ObjectInstance
                    // @ts-ignore
                    public createMBean(className: java.lang.String | string, name: javax.management.ObjectName, params: java.rmi.MarshalledObject<any>, signature: java.lang.String[] | string[], delegationSubject: javax.security.auth.Subject): javax.management.ObjectInstance
                    // @ts-ignore
                    public createMBean(className: java.lang.String | string, name: javax.management.ObjectName, loaderName: javax.management.ObjectName, params: java.rmi.MarshalledObject<any>, signature: java.lang.String[] | string[], delegationSubject: javax.security.auth.Subject): javax.management.ObjectInstance
                    // @ts-ignore
                    public unregisterMBean(name: javax.management.ObjectName, delegationSubject: javax.security.auth.Subject): void
                    // @ts-ignore
                    public getObjectInstance(name: javax.management.ObjectName, delegationSubject: javax.security.auth.Subject): javax.management.ObjectInstance
                    // @ts-ignore
                    public queryMBeans(name: javax.management.ObjectName, query: java.rmi.MarshalledObject<any>, delegationSubject: javax.security.auth.Subject): Array<javax.management.ObjectInstance>
                    // @ts-ignore
                    public queryNames(name: javax.management.ObjectName, query: java.rmi.MarshalledObject<any>, delegationSubject: javax.security.auth.Subject): Array<javax.management.ObjectName>
                    // @ts-ignore
                    public isRegistered(name: javax.management.ObjectName, delegationSubject: javax.security.auth.Subject): boolean
                    // @ts-ignore
                    public getMBeanCount(delegationSubject: javax.security.auth.Subject): number
                    // @ts-ignore
                    public getAttribute(name: javax.management.ObjectName, attribute: java.lang.String | string, delegationSubject: javax.security.auth.Subject): any
                    // @ts-ignore
                    public getAttributes(name: javax.management.ObjectName, attributes: java.lang.String[] | string[], delegationSubject: javax.security.auth.Subject): javax.management.AttributeList
                    // @ts-ignore
                    public setAttribute(name: javax.management.ObjectName, attribute: java.rmi.MarshalledObject<any>, delegationSubject: javax.security.auth.Subject): void
                    // @ts-ignore
                    public setAttributes(name: javax.management.ObjectName, attributes: java.rmi.MarshalledObject<any>, delegationSubject: javax.security.auth.Subject): javax.management.AttributeList
                    // @ts-ignore
                    public invoke(name: javax.management.ObjectName, operationName: java.lang.String | string, params: java.rmi.MarshalledObject<any>, signature: java.lang.String[] | string[], delegationSubject: javax.security.auth.Subject): any
                    // @ts-ignore
                    public getDefaultDomain(delegationSubject: javax.security.auth.Subject): string
                    // @ts-ignore
                    public getDomains(delegationSubject: javax.security.auth.Subject): string[]
                    // @ts-ignore
                    public getMBeanInfo(name: javax.management.ObjectName, delegationSubject: javax.security.auth.Subject): javax.management.MBeanInfo
                    // @ts-ignore
                    public isInstanceOf(name: javax.management.ObjectName, className: java.lang.String | string, delegationSubject: javax.security.auth.Subject): boolean
                    // @ts-ignore
                    public addNotificationListeners(names: javax.management.ObjectName[], filters: java.rmi.MarshalledObject<any>[], delegationSubjects: javax.security.auth.Subject[]): number[]
                    // @ts-ignore
                    public addNotificationListener(name: javax.management.ObjectName, listener: javax.management.ObjectName, filter: java.rmi.MarshalledObject<any>, handback: java.rmi.MarshalledObject<any>, delegationSubject: javax.security.auth.Subject): void
                    // @ts-ignore
                    public removeNotificationListeners(name: javax.management.ObjectName, listenerIDs: java.lang.Integer[] | number[], delegationSubject: javax.security.auth.Subject): void
                    // @ts-ignore
                    public removeNotificationListener(name: javax.management.ObjectName, listener: javax.management.ObjectName, delegationSubject: javax.security.auth.Subject): void
                    // @ts-ignore
                    public removeNotificationListener(name: javax.management.ObjectName, listener: javax.management.ObjectName, filter: java.rmi.MarshalledObject<any>, handback: java.rmi.MarshalledObject<any>, delegationSubject: javax.security.auth.Subject): void
                    // @ts-ignore
                    public fetchNotifications(clientSequenceNumber: number /*long*/, maxNotifications: number /*int*/, timeout: number /*long*/): javax.management.remote.NotificationResult
                    /**
                     * <p>Returns a string representation of this object.  In general,
                     * the <code>toString</code> method returns a string that
                     * "textually represents" this object. The result should be a
                     * concise but informative representation that is easy for a
                     * person to read.</p>
                     * @return a String representation of this object.
                     */
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
