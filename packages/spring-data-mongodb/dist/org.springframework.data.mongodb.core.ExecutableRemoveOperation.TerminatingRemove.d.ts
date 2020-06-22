declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ExecutableRemoveOperation {
                        /**
                         * @author Christoph Strobl
                         * @since 2.0
                         */
                        // @ts-ignore
                        interface TerminatingRemove<T> {
                            /**
                             * Remove all documents matching.
                             * @return the {#link DeleteResult}. Never {@literal null}.
                             */
                            // @ts-ignore
                            all(): DeleteResult
                            /**
                             * Remove the first matching document.
                             * @return the {#link DeleteResult}. Never {@literal null}.
                             */
                            // @ts-ignore
                            one(): DeleteResult
                            /**
                             * Remove and return all matching documents. <br/>
                             * <strong>NOTE</strong> The entire list of documents will be fetched before sending the actual delete commands.
                             * Also, {@link org.springframework.context.ApplicationEvent}s will be published for each and every delete
                             * operation.
                             * @return empty {#link List} if no match found. Never {@literal null}.
                             */
                            // @ts-ignore
                            findAndRemove(): Array<T>
                        }
                    }
                }
            }
        }
    }
}
