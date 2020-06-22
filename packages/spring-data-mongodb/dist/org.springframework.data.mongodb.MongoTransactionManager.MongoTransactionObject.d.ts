declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace MongoTransactionManager {
                    /**
                     * MongoDB specific transaction object, representing a {@link MongoResourceHolder}. Used as transaction object by
                     * {@link MongoTransactionManager}.
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @since 2.1
                     * @see MongoResourceHolder
                     */
                    // @ts-ignore
                    class MongoTransactionObject extends java.lang.Object {
                        /**
                         * Commit the transaction.
                         */
                        // @ts-ignore
                        public commitTransaction(): void
                        /**
                         * Rollback (abort) the transaction.
                         */
                        // @ts-ignore
                        public abortTransaction(): void
                        // @ts-ignore
                        public getSession(): ClientSession
                        // @ts-ignore
                        public isRollbackOnly(): boolean
                        // @ts-ignore
                        public flush(): void
                    }
                }
            }
        }
    }
}
