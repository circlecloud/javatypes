declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace connection {
                    /**
                     * A {@link RecoveryListener} that closes the recovered channel, to avoid
                     * orphaned consumers.
                     * @author Gary Russell
                     * @since 1.7.10
                     */
                    // @ts-ignore
                    class ClosingRecoveryListener extends java.lang.Object {
                        // @ts-ignore
                        public handleRecovery(recoverable: Recoverable): void
                        // @ts-ignore
                        public handleRecoveryStarted(recoverable: Recoverable): void
                        /**
                         * Add a listener if necessary so we can immediately close an autorecovered
                         * channel if necessary since the actual consumer will no longer exist.
                         * Idempotent operation.
                         * @param channel the channel.
                         */
                        // @ts-ignore
                        public static addRecoveryListenerIfNecessary(channel: Channel): void
                        /**
                         * Remove the channel from the set used to ensure that
                         * {@link #addRecoveryListenerIfNecessary(Channel)} is idempotent.
                         * @param channel the channel to remove.
                         */
                        // @ts-ignore
                        public static removeChannel(channel: AutorecoveringChannel): void
                    }
                }
            }
        }
    }
}
