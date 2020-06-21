declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace threads {
                    /**
                     * Simple task thread factory to use to create threads for an executor
                     * implementation.
                     */
                    // @ts-ignore
                    class TaskThreadFactory extends java.lang.Object implements java.util.concurrent.ThreadFactory {
                        // @ts-ignore
                        constructor(namePrefix: java.lang.String | string, daemon: boolean, priority: number /*int*/)
                        // @ts-ignore
                        public newThread(r: java.lang.Runnable): java.lang.Thread
                    }
                }
            }
        }
    }
}
