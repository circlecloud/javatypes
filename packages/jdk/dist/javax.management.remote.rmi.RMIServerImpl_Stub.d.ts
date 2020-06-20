declare namespace javax {
    namespace management {
        namespace remote {
            namespace rmi {
                // @ts-ignore
                class RMIServerImpl_Stub extends java.rmi.server.RemoteStub implements javax.management.remote.rmi.RMIServer {
                    // @ts-ignore
                    constructor(ref: java.rmi.server.RemoteRef)
                    // @ts-ignore
                    getVersion(): java.lang.String
                    // @ts-ignore
                    newClient($param_Object_1: any): javax.management.remote.rmi.RMIConnection
                }
            }
        }
    }
}
