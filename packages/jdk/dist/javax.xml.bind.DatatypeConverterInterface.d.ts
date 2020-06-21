declare namespace javax {
    namespace xml {
        namespace bind {
            /**
             * <p>
             * The DatatypeConverterInterface is for JAXB provider use only. A
             * JAXB provider must supply a class that implements this interface.
             * JAXB Providers are required to call the
             * {@link DatatypeConverter#setDatatypeConverter(DatatypeConverterInterface)
             * DatatypeConverter.setDatatypeConverter} api at
             * some point before the first marshal or unmarshal operation (perhaps during
             * the call to JAXBContext.newInstance).  This step is necessary to configure
             * the converter that should be used to perform the print and parse
             * functionality.  Calling this api repeatedly will have no effect - the
             * DatatypeConverter instance passed into the first invocation is the one that
             * will be used from then on.
             * </p>
             * <p>
             * This interface defines the parse and print methods. There is one
             * parse and print method for each XML schema datatype specified in the
             * the default binding Table 5-1 in the JAXB specification.
             * </p>
             * <p>
             * The parse and print methods defined here are invoked by the static parse
             * and print methods defined in the {@link DatatypeConverter DatatypeConverter}
             * class.
             * </p>
             * <p>
             * A parse method for a XML schema datatype must be capable of converting any
             * lexical representation of the XML schema datatype ( specified by the
             * <a href="http://www.w3.org/TR/xmlschema-2/"> XML Schema Part2: Datatypes
             * specification</a> into a value in the value space of the XML schema datatype.
             * If an error is encountered during conversion, then an IllegalArgumentException
             * or a subclass of IllegalArgumentException must be thrown by the method.
             * </p>
             * <p>
             * A print method for a XML schema datatype can output any lexical
             * representation that is valid with respect to the XML schema datatype.
             * If an error is encountered during conversion, then an IllegalArgumentException,
             * or a subclass of IllegalArgumentException must be thrown by the method.
             * </p>
             * The prefix xsd: is used to refer to XML schema datatypes
             * <a href="http://www.w3.org/TR/xmlschema-2/"> XML Schema Part2: Datatypes
             * specification.</a>
             * <p>
             * @author <ul><li>Sekhar Vajjhala, Sun Microsystems, Inc.</li><li>Joe Fialli, Sun Microsystems Inc.</li><li>Kohsuke Kawaguchi, Sun Microsystems, Inc.</li><li>Ryan Shoemaker,Sun Microsystems Inc.</li></ul>
             * @see DatatypeConverter
             * @see ParseConversionEvent
             * @see PrintConversionEvent
             * @since JAXB1.0
             */
            // @ts-ignore
            interface DatatypeConverterInterface {
                /**
                 * <p>
                 * Convert the string argument into a string.
                 * @param lexicalXSDString
                 *      A lexical representation of the XML Schema datatype xsd:string
                 * @return A string that is the same as the input string.
                 */
                // @ts-ignore
                parseString(lexicalXSDString: java.lang.String | string): string
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
                parseInteger(lexicalXSDInteger: java.lang.String | string): java.math.BigInteger
                /**
                 * <p>
                 * Convert the string argument into an int value.
                 * @param lexicalXSDInt
                 *      A string containing a lexical representation of
                 *      xsd:int.
                 * @return An int value represented byte the string argument.
                 * @throws NumberFormatException <code>lexicalXSDInt</code> is not a valid string representation of an <code>int</code> value.
                 */
                // @ts-ignore
                parseInt(lexicalXSDInt: java.lang.String | string): number /*int*/
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
                parseLong(lexicalXSDLong: java.lang.String | string): number /*long*/
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
                parseShort(lexicalXSDShort: java.lang.String | string): number /*short*/
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
                parseDecimal(lexicalXSDDecimal: java.lang.String | string): java.math.BigDecimal
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
                parseFloat(lexicalXSDFloat: java.lang.String | string): number /*float*/
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
                parseDouble(lexicalXSDDouble: java.lang.String | string): number /*double*/
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
                parseBoolean(lexicalXSDBoolean: java.lang.String | string): boolean
                /**
                 * <p>
                 * Converts the string argument into a byte value.
                 * @param lexicalXSDByte
                 *      A string containing lexical representation of
                 *      xsd:byte.
                 * @return A byte value represented by the string argument.
                 * @throws NumberFormatException <code>lexicalXSDByte</code> does not contain a parseable byte.
                 * @throws IllegalArgumentException if string parameter does not conform to lexical value space defined in XML Schema Part 2: Datatypes for xsd:byte.
                 */
                // @ts-ignore
                parseByte(lexicalXSDByte: java.lang.String | string): number /*byte*/
                /**
                 * <p>
                 * Converts the string argument into a QName value.
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
                parseQName(lexicalXSDQName: java.lang.String | string, nsc: javax.xml.namespace.NamespaceContext): javax.xml.namespace.QName
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
                parseDateTime(lexicalXSDDateTime: java.lang.String | string): java.util.Calendar
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
                parseBase64Binary(lexicalXSDBase64Binary: java.lang.String | string): number /*byte*/[]
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
                parseHexBinary(lexicalXSDHexBinary: java.lang.String | string): number /*byte*/[]
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
                parseUnsignedInt(lexicalXSDUnsignedInt: java.lang.String | string): number /*long*/
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
                parseUnsignedShort(lexicalXSDUnsignedShort: java.lang.String | string): number /*int*/
                /**
                 * <p>
                 * Converts the string argument into a Calendar value.
                 * @param lexicalXSDTime
                 *      A string containing lexical representation of
                 *      xsd:Time.
                 * @return A Calendar value represented by the string argument.
                 * @throws IllegalArgumentException if string parameter does not conform to lexical value space defined in XML Schema Part 2: Datatypes for xsd:Time.
                 */
                // @ts-ignore
                parseTime(lexicalXSDTime: java.lang.String | string): java.util.Calendar
                /**
                 * <p>
                 * Converts the string argument into a Calendar value.
                 * @param lexicalXSDDate
                 *      A string containing lexical representation of
                 *      xsd:Date.
                 * @return A Calendar value represented by the string argument.
                 * @throws IllegalArgumentException if string parameter does not conform to lexical value space defined in XML Schema Part 2: Datatypes for xsd:Date.
                 */
                // @ts-ignore
                parseDate(lexicalXSDDate: java.lang.String | string): java.util.Calendar
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
                parseAnySimpleType(lexicalXSDAnySimpleType: java.lang.String | string): string
                /**
                 * <p>
                 * Converts the string argument into a string.
                 * @param val
                 *      A string value.
                 * @return A string containing a lexical representation of xsd:string
                 */
                // @ts-ignore
                printString(val: java.lang.String | string): string
                /**
                 * <p>
                 * Converts a BigInteger value into a string.
                 * @param val
                 *      A BigInteger value
                 * @return A string containing a lexical representation of xsd:integer
                 * @throws IllegalArgumentException <tt>val</tt> is null.
                 */
                // @ts-ignore
                printInteger(val: java.math.BigInteger): string
                /**
                 * <p>
                 * Converts an int value into a string.
                 * @param val
                 *      An int value
                 * @return A string containing a lexical representation of xsd:int
                 */
                // @ts-ignore
                printInt(val: number /*int*/): string
                /**
                 * <p>
                 * Converts a long value into a string.
                 * @param val
                 *      A long value
                 * @return A string containing a lexical representation of xsd:long
                 */
                // @ts-ignore
                printLong(val: number /*long*/): string
                /**
                 * <p>
                 * Converts a short value into a string.
                 * @param val
                 *      A short value
                 * @return A string containing a lexical representation of xsd:short
                 */
                // @ts-ignore
                printShort(val: number /*short*/): string
                /**
                 * <p>
                 * Converts a BigDecimal value into a string.
                 * @param val
                 *      A BigDecimal value
                 * @return A string containing a lexical representation of xsd:decimal
                 * @throws IllegalArgumentException <tt>val</tt> is null.
                 */
                // @ts-ignore
                printDecimal(val: java.math.BigDecimal): string
                /**
                 * <p>
                 * Converts a float value into a string.
                 * @param val
                 *      A float value
                 * @return A string containing a lexical representation of xsd:float
                 */
                // @ts-ignore
                printFloat(val: number /*float*/): string
                /**
                 * <p>
                 * Converts a double value into a string.
                 * @param val
                 *      A double value
                 * @return A string containing a lexical representation of xsd:double
                 */
                // @ts-ignore
                printDouble(val: number /*double*/): string
                /**
                 * <p>
                 * Converts a boolean value into a string.
                 * @param val
                 *      A boolean value
                 * @return A string containing a lexical representation of xsd:boolean
                 */
                // @ts-ignore
                printBoolean(val: boolean): string
                /**
                 * <p>
                 * Converts a byte value into a string.
                 * @param val
                 *      A byte value
                 * @return A string containing a lexical representation of xsd:byte
                 */
                // @ts-ignore
                printByte(val: number /*byte*/): string
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
                printQName(val: javax.xml.namespace.QName, nsc: javax.xml.namespace.NamespaceContext): string
                /**
                 * <p>
                 * Converts a Calendar value into a string.
                 * @param val
                 *      A Calendar value
                 * @return A string containing a lexical representation of xsd:dateTime
                 * @throws IllegalArgumentException if <tt>val</tt> is null.
                 */
                // @ts-ignore
                printDateTime(val: java.util.Calendar): string
                /**
                 * <p>
                 * Converts an array of bytes into a string.
                 * @param val
                 *      an array of bytes
                 * @return A string containing a lexical representation of xsd:base64Binary
                 * @throws IllegalArgumentException if <tt>val</tt> is null.
                 */
                // @ts-ignore
                printBase64Binary(val: number /*byte*/[]): string
                /**
                 * <p>
                 * Converts an array of bytes into a string.
                 * @param val
                 *      an array of bytes
                 * @return A string containing a lexical representation of xsd:hexBinary
                 * @throws IllegalArgumentException if <tt>val</tt> is null.
                 */
                // @ts-ignore
                printHexBinary(val: number /*byte*/[]): string
                /**
                 * <p>
                 * Converts a long value into a string.
                 * @param val
                 *      A long value
                 * @return A string containing a lexical representation of xsd:unsignedInt
                 */
                // @ts-ignore
                printUnsignedInt(val: number /*long*/): string
                /**
                 * <p>
                 * Converts an int value into a string.
                 * @param val
                 *      An int value
                 * @return A string containing a lexical representation of xsd:unsignedShort
                 */
                // @ts-ignore
                printUnsignedShort(val: number /*int*/): string
                /**
                 * <p>
                 * Converts a Calendar value into a string.
                 * @param val
                 *      A Calendar value
                 * @return A string containing a lexical representation of xsd:time
                 * @throws IllegalArgumentException if <tt>val</tt> is null.
                 */
                // @ts-ignore
                printTime(val: java.util.Calendar): string
                /**
                 * <p>
                 * Converts a Calendar value into a string.
                 * @param val
                 *      A Calendar value
                 * @return A string containing a lexical representation of xsd:date
                 * @throws IllegalArgumentException if <tt>val</tt> is null.
                 */
                // @ts-ignore
                printDate(val: java.util.Calendar): string
                /**
                 * <p>
                 * Converts a string value into a string.
                 * @param val
                 *      A string value
                 * @return A string containing a lexical representation of xsd:AnySimpleType
                 */
                // @ts-ignore
                printAnySimpleType(val: java.lang.String | string): string
            }
        }
    }
}
