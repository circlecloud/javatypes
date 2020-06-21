declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace support {
                /**
                 * JavaBean for holding JDBC error codes for a particular database.
                 * Instances of this class are normally loaded through a bean factory.
                 * <p>Used by Spring's {@link SQLErrorCodeSQLExceptionTranslator}.
                 * The file "sql-error-codes.xml" in this package contains default
                 * {@code SQLErrorCodes} instances for various databases.
                 * @author Thomas Risberg
                 * @author Juergen Hoeller
                 * @see SQLErrorCodesFactory
                 * @see SQLErrorCodeSQLExceptionTranslator
                 */
                // @ts-ignore
                class SQLErrorCodes extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set this property if the database name contains spaces,
                     * in which case we can not use the bean name for lookup.
                     */
                    // @ts-ignore
                    public setDatabaseProductName(databaseProductName: java.lang.String | string): void
                    // @ts-ignore
                    public getDatabaseProductName(): string
                    /**
                     * Set this property to specify multiple database names that contains spaces,
                     * in which case we can not use bean names for lookup.
                     */
                    // @ts-ignore
                    public setDatabaseProductNames(...databaseProductNames: java.lang.String[] | string[]): void
                    // @ts-ignore
                    public getDatabaseProductNames(): string[]
                    /**
                     * Set this property to true for databases that do not provide an error code
                     * but that do provide SQL State (this includes PostgreSQL).
                     */
                    // @ts-ignore
                    public setUseSqlStateForTranslation(useStateCodeForTranslation: boolean): void
                    // @ts-ignore
                    public isUseSqlStateForTranslation(): boolean
                    // @ts-ignore
                    public setBadSqlGrammarCodes(...badSqlGrammarCodes: java.lang.String[] | string[]): void
                    // @ts-ignore
                    public getBadSqlGrammarCodes(): string[]
                    // @ts-ignore
                    public setInvalidResultSetAccessCodes(...invalidResultSetAccessCodes: java.lang.String[] | string[]): void
                    // @ts-ignore
                    public getInvalidResultSetAccessCodes(): string[]
                    // @ts-ignore
                    public getDuplicateKeyCodes(): string[]
                    // @ts-ignore
                    public setDuplicateKeyCodes(...duplicateKeyCodes: java.lang.String[] | string[]): void
                    // @ts-ignore
                    public setDataIntegrityViolationCodes(...dataIntegrityViolationCodes: java.lang.String[] | string[]): void
                    // @ts-ignore
                    public getDataIntegrityViolationCodes(): string[]
                    // @ts-ignore
                    public setPermissionDeniedCodes(...permissionDeniedCodes: java.lang.String[] | string[]): void
                    // @ts-ignore
                    public getPermissionDeniedCodes(): string[]
                    // @ts-ignore
                    public setDataAccessResourceFailureCodes(...dataAccessResourceFailureCodes: java.lang.String[] | string[]): void
                    // @ts-ignore
                    public getDataAccessResourceFailureCodes(): string[]
                    // @ts-ignore
                    public setTransientDataAccessResourceCodes(...transientDataAccessResourceCodes: java.lang.String[] | string[]): void
                    // @ts-ignore
                    public getTransientDataAccessResourceCodes(): string[]
                    // @ts-ignore
                    public setCannotAcquireLockCodes(...cannotAcquireLockCodes: java.lang.String[] | string[]): void
                    // @ts-ignore
                    public getCannotAcquireLockCodes(): string[]
                    // @ts-ignore
                    public setDeadlockLoserCodes(...deadlockLoserCodes: java.lang.String[] | string[]): void
                    // @ts-ignore
                    public getDeadlockLoserCodes(): string[]
                    // @ts-ignore
                    public setCannotSerializeTransactionCodes(...cannotSerializeTransactionCodes: java.lang.String[] | string[]): void
                    // @ts-ignore
                    public getCannotSerializeTransactionCodes(): string[]
                    // @ts-ignore
                    public setCustomTranslations(...customTranslations: org.springframework.jdbc.support.CustomSQLErrorCodesTranslation[]): void
                    // @ts-ignore
                    public getCustomTranslations(): org.springframework.jdbc.support.CustomSQLErrorCodesTranslation[]
                    // @ts-ignore
                    public setCustomSqlExceptionTranslatorClass(customTranslatorClass: java.lang.Class<any>): void
                    // @ts-ignore
                    public setCustomSqlExceptionTranslator(customSqlExceptionTranslator: org.springframework.jdbc.support.SQLExceptionTranslator): void
                    // @ts-ignore
                    public getCustomSqlExceptionTranslator(): org.springframework.jdbc.support.SQLExceptionTranslator
                }
            }
        }
    }
}
