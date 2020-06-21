declare namespace javax {
    namespace servlet {
        /**
         * Provides an output stream for sending binary data to the client. A
         * <code>ServletOutputStream</code> object is normally retrieved via the
         * {@link ServletResponse#getOutputStream} method.
         * <p>
         * This is an abstract class that the servlet container implements. Subclasses
         * of this class must implement the <code>java.io.OutputStream.write(int)</code>
         * method.
         * @see ServletResponse
         */
        // @ts-ignore
        abstract class ServletOutputStream extends java.io.OutputStream {
            /**
             * Does nothing, because this is an abstract class.
             */
            // @ts-ignore
            constructor()
            /**
             * Writes a <code>String</code> to the client, without a carriage
             * return-line feed (CRLF) character at the end.
             * @param s
             *             the <code>String</code> to send to the client
             * @exception IOException
             *                 if an input or output exception occurred
             */
            // @ts-ignore
            public print(s: java.lang.String | string): void
            /**
             * Writes a <code>boolean</code> value to the client, with no carriage
             * return-line feed (CRLF) character at the end.
             * @param b
             *             the <code>boolean</code> value to send to the client
             * @exception IOException
             *                 if an input or output exception occurred
             */
            // @ts-ignore
            public print(b: boolean): void
            /**
             * Writes a character to the client, with no carriage return-line feed
             * (CRLF) at the end.
             * @param c
             *             the character to send to the client
             * @exception IOException
             *                 if an input or output exception occurred
             */
            // @ts-ignore
            public print(c: string): void
            /**
             * Writes an int to the client, with no carriage return-line feed (CRLF) at
             * the end.
             * @param i
             *             the int to send to the client
             * @exception IOException
             *                 if an input or output exception occurred
             */
            // @ts-ignore
            public print(i: number /*int*/): void
            /**
             * Writes a <code>long</code> value to the client, with no carriage
             * return-line feed (CRLF) at the end.
             * @param l
             *             the <code>long</code> value to send to the client
             * @exception IOException
             *                 if an input or output exception occurred
             */
            // @ts-ignore
            public print(l: number /*long*/): void
            /**
             * Writes a <code>float</code> value to the client, with no carriage
             * return-line feed (CRLF) at the end.
             * @param f
             *             the <code>float</code> value to send to the client
             * @exception IOException
             *                 if an input or output exception occurred
             */
            // @ts-ignore
            public print(f: number /*float*/): void
            /**
             * Writes a <code>double</code> value to the client, with no carriage
             * return-line feed (CRLF) at the end.
             * @param d
             *             the <code>double</code> value to send to the client
             * @exception IOException
             *                 if an input or output exception occurred
             */
            // @ts-ignore
            public print(d: number /*double*/): void
            /**
             * Writes a carriage return-line feed (CRLF) to the client.
             * @exception IOException
             *                 if an input or output exception occurred
             */
            // @ts-ignore
            public println(): void
            /**
             * Writes a <code>String</code> to the client, followed by a carriage
             * return-line feed (CRLF).
             * @param s
             *             the <code>String</code> to write to the client
             * @exception IOException
             *                 if an input or output exception occurred
             */
            // @ts-ignore
            public println(s: java.lang.String | string): void
            /**
             * Writes a <code>boolean</code> value to the client, followed by a carriage
             * return-line feed (CRLF).
             * @param b
             *             the <code>boolean</code> value to write to the client
             * @exception IOException
             *                 if an input or output exception occurred
             */
            // @ts-ignore
            public println(b: boolean): void
            /**
             * Writes a character to the client, followed by a carriage return-line feed
             * (CRLF).
             * @param c
             *             the character to write to the client
             * @exception IOException
             *                 if an input or output exception occurred
             */
            // @ts-ignore
            public println(c: string): void
            /**
             * Writes an int to the client, followed by a carriage return-line feed
             * (CRLF) character.
             * @param i
             *             the int to write to the client
             * @exception IOException
             *                 if an input or output exception occurred
             */
            // @ts-ignore
            public println(i: number /*int*/): void
            /**
             * Writes a <code>long</code> value to the client, followed by a carriage
             * return-line feed (CRLF).
             * @param l
             *             the <code>long</code> value to write to the client
             * @exception IOException
             *                 if an input or output exception occurred
             */
            // @ts-ignore
            public println(l: number /*long*/): void
            /**
             * Writes a <code>float</code> value to the client, followed by a carriage
             * return-line feed (CRLF).
             * @param f
             *             the <code>float</code> value to write to the client
             * @exception IOException
             *                 if an input or output exception occurred
             */
            // @ts-ignore
            public println(f: number /*float*/): void
            /**
             * Writes a <code>double</code> value to the client, followed by a carriage
             * return-line feed (CRLF).
             * @param d
             *             the <code>double</code> value to write to the client
             * @exception IOException
             *                 if an input or output exception occurred
             */
            // @ts-ignore
            public println(d: number /*double*/): void
            /**
             * Checks if a non-blocking write will succeed. If this returns
             * <code>false</code>, it will cause a callback to
             * {@link WriteListener#onWritePossible()} when the buffer has emptied. If
             * this method returns <code>false</code> no further data must be written
             * until the contain calls {@link WriteListener#onWritePossible()}.
             * @return <code>true</code> if data can be written, else <code>false</code>
             * @since Servlet 3.1
             */
            // @ts-ignore
            public abstract isReady(): boolean
            /**
             * Sets the {@link WriteListener} for this {@link ServletOutputStream} and
             * thereby switches to non-blocking IO. It is only valid to switch to
             * non-blocking IO within async processing or HTTP upgrade processing.
             * @param listener  The non-blocking IO write listener
             * @throws IllegalStateException    If this method is called if neither
             *                                   async nor HTTP upgrade is in progress or
             *                                   if the {#link WriteListener} has already
             *                                   been set
             * @throws NullPointerException     If listener is null
             * @since Servlet 3.1
             */
            // @ts-ignore
            public abstract setWriteListener(listener: javax.servlet.WriteListener): void
        }
    }
}
