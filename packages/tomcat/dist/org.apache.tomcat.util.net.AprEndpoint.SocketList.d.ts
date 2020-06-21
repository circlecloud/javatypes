declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    namespace AprEndpoint {
                        // @ts-ignore
                        class SocketList extends java.lang.Object {
                            // @ts-ignore
                            constructor(size: number /*int*/)
                            // @ts-ignore
                            pos: number /*int*/
                            // @ts-ignore
                            sockets: number /*long*/[]
                            // @ts-ignore
                            timeouts: number /*long*/[]
                            // @ts-ignore
                            flags: number /*int*/[]
                            // @ts-ignore
                            info: org.apache.tomcat.util.net.AprEndpoint.SocketInfo
                            // @ts-ignore
                            public size(): number /*int*/
                            // @ts-ignore
                            public get(): org.apache.tomcat.util.net.AprEndpoint.SocketInfo
                            // @ts-ignore
                            public clear(): void
                            // @ts-ignore
                            public add(socket: number /*long*/, timeout: number /*long*/, flag: number /*int*/): boolean
                            // @ts-ignore
                            public remove(socket: number /*long*/): boolean
                            // @ts-ignore
                            public duplicate(copy: org.apache.tomcat.util.net.AprEndpoint.SocketList): void
                        }
                    }
                }
            }
        }
    }
}
