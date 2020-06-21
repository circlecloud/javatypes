declare namespace org {
    namespace apache {
        namespace coyote {
            namespace http2 {
                namespace Http2AsyncUpgradeHandler {
                    // @ts-ignore
                    class AsyncPingManager extends org.apache.coyote.http2.Http2UpgradeHandler.PingManager {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public sendPing(force: boolean): void
                        // @ts-ignore
                        public receivePing(payload: number /*byte*/[], ack: boolean): void
                    }
                }
            }
        }
    }
}
