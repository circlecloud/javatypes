declare namespace org {
    namespace apache {
        namespace catalina {
            namespace valves {
                /**
                 * <p>Implementation of a Valve that outputs HTML error pages.</p>
                 * <p>This Valve should be attached at the Host level, although it will work
                 * if attached to a Context.</p>
                 * <p>HTML code from the Cocoon 2 project.</p>
                 * @author Remy Maucherat
                 * @author Craig R. McClanahan
                 * @author <a href="mailto:nicolaken#supereva.it">Nicola Ken Barozzi</a> Aisa
                 * @author <a href="mailto:stefano#apache.org">Stefano Mazzocchi</a>
                 * @author Yoav Shapira
                 */
                // @ts-ignore
                class ErrorReportValve extends org.apache.catalina.valves.ValveBase {
                    // @ts-ignore
                    constructor()
                    /**
                     * Invoke the next Valve in the sequence. When the invoke returns, check
                     * the response state. If the status code is greater than or equal to 400
                     * or an uncaught exception was thrown then the error handling will be
                     * triggered.
                     * @param request The servlet request to be processed
                     * @param response The servlet response to be created
                     * @exception IOException if an input/output error occurs
                     * @exception ServletException if a servlet error occurs
                     */
                    // @ts-ignore
                    public invoke(request: org.apache.catalina.connector.Request, response: org.apache.catalina.connector.Response): void
                    /**
                     * Prints out an error report.
                     * @param request The request being processed
                     * @param response The response being generated
                     * @param throwable The exception that occurred (which possibly wraps
                     *   a root cause exception
                     */
                    // @ts-ignore
                    report(request: org.apache.catalina.connector.Request, response: org.apache.catalina.connector.Response, throwable: java.lang.Throwable | Error): void
                    /**
                     * Print out a partial servlet stack trace (truncating at the last
                     * occurrence of javax.servlet.).
                     * @param t The stack trace to process
                     * @return the stack trace relative to the application layer
                     */
                    // @ts-ignore
                    getPartialServletStackTrace(t: java.lang.Throwable | Error): string
                    /**
                     * Enables/Disables full error reports
                     * @param showReport <code>true</code> to show full error data
                     */
                    // @ts-ignore
                    public setShowReport(showReport: boolean): void
                    // @ts-ignore
                    public isShowReport(): boolean
                    /**
                     * Enables/Disables server info on error pages
                     * @param showServerInfo <code>true</code> to show server info
                     */
                    // @ts-ignore
                    public setShowServerInfo(showServerInfo: boolean): void
                    // @ts-ignore
                    public isShowServerInfo(): boolean
                    // @ts-ignore
                    public setProperty(name: java.lang.String | string, value: java.lang.String | string): boolean
                    // @ts-ignore
                    public getProperty(name: java.lang.String | string): string
                }
            }
        }
    }
}
