declare namespace org {
    namespace springframework {
        namespace http {
            namespace codec {
                namespace ServerSentEvent {
                    /**
                     * A mutable builder for a {@code SseEvent}.
                     * @param <T> the type of data that this event contains
                     */
                    // @ts-ignore
                    interface Builder<T> {
                        /**
                         * Set the value of the {@code id} field.
                         * @param id the value of the id field
                         * @return {#code this} builder
                         */
                        // @ts-ignore
                        id(id: string): org.springframework.http.codec.ServerSentEvent.Builder<T>
                        /**
                         * Set the value of the {@code event} field.
                         * @param event the value of the event field
                         * @return {#code this} builder
                         */
                        // @ts-ignore
                        event(event: string): org.springframework.http.codec.ServerSentEvent.Builder<T>
                        /**
                         * Set the value of the {@code retry} field.
                         * @param retry the value of the retry field
                         * @return {#code this} builder
                         */
                        // @ts-ignore
                        retry(retry: java.time.Duration): org.springframework.http.codec.ServerSentEvent.Builder<T>
                        /**
                         * Set SSE comment. If a multi-line comment is provided, it will be turned into multiple
                         * SSE comment lines as defined in Server-Sent Events W3C recommendation.
                         * @param comment the comment to set
                         * @return {#code this} builder
                         */
                        // @ts-ignore
                        comment(comment: string): org.springframework.http.codec.ServerSentEvent.Builder<T>
                        /**
                         * Set the value of the {@code data} field. If the {@code data} argument is a multi-line
                         * {@code String}, it will be turned into multiple {@code data} field lines as defined
                         * in the Server-Sent Events W3C recommendation. If {@code data} is not a String, it will
                         * be {@linkplain org.springframework.http.codec.json.Jackson2JsonEncoder encoded} into JSON.
                         * @param data the value of the data field
                         * @return {#code this} builder
                         */
                        // @ts-ignore
                        data(data: T): org.springframework.http.codec.ServerSentEvent.Builder<T>
                        /**
                         * Builds the event.
                         * @return the built event
                         */
                        // @ts-ignore
                        build(): org.springframework.http.codec.ServerSentEvent<T>
                    }
                }
            }
        }
    }
}
