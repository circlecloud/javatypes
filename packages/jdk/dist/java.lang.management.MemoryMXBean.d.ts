declare namespace java {
    namespace lang {
        namespace management {
            /**
             * The management and monitoring interface for a virtual machine's memory
             * system.
             * <p>
             * Precisely one instance of this interface will be made available to management
             * clients.
             * </p>
             * <p>
             * Accessing this <code>MXBean</code> can be done in one of three ways.
             * <ol>
             * <li>Invoking the static {@link ManagementFactory#getMemoryMXBean} method.
             * </li>
             * <li>Using a {@link javax.management.MBeanServerConnection}.</li>
             * <li>Obtaining a proxy MXBean from the static
             * {@link ManagementFactory#newPlatformMXBeanProxy} method, passing in the
             * string &quot;java.lang:type=ClassLoading&quot; for the value of the second
             * parameter.</li>
             * </ol>
             */
            // @ts-ignore
            interface MemoryMXBean extends java.lang.management.PlatformManagedObject {
                /**
                 * Requests the virtual machine to run the system garbage collector.
                 */
                // @ts-ignore
                gc(): void
                /**
                 * Returns the current memory usage of the heap for both live objects and
                 * for objects no longer in use which are awaiting garbage collection.
                 * @return an instance of {#link MemoryUsage} which can be interrogated by
                 *          the caller.
                 */
                // @ts-ignore
                getHeapMemoryUsage(): java.lang.management.MemoryUsage
                /**
                 * Returns the current non-heap memory usage for the virtual machine.
                 * @return an instance of {#link MemoryUsage} which can be interrogated by
                 *          the caller.
                 */
                // @ts-ignore
                getNonHeapMemoryUsage(): java.lang.management.MemoryUsage
                /**
                 * Returns the number of objects in the virtual machine that are awaiting
                 * finalization. The returned value should only be used as an approximate
                 * guide.
                 * @return the number of objects awaiting finalization.
                 */
                // @ts-ignore
                getObjectPendingFinalizationCount(): int
                /**
                 * Returns a boolean indication of whether or not the memory system is
                 * producing verbose output.
                 * @return <code>true</code> if verbose output is being produced ;
                 *          <code>false</code> otherwise.
                 */
                // @ts-ignore
                isVerbose(): boolean
                /**
                 * Updates the verbose output setting of the memory system.
                 * @param value
                 *             <code>true</code> enables verbose output ;
                 *             <code>false</code> disables verbose output.
                 * @throws SecurityException
                 *              if a {#link SecurityManager} is being used and the caller
                 *              does not have the <code>ManagementPermission</code> value
                 *              of &quot;control&quot;.
                 * @see ManagementPermission
                 */
                // @ts-ignore
                setVerbose(value: boolean): void
            }
        }
    }
}
