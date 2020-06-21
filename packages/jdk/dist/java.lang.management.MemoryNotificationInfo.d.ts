declare namespace java {
    namespace lang {
        namespace management {
            /**
             * Encapsulates the details of a memory notification emitted by a
             * {@link java.lang.management.MemoryMXBean} when a memory pool exceeds a
             * threshold value.
             * <p>
             * If the memory usage of a memory pool increases such that it reaches or
             * exceeds the memory usage threshold, a {@link #MEMORY_THRESHOLD_EXCEEDED}
             * notification is sent.
             * </p>
             * <p>
             * If, upon the completion of a run of the garbage collector, a memory pool
             * exceeds its collection usage threshold, a
             * {@link #MEMORY_COLLECTION_THRESHOLD_EXCEEDED} notification is sent.
             * </p>
             * @since 1.5
             */
            // @ts-ignore
            class MemoryNotificationInfo extends java.lang.Object {
                /**
                 * Creates a new <code>MemoryNotificationInfo</code> instance.
                 * @param poolName
                 *             the name of the memory pool that the notification relates to.
                 * @param usage
                 *             the memory usage for the named pool
                 * @param count
                 *             the number of times that the memory usage of the memory pool
                 *             has met or exceeded the relevant threshold. For notifications
                 *             of the {#link #MEMORY_THRESHOLD_EXCEEDED} type, this will a
                 *             count of the number of times the memory usage threshold has
                 *             been met or exceeded. For
                 *             {@link #MEMORY_COLLECTION_THRESHOLD_EXCEEDED} notifications,
                 *             this will be the number of times that the collection usage
                 *             threshold was passed.
                 */
                // @ts-ignore
                constructor(poolName: java.lang.String | string, usage: java.lang.management.MemoryUsage, count: number /*long*/)
                /**
                 * Notification type that signifies a memory pool has grown such that it now
                 * reaches or exceeds the usage threshold value set for it.
                 */
                // @ts-ignore
                public static readonly MEMORY_THRESHOLD_EXCEEDED: java.lang.String | string
                /**
                 * Notification type that signifies a memory pool's memory usage has grown
                 * to reach or exceed the collection usage threshold value set for it after
                 * a run of the garbage collector.
                 */
                // @ts-ignore
                public static readonly MEMORY_COLLECTION_THRESHOLD_EXCEEDED: java.lang.String | string
                /**
                 * Returns the number of times that the memory usage has crossed the
                 * threshold relevant to the type of notification when the notification was
                 * constructed. For notifications of the {@link #MEMORY_THRESHOLD_EXCEEDED}
                 * type, this will a count of the number of times the memory usage threshold
                 * has been met or exceeded. For
                 * {@link #MEMORY_COLLECTION_THRESHOLD_EXCEEDED} notifications, this will be
                 * the number of times that the collection usage threshold was passed.
                 * @return the number of times the related memory usage was passed at the
                 *          time of the notification construction.
                 */
                // @ts-ignore
                public getCount(): number /*long*/
                /**
                 * Returns the name of the memory pool that the notification relates to.
                 * @return the name of the associated memory pool.
                 */
                // @ts-ignore
                public getPoolName(): string
                /**
                 * Returns an instance of {@link MemoryUsage} that encapsulates the memory
                 * usage of the memory pool that gave rise to this notification at the time
                 * the notification was created. The <code>MemoryUsage</code> may be
                 * interrogated by the caller to find out the details of the memory usage.
                 * @return the memory usage of the related memory pool at the point when
                 *          this notification was created.
                 */
                // @ts-ignore
                public getUsage(): java.lang.management.MemoryUsage
                /**
                 * Receives a {@link CompositeData} representing a
                 * <code>MemoryNotificationInfo</code> object and attempts to return
                 * the root <code>MemoryNotificationInfo</code> instance.
                 * @param cd
                 *             a <code>CompositeDate</code> that represents a
                 *             <code>MemoryNotificationInfo</code>.
                 * @return if <code>cd</code> is non- <code>null</code>, returns a new
                 *          instance of <code>MemoryNotificationInfo</code>. 
                 *          If <code>cd</code> is <code>null</code>, returns <code>null</code>.
                 * @throws IllegalArgumentException
                 *              if argument <code>cd</code> does not correspond to a
                 *              <code>MemoryNotificationInfo</code> with the following 
                 *              attributes:
                 *              <ul>
                 *              <li><code>poolName</code>(<code>java.lang.String</code>)
                 *              <li><code>usage</code>(
                 *              <code>javax.management.openmbean.CompositeData</code>)
                 *              <li><code>count</code>(
                 *              <code>java.lang.Long</code>)
                 *              </ul>
                 *  <p>
                 *  The <code>usage</code> attribute must represent a {#link MemoryUsage}
                 *  instance which encapsulates the memory usage of a memory pool.
                 *  </p>
                 */
                // @ts-ignore
                public static from(cd: javax.management.openmbean.CompositeData): java.lang.management.MemoryNotificationInfo
            }
        }
    }
}
