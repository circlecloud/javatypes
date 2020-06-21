declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace datasource {
                /**
                 * JDBC {@link javax.sql.DataSource} implementation that delegates all calls
                 * to a given target {@link javax.sql.DataSource}.
                 * <p>This class is meant to be subclassed, with subclasses overriding only
                 * those methods (such as {@link #getConnection()}) that should not simply
                 * delegate to the target DataSource.
                 * @author Juergen Hoeller
                 * @since 1.1
                 * @see #getConnection
                 */
                // @ts-ignore
                class DelegatingDataSource extends java.lang.Object implements javax.sql.DataSource {
                    /**
                     * Create a new DelegatingDataSource.
                     * @see #setTargetDataSource
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new DelegatingDataSource.
                     * @param targetDataSource the target DataSource
                     */
                    // @ts-ignore
                    constructor(targetDataSource: javax.sql.DataSource)
                    /**
                     * Set the target DataSource that this DataSource should delegate to.
                     */
                    // @ts-ignore
                    public setTargetDataSource(targetDataSource: javax.sql.DataSource): void
                    /**
                     * Return the target DataSource that this DataSource should delegate to.
                     */
                    // @ts-ignore
                    public getTargetDataSource(): javax.sql.DataSource
                    /**
                     * Obtain the target {@code DataSource} for actual use (never {@code null}).
                     * @since 5.0
                     */
                    // @ts-ignore
                    obtainTargetDataSource(): javax.sql.DataSource
                    // @ts-ignore
                    public afterPropertiesSet(): void
                    // @ts-ignore
                    public getConnection(): java.sql.Connection
                    // @ts-ignore
                    public getConnection(username: java.lang.String | string, password: java.lang.String | string): java.sql.Connection
                    // @ts-ignore
                    public getLogWriter(): java.io.PrintWriter
                    // @ts-ignore
                    public setLogWriter(out: java.io.PrintWriter): void
                    // @ts-ignore
                    public getLoginTimeout(): number /*int*/
                    // @ts-ignore
                    public setLoginTimeout(seconds: number /*int*/): void
                    // @ts-ignore
                    public unwrap<T>(iface: java.lang.Class<T>): T
                    // @ts-ignore
                    public isWrapperFor(iface: java.lang.Class<any>): boolean
                    // @ts-ignore
                    public getParentLogger(): java.util.logging.Logger
                }
            }
        }
    }
}
