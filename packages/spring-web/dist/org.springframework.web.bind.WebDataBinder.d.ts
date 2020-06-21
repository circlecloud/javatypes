declare namespace org {
    namespace springframework {
        namespace web {
            namespace bind {
                /**
                 * Special {@link DataBinder} for data binding from web request parameters
                 * to JavaBean objects. Designed for web environments, but not dependent on
                 * the Servlet API; serves as base class for more specific DataBinder variants,
                 * such as {@link org.springframework.web.bind.ServletRequestDataBinder}.
                 * <p>Includes support for field markers which address a common problem with
                 * HTML checkboxes and select options: detecting that a field was part of
                 * the form, but did not generate a request parameter because it was empty.
                 * A field marker allows to detect that state and reset the corresponding
                 * bean property accordingly. Default values, for parameters that are otherwise
                 * not present, can specify a value for the field other then empty.
                 * @author Juergen Hoeller
                 * @author Scott Andrews
                 * @author Brian Clozel
                 * @since 1.2
                 * @see #registerCustomEditor
                 * @see #setAllowedFields
                 * @see #setRequiredFields
                 * @see #setFieldMarkerPrefix
                 * @see #setFieldDefaultPrefix
                 * @see ServletRequestDataBinder
                 */
                // @ts-ignore
                class WebDataBinder extends DataBinder {
                    /**
                     * Create a new WebDataBinder instance, with default object name.
                     * @param target the target object to bind onto (or {#code null}
                     *  if the binder is just used to convert a plain parameter value)
                     * @see #DEFAULT_OBJECT_NAME
                     */
                    // @ts-ignore
                    constructor(target: java.lang.Object | any)
                    /**
                     * Create a new WebDataBinder instance.
                     * @param target the target object to bind onto (or {#code null}
                     *  if the binder is just used to convert a plain parameter value)
                     * @param objectName the name of the target object
                     */
                    // @ts-ignore
                    constructor(target: java.lang.Object | any, objectName: java.lang.String | string)
                    /**
                     * Default prefix that field marker parameters start with, followed by the field
                     * name: e.g. "_subscribeToNewsletter" for a field "subscribeToNewsletter".
                     * <p>Such a marker parameter indicates that the field was visible, that is,
                     * existed in the form that caused the submission. If no corresponding field
                     * value parameter was found, the field will be reset. The value of the field
                     * marker parameter does not matter in this case; an arbitrary value can be used.
                     * This is particularly useful for HTML checkboxes and select options.
                     * @see #setFieldMarkerPrefix
                     */
                    // @ts-ignore
                    public static readonly DEFAULT_FIELD_MARKER_PREFIX: java.lang.String | string
                    /**
                     * Default prefix that field default parameters start with, followed by the field
                     * name: e.g. "!subscribeToNewsletter" for a field "subscribeToNewsletter".
                     * <p>Default parameters differ from field markers in that they provide a default
                     * value instead of an empty value.
                     * @see #setFieldDefaultPrefix
                     */
                    // @ts-ignore
                    public static readonly DEFAULT_FIELD_DEFAULT_PREFIX: java.lang.String | string
                    /**
                     * Specify a prefix that can be used for parameters that mark potentially
                     * empty fields, having "prefix + field" as name. Such a marker parameter is
                     * checked by existence: You can send any value for it, for example "visible".
                     * This is particularly useful for HTML checkboxes and select options.
                     * <p>Default is "_", for "_FIELD" parameters (e.g. "_subscribeToNewsletter").
                     * Set this to null if you want to turn off the empty field check completely.
                     * <p>HTML checkboxes only send a value when they're checked, so it is not
                     * possible to detect that a formerly checked box has just been unchecked,
                     * at least not with standard HTML means.
                     * <p>One way to address this is to look for a checkbox parameter value if
                     * you know that the checkbox has been visible in the form, resetting the
                     * checkbox if no value found. In Spring web MVC, this typically happens
                     * in a custom {@code onBind} implementation.
                     * <p>This auto-reset mechanism addresses this deficiency, provided
                     * that a marker parameter is sent for each checkbox field, like
                     * "_subscribeToNewsletter" for a "subscribeToNewsletter" field.
                     * As the marker parameter is sent in any case, the data binder can
                     * detect an empty field and automatically reset its value.
                     * @see #DEFAULT_FIELD_MARKER_PREFIX
                     */
                    // @ts-ignore
                    public setFieldMarkerPrefix(fieldMarkerPrefix: java.lang.String | string): void
                    /**
                     * Return the prefix for parameters that mark potentially empty fields.
                     */
                    // @ts-ignore
                    public getFieldMarkerPrefix(): string
                    /**
                     * Specify a prefix that can be used for parameters that indicate default
                     * value fields, having "prefix + field" as name. The value of the default
                     * field is used when the field is not provided.
                     * <p>Default is "!", for "!FIELD" parameters (e.g. "!subscribeToNewsletter").
                     * Set this to null if you want to turn off the field defaults completely.
                     * <p>HTML checkboxes only send a value when they're checked, so it is not
                     * possible to detect that a formerly checked box has just been unchecked,
                     * at least not with standard HTML means.  A default field is especially
                     * useful when a checkbox represents a non-boolean value.
                     * <p>The presence of a default parameter preempts the behavior of a field
                     * marker for the given field.
                     * @see #DEFAULT_FIELD_DEFAULT_PREFIX
                     */
                    // @ts-ignore
                    public setFieldDefaultPrefix(fieldDefaultPrefix: java.lang.String | string): void
                    /**
                     * Return the prefix for parameters that mark default fields.
                     */
                    // @ts-ignore
                    public getFieldDefaultPrefix(): string
                    /**
                     * Set whether to bind empty MultipartFile parameters. Default is "true".
                     * <p>Turn this off if you want to keep an already bound MultipartFile
                     * when the user resubmits the form without choosing a different file.
                     * Else, the already bound MultipartFile will be replaced by an empty
                     * MultipartFile holder.
                     * @see org.springframework.web.multipart.MultipartFile
                     */
                    // @ts-ignore
                    public setBindEmptyMultipartFiles(bindEmptyMultipartFiles: boolean): void
                    /**
                     * Return whether to bind empty MultipartFile parameters.
                     */
                    // @ts-ignore
                    public isBindEmptyMultipartFiles(): boolean
                    /**
                     * This implementation performs a field default and marker check
                     * before delegating to the superclass binding process.
                     * @see #checkFieldDefaults
                     * @see #checkFieldMarkers
                     */
                    // @ts-ignore
                    doBind(mpvs: MutablePropertyValues): void
                    /**
                     * Check the given property values for field defaults,
                     * i.e. for fields that start with the field default prefix.
                     * <p>The existence of a field defaults indicates that the specified
                     * value should be used if the field is otherwise not present.
                     * @param mpvs the property values to be bound (can be modified)
                     * @see #getFieldDefaultPrefix
                     */
                    // @ts-ignore
                    checkFieldDefaults(mpvs: MutablePropertyValues): void
                    /**
                     * Check the given property values for field markers,
                     * i.e. for fields that start with the field marker prefix.
                     * <p>The existence of a field marker indicates that the specified
                     * field existed in the form. If the property values do not contain
                     * a corresponding field value, the field will be considered as empty
                     * and will be reset appropriately.
                     * @param mpvs the property values to be bound (can be modified)
                     * @see #getFieldMarkerPrefix
                     * @see #getEmptyValue(String, Class)
                     */
                    // @ts-ignore
                    checkFieldMarkers(mpvs: MutablePropertyValues): void
                    /**
                     * Determine an empty value for the specified field.
                     * <p>The default implementation delegates to {@link #getEmptyValue(Class)}
                     * if the field type is known, otherwise falls back to {@code null}.
                     * @param field the name of the field
                     * @param fieldType the type of the field
                     * @return the empty value (for most fields: {#code null})
                     */
                    // @ts-ignore
                    getEmptyValue(field: java.lang.String | string, fieldType: java.lang.Class<any>): any
                    /**
                     * Determine an empty value for the specified field.
                     * <p>The default implementation returns:
                     * <ul>
                     * <li>{@code Boolean.FALSE} for boolean fields
                     * <li>an empty array for array types
                     * <li>Collection implementations for Collection types
                     * <li>Map implementations for Map types
                     * <li>else, {@code null} is used as default
                     * </ul>
                     * @param fieldType the type of the field
                     * @return the empty value (for most fields: {#code null})
                     * @since 5.0
                     */
                    // @ts-ignore
                    public getEmptyValue(fieldType: java.lang.Class<any>): any
                    /**
                     * Bind all multipart files contained in the given request, if any
                     * (in case of a multipart request). To be called by subclasses.
                     * <p>Multipart files will only be added to the property values if they
                     * are not empty or if we're configured to bind empty multipart files too.
                     * @param multipartFiles a Map of field name String to MultipartFile object
                     * @param mpvs the property values to be bound (can be modified)
                     * @see org.springframework.web.multipart.MultipartFile
                     * @see #setBindEmptyMultipartFiles
                     */
                    // @ts-ignore
                    bindMultipart(multipartFiles: java.util.Map<java.lang.String | string, java.util.List<org.springframework.web.multipart.MultipartFile> | Array<org.springframework.web.multipart.MultipartFile>>, mpvs: MutablePropertyValues): void
                }
            }
        }
    }
}
