declare namespace java {
    namespace lang {
        /**
         * ThreadGroups are containers of Threads and ThreadGroups, therefore providing
         * a tree-like structure to organize Threads. The root ThreadGroup name is "system"
         * and it has no parent ThreadGroup. All other ThreadGroups have exactly one parent
         * ThreadGroup. All Threads belong to exactly one ThreadGroup.
         * @author OTI
         * @version initial
         * @see Thread
         * @see SecurityManager
         */
        // @ts-ignore
        class ThreadGroup extends java.lang.Object implements java.lang.Thread.UncaughtExceptionHandler {
            /**
             * Constructs a new ThreadGroup with the name provided.
             * The new ThreadGroup will be child of the ThreadGroup to which
             * the <code>Thread.currentThread()</code> belongs.
             * @param name		Name for the ThreadGroup being created
             * @throws SecurityException 	if <code>checkAccess()</code> for the parent group fails with a SecurityException
             * @see java.lang.Thread#currentThread
             */
            // @ts-ignore
            constructor(name: java.lang.String | string)
            /**
             * Constructs a new ThreadGroup with the name provided, as child of
             * the ThreadGroup <code>parent</code>
             * @param parent		Parent ThreadGroup
             * @param name		Name for the ThreadGroup being created
             * @throws NullPointerException 			if <code>parent</code> is <code>null</code>
             * @throws SecurityException 				if <code>checkAccess()</code> for the parent group fails with a SecurityException
             * @throws IllegalThreadStateException 	if <code>parent</code> has been destroyed already
             */
            // @ts-ignore
            constructor(parent: java.lang.ThreadGroup, name: java.lang.String | string)
            /**
             * Returns the number of Threads which are children of
             * the receiver, directly or indirectly.
             * @return Number of children Threads
             */
            // @ts-ignore
            public activeCount(): number /*int*/
            /**
             * Returns the number of ThreadGroups which are children of
             * the receiver, directly or indirectly.
             * @return Number of children ThreadGroups
             */
            // @ts-ignore
            public activeGroupCount(): number /*int*/
            /**
             * The definition of this method depends on the deprecated method <code>suspend()</code>.
             * The behavior of this call was never specified.
             * @param b		Used to control low memory implicit suspension
             * @return always returns true
             * @deprecated Required deprecated method suspend().
             */
            // @ts-ignore
            public allowThreadSuspension(b: boolean): boolean
            /**
             * If there is a SecurityManager installed, call <code>checkAccess</code>
             * in it passing the receiver as parameter, otherwise do nothing.
             */
            // @ts-ignore
            public checkAccess(): void
            /**
             * Destroys the receiver and recursively all its subgroups. It is only legal
             * to destroy a ThreadGroup that has no Threads.
             * Any daemon ThreadGroup is destroyed automatically when it becomes empty
             * (no Threads and no ThreadGroups in it).
             * @throws IllegalThreadStateException 	if the receiver or any of its subgroups has been destroyed already
             * @throws SecurityException 				if <code>this.checkAccess()</code> fails with a SecurityException
             */
            // @ts-ignore
            public destroy(): void
            /**
             * Copies an array with all Threads which are children of
             * the receiver (directly or indirectly) into the array <code>threads</code>
             * passed as parameters. If the array passed as parameter is too small no
             * exception is thrown - the extra elements are simply not copied.
             * @param threads	Thread	array into which the Threads will be copied
             * @return How many Threads were copied over
             */
            // @ts-ignore
            public enumerate(threads: java.lang.Thread[]): number /*int*/
            /**
             * Copies an array with all Threads which are children of
             * the receiver into the array <code>threads</code>
             * passed as parameter. Children Threads of subgroups are recursively copied
             * as well if parameter <code>recurse</code> is <code>true</code>.
             * If the array passed as parameter is too small no
             * exception is thrown - the extra elements are simply not copied.
             * @param threads		array into which the Threads will be copied
             * @param recurse		Indicates whether Threads in subgroups should be recursively copied as well or not
             * @return How many Threads were copied over
             */
            // @ts-ignore
            public enumerate(threads: java.lang.Thread[], recurse: boolean): number /*int*/
            /**
             * Copies an array with all ThreadGroups which are children of
             * the receiver (directly or indirectly) into the array <code>groups</code>
             * passed as parameters. If the array passed as parameter is too small no
             * exception is thrown - the extra elements are simply not copied.
             * @param groups 		array into which the ThreadGroups will be copied
             * @return How many ThreadGroups were copied over
             */
            // @ts-ignore
            public enumerate(groups: java.lang.ThreadGroup[]): number /*int*/
            /**
             * Copies an array with all ThreadGroups which are children of
             * the receiver into the array <code>groups</code>
             * passed as parameter. Children ThreadGroups of subgroups are recursively copied
             * as well if parameter <code>recurse</code> is <code>true</code>.
             * If the array passed as parameter is too small no
             * exception is thrown - the extra elements are simply not copied.
             * @param groups		array into which the ThreadGroups will be copied
             * @param recurse		Indicates whether ThreadGroups in subgroups should be recursively copied as well or not
             * @return How many ThreadGroups were copied over
             */
            // @ts-ignore
            public enumerate(groups: java.lang.ThreadGroup[], recurse: boolean): number /*int*/
            /**
             * Answers the maximum allowed priority for a Thread in the receiver.
             * @return the maximum priority (an <code>int</code>)
             * @see #setMaxPriority
             */
            // @ts-ignore
            public getMaxPriority(): number /*int*/
            /**
             * Answers the name of the receiver.
             * @return the receiver's name (a java.lang.String)
             */
            // @ts-ignore
            public getName(): string
            /**
             * Answers the receiver's parent ThreadGroup. It can be null if the receiver
             * is the the root ThreadGroup.
             * @return the parent ThreadGroup
             */
            // @ts-ignore
            public getParent(): java.lang.ThreadGroup
            /**
             * Interrupts every Thread in the receiver and recursively in all its subgroups.
             * @throws SecurityException 	if <code>this.checkAccess()</code> fails with a SecurityException
             * @see Thread#interrupt
             */
            // @ts-ignore
            public interrupt(): void
            /**
             * Answers true if the receiver is a daemon ThreadGroup, false otherwise.
             * @return if the receiver is a daemon ThreadGroup
             * @see #setDaemon
             * @see #destroy
             */
            // @ts-ignore
            public isDaemon(): boolean
            /**
             * Answers true if the receiver has been destroyed already, false otherwise.
             * @return if the receiver has been destroyed already
             * @see #destroy
             */
            // @ts-ignore
            public isDestroyed(): boolean
            /**
             * Outputs to <code>System.out</code> a text representation of the hierarchy of
             * Threads and ThreadGroups in the receiver (and recursively). Proper indentation
             * is done to suggest the nesting of groups inside groups and threads inside groups.
             */
            // @ts-ignore
            public list(): void
            /**
             * Answers true if the receiver is a direct or indirect parent group of
             * ThreadGroup <code>g</code>, false otherwise.
             * @param g			ThreadGroup to test
             * @return if the receiver is parent of the ThreadGroup passed as parameter
             */
            // @ts-ignore
            public parentOf(g: java.lang.ThreadGroup): boolean
            /**
             * Resumes every Thread in the receiver and recursively in all its subgroups.
             * @throws SecurityException 	if <code>this.checkAccess()</code> fails with a SecurityException
             * @see Thread#resume
             * @see #suspend
             * @deprecated Requires deprecated method Thread.resume().
             */
            // @ts-ignore
            public resume(): void
            /**
             * Configures the receiver to be a daemon ThreadGroup or not.
             * Daemon ThreadGroups are automatically destroyed when they become empty.
             * @param isDaemon	new value defining if receiver should be daemon or not
             * @throws SecurityException 	if <code>checkAccess()</code> for the parent group fails with a SecurityException
             * @see #isDaemon
             * @see #destroy
             */
            // @ts-ignore
            public setDaemon(isDaemon: boolean): void
            /**
             * Configures the maximum allowed priority for a Thread in the receiver
             * and recursively in all its subgroups.
             * One can never change the maximum priority of a ThreadGroup to be
             * higher than it was. Such an attempt will not result in an exception, it will
             * simply leave the ThreadGroup with its current maximum priority.
             * @param newMax		the new maximum priority to be set
             * @throws SecurityException 			if <code>checkAccess()</code> fails with a SecurityException
             * @throws IllegalArgumentException 	if the new priority is greater than Thread.MAX_PRIORITY or less than
             * 											Thread.MIN_PRIORITY
             * @see #getMaxPriority
             */
            // @ts-ignore
            public setMaxPriority(newMax: number /*int*/): void
            /**
             * Stops every Thread in the receiver and recursively in all its subgroups.
             * @throws SecurityException 	if <code>this.checkAccess()</code> fails with a SecurityException
             * @see Thread#stop()
             * @see Thread#stop(Throwable)
             * @see ThreadDeath
             * @deprecated Requires deprecated method Thread.stop().
             */
            // @ts-ignore
            public stop(): void
            /**
             * Suspends every Thread in the receiver and recursively in all its subgroups.
             * @throws SecurityException 	if <code>this.checkAccess()</code> fails with a SecurityException
             * @see Thread#suspend
             * @see #resume
             * @deprecated Requires deprecated method Thread.suspend().
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
             * Any uncaught exception in any Thread has to be forwarded (by the VM) to the Thread's ThreadGroup
             * by sending this message (uncaughtException). This allows users to define custom ThreadGroup classes
             * and custom behavior for when a Thread has an uncaughtException or when it does (ThreadDeath).
             * @param t		Thread with an uncaught exception
             * @param e		The uncaught exception itself
             * @see Thread#stop()
             * @see Thread#stop(Throwable)
             * @see ThreadDeath
             */
            // @ts-ignore
            public uncaughtException(t: java.lang.Thread, e: java.lang.Throwable | Error): void
        }
    }
}
