declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                namespace economy {
                    namespace transaction {
                        // @ts-ignore
                        class TransactionTypes extends java.lang.Object {
                            /**
                             * Represents a transaction where an {@link Account} received some amount of a {@link Currency}.
                             */
                            // @ts-ignore
                            public static readonly DEPOSIT: org.spongepowered.api.service.economy.transaction.TransactionType
                            /**
                             * Represents a transaction where an {@link Account} transferred some amount of a currency to another {@link Account}.
                             */
                            // @ts-ignore
                            public static readonly TRANSFER: org.spongepowered.api.service.economy.transaction.TransactionType
                            /**
                             * Represents a transaction where an {@link Account} lost some amount of a {@link Currency}.
                             */
                            // @ts-ignore
                            public static readonly WITHDRAW: org.spongepowered.api.service.economy.transaction.TransactionType
                        }
                    }
                }
            }
        }
    }
}
