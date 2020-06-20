declare namespace org {
    namespace springframework {
        namespace scheduling {
            namespace concurrent {
                /**
                 * Implementation of the {@link java.util.concurrent.ThreadFactory} interface,
                 * allowing for customizing the created threads (name, priority, etc).
                 * <p>See the base class {@link org.springframework.util.CustomizableThreadCreator}
                 * for details on the available configuration options.
                 * @author Juergen Hoeller
                 * @since 2.0.3
                 * @see #setThreadNamePrefix
                 * @see #setThreadPriority
                 */
                // @ts-ignore
                class CustomizableThreadFactory extends CustomizableThreadCreator implements java.util.concurrent.ThreadFactory {
                    /**
                     * Create a new CustomizableThreadFactory with default thread name prefix.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new CustomizableThreadFactory with the given thread name prefix.
                     * @param threadNamePrefix the prefix to use for the names of newly created threads
                     */
                    // @ts-ignore
                    constructor(threadNamePrefix: string)
                    // @ts-ignore
                    newThread(runnable: java.lang.Runnable): java.lang.Thread
                }
            }
        }
    }
}
