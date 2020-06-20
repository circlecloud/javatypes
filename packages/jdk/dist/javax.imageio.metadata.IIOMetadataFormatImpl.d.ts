declare namespace javax {
    namespace imageio {
        namespace metadata {
            /**
             * A concrete class providing a reusable implementation of the
             * <code>IIOMetadataFormat</code> interface.  In addition, a static
             * instance representing the standard, plug-in neutral
             * <code>javax_imageio_1.0</code> format is provided by the
             * <code>getStandardFormatInstance</code> method.
             * <p> In order to supply localized descriptions of elements and
             * attributes, a <code>ResourceBundle</code> with a base name of
             * <code>this.getClass().getName() + "Resources"</code> should be
             * supplied via the usual mechanism used by
             * <code>ResourceBundle.getBundle</code>.  Briefly, the subclasser
             * supplies one or more additional classes according to a naming
             * convention (by default, the fully-qualified name of the subclass
             * extending <code>IIMetadataFormatImpl</code>, plus the string
             * "Resources", plus the country, language, and variant codes
             * separated by underscores).  At run time, calls to
             * <code>getElementDescription</code> or
             * <code>getAttributeDescription</code> will attempt to load such
             * classes dynamically according to the supplied locale, and will use
             * either the element name, or the element name followed by a '/'
             * character followed by the attribute name as a key.  This key will
             * be supplied to the <code>ResourceBundle</code>'s
             * <code>getString</code> method, and the resulting localized
             * description of the node or attribute is returned.
             * <p> The subclass may supply a different base name for the resource
             * bundles using the <code>setResourceBaseName</code> method.
             * <p> A subclass may choose its own localization mechanism, if so
             * desired, by overriding the supplied implementations of
             * <code>getElementDescription</code> and
             * <code>getAttributeDescription</code>.
             * @see ResourceBundle#getBundle(String,Locale)
             */
            // @ts-ignore
            class IIOMetadataFormatImpl extends java.lang.Object implements javax.imageio.metadata.IIOMetadataFormat {
                /**
                 * Constructs a blank <code>IIOMetadataFormatImpl</code> instance,
                 * with a given root element name and child policy (other than
                 * <code>CHILD_POLICY_REPEAT</code>).  Additional elements, and
                 * their attributes and <code>Object</code> reference information
                 * may be added using the various <code>add</code> methods.
                 * @param rootName the name of the root element.
                 * @param childPolicy one of the <code>CHILD_POLICY_*</code> constants,
                 *  other than <code>CHILD_POLICY_REPEAT</code>.
                 * @exception IllegalArgumentException if <code>rootName</code> is
                 *  <code>null</code>.
                 * @exception IllegalArgumentException if <code>childPolicy</code> is
                 *  not one of the predefined constants.
                 */
                // @ts-ignore
                constructor(rootName: string, childPolicy: number /*int*/)
                /**
                 * Constructs a blank <code>IIOMetadataFormatImpl</code> instance,
                 * with a given root element name and a child policy of
                 * <code>CHILD_POLICY_REPEAT</code>.  Additional elements, and
                 * their attributes and <code>Object</code> reference information
                 * may be added using the various <code>add</code> methods.
                 * @param rootName the name of the root element.
                 * @param minChildren the minimum number of children of the node.
                 * @param maxChildren the maximum number of children of the node.
                 * @exception IllegalArgumentException if <code>rootName</code> is
                 *  <code>null</code>.
                 * @exception IllegalArgumentException if <code>minChildren</code>
                 *  is negative or larger than <code>maxChildren</code>.
                 */
                // @ts-ignore
                constructor(rootName: string, minChildren: number /*int*/, maxChildren: number /*int*/)
                /**
                 * A <code>String</code> constant containing the standard format
                 * name, <code>"javax_imageio_1.0"</code>.
                 */
                // @ts-ignore
                readonly standardMetadataFormatName: string
                /**
                 * Sets a new base name for locating <code>ResourceBundle</code>s
                 * containing descriptions of elements and attributes for this
                 * format.
                 * <p> Prior to the first time this method is called, the base
                 * name will be equal to <code>this.getClass().getName() +
                 * "Resources"</code>.
                 * @param resourceBaseName a <code>String</code> containing the new
                 *  base name.
                 * @exception IllegalArgumentException if
                 *  <code>resourceBaseName</code> is <code>null</code>.
                 * @see #getResourceBaseName
                 */
                // @ts-ignore
                setResourceBaseName(resourceBaseName: string): void
                /**
                 * Returns the currently set base name for locating
                 * <code>ResourceBundle</code>s.
                 * @return a <code>String</code> containing the base name.
                 * @see #setResourceBaseName
                 */
                // @ts-ignore
                getResourceBaseName(): java.lang.String
                /**
                 * Adds a new element type to this metadata document format with a
                 * child policy other than <code>CHILD_POLICY_REPEAT</code>.
                 * @param elementName the name of the new element.
                 * @param parentName the name of the element that will be the
                 *  parent of the new element.
                 * @param childPolicy one of the <code>CHILD_POLICY_*</code>
                 *  constants, other than <code>CHILD_POLICY_REPEAT</code>,
                 *  indicating the child policy of the new element.
                 * @exception IllegalArgumentException if <code>parentName</code>
                 *  is <code>null</code>, or is not a legal element name for this
                 *  format.
                 * @exception IllegalArgumentException if <code>childPolicy</code>
                 *  is not one of the predefined constants.
                 */
                // @ts-ignore
                addElement(elementName: string, parentName: string, childPolicy: number /*int*/): void
                /**
                 * Adds a new element type to this metadata document format with a
                 * child policy of <code>CHILD_POLICY_REPEAT</code>.
                 * @param elementName the name of the new element.
                 * @param parentName the name of the element that will be the
                 *  parent of the new element.
                 * @param minChildren the minimum number of children of the node.
                 * @param maxChildren the maximum number of children of the node.
                 * @exception IllegalArgumentException if <code>parentName</code>
                 *  is <code>null</code>, or is not a legal element name for this
                 *  format.
                 * @exception IllegalArgumentException if <code>minChildren</code>
                 *  is negative or larger than <code>maxChildren</code>.
                 */
                // @ts-ignore
                addElement(elementName: string, parentName: string, minChildren: number /*int*/, maxChildren: number /*int*/): void
                /**
                 * Adds an existing element to the list of legal children for a
                 * given parent node type.
                 * @param parentName the name of the element that will be the
                 *  new parent of the element.
                 * @param elementName the name of the element to be added as a
                 *  child.
                 * @exception IllegalArgumentException if <code>elementName</code>
                 *  is <code>null</code>, or is not a legal element name for this
                 *  format.
                 * @exception IllegalArgumentException if <code>parentName</code>
                 *  is <code>null</code>, or is not a legal element name for this
                 *  format.
                 */
                // @ts-ignore
                addChildElement(elementName: string, parentName: string): void
                /**
                 * Removes an element from the format.  If no element with the
                 * given name was present, nothing happens and no exception is
                 * thrown.
                 * @param elementName the name of the element to be removed.
                 */
                // @ts-ignore
                removeElement(elementName: string): void
                /**
                 * Adds a new attribute to a previously defined element that may
                 * be set to an arbitrary value.
                 * @param elementName the name of the element.
                 * @param attrName the name of the attribute being added.
                 * @param dataType the data type (string format) of the attribute,
                 *  one of the <code>DATATYPE_*</code> constants.
                 * @param required <code>true</code> if the attribute must be present.
                 * @param defaultValue the default value for the attribute, or
                 *  <code>null</code>.
                 * @exception IllegalArgumentException if <code>elementName</code>
                 *  is <code>null</code>, or is not a legal element name for this
                 *  format.
                 * @exception IllegalArgumentException if <code>attrName</code> is
                 *  <code>null</code>.
                 * @exception IllegalArgumentException if <code>dataType</code> is
                 *  not one of the predefined constants.
                 */
                // @ts-ignore
                addAttribute(elementName: string, attrName: string, dataType: number /*int*/, required: boolean, defaultValue: string): void
                /**
                 * Adds a new attribute to a previously defined element that will
                 * be defined by a set of enumerated values.
                 * @param elementName the name of the element.
                 * @param attrName the name of the attribute being added.
                 * @param dataType the data type (string format) of the attribute,
                 *  one of the <code>DATATYPE_*</code> constants.
                 * @param required <code>true</code> if the attribute must be present.
                 * @param defaultValue the default value for the attribute, or
                 *  <code>null</code>.
                 * @param enumeratedValues a <code>List</code> of
                 *  <code>String</code>s containing the legal values for the
                 *  attribute.
                 * @exception IllegalArgumentException if <code>elementName</code>
                 *  is <code>null</code>, or is not a legal element name for this
                 *  format.
                 * @exception IllegalArgumentException if <code>attrName</code> is
                 *  <code>null</code>.
                 * @exception IllegalArgumentException if <code>dataType</code> is
                 *  not one of the predefined constants.
                 * @exception IllegalArgumentException if
                 *  <code>enumeratedValues</code> is <code>null</code>.
                 * @exception IllegalArgumentException if
                 *  <code>enumeratedValues</code> does not contain at least one
                 *  entry.
                 * @exception IllegalArgumentException if
                 *  <code>enumeratedValues</code> contains an element that is not a
                 *  <code>String</code> or is <code>null</code>.
                 */
                // @ts-ignore
                addAttribute(elementName: string, attrName: string, dataType: number /*int*/, required: boolean, defaultValue: string, enumeratedValues: Array<java.lang.String>): void
                /**
                 * Adds a new attribute to a previously defined element that will
                 * be defined by a range of values.
                 * @param elementName the name of the element.
                 * @param attrName the name of the attribute being added.
                 * @param dataType the data type (string format) of the attribute,
                 *  one of the <code>DATATYPE_*</code> constants.
                 * @param required <code>true</code> if the attribute must be present.
                 * @param defaultValue the default value for the attribute, or
                 *  <code>null</code>.
                 * @param minValue the smallest (inclusive or exclusive depending
                 *  on the value of <code>minInclusive</code>) legal value for the
                 *  attribute, as a <code>String</code>.
                 * @param maxValue the largest (inclusive or exclusive depending
                 *  on the value of <code>minInclusive</code>) legal value for the
                 *  attribute, as a <code>String</code>.
                 * @param minInclusive <code>true</code> if <code>minValue</code>
                 *  is inclusive.
                 * @param maxInclusive <code>true</code> if <code>maxValue</code>
                 *  is inclusive.
                 * @exception IllegalArgumentException if <code>elementName</code>
                 *  is <code>null</code>, or is not a legal element name for this
                 *  format.
                 * @exception IllegalArgumentException if <code>attrName</code> is
                 *  <code>null</code>.
                 * @exception IllegalArgumentException if <code>dataType</code> is
                 *  not one of the predefined constants.
                 */
                // @ts-ignore
                addAttribute(elementName: string, attrName: string, dataType: number /*int*/, required: boolean, defaultValue: string, minValue: string, maxValue: string, minInclusive: boolean, maxInclusive: boolean): void
                /**
                 * Adds a new attribute to a previously defined element that will
                 * be defined by a list of values.
                 * @param elementName the name of the element.
                 * @param attrName the name of the attribute being added.
                 * @param dataType the data type (string format) of the attribute,
                 *  one of the <code>DATATYPE_*</code> constants.
                 * @param required <code>true</code> if the attribute must be present.
                 * @param listMinLength the smallest legal number of list items.
                 * @param listMaxLength the largest legal number of list items.
                 * @exception IllegalArgumentException if <code>elementName</code>
                 *  is <code>null</code>, or is not a legal element name for this
                 *  format.
                 * @exception IllegalArgumentException if <code>attrName</code> is
                 *  <code>null</code>.
                 * @exception IllegalArgumentException if <code>dataType</code> is
                 *  not one of the predefined constants.
                 * @exception IllegalArgumentException if
                 *  <code>listMinLength</code> is negative or larger than
                 *  <code>listMaxLength</code>.
                 */
                // @ts-ignore
                addAttribute(elementName: string, attrName: string, dataType: number /*int*/, required: boolean, listMinLength: number /*int*/, listMaxLength: number /*int*/): void
                /**
                 * Adds a new attribute to a previously defined element that will
                 * be defined by the enumerated values <code>TRUE</code> and
                 * <code>FALSE</code>, with a datatype of
                 * <code>DATATYPE_BOOLEAN</code>.
                 * @param elementName the name of the element.
                 * @param attrName the name of the attribute being added.
                 * @param hasDefaultValue <code>true</code> if a default value
                 *  should be present.
                 * @param defaultValue the default value for the attribute as a
                 *  <code>boolean</code>, ignored if <code>hasDefaultValue</code>
                 *  is <code>false</code>.
                 * @exception IllegalArgumentException if <code>elementName</code>
                 *  is <code>null</code>, or is not a legal element name for this
                 *  format.
                 * @exception IllegalArgumentException if <code>attrName</code> is
                 *  <code>null</code>.
                 */
                // @ts-ignore
                addBooleanAttribute(elementName: string, attrName: string, hasDefaultValue: boolean, defaultValue: boolean): void
                /**
                 * Removes an attribute from a previously defined element.  If no
                 * attribute with the given name was present in the given element,
                 * nothing happens and no exception is thrown.
                 * @param elementName the name of the element.
                 * @param attrName the name of the attribute being removed.
                 * @exception IllegalArgumentException if <code>elementName</code>
                 *  is <code>null</code>, or is not a legal element name for this format.
                 */
                // @ts-ignore
                removeAttribute(elementName: string, attrName: string): void
                /**
                 * Allows an <code>Object</code> reference of a given class type
                 * to be stored in nodes implementing the named element.  The
                 * value of the <code>Object</code> is unconstrained other than by
                 * its class type.
                 * <p> If an <code>Object</code> reference was previously allowed,
                 * the previous settings are overwritten.
                 * @param elementName the name of the element.
                 * @param classType a <code>Class</code> variable indicating the
                 *  legal class type for the object value.
                 * @param required <code>true</code> if an object value must be present.
                 * @param defaultValue the default value for the
                 *  <code>Object</code> reference, or <code>null</code>.
                 * @param <T> the type of the object.
                 * @exception IllegalArgumentException if <code>elementName</code>
                 *  is <code>null</code>, or is not a legal element name for this format.
                 */
                // @ts-ignore
                addObjectValue<T>(elementName: string, classType: java.lang.Class<T>, required: boolean, defaultValue: T): void
                /**
                 * Allows an <code>Object</code> reference of a given class type
                 * to be stored in nodes implementing the named element.  The
                 * value of the <code>Object</code> must be one of the values
                 * given by <code>enumeratedValues</code>.
                 * <p> If an <code>Object</code> reference was previously allowed,
                 * the previous settings are overwritten.
                 * @param elementName the name of the element.
                 * @param classType a <code>Class</code> variable indicating the
                 *  legal class type for the object value.
                 * @param required <code>true</code> if an object value must be present.
                 * @param defaultValue the default value for the
                 *  <code>Object</code> reference, or <code>null</code>.
                 * @param enumeratedValues a <code>List</code> of
                 *  <code>Object</code>s containing the legal values for the
                 *  object reference.
                 * @param <T> the type of the object.
                 * @exception IllegalArgumentException if <code>elementName</code>
                 *  is <code>null</code>, or is not a legal element name for this format.
                 * @exception IllegalArgumentException if
                 *  <code>enumeratedValues</code> is <code>null</code>.
                 * @exception IllegalArgumentException if
                 *  <code>enumeratedValues</code> does not contain at least one
                 *  entry.
                 * @exception IllegalArgumentException if
                 *  <code>enumeratedValues</code> contains an element that is not
                 *  an instance of the class type denoted by <code>classType</code>
                 *  or is <code>null</code>.
                 */
                // @ts-ignore
                addObjectValue<T>(elementName: string, classType: java.lang.Class<T>, required: boolean, defaultValue: T, enumeratedValues: Array<T>): void
                /**
                 * Allows an <code>Object</code> reference of a given class type
                 * to be stored in nodes implementing the named element.  The
                 * value of the <code>Object</code> must be within the range given
                 * by <code>minValue</code> and <code>maxValue</code>.
                 * Furthermore, the class type must implement the
                 * <code>Comparable</code> interface.
                 * <p> If an <code>Object</code> reference was previously allowed,
                 * the previous settings are overwritten.
                 * @param elementName the name of the element.
                 * @param classType a <code>Class</code> variable indicating the
                 *  legal class type for the object value.
                 * @param defaultValue the default value for the
                 * @param minValue the smallest (inclusive or exclusive depending
                 *  on the value of <code>minInclusive</code>) legal value for the
                 *  object value, as a <code>String</code>.
                 * @param maxValue the largest (inclusive or exclusive depending
                 *  on the value of <code>minInclusive</code>) legal value for the
                 *  object value, as a <code>String</code>.
                 * @param minInclusive <code>true</code> if <code>minValue</code>
                 *  is inclusive.
                 * @param maxInclusive <code>true</code> if <code>maxValue</code>
                 *  is inclusive.
                 * @param <T> the type of the object.
                 * @exception IllegalArgumentException if <code>elementName</code>
                 *  is <code>null</code>, or is not a legal element name for this
                 *  format.
                 */
                // @ts-ignore
                addObjectValue<T extends java.lang.Object & java.lang.Comparable<? super T>>(elementName: string, classType: java.lang.Class<T>, defaultValue: T extends java.lang.Object & java.lang.Comparable<any super T>, minValue: java.lang.Comparable<any super T>, maxValue: java.lang.Comparable<any super T>, minInclusive: boolean, maxInclusive: boolean): void
                /**
                 * Allows an <code>Object</code> reference of a given class type
                 * to be stored in nodes implementing the named element.  The
                 * value of the <code>Object</code> must an array of objects of
                 * class type given by <code>classType</code>, with at least
                 * <code>arrayMinLength</code> and at most
                 * <code>arrayMaxLength</code> elements.
                 * <p> If an <code>Object</code> reference was previously allowed,
                 * the previous settings are overwritten.
                 * @param elementName the name of the element.
                 * @param classType a <code>Class</code> variable indicating the
                 *  legal class type for the object value.
                 * @param arrayMinLength the smallest legal length for the array.
                 * @param arrayMaxLength the largest legal length for the array.
                 * @exception IllegalArgumentException if <code>elementName</code> is
                 *  not a legal element name for this format.
                 */
                // @ts-ignore
                addObjectValue(elementName: string, classType: java.lang.Class<any>, arrayMinLength: number /*int*/, arrayMaxLength: number /*int*/): void
                /**
                 * Disallows an <code>Object</code> reference from being stored in
                 * nodes implementing the named element.
                 * @param elementName the name of the element.
                 * @exception IllegalArgumentException if <code>elementName</code> is
                 *  not a legal element name for this format.
                 */
                // @ts-ignore
                removeObjectValue(elementName: string): void
                // @ts-ignore
                getRootName(): java.lang.String
                // @ts-ignore
                abstract canNodeAppear(elementName: string, imageType: javax.imageio.ImageTypeSpecifier): boolean
                // @ts-ignore
                getElementMinChildren(elementName: string): int
                // @ts-ignore
                getElementMaxChildren(elementName: string): int
                /**
                 * Returns a <code>String</code> containing a description of the
                 * named element, or <code>null</code>.  The description will be
                 * localized for the supplied <code>Locale</code> if possible.
                 * <p> The default implementation will first locate a
                 * <code>ResourceBundle</code> using the current resource base
                 * name set by <code>setResourceBaseName</code> and the supplied
                 * <code>Locale</code>, using the fallback mechanism described in
                 * the comments for <code>ResourceBundle.getBundle</code>.  If a
                 * <code>ResourceBundle</code> is found, the element name will be
                 * used as a key to its <code>getString</code> method, and the
                 * result returned.  If no <code>ResourceBundle</code> is found,
                 * or no such key is present, <code>null</code> will be returned.
                 * <p> If <code>locale</code> is <code>null</code>, the current
                 * default <code>Locale</code> returned by <code>Locale.getLocale</code>
                 * will be used.
                 * @param elementName the name of the element.
                 * @param locale the <code>Locale</code> for which localization
                 *  will be attempted.
                 * @return the element description.
                 * @exception IllegalArgumentException if <code>elementName</code>
                 *  is <code>null</code>, or is not a legal element name for this format.
                 * @see #setResourceBaseName
                 */
                // @ts-ignore
                getElementDescription(elementName: string, locale: java.util.Locale): java.lang.String
                // @ts-ignore
                getChildPolicy(elementName: string): int
                // @ts-ignore
                getChildNames(elementName: string): java.lang.String[]
                // @ts-ignore
                getAttributeNames(elementName: string): java.lang.String[]
                // @ts-ignore
                getAttributeValueType(elementName: string, attrName: string): int
                // @ts-ignore
                getAttributeDataType(elementName: string, attrName: string): int
                // @ts-ignore
                isAttributeRequired(elementName: string, attrName: string): boolean
                // @ts-ignore
                getAttributeDefaultValue(elementName: string, attrName: string): java.lang.String
                // @ts-ignore
                getAttributeEnumerations(elementName: string, attrName: string): java.lang.String[]
                // @ts-ignore
                getAttributeMinValue(elementName: string, attrName: string): java.lang.String
                // @ts-ignore
                getAttributeMaxValue(elementName: string, attrName: string): java.lang.String
                // @ts-ignore
                getAttributeListMinLength(elementName: string, attrName: string): int
                // @ts-ignore
                getAttributeListMaxLength(elementName: string, attrName: string): int
                /**
                 * Returns a <code>String</code> containing a description of the
                 * named attribute, or <code>null</code>.  The description will be
                 * localized for the supplied <code>Locale</code> if possible.
                 * <p> The default implementation will first locate a
                 * <code>ResourceBundle</code> using the current resource base
                 * name set by <code>setResourceBaseName</code> and the supplied
                 * <code>Locale</code>, using the fallback mechanism described in
                 * the comments for <code>ResourceBundle.getBundle</code>.  If a
                 * <code>ResourceBundle</code> is found, the element name followed
                 * by a "/" character followed by the attribute name
                 * (<code>elementName + "/" + attrName</code>) will be used as a
                 * key to its <code>getString</code> method, and the result
                 * returned.  If no <code>ResourceBundle</code> is found, or no
                 * such key is present, <code>null</code> will be returned.
                 * <p> If <code>locale</code> is <code>null</code>, the current
                 * default <code>Locale</code> returned by <code>Locale.getLocale</code>
                 * will be used.
                 * @param elementName the name of the element.
                 * @param attrName the name of the attribute.
                 * @param locale the <code>Locale</code> for which localization
                 *  will be attempted, or <code>null</code>.
                 * @return the attribute description.
                 * @exception IllegalArgumentException if <code>elementName</code>
                 *  is <code>null</code>, or is not a legal element name for this format.
                 * @exception IllegalArgumentException if <code>attrName</code> is
                 *  <code>null</code> or is not a legal attribute name for this
                 *  element.
                 * @see #setResourceBaseName
                 */
                // @ts-ignore
                getAttributeDescription(elementName: string, attrName: string, locale: java.util.Locale): java.lang.String
                // @ts-ignore
                getObjectValueType(elementName: string): int
                // @ts-ignore
                getObjectClass(elementName: string): java.lang.Class<?>
                // @ts-ignore
                getObjectDefaultValue(elementName: string): java.lang.Object
                // @ts-ignore
                getObjectEnumerations(elementName: string): java.lang.Object[]
                // @ts-ignore
                getObjectMinValue(elementName: string): java.lang.Comparable<?>
                // @ts-ignore
                getObjectMaxValue(elementName: string): java.lang.Comparable<?>
                // @ts-ignore
                getObjectArrayMinLength(elementName: string): int
                // @ts-ignore
                getObjectArrayMaxLength(elementName: string): int
                /**
                 * Returns an <code>IIOMetadataFormat</code> object describing the
                 * standard, plug-in neutral <code>javax.imageio_1.0</code>
                 * metadata document format described in the comment of the
                 * <code>javax.imageio.metadata</code> package.
                 * @return a predefined <code>IIOMetadataFormat</code> instance.
                 */
                // @ts-ignore
                getStandardFormatInstance(): javax.imageio.metadata.IIOMetadataFormat
            }
        }
    }
}
