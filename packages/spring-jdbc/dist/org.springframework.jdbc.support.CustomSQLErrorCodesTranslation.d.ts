declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace support {
                /**
                 * JavaBean for holding custom JDBC error codes translation for a particular
                 * database. The "exceptionClass" property defines which exception will be
                 * thrown for the list of error codes specified in the errorCodes property.
                 * @author Thomas Risberg
                 * @since 1.1
                 * @see SQLErrorCodeSQLExceptionTranslator
                 */
                // @ts-ignore
                class CustomSQLErrorCodesTranslation extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set the SQL error codes to match.
                     */
                    // @ts-ignore
                    public setErrorCodes(...errorCodes: java.lang.String[] | string[]): void
                    /**
                     * Return the SQL error codes to match.
                     */
                    // @ts-ignore
                    public getErrorCodes(): string[]
                    /**
                     * Set the exception class for the specified error codes.
                     */
                    // @ts-ignore
                    public setExceptionClass(exceptionClass: java.lang.Class<any>): void
                    /**
                     * Return the exception class for the specified error codes.
                     */
                    // @ts-ignore
                    public getExceptionClass(): java.lang.Class<any>
                }
            }
        }
    }
}
