declare namespace org {
    namespace apache {
        namespace catalina {
            namespace valves {
                /**
                 * This valve allows to detect requests that take a long time to process, which
                 * might indicate that the thread that is processing it is stuck.
                 */
                // @ts-ignore
                class StuckThreadDetectionValve extends org.apache.catalina.valves.ValveBase {
                    /**
                     * Required to enable async support.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Specifies the threshold (in seconds) used when checking for stuck threads.
                     * If &lt;=0, the detection is disabled. The default is 600 seconds.
                     * @param threshold
                     *             The new threshold in seconds
                     */
                    // @ts-ignore
                    public setThreshold(threshold: number /*int*/): void
                    /**
                     * @see #setThreshold(int)
                     * @return The current threshold in seconds
                     */
                    // @ts-ignore
                    public getThreshold(): number /*int*/
                    // @ts-ignore
                    public getInterruptThreadThreshold(): number /*int*/
                    /**
                     * Specifies the threshold (in seconds) before stuck threads are interrupted.
                     * If &lt;=0, the interruption is disabled. The default is -1.
                     * If &gt;=0, the value must actually be &gt;= threshold.
                     * @param interruptThreadThreshold
                     *             The new thread interruption threshold in seconds
                     */
                    // @ts-ignore
                    public setInterruptThreadThreshold(interruptThreadThreshold: number /*int*/): void
                    // @ts-ignore
                    initInternal(): void
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public invoke(request: org.apache.catalina.connector.Request, response: org.apache.catalina.connector.Response): void
                    // @ts-ignore
                    public backgroundProcess(): void
                    // @ts-ignore
                    public getStuckThreadCount(): number /*int*/
                    // @ts-ignore
                    public getStuckThreadIds(): number /*long*/[]
                    // @ts-ignore
                    public getStuckThreadNames(): string[]
                    // @ts-ignore
                    public getInterruptedThreadsCount(): number /*long*/
                }
            }
        }
    }
}
