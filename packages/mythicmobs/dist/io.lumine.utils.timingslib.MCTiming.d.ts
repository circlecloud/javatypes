declare namespace io {
    namespace lumine {
        namespace utils {
            namespace timingslib {
                // @ts-ignore
                abstract class MCTiming extends java.lang.Object implements java.lang.AutoCloseable {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public abstract startTiming(): io.lumine.utils.timingslib.MCTiming
                    // @ts-ignore
                    public abstract stopTiming(): void
                    // @ts-ignore
                    public close(): void
                }
            }
        }
    }
}
