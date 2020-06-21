declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace threads {
                    /**
                     * A Thread implementation that records the time at which it was created.
                     */
                    // @ts-ignore
                    class TaskThread extends java.lang.Thread {
                        // @ts-ignore
                        constructor(group: java.lang.ThreadGroup, target: java.lang.Runnable, name: java.lang.String | string)
                        // @ts-ignore
                        constructor(group: java.lang.ThreadGroup, target: java.lang.Runnable, name: java.lang.String | string, stackSize: number /*long*/)
                        /**
                         * @return the time (in ms) at which this thread was created
                         */
                        // @ts-ignore
                        public getCreationTime(): number /*long*/
                    }
                }
            }
        }
    }
}
