declare namespace java {
    namespace lang {
        namespace management {
            /**
             * The management and monitoring interface for the threading system of the
             * virtual machine.
             * <p>
             * Precisely one instance of this interface will be made available to management
             * clients.
             * </p>
             * <p>
             * Accessing this <code>MXBean</code> can be done in one of three ways.
             * <ol>
             * <li>Invoking the static {@link ManagementFactory#getThreadMXBean} method.
             * </li>
             * <li>Using a javax.management.MBeanServerConnection.</li>
             * <li>Obtaining a proxy MXBean from the static
             * {@link ManagementFactory#newPlatformMXBeanProxy} method, passing in
             * &quot;java.lang:type=Threading&quot; for the value of the second parameter.
             * </li>
             * </ol>
             * @since 1.5
             */
            // @ts-ignore
            interface ThreadMXBean extends java.lang.management.PlatformManagedObject {
                /**
                 * Returns the thread identifiers of every thread in this virtual machine
                 * that is currently blocked in a deadlock situation over a monitor object.
                 * A thread is considered to be deadlocked if it is blocked waiting to run
                 * and owns an object monitor that is sought by another blocked thread. Two
                 * or more threads can be in a deadlock cycle. To determine the threads
                 * currently deadlocked by object monitors <i>and</i> ownable synchronizers
                 * use the {@link #findDeadlockedThreads()} method.
                 * <p>
                 * It is recommended that this method be used solely for problem
                 * determination analysis and not as a means of managing thread
                 * synchronization in a virtual machine. This is because the method may be
                 * very expensive to run.
                 * </p>
                 * @return an array of the identifiers of every thread in the virtual
                 *          machine that has been detected as currently being in a deadlock
                 *          situation over an object monitor. May be <code>null</code> if
                 *          there are currently no threads in that category.
                 * @throws SecurityException
                 *              if there is a security manager in effect and the caller does
                 *              not have {#link ManagementPermission} of &quot;monitor&quot;.
                 */
                // @ts-ignore
                findMonitorDeadlockedThreads(): long[]
                /**
                 * Returns an array of the identifiers of all of the threads that are alive
                 * in the current virtual machine. When processing the return from this
                 * method it should <i>not </i> be assumed that each identified thread is
                 * still alive.
                 * @return the identifiers of all of the threads currently alive in the
                 *          virtual machine.
                 */
                // @ts-ignore
                getAllThreadIds(): long[]
                /**
                 * If supported by the virtual machine, returns the total CPU usage time for
                 * the currently running thread. The returned time will have nanosecond
                 * precision but may not have nanosecond accuracy.
                 * <p>
                 * Method {@link #isCurrentThreadCpuTimeSupported()} may be used to
                 * determine if current thread CPU timing is supported on the virtual
                 * machine. On virtual machines where current thread CPU timing is
                 * supported, the method {@link #isThreadCpuTimeEnabled()} may be used to
                 * determine if thread CPU timing is actually enabled.
                 * </p>
                 * <p>
                 * The return value is identical to that which would be obtained by calling
                 * {@link #getThreadCpuTime} with an argument
                 * <code>Thread.currentThread().getId())</code>.
                 * </p>
                 * @return on virtual machines where current thread CPU timing is supported
                 *          and thread CPU timing is enabled, the number of nanoseconds CPU
                 *          usage by the current thread. On virtual machines where current
                 *          thread CPU timing is supported but thread CPU timing is not
                 *          enabled, <code>-1</code>.
                 * @throws UnsupportedOperationException
                 *              if the virtual machine does not support current thread CPU
                 *              timing.
                 */
                // @ts-ignore
                getCurrentThreadCpuTime(): long
                /**
                 * If supported by the virtual machine, returns the total CPU usage time for
                 * the current thread running in user mode. The returned time will have
                 * nanosecond precision but may not have nanosecond accuracy.
                 * <p>
                 * Method {@link #isCurrentThreadCpuTimeSupported()} may be used to
                 * determine if current thread CPU timing is supported on the virtual
                 * machine. On virtual machines where current thread CPU timing is
                 * supported, the method {@link #isThreadCpuTimeEnabled()} may be used to
                 * determine if thread CPU timing is actually enabled.
                 * </p>
                 * <p>
                 * The return value is identical to that which would be obtained by calling
                 * {@link #getThreadUserTime} with an argument
                 * <code>Thread.currentThread().getId())</code>.
                 * </p>
                 * @return on virtual machines where current thread CPU timing is supported
                 *          and thread CPU timing is enabled, the number of nanoseconds CPU
                 *          time used by the current thread running in user mode. On virtual
                 *          machines where current thread CPU timing is supported but thread
                 *          CPU timing is not enabled, <code>-1</code>.
                 * @throws UnsupportedOperationException
                 *              if the virtual machine does not support current thread CPU
                 *              timing.
                 */
                // @ts-ignore
                getCurrentThreadUserTime(): long
                /**
                 * Returns the number of daemon threads currently alive in the virtual
                 * machine.
                 * @return the number of currently alive daemon threads.
                 */
                // @ts-ignore
                getDaemonThreadCount(): int
                /**
                 * Returns the peak number of threads that have ever been alive in the
                 * virtual machine at any one instant since either the virtual machine
                 * start-up or the peak was reset.
                 * @return the peak number of live threads
                 * @see #resetPeakThreadCount()
                 */
                // @ts-ignore
                getPeakThreadCount(): int
                /**
                 * Returns the number of threads currently alive in the virtual machine.
                 * This includes both daemon threads and non-daemon threads.
                 * @return the number of currently alive threads.
                 */
                // @ts-ignore
                getThreadCount(): int
                /**
                 * If supported by the virtual machine, returns the total CPU usage time for
                 * the thread with the specified identifier. The returned time will have
                 * nanosecond precision but may not have nanosecond accuracy.
                 * <p>
                 * Method {@link #isThreadCpuTimeSupported()} may be used to determine if
                 * the CPU timing of threads is supported on the virtual machine. On virtual
                 * machines where current thread CPU timing is supported, the method
                 * {@link #isThreadCpuTimeEnabled()} may be used to determine if thread CPU
                 * timing is actually enabled.
                 * </p>
                 * @param id
                 *             the identifier for a thread. Must be a positive number greater
                 *             than zero.
                 * @return on virtual machines where thread CPU timing is supported and
                 *          enabled, and there is a living thread with identifier
                 *          <code>id</code>, the number of nanoseconds CPU time used by
                 *          the thread. On virtual machines where thread CPU timing is
                 *          supported but not enabled, or where there is no living thread
                 *          with identifier <code>id</code> present in the virtual machine,
                 *          a value of <code>-1</code> is returned.
                 * @throws IllegalArgumentException
                 *              if <code>id</code> is &lt;=0.
                 * @throws UnsupportedOperationException
                 *              if the virtual machine does not support thread CPU timing.
                 * @see #isThreadCpuTimeSupported()
                 * @see #isThreadCpuTimeEnabled()
                 */
                // @ts-ignore
                getThreadCpuTime(id: number /*long*/): long
                /**
                 * Returns a {@link ThreadInfo} object for the thread with the specified
                 * identifier. The returned object will not have a stack trace so that a
                 * call to its <code>getStackTrace()</code> method will result in an empty
                 * <code>StackTraceElement</code> array. Similarly, the returned object
                 * will hold no details of locked synchronizers or locked object monitors
                 * for the specified thread; calls to <code>getLockedMonitors()</code> and
                 * <code>getLockedSynchronizers</code> will both return array values.
                 * @param id
                 *             the identifier for a thread. Must be a positive number greater
                 *             than zero.
                 * @return if the supplied <code>id</code> maps to a living thread in the
                 *          virtual machine (i.e. a started thread which has not yet died),
                 *          this method returns a {#link ThreadInfo} object corresponding to
                 *          that thread. Otherwise, returns <code>null</code>.
                 * @throws IllegalArgumentException
                 *              if <code>id</code> is &lt;=0.
                 * @throws SecurityException
                 *              if there is a security manager in effect and the caller does
                 *              not have {#link ManagementPermission} of &quot;monitor&quot;.
                 */
                // @ts-ignore
                getThreadInfo(id: number /*long*/): java.lang.management.ThreadInfo
                /**
                 * Returns an array of {@link ThreadInfo} objects ; one for each of the
                 * threads specified in the input array of identifiers. None of the objects
                 * in the return array will have a stack trace so that a call to its
                 * <code>getStackTrace()</code> method will result in an empty
                 * <code>StackTraceElement</code> array. Similarly, the returned object
                 * will hold no details of locked synchronizers or locked object monitors
                 * for the specified thread; calls to <code>getLockedMonitors()</code> and
                 * <code>getLockedSynchronizers</code> will both return array values.
                 * @param ids
                 *             an array of thread identifiers. Each one must be a positive
                 *             number greater than zero.
                 * @return an array of {#link ThreadInfo} objects with each entry
                 *          corresponding to one of the threads specified in the input array
                 *          of identifiers. The return array will therefore have an identical
                 *          number of elements to the input <code>ids</code> array. If an
                 *          entry in the <code>ids</code> array is invalid (there is no
                 *          living thread with the supplied identifier in the virtual
                 *          machine) then the corresponding entry in the return array will be
                 *          a <code>null</code>.
                 * @throws IllegalArgumentException
                 *              if any of the entries in the <code>ids</code> array is
                 *              &lt;=0.
                 * @throws SecurityException
                 *              if there is a security manager in effect and the caller does
                 *              not have {#link ManagementPermission} of &quot;monitor&quot;.
                 */
                // @ts-ignore
                getThreadInfo(ids: number /*long*/[]): java.lang.management.ThreadInfo[]
                /**
                 * Returns an array of {@link ThreadInfo} objects ; one for each of the
                 * threads specified in the <code>ids</code> argument. The stack trace
                 * information in the returned objects will depend on the value of the
                 * <code>maxDepth</code> argument which specifies the maximum number of
                 * {@link StackTraceElement} instances to try and include. A subsequent call
                 * to any of the returned objects' <code>getStackTrace()</code> method
                 * should result in a {@link StackTraceElement} array of up to
                 * <code>maxDepth</code> elements. A <code>maxDepth</code> value of
                 * <code>Integer.MAX_VALUE</code> will attempt to obtain all of the stack
                 * trace information for each specified thread while a <code>maxDepth</code>
                 * value of zero will yield none.
                 * <p>
                 * The returned object will hold no details of locked synchronizers or
                 * locked object monitors for the specified thread; calls to
                 * <code>getLockedMonitors()</code> and
                 * <code>getLockedSynchronizers</code> will both return array values.
                 * </p>
                 * @param ids
                 *             an array of thread identifiers. Each must be a positive number
                 *             greater than zero.
                 * @param maxDepth
                 *             the <i>maximum </i> number of stack trace entries to be
                 *             included in each of the returned <code>ThreadInfo</code>
                 *             objects. Supplying <code>Integer.MAX_VALUE</code> attempts
                 *             to obtain all of the stack traces. Only a positive value is
                 *             expected.
                 * @return an array of <code>ThreadInfo</code> objects. The size of the
                 *          array will be identical to that of the <code>ids</code>
                 *          argument. Null elements will be placed in the array if the
                 *          corresponding thread identifier in <code>ids</code> does not
                 *          resolve to a living thread in the virtual machine (i.e. a started
                 *          thread which has not yet died).
                 * @throws IllegalArgumentException
                 *              if any element in <code>ids</code> is &lt;=0.
                 * @throws IllegalArgumentException
                 *              if <code>maxDepth</code> is &lt;0.
                 * @throws SecurityException
                 *              if there is a security manager in effect and the caller does
                 *              not have {#link ManagementPermission} of &quot;monitor&quot;.
                 */
                // @ts-ignore
                getThreadInfo(ids: number /*long*/[], maxDepth: number /*int*/): java.lang.management.ThreadInfo[]
                /**
                 * Returns an array of {@link ThreadInfo} objects; one for each of the
                 * threads specified in the <code>ids</code> argument. Each
                 * <code>ThreadInfo</code> will hold details of all of the stack trace
                 * information for each specified thread. The returned
                 * <code>ThreadInfo</code> objects will optionally contain details of all
                 * monitor objects and synchronizers locked by the corresponding thread. In
                 * order to retrieve locked monitor information the
                 * <code>lockedMonitors</code> argument should be set to <code>true</code>;
                 * in order to retrieve locked synchronizers information
                 * <code>lockedSynchronizers</code> should be set to <code>true</code>.
                 * For a given <code>ThreadInfo</code> element of the return array the
                 * optional information may be inspected by calling
                 * {@link ThreadInfo#getLockedMonitors()} and
                 * {@link ThreadInfo#getLockedSynchronizers()} respectively.
                 * <p>
                 * Both <code>lockedMonitors</code> and <code>lockedSynchronizers</code>
                 * arguments should only be set to <code>true</code> if the virtual
                 * machine supports the requested monitoring.
                 * </p>
                 * @param ids
                 *             an array of thread identifiers. Each one must be a positive
                 *             number greater than zero.
                 * @param lockedMonitors
                 *             boolean indication of whether or not each returned
                 *             <code>ThreadInfo</code> should hold information on locked
                 *             object monitors
                 * @param lockedSynchronizers
                 *             boolean indication of whether or not each returned
                 *             <code>ThreadInfo</code> should hold information on locked
                 *             synchronizers
                 * @return an array of {#link ThreadInfo} objects with each entry
                 *          corresponding to one of the threads specified in the input array
                 *          of identifiers. The return array will therefore have an identical
                 *          number of elements to the input <code>ids</code> array. If an
                 *          entry in the <code>ids</code> array is invalid (there is no
                 *          living thread with the supplied identifier in the virtual
                 *          machine) then the corresponding entry in the return array will be
                 *          a <code>null</code>.
                 * @throws IllegalArgumentException
                 *              if any of the entries in the <code>ids</code> array is
                 *              &lt;=0.
                 * @throws SecurityException
                 *              if there is a security manager in effect and the caller does
                 *              not have {#link ManagementPermission} of &quot;monitor&quot;.
                 * @throws UnsupportedOperationException
                 *              if either of the following conditions apply:
                 *              <ul>
                 *                  <li><code>lockedMonitors</code> is <code>true</code> but
                 *                      a call to {#link #isObjectMonitorUsageSupported()} would
                 *                      result in a <code>false</code> value
                 *                  <li><code>lockedSynchronizers</code> is <code>true</code>
                 *                      but a call to {@link #isSynchronizerUsageSupported()} would
                 *                      result in a <code>false</code> value
                 *              </ul>
                 */
                // @ts-ignore
                getThreadInfo(ids: number /*long*/[], lockedMonitors: boolean, lockedSynchronizers: boolean): java.lang.management.ThreadInfo[]
                /**
                 * Returns a {@link ThreadInfo} object for the thread with the specified
                 * identifier. The stack trace information in the returned object will
                 * depend on the value of the <code>maxDepth</code> argument which
                 * specifies the maximum number of {@link StackTraceElement} instances to
                 * include. A subsequent call to the returned object's
                 * <code>getStackTrace()</code> method should then result in a
                 * {@link StackTraceElement} array of up to <code>maxDepth</code>
                 * elements. A <code>maxDepth</code> value of
                 * <code>Integer.MAX_VALUE</code> will obtain all of the stack trace
                 * information for the thread while a <code>maxDepth</code> value of zero
                 * will yield none.
                 * <p>
                 * It is possible that the virtual machine may be unable to supply any stack
                 * trace information for the specified thread. In that case the returned
                 * <code>ThreadInfo</code> object will have an empty array of
                 * <code>StackTraceElement</code>s.
                 * </p>
                 * <p>
                 * The returned object will hold no details of locked synchronizers or
                 * locked object monitors for the specified thread; calls to
                 * <code>getLockedMonitors()</code> and
                 * <code>getLockedSynchronizers</code> will both return array values.
                 * </p>
                 * @param id
                 *             the identifier for a thread. Must be a positive number greater
                 *             than zero.
                 * @param maxDepth
                 *             the <i>maximum </i> number of stack trace entries to be
                 *             included in the returned <code>ThreadInfo</code> object.
                 *             Supplying <code>Integer.MAX_VALUE</code> obtains all of the
                 *             stack trace. Only a positive value is expected.
                 * @return if the supplied <code>id</code> maps to a living thread in the
                 *          virtual machine (i.e. a started thread which has not yet died),
                 *          this method returns a {#link ThreadInfo} object corresponding to
                 *          that thread. Otherwise, returns <code>null</code>.
                 * @throws IllegalArgumentException
                 *              if <code>id</code> is &lt;=0.
                 * @throws IllegalArgumentException
                 *              if <code>maxDepth</code> is &lt;0.
                 * @throws SecurityException
                 *              if there is a security manager in effect and the caller does
                 *              not have {#link ManagementPermission} of &quot;monitor&quot;.
                 */
                // @ts-ignore
                getThreadInfo(id: number /*long*/, maxDepth: number /*int*/): java.lang.management.ThreadInfo
                /**
                 * If supported by the virtual machine, returns the total CPU usage time for
                 * the thread with the specified identifier when running in user mode. The
                 * returned time will have nanosecond precision but may not have nanosecond
                 * accuracy.
                 * <p>
                 * Method {@link #isThreadCpuTimeSupported()} may be used to determine if
                 * the CPU timing of threads is supported on the virtual machine. On virtual
                 * machines where current thread CPU timing is supported, the method
                 * {@link #isThreadCpuTimeEnabled()} may be used to determine if thread CPU
                 * timing is actually enabled.
                 * </p>
                 * @param id
                 *             the identifier for a thread. Must be a positive number greater
                 *             than zero.
                 * @return on virtual machines where thread CPU timing is supported and
                 *          enabled, and there is a living thread with identifier
                 *          <code>id</code>, the number of nanoseconds CPU time used by
                 *          the thread running in user mode. On virtual machines where thread
                 *          CPU timing is supported but not enabled, or where there is no
                 *          living thread with identifier <code>id</code> present in the
                 *          virtual machine, a value of <code>-1</code> is returned.
                 *          <p>
                 *          If thread CPU timing was disabled when the thread was started
                 *          then the virtual machine is free to choose any measurement start
                 *          time between when the virtual machine started up and when thread
                 *          CPU timing was enabled with a call to
                 *          {#link #setThreadCpuTimeEnabled(boolean)}.
                 *          </p>
                 * @throws IllegalArgumentException
                 *              if <code>id</code> is &lt;=0.
                 * @throws UnsupportedOperationException
                 *              if the virtual machine does not support thread CPU timing.
                 * @see #isThreadCpuTimeSupported()
                 * @see #isThreadCpuTimeEnabled()
                 */
                // @ts-ignore
                getThreadUserTime(id: number /*long*/): long
                /**
                 * Returns the number of threads that have been started in this virtual
                 * machine since it came into being.
                 * @return the total number of started threads.
                 */
                // @ts-ignore
                getTotalStartedThreadCount(): long
                /**
                 * Returns a boolean indication of whether or not the virtual machine
                 * supports the CPU timing of the current thread.
                 * <p>
                 * Note that this method must return <code>true</code> if
                 * {@link #isThreadCpuTimeSupported()} returns <code>true</code>.
                 * </p>
                 * @return <code>true</code> if CPU timing of the current thread is
                 *          supported, otherwise <code>false</code>.
                 */
                // @ts-ignore
                isCurrentThreadCpuTimeSupported(): boolean
                /**
                 * Returns a boolean indication of whether or not the monitoring of thread
                 * contention situations is enabled on this virtual machine.
                 * @return <code>true</code> if thread contention monitoring is enabled,
                 *          <code>false</code> otherwise.
                 */
                // @ts-ignore
                isThreadContentionMonitoringEnabled(): boolean
                /**
                 * Returns a boolean indication of whether or not the monitoring of thread
                 * contention situations is supported on this virtual machine.
                 * @return <code>true</code> if thread contention monitoring is supported,
                 *          <code>false</code> otherwise.
                 */
                // @ts-ignore
                isThreadContentionMonitoringSupported(): boolean
                /**
                 * Returns a boolean indication of whether or not the CPU timing of threads
                 * is enabled on this virtual machine.
                 * @return <code>true</code> if thread CPU timing is enabled,
                 *          <code>false</code> otherwise.
                 * @throws UnsupportedOperationException
                 *              if the virtual machine does not support thread CPU timing.
                 * @see #isThreadCpuTimeSupported()
                 */
                // @ts-ignore
                isThreadCpuTimeEnabled(): boolean
                /**
                 * Returns a boolean indication of whether or not the virtual machine
                 * supports the CPU time measurement of any threads (current or otherwise).
                 * @return <code>true</code> if the virtual machine supports the CPU
                 *          timing of threads, <code>false</code> otherwise.
                 */
                // @ts-ignore
                isThreadCpuTimeSupported(): boolean
                /**
                 * Resets the peak thread count to be the current number of threads alive in
                 * the virtual machine when the call is made.
                 * @throws SecurityException
                 *              if there is a security manager in effect and the caller does
                 *              not have {#link ManagementPermission} of &quot;control&quot;.
                 */
                // @ts-ignore
                resetPeakThreadCount(): void
                /**
                 * Updates the virtual machine to either enable or disable the monitoring of
                 * thread contention situations.
                 * <p>
                 * If it is supported, the virtual machine will initially not monitor thread
                 * contention situations.
                 * </p>
                 * @param enable
                 *             enable thread contention monitoring if <code>true</code>,
                 *             otherwise disable thread contention monitoring.
                 * @throws SecurityException
                 *              if there is a security manager in effect and the caller does
                 *              not have {#link ManagementPermission} of &quot;control&quot;.
                 * @throws UnsupportedOperationException
                 *              if the virtual machine does not support thread contention
                 *              monitoring.
                 * @see #isThreadContentionMonitoringSupported()
                 */
                // @ts-ignore
                setThreadContentionMonitoringEnabled(enable: boolean): void
                /**
                 * If supported, updates the virtual machine to either enable or disable the
                 * CPU timing of threads.
                 * <p>
                 * The default value of this property depends on the underlying operating
                 * system on which the virtual machine is running.
                 * </p>
                 * @param enable
                 *             enable thread CPU timing if <code>true</code>, otherwise
                 *             disable thread CPU timing
                 * @throws SecurityException
                 *              if there is a security manager in effect and the caller does
                 *              not have {#link ManagementPermission} of &quot;control&quot;.
                 * @throws UnsupportedOperationException
                 *              if the virtual machine does not support thread CPU timing.
                 * @see #isThreadCpuTimeSupported()
                 */
                // @ts-ignore
                setThreadCpuTimeEnabled(enable: boolean): void
                /**
                 * Returns a boolean indication of whether or not the virtual machine
                 * supports the monitoring of object monitor usage.
                 * @return <code>true</code> if object monitor usage is permitted,
                 *          otherwise <code>false</code>
                 * @since 1.6
                 */
                // @ts-ignore
                isObjectMonitorUsageSupported(): boolean
                /**
                 * Returns a boolean indication of whether or not the virtual machine
                 * supports the monitoring of ownable synchronizers (synchronizers that make
                 * use of the <code>AbstractOwnableSynchronizer</code> type and which are
                 * completely owned by a single thread).
                 * @return <code>true</code> if synchronizer usage monitoring is
                 *          permitted, otherwise <code>false</code>
                 */
                // @ts-ignore
                isSynchronizerUsageSupported(): boolean
                /**
                 * If supported by the virtual machine, this method can be used to retrieve
                 * the <code>long</code> id of all threads currently waiting on object
                 * monitors or ownable synchronizers (synchronizers that make use of the
                 * <code>AbstractOwnableSynchronizer</code> type and which are completely
                 * owned by a single thread). To determine the threads currently deadlocked
                 * by object monitors only use the {@link #findMonitorDeadlockedThreads()}
                 * method.
                 * <p>
                 * It is recommended that this method be used solely for problem
                 * determination analysis and not as a means of managing thread
                 * synchronization in a virtual machine. This is because the method may be
                 * very expensive to run.
                 * </p>
                 * @return an array of the identifiers of every thread in the virtual
                 *          machine that has been detected as currently being in a deadlock
                 *          situation involving object monitors <i>and</i> ownable
                 *          synchronizers. If there are no threads in this category a
                 *          <code>null</code> is returned.
                 * @throws SecurityException
                 *              if there is a security manager in effect and the caller does
                 *              not have {#link ManagementPermission} of &quot;monitor&quot;.
                 * @throws UnsupportedOperationException
                 *              if the virtual machine does not support any monitoring of
                 *              ownable synchronizers.
                 * @see #isSynchronizerUsageSupported()
                 */
                // @ts-ignore
                findDeadlockedThreads(): long[]
                /**
                 * Returns an array of {@link ThreadInfo} objects holding information on all
                 * threads that were alive when the call was invoked.
                 * @param lockedMonitors
                 *             boolean indication of whether or not information on all
                 *             currently locked object monitors is to be included in the
                 *             returned array
                 * @param lockedSynchronizers
                 *             boolean indication of whether or not information on all
                 *             currently locked ownable synchronizers is to be included in
                 *             the returned array
                 * @return an array of <code>ThreadInfo</code> objects
                 * @throws SecurityException
                 *              if there is a security manager in effect and the caller does
                 *              not have {#link ManagementPermission} of &quot;monitor&quot;.
                 * @throws UnsupportedOperationException
                 *              if either of the following conditions apply:
                 *              <ul>
                 *                  <li><code>lockedMonitors</code> is <code>true</code> but
                 *                      a call to {#link #isObjectMonitorUsageSupported()} would
                 *                      result in a <code>false</code> value
                 *                  <li><code>lockedSynchronizers</code> is <code>true</code>
                 *                      but a call to {@link #isSynchronizerUsageSupported()} would
                 *                      result in a <code>false</code> value
                 *              </ul>
                 */
                // @ts-ignore
                dumpAllThreads(lockedMonitors: boolean, lockedSynchronizers: boolean): java.lang.management.ThreadInfo[]
            }
        }
    }
}
