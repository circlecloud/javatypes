declare namespace org {
    namespace apache {
        namespace catalina {
            /**
             * Interface defining a listener for significant Session generated events.
             * @author Craig R. McClanahan
             */
            // @ts-ignore
            interface SessionListener extends java.util.EventListener {
                /**
                 * Acknowledge the occurrence of the specified event.
                 * @param event SessionEvent that has occurred
                 */
                // @ts-ignore
                sessionEvent(event: org.apache.catalina.SessionEvent): void
            }
        }
    }
}
