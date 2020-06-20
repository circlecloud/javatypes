declare namespace java {
    namespace util {
        namespace concurrent {
            /**
             * A delayed result-bearing action that can be cancelled.
             * Usually a scheduled future is the result of scheduling
             * a task with a {@link ScheduledExecutorService}.
             * @since 1.5
             * @author Doug Lea
             * @param <V> The result type returned by this Future
             */
            // @ts-ignore
            interface ScheduledFuture<V> extends java.util.concurrent.Delayed, java.util.concurrent.Future<V> {
            }
        }
    }
}
