declare namespace org {
    namespace apache {
        namespace catalina {
            /**
             * General event for notifying listeners of significant changes on a Container.
             * @author Craig R. McClanahan
             */
            // @ts-ignore
            class ContainerEvent extends java.util.EventObject {
                /**
                 * Construct a new ContainerEvent with the specified parameters.
                 * @param container Container on which this event occurred
                 * @param type Event type
                 * @param data Event data
                 */
                // @ts-ignore
                constructor(container: org.apache.catalina.Container, type: java.lang.String | string, data: java.lang.Object | any)
                /**
                 * Return the event data of this event.
                 * @return The data, if any, associated with this event.
                 */
                // @ts-ignore
                public getData(): any
                /**
                 * Return the Container on which this event occurred.
                 * @return The Container on which this event occurred.
                 */
                // @ts-ignore
                public getContainer(): org.apache.catalina.Container
                /**
                 * Return the event type of this event.
                 * @return The event type of this event. Although this is a String, it is
                 *          safe to rely on the value returned by this method remaining
                 *          consistent between point releases.
                 */
                // @ts-ignore
                public getType(): string
                /**
                 * Return a string representation of this event.
                 */
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
