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
                    public id(): string
                    /**
                     * Return the {@code event} field of this event, if available.
                     */
                    // @ts-ignore
                    public event(): string
                    /**
                     * Return the {@code retry} field of this event, if available.
                     */
                    // @ts-ignore
                    public retry(): java.time.Duration
                    /**
                     * Return the comment of this event, if available.
                     */
                    // @ts-ignore
                    public comment(): string
                    /**
                     * Return the {@code data} field of this event, if available.
                     */
                    // @ts-ignore
                    public data(): T
                    // @ts-ignore
                    public toString(): string
                    /**
                     * Return a builder for a {@code SseEvent}.
                     * @param <T> the type of data that this event contains
                     * @return the builder
                     */
                    // @ts-ignore
                    public static builder<T>(): org.springframework.http.codec.ServerSentEvent.Builder<T>
                    /**
                     * Return a builder for a {@code SseEvent}, populated with the give {@linkplain #data() data}.
                     * @param <T> the type of data that this event contains
                     * @return the builder
                     */
                    // @ts-ignore
                    public static builder<T>(data: T): org.springframework.http.codec.ServerSentEvent.Builder<T>
                }
            }
        }
    }
}
