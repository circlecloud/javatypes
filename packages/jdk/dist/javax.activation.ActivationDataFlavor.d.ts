declare namespace javax {
    namespace activation {
        /**
         * The ActivationDataFlavor class is a special subclass of
         * <code>java.awt.datatransfer.DataFlavor</code>. It allows the JAF to
         * set all three values stored by the DataFlavor class via a new
         * constructor. It also contains improved MIME parsing in the <code>equals
         * </code> method. Except for the improved parsing, its semantics are
         * identical to that of the JDK's DataFlavor class.
         * @since 1.6
         */
        // @ts-ignore
        class ActivationDataFlavor extends java.awt.datatransfer.DataFlavor {
            /**
             * Construct a DataFlavor that represents an arbitrary
             * Java object. This constructor is an extension of the
             * JDK's DataFlavor in that it allows the explicit setting
             * of all three DataFlavor attributes.
             * <p>
             * The returned DataFlavor will have the following characteristics:
             * <p>
             * representationClass = representationClass<br>
             * mimeType            = mimeType<br>
             * humanName           = humanName
             * <p>
             * @param representationClass the class used in this DataFlavor
             * @param mimeType the MIME type of the data represented by this class
             * @param humanPresentableName the human presentable name of the flavor
             */
            // @ts-ignore
            constructor(representationClass: java.lang.Class<any>, mimeType: java.lang.String | string, humanPresentableName: java.lang.String | string)
            /**
             * Construct a DataFlavor that represents a MimeType.
             * <p>
             * The returned DataFlavor will have the following characteristics:
             * <p>
             * If the mimeType is "application/x-java-serialized-object;
             * class=", the result is the same as calling new
             * DataFlavor(Class.forName()) as above.
             * <p>
             * otherwise:
             * <p>
             * representationClass = InputStream<p>
             * mimeType = mimeType<p>
             * @param representationClass the class used in this DataFlavor
             * @param humanPresentableName the human presentable name of the flavor
             */
            // @ts-ignore
            constructor(representationClass: java.lang.Class<any>, humanPresentableName: java.lang.String | string)
            /**
             * Construct a DataFlavor that represents a MimeType.
             * <p>
             * The returned DataFlavor will have the following characteristics:
             * <p>
             * If the mimeType is "application/x-java-serialized-object; class=",
             * the result is the same as calling new DataFlavor(Class.forName()) as
             * above, otherwise:
             * <p>
             * representationClass = InputStream<p>
             * mimeType = mimeType
             * @param mimeType the MIME type of the data represented by this class
             * @param humanPresentableName the human presentable name of the flavor
             */
            // @ts-ignore
            constructor(mimeType: java.lang.String | string, humanPresentableName: java.lang.String | string)
            /**
             * Return the MIME type for this DataFlavor.
             * @return the MIME type
             */
            // @ts-ignore
            public getMimeType(): string
            /**
             * Return the representation class.
             * @return the representation class
             */
            // @ts-ignore
            public getRepresentationClass(): java.lang.Class<any>
            /**
             * Return the Human Presentable name.
             * @return the human presentable name
             */
            // @ts-ignore
            public getHumanPresentableName(): string
            /**
             * Set the human presentable name.
             * @param humanPresentableName      the name to set
             */
            // @ts-ignore
            public setHumanPresentableName(humanPresentableName: java.lang.String | string): void
            /**
             * Compares the DataFlavor passed in with this DataFlavor; calls
             * the <code>isMimeTypeEqual</code> method.
             * @param dataFlavor        the DataFlavor to compare with
             * @return true if the MIME type and representation class
             *                           are the same
             */
            // @ts-ignore
            public equals(dataFlavor: java.awt.datatransfer.DataFlavor): boolean
            /**
             * Is the string representation of the MIME type passed in equivalent
             * to the MIME type of this DataFlavor. <p>
             * ActivationDataFlavor delegates the comparison of MIME types to
             * the MimeType class included as part of the JavaBeans Activation
             * Framework. This provides a more robust comparison than is normally
             * available in the DataFlavor class.
             * @param mimeType  the MIME type
             * @return true if the same MIME type
             */
            // @ts-ignore
            public isMimeTypeEqual(mimeType: java.lang.String | string): boolean
            /**
             * Called on DataFlavor for every MIME Type parameter to allow DataFlavor
             * subclasses to handle special parameters like the text/plain charset
             * parameters, whose values are case insensitive.  (MIME type parameter
             * values are supposed to be case sensitive).
             * <p>
             * This method is called for each parameter name/value pair and should
             * return the normalized representation of the parameterValue.
             * This method is never invoked by this implementation.
             * @param parameterName     the parameter name
             * @param parameterValue    the parameter value
             * @return the normalized parameter value
             * @deprecated 
             */
            // @ts-ignore
            normalizeMimeTypeParameter(parameterName: java.lang.String | string, parameterValue: java.lang.String | string): string
            /**
             * Called for each MIME type string to give DataFlavor subtypes the
             * opportunity to change how the normalization of MIME types is
             * accomplished.
             * One possible use would be to add default parameter/value pairs in cases
             * where none are present in the MIME type string passed in.
             * This method is never invoked by this implementation.
             * @param mimeType  the MIME type
             * @return the normalized MIME type
             * @deprecated 
             */
            // @ts-ignore
            normalizeMimeType(mimeType: java.lang.String | string): string
        }
    }
}
