declare namespace org {
    namespace apache {
        namespace coyote {
            namespace http11 {
                namespace upgrade {
                    // @ts-ignore
                    abstract class UpgradeProcessorBase extends org.apache.coyote.AbstractProcessorLight implements javax.servlet.http.WebConnection {
                        // @ts-ignore
                        constructor(upgradeToken: org.apache.coyote.UpgradeToken)
                        // @ts-ignore
                        static readonly INFINITE_TIMEOUT: number /*int*/
                        // @ts-ignore
                        public isUpgrade(): boolean
                        // @ts-ignore
                        public getUpgradeToken(): org.apache.coyote.UpgradeToken
                        // @ts-ignore
                        public recycle(): void
                        // @ts-ignore
                        public service(socketWrapper: org.apache.tomcat.util.net.SocketWrapperBase<any>): org.apache.tomcat.util.net.AbstractEndpoint.Handler.SocketState
                        // @ts-ignore
                        public asyncPostProcess(): org.apache.tomcat.util.net.AbstractEndpoint.Handler.SocketState
                        // @ts-ignore
                        public isAsync(): boolean
                        // @ts-ignore
                        public getRequest(): org.apache.coyote.Request
                        // @ts-ignore
                        public getLeftoverInput(): java.nio.ByteBuffer
                        // @ts-ignore
                        public timeoutAsync(now: number /*long*/): void
                        // @ts-ignore
                        public checkAsyncTimeoutGeneration(): boolean
                    }
                }
            }
        }
    }
}
