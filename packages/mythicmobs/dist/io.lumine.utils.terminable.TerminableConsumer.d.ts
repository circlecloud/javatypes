declare namespace io {
    namespace lumine {
        namespace utils {
            namespace terminable {
                // @ts-ignore
                interface TerminableConsumer {
                    // @ts-ignore
                    bind<T extends java.lang.AutoCloseable>(p0: T): T
                    // @ts-ignore
                    bindModule<T extends io.lumine.utils.terminable.TerminableModule>(module: T): T
                }
            }
        }
    }
}
