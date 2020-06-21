declare namespace java {
    namespace util {
        namespace concurrent {
            /**
             * A recursive result-bearing {@link ForkJoinTask}.
             * <p>For a classic example, here is a task computing Fibonacci numbers:
             * <pre> {@code
             * class Fibonacci extends RecursiveTask<Integer> {
             * final int n;
             * Fibonacci(int n) { this.n = n; }
             * Integer compute() {
             * if (n <= 1)
             * return n;
             * Fibonacci f1 = new Fibonacci(n - 1);
             * f1.fork();
             * Fibonacci f2 = new Fibonacci(n - 2);
             * return f2.compute() + f1.join();
             * }
             * }}</pre>
             * However, besides being a dumb way to compute Fibonacci functions
             * (there is a simple fast linear algorithm that you'd use in
             * practice), this is likely to perform poorly because the smallest
             * subtasks are too small to be worthwhile splitting up. Instead, as
             * is the case for nearly all fork/join applications, you'd pick some
             * minimum granularity size (for example 10 here) for which you always
             * sequentially solve rather than subdividing.
             * @since 1.7
             * @author Doug Lea
             */
            // @ts-ignore
            abstract class RecursiveTask<V> extends java.util.concurrent.ForkJoinTask<V> {
                // @ts-ignore
                constructor()
                /**
                 * The main computation performed by this task.
                 * @return the result of the computation
                 */
                // @ts-ignore
                abstract compute(): V
                // @ts-ignore
                public getRawResult(): V
                // @ts-ignore
                setRawResult(value: V): void
                /**
                 * Implements execution conventions for RecursiveTask.
                 */
                // @ts-ignore
                exec(): boolean
            }
        }
    }
}
