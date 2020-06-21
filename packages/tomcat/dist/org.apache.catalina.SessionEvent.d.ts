declare namespace org {
    namespace apache {
        namespace catalina {
            /**
             * General event for notifying listeners of significant changes on a Session.
             * @author Craig R. McClanahan
             */
            // @ts-ignore
            class SessionEvent extends java.util.EventObject {
                /**
                 * Construct a new SessionEvent with the specified parameters.
                 * @param session Session on which this event occurred
                 * @param type Event type
                 * @param data Event data
                 */
                // @ts-ignore
                constructor(session: org.apache.catalina.Session, type: java.lang.String | string, data: java.lang.Object | any)
                /**
                 * @return the event data of this event.
                 */
                // @ts-ignore
                public getData(): any
                /**
                 * @return the Session on which this event occurred.
                 */
                // @ts-ignore
                public getSession(): org.apache.catalina.Session
                /**
                 * @return the event type of this event.
                 */
                // @ts-ignore
                public getType(): string
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
