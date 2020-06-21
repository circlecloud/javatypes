declare namespace org {
    namespace springframework {
        namespace web {
            namespace bind {
                /**
                 * Parameter extraction methods, for an approach distinct from data binding,
                 * in which parameters of specific types are required.
                 * <p>This approach is very useful for simple submissions, where binding
                 * request parameters to a command object would be overkill.
                 * @author Juergen Hoeller
                 * @author Keith Donald
                 * @since 2.0
                 */
                // @ts-ignore
                abstract class ServletRequestUtils extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Get an Integer parameter, or {@code null} if not present.
                     * Throws an exception if it the parameter value isn't a number.
                     * @param request current HTTP request
                     * @param name the name of the parameter
                     * @return the Integer value, or {#code null} if not present
                     * @throws ServletRequestBindingException a subclass of ServletException,
                     *  so it doesn't need to be caught
                     */
                    // @ts-ignore
                    public static getIntParameter(request: ServletRequest, name: java.lang.String | string): number
                    /**
                     * Get an int parameter, with a fallback value. Never throws an exception.
                     * Can pass a distinguished value as default to enable checks of whether it was supplied.
                     * @param request current HTTP request
                     * @param name the name of the parameter
                     * @param defaultVal the default value to use as fallback
                     */
                    // @ts-ignore
                    public static getIntParameter(request: ServletRequest, name: java.lang.String | string, defaultVal: number /*int*/): number /*int*/
                    /**
                     * Get an array of int parameters, return an empty array if not found.
                     * @param request current HTTP request
                     * @param name the name of the parameter with multiple possible values
                     */
                    // @ts-ignore
                    public static getIntParameters(request: ServletRequest, name: java.lang.String | string): number /*int*/[]
                    /**
                     * Get an int parameter, throwing an exception if it isn't found or isn't a number.
                     * @param request current HTTP request
                     * @param name the name of the parameter
                     * @throws ServletRequestBindingException a subclass of ServletException,
                     *  so it doesn't need to be caught
                     */
                    // @ts-ignore
                    public static getRequiredIntParameter(request: ServletRequest, name: java.lang.String | string): number /*int*/
                    /**
                     * Get an array of int parameters, throwing an exception if not found or one is not a number..
                     * @param request current HTTP request
                     * @param name the name of the parameter with multiple possible values
                     * @throws ServletRequestBindingException a subclass of ServletException,
                     *  so it doesn't need to be caught
                     */
                    // @ts-ignore
                    public static getRequiredIntParameters(request: ServletRequest, name: java.lang.String | string): number /*int*/[]
                    /**
                     * Get a Long parameter, or {@code null} if not present.
                     * Throws an exception if it the parameter value isn't a number.
                     * @param request current HTTP request
                     * @param name the name of the parameter
                     * @return the Long value, or {#code null} if not present
                     * @throws ServletRequestBindingException a subclass of ServletException,
                     *  so it doesn't need to be caught
                     */
                    // @ts-ignore
                    public static getLongParameter(request: ServletRequest, name: java.lang.String | string): number
                    /**
                     * Get a long parameter, with a fallback value. Never throws an exception.
                     * Can pass a distinguished value as default to enable checks of whether it was supplied.
                     * @param request current HTTP request
                     * @param name the name of the parameter
                     * @param defaultVal the default value to use as fallback
                     */
                    // @ts-ignore
                    public static getLongParameter(request: ServletRequest, name: java.lang.String | string, defaultVal: number /*long*/): number /*long*/
                    /**
                     * Get an array of long parameters, return an empty array if not found.
                     * @param request current HTTP request
                     * @param name the name of the parameter with multiple possible values
                     */
                    // @ts-ignore
                    public static getLongParameters(request: ServletRequest, name: java.lang.String | string): number /*long*/[]
                    /**
                     * Get a long parameter, throwing an exception if it isn't found or isn't a number.
                     * @param request current HTTP request
                     * @param name the name of the parameter
                     * @throws ServletRequestBindingException a subclass of ServletException,
                     *  so it doesn't need to be caught
                     */
                    // @ts-ignore
                    public static getRequiredLongParameter(request: ServletRequest, name: java.lang.String | string): number /*long*/
                    /**
                     * Get an array of long parameters, throwing an exception if not found or one is not a number.
                     * @param request current HTTP request
                     * @param name the name of the parameter with multiple possible values
                     * @throws ServletRequestBindingException a subclass of ServletException,
                     *  so it doesn't need to be caught
                     */
                    // @ts-ignore
                    public static getRequiredLongParameters(request: ServletRequest, name: java.lang.String | string): number /*long*/[]
                    /**
                     * Get a Float parameter, or {@code null} if not present.
                     * Throws an exception if it the parameter value isn't a number.
                     * @param request current HTTP request
                     * @param name the name of the parameter
                     * @return the Float value, or {#code null} if not present
                     * @throws ServletRequestBindingException a subclass of ServletException,
                     *  so it doesn't need to be caught
                     */
                    // @ts-ignore
                    public static getFloatParameter(request: ServletRequest, name: java.lang.String | string): number
                    /**
                     * Get a float parameter, with a fallback value. Never throws an exception.
                     * Can pass a distinguished value as default to enable checks of whether it was supplied.
                     * @param request current HTTP request
                     * @param name the name of the parameter
                     * @param defaultVal the default value to use as fallback
                     */
                    // @ts-ignore
                    public static getFloatParameter(request: ServletRequest, name: java.lang.String | string, defaultVal: number /*float*/): number /*float*/
                    /**
                     * Get an array of float parameters, return an empty array if not found.
                     * @param request current HTTP request
                     * @param name the name of the parameter with multiple possible values
                     */
                    // @ts-ignore
                    public static getFloatParameters(request: ServletRequest, name: java.lang.String | string): number /*float*/[]
                    /**
                     * Get a float parameter, throwing an exception if it isn't found or isn't a number.
                     * @param request current HTTP request
                     * @param name the name of the parameter
                     * @throws ServletRequestBindingException a subclass of ServletException,
                     *  so it doesn't need to be caught
                     */
                    // @ts-ignore
                    public static getRequiredFloatParameter(request: ServletRequest, name: java.lang.String | string): number /*float*/
                    /**
                     * Get an array of float parameters, throwing an exception if not found or one is not a number.
                     * @param request current HTTP request
                     * @param name the name of the parameter with multiple possible values
                     * @throws ServletRequestBindingException a subclass of ServletException,
                     *  so it doesn't need to be caught
                     */
                    // @ts-ignore
                    public static getRequiredFloatParameters(request: ServletRequest, name: java.lang.String | string): number /*float*/[]
                    /**
                     * Get a Double parameter, or {@code null} if not present.
                     * Throws an exception if it the parameter value isn't a number.
                     * @param request current HTTP request
                     * @param name the name of the parameter
                     * @return the Double value, or {#code null} if not present
                     * @throws ServletRequestBindingException a subclass of ServletException,
                     *  so it doesn't need to be caught
                     */
                    // @ts-ignore
                    public static getDoubleParameter(request: ServletRequest, name: java.lang.String | string): number
                    /**
                     * Get a double parameter, with a fallback value. Never throws an exception.
                     * Can pass a distinguished value as default to enable checks of whether it was supplied.
                     * @param request current HTTP request
                     * @param name the name of the parameter
                     * @param defaultVal the default value to use as fallback
                     */
                    // @ts-ignore
                    public static getDoubleParameter(request: ServletRequest, name: java.lang.String | string, defaultVal: number /*double*/): number /*double*/
                    /**
                     * Get an array of double parameters, return an empty array if not found.
                     * @param request current HTTP request
                     * @param name the name of the parameter with multiple possible values
                     */
                    // @ts-ignore
                    public static getDoubleParameters(request: ServletRequest, name: java.lang.String | string): number /*double*/[]
                    /**
                     * Get a double parameter, throwing an exception if it isn't found or isn't a number.
                     * @param request current HTTP request
                     * @param name the name of the parameter
                     * @throws ServletRequestBindingException a subclass of ServletException,
                     *  so it doesn't need to be caught
                     */
                    // @ts-ignore
                    public static getRequiredDoubleParameter(request: ServletRequest, name: java.lang.String | string): number /*double*/
                    /**
                     * Get an array of double parameters, throwing an exception if not found or one is not a number.
                     * @param request current HTTP request
                     * @param name the name of the parameter with multiple possible values
                     * @throws ServletRequestBindingException a subclass of ServletException,
                     *  so it doesn't need to be caught
                     */
                    // @ts-ignore
                    public static getRequiredDoubleParameters(request: ServletRequest, name: java.lang.String | string): number /*double*/[]
                    /**
                     * Get a Boolean parameter, or {@code null} if not present.
                     * Throws an exception if it the parameter value isn't a boolean.
                     * <p>Accepts "true", "on", "yes" (any case) and "1" as values for true;
                     * treats every other non-empty value as false (i.e. parses leniently).
                     * @param request current HTTP request
                     * @param name the name of the parameter
                     * @return the Boolean value, or {#code null} if not present
                     * @throws ServletRequestBindingException a subclass of ServletException,
                     *  so it doesn't need to be caught
                     */
                    // @ts-ignore
                    public static getBooleanParameter(request: ServletRequest, name: java.lang.String | string): java.lang.Boolean
                    /**
                     * Get a boolean parameter, with a fallback value. Never throws an exception.
                     * Can pass a distinguished value as default to enable checks of whether it was supplied.
                     * <p>Accepts "true", "on", "yes" (any case) and "1" as values for true;
                     * treats every other non-empty value as false (i.e. parses leniently).
                     * @param request current HTTP request
                     * @param name the name of the parameter
                     * @param defaultVal the default value to use as fallback
                     */
                    // @ts-ignore
                    public static getBooleanParameter(request: ServletRequest, name: java.lang.String | string, defaultVal: boolean): boolean
                    /**
                     * Get an array of boolean parameters, return an empty array if not found.
                     * <p>Accepts "true", "on", "yes" (any case) and "1" as values for true;
                     * treats every other non-empty value as false (i.e. parses leniently).
                     * @param request current HTTP request
                     * @param name the name of the parameter with multiple possible values
                     */
                    // @ts-ignore
                    public static getBooleanParameters(request: ServletRequest, name: java.lang.String | string): boolean[]
                    /**
                     * Get a boolean parameter, throwing an exception if it isn't found
                     * or isn't a boolean.
                     * <p>Accepts "true", "on", "yes" (any case) and "1" as values for true;
                     * treats every other non-empty value as false (i.e. parses leniently).
                     * @param request current HTTP request
                     * @param name the name of the parameter
                     * @throws ServletRequestBindingException a subclass of ServletException,
                     *  so it doesn't need to be caught
                     */
                    // @ts-ignore
                    public static getRequiredBooleanParameter(request: ServletRequest, name: java.lang.String | string): boolean
                    /**
                     * Get an array of boolean parameters, throwing an exception if not found
                     * or one isn't a boolean.
                     * <p>Accepts "true", "on", "yes" (any case) and "1" as values for true;
                     * treats every other non-empty value as false (i.e. parses leniently).
                     * @param request current HTTP request
                     * @param name the name of the parameter
                     * @throws ServletRequestBindingException a subclass of ServletException,
                     *  so it doesn't need to be caught
                     */
                    // @ts-ignore
                    public static getRequiredBooleanParameters(request: ServletRequest, name: java.lang.String | string): boolean[]
                    /**
                     * Get a String parameter, or {@code null} if not present.
                     * @param request current HTTP request
                     * @param name the name of the parameter
                     * @return the String value, or {#code null} if not present
                     * @throws ServletRequestBindingException a subclass of ServletException,
                     *  so it doesn't need to be caught
                     */
                    // @ts-ignore
                    public static getStringParameter(request: ServletRequest, name: java.lang.String | string): string
                    /**
                     * Get a String parameter, with a fallback value. Never throws an exception.
                     * Can pass a distinguished value to default to enable checks of whether it was supplied.
                     * @param request current HTTP request
                     * @param name the name of the parameter
                     * @param defaultVal the default value to use as fallback
                     */
                    // @ts-ignore
                    public static getStringParameter(request: ServletRequest, name: java.lang.String | string, defaultVal: java.lang.String | string): string
                    /**
                     * Get an array of String parameters, return an empty array if not found.
                     * @param request current HTTP request
                     * @param name the name of the parameter with multiple possible values
                     */
                    // @ts-ignore
                    public static getStringParameters(request: ServletRequest, name: java.lang.String | string): string[]
                    /**
                     * Get a String parameter, throwing an exception if it isn't found.
                     * @param request current HTTP request
                     * @param name the name of the parameter
                     * @throws ServletRequestBindingException a subclass of ServletException,
                     *  so it doesn't need to be caught
                     */
                    // @ts-ignore
                    public static getRequiredStringParameter(request: ServletRequest, name: java.lang.String | string): string
                    /**
                     * Get an array of String parameters, throwing an exception if not found.
                     * @param request current HTTP request
                     * @param name the name of the parameter
                     * @throws ServletRequestBindingException a subclass of ServletException,
                     *  so it doesn't need to be caught
                     */
                    // @ts-ignore
                    public static getRequiredStringParameters(request: ServletRequest, name: java.lang.String | string): string[]
                }
            }
        }
    }
}
