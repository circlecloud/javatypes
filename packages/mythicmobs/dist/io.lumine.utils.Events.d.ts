declare namespace io {
    namespace lumine {
        namespace utils {
            // @ts-ignore
            class Events extends java.lang.Object {
                // @ts-ignore
                public static subscribe<T extends Event>(eventClass: java.lang.Class<T>): io.lumine.utils.events.function$al.single.SingleSubscriptionBuilder<T>
                // @ts-ignore
                public static subscribe<T extends Event>(eventClass: java.lang.Class<T>, priority: EventPriority): io.lumine.utils.events.function$al.single.SingleSubscriptionBuilder<T>
                // @ts-ignore
                public static merge<T>(handledClass: java.lang.Class<T>): io.lumine.utils.events.function$al.merged.MergedSubscriptionBuilder<T>
                // @ts-ignore
                public static merge<T>(type: object): io.lumine.utils.events.function$al.merged.MergedSubscriptionBuilder<T>
                // @ts-ignore
                public static merge<S extends Event>(superClass: java.lang.Class<S>, ...eventClasses: java.lang.Class<any>[]): io.lumine.utils.events.function$al.merged.MergedSubscriptionBuilder<S>
                // @ts-ignore
                public static merge<S extends Event>(superClass: java.lang.Class<S>, priority: EventPriority, ...eventClasses: java.lang.Class<any>[]): io.lumine.utils.events.function$al.merged.MergedSubscriptionBuilder<S>
                // @ts-ignore
                public static call(event: Event): void
                // @ts-ignore
                public static callAsync(event: Event): void
                // @ts-ignore
                public static callSync(event: Event): void
                // @ts-ignore
                public static callAndReturn<T extends Event>(event: T): T
                // @ts-ignore
                public static callAsyncAndJoin<T extends Event>(event: T): T
                // @ts-ignore
                public static callSyncAndJoin<T extends Event>(event: T): T
            }
        }
    }
}
