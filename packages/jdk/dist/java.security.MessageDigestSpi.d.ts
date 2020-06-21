declare namespace java {
    namespace security {
        /**
         * This class defines the <i>Service Provider Interface</i> (<b>SPI</b>)
         * for the {@code MessageDigest} class, which provides the functionality
         * of a message digest algorithm, such as MD5 or SHA. Message digests are
         * secure one-way hash functions that take arbitrary-sized data and output a
         * fixed-length hash value.
         * <p> All the abstract methods in this class must be implemented by a
         * cryptographic service provider who wishes to supply the implementation
         * of a particular message digest algorithm.
         * <p> Implementations are free to implement the Cloneable interface.
         * @author Benjamin Renaud
         * @see MessageDigest
         */
        // @ts-ignore
        abstract class MessageDigestSpi extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * Returns the digest length in bytes.
             * <p>This concrete method has been added to this previously-defined
             * abstract class. (For backwards compatibility, it cannot be abstract.)
             * <p>The default behavior is to return 0.
             * <p>This method may be overridden by a provider to return the digest
             * length.
             * @return the digest length in bytes.
             * @since 1.2
             */
            // @ts-ignore
            engineGetDigestLength(): number /*int*/
            /**
             * Updates the digest using the specified byte.
             * @param input the byte to use for the update.
             */
            // @ts-ignore
            abstract engineUpdate(input: number /*byte*/): void
            /**
             * Updates the digest using the specified array of bytes,
             * starting at the specified offset.
             * @param input the array of bytes to use for the update.
             * @param offset the offset to start from in the array of bytes.
             * @param len the number of bytes to use, starting at
             *  {#code offset}.
             */
            // @ts-ignore
            abstract engineUpdate(input: number /*byte*/[], offset: number /*int*/, len: number /*int*/): void
            /**
             * Update the digest using the specified ByteBuffer. The digest is
             * updated using the {@code input.remaining()} bytes starting
             * at {@code input.position()}.
             * Upon return, the buffer's position will be equal to its limit;
             * its limit will not have changed.
             * @param input the ByteBuffer
             * @since 1.5
             */
            // @ts-ignore
            engineUpdate(input: java.nio.ByteBuffer): void
            /**
             * Completes the hash computation by performing final
             * operations such as padding. Once {@code engineDigest} has
             * been called, the engine should be reset (see
             * {@link #engineReset() engineReset}).
             * Resetting is the responsibility of the
             * engine implementor.
             * @return the array of bytes for the resulting hash value.
             */
            // @ts-ignore
            abstract engineDigest(): number /*byte*/[]
            /**
             * Completes the hash computation by performing final
             * operations such as padding. Once {@code engineDigest} has
             * been called, the engine should be reset (see
             * {@link #engineReset() engineReset}).
             * Resetting is the responsibility of the
             * engine implementor.
             * This method should be abstract, but we leave it concrete for
             * binary compatibility.  Knowledgeable providers should override this
             * method.
             * @param buf the output buffer in which to store the digest
             * @param offset offset to start from in the output buffer
             * @param len number of bytes within buf allotted for the digest.
             *  Both this default implementation and the SUN provider do not
             *  return partial digests.  The presence of this parameter is solely
             *  for consistency in our API's.  If the value of this parameter is less
             *  than the actual digest length, the method will throw a DigestException.
             *  This parameter is ignored if its value is greater than or equal to
             *  the actual digest length.
             * @return the length of the digest stored in the output buffer.
             * @exception DigestException if an error occurs.
             * @since 1.2
             */
            // @ts-ignore
            engineDigest(buf: number /*byte*/[], offset: number /*int*/, len: number /*int*/): number /*int*/
            /**
             * Resets the digest for further use.
             */
            // @ts-ignore
            abstract engineReset(): void
            /**
             * Returns a clone if the implementation is cloneable.
             * @return a clone if the implementation is cloneable.
             * @exception CloneNotSupportedException if this is called on an
             *  implementation that does not support {#code Cloneable}.
             */
            // @ts-ignore
            public clone(): any
        }
    }
}
