declare namespace org {
    namespace apache {
        namespace coyote {
            namespace http11 {
                namespace upgrade {
                    /**
                     * This Tomcat specific interface is implemented by handlers that require direct
                     * access to Tomcat's I/O layer rather than going through the Servlet API.
                     */
                    // @ts-ignore
                    interface InternalHttpUpgradeHandler extends javax.servlet.http.HttpUpgradeHandler {
                        // @ts-ignore
                        upgradeDispatch(status: org.apache.tomcat.util.net.SocketEvent): org.apache.tomcat.util.net.AbstractEndpoint.Handler.SocketState
                        // @ts-ignore
                        setSocketWrapper(wrapper: org.apache.tomcat.util.net.SocketWrapperBase<any>): void
                        // @ts-ignore
                        setSslSupport(sslSupport: org.apache.tomcat.util.net.SSLSupport): void
                        // @ts-ignore
                        pause(): void
                    }
                }
            }
        }
    }
}
