declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace websocket {
                /**
                 * This is a utility class that enables multiple {@link WsWebSocketContainer}
                 * instances to share a single {@link AsynchronousChannelGroup} while ensuring
                 * that the group is destroyed when no longer required.
                 */
                // @ts-ignore
                class AsyncChannelGroupUtil extends java.lang.Object {
                    // @ts-ignore
                    public static register(): java.nio.channels.AsynchronousChannelGroup
                    // @ts-ignore
                    public static unregister(): void
                }
            }
        }
    }
}
