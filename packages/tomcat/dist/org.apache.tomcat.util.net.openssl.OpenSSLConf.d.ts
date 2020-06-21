declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    namespace openssl {
                        // @ts-ignore
                        class OpenSSLConf extends java.lang.Object implements java.io.Serializable {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public addCmd(cmd: org.apache.tomcat.util.net.openssl.OpenSSLConfCmd): void
                            // @ts-ignore
                            public getCommands(): Array<org.apache.tomcat.util.net.openssl.OpenSSLConfCmd>
                            // @ts-ignore
                            public check(cctx: number /*long*/): boolean
                            // @ts-ignore
                            public apply(cctx: number /*long*/, ctx: number /*long*/): boolean
                        }
                    }
                }
            }
        }
    }
}
