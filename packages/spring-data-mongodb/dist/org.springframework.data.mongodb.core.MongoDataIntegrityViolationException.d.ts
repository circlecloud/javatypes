declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    /**
                     * Mongo-specific {@link DataIntegrityViolationException}.
                     * @author Oliver Gierke
                     */
                    // @ts-ignore
                    class MongoDataIntegrityViolationException extends DataIntegrityViolationException {
                        /**
                         * Creates a new {@link MongoDataIntegrityViolationException} using the given message and {@link WriteResult}.
                         * @param message the exception message
                         * @param writeResult the {#link WriteResult} that causes the exception, must not be {@literal null}.
                         * @param actionOperation the {#link MongoActionOperation} that caused the exception, must not be {@literal null}.
                         */
                        // @ts-ignore
                        constructor(message: java.lang.String | string, writeResult: WriteResult, actionOperation: org.springframework.data.mongodb.core.MongoActionOperation)
                        /**
                         * Returns the {@link WriteResult} that caused the exception.
                         * @return the writeResult
                         */
                        // @ts-ignore
                        public getWriteResult(): WriteResult
                        /**
                         * Returns the {@link MongoActionOperation} in which the current exception occured.
                         * @return the actionOperation
                         */
                        // @ts-ignore
                        public getActionOperation(): org.springframework.data.mongodb.core.MongoActionOperation
                    }
                }
            }
        }
    }
}
