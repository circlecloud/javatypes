declare namespace javax {
    namespace imageio {
        namespace metadata {
            /**
             * An object describing the structure of metadata documents returned
             * from <code>IIOMetadata.getAsTree</code> and passed to
             * <code>IIOMetadata.setFromTree</code> and <code>mergeTree</code>.
             * Document structures are described by a set of constraints on the
             * type and number of child elements that may belong to a given parent
             * element type, the names, types, and values of attributes that may
             * belong to an element, and the type and values of
             * <code>Object</code> reference that may be stored at a node.
             * <p> N.B: classes that implement this interface should contain a
             * method declared as <code>public static getInstance()</code> which
             * returns an instance of the class.  Commonly, an implementation will
             * construct only a single instance and cache it for future
             * invocations of <code>getInstance</code>.
             * <p> The structures that may be described by this class are a subset
             * of those expressible using XML document type definitions (DTDs),
             * with the addition of some basic information on the datatypes of
             * attributes and the ability to store an <code>Object</code>
             * reference within a node.  In the future, XML Schemas could be used
             * to represent these structures, and many others.
             * <p> The differences between
             * <code>IIOMetadataFormat</code>-described structures and DTDs are as
             * follows:
             * <ul>
             * <li> Elements may not contain text or mix text with embedded
             * tags.
             * <li> The children of an element must conform to one of a few simple
             * patterns, described in the documentation for the
             * <code>CHILD_*</code> constants;
             * <li> The in-memory representation of an elements may contain a
             * reference to an <code>Object</code>.  There is no provision for
             * representing such objects textually.
             * </ul>
             */
            // @ts-ignore
            interface IIOMetadataFormat {
                /**
                 * A constant returned by <code>getChildPolicy</code> to indicate
                 * that an element may not have any children.  In other words, it
                 * is required to be a leaf node.
                 */
                // @ts-ignore
                
                /**
                 * A constant returned by <code>getChildPolicy</code> to indicate
                 * that an element must have a single instance of each of its
                 * legal child elements, in order.  In DTD terms, the contents of
                 * the element are defined by a sequence <code>a,b,c,d,...</code>.
                 */
                // @ts-ignore
                
                /**
                 * A constant returned by <code>getChildPolicy</code> to indicate
                 * that an element must have zero or one instance of each of its
                 * legal child elements, in order.  In DTD terms, the contents of
                 * the element are defined by a sequence
                 * <code>a?,b?,c?,d?,...</code>.
                 */
                // @ts-ignore
                
                /**
                 * A constant returned by <code>getChildPolicy</code> to indicate
                 * that an element must have zero or one children, selected from
                 * among its legal child elements.  In DTD terms, the contents of
                 * the element are defined by a selection
                 * <code>a|b|c|d|...</code>.
                 */
                // @ts-ignore
                
                /**
                 * A constant returned by <code>getChildPolicy</code> to indicate
                 * that an element must have a sequence of instances of any of its
                 * legal child elements.  In DTD terms, the contents of the
                 * element are defined by a sequence <code>(a|b|c|d|...)*</code>.
                 */
                // @ts-ignore
                
                /**
                 * A constant returned by <code>getChildPolicy</code> to indicate
                 * that an element must have zero or more instances of its unique
                 * legal child element.  In DTD terms, the contents of the element
                 * are defined by a starred expression <code>a*</code>.
                 */
                // @ts-ignore
                
                /**
                 * The largest valid <code>CHILD_POLICY_*</code> constant,
                 * to be used for range checks.
                 */
                // @ts-ignore
                
                /**
                 * A constant returned by <code>getObjectValueType</code> to
                 * indicate the absence of a user object.
                 */
                // @ts-ignore
                
                /**
                 * A constant returned by <code>getAttributeValueType</code> and
                 * <code>getObjectValueType</code> to indicate that the attribute
                 * or user object may be set a single, arbitrary value.
                 */
                // @ts-ignore
                
                /**
                 * A constant returned by <code>getAttributeValueType</code> and
                 * <code>getObjectValueType</code> to indicate that the attribute
                 * or user object may be set a range of values.  Both the minimum
                 * and maximum values of the range are exclusive.  It is
                 * recommended that ranges of integers be inclusive on both ends,
                 * and that exclusive ranges be used only for floating-point data.
                 * @see #VALUE_RANGE_MIN_MAX_INCLUSIVE
                 */
                // @ts-ignore
                
                /**
                 * A value that may be or'ed with <code>VALUE_RANGE</code> to
                 * obtain <code>VALUE_RANGE_MIN_INCLUSIVE</code>, and with
                 * <code>VALUE_RANGE_MAX_INCLUSIVE</code> to obtain
                 * <code>VALUE_RANGE_MIN_MAX_INCLUSIVE</code>.
                 * <p> Similarly, the value may be and'ed with the value of
                 * <code>getAttributeValueType</code>or
                 * <code>getObjectValueType</code> to determine if the minimum
                 * value of the range is inclusive.
                 */
                // @ts-ignore
                
                /**
                 * A value that may be or'ed with <code>VALUE_RANGE</code> to
                 * obtain <code>VALUE_RANGE_MAX_INCLUSIVE</code>, and with
                 * <code>VALUE_RANGE_MIN_INCLUSIVE</code> to obtain
                 * <code>VALUE_RANGE_MIN_MAX_INCLUSIVE</code>.
                 * <p> Similarly, the value may be and'ed with the value of
                 * <code>getAttributeValueType</code>or
                 * <code>getObjectValueType</code> to determine if the maximum
                 * value of the range is inclusive.
                 */
                // @ts-ignore
                
                /**
                 * A constant returned by <code>getAttributeValueType</code> and
                 * <code>getObjectValueType</code> to indicate that the attribute
                 * or user object may be set to a range of values.  The minimum
                 * (but not the maximum) value of the range is inclusive.
                 */
                // @ts-ignore
                
                /**
                 * A constant returned by <code>getAttributeValueType</code> and
                 * <code>getObjectValueType</code> to indicate that the attribute
                 * or user object may be set to a range of values.  The maximum
                 * (but not the minimum) value of the range is inclusive.
                 */
                // @ts-ignore
                
                /**
                 * A constant returned by <code>getAttributeValueType</code> and
                 * <code>getObjectValueType</code> to indicate that the attribute
                 * or user object may be set a range of values.  Both the minimum
                 * and maximum values of the range are inclusive.  It is
                 * recommended that ranges of integers be inclusive on both ends,
                 * and that exclusive ranges be used only for floating-point data.
                 */
                // @ts-ignore
                
                /**
                 * A constant returned by <code>getAttributeValueType</code> and
                 * <code>getObjectValueType</code> to indicate that the attribute
                 * or user object may be set one of a number of enumerated values.
                 * In the case of attributes, these values are
                 * <code>String</code>s; for objects, they are
                 * <code>Object</code>s implementing a given class or interface.
                 * <p> Attribute values of type <code>DATATYPE_BOOLEAN</code>
                 * should be marked as enumerations.
                 */
                // @ts-ignore
                
                /**
                 * A constant returned by <code>getAttributeValueType</code> and
                 * <code>getObjectValueType</code> to indicate that the attribute
                 * or user object may be set to a list or array of values.  In the
                 * case of attributes, the list will consist of
                 * whitespace-separated values within a <code>String</code>; for
                 * objects, an array will be used.
                 */
                // @ts-ignore
                
                /**
                 * A constant returned by <code>getAttributeDataType</code>
                 * indicating that the value of an attribute is a general Unicode
                 * string.
                 */
                // @ts-ignore
                
                /**
                 * A constant returned by <code>getAttributeDataType</code>
                 * indicating that the value of an attribute is one of the boolean
                 * values 'true' or 'false'.
                 * Attribute values of type DATATYPE_BOOLEAN should be marked as
                 * enumerations, and the permitted values should be the string
                 * literal values "TRUE" or "FALSE", although a plugin may also
                 * recognise lower or mixed case equivalents.
                 */
                // @ts-ignore
                
                /**
                 * A constant returned by <code>getAttributeDataType</code>
                 * indicating that the value of an attribute is a string
                 * representation of an integer.
                 */
                // @ts-ignore
                
                /**
                 * A constant returned by <code>getAttributeDataType</code>
                 * indicating that the value of an attribute is a string
                 * representation of a decimal floating-point number.
                 */
                // @ts-ignore
                
                /**
                 * A constant returned by <code>getAttributeDataType</code>
                 * indicating that the value of an attribute is a string
                 * representation of a double-precision decimal floating-point
                 * number.
                 */
                // @ts-ignore
                
                /**
                 * Returns the name of the root element of the format.
                 * @return a <code>String</code>.
                 */
                // @ts-ignore
                getRootName(): java.lang.String
                /**
                 * Returns <code>true</code> if the element (and the subtree below
                 * it) is allowed to appear in a metadata document for an image of
                 * the given type, defined by an <code>ImageTypeSpecifier</code>.
                 * For example, a metadata document format might contain an
                 * element that describes the primary colors of the image, which
                 * would not be allowed when writing a grayscale image.
                 * @param elementName the name of the element being queried.
                 * @param imageType an <code>ImageTypeSpecifier</code> indicating
                 *  the type of the image that will be associated with the
                 *  metadata.
                 * @return <code>true</code> if the node is meaningful for images
                 *  of the given type.
                 */
                // @ts-ignore
                canNodeAppear(elementName: string, imageType: javax.imageio.ImageTypeSpecifier): boolean
                /**
                 * Returns the minimum number of children of the named element
                 * with child policy <code>CHILD_POLICY_REPEAT</code>.  For
                 * example, an element representing color primary information
                 * might be required to have at least 3 children, one for each
                 * primary.
                 * @param elementName the name of the element being queried.
                 * @return an <code>int</code>.
                 * @exception IllegalArgumentException if <code>elementName</code>
                 *  is <code>null</code> or is not a legal element name for this
                 *  format.
                 * @exception IllegalArgumentException if the named element does
                 *  not have a child policy of <code>CHILD_POLICY_REPEAT</code>.
                 */
                // @ts-ignore
                getElementMinChildren(elementName: string): int
                /**
                 * Returns the maximum number of children of the named element
                 * with child policy <code>CHILD_POLICY_REPEAT</code>.  For
                 * example, an element representing an entry in an 8-bit color
                 * palette might be allowed to repeat up to 256 times.  A value of
                 * <code>Integer.MAX_VALUE</code> may be used to specify that
                 * there is no upper bound.
                 * @param elementName the name of the element being queried.
                 * @return an <code>int</code>.
                 * @exception IllegalArgumentException if <code>elementName</code>
                 *  is <code>null</code> or is not a legal element name for this
                 *  format.
                 * @exception IllegalArgumentException if the named element does
                 *  not have a child policy of <code>CHILD_POLICY_REPEAT</code>.
                 */
                // @ts-ignore
                getElementMaxChildren(elementName: string): int
                /**
                 * Returns a <code>String</code> containing a description of the
                 * named element, or <code>null</code>.  The description will be
                 * localized for the supplied <code>Locale</code> if possible.
                 * <p> If <code>locale</code> is <code>null</code>, the current
                 * default <code>Locale</code> returned by <code>Locale.getLocale</code>
                 * will be used.
                 * @param elementName the name of the element.
                 * @param locale the <code>Locale</code> for which localization
                 *  will be attempted.
                 * @return the element description.
                 * @exception IllegalArgumentException if <code>elementName</code>
                 *  is <code>null</code>, or is not a legal element name for this format.
                 */
                // @ts-ignore
                getElementDescription(elementName: string, locale: java.util.Locale): java.lang.String
                /**
                 * Returns one of the constants starting with
                 * <code>CHILD_POLICY_</code>, indicating the legal pattern of
                 * children for the named element.
                 * @param elementName the name of the element being queried.
                 * @return one of the <code>CHILD_POLICY_*</code> constants.
                 * @exception IllegalArgumentException if <code>elementName</code>
                 *  is <code>null</code> or is not a legal element name for this
                 *  format.
                 */
                // @ts-ignore
                getChildPolicy(elementName: string): int
                /**
                 * Returns an array of <code>String</code>s indicating the names
                 * of the element which are allowed to be children of the named
                 * element, in the order in which they should appear.  If the
                 * element cannot have children, <code>null</code> is returned.
                 * @param elementName the name of the element being queried.
                 * @return an array of <code>String</code>s, or null.
                 * @exception IllegalArgumentException if <code>elementName</code>
                 *  is <code>null</code> or is not a legal element name for this
                 *  format.
                 */
                // @ts-ignore
                getChildNames(elementName: string): java.lang.String[]
                /**
                 * Returns an array of <code>String</code>s listing the names of
                 * the attributes that may be associated with the named element.
                 * @param elementName the name of the element being queried.
                 * @return an array of <code>String</code>s.
                 * @exception IllegalArgumentException if <code>elementName</code>
                 *  is <code>null</code> or is not a legal element name for this
                 *  format.
                 */
                // @ts-ignore
                getAttributeNames(elementName: string): java.lang.String[]
                /**
                 * Returns one of the constants starting with <code>VALUE_</code>,
                 * indicating whether the values of the given attribute within the
                 * named element are arbitrary, constrained to lie within a
                 * specified range, constrained to be one of a set of enumerated
                 * values, or are a whitespace-separated list of arbitrary values.
                 * @param elementName the name of the element being queried.
                 * @param attrName the name of the attribute being queried.
                 * @return one of the <code>VALUE_*</code> constants.
                 * @exception IllegalArgumentException if <code>elementName</code>
                 *  is <code>null</code> or is not a legal element name for this
                 *  format.
                 * @exception IllegalArgumentException if <code>attrName</code> is
                 *  <code>null</code> or is not a legal attribute name for this
                 *  element.
                 */
                // @ts-ignore
                getAttributeValueType(elementName: string, attrName: string): int
                /**
                 * Returns one of the constants starting with
                 * <code>DATATYPE_</code>, indicating the format and
                 * interpretation of the value of the given attribute within the
                 * named element.  If <code>getAttributeValueType</code> returns
                 * <code>VALUE_LIST</code>, then the legal value is a
                 * whitespace-spearated list of values of the returned datatype.
                 * @param elementName the name of the element being queried.
                 * @param attrName the name of the attribute being queried.
                 * @return one of the <code>DATATYPE_*</code> constants.
                 * @exception IllegalArgumentException if <code>elementName</code>
                 *  is <code>null</code> or is not a legal element name for this
                 *  format.
                 * @exception IllegalArgumentException if <code>attrName</code> is
                 *  <code>null</code> or is not a legal attribute name for this
                 *  element.
                 */
                // @ts-ignore
                getAttributeDataType(elementName: string, attrName: string): int
                /**
                 * Returns <code>true</code> if the named attribute must be
                 * present within the named element.
                 * @param elementName the name of the element being queried.
                 * @param attrName the name of the attribute being queried.
                 * @return <code>true</code> if the attribute must be present.
                 * @exception IllegalArgumentException if <code>elementName</code>
                 *  is <code>null</code> or is not a legal element name for this
                 *  format.
                 * @exception IllegalArgumentException if <code>attrName</code> is
                 *  <code>null</code> or is not a legal attribute name for this
                 *  element.
                 */
                // @ts-ignore
                isAttributeRequired(elementName: string, attrName: string): boolean
                /**
                 * Returns the default value of the named attribute, if it is not
                 * explicitly present within the named element, as a
                 * <code>String</code>, or <code>null</code> if no default value
                 * is available.
                 * @param elementName the name of the element being queried.
                 * @param attrName the name of the attribute being queried.
                 * @return a <code>String</code> containing the default value, or
                 *  <code>null</code>.
                 * @exception IllegalArgumentException if <code>elementName</code>
                 *  is <code>null</code> or is not a legal element name for this
                 *  format.
                 * @exception IllegalArgumentException if <code>attrName</code> is
                 *  <code>null</code> or is not a legal attribute name for this
                 *  element.
                 */
                // @ts-ignore
                getAttributeDefaultValue(elementName: string, attrName: string): java.lang.String
                /**
                 * Returns an array of <code>String</code>s containing the legal
                 * enumerated values for the given attribute within the named
                 * element.  This method should only be called if
                 * <code>getAttributeValueType</code> returns
                 * <code>VALUE_ENUMERATION</code>.
                 * @param elementName the name of the element being queried.
                 * @param attrName the name of the attribute being queried.
                 * @return an array of <code>String</code>s.
                 * @exception IllegalArgumentException if <code>elementName</code>
                 *  is <code>null</code> or is not a legal element name for this
                 *  format.
                 * @exception IllegalArgumentException if <code>attrName</code> is
                 *  <code>null</code> or is not a legal attribute name for this
                 *  element.
                 * @exception IllegalArgumentException if the given attribute is
                 *  not defined as an enumeration.
                 */
                // @ts-ignore
                getAttributeEnumerations(elementName: string, attrName: string): java.lang.String[]
                /**
                 * Returns the minimum legal value for the attribute.  Whether
                 * this value is inclusive or exclusive may be determined by the
                 * value of <code>getAttributeValueType</code>.  The value is
                 * returned as a <code>String</code>; its interpretation is
                 * dependent on the value of <code>getAttributeDataType</code>.
                 * This method should only be called if
                 * <code>getAttributeValueType</code> returns
                 * <code>VALUE_RANGE_*</code>.
                 * @param elementName the name of the element being queried.
                 * @param attrName the name of the attribute being queried.
                 * @return a <code>String</code> containing the smallest legal
                 *  value for the attribute.
                 * @exception IllegalArgumentException if <code>elementName</code>
                 *  is <code>null</code> or is not a legal element name for this
                 *  format.
                 * @exception IllegalArgumentException if <code>attrName</code> is
                 *  <code>null</code> or is not a legal attribute name for this
                 *  element.
                 * @exception IllegalArgumentException if the given attribute is
                 *  not defined as a range.
                 */
                // @ts-ignore
                getAttributeMinValue(elementName: string, attrName: string): java.lang.String
                /**
                 * Returns the maximum legal value for the attribute.  Whether
                 * this value is inclusive or exclusive may be determined by the
                 * value of <code>getAttributeValueType</code>.  The value is
                 * returned as a <code>String</code>; its interpretation is
                 * dependent on the value of <code>getAttributeDataType</code>.
                 * This method should only be called if
                 * <code>getAttributeValueType</code> returns
                 * <code>VALUE_RANGE_*</code>.
                 * @param elementName the name of the element being queried, as a
                 *  <code>String</code>.
                 * @param attrName the name of the attribute being queried.
                 * @return a <code>String</code> containing the largest legal
                 *  value for the attribute.
                 * @exception IllegalArgumentException if <code>elementName</code>
                 *  is <code>null</code> or is not a legal element name for this
                 *  format.
                 * @exception IllegalArgumentException if <code>attrName</code> is
                 *  <code>null</code> or is not a legal attribute name for this
                 *  element.
                 * @exception IllegalArgumentException if the given attribute is
                 *  not defined as a range.
                 */
                // @ts-ignore
                getAttributeMaxValue(elementName: string, attrName: string): java.lang.String
                /**
                 * Returns the minimum number of list items that may be used to
                 * define this attribute.  The attribute itself is defined as a
                 * <code>String</code> containing multiple whitespace-separated
                 * items.  This method should only be called if
                 * <code>getAttributeValueType</code> returns
                 * <code>VALUE_LIST</code>.
                 * @param elementName the name of the element being queried.
                 * @param attrName the name of the attribute being queried.
                 * @return the smallest legal number of list items for the
                 *  attribute.
                 * @exception IllegalArgumentException if <code>elementName</code>
                 *  is <code>null</code> or is not a legal element name for this
                 *  format.
                 * @exception IllegalArgumentException if <code>attrName</code> is
                 *  <code>null</code> or is not a legal attribute name for this
                 *  element.
                 * @exception IllegalArgumentException if the given attribute is
                 *  not defined as a list.
                 */
                // @ts-ignore
                getAttributeListMinLength(elementName: string, attrName: string): int
                /**
                 * Returns the maximum number of list items that may be used to
                 * define this attribute.  A value of
                 * <code>Integer.MAX_VALUE</code> may be used to specify that
                 * there is no upper bound.  The attribute itself is defined as a
                 * <code>String</code> containing multiple whitespace-separated
                 * items.  This method should only be called if
                 * <code>getAttributeValueType</code> returns
                 * <code>VALUE_LIST</code>.
                 * @param elementName the name of the element being queried.
                 * @param attrName the name of the attribute being queried.
                 * @return the largest legal number of list items for the
                 *  attribute.
                 * @exception IllegalArgumentException if <code>elementName</code>
                 *  is <code>null</code> or is not a legal element name for this
                 *  format.
                 * @exception IllegalArgumentException if <code>attrName</code> is
                 *  <code>null</code> or is not a legal attribute name for this
                 *  element.
                 * @exception IllegalArgumentException if the given attribute is
                 *  not defined as a list.
                 */
                // @ts-ignore
                getAttributeListMaxLength(elementName: string, attrName: string): int
                /**
                 * Returns a <code>String</code> containing a description of the
                 * named attribute, or <code>null</code>.  The description will be
                 * localized for the supplied <code>Locale</code> if possible.
                 * <p> If <code>locale</code> is <code>null</code>, the current
                 * default <code>Locale</code> returned by <code>Locale.getLocale</code>
                 * will be used.
                 * @param elementName the name of the element.
                 * @param attrName the name of the attribute.
                 * @param locale the <code>Locale</code> for which localization
                 *  will be attempted.
                 * @return the attribute description.
                 * @exception IllegalArgumentException if <code>elementName</code>
                 *  is <code>null</code>, or is not a legal element name for this format.
                 * @exception IllegalArgumentException if <code>attrName</code> is
                 *  <code>null</code> or is not a legal attribute name for this
                 *  element.
                 */
                // @ts-ignore
                getAttributeDescription(elementName: string, attrName: string, locale: java.util.Locale): java.lang.String
                /**
                 * Returns one of the enumerated values starting with
                 * <code>VALUE_</code>, indicating the type of values
                 * (enumeration, range, or array) that are allowed for the
                 * <code>Object</code> reference.  If no object value can be
                 * stored within the given element, the result of this method will
                 * be <code>VALUE_NONE</code>.
                 * <p> <code>Object</code> references whose legal values are
                 * defined as a range must implement the <code>Comparable</code>
                 * interface.
                 * @param elementName the name of the element being queried.
                 * @return one of the <code>VALUE_*</code> constants.
                 * @exception IllegalArgumentException if <code>elementName</code>
                 *  is <code>null</code> or is not a legal element name for this
                 *  format.
                 * @see Comparable
                 */
                // @ts-ignore
                getObjectValueType(elementName: string): int
                /**
                 * Returns the <code>Class</code> type of the <code>Object</code>
                 * reference stored within the element.  If this element may not
                 * contain an <code>Object</code> reference, an
                 * <code>IllegalArgumentException</code> will be thrown.  If the
                 * class type is an array, this field indicates the underlying
                 * class type (<i>e.g</i>, for an array of <code>int</code>s, this
                 * method would return <code>int.class</code>).
                 * <p> <code>Object</code> references whose legal values are
                 * defined as a range must implement the <code>Comparable</code>
                 * interface.
                 * @param elementName the name of the element being queried.
                 * @return a <code>Class</code> object.
                 * @exception IllegalArgumentException if <code>elementName</code>
                 *  is <code>null</code> or is not a legal element name for this
                 *  format.
                 * @exception IllegalArgumentException if the named element cannot
                 *  contain an object value (<i>i.e.</i>, if
                 *  <code>getObjectValueType(elementName) == VALUE_NONE</code>).
                 */
                // @ts-ignore
                getObjectClass(elementName: string): java.lang.Class<?>
                /**
                 * Returns an <code>Object</code>s containing the default
                 * value for the <code>Object</code> reference within
                 * the named element.
                 * @param elementName the name of the element being queried.
                 * @return an <code>Object</code>.
                 * @exception IllegalArgumentException if <code>elementName</code>
                 *  is <code>null</code> or is not a legal element name for this
                 *  format.
                 * @exception IllegalArgumentException if the named element cannot
                 *  contain an object value (<i>i.e.</i>, if
                 *  <code>getObjectValueType(elementName) == VALUE_NONE</code>).
                 */
                // @ts-ignore
                getObjectDefaultValue(elementName: string): java.lang.Object
                /**
                 * Returns an array of <code>Object</code>s containing the legal
                 * enumerated values for the <code>Object</code> reference within
                 * the named element.  This method should only be called if
                 * <code>getObjectValueType</code> returns
                 * <code>VALUE_ENUMERATION</code>.
                 * <p> The <code>Object</code> associated with a node that accepts
                 * enumerated values must be equal to one of the values returned by
                 * this method, as defined by the <code>==</code> operator (as
                 * opposed to the <code>Object.equals</code> method).
                 * @param elementName the name of the element being queried.
                 * @return an array of <code>Object</code>s.
                 * @exception IllegalArgumentException if <code>elementName</code>
                 *  is <code>null</code> or is not a legal element name for this
                 *  format.
                 * @exception IllegalArgumentException if the named element cannot
                 *  contain an object value (<i>i.e.</i>, if
                 *  <code>getObjectValueType(elementName) == VALUE_NONE</code>).
                 * @exception IllegalArgumentException if the <code>Object</code>
                 *  is not defined as an enumeration.
                 */
                // @ts-ignore
                getObjectEnumerations(elementName: string): java.lang.Object[]
                /**
                 * Returns the minimum legal value for the <code>Object</code>
                 * reference within the named element.  Whether this value is
                 * inclusive or exclusive may be determined by the value of
                 * <code>getObjectValueType</code>.  This method should only be
                 * called if <code>getObjectValueType</code> returns one of the
                 * constants starting with <code>VALUE_RANGE</code>.
                 * @param elementName the name of the element being queried.
                 * @return the smallest legal value for the attribute.
                 * @exception IllegalArgumentException if <code>elementName</code>
                 *  is <code>null</code> or is not a legal element name for this
                 *  format.
                 * @exception IllegalArgumentException if the named element cannot
                 *  contain an object value (<i>i.e.</i>, if
                 *  <code>getObjectValueType(elementName) == VALUE_NONE</code>).
                 * @exception IllegalArgumentException if the <code>Object</code>
                 *  is not defined as a range.
                 */
                // @ts-ignore
                getObjectMinValue(elementName: string): java.lang.Comparable<?>
                /**
                 * Returns the maximum legal value for the <code>Object</code>
                 * reference within the named element.  Whether this value is
                 * inclusive or exclusive may be determined by the value of
                 * <code>getObjectValueType</code>.  This method should only be
                 * called if <code>getObjectValueType</code> returns one of the
                 * constants starting with <code>VALUE_RANGE</code>.
                 * @return the smallest legal value for the attribute.
                 * @param elementName the name of the element being queried.
                 * @exception IllegalArgumentException if <code>elementName</code>
                 *  is <code>null</code> or is not a legal element name for this
                 *  format.
                 * @exception IllegalArgumentException if the named element cannot
                 *  contain an object value (<i>i.e.</i>, if
                 *  <code>getObjectValueType(elementName) == VALUE_NONE</code>).
                 * @exception IllegalArgumentException if the <code>Object</code>
                 *  is not defined as a range.
                 */
                // @ts-ignore
                getObjectMaxValue(elementName: string): java.lang.Comparable<?>
                /**
                 * Returns the minimum number of array elements that may be used
                 * to define the <code>Object</code> reference within the named
                 * element.  This method should only be called if
                 * <code>getObjectValueType</code> returns
                 * <code>VALUE_LIST</code>.
                 * @param elementName the name of the element being queried.
                 * @return the smallest valid array length for the
                 *  <code>Object</code> reference.
                 * @exception IllegalArgumentException if <code>elementName</code>
                 *  is <code>null</code> or is not a legal element name for this
                 *  format.
                 * @exception IllegalArgumentException if the named element cannot
                 *  contain an object value (<i>i.e.</i>, if
                 *  <code>getObjectValueType(elementName) == VALUE_NONE</code>).
                 * @exception IllegalArgumentException if the <code>Object</code> is not
                 *  an array.
                 */
                // @ts-ignore
                getObjectArrayMinLength(elementName: string): int
                /**
                 * Returns the maximum number of array elements that may be used
                 * to define the <code>Object</code> reference within the named
                 * element.  A value of <code>Integer.MAX_VALUE</code> may be used
                 * to specify that there is no upper bound.  This method should
                 * only be called if <code>getObjectValueType</code> returns
                 * <code>VALUE_LIST</code>.
                 * @param elementName the name of the element being queried.
                 * @return the largest valid array length for the
                 *  <code>Object</code> reference.
                 * @exception IllegalArgumentException if <code>elementName</code>
                 *  is <code>null</code> or is not a legal element name for this
                 *  format.
                 * @exception IllegalArgumentException if the named element cannot
                 *  contain an object value (<i>i.e.</i>, if
                 *  <code>getObjectValueType(elementName) == VALUE_NONE</code>).
                 * @exception IllegalArgumentException if the <code>Object</code> is not
                 *  an array.
                 */
                // @ts-ignore
                getObjectArrayMaxLength(elementName: string): int
            }
        }
    }
}
