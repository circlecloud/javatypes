declare namespace org {
    namespace apache {
        namespace coyote {
            namespace http11 {
                namespace upgrade {
                    // @ts-ignore
                    class UpgradeServletOutputStream extends javax.servlet.ServletOutputStream {
                        // @ts-ignore
                        constructor(processor: org.apache.coyote.http11.upgrade.UpgradeProcessorBase, socketWrapper: org.apache.tomcat.util.net.SocketWrapperBase<any>)
                        // @ts-ignore
                        public isReady(): boolean
                        // @ts-ignore
                        public setWriteListener(listener: javax.servlet.WriteListener): void
                        // @ts-ignore
                        public write(b: number /*int*/): void
                        // @ts-ignore
                        public write(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): void
                        // @ts-ignore
                        public flush(): void
                        // @ts-ignore
                        public close(): void
                    }
                }
            }
        }
    }
}
