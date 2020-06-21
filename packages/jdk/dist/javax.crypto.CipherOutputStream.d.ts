declare namespace javax {
    namespace crypto {
        /**
         * A CipherOutputStream is composed of an OutputStream and a Cipher so
         * that write() methods first process the data before writing them out
         * to the underlying OutputStream.  The cipher must be fully
         * initialized before being used by a CipherOutputStream.
         * <p> For example, if the cipher is initialized for encryption, the
         * CipherOutputStream will attempt to encrypt data before writing out the
         * encrypted data.
         * <p> This class adheres strictly to the semantics, especially the
         * failure semantics, of its ancestor classes
         * java.io.OutputStream and java.io.FilterOutputStream.  This class
         * has exactly those methods specified in its ancestor classes, and
         * overrides them all.  Moreover, this class catches all exceptions
         * that are not thrown by its ancestor classes. In particular, this
         * class catches BadPaddingException and other exceptions thrown by
         * failed integrity checks during decryption. These exceptions are not
         * re-thrown, so the client will not be informed that integrity checks
         * failed. Because of this behavior, this class may not be suitable
         * for use with decryption in an authenticated mode of operation (e.g. GCM)
         * if the application requires explicit notification when authentication
         * fails. Such an application can use the Cipher API directly as an
         * alternative to using this class.
         * <p> It is crucial for a programmer using this class not to use
         * methods that are not defined or overriden in this class (such as a
         * new method or constructor that is later added to one of the super
         * classes), because the design and implementation of those methods
         * are unlikely to have considered security impact with regard to
         * CipherOutputStream.
         * @author Li Gong
         * @see java.io.OutputStream
         * @see java.io.FilterOutputStream
         * @see javax.crypto.Cipher
         * @see javax.crypto.CipherInputStream
         * @since 1.4
         */
        // @ts-ignore
        class CipherOutputStream extends java.io.FilterOutputStream {
            /**
             * Constructs a CipherOutputStream from an OutputStream and a
             * Cipher.
             * <br>Note: if the specified output stream or cipher is
             * null, a NullPointerException may be thrown later when
             * they are used.
             * @param os  the OutputStream object
             * @param c   an initialized Cipher object
             */
            // @ts-ignore
            constructor(os: java.io.OutputStream, c: javax.crypto.Cipher)
            /**
             * Constructs a CipherOutputStream from an OutputStream without
             * specifying a Cipher. This has the effect of constructing a
             * CipherOutputStream using a NullCipher.
             * <br>Note: if the specified output stream is null, a
             * NullPointerException may be thrown later when it is used.
             * @param os  the OutputStream object
             */
            // @ts-ignore
            constructor(os: java.io.OutputStream)
            /**
             * Writes the specified byte to this output stream.
             * @param b   the <code>byte</code>.
             * @exception IOException  if an I/O error occurs.
             * @since JCE1.2
             */
            // @ts-ignore
            public write(b: number /*int*/): void
            /**
             * Writes <code>b.length</code> bytes from the specified byte array
             * to this output stream.
             * <p>
             * The <code>write</code> method of
             * <code>CipherOutputStream</code> calls the <code>write</code>
             * method of three arguments with the three arguments
             * <code>b</code>, <code>0</code>, and <code>b.length</code>.
             * @param b   the data.
             * @exception NullPointerException if <code>b</code> is null.
             * @exception IOException  if an I/O error occurs.
             * @see javax.crypto.CipherOutputStream#write(byte[], int, int)
             * @since JCE1.2
             */
            // @ts-ignore
            public write(b: number /*byte*/[]): void
            /**
             * Writes <code>len</code> bytes from the specified byte array
             * starting at offset <code>off</code> to this output stream.
             * @param b     the data.
             * @param off   the start offset in the data.
             * @param len   the number of bytes to write.
             * @exception IOException  if an I/O error occurs.
             * @since JCE1.2
             */
            // @ts-ignore
            public write(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): void
            /**
             * Flushes this output stream by forcing any buffered output bytes
             * that have already been processed by the encapsulated cipher object
             * to be written out.
             * <p>Any bytes buffered by the encapsulated cipher
             * and waiting to be processed by it will not be written out. For example,
             * if the encapsulated cipher is a block cipher, and the total number of
             * bytes written using one of the <code>write</code> methods is less than
             * the cipher's block size, no bytes will be written out.
             * @exception IOException  if an I/O error occurs.
             * @since JCE1.2
             */
            // @ts-ignore
            public flush(): void
            /**
             * Closes this output stream and releases any system resources
             * associated with this stream.
             * <p>
             * This method invokes the <code>doFinal</code> method of the encapsulated
             * cipher object, which causes any bytes buffered by the encapsulated
             * cipher to be processed. The result is written out by calling the
             * <code>flush</code> method of this output stream.
             * <p>
             * This method resets the encapsulated cipher object to its initial state
             * and calls the <code>close</code> method of the underlying output
             * stream.
             * @exception IOException  if an I/O error occurs.
             * @since JCE1.2
             */
            // @ts-ignore
            public close(): void
        }
    }
}
