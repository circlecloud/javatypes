declare namespace javax {
    namespace management {
        namespace remote {
            namespace rmi {
                // @ts-ignore
                class RMIConnectionImpl_Stub extends java.rmi.server.RemoteStub implements javax.management.remote.rmi.RMIConnection {
                    // @ts-ignore
                    constructor(ref: java.rmi.server.RemoteRef)
                    // @ts-ignore
                    addNotificationListener($param_ObjectName_1: javax.management.ObjectName, $param_ObjectName_2: javax.management.ObjectName, $param_MarshalledObject_3: java.rmi.MarshalledObject, $param_MarshalledObject_4: java.rmi.MarshalledObject, $param_Subject_5: javax.security.auth.Subject): void
                    // @ts-ignore
                    addNotificationListeners($param_arrayOf_ObjectName_1: javax.management.ObjectName[], $param_arrayOf_MarshalledObject_2: java.rmi.MarshalledObject[], $param_arrayOf_Subject_3: javax.security.auth.Subject[]): java.lang.Integer[]
                    // @ts-ignore
                    close(): void
                    // @ts-ignore
                    createMBean($param_String_1: string, $param_ObjectName_2: javax.management.ObjectName, $param_MarshalledObject_3: java.rmi.MarshalledObject, $param_arrayOf_String_4: string[], $param_Subject_5: javax.security.auth.Subject): javax.management.ObjectInstance
                    // @ts-ignore
                    createMBean($param_String_1: string, $param_ObjectName_2: javax.management.ObjectName, $param_ObjectName_3: javax.management.ObjectName, $param_MarshalledObject_4: java.rmi.MarshalledObject, $param_arrayOf_String_5: string[], $param_Subject_6: javax.security.auth.Subject): javax.management.ObjectInstance
                    // @ts-ignore
                    createMBean($param_String_1: string, $param_ObjectName_2: javax.management.ObjectName, $param_ObjectName_3: javax.management.ObjectName, $param_Subject_4: javax.security.auth.Subject): javax.management.ObjectInstance
                    // @ts-ignore
                    createMBean($param_String_1: string, $param_ObjectName_2: javax.management.ObjectName, $param_Subject_3: javax.security.auth.Subject): javax.management.ObjectInstance
                    // @ts-ignore
                    fetchNotifications($param_long_1: number /*long*/, $param_int_2: number /*int*/, $param_long_3: number /*long*/): javax.management.remote.NotificationResult
                    // @ts-ignore
                    getAttribute($param_ObjectName_1: javax.management.ObjectName, $param_String_2: string, $param_Subject_3: javax.security.auth.Subject): java.lang.Object
                    // @ts-ignore
                    getAttributes($param_ObjectName_1: javax.management.ObjectName, $param_arrayOf_String_2: string[], $param_Subject_3: javax.security.auth.Subject): javax.management.AttributeList
                    // @ts-ignore
                    getConnectionId(): java.lang.String
                    // @ts-ignore
                    getDefaultDomain($param_Subject_1: javax.security.auth.Subject): java.lang.String
                    // @ts-ignore
                    getDomains($param_Subject_1: javax.security.auth.Subject): java.lang.String[]
                    // @ts-ignore
                    getMBeanCount($param_Subject_1: javax.security.auth.Subject): java.lang.Integer
                    // @ts-ignore
                    getMBeanInfo($param_ObjectName_1: javax.management.ObjectName, $param_Subject_2: javax.security.auth.Subject): javax.management.MBeanInfo
                    // @ts-ignore
                    getObjectInstance($param_ObjectName_1: javax.management.ObjectName, $param_Subject_2: javax.security.auth.Subject): javax.management.ObjectInstance
                    // @ts-ignore
                    invoke($param_ObjectName_1: javax.management.ObjectName, $param_String_2: string, $param_MarshalledObject_3: java.rmi.MarshalledObject, $param_arrayOf_String_4: string[], $param_Subject_5: javax.security.auth.Subject): java.lang.Object
                    // @ts-ignore
                    isInstanceOf($param_ObjectName_1: javax.management.ObjectName, $param_String_2: string, $param_Subject_3: javax.security.auth.Subject): boolean
                    // @ts-ignore
                    isRegistered($param_ObjectName_1: javax.management.ObjectName, $param_Subject_2: javax.security.auth.Subject): boolean
                    // @ts-ignore
                    queryMBeans($param_ObjectName_1: javax.management.ObjectName, $param_MarshalledObject_2: java.rmi.MarshalledObject, $param_Subject_3: javax.security.auth.Subject): java.util.Set
                    // @ts-ignore
                    queryNames($param_ObjectName_1: javax.management.ObjectName, $param_MarshalledObject_2: java.rmi.MarshalledObject, $param_Subject_3: javax.security.auth.Subject): java.util.Set
                    // @ts-ignore
                    removeNotificationListener($param_ObjectName_1: javax.management.ObjectName, $param_ObjectName_2: javax.management.ObjectName, $param_MarshalledObject_3: java.rmi.MarshalledObject, $param_MarshalledObject_4: java.rmi.MarshalledObject, $param_Subject_5: javax.security.auth.Subject): void
                    // @ts-ignore
                    removeNotificationListener($param_ObjectName_1: javax.management.ObjectName, $param_ObjectName_2: javax.management.ObjectName, $param_Subject_3: javax.security.auth.Subject): void
                    // @ts-ignore
                    removeNotificationListeners($param_ObjectName_1: javax.management.ObjectName, $param_arrayOf_Integer_2: number[], $param_Subject_3: javax.security.auth.Subject): void
                    // @ts-ignore
                    setAttribute($param_ObjectName_1: javax.management.ObjectName, $param_MarshalledObject_2: java.rmi.MarshalledObject, $param_Subject_3: javax.security.auth.Subject): void
                    // @ts-ignore
                    setAttributes($param_ObjectName_1: javax.management.ObjectName, $param_MarshalledObject_2: java.rmi.MarshalledObject, $param_Subject_3: javax.security.auth.Subject): javax.management.AttributeList
                    // @ts-ignore
                    unregisterMBean($param_ObjectName_1: javax.management.ObjectName, $param_Subject_2: javax.security.auth.Subject): void
                }
            }
        }
    }
}
