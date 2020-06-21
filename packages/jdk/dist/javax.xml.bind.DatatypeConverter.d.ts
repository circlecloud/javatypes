declare namespace javax {
    namespace xml {
        namespace bind {
            /**
             * <p>
             * The javaType binding declaration can be used to customize the binding of
             * an XML schema datatype to a Java datatype. Customizations can involve
             * writing a parse and print method for parsing and printing lexical
             * representations of a XML schema datatype respectively. However, writing
             * parse and print methods requires knowledge of the lexical representations (
             * <a href="http://www.w3.org/TR/xmlschema-2/"> XML Schema Part2: Datatypes
             * specification </a>) and hence may be difficult to write.
             * </p>
             * <p>
             * This class makes it easier to write parse and print methods. It defines
             * static parse and print methods that provide access to a JAXB provider's
             * implementation of parse and print methods. These methods are invoked by
             * custom parse and print methods. For example, the binding of xsd:dateTime
             * to a long can be customized using parse and print methods as follows:
             * <blockquote>
             * <pre>
             * // Customized parse method
             * public long myParseCal( String dateTimeString ) {
             * java.util.Calendar cal = DatatypeConverter.parseDateTime(dateTimeString);
             * long longval = convert_calendar_to_long(cal); //application specific
             * return longval;
             * }
             * // Customized print method
             * public String myPrintCal( Long longval ) {
             * java.util.Calendar cal = convert_long_to_calendar(longval) ; //application specific
             * String dateTimeString = DatatypeConverter.printDateTime(cal);
             * return dateTimeString;
             * }
             * </pre>
             * </blockquote>
             * <p>
             * There is a static parse and print method corresponding to each parse and
             * print method respectively in the {@link DatatypeConverterInterface
             * DatatypeConverterInterface}.
             * <p>
             * The static methods defined in the class can also be used to specify
             * a parse or a print method in a javaType binding declaration.
             * </p>
             * <p>
             * JAXB Providers are required to call the
             * {@link #setDatatypeConverter(DatatypeConverterInterface)
             * setDatatypeConverter} api at some point before the first marshal or unmarshal
             * operation (perhaps during the call to JAXBContext.newInstance).  This step is
             * necessary to configure the converter that should be used to perform the
             * print and parse functionality.
             * </p>
             * <p>
             * A print method for a XML schema datatype can output any lexical
             * representation that is valid with respect to the XML schema datatype.
             * If an error is encountered during conversion, then an IllegalArgumentException,
             * or a subclass of IllegalArgumentException must be thrown by the method.
             * </p>
             * @author <ul><li>Sekhar Vajjhala, Sun Microsystems, Inc.</li><li>Joe Fialli, Sun Microsystems Inc.</li><li>Kohsuke Kawaguchi, Sun Microsystems, Inc.</li><li>Ryan Shoemaker,Sun Microsystems Inc.</li></ul>
             * @see DatatypeConverterInterface
             * @see ParseConversionEvent
             * @see PrintConversionEvent
             * @since JAXB1.0
             */
            // @ts-ignore
            class DatatypeConverter extends java.lang.Object {
                /**
                 * This method is for JAXB provider use only.
                 * <p>
                 * JAXB Providers are required to call this method at some point before
                 * allowing any of the JAXB client marshal or unmarshal operations to
                 * occur.  This is necessary to configure the datatype converter that
                 * should be used to perform the print and parse conversions.
                 * <p>
                 * Calling this api repeatedly will have no effect - the
                 * DatatypeConverterInterface instance passed into the first invocation is
                 * the one that will be used from then on.
                 * @param converter an instance of a class that implements the
                 *  DatatypeConverterInterface class - this parameter must not be null.
                 * @throws IllegalArgumentException if the parameter is null
                 * @throws SecurityException
                 *       If the {#link SecurityManager} in charge denies the access to
                 *       set the datatype converter.
                 * @see JAXBPermission
                 */
                // @ts-ignore
                public static setDatatypeConverter(converter: javax.xml.bind.DatatypeConverterInterface): void
                /**
                 * <p>
                 * Convert the lexical XSD string argument into a String value.
                 * @param lexicalXSDString
                 *      A string containing a lexical representation of
                 *      xsd:string.
                 * @return A String value represented by the string argument.
                 */
                // @ts-ignore
                public static parseString(lexicalXSDString: java.lang.String | string): string
                /**
                 * <p>
                 * Convert the string argument into a BigInteger value.
                 * @param lexicalXSDInteger
                 *      A string containing a lexical representation of
                 *      xsd:integer.
                 * @return A BigInteger value represented by the string argument.
                 * @throws NumberFormatException <code>lexicalXSDInteger</code> is not a valid string representation of a {#link java.math.BigInteger} value.
                 */
                // @ts-ignore
                public static parseInteger(lexicalXSDInteger: java.lang.String | string): java.math.BigInteger
                /**
                 * <p>
                 * Convert the string argument into an int value.
                 * @param lexicalXSDInt
                 *      A string containing a lexical representation of
                 *      xsd:int.
                 * @return A int value represented by the string argument.
                 * @throws NumberFormatException <code>lexicalXSDInt</code> is not a valid string representation of an <code>int</code> value.
                 */
                // @ts-ignore
                public static parseInt(lexicalXSDInt: java.lang.String | string): number /*int*/
                /**
                 * <p>
                 * Converts the string argument into a long value.
                 * @param lexicalXSDLong
                 *      A string containing lexical representation of
                 *      xsd:long.
                 * @return A long value represented by the string argument.
                 * @throws NumberFormatException <code>lexicalXSDLong</code> is not a valid string representation of a <code>long</code> value.
                 */
                // @ts-ignore
                public static parseLong(lexicalXSDLong: java.lang.String | string): number /*long*/
                /**
                 * <p>
                 * Converts the string argument into a short value.
                 * @param lexicalXSDShort
                 *      A string containing lexical representation of
                 *      xsd:short.
                 * @return A short value represented by the string argument.
                 * @throws NumberFormatException <code>lexicalXSDShort</code> is not a valid string representation of a <code>short</code> value.
                 */
                // @ts-ignore
                public static parseShort(lexicalXSDShort: java.lang.String | string): number /*short*/
                /**
                 * <p>
                 * Converts the string argument into a BigDecimal value.
                 * @param lexicalXSDDecimal
                 *      A string containing lexical representation of
                 *      xsd:decimal.
                 * @return A BigDecimal value represented by the string argument.
                 * @throws NumberFormatException <code>lexicalXSDDecimal</code> is not a valid string representation of {#link java.math.BigDecimal}.
                 */
                // @ts-ignore
                public static parseDecimal(lexicalXSDDecimal: java.lang.String | string): java.math.BigDecimal
                /**
                 * <p>
                 * Converts the string argument into a float value.
                 * @param lexicalXSDFloat
                 *      A string containing lexical representation of
                 *      xsd:float.
                 * @return A float value represented by the string argument.
                 * @throws NumberFormatException <code>lexicalXSDFloat</code> is not a valid string representation of a <code>float</code> value.
                 */
                // @ts-ignore
                public static parseFloat(lexicalXSDFloat: java.lang.String | string): number /*float*/
                /**
                 * <p>
                 * Converts the string argument into a double value.
                 * @param lexicalXSDDouble
                 *      A string containing lexical representation of
                 *      xsd:double.
                 * @return A double value represented by the string argument.
                 * @throws NumberFormatException <code>lexicalXSDDouble</code> is not a valid string representation of a <code>double</code> value.
                 */
                // @ts-ignore
                public static parseDouble(lexicalXSDDouble: java.lang.String | string): number /*double*/
                /**
                 * <p>
                 * Converts the string argument into a boolean value.
                 * @param lexicalXSDBoolean
                 *      A string containing lexical representation of
                 *      xsd:boolean.
                 * @return A boolean value represented by the string argument.
                 * @throws IllegalArgumentException if string parameter does not conform to lexical value space defined in XML Schema Part 2: Datatypes for xsd:boolean.
                 */
                // @ts-ignore
                public static parseBoolean(lexicalXSDBoolean: java.lang.String | string): boolean
                /**
                 * <p>
                 * Converts the string argument into a byte value.
                 * @param lexicalXSDByte
                 *      A string containing lexical representation of
                 *      xsd:byte.
                 * @return A byte value represented by the string argument.
                 * @throws IllegalArgumentException if string parameter does not conform to lexical value space defined in XML Schema Part 2: Datatypes for xsd:byte.
                 */
                // @ts-ignore
                public static parseByte(lexicalXSDByte: java.lang.String | string): number /*byte*/
                /**
                 * <p>
                 * Converts the string argument into a byte value.
                 * <p>
                 * String parameter <tt>lexicalXSDQname</tt> must conform to lexical value space specifed at
                 * <a href="http://www.w3.org/TR/xmlschema-2/#QName">XML Schema Part 2:Datatypes specification:QNames</a>
                 * @param lexicalXSDQName
                 *      A string containing lexical representation of xsd:QName.
                 * @param nsc
                 *      A namespace context for interpreting a prefix within a QName.
                 * @return A QName value represented by the string argument.
                 * @throws IllegalArgumentException  if string parameter does not conform to XML Schema Part 2 specification or
                 *       if namespace prefix of <tt>lexicalXSDQname</tt> is not bound to a URI in NamespaceContext <tt>nsc</tt>.
                 */
                // @ts-ignore
                public static parseQName(lexicalXSDQName: java.lang.String | string, nsc: javax.xml.namespace.NamespaceContext): javax.xml.namespace.QName
                /**
                 * <p>
                 * Converts the string argument into a Calendar value.
                 * @param lexicalXSDDateTime
                 *      A string containing lexical representation of
                 *      xsd:datetime.
                 * @return A Calendar object represented by the string argument.
                 * @throws IllegalArgumentException if string parameter does not conform to lexical value space defined in XML Schema Part 2: Datatypes for xsd:dateTime.
                 */
                // @ts-ignore
                public static parseDateTime(lexicalXSDDateTime: java.lang.String | string): java.util.Calendar
                /**
                 * <p>
                 * Converts the string argument into an array of bytes.
                 * @param lexicalXSDBase64Binary
                 *      A string containing lexical representation
                 *      of xsd:base64Binary.
                 * @return An array of bytes represented by the string argument.
                 * @throws IllegalArgumentException if string parameter does not conform to lexical value space defined in XML Schema Part 2: Datatypes for xsd:base64Binary
                 */
                // @ts-ignore
                public static parseBase64Binary(lexicalXSDBase64Binary: java.lang.String | string): number /*byte*/[]
                /**
                 * <p>
                 * Converts the string argument into an array of bytes.
                 * @param lexicalXSDHexBinary
                 *      A string containing lexical representation of
                 *      xsd:hexBinary.
                 * @return An array of bytes represented by the string argument.
                 * @throws IllegalArgumentException if string parameter does not conform to lexical value space defined in XML Schema Part 2: Datatypes for xsd:hexBinary.
                 */
                // @ts-ignore
                public static parseHexBinary(lexicalXSDHexBinary: java.lang.String | string): number /*byte*/[]
                /**
                 * <p>
                 * Converts the string argument into a long value.
                 * @param lexicalXSDUnsignedInt
                 *      A string containing lexical representation
                 *      of xsd:unsignedInt.
                 * @return A long value represented by the string argument.
                 * @throws NumberFormatException if string parameter can not be parsed into a <tt>long</tt> value.
                 */
                // @ts-ignore
                public static parseUnsignedInt(lexicalXSDUnsignedInt: java.lang.String | string): number /*long*/
                /**
                 * <p>
                 * Converts the string argument into an int value.
                 * @param lexicalXSDUnsignedShort
                 *      A string containing lexical
                 *      representation of xsd:unsignedShort.
                 * @return An int value represented by the string argument.
                 * @throws NumberFormatException if string parameter can not be parsed into an <tt>int</tt> value.
                 */
                // @ts-ignore
                public static parseUnsignedShort(lexicalXSDUnsignedShort: java.lang.String | string): number /*int*/
                /**
                 * <p>
                 * Converts the string argument into a Calendar value.
                 * @param lexicalXSDTime
                 *      A string containing lexical representation of
                 *      xsd:time.
                 * @return A Calendar value represented by the string argument.
                 * @throws IllegalArgumentException if string parameter does not conform to lexical value space defined in XML Schema Part 2: Datatypes for xsd:Time.
                 */
                // @ts-ignore
                public static parseTime(lexicalXSDTime: java.lang.String | string): java.util.Calendar
                /**
                 * <p>
                 * Converts the string argument into a Calendar value.
                 * @param lexicalXSDDate
                 *       A string containing lexical representation of
                 *      xsd:Date.
                 * @return A Calendar value represented by the string argument.
                 * @throws IllegalArgumentException if string parameter does not conform to lexical value space defined in XML Schema Part 2: Datatypes for xsd:Date.
                 */
                // @ts-ignore
                public static parseDate(lexicalXSDDate: java.lang.String | string): java.util.Calendar
                /**
                 * <p>
                 * Return a string containing the lexical representation of the
                 * simple type.
                 * @param lexicalXSDAnySimpleType
                 *      A string containing lexical
                 *      representation of the simple type.
                 * @return A string containing the lexical representation of the
                 *      simple type.
                 */
                // @ts-ignore
                public static parseAnySimpleType(lexicalXSDAnySimpleType: java.lang.String | string): string
                /**
                 * <p>
                 * Converts the string argument into a string.
                 * @param val
                 *      A string value.
                 * @return A string containing a lexical representation of xsd:string.
                 */
                // @ts-ignore
                public static printString(val: java.lang.String | string): string
                /**
                 * <p>
                 * Converts a BigInteger value into a string.
                 * @param val
                 *      A BigInteger value
                 * @return A string containing a lexical representation of xsd:integer
                 * @throws IllegalArgumentException <tt>val</tt> is null.
                 */
                // @ts-ignore
                public static printInteger(val: java.math.BigInteger): string
                /**
                 * <p>
                 * Converts an int value into a string.
                 * @param val
                 *      An int value
                 * @return A string containing a lexical representation of xsd:int
                 */
                // @ts-ignore
                public static printInt(val: number /*int*/): string
                /**
                 * <p>
                 * Converts A long value into a string.
                 * @param val
                 *      A long value
                 * @return A string containing a lexical representation of xsd:long
                 */
                // @ts-ignore
                public static printLong(val: number /*long*/): string
                /**
                 * <p>
                 * Converts a short value into a string.
                 * @param val
                 *      A short value
                 * @return A string containing a lexical representation of xsd:short
                 */
                // @ts-ignore
                public static printShort(val: number /*short*/): string
                /**
                 * <p>
                 * Converts a BigDecimal value into a string.
                 * @param val
                 *      A BigDecimal value
                 * @return A string containing a lexical representation of xsd:decimal
                 * @throws IllegalArgumentException <tt>val</tt> is null.
                 */
                // @ts-ignore
                public static printDecimal(val: java.math.BigDecimal): string
                /**
                 * <p>
                 * Converts a float value into a string.
                 * @param val
                 *      A float value
                 * @return A string containing a lexical representation of xsd:float
                 */
                // @ts-ignore
                public static printFloat(val: number /*float*/): string
                /**
                 * <p>
                 * Converts a double value into a string.
                 * @param val
                 *      A double value
                 * @return A string containing a lexical representation of xsd:double
                 */
                // @ts-ignore
                public static printDouble(val: number /*double*/): string
                /**
                 * <p>
                 * Converts a boolean value into a string.
                 * @param val
                 *      A boolean value
                 * @return A string containing a lexical representation of xsd:boolean
                 */
                // @ts-ignore
                public static printBoolean(val: boolean): string
                /**
                 * <p>
                 * Converts a byte value into a string.
                 * @param val
                 *      A byte value
                 * @return A string containing a lexical representation of xsd:byte
                 */
                // @ts-ignore
                public static printByte(val: number /*byte*/): string
                /**
                 * <p>
                 * Converts a QName instance into a string.
                 * @param val
                 *      A QName value
                 * @param nsc
                 *      A namespace context for interpreting a prefix within a QName.
                 * @return A string containing a lexical representation of QName
                 * @throws IllegalArgumentException if <tt>val</tt> is null or
                 *  if <tt>nsc</tt> is non-null or <tt>nsc.getPrefix(nsprefixFromVal)</tt> is null.
                 */
                // @ts-ignore
                public static printQName(val: javax.xml.namespace.QName, nsc: javax.xml.namespace.NamespaceContext): string
                /**
                 * <p>
                 * Converts a Calendar value into a string.
                 * @param val
                 *      A Calendar value
                 * @return A string containing a lexical representation of xsd:dateTime
                 * @throws IllegalArgumentException if <tt>val</tt> is null.
                 */
                // @ts-ignore
                public static printDateTime(val: java.util.Calendar): string
                /**
                 * <p>
                 * Converts an array of bytes into a string.
                 * @param val
                 *      An array of bytes
                 * @return A string containing a lexical representation of xsd:base64Binary
                 * @throws IllegalArgumentException if <tt>val</tt> is null.
                 */
                // @ts-ignore
                public static printBase64Binary(val: number /*byte*/[]): string
                /**
                 * <p>
                 * Converts an array of bytes into a string.
                 * @param val
                 *      An array of bytes
                 * @return A string containing a lexical representation of xsd:hexBinary
                 * @throws IllegalArgumentException if <tt>val</tt> is null.
                 */
                // @ts-ignore
                public static printHexBinary(val: number /*byte*/[]): string
                /**
                 * <p>
                 * Converts a long value into a string.
                 * @param val
                 *      A long value
                 * @return A string containing a lexical representation of xsd:unsignedInt
                 */
                // @ts-ignore
                public static printUnsignedInt(val: number /*long*/): string
                /**
                 * <p>
                 * Converts an int value into a string.
                 * @param val
                 *      An int value
                 * @return A string containing a lexical representation of xsd:unsignedShort
                 */
                // @ts-ignore
                public static printUnsignedShort(val: number /*int*/): string
                /**
                 * <p>
                 * Converts a Calendar value into a string.
                 * @param val
                 *      A Calendar value
                 * @return A string containing a lexical representation of xsd:time
                 * @throws IllegalArgumentException if <tt>val</tt> is null.
                 */
                // @ts-ignore
                public static printTime(val: java.util.Calendar): string
                /**
                 * <p>
                 * Converts a Calendar value into a string.
                 * @param val
                 *      A Calendar value
                 * @return A string containing a lexical representation of xsd:date
                 * @throws IllegalArgumentException if <tt>val</tt> is null.
                 */
                // @ts-ignore
                public static printDate(val: java.util.Calendar): string
                /**
                 * <p>
                 * Converts a string value into a string.
                 * @param val
                 *      A string value
                 * @return A string containing a lexical representation of xsd:AnySimpleType
                 */
                // @ts-ignore
                public static printAnySimpleType(val: java.lang.String | string): string
            }
        }
    }
}
