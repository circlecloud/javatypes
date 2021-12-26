declare namespace io {
    namespace lumine {
        namespace utils {
            namespace tasks {
                namespace builder {
                    // @ts-ignore
                    interface TaskBuilder {
                        // @ts-ignore
                        newBuilder(): io.lumine.utils.tasks.builder.TaskBuilder
                        // @ts-ignore
                        on(context: io.lumine.utils.promise.ThreadContext): io.lumine.utils.tasks.builder.TaskBuilder.ThreadContextual
                        // @ts-ignore
                        sync(): io.lumine.utils.tasks.builder.TaskBuilder.ThreadContextual
                        // @ts-ignore
                        async(): io.lumine.utils.tasks.builder.TaskBuilder.ThreadContextual
                    }
                }
            }
        }
    }
}
