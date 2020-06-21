declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace threads {
                    /**
                     * A custom {@link RuntimeException} thrown by the {@link ThreadPoolExecutor}
                     * to signal that the thread should be disposed of.
                     */
                    // @ts-ignore
                    class StopPooledThreadException extends java.lang.RuntimeException {
                        // @ts-ignore
                        constructor(msg: java.lang.String | string)
                    }
                }
            }
        }
    }
}
