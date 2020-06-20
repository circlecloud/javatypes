declare namespace org {
    namespace springframework {
        namespace scheduling {
            namespace annotation {
                /**
                 * Abstract base {@code Configuration} class providing common structure for enabling
                 * Spring's asynchronous method execution capability.
                 * @author Chris Beams
                 * @author Juergen Hoeller
                 * @author Stephane Nicoll
                 * @since 3.1
                 * @see EnableAsync
                 */
                // @ts-ignore
                class AbstractAsyncConfiguration extends java.lang.Object implements org.springframework.context.annotation.ImportAware {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    enableAsync: AnnotationAttributes
                    // @ts-ignore
                    executor: java.util.function.Supplier<java.util.concurrent.Executor> | java.util.function$.Supplier<java.util.concurrent.Executor>
                    // @ts-ignore
                    exceptionHandler: java.util.function.Supplier<AsyncUncaughtExceptionHandler> | java.util.function$.Supplier<AsyncUncaughtExceptionHandler>
                    // @ts-ignore
                    setImportMetadata(importMetadata: AnnotationMetadata): void
                }
            }
        }
    }
}
