declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace scheduler {
                /**
                 * Provides a convenient injection for
                 * {@link Scheduler#createSyncExecutor(Object)}.
                 * <p>Use this annotation on a {@link SpongeExecutorService}.
                 * Remember that {@link Inject} is also necessary.</p>
                 */
                // @ts-ignore
                abstract class SynchronousExecutor implements java.lang.annotation.Annotation {
                }
            }
        }
    }
}
