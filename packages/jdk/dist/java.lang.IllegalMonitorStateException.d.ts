declare namespace java {
    namespace lang {
        /**
         * Thrown to indicate that a thread has attempted to wait on an
         * object's monitor or to notify other threads waiting on an object's
         * monitor without owning the specified monitor.
         * @author unascribed
         * @see java.lang.Object#notify()
         * @see java.lang.Object#notifyAll()
         * @see java.lang.Object#wait()
         * @see java.lang.Object#wait(long)
         * @see java.lang.Object#wait(long, int)
         * @since JDK1.0
         */
        // @ts-ignore
        class IllegalMonitorStateException extends java.lang.RuntimeException {
            /**
             * Constructs an <code>IllegalMonitorStateException</code> with no
             * detail message.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs an <code>IllegalMonitorStateException</code> with the
             * specified detail message.
             * @param s   the detail message.
             */
            // @ts-ignore
            constructor(s: java.lang.String | string)
        }
    }
}
