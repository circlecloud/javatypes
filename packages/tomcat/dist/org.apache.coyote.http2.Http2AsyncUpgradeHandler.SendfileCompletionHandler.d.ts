declare namespace org {
    namespace apache {
        namespace coyote {
            namespace http2 {
                namespace Http2AsyncUpgradeHandler {
                    // @ts-ignore
                    class SendfileCompletionHandler extends java.lang.Object implements java.nio.channels.CompletionHandler<java.lang.Long | number, org.apache.coyote.http2.SendfileData> {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public completed(nBytes: java.lang.Long | number, sendfile: org.apache.coyote.http2.SendfileData): void
                        // @ts-ignore
                        public failed(t: java.lang.Throwable | Error, sendfile: org.apache.coyote.http2.SendfileData): void
                    }
                }
            }
        }
    }
}
