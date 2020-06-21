declare namespace javax {
    namespace xml {
        namespace crypto {
            /**
             * This exception is thrown when a particular XML mechanism is requested but
             * is not available in the environment.
             * <p>A <code>NoSuchMechanismException</code> can contain a cause: another
             * throwable that caused this <code>NoSuchMechanismException</code> to get
             * thrown.
             * @author Sean Mullan
             * @author JSR 105 Expert Group
             * @since 1.6
             * @see XMLSignatureFactory#getInstance XMLSignatureFactory.getInstance
             * @see KeyInfoFactory#getInstance KeyInfoFactory.getInstance
             */
            // @ts-ignore
            class NoSuchMechanismException extends java.lang.RuntimeException {
                /**
                 * Constructs a new <code>NoSuchMechanismException</code> with
                 * <code>null</code> as its detail message.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a new <code>NoSuchMechanismException</code> with the
                 * specified detail message.
                 * @param message the detail message
                 */
                // @ts-ignore
                constructor(message: java.lang.String | string)
                /**
                 * Constructs a new <code>NoSuchMechanismException</code> with the
                 * specified detail message and cause.
                 * <p>Note that the detail message associated with
                 * <code>cause</code> is <i>not</i> automatically incorporated in
                 * this exception's detail message.
                 * @param message the detail message
                 * @param cause the cause (A <tt>null</tt> value is permitted, and
                 *         indicates that the cause is nonexistent or unknown.)
                 */
                // @ts-ignore
                constructor(message: java.lang.String | string, cause: java.lang.Throwable | Error)
                /**
                 * Constructs a new <code>NoSuchMechanismException</code> with the
                 * specified cause and a detail message of
                 * <code>(cause==null ? null : cause.toString())</code> (which typically
                 * contains the class and detail message of <code>cause</code>).
                 * @param cause the cause (A <tt>null</tt> value is permitted, and
                 *         indicates that the cause is nonexistent or unknown.)
                 */
                // @ts-ignore
                constructor(cause: java.lang.Throwable | Error)
                /**
                 * Returns the cause of this <code>NoSuchMechanismException</code> or
                 * <code>null</code> if the cause is nonexistent or unknown.  (The
                 * cause is the throwable that caused this
                 * <code>NoSuchMechanismException</code> to get thrown.)
                 * @return the cause of this <code>NoSuchMechanismException</code> or
                 *          <code>null</code> if the cause is nonexistent or unknown.
                 */
                // @ts-ignore
                getCause(): Error
                /**
                 * Prints this <code>NoSuchMechanismException</code>, its backtrace and
                 * the cause's backtrace to the standard error stream.
                 */
                // @ts-ignore
                printStackTrace(): void
                /**
                 * Prints this <code>NoSuchMechanismException</code>, its backtrace and
                 * the cause's backtrace to the specified print stream.
                 * @param s <code>PrintStream</code> to use for output
                 */
                // @ts-ignore
                printStackTrace(s: java.io.PrintStream): void
                /**
                 * Prints this <code>NoSuchMechanismException</code>, its backtrace and
                 * the cause's backtrace to the specified print writer.
                 * @param s <code>PrintWriter</code> to use for output
                 */
                // @ts-ignore
                printStackTrace(s: java.io.PrintWriter): void
            }
        }
    }
}
