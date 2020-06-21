declare namespace cn {
    namespace nukkit {
        namespace utils {
            // @ts-ignore
            abstract class IterableThreadLocal<T> extends java.lang.ThreadLocal<T> implements java.lang.Iterable<T> {
                // @ts-ignore
                constructor()
                // @ts-ignore
                initialValue(): T
                // @ts-ignore
                public iterator(): java.util.Iterator<T>
                // @ts-ignore
                public init(): T
                // @ts-ignore
                public clean(): void
                // @ts-ignore
                public static clean(instance: java.lang.ThreadLocal<any>): void
                // @ts-ignore
                public static cleanAll(): void
                // @ts-ignore
                public getAll(): Array<T>
                // @ts-ignore
                finalize(): void
            }
        }
    }
}
