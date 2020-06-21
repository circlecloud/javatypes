declare namespace org {
    namespace apache {
        namespace coyote {
            namespace http2 {
                // @ts-ignore
                class Http2AsyncUpgradeHandler extends org.apache.coyote.http2.Http2UpgradeHandler {
                    // @ts-ignore
                    constructor(protocol: org.apache.coyote.http2.Http2Protocol, adapter: org.apache.coyote.Adapter, coyoteRequest: org.apache.coyote.Request)
                    // @ts-ignore
                    getParser(connectionId: java.lang.String | string): org.apache.coyote.http2.Http2Parser
                    // @ts-ignore
                    getPingManager(): org.apache.coyote.http2.Http2UpgradeHandler.PingManager
                    // @ts-ignore
                    writeSettings(): void
                    // @ts-ignore
                    writeGoAwayFrame(maxStreamId: number /*int*/, errorCode: number /*long*/, debugMsg: number /*byte*/[]): void
                    // @ts-ignore
                    getHeaderFrameBuffers(initialPayloadSize: number /*int*/): org.apache.coyote.http2.Http2UpgradeHandler.HeaderFrameBuffers
                    // @ts-ignore
                    public settingsEnd(ack: boolean): void
                    // @ts-ignore
                    processWrites(): void
                    // @ts-ignore
                    processSendfile(sendfile: org.apache.coyote.http2.SendfileData): org.apache.tomcat.util.net.SendfileState
                }
            }
        }
    }
}
