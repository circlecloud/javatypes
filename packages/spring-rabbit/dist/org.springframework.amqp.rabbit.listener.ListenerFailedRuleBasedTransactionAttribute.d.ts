declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace listener {
                    /**
                     * Subclass of {@link RuleBasedTransactionAttribute} that is aware that
                     * listener exceptions are wrapped in {@link ListenerExecutionFailedException}s.
                     * Allows users to control rollback based on the actual cause.
                     * @author Gary Russell
                     * @since 1.6.6
                     */
                    // @ts-ignore
                    class ListenerFailedRuleBasedTransactionAttribute extends RuleBasedTransactionAttribute {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public rollbackOn(ex: java.lang.Throwable | Error): boolean
                    }
                }
            }
        }
    }
}
