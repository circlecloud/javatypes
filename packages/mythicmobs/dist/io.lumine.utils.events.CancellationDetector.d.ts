declare namespace io {
    namespace lumine {
        namespace utils {
            namespace events {
                // @ts-ignore
                class CancellationDetector<TEvent extends Event> extends java.lang.Object {
                    // @ts-ignore
                    constructor(eventClazz: java.lang.Class<TEvent>)
                    // @ts-ignore
                    public addListener(listener: io.lumine.utils.events.CancellationDetector.CancelListener<TEvent>): void
                    // @ts-ignore
                    public removeListener(listener: io.lumine.utils.events.CancellationDetector.CancelListener<Event>): void
                    // @ts-ignore
                    public close(): void
                }
            }
        }
    }
}
