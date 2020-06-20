declare namespace javax {
    namespace xml {
        namespace crypto {
            namespace dsig {
                /**
                 * Indicates an exceptional condition that occurred while executing a
                 * transform algorithm.
                 * <p>A <code>TransformException</code> can contain a cause: another
                 * throwable that caused this <code>TransformException</code> to get thrown.
                 * @see Transform#transform
                 * @author Sean Mullan
                 * @author JSR 105 Expert Group
                 * @since 1.6
                 */
                // @ts-ignore
                class TransformException extends java.lang.Exception {
                    /**
                     * Constructs a new <code>TransformException</code> with
                     * <code>null</code> as its detail message.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Constructs a new <code>TransformException</code> with the specified
                     * detail message.
                     * @param message the detail message
                     */
                    // @ts-ignore
                    constructor(message: string)
                    /**
                     * Constructs a new <code>TransformException</code> with the
                     * specified detail message and cause.
                     * <p>Note that the detail message associated with
                     * <code>cause</code> is <i>not</i> automatically incorporated in
                     * this exception's detail message.
                     * @param message the detail message
                     * @param cause the cause (A <tt>null</tt> value is permitted, and
                     *         indicates that the cause is nonexistent or unknown.)
                     */
                    // @ts-ignore
                    constructor(message: string, cause: Error)
                    /**
                     * Constructs a new <code>TransformException</code> with the specified
                     * cause and a detail message of
                     * <code>(cause==null ? null : cause.toString())</code>
                     * (which typically contains the class and detail message of
                     * <code>cause</code>).
                     * @param cause the cause (A <tt>null</tt> value is permitted, and
                     *         indicates that the cause is nonexistent or unknown.)
                     */
                    // @ts-ignore
                    constructor(cause: Error)
                    /**
                     * Returns the cause of this <code>TransformException</code> or
                     * <code>null</code> if the cause is nonexistent or unknown.  (The
                     * cause is the throwable that caused this
                     * <code>TransformException</code> to get thrown.)
                     * @return the cause of this <code>TransformException</code> or
                     *          <code>null</code> if the cause is nonexistent or unknown.
                     */
                    // @ts-ignore
                    getCause(): java.lang.Throwable
                    /**
                     * Prints this <code>TransformException</code>, its backtrace and
                     * the cause's backtrace to the standard error stream.
                     */
                    // @ts-ignore
                    printStackTrace(): void
                    /**
                     * Prints this <code>TransformException</code>, its backtrace and
                     * the cause's backtrace to the specified print stream.
                     * @param s <code>PrintStream</code> to use for output
                     */
                    // @ts-ignore
                    printStackTrace(s: java.io.PrintStream): void
                    /**
                     * Prints this <code>TransformException</code>, its backtrace and
                     * the cause's backtrace to the specified print writer.
                     * @param s <code>PrintWriter</code> to use for output
                     */
                    // @ts-ignore
                    printStackTrace(s: java.io.PrintWriter): void
                }
            }
        }
    }
}
