declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace websocket {
                namespace server {
                    // @ts-ignore
                    class WsFrameServer extends org.apache.tomcat.websocket.WsFrameBase {
                        // @ts-ignore
                        constructor(socketWrapper: object, wsSession: org.apache.tomcat.websocket.WsSession, transformation: org.apache.tomcat.websocket.Transformation, applicationClassLoader: java.lang.ClassLoader)
                        // @ts-ignore
                        isMasked(): boolean
                        // @ts-ignore
                        getTransformation(): org.apache.tomcat.websocket.Transformation
                        // @ts-ignore
                        isOpen(): boolean
                        // @ts-ignore
                        getLog(): Log
                        // @ts-ignore
                        sendMessageText(last: boolean): void
                        // @ts-ignore
                        sendMessageBinary(msg: java.nio.ByteBuffer, last: boolean): void
                        // @ts-ignore
                        resumeProcessing(): void
                    }
                }
            }
        }
    }
}
