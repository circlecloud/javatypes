declare namespace java {
    namespace beans {
        /**
         * The <code>XMLDecoder</code> class is used to read XML documents
         * created using the <code>XMLEncoder</code> and is used just like
         * the <code>ObjectInputStream</code>. For example, one can use
         * the following fragment to read the first object defined
         * in an XML document written by the <code>XMLEncoder</code>
         * class:
         * <pre>
         * XMLDecoder d = new XMLDecoder(
         * new BufferedInputStream(
         * new FileInputStream("Test.xml")));
         * Object result = d.readObject();
         * d.close();
         * </pre>
         * <p>
         * For more information you might also want to check out
         * <a
         * href="http://java.sun.com/products/jfc/tsc/articles/persistence3">Long Term Persistence of JavaBeans Components: XML Schema</a>,
         * an article in <em>The Swing Connection.</em>
         * @see XMLEncoder
         * @see java.io.ObjectInputStream
         * @since 1.4
         * @author Philip Milne
         */
        // @ts-ignore
        class XMLDecoder extends java.lang.Object implements java.lang.AutoCloseable {
            /**
             * Creates a new input stream for reading archives
             * created by the <code>XMLEncoder</code> class.
             * @param in The underlying stream.
             * @see XMLEncoder#XMLEncoder(java.io.OutputStream)
             */
            // @ts-ignore
            constructor(input: java.io.InputStream)
            /**
             * Creates a new input stream for reading archives
             * created by the <code>XMLEncoder</code> class.
             * @param in The underlying stream.
             * @param owner The owner of this stream.
             */
            // @ts-ignore
            constructor(input: java.io.InputStream, owner: java.lang.Object | any)
            /**
             * Creates a new input stream for reading archives
             * created by the <code>XMLEncoder</code> class.
             * @param in the underlying stream.
             * @param owner the owner of this stream.
             * @param exceptionListener the exception handler for the stream;
             *         if <code>null</code> the default exception listener will be used.
             */
            // @ts-ignore
            constructor(input: java.io.InputStream, owner: java.lang.Object | any, exceptionListener: java.beans.ExceptionListener)
            /**
             * Creates a new input stream for reading archives
             * created by the <code>XMLEncoder</code> class.
             * @param in the underlying stream.  <code>null</code> may be passed without
             *         error, though the resulting XMLDecoder will be useless
             * @param owner the owner of this stream.  <code>null</code> is a legal
             *         value
             * @param exceptionListener the exception handler for the stream, or
             *         <code>null</code> to use the default
             * @param cl the class loader used for instantiating objects.
             *         <code>null</code> indicates that the default class loader should
             *         be used
             * @since 1.5
             */
            // @ts-ignore
            constructor(input: java.io.InputStream, owner: java.lang.Object | any, exceptionListener: java.beans.ExceptionListener, cl: java.lang.ClassLoader)
            /**
             * Creates a new decoder to parse XML archives
             * created by the {@code XMLEncoder} class.
             * If the input source {@code is} is {@code null},
             * no exception is thrown and no parsing is performed.
             * This behavior is similar to behavior of other constructors
             * that use {@code InputStream} as a parameter.
             * @param is  the input source to parse
             * @since 1.7
             */
            // @ts-ignore
            constructor(jis: org.xml.sax.InputSource)
            /**
             * This method closes the input stream associated
             * with this stream.
             */
            // @ts-ignore
            public close(): void
            /**
             * Sets the exception handler for this stream to <code>exceptionListener</code>.
             * The exception handler is notified when this stream catches recoverable
             * exceptions.
             * @param exceptionListener The exception handler for this stream;
             *  if <code>null</code> the default exception listener will be used.
             * @see #getExceptionListener
             */
            // @ts-ignore
            public setExceptionListener(exceptionListener: java.beans.ExceptionListener): void
            /**
             * Gets the exception handler for this stream.
             * @return The exception handler for this stream.
             *      Will return the default exception listener if this has not explicitly been set.
             * @see #setExceptionListener
             */
            // @ts-ignore
            public getExceptionListener(): java.beans.ExceptionListener
            /**
             * Reads the next object from the underlying input stream.
             * @return the next object read
             * @throws ArrayIndexOutOfBoundsException if the stream contains no objects
             *          (or no more objects)
             * @see XMLEncoder#writeObject
             */
            // @ts-ignore
            public readObject(): any
            /**
             * Sets the owner of this decoder to <code>owner</code>.
             * @param owner The owner of this decoder.
             * @see #getOwner
             */
            // @ts-ignore
            public setOwner(owner: java.lang.Object | any): void
            /**
             * Gets the owner of this decoder.
             * @return The owner of this decoder.
             * @see #setOwner
             */
            // @ts-ignore
            public getOwner(): any
            /**
             * Creates a new handler for SAX parser
             * that can be used to parse embedded XML archives
             * created by the {@code XMLEncoder} class.
             * The {@code owner} should be used if parsed XML document contains
             * the method call within context of the &lt;java&gt; element.
             * The {@code null} value may cause illegal parsing in such case.
             * The same problem may occur, if the {@code owner} class
             * does not contain expected method to call. See details <a
             * href="http://java.sun.com/products/jfc/tsc/articles/persistence3/">here</a>.
             * @param owner  the owner of the default handler
             *                that can be used as a value of &lt;java&gt; element
             * @param el     the exception handler for the parser,
             *                or {#code null} to use the default exception handler
             * @param cl     the class loader used for instantiating objects,
             *                or {#code null} to use the default class loader
             * @return an instance of {#code DefaultHandler} for SAX parser
             * @since 1.7
             */
            // @ts-ignore
            public static createHandler(owner: java.lang.Object | any, el: java.beans.ExceptionListener, cl: java.lang.ClassLoader): org.xml.sax.helpers.DefaultHandler
        }
    }
}
