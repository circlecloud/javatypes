declare namespace java {
    namespace beans {
        /**
         * The <code>XMLEncoder</code> class is a complementary alternative to
         * the <code>ObjectOutputStream</code> and can used to generate
         * a textual representation of a <em>JavaBean</em> in the same
         * way that the <code>ObjectOutputStream</code> can
         * be used to create binary representation of <code>Serializable</code>
         * objects. For example, the following fragment can be used to create
         * a textual representation the supplied <em>JavaBean</em>
         * and all its properties:
         * <pre>
         * XMLEncoder e = new XMLEncoder(
         * new BufferedOutputStream(
         * new FileOutputStream("Test.xml")));
         * e.writeObject(new JButton("Hello, world"));
         * e.close();
         * </pre>
         * Despite the similarity of their APIs, the <code>XMLEncoder</code>
         * class is exclusively designed for the purpose of archiving graphs
         * of <em>JavaBean</em>s as textual representations of their public
         * properties. Like Java source files, documents written this way
         * have a natural immunity to changes in the implementations of the classes
         * involved. The <code>ObjectOutputStream</code> continues to be recommended
         * for interprocess communication and general purpose serialization.
         * <p>
         * The <code>XMLEncoder</code> class provides a default denotation for
         * <em>JavaBean</em>s in which they are represented as XML documents
         * complying with version 1.0 of the XML specification and the
         * UTF-8 character encoding of the Unicode/ISO 10646 character set.
         * The XML documents produced by the <code>XMLEncoder</code> class are:
         * <ul>
         * <li>
         * <em>Portable and version resilient</em>: they have no dependencies
         * on the private implementation of any class and so, like Java source
         * files, they may be exchanged between environments which may have
         * different versions of some of the classes and between VMs from
         * different vendors.
         * <li>
         * <em>Structurally compact</em>: The <code>XMLEncoder</code> class
         * uses a <em>redundancy elimination</em> algorithm internally so that the
         * default values of a Bean's properties are not written to the stream.
         * <li>
         * <em>Fault tolerant</em>: Non-structural errors in the file,
         * caused either by damage to the file or by API changes
         * made to classes in an archive remain localized
         * so that a reader can report the error and continue to load the parts
         * of the document which were not affected by the error.
         * </ul>
         * <p>
         * Below is an example of an XML archive containing
         * some user interface components from the <em>swing</em> toolkit:
         * <pre>
         * &lt;?xml version="1.0" encoding="UTF-8"?&gt;
         * &lt;java version="1.0" class="java.beans.XMLDecoder"&gt;
         * &lt;object class="javax.swing.JFrame"&gt;
         * &lt;void property="name"&gt;
         * &lt;string&gt;frame1&lt;/string&gt;
         * &lt;/void&gt;
         * &lt;void property="bounds"&gt;
         * &lt;object class="java.awt.Rectangle"&gt;
         * &lt;int&gt;0&lt;/int&gt;
         * &lt;int&gt;0&lt;/int&gt;
         * &lt;int&gt;200&lt;/int&gt;
         * &lt;int&gt;200&lt;/int&gt;
         * &lt;/object&gt;
         * &lt;/void&gt;
         * &lt;void property="contentPane"&gt;
         * &lt;void method="add"&gt;
         * &lt;object class="javax.swing.JButton"&gt;
         * &lt;void property="label"&gt;
         * &lt;string&gt;Hello&lt;/string&gt;
         * &lt;/void&gt;
         * &lt;/object&gt;
         * &lt;/void&gt;
         * &lt;/void&gt;
         * &lt;void property="visible"&gt;
         * &lt;boolean&gt;true&lt;/boolean&gt;
         * &lt;/void&gt;
         * &lt;/object&gt;
         * &lt;/java&gt;
         * </pre>
         * The XML syntax uses the following conventions:
         * <ul>
         * <li>
         * Each element represents a method call.
         * <li>
         * The "object" tag denotes an <em>expression</em> whose value is
         * to be used as the argument to the enclosing element.
         * <li>
         * The "void" tag denotes a <em>statement</em> which will
         * be executed, but whose result will not be used as an
         * argument to the enclosing method.
         * <li>
         * Elements which contain elements use those elements as arguments,
         * unless they have the tag: "void".
         * <li>
         * The name of the method is denoted by the "method" attribute.
         * <li>
         * XML's standard "id" and "idref" attributes are used to make
         * references to previous expressions - so as to deal with
         * circularities in the object graph.
         * <li>
         * The "class" attribute is used to specify the target of a static
         * method or constructor explicitly; its value being the fully
         * qualified name of the class.
         * <li>
         * Elements with the "void" tag are executed using
         * the outer context as the target if no target is defined
         * by a "class" attribute.
         * <li>
         * Java's String class is treated specially and is
         * written &lt;string&gt;Hello, world&lt;/string&gt; where
         * the characters of the string are converted to bytes
         * using the UTF-8 character encoding.
         * </ul>
         * <p>
         * Although all object graphs may be written using just these three
         * tags, the following definitions are included so that common
         * data structures can be expressed more concisely:
         * <p>
         * <ul>
         * <li>
         * The default method name is "new".
         * <li>
         * A reference to a java class is written in the form
         * &lt;class&gt;javax.swing.JButton&lt;/class&gt;.
         * <li>
         * Instances of the wrapper classes for Java's primitive types are written
         * using the name of the primitive type as the tag. For example, an
         * instance of the <code>Integer</code> class could be written:
         * &lt;int&gt;123&lt;/int&gt;. Note that the <code>XMLEncoder</code> class
         * uses Java's reflection package in which the conversion between
         * Java's primitive types and their associated "wrapper classes"
         * is handled internally. The API for the <code>XMLEncoder</code> class
         * itself deals only with <code>Object</code>s.
         * <li>
         * In an element representing a nullary method whose name
         * starts with "get", the "method" attribute is replaced
         * with a "property" attribute whose value is given by removing
         * the "get" prefix and decapitalizing the result.
         * <li>
         * In an element representing a monadic method whose name
         * starts with "set", the "method" attribute is replaced
         * with a "property" attribute whose value is given by removing
         * the "set" prefix and decapitalizing the result.
         * <li>
         * In an element representing a method named "get" taking one
         * integer argument, the "method" attribute is replaced
         * with an "index" attribute whose value the value of the
         * first argument.
         * <li>
         * In an element representing a method named "set" taking two arguments,
         * the first of which is an integer, the "method" attribute is replaced
         * with an "index" attribute whose value the value of the
         * first argument.
         * <li>
         * A reference to an array is written using the "array"
         * tag. The "class" and "length" attributes specify the
         * sub-type of the array and its length respectively.
         * </ul>
         * <p>
         * For more information you might also want to check out
         * <a
         * href="http://java.sun.com/products/jfc/tsc/articles/persistence4">Using XMLEncoder</a>,
         * an article in <em>The Swing Connection.</em>
         * @see XMLDecoder
         * @see java.io.ObjectOutputStream
         * @since 1.4
         * @author Philip Milne
         */
        // @ts-ignore
        class XMLEncoder extends java.beans.Encoder implements java.lang.AutoCloseable {
            /**
             * Creates a new XML encoder to write out <em>JavaBeans</em>
             * to the stream <code>out</code> using an XML encoding.
             * @param out  the stream to which the XML representation of
             *              the objects will be written
             * @throws IllegalArgumentException
             *           if <code>out</code> is <code>null</code>
             * @see XMLDecoder#XMLDecoder(InputStream)
             */
            // @ts-ignore
            constructor(out: java.io.OutputStream)
            /**
             * Creates a new XML encoder to write out <em>JavaBeans</em>
             * to the stream <code>out</code> using the given <code>charset</code>
             * starting from the given <code>indentation</code>.
             * @param out          the stream to which the XML representation of
             *                      the objects will be written
             * @param charset      the name of the requested charset;
             *                      may be either a canonical name or an alias
             * @param declaration  whether the XML declaration should be generated;
             *                      set this to <code>false</code>
             *                      when embedding the contents in another XML document
             * @param indentation  the number of space characters to indent the entire XML document by
             * @throws IllegalArgumentException
             *           if <code>out</code> or <code>charset</code> is <code>null</code>,
             *           or if <code>indentation</code> is less than 0
             * @throws IllegalCharsetNameException
             *           if <code>charset</code> name is illegal
             * @throws UnsupportedCharsetException
             *           if no support for the named charset is available
             *           in this instance of the Java virtual machine
             * @throws UnsupportedOperationException
             *           if loaded charset does not support encoding
             * @see Charset#forName(String)
             * @since 1.7
             */
            // @ts-ignore
            constructor(out: java.io.OutputStream, charset: string, declaration: boolean, indentation: number /*int*/)
            /**
             * Sets the owner of this encoder to <code>owner</code>.
             * @param owner The owner of this encoder.
             * @see #getOwner
             */
            // @ts-ignore
            setOwner(owner: any): void
            /**
             * Gets the owner of this encoder.
             * @return The owner of this encoder.
             * @see #setOwner
             */
            // @ts-ignore
            getOwner(): java.lang.Object
            /**
             * Write an XML representation of the specified object to the output.
             * @param o The object to be written to the stream.
             * @see XMLDecoder#readObject
             */
            // @ts-ignore
            writeObject(o: any): void
            /**
             * Records the Statement so that the Encoder will
             * produce the actual output when the stream is flushed.
             * <P>
             * This method should only be invoked within the context
             * of initializing a persistence delegate.
             * @param oldStm The statement that will be written
             *                to the stream.
             * @see java.beans.PersistenceDelegate#initialize
             */
            // @ts-ignore
            writeStatement(oldStm: java.beans.Statement): void
            /**
             * Records the Expression so that the Encoder will
             * produce the actual output when the stream is flushed.
             * <P>
             * This method should only be invoked within the context of
             * initializing a persistence delegate or setting up an encoder to
             * read from a resource bundle.
             * <P>
             * For more information about using resource bundles with the
             * XMLEncoder, see
             * http://java.sun.com/products/jfc/tsc/articles/persistence4/#i18n
             * @param oldExp The expression that will be written
             *                to the stream.
             * @see java.beans.PersistenceDelegate#initialize
             */
            // @ts-ignore
            writeExpression(oldExp: java.beans.Expression): void
            /**
             * This method writes out the preamble associated with the
             * XML encoding if it has not been written already and
             * then writes out all of the values that been
             * written to the stream since the last time <code>flush</code>
             * was called. After flushing, all internal references to the
             * values that were written to this stream are cleared.
             */
            // @ts-ignore
            flush(): void
            /**
             * This method calls <code>flush</code>, writes the closing
             * postamble and then closes the output stream associated
             * with this stream.
             */
            // @ts-ignore
            close(): void
        }
    }
}
