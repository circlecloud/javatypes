declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace websocket {
                // @ts-ignore
                interface WrappedMessageHandler {
                    // @ts-ignore
                    getMaxMessageSize(): number /*long*/
                    // @ts-ignore
                    getWrappedHandler(): MessageHandler
                }
            }
        }
    }
}
