declare namespace org {
    namespace apache {
        namespace tomcat {
            // @ts-ignore
            interface PeriodicEventListener {
                /**
                 * Execute a periodic task, such as reloading, etc.
                 */
                // @ts-ignore
                periodicEvent(): void
            }
        }
    }
}
