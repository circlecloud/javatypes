declare namespace io {
    namespace lumine {
        namespace utils {
            namespace events {
                // @ts-ignore
                class Events extends java.lang.Object {
                    // @ts-ignore
                    public static readonly DEFAULT_FILTERS: io.lumine.utils.events.Events.DefaultFilters
                    // @ts-ignore
                    public static subscribe<T extends Event>(eventClass: java.lang.Class<T>): io.lumine.utils.events.Events.HandlerBuilder<T>
                    // @ts-ignore
                    public static subscribe<T extends Event>(eventClass: java.lang.Class<T>, priority: EventPriority): io.lumine.utils.events.Events.HandlerBuilder<T>
                    // @ts-ignore
                    public static merge<T>(handledClass: java.lang.Class<T>): io.lumine.utils.events.Events.MergedHandlerBuilder<T>
                    // @ts-ignore
                    public static merge<T>(type: object): io.lumine.utils.events.Events.MergedHandlerBuilder<T>
                    // @ts-ignore
                    public static merge<S extends Event>(superClass: java.lang.Class<S>, ...eventClasses: java.lang.Class<any>[]): io.lumine.utils.events.Events.MergedHandlerBuilder<S>
                    // @ts-ignore
                    public static merge<S extends Event>(superClass: java.lang.Class<S>, priority: EventPriority, ...eventClasses: java.lang.Class<any>[]): io.lumine.utils.events.Events.MergedHandlerBuilder<S>
                    // @ts-ignore
                    public static call(event: Event): void
                    // @ts-ignore
                    public static callAsync(event: Event): void
                    // @ts-ignore
                    public static callSync(event: Event): void
                }
            }
        }
    }
}
