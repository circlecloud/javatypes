declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace support {
                /**
                 * Bean that checks if a database has already started up. To be referenced
                 * via "depends-on" from beans that depend on database startup, like a Hibernate
                 * SessionFactory or custom data access objects that access a DataSource directly.
                 * <p>Useful to defer application initialization until a database has started up.
                 * Particularly appropriate for waiting on a slowly starting Oracle database.
                 * @author Juergen Hoeller
                 * @since 18.12.2003
                 */
                // @ts-ignore
                class DatabaseStartupValidator extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * The default interval.
                     */
                    // @ts-ignore
                    public static readonly DEFAULT_INTERVAL: number /*int*/
                    /**
                     * The default timeout.
                     */
                    // @ts-ignore
                    public static readonly DEFAULT_TIMEOUT: number /*int*/
                    // @ts-ignore
                    readonly logger: Log
                    /**
                     * Set the DataSource to validate.
                     */
                    // @ts-ignore
                    public setDataSource(dataSource: javax.sql.DataSource): void
                    /**
                     * Set the SQL query string to use for validation.
                     */
                    // @ts-ignore
                    public setValidationQuery(validationQuery: java.lang.String | string): void
                    /**
                     * Set the interval between validation runs (in seconds).
                     * Default is {@value #DEFAULT_INTERVAL}.
                     */
                    // @ts-ignore
                    public setInterval(interval: number /*int*/): void
                    /**
                     * Set the timeout (in seconds) after which a fatal exception
                     * will be thrown. Default is {@value #DEFAULT_TIMEOUT}.
                     */
                    // @ts-ignore
                    public setTimeout(timeout: number /*int*/): void
                    /**
                     * Check whether the validation query can be executed on a Connection
                     * from the specified DataSource, with the specified interval between
                     * checks, until the specified timeout.
                     */
                    // @ts-ignore
                    public afterPropertiesSet(): void
                }
            }
        }
    }
}
