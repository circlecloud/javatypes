declare namespace javax {
    namespace management {
        namespace remote {
            namespace rmi {
                // @ts-ignore
                class RMIServerImpl_Stub extends java.rmi.server.RemoteStub implements javax.management.remote.rmi.RMIServer {
                    // @ts-ignore
                    constructor(ref: java.rmi.server.RemoteRef)
                    // @ts-ignore
                    public getVersion(): string
                    // @ts-ignore
                    public newClient($param_Object_1: java.lang.Object | any): javax.management.remote.rmi.RMIConnection
                }
            }
        }
    }
}
