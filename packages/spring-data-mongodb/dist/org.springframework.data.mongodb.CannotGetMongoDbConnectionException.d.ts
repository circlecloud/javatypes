declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                /**
                 * Exception being thrown in case we cannot connect to a MongoDB instance.
                 * @author Oliver Gierke
                 * @author Mark Paluch
                 */
                // @ts-ignore
                class CannotGetMongoDbConnectionException extends DataAccessResourceFailureException {
                    // @ts-ignore
                    constructor(msg: java.lang.String | string, cause: java.lang.Throwable | Error)
                    // @ts-ignore
                    constructor(msg: java.lang.String | string)
                    // @ts-ignore
                    constructor(msg: java.lang.String | string, database: java.lang.String | string, credentials: UserCredentials)
                    /**
                     * Returns the {@link UserCredentials} that were used when trying to connect to the MongoDB instance.
                     * @return 
                     */
                    // @ts-ignore
                    public getCredentials(): UserCredentials
                    /**
                     * Returns the name of the database trying to be accessed.
                     * @return 
                     */
                    // @ts-ignore
                    public getDatabase(): string
                }
            }
        }
    }
}
