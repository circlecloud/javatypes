declare namespace java {
    namespace lang {
        /**
         * Thrown when a thread is waiting, sleeping, or otherwise occupied,
         * and the thread is interrupted, either before or during the activity.
         * Occasionally a method may wish to test whether the current
         * thread has been interrupted, and if so, to immediately throw
         * this exception.  The following code can be used to achieve
         * this effect:
         * <pre>
         * if (Thread.interrupted())  // Clears interrupted status!
         * throw new InterruptedException();
         * </pre>
         * @author Frank Yellin
         * @see java.lang.Object#wait()
         * @see java.lang.Object#wait(long)
         * @see java.lang.Object#wait(long, int)
         * @see java.lang.Thread#sleep(long)
         * @see java.lang.Thread#interrupt()
         * @see java.lang.Thread#interrupted()
         * @since JDK1.0
         */
        // @ts-ignore
        class InterruptedException extends java.lang.Exception {
            /**
             * Constructs an <code>InterruptedException</code> with no detail  message.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs an <code>InterruptedException</code> with the
             * specified detail message.
             * @param s   the detail message.
             */
            // @ts-ignore
            constructor(s: string)
        }
    }
}
