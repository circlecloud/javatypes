declare namespace javax {
    namespace crypto {
        /**
         * This class defines the <i>Service Provider Interface</i> (<b>SPI</b>)
         * for the <code>Mac</code> class.
         * All the abstract methods in this class must be implemented by each
         * cryptographic service provider who wishes to supply the implementation
         * of a particular MAC algorithm.
         * <p> Implementations are free to implement the Cloneable interface.
         * @author Jan Luehe
         * @since 1.4
         */
        // @ts-ignore
        class MacSpi extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * Returns the length of the MAC in bytes.
             * @return the MAC length in bytes.
             */
            // @ts-ignore
            abstract engineGetMacLength(): int
            /**
             * Initializes the MAC with the given (secret) key and algorithm
             * parameters.
             * @param key the (secret) key.
             * @param params the algorithm parameters.
             * @exception InvalidKeyException if the given key is inappropriate for
             *  initializing this MAC.
             * @exception InvalidAlgorithmParameterException if the given algorithm
             *  parameters are inappropriate for this MAC.
             */
            // @ts-ignore
            abstract engineInit(key: java.security.Key, params: java.security.spec.AlgorithmParameterSpec): void
            /**
             * Processes the given byte.
             * @param input the input byte to be processed.
             */
            // @ts-ignore
            abstract engineUpdate(input: number /*byte*/): void
            /**
             * Processes the first <code>len</code> bytes in <code>input</code>,
             * starting at <code>offset</code> inclusive.
             * @param input the input buffer.
             * @param offset the offset in <code>input</code> where the input starts.
             * @param len the number of bytes to process.
             */
            // @ts-ignore
            abstract engineUpdate(input: number /*byte*/[], offset: number /*int*/, len: number /*int*/): void
            /**
             * Processes <code>input.remaining()</code> bytes in the ByteBuffer
             * <code>input</code>, starting at <code>input.position()</code>.
             * Upon return, the buffer's position will be equal to its limit;
             * its limit will not have changed.
             * <p>Subclasses should consider overriding this method if they can
             * process ByteBuffers more efficiently than byte arrays.
             * @param input the ByteBuffer
             * @since 1.5
             */
            // @ts-ignore
            engineUpdate(input: java.nio.ByteBuffer): void
            /**
             * Completes the MAC computation and resets the MAC for further use,
             * maintaining the secret key that the MAC was initialized with.
             * @return the MAC result.
             */
            // @ts-ignore
            abstract engineDoFinal(): byte[]
            /**
             * Resets the MAC for further use, maintaining the secret key that the
             * MAC was initialized with.
             */
            // @ts-ignore
            abstract engineReset(): void
            /**
             * Returns a clone if the implementation is cloneable.
             * @return a clone if the implementation is cloneable.
             * @exception CloneNotSupportedException if this is called
             *  on an implementation that does not support <code>Cloneable</code>.
             */
            // @ts-ignore
            clone(): java.lang.Object
        }
    }
}
