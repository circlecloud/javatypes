declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                /**
                 * Is thrown when errors occur during bulk operations.
                 * @author Tobias Trelle
                 * @author Oliver Gierke
                 * @since 1.9
                 */
                // @ts-ignore
                class BulkOperationException extends DataAccessException {
                    /**
                     * Creates a new {@link BulkOperationException} with the given message and source {@link BulkWriteException}.
                     * @param message must not be {#literal null}.
                     * @param source must not be {#literal null}.
                     */
                    // @ts-ignore
                    constructor(message: java.lang.String | string, source: BulkWriteException)
                    // @ts-ignore
                    public getErrors(): Array<BulkWriteError>
                    // @ts-ignore
                    public getResult(): BulkWriteResult
                }
            }
        }
    }
}
