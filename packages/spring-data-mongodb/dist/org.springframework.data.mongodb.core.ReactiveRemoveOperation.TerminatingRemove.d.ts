declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ReactiveRemoveOperation {
                        /**
                         * Compose remove execution by calling one of the terminating methods.
                         */
                        // @ts-ignore
                        interface TerminatingRemove<T> {
                            /**
                             * Remove all documents matching.
                             * @return {#link Mono} emitting the {@link DeleteResult}. Never {@literal null}.
                             */
                            // @ts-ignore
                            all(): object
                            /**
                             * Remove and return all matching documents. <br/>
                             * <strong>NOTE</strong> The entire list of documents will be fetched before sending the actual delete commands.
                             * Also, {@link org.springframework.context.ApplicationEvent}s will be published for each and every delete
                             * operation.
                             * @return empty {#link Flux} if no match found. Never {@literal null}.
                             */
                            // @ts-ignore
                            findAndRemove(): object
                        }
                    }
                }
            }
        }
    }
}
