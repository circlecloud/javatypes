declare namespace javax {
    namespace management {
        namespace remote {
            namespace rmi {
                // @ts-ignore
                class RMIConnectionImpl_Stub extends java.rmi.server.RemoteStub implements javax.management.remote.rmi.RMIConnection {
                    // @ts-ignore
                    constructor(ref: java.rmi.server.RemoteRef)
                    // @ts-ignore
                    public addNotificationListener($param_ObjectName_1: javax.management.ObjectName, $param_ObjectName_2: javax.management.ObjectName, $param_MarshalledObject_3: java.rmi.MarshalledObject<any>, $param_MarshalledObject_4: java.rmi.MarshalledObject<any>, $param_Subject_5: javax.security.auth.Subject): void
                    // @ts-ignore
                    public addNotificationListeners($param_arrayOf_ObjectName_1: javax.management.ObjectName[], $param_arrayOf_MarshalledObject_2: java.rmi.MarshalledObject<any>[], $param_arrayOf_Subject_3: javax.security.auth.Subject[]): number[]
                    // @ts-ignore
                    public close(): void
                    // @ts-ignore
                    public createMBean($param_String_1: java.lang.String | string, $param_ObjectName_2: javax.management.ObjectName, $param_MarshalledObject_3: java.rmi.MarshalledObject<any>, $param_arrayOf_String_4: java.lang.String[] | string[], $param_Subject_5: javax.security.auth.Subject): javax.management.ObjectInstance
                    // @ts-ignore
                    public createMBean($param_String_1: java.lang.String | string, $param_ObjectName_2: javax.management.ObjectName, $param_ObjectName_3: javax.management.ObjectName, $param_MarshalledObject_4: java.rmi.MarshalledObject<any>, $param_arrayOf_String_5: java.lang.String[] | string[], $param_Subject_6: javax.security.auth.Subject): javax.management.ObjectInstance
                    // @ts-ignore
                    public createMBean($param_String_1: java.lang.String | string, $param_ObjectName_2: javax.management.ObjectName, $param_ObjectName_3: javax.management.ObjectName, $param_Subject_4: javax.security.auth.Subject): javax.management.ObjectInstance
                    // @ts-ignore
                    public createMBean($param_String_1: java.lang.String | string, $param_ObjectName_2: javax.management.ObjectName, $param_Subject_3: javax.security.auth.Subject): javax.management.ObjectInstance
                    // @ts-ignore
                    public fetchNotifications($param_long_1: number /*long*/, $param_int_2: number /*int*/, $param_long_3: number /*long*/): javax.management.remote.NotificationResult
                    // @ts-ignore
                    public getAttribute($param_ObjectName_1: javax.management.ObjectName, $param_String_2: java.lang.String | string, $param_Subject_3: javax.security.auth.Subject): any
                    // @ts-ignore
                    public getAttributes($param_ObjectName_1: javax.management.ObjectName, $param_arrayOf_String_2: java.lang.String[] | string[], $param_Subject_3: javax.security.auth.Subject): javax.management.AttributeList
                    // @ts-ignore
                    public getConnectionId(): string
                    // @ts-ignore
                    public getDefaultDomain($param_Subject_1: javax.security.auth.Subject): string
                    // @ts-ignore
                    public getDomains($param_Subject_1: javax.security.auth.Subject): string[]
                    // @ts-ignore
                    public getMBeanCount($param_Subject_1: javax.security.auth.Subject): number
                    // @ts-ignore
                    public getMBeanInfo($param_ObjectName_1: javax.management.ObjectName, $param_Subject_2: javax.security.auth.Subject): javax.management.MBeanInfo
                    // @ts-ignore
                    public getObjectInstance($param_ObjectName_1: javax.management.ObjectName, $param_Subject_2: javax.security.auth.Subject): javax.management.ObjectInstance
                    // @ts-ignore
                    public invoke($param_ObjectName_1: javax.management.ObjectName, $param_String_2: java.lang.String | string, $param_MarshalledObject_3: java.rmi.MarshalledObject<any>, $param_arrayOf_String_4: java.lang.String[] | string[], $param_Subject_5: javax.security.auth.Subject): any
                    // @ts-ignore
                    public isInstanceOf($param_ObjectName_1: javax.management.ObjectName, $param_String_2: java.lang.String | string, $param_Subject_3: javax.security.auth.Subject): boolean
                    // @ts-ignore
                    public isRegistered($param_ObjectName_1: javax.management.ObjectName, $param_Subject_2: javax.security.auth.Subject): boolean
                    // @ts-ignore
                    public queryMBeans($param_ObjectName_1: javax.management.ObjectName, $param_MarshalledObject_2: java.rmi.MarshalledObject<any>, $param_Subject_3: javax.security.auth.Subject): Array<any>
                    // @ts-ignore
                    public queryNames($param_ObjectName_1: javax.management.ObjectName, $param_MarshalledObject_2: java.rmi.MarshalledObject<any>, $param_Subject_3: javax.security.auth.Subject): Array<any>
                    // @ts-ignore
                    public removeNotificationListener($param_ObjectName_1: javax.management.ObjectName, $param_ObjectName_2: javax.management.ObjectName, $param_MarshalledObject_3: java.rmi.MarshalledObject<any>, $param_MarshalledObject_4: java.rmi.MarshalledObject<any>, $param_Subject_5: javax.security.auth.Subject): void
                    // @ts-ignore
                    public removeNotificationListener($param_ObjectName_1: javax.management.ObjectName, $param_ObjectName_2: javax.management.ObjectName, $param_Subject_3: javax.security.auth.Subject): void
                    // @ts-ignore
                    public removeNotificationListeners($param_ObjectName_1: javax.management.ObjectName, $param_arrayOf_Integer_2: java.lang.Integer[] | number[], $param_Subject_3: javax.security.auth.Subject): void
                    // @ts-ignore
                    public setAttribute($param_ObjectName_1: javax.management.ObjectName, $param_MarshalledObject_2: java.rmi.MarshalledObject<any>, $param_Subject_3: javax.security.auth.Subject): void
                    // @ts-ignore
                    public setAttributes($param_ObjectName_1: javax.management.ObjectName, $param_MarshalledObject_2: java.rmi.MarshalledObject<any>, $param_Subject_3: javax.security.auth.Subject): javax.management.AttributeList
                    // @ts-ignore
                    public unregisterMBean($param_ObjectName_1: javax.management.ObjectName, $param_Subject_2: javax.security.auth.Subject): void
                }
            }
        }
    }
}
