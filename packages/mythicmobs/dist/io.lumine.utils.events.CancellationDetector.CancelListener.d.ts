declare namespace io {
    namespace lumine {
        namespace utils {
            namespace events {
                namespace CancellationDetector {
                    // @ts-ignore
                    interface CancelListener<TEvent extends Event> {
                        // @ts-ignore
                        onCancelled(p0: Plugin, p1: TEvent): void
                    }
                }
            }
        }
    }
}
