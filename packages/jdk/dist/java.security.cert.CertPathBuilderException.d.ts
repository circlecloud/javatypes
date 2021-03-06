declare namespace java {
    namespace security {
        namespace cert {
            /**
             * An exception indicating one of a variety of problems encountered when
             * building a certification path with a {@code CertPathBuilder}.
             * <p>
             * A {@code CertPathBuilderException} provides support for wrapping
             * exceptions. The {@link #getCause getCause} method returns the throwable,
             * if any, that caused this exception to be thrown.
             * <p>
             * <b>Concurrent Access</b>
             * <p>
             * Unless otherwise specified, the methods defined in this class are not
             * thread-safe. Multiple threads that need to access a single
             * object concurrently should synchronize amongst themselves and
             * provide the necessary locking. Multiple threads each manipulating
             * separate objects need not synchronize.
             * @see CertPathBuilder
             * @since 1.4
             * @author Sean Mullan
             */
            // @ts-ignore
            class CertPathBuilderException extends java.security.GeneralSecurityException {
                /**
                 * Creates a {@code CertPathBuilderException} with {@code null}
                 * as its detail message.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Creates a {@code CertPathBuilderException} with the given
                 * detail message. The detail message is a {@code String} that
                 * describes this particular exception in more detail.
                 * @param msg the detail message
                 */
                // @ts-ignore
                constructor(msg: java.lang.String | string)
                /**
                 * Creates a {@code CertPathBuilderException} that wraps the specified
                 * throwable. This allows any exception to be converted into a
                 * {@code CertPathBuilderException}, while retaining information
                 * about the wrapped exception, which may be useful for debugging. The
                 * detail message is set to ({@code cause==null ? null : cause.toString()})
                 * (which typically contains the class and detail message of
                 * cause).
                 * @param cause the cause (which is saved for later retrieval by the
                 *  {#link #getCause getCause()} method). (A {@code null} value is
                 *  permitted, and indicates that the cause is nonexistent or unknown.)
                 */
                // @ts-ignore
                constructor(cause: java.lang.Throwable | Error)
                /**
                 * Creates a {@code CertPathBuilderException} with the specified
                 * detail message and cause.
                 * @param msg the detail message
                 * @param cause the cause (which is saved for later retrieval by the
                 *  {#link #getCause getCause()} method). (A {@code null} value is
                 *  permitted, and indicates that the cause is nonexistent or unknown.)
                 */
                // @ts-ignore
                constructor(msg: java.lang.String | string, cause: java.lang.Throwable | Error)
            }
        }
    }
}
