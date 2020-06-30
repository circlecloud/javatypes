declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace websocket {
                namespace WsFrameBase {
                    /**
                     * WAITING            - not suspended
                     * Server case: waiting for a notification that data
                     * is ready to be read from the socket, the socket is
                     * registered to the poller
                     * Client case: data has been read from the socket and
                     * is waiting for data to be processed
                     * PROCESSING         - not suspended
                     * Server case: reading from the socket and processing
                     * the data
                     * Client case: processing the data if such has
                     * already been read and more data will be read from
                     * the socket
                     * SUSPENDING_WAIT    - suspended, a call to suspend() was made while in
                     * WAITING state. A call to resume() will do nothing
                     * and will transition to WAITING state
                     * SUSPENDING_PROCESS - suspended, a call to suspend() was made while in
                     * PROCESSING state. A call to resume() will do
                     * nothing and will transition to PROCESSING state
                     * SUSPENDED          - suspended
                     * Server case: processing data finished
                     * (SUSPENDING_PROCESS) / a notification was received
                     * that data is ready to be read from the socket
                     * (SUSPENDING_WAIT), socket is not registered to the
                     * poller
                     * Client case: processing data finished
                     * (SUSPENDING_PROCESS) / data has been read from the
                     * socket and is available for processing
                     * (SUSPENDING_WAIT)
                     * A call to resume() will:
                     * Server case: register the socket to the poller
                     * Client case: resume data processing
                     * CLOSING            - not suspended, a close will be send
                     * <pre>
                     * resume           data to be        resume
                     * no action        processed         no action
                     * |---------------| |---------------| |----------|
                     * |               v |               v v          |
                     * |  |----------WAITING«--------PROCESSING----|  |
                     * |  |             ^   processing             |  |
                     * |  |             |   finished               |  |
                     * |  |             |                          |  |
                     * | suspend        |                     suspend |
                     * |  |             |                          |  |
                     * |  |          resume                        |  |
                     * |  |    register socket to poller (server)  |  |
                     * |  |    resume data processing (client)     |  |
                     * |  |             |                          |  |
                     * |  v             |                          v  |
                     * SUSPENDING_WAIT   |                  SUSPENDING_PROCESS
                     * |                |                             |
                     * | data available |        processing finished  |
                     * |-------------»SUSPENDED«----------------------|
                     * </pre>
                     */
                    // @ts-ignore
                    class ReadState extends java.lang.Enum<org.apache.tomcat.websocket.WsFrameBase.ReadState> {
                        // @ts-ignore
                        readonly WAITING: org.apache.tomcat.websocket.WsFrameBase.ReadState
                        // @ts-ignore
                        readonly PROCESSING: org.apache.tomcat.websocket.WsFrameBase.ReadState
                        // @ts-ignore
                        readonly SUSPENDING_WAIT: org.apache.tomcat.websocket.WsFrameBase.ReadState
                        // @ts-ignore
                        readonly SUSPENDING_PROCESS: org.apache.tomcat.websocket.WsFrameBase.ReadState
                        // @ts-ignore
                        readonly SUSPENDED: org.apache.tomcat.websocket.WsFrameBase.ReadState
                        // @ts-ignore
                        readonly CLOSING: org.apache.tomcat.websocket.WsFrameBase.ReadState
                        // @ts-ignore
                        values(): org.apache.tomcat.websocket.WsFrameBase.ReadState[]
                        // @ts-ignore
                        valueOf(name: java.lang.String | string): org.apache.tomcat.websocket.WsFrameBase.ReadState
                        // @ts-ignore
                        isSuspended(): boolean
                    }
                }
            }
        }
    }
}
