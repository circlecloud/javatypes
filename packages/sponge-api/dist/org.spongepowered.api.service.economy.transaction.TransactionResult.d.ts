declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                namespace economy {
                    namespace transaction {
                        /**
                         * Represents the result of a particular transaction, such as a deposit
                         * or withdrawal.
                         */
                        // @ts-ignore
                        interface TransactionResult {
                            /**
                             * Gets the {@link Account} involved in the transaction.
                             * @return The {#link Account}
                             */
                            // @ts-ignore
                            getAccount(): org.spongepowered.api.service.economy.account.Account
                            /**
                             * Gets the {@link Currency} involved in the transaction.
                             * @return The {#link Currency}
                             */
                            // @ts-ignore
                            getCurrency(): org.spongepowered.api.service.economy.Currency
                            /**
                             * Gets the amount of the {@link Currency} involved in the transaction.
                             * @return The amount
                             */
                            // @ts-ignore
                            getAmount(): java.math.BigDecimal
                            /**
                             * Returns the set of {@link Context}s used to perform the
                             * transaction.
                             * @return optional set of contexts
                             */
                            // @ts-ignore
                            getContexts(): java.util.Set<org.spongepowered.api.service.context.Context>
                            /**
                             * Gets the {@link ResultType} of this transaction.
                             * @return resultType
                             */
                            // @ts-ignore
                            getResult(): org.spongepowered.api.service.economy.transaction.ResultType
                            /**
                             * Returns the {@link TransactionType} of this result.
                             * @return type of Transaction
                             */
                            // @ts-ignore
                            getType(): org.spongepowered.api.service.economy.transaction.TransactionType
                        }
                    }
                }
            }
        }
    }
}
