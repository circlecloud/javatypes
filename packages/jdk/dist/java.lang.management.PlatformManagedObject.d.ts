declare namespace java {
    namespace lang {
        namespace management {
            /**
             * Super-interface of all platform <code>MXBean</code> exported by the Java Virtual
             * Machine. Each PlatformManagedObject instance can be uniquely identified
             * by its object name.
             * @since 1.7
             */
            // @ts-ignore
            interface PlatformManagedObject {
                /**
                 * Returns the ObjectName for this PlatformManagedObject.
                 * @return the ObjectName for this PlatformManagedObject.
                 */
                // @ts-ignore
                getObjectName(): javax.management.ObjectName
            }
        }
    }
}
