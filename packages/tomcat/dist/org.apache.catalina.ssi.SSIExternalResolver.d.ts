declare namespace org {
    namespace apache {
        namespace catalina {
            namespace ssi {
                /**
                 * Interface used by SSIMediator to talk to the 'outside world' ( usually a
                 * servlet )
                 * @author Dan Sandberg
                 */
                // @ts-ignore
                interface SSIExternalResolver {
                    /**
                     * Adds any external variables to the variableNames collection.
                     * @param variableNames
                     *             the collection to add to
                     */
                    // @ts-ignore
                    addVariableNames(variableNames: java.util.Collection<java.lang.String | string> | Array<java.lang.String | string>): void
                    // @ts-ignore
                    getVariableValue(name: java.lang.String | string): string
                    /**
                     * Set the named variable to the specified value. If value is null, then
                     * the variable will be removed ( ie. a call to getVariableValue will
                     * return null )
                     * @param name
                     *             of the variable
                     * @param value
                     *             of the variable
                     */
                    // @ts-ignore
                    setVariableValue(name: java.lang.String | string, value: java.lang.String | string): void
                    /**
                     * Returns the current date. This is useful for putting the SSI stuff in a
                     * regression test. Since you can make the current date a constant, it
                     * makes testing easier since the output won't change.
                     * @return the data
                     */
                    // @ts-ignore
                    getCurrentDate(): java.util.Date
                    // @ts-ignore
                    getFileSize(path: java.lang.String | string, virtual: boolean): number /*long*/
                    // @ts-ignore
                    getFileLastModified(path: java.lang.String | string, virtual: boolean): number /*long*/
                    // @ts-ignore
                    getFileText(path: java.lang.String | string, virtual: boolean): string
                    // @ts-ignore
                    log(message: java.lang.String | string, throwable: java.lang.Throwable | Error): void
                }
            }
        }
    }
}
