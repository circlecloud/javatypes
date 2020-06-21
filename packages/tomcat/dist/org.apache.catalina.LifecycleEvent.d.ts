declare namespace org {
    namespace apache {
        namespace catalina {
            /**
             * General event for notifying listeners of significant changes on a component
             * that implements the Lifecycle interface.
             * @author Craig R. McClanahan
             */
            // @ts-ignore
            class LifecycleEvent extends java.util.EventObject {
                /**
                 * Construct a new LifecycleEvent with the specified parameters.
                 * @param lifecycle Component on which this event occurred
                 * @param type Event type (required)
                 * @param data Event data (if any)
                 */
                // @ts-ignore
                constructor(lifecycle: org.apache.catalina.Lifecycle, type: java.lang.String | string, data: java.lang.Object | any)
                /**
                 * @return the event data of this event.
                 */
                // @ts-ignore
                public getData(): any
                /**
                 * @return the Lifecycle on which this event occurred.
                 */
                // @ts-ignore
                public getLifecycle(): org.apache.catalina.Lifecycle
                /**
                 * @return the event type of this event.
                 */
                // @ts-ignore
                public getType(): string
            }
        }
    }
}
