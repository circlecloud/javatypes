declare namespace javax {
    namespace print {
        /**
         * This class is an implementation of interface <code>Doc</code> that can
         * be used in many common printing requests.
         * It can handle all of the presently defined "pre-defined" doc flavors
         * defined as static variables in the DocFlavor class.
         * <p>
         * In particular this class implements certain required semantics of the
         * Doc specification as follows:
         * <ul>
         * <li>constructs a stream for the service if requested and appropriate.
         * <li>ensures the same object is returned for each call on a method.
         * <li>ensures multiple threads can access the Doc
         * <li>performs some validation of that the data matches the doc flavor.
         * </ul>
         * Clients who want to re-use the doc object in other jobs,
         * or need a MultiDoc will not want to use this class.
         * <p>
         * If the print data is a stream, or a print job requests data as a
         * stream, then <code>SimpleDoc</code> does not monitor if the service
         * properly closes the stream after data transfer completion or job
         * termination.
         * Clients may prefer to use provide their own implementation of doc that
         * adds a listener to monitor job completion and to validate that
         * resources such as streams are freed (ie closed).
         */
        // @ts-ignore
        class SimpleDoc extends java.lang.Object implements javax.print.Doc {
            /**
             * Constructs a <code>SimpleDoc</code> with the specified
             * print data, doc flavor and doc attribute set.
             * @param printData the print data object
             * @param flavor the <code>DocFlavor</code> object
             * @param attributes a <code>DocAttributeSet</code>, which can
             *                    be <code>null</code>
             * @throws IllegalArgumentException if <code>flavor</code> or
             *          <code>printData</code> is <code>null</code>, or the
             *          <code>printData</code> does not correspond
             *          to the specified doc flavor--for example, the data is
             *          not of the type specified as the representation in the
             *          <code>DocFlavor</code>.
             */
            // @ts-ignore
            constructor(printData: java.lang.Object | any, flavor: javax.print.DocFlavor, attributes: javax.print.attribute.DocAttributeSet)
            /**
             * Determines the doc flavor in which this doc object will supply its
             * piece of print data.
             * @return Doc flavor.
             */
            // @ts-ignore
            public getDocFlavor(): javax.print.DocFlavor
            /**
             * Obtains the set of printing attributes for this doc object. If the
             * returned attribute set includes an instance of a particular attribute
             * <I>X,</I> the printer must use that attribute value for this doc,
             * overriding any value of attribute <I>X</I> in the job's attribute set.
             * If the returned attribute set does not include an instance
             * of a particular attribute <I>X</I> or if null is returned, the printer
             * must consult the job's attribute set to obtain the value for
             * attribute <I>X,</I> and if not found there, the printer must use an
             * implementation-dependent default value. The returned attribute set is
             * unmodifiable.
             * @return Unmodifiable set of printing attributes for this doc, or null
             *           to obtain all attribute values from the job's attribute
             *           set.
             */
            // @ts-ignore
            public getAttributes(): javax.print.attribute.DocAttributeSet
            // @ts-ignore
            public getPrintData(): any
            /**
             * Obtains a reader for extracting character print data from this doc.
             * The <code>Doc</code> implementation is required to support this
             * method if the <code>DocFlavor</code> has one of the following print
             * data representation classes, and return <code>null</code>
             * otherwise:
             * <UL>
             * <LI> <code>char[]</code>
             * <LI> <code>java.lang.String</code>
             * <LI> <code>java.io.Reader</code>
             * </UL>
             * The doc's print data representation object is used to construct and
             * return a <code>Reader</code> for reading the print data as a stream
             * of characters from the print data representation object.
             * However, if the print data representation object is itself a
             * <code>Reader</code> then the print data representation object is
             * simply returned.
             * <P>
             * @return a <code>Reader</code> for reading the print data
             *           characters from this doc.
             *           If a reader cannot be provided because this doc does not meet
             *           the criteria stated above, <code>null</code> is returned.
             * @exception IOException if there was an I/O error while creating
             *              the reader.
             */
            // @ts-ignore
            public getReaderForText(): java.io.Reader
            /**
             * Obtains an input stream for extracting byte print data from
             * this doc.
             * The <code>Doc</code> implementation is required to support this
             * method if the <code>DocFlavor</code> has one of the following print
             * data representation classes; otherwise this method
             * returns <code>null</code>:
             * <UL>
             * <LI> <code>byte[]</code>
             * <LI> <code>java.io.InputStream</code>
             * </UL>
             * The doc's print data representation object is obtained.  Then, an
             * input stream for reading the print data
             * from the print data representation object as a stream of bytes is
             * created and returned.
             * However, if the print data representation object is itself an
             * input stream then the print data representation object is simply
             * returned.
             * <P>
             * @return an <code>InputStream</code> for reading the print data
             *           bytes from this doc.  If an input stream cannot be
             *           provided because this doc does not meet
             *           the criteria stated above, <code>null</code> is returned.
             * @exception IOException
             *      if there was an I/O error while creating the input stream.
             */
            // @ts-ignore
            public getStreamForBytes(): java.io.InputStream
        }
    }
}
