declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace websocket {
                // @ts-ignore
                class WsFrameClient extends org.apache.tomcat.websocket.WsFrameBase {
                    // @ts-ignore
                    constructor(response: java.nio.ByteBuffer, channel: org.apache.tomcat.websocket.AsyncChannelWrapper, wsSession: org.apache.tomcat.websocket.WsSession, transformation: org.apache.tomcat.websocket.Transformation)
                    // @ts-ignore
                    isMasked(): boolean
                    // @ts-ignore
                    getLog(): Log
                    // @ts-ignore
                    resumeProcessing(): void
                }
            }
        }
    }
}
