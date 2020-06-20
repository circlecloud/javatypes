declare namespace javax {
    namespace management {
        namespace loading {
            /**
             * This class represents the contents of the <CODE>MLET</CODE> tag.
             * It can be consulted by a subclass of {@link MLet} that overrides
             * the {@link MLet#check MLet.check} method.
             * @since 1.6
             */
            // @ts-ignore
            class MLetContent extends java.lang.Object {
                /**
                 * Creates an <CODE>MLet</CODE> instance initialized with attributes read
                 * from an <CODE>MLET</CODE> tag in an MLet text file.
                 * @param url The URL of the MLet text file containing the
                 *  <CODE>MLET</CODE> tag.
                 * @param attributes A map of the attributes of the <CODE>MLET</CODE> tag.
                 *  The keys in this map are the attribute names in lowercase, for
                 *  example <code>codebase</code>.  The values are the associated attribute
                 *  values.
                 * @param types A list of the TYPE attributes that appeared in nested
                 *  &lt;PARAM&gt; tags.
                 * @param values A list of the VALUE attributes that appeared in nested
                 *  &lt;PARAM&gt; tags.
                 */
                // @ts-ignore
                constructor(url: java.net.URL, attributes: java.util.Map<java.lang.String, java.lang.String>, types: Array<java.lang.String>, values: Array<java.lang.String>)
                /**
                 * Gets the attributes of the <CODE>MLET</CODE> tag.  The keys in
                 * the returned map are the attribute names in lowercase, for
                 * example <code>codebase</code>.  The values are the associated
                 * attribute values.
                 * @return A map of the attributes of the <CODE>MLET</CODE> tag
                 *  and their values.
                 */
                // @ts-ignore
                getAttributes(): java.util.Map<java.lang.String, java.lang.String>
                /**
                 * Gets the MLet text file's base URL.
                 * @return The MLet text file's base URL.
                 */
                // @ts-ignore
                getDocumentBase(): java.net.URL
                /**
                 * Gets the code base URL.
                 * @return The code base URL.
                 */
                // @ts-ignore
                getCodeBase(): java.net.URL
                /**
                 * Gets the list of <CODE>.jar</CODE> files specified by the <CODE>ARCHIVE</CODE>
                 * attribute of the <CODE>MLET</CODE> tag.
                 * @return A comma-separated list of <CODE>.jar</CODE> file names.
                 */
                // @ts-ignore
                getJarFiles(): java.lang.String
                /**
                 * Gets the value of the <CODE>CODE</CODE>
                 * attribute of the <CODE>MLET</CODE> tag.
                 * @return The value of the <CODE>CODE</CODE>
                 *  attribute of the <CODE>MLET</CODE> tag.
                 */
                // @ts-ignore
                getCode(): java.lang.String
                /**
                 * Gets the value of the <CODE>OBJECT</CODE>
                 * attribute of the <CODE>MLET</CODE> tag.
                 * @return The value of the <CODE>OBJECT</CODE>
                 *  attribute of the <CODE>MLET</CODE> tag.
                 */
                // @ts-ignore
                getSerializedObject(): java.lang.String
                /**
                 * Gets the value of the <CODE>NAME</CODE>
                 * attribute of the <CODE>MLET</CODE> tag.
                 * @return The value of the <CODE>NAME</CODE>
                 *  attribute of the <CODE>MLET</CODE> tag.
                 */
                // @ts-ignore
                getName(): java.lang.String
                /**
                 * Gets the value of the <CODE>VERSION</CODE>
                 * attribute of the <CODE>MLET</CODE> tag.
                 * @return The value of the <CODE>VERSION</CODE>
                 *  attribute of the <CODE>MLET</CODE> tag.
                 */
                // @ts-ignore
                getVersion(): java.lang.String
                /**
                 * Gets the list of values of the <code>TYPE</code> attribute in
                 * each nested &lt;PARAM&gt; tag within the <code>MLET</code>
                 * tag.
                 * @return the list of types.
                 */
                // @ts-ignore
                getParameterTypes(): java.util.List<java.lang.String>
                /**
                 * Gets the list of values of the <code>VALUE</code> attribute in
                 * each nested &lt;PARAM&gt; tag within the <code>MLET</code>
                 * tag.
                 * @return the list of values.
                 */
                // @ts-ignore
                getParameterValues(): java.util.List<java.lang.String>
            }
        }
    }
}
