declare namespace javax {
    namespace net {
        namespace ssl {
            /**
             * An encapsulation of the result state produced by
             * <code>SSLEngine</code> I/O calls.
             * <p> A <code>SSLEngine</code> provides a means for establishing
             * secure communication sessions between two peers.  <code>SSLEngine</code>
             * operations typically consume bytes from an input buffer and produce
             * bytes in an output buffer.  This class provides operational result
             * values describing the state of the <code>SSLEngine</code>, including
             * indications of what operations are needed to finish an
             * ongoing handshake.  Lastly, it reports the number of bytes consumed
             * and produced as a result of this operation.
             * @see SSLEngine
             * @see SSLEngine#wrap(ByteBuffer, ByteBuffer)
             * @see SSLEngine#unwrap(ByteBuffer, ByteBuffer)
             * @author Brad R. Wetmore
             * @since 1.5
             */
            // @ts-ignore
            class SSLEngineResult extends java.lang.Object {
                /**
                 * Initializes a new instance of this class.
                 * @param status
                 *           the return value of the operation.
                 * @param handshakeStatus
                 *           the current handshaking status.
                 * @param bytesConsumed
                 *           the number of bytes consumed from the source ByteBuffer
                 * @param bytesProduced
                 *           the number of bytes placed into the destination ByteBuffer
                 * @throws IllegalArgumentException
                 *           if the <code>status</code> or <code>handshakeStatus</code>
                 *           arguments are null, or if <code>bytesConsumed</code> or
                 *           <code>bytesProduced</code> is negative.
                 */
                // @ts-ignore
                constructor(status: javax.net.ssl.SSLEngineResult.Status, handshakeStatus: javax.net.ssl.SSLEngineResult.HandshakeStatus, bytesConsumed: number /*int*/, bytesProduced: number /*int*/)
                /**
                 * Gets the return value of this <code>SSLEngine</code> operation.
                 * @return the return value
                 */
                // @ts-ignore
                getStatus(): javax.net.ssl.SSLEngineResult.Status
                /**
                 * Gets the handshake status of this <code>SSLEngine</code>
                 * operation.
                 * @return the handshake status
                 */
                // @ts-ignore
                getHandshakeStatus(): javax.net.ssl.SSLEngineResult.HandshakeStatus
                /**
                 * Returns the number of bytes consumed from the input buffer.
                 * @return the number of bytes consumed.
                 */
                // @ts-ignore
                bytesConsumed(): int
                /**
                 * Returns the number of bytes written to the output buffer.
                 * @return the number of bytes produced
                 */
                // @ts-ignore
                bytesProduced(): int
                /**
                 * Returns a String representation of this object.
                 */
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}
