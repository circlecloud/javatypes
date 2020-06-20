declare namespace org {
    namespace springframework {
        namespace http {
            namespace codec {
                /**
                 * Representation for a Server-Sent Event for use with Spring's reactive Web support.
                 * {@code Flux<ServerSentEvent>} or {@code Observable<ServerSentEvent>} is the
                 * reactive equivalent to Spring MVC's {@code SseEmitter}.
                 * @author Sebastien Deleuze
                 * @author Arjen Poutsma
                 * @since 5.0
                 * @param <T> the type of data that this event contains
                 * @see ServerSentEventHttpMessageWriter
                 * @see <a href="https://www.w3.org/TR/eventsource/">Server-Sent Events W3C recommendation</a>
                 */
                // @ts-ignore
                class ServerSentEvent<T> extends java.lang.Object {
                    /**
                     * Return the {@code id} field of this event, if available.
                     */
                    // @ts-ignore
                    id(): java.lang.String
                    /**
                     * Return the {@code event} field of this event, if available.
                     */
                    // @ts-ignore
                    event(): java.lang.String
                    /**
                     * Return the {@code retry} field of this event, if available.
                     */
                    // @ts-ignore
                    retry(): java.time.Duration
                    /**
                     * Return the comment of this event, if available.
                     */
                    // @ts-ignore
                    comment(): java.lang.String
                    /**
                     * Return the {@code data} field of this event, if available.
                     */
                    // @ts-ignore
                    data(): T
                    // @ts-ignore
                    toString(): java.lang.String
                    /**
                     * Return a builder for a {@code SseEvent}.
                     * @param <T> the type of data that this event contains
                     * @return the builder
                     */
                    // @ts-ignore
                    builder<T>(): org.springframework.http.codec.ServerSentEvent.Builder<T>
                    /**
                     * Return a builder for a {@code SseEvent}, populated with the give {@linkplain #data() data}.
                     * @param <T> the type of data that this event contains
                     * @return the builder
                     */
                    // @ts-ignore
                    builder<T>(data: T): org.springframework.http.codec.ServerSentEvent.Builder<T>
                }
            }
        }
    }
}
