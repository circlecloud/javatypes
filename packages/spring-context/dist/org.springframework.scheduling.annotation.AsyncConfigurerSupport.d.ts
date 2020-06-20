declare namespace org {
    namespace springframework {
        namespace scheduling {
            namespace annotation {
                /**
                 * A convenience {@link AsyncConfigurer} that implements all methods
                 * so that the defaults are used. Provides a backward compatible alternative
                 * of implementing {@link AsyncConfigurer} directly.
                 * @author Stephane Nicoll
                 * @since 4.1
                 */
                // @ts-ignore
                class AsyncConfigurerSupport extends java.lang.Object implements org.springframework.scheduling.annotation.AsyncConfigurer {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    getAsyncExecutor(): java.util.concurrent.Executor
                    // @ts-ignore
                    getAsyncUncaughtExceptionHandler(): AsyncUncaughtExceptionHandler
                }
            }
        }
    }
}
