declare namespace java {
    namespace security {
        namespace cert {
            /**
             * An exception indicating one of a variety of problems encountered when
             * validating a certification path.
             * <p>
             * A {@code CertPathValidatorException} provides support for wrapping
             * exceptions. The {@link #getCause getCause} method returns the throwable,
             * if any, that caused this exception to be thrown.
             * <p>
             * A {@code CertPathValidatorException} may also include the
             * certification path that was being validated when the exception was thrown,
             * the index of the certificate in the certification path that caused the
             * exception to be thrown, and the reason that caused the failure. Use the
             * {@link #getCertPath getCertPath}, {@link #getIndex getIndex}, and
             * {@link #getReason getReason} methods to retrieve this information.
             * <p>
             * <b>Concurrent Access</b>
             * <p>
             * Unless otherwise specified, the methods defined in this class are not
             * thread-safe. Multiple threads that need to access a single
             * object concurrently should synchronize amongst themselves and
             * provide the necessary locking. Multiple threads each manipulating
             * separate objects need not synchronize.
             * @see CertPathValidator
             * @since 1.4
             * @author Yassir Elley
             */
            // @ts-ignore
            class CertPathValidatorException extends java.security.GeneralSecurityException {
                /**
                 * Creates a {@code CertPathValidatorException} with
                 * no detail message.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Creates a {@code CertPathValidatorException} with the given
                 * detail message. A detail message is a {@code String} that
                 * describes this particular exception.
                 * @param msg the detail message
                 */
                // @ts-ignore
                constructor(msg: string)
                /**
                 * Creates a {@code CertPathValidatorException} that wraps the
                 * specified throwable. This allows any exception to be converted into a
                 * {@code CertPathValidatorException}, while retaining information
                 * about the wrapped exception, which may be useful for debugging. The
                 * detail message is set to ({@code cause==null ? null : cause.toString()})
                 * (which typically contains the class and detail message of
                 * cause).
                 * @param cause the cause (which is saved for later retrieval by the
                 *  {#link #getCause getCause()} method). (A {@code null} value is
                 *  permitted, and indicates that the cause is nonexistent or unknown.)
                 */
                // @ts-ignore
                constructor(cause: Error)
                /**
                 * Creates a {@code CertPathValidatorException} with the specified
                 * detail message and cause.
                 * @param msg the detail message
                 * @param cause the cause (which is saved for later retrieval by the
                 *  {#link #getCause getCause()} method). (A {@code null} value is
                 *  permitted, and indicates that the cause is nonexistent or unknown.)
                 */
                // @ts-ignore
                constructor(msg: string, cause: Error)
                /**
                 * Creates a {@code CertPathValidatorException} with the specified
                 * detail message, cause, certification path, and index.
                 * @param msg the detail message (or {#code null} if none)
                 * @param cause the cause (or {#code null} if none)
                 * @param certPath the certification path that was in the process of
                 *  being validated when the error was encountered
                 * @param index the index of the certificate in the certification path
                 *  that caused the error (or -1 if not applicable). Note that
                 *  the list of certificates in a {#code CertPath} is zero based.
                 * @throws IndexOutOfBoundsException if the index is out of range
                 *  {#code (index < -1 || (certPath != null && index >=
                 *  certPath.getCertificates().size()) }
                 * @throws IllegalArgumentException if {#code certPath} is
                 *  {@code null} and {@code index} is not -1
                 */
                // @ts-ignore
                constructor(msg: string, cause: Error, certPath: java.security.cert.CertPath, index: number /*int*/)
                /**
                 * Creates a {@code CertPathValidatorException} with the specified
                 * detail message, cause, certification path, index, and reason.
                 * @param msg the detail message (or {#code null} if none)
                 * @param cause the cause (or {#code null} if none)
                 * @param certPath the certification path that was in the process of
                 *  being validated when the error was encountered
                 * @param index the index of the certificate in the certification path
                 *  that caused the error (or -1 if not applicable). Note that
                 *  the list of certificates in a {#code CertPath} is zero based.
                 * @param reason the reason the validation failed
                 * @throws IndexOutOfBoundsException if the index is out of range
                 *  {#code (index < -1 || (certPath != null && index >=
                 *  certPath.getCertificates().size()) }
                 * @throws IllegalArgumentException if {#code certPath} is
                 *  {@code null} and {@code index} is not -1
                 * @throws NullPointerException if {#code reason} is {@code null}
                 * @since 1.7
                 */
                // @ts-ignore
                constructor(msg: string, cause: Error, certPath: java.security.cert.CertPath, index: number /*int*/, reason: java.security.cert.CertPathValidatorException.Reason)
                /**
                 * Returns the certification path that was being validated when
                 * the exception was thrown.
                 * @return the {#code CertPath} that was being validated when
                 *  the exception was thrown (or {@code null} if not specified)
                 */
                // @ts-ignore
                getCertPath(): java.security.cert.CertPath
                /**
                 * Returns the index of the certificate in the certification path
                 * that caused the exception to be thrown. Note that the list of
                 * certificates in a {@code CertPath} is zero based. If no
                 * index has been set, -1 is returned.
                 * @return the index that has been set, or -1 if none has been set
                 */
                // @ts-ignore
                getIndex(): int
                /**
                 * Returns the reason that the validation failed. The reason is
                 * associated with the index of the certificate returned by
                 * {@link #getIndex}.
                 * @return the reason that the validation failed, or
                 *     {#code BasicReason.UNSPECIFIED} if a reason has not been
                 *     specified
                 * @since 1.7
                 */
                // @ts-ignore
                getReason(): java.security.cert.CertPathValidatorException.Reason
            }
        }
    }
}
