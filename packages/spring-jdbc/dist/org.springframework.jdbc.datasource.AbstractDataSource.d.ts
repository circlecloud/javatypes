declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace datasource {
                /**
                 * Abstract base class for Spring's {@link javax.sql.DataSource}
                 * implementations, taking care of the padding.
                 * <p>'Padding' in the context of this class means default implementations
                 * for certain methods from the {@code DataSource} interface, such as
                 * {@link #getLoginTimeout()}, {@link #setLoginTimeout(int)}, and so forth.
                 * @author Juergen Hoeller
                 * @since 07.05.2003
                 * @see DriverManagerDataSource
                 */
                // @ts-ignore
                abstract class AbstractDataSource extends java.lang.Object implements javax.sql.DataSource {
                    // @ts-ignore
                    constructor()
                    /**
                     * Logger available to subclasses.
                     */
                    // @ts-ignore
                    readonly logger: Log
                    /**
                     * Returns 0, indicating the default system timeout is to be used.
                     */
                    // @ts-ignore
                    public getLoginTimeout(): number /*int*/
                    /**
                     * Setting a login timeout is not supported.
                     */
                    // @ts-ignore
                    public setLoginTimeout(timeout: number /*int*/): void
                    /**
                     * LogWriter methods are not supported.
                     */
                    // @ts-ignore
                    public getLogWriter(): java.io.PrintWriter
                    /**
                     * LogWriter methods are not supported.
                     */
                    // @ts-ignore
                    public setLogWriter(pw: java.io.PrintWriter): void
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
