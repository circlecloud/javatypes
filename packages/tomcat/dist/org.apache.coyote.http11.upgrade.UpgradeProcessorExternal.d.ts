declare namespace org {
    namespace apache {
        namespace coyote {
            namespace http11 {
                namespace upgrade {
                    // @ts-ignore
                    class UpgradeProcessorExternal extends org.apache.coyote.http11.upgrade.UpgradeProcessorBase {
                        // @ts-ignore
                        constructor(wrapper: org.apache.tomcat.util.net.SocketWrapperBase<any>, upgradeToken: org.apache.coyote.UpgradeToken)
                        // @ts-ignore
                        getLog(): org.apache.juli.logging.Log
                        // @ts-ignore
                        public close(): void
                        // @ts-ignore
                        public getInputStream(): javax.servlet.ServletInputStream
                        // @ts-ignore
                        public getOutputStream(): javax.servlet.ServletOutputStream
                        // @ts-ignore
                        public dispatch(status: org.apache.tomcat.util.net.SocketEvent): org.apache.tomcat.util.net.AbstractEndpoint.Handler.SocketState
                        // @ts-ignore
                        public setSslSupport(sslSupport: org.apache.tomcat.util.net.SSLSupport): void
                        // @ts-ignore
                        public pause(): void
                    }
                }
            }
        }
    }
}
