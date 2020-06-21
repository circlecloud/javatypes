declare namespace org {
    namespace apache {
        namespace coyote {
            namespace http11 {
                namespace upgrade {
                    // @ts-ignore
                    class UpgradeServletInputStream extends javax.servlet.ServletInputStream {
                        // @ts-ignore
                        constructor(processor: org.apache.coyote.http11.upgrade.UpgradeProcessorBase, socketWrapper: org.apache.tomcat.util.net.SocketWrapperBase<any>)
                        // @ts-ignore
                        public isFinished(): boolean
                        // @ts-ignore
                        public isReady(): boolean
                        // @ts-ignore
                        public setReadListener(listener: javax.servlet.ReadListener): void
                        // @ts-ignore
                        public read(): number /*int*/
                        // @ts-ignore
                        public readLine(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): number /*int*/
                        // @ts-ignore
                        public read(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): number /*int*/
                        // @ts-ignore
                        public close(): void
                    }
                }
            }
        }
    }
}
