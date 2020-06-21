declare namespace org {
    namespace apache {
        namespace catalina {
            namespace startup {
                /**
                 * Provides a {@link ForkJoinWorkerThreadFactory} that provides {@link
                 * ForkJoinWorkerThread}s that won't trigger memory leaks due to retained
                 * references to web application class loaders.
                 * <p>
                 * Note: This class must be available on the boot strap class path for it to be
                 * visible to {@link ForkJoinPool}.
                 */
                // @ts-ignore
                class SafeForkJoinWorkerThreadFactory extends java.lang.Object implements java.util.concurrent.ForkJoinPool.ForkJoinWorkerThreadFactory {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public newThread(pool: java.util.concurrent.ForkJoinPool): java.util.concurrent.ForkJoinWorkerThread
                }
            }
        }
    }
}
