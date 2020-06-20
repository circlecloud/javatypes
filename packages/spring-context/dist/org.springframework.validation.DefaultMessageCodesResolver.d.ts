declare namespace org {
    namespace springframework {
        namespace validation {
            /**
             * Default implementation of the {@link MessageCodesResolver} interface.
             * <p>Will create two message codes for an object error, in the following order (when
             * using the {@link Format#PREFIX_ERROR_CODE prefixed}
             * {@link #setMessageCodeFormatter(MessageCodeFormatter) formatter}):
             * <ul>
             * <li>1.: code + "." + object name
             * <li>2.: code
             * </ul>
             * <p>Will create four message codes for a field specification, in the following order:
             * <ul>
             * <li>1.: code + "." + object name + "." + field
             * <li>2.: code + "." + field
             * <li>3.: code + "." + field type
             * <li>4.: code
             * </ul>
             * <p>For example, in case of code "typeMismatch", object name "user", field "age":
             * <ul>
             * <li>1. try "typeMismatch.user.age"
             * <li>2. try "typeMismatch.age"
             * <li>3. try "typeMismatch.int"
             * <li>4. try "typeMismatch"
             * </ul>
             * <p>This resolution algorithm thus can be leveraged for example to show
             * specific messages for binding errors like "required" and "typeMismatch":
             * <ul>
             * <li>at the object + field level ("age" field, but only on "user");
             * <li>at the field level (all "age" fields, no matter which object name);
             * <li>or at the general level (all fields, on any object).
             * </ul>
             * <p>In case of array, {@link List} or {@link java.util.Map} properties,
             * both codes for specific elements and for the whole collection are
             * generated. Assuming a field "name" of an array "groups" in object "user":
             * <ul>
             * <li>1. try "typeMismatch.user.groups[0].name"
             * <li>2. try "typeMismatch.user.groups.name"
             * <li>3. try "typeMismatch.groups[0].name"
             * <li>4. try "typeMismatch.groups.name"
             * <li>5. try "typeMismatch.name"
             * <li>6. try "typeMismatch.java.lang.String"
             * <li>7. try "typeMismatch"
             * </ul>
             * <p>By default the {@code errorCode}s will be placed at the beginning of constructed
             * message strings. The {@link #setMessageCodeFormatter(MessageCodeFormatter)
             * messageCodeFormatter} property can be used to specify an alternative concatenation
             * {@link MessageCodeFormatter format}.
             * <p>In order to group all codes into a specific category within your resource bundles,
             * e.g. "validation.typeMismatch.name" instead of the default "typeMismatch.name",
             * consider specifying a {@link #setPrefix prefix} to be applied.
             * @author Juergen Hoeller
             * @author Phillip Webb
             * @author Chris Beams
             * @since 1.0.1
             */
            // @ts-ignore
            class DefaultMessageCodesResolver extends java.lang.Object implements org.springframework.validation.MessageCodesResolver, java.io.Serializable {
                // @ts-ignore
                constructor()
                /**
                 * The separator that this implementation uses when resolving message codes.
                 */
                // @ts-ignore
                readonly CODE_SEPARATOR: string
                /**
                 * Specify a prefix to be applied to any code built by this resolver.
                 * <p>Default is none. Specify, for example, "validation." to get
                 * error codes like "validation.typeMismatch.name".
                 */
                // @ts-ignore
                setPrefix(prefix: string): void
                /**
                 * Return the prefix to be applied to any code built by this resolver.
                 * <p>Returns an empty String in case of no prefix.
                 */
                // @ts-ignore
                getPrefix(): java.lang.String
                /**
                 * Specify the format for message codes built by this resolver.
                 * <p>The default is {@link Format#PREFIX_ERROR_CODE}.
                 * @since 3.2
                 * @see Format
                 */
                // @ts-ignore
                setMessageCodeFormatter(formatter: org.springframework.validation.MessageCodeFormatter): void
                // @ts-ignore
                resolveMessageCodes(errorCode: string, objectName: string): java.lang.String[]
                /**
                 * Build the code list for the given code and field: an
                 * object/field-specific code, a field-specific code, a plain error code.
                 * <p>Arrays, Lists and Maps are resolved both for specific elements and
                 * the whole collection.
                 * <p>See the {@link DefaultMessageCodesResolver class level javadoc} for
                 * details on the generated codes.
                 * @return the list of codes
                 */
                // @ts-ignore
                resolveMessageCodes(errorCode: string, objectName: string, field: string, fieldType: java.lang.Class<any>): java.lang.String[]
                /**
                 * Add both keyed and non-keyed entries for the supplied {@code field}
                 * to the supplied field list.
                 */
                // @ts-ignore
                buildFieldList(field: string, fieldList: Array<java.lang.String>): void
                /**
                 * Post-process the given message code, built by this resolver.
                 * <p>The default implementation applies the specified prefix, if any.
                 * @param code the message code as built by this resolver
                 * @return the final message code to be returned
                 * @see #setPrefix
                 */
                // @ts-ignore
                postProcessMessageCode(code: string): java.lang.String
            }
        }
    }
}
