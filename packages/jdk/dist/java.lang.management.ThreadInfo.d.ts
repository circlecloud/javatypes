declare namespace java {
    namespace lang {
        namespace management {
            /**
             * Information about a snapshot of the state of a thread.
             * @since 1.5
             */
            // @ts-ignore
            class ThreadInfo extends java.lang.Object {
                /**
                 * Returns the number of times that the thread represented by this
                 * <code>ThreadInfo</code> has been blocked on any monitor objects. The
                 * count is from the start of the thread's life.
                 * @return the number of times the corresponding thread has been blocked on
                 *          a monitor.
                 */
                // @ts-ignore
                public getBlockedCount(): number /*long*/
                /**
                 * If thread contention monitoring is supported and enabled, returns the
                 * total amount of time that the thread represented by this
                 * <code>ThreadInfo</code> has spent blocked on any monitor objects. The
                 * time is measued in milliseconds and will be measured over the time period
                 * since thread contention was most recently enabled.
                 * @return if thread contention monitoring is currently enabled, the number
                 *          of milliseconds that the thread associated with this
                 *          <code>ThreadInfo</code> has spent blocked on any monitors. If
                 *          thread contention monitoring is supported but currently disabled,
                 *          <code>-1</code>.
                 * @throws UnsupportedOperationException
                 *              if the virtual machine does not support thread contention
                 *              monitoring.
                 * @see ThreadMXBean#isThreadContentionMonitoringSupported()
                 * @see ThreadMXBean#isThreadContentionMonitoringEnabled()
                 */
                // @ts-ignore
                public getBlockedTime(): number /*long*/
                /**
                 * If the thread represented by this <code>ThreadInfo</code> is currently
                 * blocked on or waiting on a monitor object, returns a string
                 * representation of that monitor object.
                 * <p>
                 * The monitor's string representation is comprised of the following
                 * component parts:
                 * <ul>
                 * <li><code>monitor</code> class name
                 * <li><code>@</code>
                 * <li><code>Integer.toHexString(System.identityHashCode(monitor))</code>
                 * </ul>
                 * @return if blocked or waiting on a monitor, a string representation of
                 *          the monitor object. Otherwise, <code>null</code>.
                 * @see Integer#toHexString(int)
                 * @see System#identityHashCode(java.lang.Object)
                 */
                // @ts-ignore
                public getLockName(): string
                /**
                 * If the thread represented by this <code>ThreadInfo</code> is currently
                 * blocked on or waiting on a monitor object, returns the thread identifier
                 * of the thread which owns the monitor.
                 * @return the thread identifier of the other thread which holds the monitor
                 *          that the thread associated with this <code>ThreadInfo</code> is
                 *          blocked or waiting on. If this <code>ThreadInfo</code>'s
                 *          associated thread is currently not blocked or waiting, or there
                 *          is no other thread holding the monitor, returns a <code>-1</code>.
                 */
                // @ts-ignore
                public getLockOwnerId(): number /*long*/
                /**
                 * If the thread represented by this <code>ThreadInfo</code> is currently
                 * blocked on or waiting on a monitor object, returns the name of the thread
                 * which owns the monitor.
                 * @return the name of the other thread which holds the monitor that the
                 *          thread associated with this <code>ThreadInfo</code> is blocked
                 *          or waiting on. If this <code>ThreadInfo</code>'s associated
                 *          thread is currently not blocked or waiting, or there is no other
                 *          thread holding the monitor, returns a <code>null</code>
                 *          reference.
                 */
                // @ts-ignore
                public getLockOwnerName(): string
                /**
                 * If the thread corresponding to this <code>ThreadInfo</code> is blocked
                 * then this method returns a {@link LockInfo} object that contains details
                 * of the associated lock object.
                 * @return a <code>LockInfo</code> object if this <code>ThreadInfo</code>'s
                 *          thread is currently blocked, else <code>null</code>.
                 */
                // @ts-ignore
                public getLockInfo(): java.lang.management.LockInfo
                /**
                 * If available, returns the stack trace for the thread represented by this
                 * <code>ThreadInfo</code> instance. The stack trace is returned in an
                 * array of {@link StackTraceElement} objects with the &quot;top&quot; of the
                 * stack encapsulated in the first array element and the &quot;bottom&quot;
                 * of the stack in the last array element.
                 * <p>
                 * If this <code>ThreadInfo</code> was created without any stack trace
                 * information (e.g. by a call to {@link ThreadMXBean#getThreadInfo(long)})
                 * then the returned array will have a length of zero.
                 * </p>
                 * @return the stack trace for the thread represented by this
                 *          <code>ThreadInfo</code>.
                 */
                // @ts-ignore
                public getStackTrace(): java.lang.StackTraceElement[]
                /**
                 * Returns the thread identifier of the thread represented by this
                 * <code>ThreadInfo</code>.
                 * @return the identifier of the thread corresponding to this
                 *          <code>ThreadInfo</code>.
                 */
                // @ts-ignore
                public getThreadId(): number /*long*/
                /**
                 * Returns the name of the thread represented by this
                 * <code>ThreadInfo</code>.
                 * @return the name of the thread corresponding to this
                 *          <code>ThreadInfo</code>.
                 */
                // @ts-ignore
                public getThreadName(): string
                /**
                 * Returns the thread state value of the thread represented by this
                 * <code>ThreadInfo</code>.
                 * @return the thread state of the thread corresponding to this
                 *          <code>ThreadInfo</code>.
                 * @see Thread#getState()
                 */
                // @ts-ignore
                public getThreadState(): java.lang.Thread.State
                /**
                 * The number of times that the thread represented by this
                 * <code>ThreadInfo</code> has gone to the &quot;wait&quot; or &quot;timed
                 * wait&quot; state.
                 * @return the number of times the corresponding thread has been in the
                 *          &quot;wait&quot; or &quot;timed wait&quot; state.
                 */
                // @ts-ignore
                public getWaitedCount(): number /*long*/
                /**
                 * If thread contention monitoring is supported and enabled, returns the
                 * total amount of time that the thread represented by this
                 * <code>ThreadInfo</code> has spent waiting for notifications. The time
                 * is measured in milliseconds and will be measured over the time period
                 * since thread contention was most recently enabled.
                 * @return if thread contention monitoring is currently enabled, the number
                 *          of milliseconds that the thread associated with this
                 *          <code>ThreadInfo</code> has spent waiting notifications. If
                 *          thread contention monitoring is supported but currently disabled,
                 *          <code>-1</code>.
                 * @throws UnsupportedOperationException
                 *              if the virtual machine does not support thread contention
                 *              monitoring.
                 * @see ThreadMXBean#isThreadContentionMonitoringSupported()
                 * @see ThreadMXBean#isThreadContentionMonitoringEnabled()
                 */
                // @ts-ignore
                public getWaitedTime(): number /*long*/
                /**
                 * Returns a <code>boolean</code> indication of whether or not the thread
                 * represented by this <code>ThreadInfo</code> is currently in a native
                 * method.
                 * @return if the corresponding thread <i>is </i> executing a native method
                 *          then <code>true</code>, otherwise <code>false</code>.
                 */
                // @ts-ignore
                public isInNative(): boolean
                /**
                 * Returns a <code>boolean</code> indication of whether or not the thread
                 * represented by this <code>ThreadInfo</code> is currently suspended.
                 * @return if the corresponding thread <i>is </i> suspended then
                 *          <code>true</code>, otherwise <code>false</code>.
                 */
                // @ts-ignore
                public isSuspended(): boolean
                /**
                 * Returns an array of <code>MonitorInfo</code> objects, one for every
                 * monitor object locked by the <code>Thread</code> corresponding to this
                 * <code>ThreadInfo</code> when it was instantiated.
                 * @return an array whose elements comprise of <code>MonitorInfo</code>
                 *          objects - one for each object monitor locked by this
                 *          <code>ThreadInfo</code> object's corresponding thread. If no
                 *          monitors are locked by the thread then the array will have a
                 *          length of zero.
                 */
                // @ts-ignore
                public getLockedMonitors(): java.lang.management.MonitorInfo[]
                /**
                 * Returns an array of <code>LockInfo</code> objects, each one containing
                 * information on an ownable synchronizer (a synchronizer that makes use of
                 * the <code>AbstractOwnableSynchronizer</code> type and which is
                 * completely owned by a single thread) locked by the <code>Thread</code>
                 * corresponding to this <code>ThreadInfo</code> when it was instantiated.
                 * @return an array whose elements comprise of <code>LockInfo</code>
                 *          objects - one for each ownable synchronizer locked by this
                 *          <code>ThreadInfo</code> object's corresponding thread. If no
                 *          ownable synchronizer are locked by the thread then the array will
                 *          have a length of zero.
                 */
                // @ts-ignore
                public getLockedSynchronizers(): java.lang.management.LockInfo[]
                /**
                 * Receives a {@link CompositeData} representing a <code>ThreadInfo</code>
                 * object and attempts to return the root <code>ThreadInfo</code>
                 * instance.
                 * @param cd
                 *             a <code>CompositeData</code> that represents a
                 *             <code>ThreadInfo</code>.
                 * @return if <code>cd</code> is non- <code>null</code>, returns a new
                 *          instance of <code>ThreadInfo</code>. If <code>cd</code> is
                 *          <code>null</code>, returns <code>null</code>.
                 * @throws IllegalArgumentException
                 *              if argument <code>cd</code> does not correspond to a
                 *              <code>ThreadInfo</code> with the following attributes:
                 *              <ul>
                 *              <li><code>threadId</code>(<code>java.lang.Long</code>)
                 *              <li><code>threadName</code>(
                 *              <code>java.lang.String</code>)
                 *              <li><code>threadState</code>(
                 *              <code>java.lang.String</code>)
                 *              <li><code>suspended</code>(
                 *              <code>java.lang.Boolean</code>)
                 *              <li><code>inNative</code>(<code>java.lang.Boolean</code>)
                 *              <li><code>blockedCount</code>(
                 *              <code>java.lang.Long</code>)
                 *              <li><code>blockedTime</code>(<code>java.lang.Long</code>)
                 *              <li><code>waitedCount</code>(<code>java.lang.Long</code>)
                 *              <li><code>waitedTime</code> (<code>java.lang.Long</code>)
                 *              <li><code>lockInfo</code> (<code>javax.management.openmbean.CompositeData</code>)
                 *              which holds the simple attributes <code>className</code>(<code>java.lang.String</code>),
                 *              <code>identityHashCode</code>(<code>java.lang.Integer</code>).  
                 *              In the event that the input <code>CompositeData</code> does not hold a 
                 *              <code>lockInfo</code> attribute, the value of the <code>lockName</code>
                 *              attribute is used for setting the returned object's 
                 *              <code>LockInfo</code> state. 
                 *              <li><code>lockName</code> (<code>java.lang.String</code>)
                 *              <li><code>lockOwnerId</code> (<code>java.lang.Long</code>)
                 *              <li><code>lockOwnerName</code> (<code>java.lang.String</code>)
                 *              <li><code>stackTrace</code> (<code>javax.management.openmbean.CompositeData[]</code>)
                 *              </ul>
                 *              Each element of the <code>stackTrace</code> array must 
                 *              correspond to a <code>java.lang.StackTraceElement</code>
                 *              and have the following attributes :
                 *              <ul>
                 *              <li><code>className</code> (<code>java.lang.String</code>)
                 *              <li><code>methodName</code> (<code>java.lang.String</code>)
                 *              <li><code>fileName</code> (<code>java.lang.String</code>)
                 *              <li><code>lineNumber</code> (<code>java.lang.Integer</code>)
                 *              <li><code>nativeMethod</code> (<code>java.lang.Boolean</code>)
                 *              </ul>
                 */
                // @ts-ignore
                public static from(cd: javax.management.openmbean.CompositeData): java.lang.management.ThreadInfo
                /**
                 * Returns a text description of this thread info.
                 * @return a text description of this thread info.
                 */
                // @ts-ignore
                public toString(): string
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object | any): boolean
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public hashCode(): number /*int*/
            }
        }
    }
}
