declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                namespace recovery {
                    /**
                     * Used internally to indicate when connection recovery can
                     * begin.
                     * This is package-local by design.
                     * @see <a href="https://github.com/rabbitmq/rabbitmq-java-client/issues/135">Issue 135 on GitHub</a>
                     */
                    // @ts-ignore
                    interface RecoveryCanBeginListener {
                        // @ts-ignore
                        recoveryCanBegin(cause: com.rabbitmq.client.ShutdownSignalException): void
                    }
                }
            }
        }
    }
}
