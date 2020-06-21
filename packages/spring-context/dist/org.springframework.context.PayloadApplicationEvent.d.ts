declare namespace org {
    namespace springframework {
        namespace context {
            /**
             * An {@link ApplicationEvent} that carries an arbitrary payload.
             * <p>Mainly intended for internal use within the framework.
             * @author Stephane Nicoll
             * @since 4.2
             * @param <T> the payload type of the event
             */
            // @ts-ignore
            class PayloadApplicationEvent<T> extends org.springframework.context.ApplicationEvent {
                /**
                 * Create a new PayloadApplicationEvent.
                 * @param source the object on which the event initially occurred (never {#code null})
                 * @param payload the payload object (never {#code null})
                 */
                // @ts-ignore
                constructor(source: java.lang.Object | any, payload: T)
                // @ts-ignore
                public getResolvableType(): ResolvableType
                /**
                 * Return the payload of the event.
                 */
                // @ts-ignore
                public getPayload(): T
            }
        }
    }
}
