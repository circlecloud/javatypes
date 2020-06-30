declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace websocket {
                /**
                 * Provides a background processing mechanism that triggers roughly once a
                 * second. The class maintains a thread that only runs when there is at least
                 * one instance of {@link BackgroundProcess} registered.
                 */
                // @ts-ignore
                class BackgroundProcessManager extends java.lang.Object {
                    // @ts-ignore
                    public static getInstance(): org.apache.tomcat.websocket.BackgroundProcessManager
                    // @ts-ignore
                    public register(process: org.apache.tomcat.websocket.BackgroundProcess): void
                    // @ts-ignore
                    public unregister(process: org.apache.tomcat.websocket.BackgroundProcess): void
                }
            }
        }
    }
}
