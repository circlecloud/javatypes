declare namespace java {
    namespace lang {
        /**
         * Object is the root of the java class hierarchy. All non-base types
         * respond to the messages defined in this class.
         * @author OTI
         * @version initial
         */
        // @ts-ignore
        class Object {
            /**
             * Constructs a new instance of this class.
             */
            // @ts-ignore
            constructor()
            /**
             * Answers a new instance of the same class as the receiver,
             * whose slots have been filled in with the values in the
             * slots of the receiver.
             * <p>
             * Classes which wish to support cloning must specify that
             * they implement the Cloneable interface, since the native
             * implementation checks for this.
             * @return Object
             * 					a shallow copy of this object.
             * @exception CloneNotSupportedException
             * 					if the receiver's class does not implement
             * 					the interface Cloneable.
             */
            // @ts-ignore
            clone(): java.lang.Object
            /**
             * Compares the argument to the receiver, and answers true
             * if they represent the <em>same</em> object using a class
             * specific comparison. The implementation in Object answers
             * true only if the argument is the exact same object as the
             * receiver (==).
             * @param o Object
             * 					the object to compare with this object.
             * @return boolean
             * 					<code>true</code>
             * 						if the object is the same as this object
             * 					<code>false</code>
             * 						if it is different from this object.
             * @see #hashCode
             */
            // @ts-ignore
            equals(o: any): boolean
            /**
             * Called by the virtual machine when there are no longer any (non-weak)
             * references to the receiver. Subclasses can use this facility to
             * guarantee that any associated resources are cleaned up before
             * the receiver is garbage collected. Uncaught exceptions which are
             * thrown during the running of the method cause it to terminate
             * immediately, but are otherwise ignored.
             * <p>
             * Note: The virtual machine assumes that the implementation
             * in class Object is empty.
             * @exception Throwable
             * 					The virtual machine ignores any exceptions
             * 					which are thrown during finalization.
             */
            // @ts-ignore
            finalize(): void
            /**
             * Answers the unique instance of java.lang.Class which
             * represents the class of the receiver.
             * @return the receiver's Class
             */
            // @ts-ignore
            getClass(): java.lang.Class<? extends java.lang.Object>
            /**
             * Answers an integer hash code for the receiver. Any two
             * objects which answer <code>true</code> when passed to
             * <code>.equals</code> must answer the same value for this
             * method.
             * @return the receiver's hash.
             * @see #equals
             */
            // @ts-ignore
            hashCode(): int
            /**
             * Causes one thread which is <code>wait</code>ing on the
             * receiver to be made ready to run. This does not guarantee
             * that the thread will immediately run. The method can only
             * be invoked by a thread which owns the receiver's monitor.
             * @see #notifyAll
             * @see #wait()
             * @see #wait(long)
             * @see #wait(long,int)
             * @see java.lang.Thread
             */
            // @ts-ignore
            notify(): void
            /**
             * Causes all threads which are <code>wait</code>ing on the
             * receiver to be made ready to run. The threads are scheduled
             * according to their priorities as specified in class Thread.
             * Between any two threads of the same priority the one which
             * waited first will be the first thread that runs after
             * being notified. The method can only be invoked by a thread
             * which owns the receiver's monitor.
             * @see #notify
             * @see #wait()
             * @see #wait(long)
             * @see #wait(long,int)
             * @see java.lang.Thread
             */
            // @ts-ignore
            notifyAll(): void
            /**
             * Answers a string containing a concise, human-readable
             * description of the receiver.
             * @return String
             * 					a printable representation for the receiver.
             */
            // @ts-ignore
            toString(): java.lang.String
            /**
             * Causes the thread which sent this message to be made not
             * ready to run pending some change in the receiver (as
             * indicated by <code>notify</code> or <code>notifyAll</code>).
             * The method can only be invoked by a thread which owns the
             * receiver's monitor. A waiting thread can be sent
             * <code>interrupt()</code> to cause it to prematurely stop
             * waiting, so senders of wait should check that the condition
             * they were waiting for has been met.
             * <p>
             * When the thread waits, it gives up ownership of the
             * receiver's monitor. When it is notified (or interrupted) it
             * re-acquires the monitor before it starts running.
             * @exception InterruptedException
             * 					to interrupt the wait.
             * @see Thread#interrupt
             * @see #notify
             * @see #notifyAll
             * @see #wait(long)
             * @see #wait(long,int)
             * @see java.lang.Thread
             */
            // @ts-ignore
            wait(): void
            /**
             * Causes the thread which sent this message to be made not
             * ready to run either pending some change in the receiver
             * (as indicated by <code>notify</code> or <code>notifyAll</code>)
             * or the expiration of the timeout. The method can only be invoked
             * by a thread which owns the receiver's monitor. A waiting thread
             * can be sent <code>interrupt()</code> to cause it to prematurely
             * stop waiting, so senders of wait should check that the condition
             * they were waiting for has been met.
             * <p>
             * When the thread waits, it gives up ownership of the
             * receiver's monitor. When it is notified (or interrupted) it
             * re-acquires the monitor before it starts running.
             * @param time long
             * 					The maximum time to wait in milliseconds.
             * @exception InterruptedException
             * 					to interrupt the wait.
             * @see #notify
             * @see #notifyAll
             * @see #wait()
             * @see #wait(long,int)
             * @see java.lang.Thread
             */
            // @ts-ignore
            wait(time: number /*long*/): void
            /**
             * Causes the thread which sent this message to be made not
             * ready to run either pending some change in the receiver
             * (as indicated by <code>notify</code> or <code>notifyAll</code>)
             * or the expiration of the timeout. The method can only be invoked
             * by a thread which owns the receiver's monitor. A waiting thread
             * can be sent <code>interrupt()</code> to cause it to prematurely
             * stop waiting, so senders of wait should check that the condition
             * they were waiting for has been met.
             * <p>
             * When the thread waits, it gives up ownership of the
             * receiver's monitor. When it is notified (or interrupted) it
             * re-acquires the monitor before it starts running.
             * @param time long
             * 					The maximum time to wait in milliseconds.
             * @param frac int
             * 					The fraction of a mSec to wait, specified
             * 					in nano seconds.
             * @exception InterruptedException
             * 					to interrupt the wait.
             * @see #notify
             * @see #notifyAll
             * @see #wait()
             * @see #wait(long)
             * @see java.lang.Thread
             */
            // @ts-ignore
            wait(time: number /*long*/, frac: number /*int*/): void
        }
    }
}
