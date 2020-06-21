declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                namespace economy {
                    namespace transaction {
                        /**
                         * Represents the success or failure state of a {@link TransactionResult}.
                         */
                        // @ts-ignore
                        class ResultType extends java.lang.Enum<org.spongepowered.api.service.economy.transaction.ResultType> {
                            /**
                             * Transaction finished with no errors.
                             */
                            // @ts-ignore
                            readonly SUCCESS: org.spongepowered.api.service.economy.transaction.ResultType
                            /**
                             * The transaction attempt resulted in a difference in {@link Context}s.
                             */
                            // @ts-ignore
                            readonly CONTEXT_MISMATCH: org.spongepowered.api.service.economy.transaction.ResultType
                            /**
                             * The transaction failed for an unspecific reason.
                             */
                            // @ts-ignore
                            readonly FAILED: org.spongepowered.api.service.economy.transaction.ResultType
                            /**
                             * The account did not have enough funds requested.
                             */
                            // @ts-ignore
                            readonly ACCOUNT_NO_FUNDS: org.spongepowered.api.service.economy.transaction.ResultType
                            /**
                             * The account would be put past it's maximum capacity, so the transaction
                             * failed.
                             */
                            // @ts-ignore
                            readonly ACCOUNT_NO_SPACE: org.spongepowered.api.service.economy.transaction.ResultType
                            // @ts-ignore
                            values(): org.spongepowered.api.service.economy.transaction.ResultType[]
                            // @ts-ignore
                            valueOf(name: java.lang.String | string): org.spongepowered.api.service.economy.transaction.ResultType
                        }
                    }
                }
            }
        }
    }
}
