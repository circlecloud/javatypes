declare namespace org {
    namespace springframework {
        namespace scheduling {
            namespace annotation {
                /**
                 * Interface to be implemented by @{@link org.springframework.context.annotation.Configuration
                 * Configuration} classes annotated with @{@link EnableAsync} that wish to customize the
                 * {@link Executor} instance used when processing async method invocations or the
                 * {@link AsyncUncaughtExceptionHandler} instance used to process exception thrown from
                 * async method with {@code void} return type.
                 * <p>Consider using {@link AsyncConfigurerSupport} providing default implementations for
                 * both methods if only one element needs to be customized. Furthermore, backward compatibility
                 * of this interface will be insured in case new customization options are introduced
                 * in the future.
                 * <p>See @{@link EnableAsync} for usage examples.
                 * @author Chris Beams
                 * @author Stephane Nicoll
                 * @since 3.1
                 * @see AbstractAsyncConfiguration
                 * @see EnableAsync
                 * @see AsyncConfigurerSupport
                 */
                // @ts-ignore
                interface AsyncConfigurer {
                    /**
                     * The {@link Executor} instance to be used when processing async
                     * method invocations.
                     */
                    // @ts-ignore
                    getAsyncExecutor(): java.util.concurrent.Executor
                    /**
                     * The {@link AsyncUncaughtExceptionHandler} instance to be used
                     * when an exception is thrown during an asynchronous method execution
                     * with {@code void} return type.
                     */
                    // @ts-ignore
                    getAsyncUncaughtExceptionHandler(): AsyncUncaughtExceptionHandler
                }
            }
        }
    }
}
