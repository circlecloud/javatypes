declare namespace io {
    namespace lumine {
        namespace utils {
            namespace terminable {
                // @ts-ignore
                interface Terminable extends java.lang.AutoCloseable {
                    // @ts-ignore
                    terminate(): boolean
                    // @ts-ignore
                    close(): void
                    // @ts-ignore
                    isClosed(): boolean
                    // @ts-ignore
                    hasTerminated(): boolean
                    // @ts-ignore
                    closeSilently(): java.lang.Exception
                    // @ts-ignore
                    closeAndReportException(): void
                    // @ts-ignore
                    bindWith(consumer: io.lumine.utils.terminable.TerminableConsumer): void
                }
            }
        }
    }
}
