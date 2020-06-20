declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                namespace context {
                    /**
                     * A common interface for objects that have a relevant context.
                     */
                    // @ts-ignore
                    interface ContextSource {
                        /**
                         * Returns the context most relevant to this object.
                         * <p>This context may or may not be the same across multiple invocations.</p>
                         * @return A given context
                         */
                        // @ts-ignore
                        getContext(): org.spongepowered.api.service.context.Context
                    }
                }
            }
        }
    }
}
