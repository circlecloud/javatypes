declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                /**
                 * Wraps a list of throwables as a single throwable. This is intended to be used
                 * when multiple actions are taken where each may throw an exception but all
                 * actions are taken before any errors are reported.
                 * <p>
                 * This class is <b>NOT</b> threadsafe.
                 */
                // @ts-ignore
                class MultiThrowable extends java.lang.Throwable {
                    // @ts-ignore
                    constructor()
                    /**
                     * Add a throwable to the list of wrapped throwables.
                     * @param t The throwable to add
                     */
                    // @ts-ignore
                    public add(t: java.lang.Throwable | Error): void
                    /**
                     * @return A read-only list of the wrapped throwables.
                     */
                    // @ts-ignore
                    public getThrowables(): Array<java.lang.Throwable | Error>
                    /**
                     * @return {#code null} if there are no wrapped throwables, the Throwable if
                     *          there is a single wrapped throwable or the current instance of
                     *          there are multiple wrapped throwables
                     */
                    // @ts-ignore
                    public getThrowable(): Error
                    /**
                     * @return The number of throwables currently wrapped by this instance.
                     */
                    // @ts-ignore
                    public size(): number /*int*/
                    /**
                     * Overrides the default implementation to provide a concatenation of the
                     * messages associated with each of the wrapped throwables. Note that the
                     * format of the returned String is not guaranteed to be fixed and may
                     * change in a future release.
                     */
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
