declare namespace io {
    namespace lumine {
        namespace utils {
            namespace tasks {
                namespace builder {
                    namespace TaskBuilder {
                        // @ts-ignore
                        interface ThreadContextual {
                            // @ts-ignore
                            now(): io.lumine.utils.tasks.builder.ContextualPromiseBuilder
                            // @ts-ignore
                            after(p0: number /*long*/): io.lumine.utils.tasks.builder.TaskBuilder.DelayedTick
                            // @ts-ignore
                            after(p0: number /*long*/, p1: java.util.concurrent.TimeUnit): io.lumine.utils.tasks.builder.TaskBuilder.DelayedTime
                            // @ts-ignore
                            afterAndEvery(p0: number /*long*/): io.lumine.utils.tasks.builder.ContextualTaskBuilder
                            // @ts-ignore
                            afterAndEvery(p0: number /*long*/, p1: java.util.concurrent.TimeUnit): io.lumine.utils.tasks.builder.ContextualTaskBuilder
                            // @ts-ignore
                            every(p0: number /*long*/): io.lumine.utils.tasks.builder.ContextualTaskBuilder
                            // @ts-ignore
                            every(p0: number /*long*/, p1: java.util.concurrent.TimeUnit): io.lumine.utils.tasks.builder.ContextualTaskBuilder
                        }
                    }
                }
            }
        }
    }
}
