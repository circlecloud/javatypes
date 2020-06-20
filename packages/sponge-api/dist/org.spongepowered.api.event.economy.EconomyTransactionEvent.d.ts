declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace economy {
                    /**
                     * Fired when the {@link EconomyService} has processed a transaction.
                     */
                    // @ts-ignore
                    interface EconomyTransactionEvent extends org.spongepowered.api.event.Event {
                        /**
                         * Gets the {@link TransactionResult} for the transaction that occurred.
                         * @return The {#link TransactionResult}
                         */
                        // @ts-ignore
                        getTransactionResult(): org.spongepowered.api.service.economy.transaction.TransactionResult
                    }
                }
            }
        }
    }
}
