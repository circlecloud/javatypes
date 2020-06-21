declare namespace java {
    namespace lang {
        /**
         * A Thread is a unit of concurrent execution in Java. It has its own call stack
         * for methods being called and their parameters. Threads in the same VM interact and
         * synchronize by the use of shared Objects and monitors associated with these objects.
         * Synchronized methods and part of the API in Object also allow Threads to cooperate.
         * When a Java program starts executing there is an implicit Thread (called "main")
         * which is automatically created by the VM. This Thread belongs to a ThreadGroup
         * (also called "main") which is automatically created by the bootstrap sequence by
         * the VM as well.
         * @see java.lang.Object
         * @see java.lang.ThreadGroup
         */
        // @ts-ignore
        class Thread extends java.lang.Object implements java.lang.Runnable {
            /**
             * Constructs a new Thread with no runnable object and a newly generated name.
             * The new Thread will belong to the same ThreadGroup as the Thread calling
             * this constructor.
             * @see java.lang.ThreadGroup
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new Thread with a runnable object and a newly generated name.
             * The new Thread will belong to the same ThreadGroup as the Thread calling
             * this constructor.
             * @param runnable		a java.lang.Runnable whose method <code>run</code> will be executed by the new Thread
             * @see java.lang.ThreadGroup
             * @see java.lang.Runnable
             */
            // @ts-ignore
            constructor(runnable: java.lang.Runnable)
            /**
             * Constructs a new Thread with a runnable object and name provided.
             * The new Thread will belong to the same ThreadGroup as the Thread calling
             * this constructor.
             * @param runnable		a java.lang.Runnable whose method <code>run</code> will be executed by the new Thread
             * @param threadName		Name for the Thread being created
             * @see java.lang.ThreadGroup
             * @see java.lang.Runnable
             */
            // @ts-ignore
            constructor(runnable: java.lang.Runnable, threadName: java.lang.String | string)
            /**
             * Constructs a new Thread with no runnable object and the name provided.
             * The new Thread will belong to the same ThreadGroup as the Thread calling
             * this constructor.
             * @param threadName		Name for the Thread being created
             * @see java.lang.ThreadGroup
             * @see java.lang.Runnable
             */
            // @ts-ignore
            constructor(threadName: java.lang.String | string)
            /**
             * Constructs a new Thread with a runnable object and a newly generated name.
             * The new Thread will belong to the ThreadGroup passed as parameter.
             * @param group			ThreadGroup to which the new Thread will belong
             * @param runnable		a java.lang.Runnable whose method <code>run</code> will be executed by the new Thread
             * @exception SecurityException
             * 					if <code>group.checkAccess()</code> fails with a SecurityException
             * @exception IllegalThreadStateException
             * 					if <code>group.destroy()</code> has already been done
             * @see java.lang.ThreadGroup
             * @see java.lang.Runnable
             * @see java.lang.SecurityException
             * @see java.lang.SecurityManager
             */
            // @ts-ignore
            constructor(group: java.lang.ThreadGroup, runnable: java.lang.Runnable)
            /**
             * Constructs a new Thread with a runnable object, the given name and
             * belonging to the ThreadGroup passed as parameter.
             * @param group			ThreadGroup to which the new Thread will belong
             * @param runnable		a java.lang.Runnable whose method <code>run</code> will be executed by the new Thread
             * @param threadName		Name for the Thread being created
             * @param stack			Platform dependent stack size
             * @exception SecurityException
             * 					if <code>group.checkAccess()</code> fails with a SecurityException
             * @exception IllegalThreadStateException
             * 					if <code>group.destroy()</code> has already been done
             * @since 1.4
             * @see java.lang.ThreadGroup
             * @see java.lang.Runnable
             * @see java.lang.SecurityException
             * @see java.lang.SecurityManager
             */
            // @ts-ignore
            constructor(group: java.lang.ThreadGroup, runnable: java.lang.Runnable, threadName: java.lang.String | string, stack: number /*long*/)
            /**
             * Constructs a new Thread with a runnable object, the given name and
             * belonging to the ThreadGroup passed as parameter.
             * @param group			ThreadGroup to which the new Thread will belong
             * @param runnable		a java.lang.Runnable whose method <code>run</code> will be executed by the new Thread
             * @param threadName		Name for the Thread being created
             * @exception SecurityException
             * 					if <code>group.checkAccess()</code> fails with a SecurityException
             * @exception IllegalThreadStateException
             * 					if <code>group.destroy()</code> has already been done
             * @see java.lang.ThreadGroup
             * @see java.lang.Runnable
             * @see java.lang.SecurityException
             * @see java.lang.SecurityManager
             */
            // @ts-ignore
            constructor(group: java.lang.ThreadGroup, runnable: java.lang.Runnable, threadName: java.lang.String | string)
            /**
             * Constructs a new Thread with no runnable object, the given name and
             * belonging to the ThreadGroup passed as parameter.
             * @param group			ThreadGroup to which the new Thread will belong
             * @param threadName		Name for the Thread being created
             * @exception SecurityException
             * 					if <code>group.checkAccess()</code> fails with a SecurityException
             * @exception IllegalThreadStateException
             * 					if <code>group.destroy()</code> has already been done
             * @see java.lang.ThreadGroup
             * @see java.lang.SecurityException
             * @see java.lang.SecurityManager
             */
            // @ts-ignore
            constructor(group: java.lang.ThreadGroup, threadName: java.lang.String | string)
            /**
             * The maximum priority value for a Thread.
             */
            // @ts-ignore
            public static readonly MAX_PRIORITY: number /*int*/
            /**
             * The minimum priority value for a Thread.
             */
            // @ts-ignore
            public static readonly MIN_PRIORITY: number /*int*/
            /**
             * The default priority value for a Thread.
             */
            // @ts-ignore
            public static readonly NORM_PRIORITY: number /*int*/
            /**
             * Returns how many threads are active in the <code>ThreadGroup</code>
             * which the current thread belongs to.
             * @return Number of Threads
             */
            // @ts-ignore
            public static activeCount(): number /*int*/
            /**
             * This method is used for operations that require approval from
             * a SecurityManager. If there's none installed, this method is a no-op.
             * If there's a SecurityManager installed , <code>checkAccess(Ljava.lang.Thread;)</code>
             * is called for that SecurityManager.
             * @see java.lang.SecurityException
             * @see java.lang.SecurityManager
             */
            // @ts-ignore
            public checkAccess(): void
            /**
             * Returns the number of stack frames in this thread.
             * @return Number of stack frames
             * @deprecated The semantics of this method are poorly defined and it uses the deprecated suspend() method.
             */
            // @ts-ignore
            public countStackFrames(): number /*int*/
            /**
             * Answers the instance of Thread that corresponds to the running Thread
             * which calls this method.
             * @return a java.lang.Thread corresponding to the code that called <code>currentThread()</code>
             */
            // @ts-ignore
            public static currentThread(): java.lang.Thread
            /**
             * Destroys the receiver without any monitor cleanup. Not implemented.
             * @deprecated May cause deadlocks.
             */
            // @ts-ignore
            public destroy(): void
            /**
             * Prints a text representation of the stack for this Thread.
             */
            // @ts-ignore
            public static dumpStack(): void
            /**
             * Copies an array with all Threads which are in the same ThreadGroup as
             * the receiver - and subgroups - into the array <code>threads</code>
             * passed as parameter. If the array passed as parameter is too small no
             * exception is thrown - the extra elements are simply not copied.
             * @param threads	array into which the Threads will be copied
             * @return How many Threads were copied over
             * @exception SecurityException	
             * 					if the installed SecurityManager fails <code>checkAccess(Ljava.lang.Thread;)</code>
             * @see java.lang.SecurityException
             * @see java.lang.SecurityManager
             */
            // @ts-ignore
            public static enumerate(threads: java.lang.Thread[]): number /*int*/
            /**
             * Returns the context ClassLoader for the receiver.
             * @return ClassLoader		The context ClassLoader
             * @see java.lang.ClassLoader
             * @see #getContextClassLoader()
             */
            // @ts-ignore
            public getContextClassLoader(): java.lang.ClassLoader
            /**
             * Answers the name of the receiver.
             * @return the receiver's name (a java.lang.String)
             */
            // @ts-ignore
            public getName(): string
            /**
             * Answers the priority of the receiver.
             * @return the receiver's priority (an <code>int</code>)
             * @see Thread#setPriority
             */
            // @ts-ignore
            public getPriority(): number /*int*/
            /**
             * Answers the ThreadGroup to which the receiver belongs
             * @return the receiver's ThreadGroup
             */
            // @ts-ignore
            public getThreadGroup(): java.lang.ThreadGroup
            /**
             * Posts an interrupt request to the receiver
             * @exception SecurityException
             * 					if <code>group.checkAccess()</code> fails with a SecurityException
             * @see java.lang.SecurityException
             * @see java.lang.SecurityManager
             * @see Thread#interrupted
             * @see Thread#isInterrupted
             */
            // @ts-ignore
            public interrupt(): void
            /**
             * Answers a <code>boolean</code> indicating whether the current Thread
             * (<code>currentThread()</code>) has a pending interrupt request
             * (<code>true</code>) or not (<code>false</code>). It also has the
             * side-effect of clearing the flag.
             * @return a <code>boolean</code>
             * @see Thread#currentThread
             * @see Thread#interrupt
             * @see Thread#isInterrupted
             */
            // @ts-ignore
            public static interrupted(): boolean
            /**
             * Answers <code>true</code> if the receiver has
             * already been started and still runs code (hasn't died yet).
             * Answers <code>false</code> either if the receiver hasn't been
             * started yet or if it has already started and run to completion and died.
             * @return a <code>boolean</code>
             * @see Thread#start
             */
            // @ts-ignore
            public isAlive(): boolean
            /**
             * Answers a <code>boolean</code> indicating whether the receiver
             * is a daemon Thread (<code>true</code>) or not (<code>false</code>)
             * A daemon Thread only runs as long as there are non-daemon Threads
             * running. When the last non-daemon Thread ends, the whole program ends
             * no matter if it had daemon Threads still running or not.
             * @return a <code>boolean</code>
             * @see Thread#setDaemon
             */
            // @ts-ignore
            public isDaemon(): boolean
            /**
             * Answers a <code>boolean</code> indicating whether the receiver
             * has a pending interrupt request (<code>true</code>) or not (<code>false</code>)
             * @return a <code>boolean</code>
             * @see Thread#interrupt
             * @see Thread#interrupted
             */
            // @ts-ignore
            public isInterrupted(): boolean
            /**
             * Blocks the current Thread (<code>Thread.currentThread()</code>) until the
             * receiver finishes its execution and dies.
             * @exception InterruptedException
             * 					if <code>interrupt()</code> was called for the receiver while
             * 					it was in the <code>join()</code> call
             * @see Object#notifyAll
             * @see java.lang.ThreadDeath
             */
            // @ts-ignore
            public join(): void
            /**
             * Blocks the current Thread (<code>Thread.currentThread()</code>) until the
             * receiver finishes its execution and dies or the specified timeout expires, whatever
             * happens first.
             * @param timeoutInMilliseconds		The maximum time to wait (in milliseconds).
             * @exception InterruptedException
             * 					if <code>interrupt()</code> was called for the receiver while
             * 					it was in the <code>join()</code> call
             * @see Object#notifyAll
             * @see java.lang.ThreadDeath
             */
            // @ts-ignore
            public join(timeoutInMilliseconds: number /*long*/): void
            /**
             * Blocks the current Thread (<code>Thread.currentThread()</code>) until the
             * receiver finishes its execution and dies or the specified timeout expires, whatever
             * happens first.
             * @param timeoutInMilliseconds	The maximum time to wait (in milliseconds).
             * @param nanos					Extra nanosecond precision
             * @exception InterruptedException
             * 					if <code>interrupt()</code> was called for the receiver while
             * 					it was in the <code>join()</code> call
             * @see Object#notifyAll
             * @see java.lang.ThreadDeath
             */
            // @ts-ignore
            public join(timeoutInMilliseconds: number /*long*/, nanos: number /*int*/): void
            /**
             * This is a no-op if the receiver was never suspended, or suspended and already
             * resumed. If the receiver is suspended, however, makes it resume to the point
             * where it was when it was suspended.
             * @exception SecurityException
             * 					if <code>checkAccess()</code> fails with a SecurityException
             * @see Thread#suspend()
             * @deprecated Used with deprecated method Thread.suspend().
             */
            // @ts-ignore
            public resume(): void
            /**
             * Calls the <code>run()</code> method of the Runnable object the receiver holds.
             * If no Runnable is set, does nothing.
             * @see Thread#start
             */
            // @ts-ignore
            public run(): void
            /**
             * Set the context ClassLoader for the receiver.
             * @param cl		The context ClassLoader
             * @see java.lang.ClassLoader
             * @see #getContextClassLoader()
             */
            // @ts-ignore
            public setContextClassLoader(cl: java.lang.ClassLoader): void
            /**
             * Set if the receiver is a daemon Thread or not. This can only be done
             * before the Thread starts running.
             * @param isDaemon		A boolean indicating if the Thread should be daemon or not
             * @exception SecurityException
             * 					if <code>checkAccess()</code> fails with a SecurityException
             * @see Thread#isDaemon
             */
            // @ts-ignore
            public setDaemon(isDaemon: boolean): void
            /**
             * Sets the name of the receiver.
             * @param threadName		new name for the Thread
             * @exception SecurityException
             * 					if <code>checkAccess()</code> fails with a SecurityException
             * @see Thread#getName
             */
            // @ts-ignore
            public setName(threadName: java.lang.String | string): void
            /**
             * Sets the priority of the receiver. Note that the final priority set may be less than the
             * requested value, as it is bounded by the maxPriority() of the receiver's ThreadGroup.
             * @param requestedPriority		new priority for the Thread
             * @exception SecurityException
             * 					if <code>checkAccess()</code> fails with a SecurityException
             * @exception IllegalArgumentException
             * 					if the new priority is greater than Thread.MAX_PRIORITY or less than
             * 					Thread.MIN_PRIORITY
             * @see Thread#getPriority
             */
            // @ts-ignore
            public setPriority(requestedPriority: number /*int*/): void
            /**
             * Causes the thread which sent this message to sleep an interval
             * of time (given in milliseconds). The precision is not guaranteed -
             * the Thread may sleep more or less than requested.
             * @param time		The time to sleep in milliseconds.
             * @exception InterruptedException
             * 					if <code>interrupt()</code> was called for this Thread while it was sleeping
             * @see Thread#interrupt()
             */
            // @ts-ignore
            public static sleep(time: number /*long*/): void
            /**
             * Causes the thread which sent this message to sleep an interval
             * of time (given in milliseconds). The precision is not guaranteed -
             * the Thread may sleep more or less than requested.
             * @param time		The time to sleep in milliseconds.
             * @param nanos		Extra nanosecond precision
             * @exception InterruptedException
             * 					if <code>interrupt()</code> was called for this Thread while it was sleeping
             * @see Thread#interrupt()
             */
            // @ts-ignore
            public static sleep(time: number /*long*/, nanos: number /*int*/): void
            /**
             * Starts the new Thread of execution. The <code>run()</code> method of the receiver
             * will be called by the receiver Thread itself (and not the Thread calling <code>start()</code>).
             * @exception IllegalThreadStateException
             * 					Unspecified in the Java language specification
             * @see Thread#run
             */
            // @ts-ignore
            public start(): void
            /**
             * Requests the receiver Thread to stop and throw ThreadDeath.
             * The Thread is resumed if it was suspended and awakened if it was
             * sleeping, so that it can proceed to throw ThreadDeath.
             * @exception SecurityException
             * 					if <code>checkAccess()</code> fails with a SecurityException
             * @deprecated 
             */
            // @ts-ignore
            public stop(): void
            /**
             * Throws UnsupportedOperationException.
             * @param throwable		Throwable object to be thrown by the Thread
             * @deprecated 
             */
            // @ts-ignore
            public stop(throwable: java.lang.Throwable | Error): void
            /**
             * This is a no-op if the receiver is suspended. If the receiver <code>isAlive()</code>
             * however, suspended it until <code>resume()</code> is sent to it. Suspend requests
             * are not queued, which means that N requests are equivalent to just one - only one
             * resume request is needed in this case.
             * @exception SecurityException
             * 					if <code>checkAccess()</code> fails with a SecurityException
             * @see Thread#resume()
             * @deprecated May cause deadlocks.
             */
            // @ts-ignore
            public suspend(): void
            /**
             * Answers a string containing a concise, human-readable
             * description of the receiver.
             * @return a printable representation for the receiver.
             */
            // @ts-ignore
            public toString(): string
            /**
             * Causes the thread which sent this message to yield execution to another Thread
             * that is ready to run. The actual scheduling is implementation-dependent.
             * @version initial
             */
            // @ts-ignore
            public static yield(): void
            /**
             * Returns whether the current thread has a monitor lock on the specified object.
             * @param object the object to test for the monitor lock
             * @return true when the current thread has a monitor lock on the specified object
             * @since 1.4
             */
            // @ts-ignore
            public static holdsLock(object: java.lang.Object | any): boolean
            /**
             * Returns an array of StackTraceElement, where each element of the array represents a frame
             * on the Java stack.
             * @return an array of StackTraceElement
             * @throws SecurityException if the RuntimePermission "getStackTrace" is not allowed
             * @see java.lang.StackTraceElement
             */
            // @ts-ignore
            public getStackTrace(): java.lang.StackTraceElement[]
            /**
             * Returns a Map containing Thread keys, and values which are arrays of StackTraceElement. The Map contains
             * all Threads which were alive at the time this method was called.
             * @return an array of StackTraceElement
             * @throws SecurityException if the RuntimePermission "getStackTrace" is not allowed, or the
             *  		RuntimePermission "modifyThreadGroup" is not allowed
             * @see #getStackTrace()
             */
            // @ts-ignore
            public static getAllStackTraces(): java.util.Map<java.lang.Thread, java.lang.StackTraceElement[]>
            /**
             * Return a unique id for this Thread.
             * @return a positive unique id for this Thread.
             */
            // @ts-ignore
            public getId(): number /*long*/
            /**
             * Return the UncaughtExceptionHandler for this Thread.
             * @return the UncaughtExceptionHandler for this Thread
             * @see UncaughtExceptionHandler
             */
            // @ts-ignore
            public getUncaughtExceptionHandler(): java.lang.Thread.UncaughtExceptionHandler
            /**
             * Set the UncaughtExceptionHandler for this Thread.
             * @param handler the UncaughtExceptionHandler to set
             * @see UncaughtExceptionHandler
             */
            // @ts-ignore
            public setUncaughtExceptionHandler(handler: java.lang.Thread.UncaughtExceptionHandler): void
            /**
             * Return the default UncaughtExceptionHandler used for new Threads.
             * @return the default UncaughtExceptionHandler for new Threads
             * @see UncaughtExceptionHandler
             */
            // @ts-ignore
            public static getDefaultUncaughtExceptionHandler(): java.lang.Thread.UncaughtExceptionHandler
            /**
             * Set the UncaughtExceptionHandler used for new  Threads.
             * @param handler the UncaughtExceptionHandler to set
             * @see UncaughtExceptionHandler
             */
            // @ts-ignore
            public static setDefaultUncaughtExceptionHandler(handler: java.lang.Thread.UncaughtExceptionHandler): void
            /**
             * Returns the current Thread state.
             * @return the current Thread state constant.
             * @see State
             */
            // @ts-ignore
            public getState(): java.lang.Thread.State
            // @ts-ignore
            clone(): any
        }
    }
}
