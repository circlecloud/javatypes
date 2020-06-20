declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace scheduler {
                /**
                 * A delegating {@link ExecutorService} that schedules all its tasks on
                 * Sponge's {@link Scheduler}.
                 * <p>This class can be used to allow any libraries that support the
                 * standard concurrency interface to schedule their asynchronous
                 * tasks through Sponge.</p>
                 */
                // @ts-ignore
                interface SpongeExecutorService extends java.util.concurrent.ScheduledExecutorService {
                    // @ts-ignore
                    schedule(command: java.lang.Runnable, delay: number /*long*/, unit: java.util.concurrent.TimeUnit): org.spongepowered.api.scheduler.SpongeExecutorService.SpongeFuture<?>
                    // @ts-ignore
                    schedule<V>(callable: java.util.concurrent.Callable<V>, delay: number /*long*/, unit: java.util.concurrent.TimeUnit): org.spongepowered.api.scheduler.SpongeExecutorService.SpongeFuture<V>
                    // @ts-ignore
                    scheduleAtFixedRate(command: java.lang.Runnable, initialDelay: number /*long*/, period: number /*long*/, unit: java.util.concurrent.TimeUnit): org.spongepowered.api.scheduler.SpongeExecutorService.SpongeFuture<?>
                    // @ts-ignore
                    scheduleWithFixedDelay(command: java.lang.Runnable, initialDelay: number /*long*/, delay: number /*long*/, unit: java.util.concurrent.TimeUnit): org.spongepowered.api.scheduler.SpongeExecutorService.SpongeFuture<?>
                }
            }
        }
    }
}
