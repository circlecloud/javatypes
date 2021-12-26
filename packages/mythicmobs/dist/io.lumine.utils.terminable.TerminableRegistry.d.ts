declare namespace io {
    namespace lumine {
        namespace utils {
            namespace terminable {
                // @ts-ignore
                interface TerminableRegistry extends java.util.function.Consumer<io.lumine.utils.terminable.Terminable>, io.lumine.utils.terminable.Terminable {
                    // @ts-ignore
                    create(): io.lumine.utils.terminable.TerminableRegistry
                    // @ts-ignore
                    bindTerminable<T extends io.lumine.utils.terminable.CompositeTerminable>(p0: T): T
                    // @ts-ignore
                    cleanup(): void
                }
            }
        }
    }
}
