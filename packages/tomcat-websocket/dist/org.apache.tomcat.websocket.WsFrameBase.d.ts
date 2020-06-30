declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace websocket {
                /**
                 * Takes the ServletInputStream, processes the WebSocket frames it contains and
                 * extracts the messages. WebSocket Pings received will be responded to
                 * automatically without any action required by the application.
                 */
                // @ts-ignore
                abstract class WsFrameBase extends java.lang.Object {
                    // @ts-ignore
                    constructor(wsSession: org.apache.tomcat.websocket.WsSession, transformation: org.apache.tomcat.websocket.Transformation)
                    // @ts-ignore
                    readonly wsSession: org.apache.tomcat.websocket.WsSession
                    // @ts-ignore
                    readonly inputBuffer: java.nio.ByteBuffer
                    // @ts-ignore
                    processInputBuffer(): void
                    // @ts-ignore
                    abstract isMasked(): boolean
                    // @ts-ignore
                    abstract getLog(): Log
                    // @ts-ignore
                    sendMessageText(last: boolean): void
                    // @ts-ignore
                    sendMessageBinary(msg: java.nio.ByteBuffer, last: boolean): void
                    // @ts-ignore
                    static byteArrayToLong(b: number /*byte*/[], start: number /*int*/, len: number /*int*/): number /*long*/
                    // @ts-ignore
                    isOpen(): boolean
                    // @ts-ignore
                    getTransformation(): org.apache.tomcat.websocket.Transformation
                    // @ts-ignore
                    public suspend(): void
                    // @ts-ignore
                    public resume(): void
                    // @ts-ignore
                    isSuspended(): boolean
                    // @ts-ignore
                    getReadState(): org.apache.tomcat.websocket.WsFrameBase.ReadState
                    // @ts-ignore
                    changeReadState(newState: org.apache.tomcat.websocket.WsFrameBase.ReadState): void
                    // @ts-ignore
                    changeReadState(oldState: org.apache.tomcat.websocket.WsFrameBase.ReadState, newState: org.apache.tomcat.websocket.WsFrameBase.ReadState): boolean
                    /**
                     * This method will be invoked when the read operation is resumed.
                     * As the suspend of the read operation can be invoked at any time, when
                     * implementing this method one should consider that there might still be
                     * data remaining into the internal buffers that needs to be processed
                     * before reading again from the socket.
                     */
                    // @ts-ignore
                    abstract resumeProcessing(): void
                }
            }
        }
    }
}
