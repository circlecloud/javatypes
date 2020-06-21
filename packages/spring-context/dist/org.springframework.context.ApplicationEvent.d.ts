declare namespace org {
    namespace springframework {
        namespace context {
            /**
             * Class to be extended by all application events. Abstract as it
             * doesn't make sense for generic events to be published directly.
             * @author Rod Johnson
             * @author Juergen Hoeller
             * @see org.springframework.context.ApplicationListener
             * @see org.springframework.context.event.EventListener
             */
            // @ts-ignore
            abstract class ApplicationEvent extends java.util.EventObject {
                /**
                 * Create a new {@code ApplicationEvent}.
                 * @param source the object on which the event initially occurred or with
                 *  which the event is associated (never {#code null})
                 */
                // @ts-ignore
                constructor(source: java.lang.Object | any)
                /**
                 * Return the system time in milliseconds when the event occurred.
                 */
                // @ts-ignore
                public getTimestamp(): number /*long*/
            }
        }
    }
}
