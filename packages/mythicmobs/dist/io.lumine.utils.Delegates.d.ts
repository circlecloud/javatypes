declare namespace io {
    namespace lumine {
        namespace utils {
            // @ts-ignore
            class Delegates extends java.lang.Object {
                // @ts-ignore
                public static runnableToConsumer<T>(runnable: java.lang.Runnable): java.util.function$.Consumer<T>
                // @ts-ignore
                public static runnableToSupplier(runnable: java.lang.Runnable): java.util.function$.Supplier<java.lang.Void>
                // @ts-ignore
                public static callableToSupplier<T>(callable: java.util.concurrent.Callable<T>): java.util.function$.Supplier<T>
                // @ts-ignore
                public static consumerToBiConsumerFirst<T, U>(consumer: java.util.function$.Consumer<T>): java.util.function$.BiConsumer<T, U>
                // @ts-ignore
                public static consumerToBiConsumerSecond<T, U>(consumer: java.util.function$.Consumer<U>): java.util.function$.BiConsumer<T, U>
                // @ts-ignore
                public static predicateToBiPredicateFirst<T, U>(predicate: java.util.function$.Predicate<T>): java.util.function$.BiPredicate<T, U>
                // @ts-ignore
                public static predicateToBiPredicateSecond<T, U>(predicate: java.util.function$.Predicate<U>): java.util.function$.BiPredicate<T, U>
                // @ts-ignore
                public static consumerToFunction<T, U>(consumer: java.util.function$.Consumer<T>): java.util.function$.Function<T, U>
                // @ts-ignore
                public static runnableToFunction<T, U>(runnable: java.lang.Runnable): java.util.function$.Function<T, U>
            }
        }
    }
}
