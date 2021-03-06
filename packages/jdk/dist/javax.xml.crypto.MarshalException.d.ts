declare namespace javax {
    namespace xml {
        namespace crypto {
            /**
             * Indicates an exceptional condition that occurred during the XML
             * marshalling or unmarshalling process.
             * <p>A <code>MarshalException</code> can contain a cause: another
             * throwable that caused this <code>MarshalException</code> to get thrown.
             * @author Sean Mullan
             * @author JSR 105 Expert Group
             * @since 1.6
             * @see XMLSignature#sign(XMLSignContext)
             * @see XMLSignatureFactory#unmarshalXMLSignature(XMLValidateContext)
             */
            // @ts-ignore
            class MarshalException extends java.lang.Exception {
                /**
                 * Constructs a new <code>MarshalException</code> with
                 * <code>null</code> as its detail message.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a new <code>MarshalException</code> with the specified
                 * detail message.
                 * @param message the detail message
                 */
                // @ts-ignore
                constructor(message: java.lang.String | string)
                /**
                 * Constructs a new <code>MarshalException</code> with the
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
                 * Constructs a new <code>MarshalException</code> with the specified cause
                 * and a detail message of <code>(cause==null ? null : cause.toString())
                 * </code> (which typically contains the class and detail message of
                 * <code>cause</code>).
                 * @param cause the cause (A <tt>null</tt> value is permitted, and
                 *         indicates that the cause is nonexistent or unknown.)
                 */
                // @ts-ignore
                constructor(cause: java.lang.Throwable | Error)
                /**
                 * Returns the cause of this <code>MarshalException</code> or
                 * <code>null</code> if the cause is nonexistent or unknown.  (The
                 * cause is the throwable that caused this
                 * <code>MarshalException</code> to get thrown.)
                 * @return the cause of this <code>MarshalException</code> or
                 *          <code>null</code> if the cause is nonexistent or unknown.
                 */
                // @ts-ignore
                getCause(): Error
                /**
                 * Prints this <code>MarshalException</code>, its backtrace and
                 * the cause's backtrace to the standard error stream.
                 */
                // @ts-ignore
                printStackTrace(): void
                /**
                 * Prints this <code>MarshalException</code>, its backtrace and
                 * the cause's backtrace to the specified print stream.
                 * @param s <code>PrintStream</code> to use for output
                 */
                // @ts-ignore
                printStackTrace(s: java.io.PrintStream): void
                /**
                 * Prints this <code>MarshalException</code>, its backtrace and
                 * the cause's backtrace to the specified print writer.
                 * @param s <code>PrintWriter</code> to use for output
                 */
                // @ts-ignore
                printStackTrace(s: java.io.PrintWriter): void
            }
        }
    }
}
