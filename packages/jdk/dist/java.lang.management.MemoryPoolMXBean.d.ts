declare namespace java {
    namespace lang {
        namespace management {
            /**
             * The management and monitoring interface for a virtual machine memory pool. A
             * memory pool is managed by one or more instances of
             * {@link MemoryManagerMXBean}.
             * <P>
             * In any given Java virtual machine there can be at one or more instances of
             * this interface. Each may be distinguished by their separate
             * <code>ObjectName</code> value.
             * </P>
             * <p>
             * Accessing this kind of <code>MXBean</code> can be done in one of three
             * ways.
             * <ol>
             * <li>Invoking the static {@link ManagementFactory#getMemoryPoolMXBeans()}
             * method which returns a {@link java.util.List} of all currently instantiated
             * MemoryPoolMXBeans.</li>
             * <li>Using a {@link javax.management.MBeanServerConnection}.</li>
             * <li>Obtaining a proxy MXBean from the static
             * {@link ManagementFactory#newPlatformMXBeanProxy} method, passing in the
             * string &quot;java.lang:type=MemoryPool,name= <i>unique memory pool name
             * </i>&quot; for the value of the second parameter.</li>
             * </ol>
             * @since 1.5
             */
            // @ts-ignore
            interface MemoryPoolMXBean extends java.lang.management.PlatformManagedObject {
                /**
                 * If supported by the virtual machine, returns a {@link MemoryUsage} which
                 * encapsulates this memory pool's memory usage after the most recent run of
                 * the garbage collector. No garbage collection will be actually occur as a
                 * result of this method getting called.
                 * @return a {#link MemoryUsage} object that may be interrogated by the
                 *          caller to determine the details of the memory usage. Returns
                 *          <code>null</code> if the virtual machine does not support this
                 *          method.
                 */
                // @ts-ignore
                getCollectionUsage(): java.lang.management.MemoryUsage
                /**
                 * Returns this memory pool's collection usage threshold.
                 * @return the collection usage threshold in bytes. The default value as set
                 *          by the virtual machine will be zero.
                 * @throws UnsupportedOperationException
                 *              if the memory pool does not support a collection usage
                 *              threshold.
                 * @see #isCollectionUsageThresholdSupported()
                 */
                // @ts-ignore
                getCollectionUsageThreshold(): number /*long*/
                /**
                 * Returns the number of times that the memory usage for this memory pool
                 * has grown to exceed the collection usage threshold.
                 * @return a count of the number of times that the collection usage
                 *          threshold has been surpassed.
                 * @throws UnsupportedOperationException
                 *              if the memory pool does not support a collection usage
                 *              threshold.
                 * @see #isCollectionUsageThresholdSupported()
                 */
                // @ts-ignore
                getCollectionUsageThresholdCount(): number /*long*/
                /**
                 * Returns a string array containing the unique names of each memory manager
                 * that manages this memory pool. A memory pool will always have at least
                 * one memory manager associated with it.
                 * @return the names of all the memory managers for this memory pool.
                 */
                // @ts-ignore
                getMemoryManagerNames(): string[]
                /**
                 * Returns the name of this memory pool.
                 * @return the name of this memory pool.
                 */
                // @ts-ignore
                getName(): string
                /**
                 * Returns information on the peak usage of the memory pool. The scope of
                 * this covers all elapsed time since either the start of the virtual
                 * machine or the peak usage was reset.
                 * @return a {#link MemoryUsage} which can be interrogated by the caller to
                 *          determine details of the peak memory usage. A <code>null</code>
                 *          value will be returned if the memory pool no longer exists (and
                 *          the pool is therefore considered to be invalid).
                 * @see #resetPeakUsage()
                 * @see #isValid()
                 */
                // @ts-ignore
                getPeakUsage(): java.lang.management.MemoryUsage
                /**
                 * Returns the memory pool's type.
                 * @return a {#link MemoryType} value indicating the type of the memory pool
                 *          (heap or non-heap).
                 */
                // @ts-ignore
                getType(): java.lang.management.MemoryType
                /**
                 * Returns the current memory usage of this memory pool as estimated by the
                 * virtual machine.
                 * @return an instance of {#link MemoryUsage} that can be interrogated by
                 *          the caller to determine details on the pool's current memory
                 *          usage. A <code>null</code> value will be returned if the memory
                 *          pool no longer exists (in which case it is considered to be
                 *          invalid).
                 * @see #isValid()
                 */
                // @ts-ignore
                getUsage(): java.lang.management.MemoryUsage
                /**
                 * Returns this memory pool's usage threshold.
                 * @return the usage threshold in bytes. The default value as set by the
                 *          virtual machine depends on the platform the virtual machine is
                 *          running on. will be zero.
                 * @throws UnsupportedOperationException
                 *              if the memory pool does not support a usage threshold.
                 * @see #isUsageThresholdSupported()
                 * @see #setUsageThreshold(long)
                 */
                // @ts-ignore
                getUsageThreshold(): number /*long*/
                /**
                 * Returns the number of times that the memory usage for this memory pool
                 * has grown to exceed the current usage threshold.
                 * @return a count of the number of times that the usage threshold has been
                 *          surpassed.
                 * @throws UnsupportedOperationException
                 *              if the memory pool does not support a usage threshold.
                 * @see #isUsageThresholdSupported()
                 */
                // @ts-ignore
                getUsageThresholdCount(): number /*long*/
                /**
                 * Returns a boolean indication of whether or not this memory pool hit or
                 * exceeded the current value of the collection usage threshold after the
                 * latest garbage collection run.
                 * @return <code>true</code> if the collection usage threshold was
                 *          surpassed after the latest garbage collection run, otherwise
                 *          <code>false</code>.
                 * @throws UnsupportedOperationException
                 *              if the memory pool does not support a collection usage
                 *              threshold.
                 * @see #isCollectionUsageThresholdSupported()
                 */
                // @ts-ignore
                isCollectionUsageThresholdExceeded(): boolean
                /**
                 * Returns a boolean indication of whether or not this memory pool supports
                 * a collection usage threshold.
                 * @return <code>true</code> if supported, <code>false</code> otherwise.
                 */
                // @ts-ignore
                isCollectionUsageThresholdSupported(): boolean
                /**
                 * Returns a boolean indication of whether or not this memory pool has hit
                 * or has exceeded the current value of the usage threshold.
                 * @return <code>true</code> if the usage threshold has been surpassed,
                 *          otherwise <code>false</code>.
                 * @throws UnsupportedOperationException
                 *              if the memory pool does not support a usage threshold.
                 * @see #isUsageThresholdSupported()
                 */
                // @ts-ignore
                isUsageThresholdExceeded(): boolean
                /**
                 * Returns a boolean indication of whether or not this memory pool supports
                 * a usage threshold.
                 * @return <code>true</code> if supported, <code>false</code> otherwise.
                 */
                // @ts-ignore
                isUsageThresholdSupported(): boolean
                /**
                 * Returns a boolean indication of whether or not this memory pool may still
                 * be considered valid. A memory pool becomes invalid once it has been
                 * removed by the virtual machine.
                 * @return <code>true</code> if the memory pool has not been removed by
                 *          the virtual machine, <code>false</code> otherwise.
                 */
                // @ts-ignore
                isValid(): boolean
                /**
                 * Updates this memory pool's memory usage peak value to be whatever the
                 * value of the current memory usage is.
                 * @throws SecurityException
                 *              if there is a security manager active and the method caller
                 *              does not have ManagementPermission "control".
                 * @see ManagementPermission
                 */
                // @ts-ignore
                resetPeakUsage(): void
                /**
                 * Updates this memory pool to have a new value for its collection usage
                 * threshold. Only values of zero or greater should be supplied. A zero
                 * value effectively turns off any further checking of collection memory
                 * usage by the virtual machine. A value greater than zero establishes the
                 * new threshold which the virtual machine will check against after each run
                 * of the garbage collector in the memory pool.
                 * @param threshold
                 *             the size of the new collection usage threshold expressed in
                 *             bytes.
                 * @throws UnsupportedOperationException
                 *              if the memory pool does not support a collection usage
                 *              threshold.
                 * @throws IllegalArgumentException
                 *              if input value <code>threshold</code> is either negative or
                 *              else is in excess of any maximum memory size that may have
                 *              been defined for this memory pool.
                 * @throws SecurityException
                 *              if there is a security manager active and the method caller
                 *              does not have {#link ManagementPermission}"control".
                 */
                // @ts-ignore
                setCollectionUsageThreshold(threshold: number /*long*/): void
                /**
                 * Updates this memory pool to have a new value for its usage threshold.
                 * Only values of zero or greater should be supplied. A zero value
                 * effectively turns off any further checking of memory usage by the virtual
                 * machine. A value greater than zero establishes the new threshold which
                 * the virtual machine will check against.
                 * @param threshold
                 *             the size of the new usage threshold expressed in bytes.
                 * @throws UnsupportedOperationException
                 *              if the memory pool does not support a usage threshold.
                 * @throws IllegalArgumentException
                 *              if input value <code>threshold</code> is either negative or
                 *              else is in excess of any maximum memory size that may have
                 *              been defined for this memory pool.
                 * @throws SecurityException
                 *              if there is a security manager active and the method caller
                 *              does not have {#link ManagementPermission}"control".
                 */
                // @ts-ignore
                setUsageThreshold(threshold: number /*long*/): void
            }
        }
    }
}
