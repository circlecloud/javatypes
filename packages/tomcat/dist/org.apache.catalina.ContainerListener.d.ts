declare namespace org {
    namespace apache {
        namespace catalina {
            /**
             * Interface defining a listener for significant Container generated events.
             * Note that "container start" and "container stop" events are normally
             * LifecycleEvents, not ContainerEvents.
             * @author Craig R. McClanahan
             */
            // @ts-ignore
            interface ContainerListener {
                /**
                 * Acknowledge the occurrence of the specified event.
                 * @param event ContainerEvent that has occurred
                 */
                // @ts-ignore
                containerEvent(event: org.apache.catalina.ContainerEvent): void
            }
        }
    }
}
