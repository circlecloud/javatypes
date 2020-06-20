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
                class ServletRequestUtils extends java.lang.Object {
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
                    getIntParameter(request: ServletRequest, name: string): java.lang.Integer
                    /**
                     * Get an int parameter, with a fallback value. Never throws an exception.
                     * Can pass a distinguished value as default to enable checks of whether it was supplied.
                     * @param request current HTTP request
                     * @param name the name of the parameter
                     * @param defaultVal the default value to use as fallback
                     */
                    // @ts-ignore
                    getIntParameter(request: ServletRequest, name: string, defaultVal: number /*int*/): int
                    /**
                     * Get an array of int parameters, return an empty array if not found.
                     * @param request current HTTP request
                     * @param name the name of the parameter with multiple possible values
                     */
                    // @ts-ignore
                    getIntParameters(request: ServletRequest, name: string): int[]
                    /**
                     * Get an int parameter, throwing an exception if it isn't found or isn't a number.
                     * @param request current HTTP request
                     * @param name the name of the parameter
                     * @throws ServletRequestBindingException a subclass of ServletException,
                     *  so it doesn't need to be caught
                     */
                    // @ts-ignore
                    getRequiredIntParameter(request: ServletRequest, name: string): int
                    /**
                     * Get an array of int parameters, throwing an exception if not found or one is not a number..
                     * @param request current HTTP request
                     * @param name the name of the parameter with multiple possible values
                     * @throws ServletRequestBindingException a subclass of ServletException,
                     *  so it doesn't need to be caught
                     */
                    // @ts-ignore
                    getRequiredIntParameters(request: ServletRequest, name: string): int[]
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
                    getLongParameter(request: ServletRequest, name: string): java.lang.Long
                    /**
                     * Get a long parameter, with a fallback value. Never throws an exception.
                     * Can pass a distinguished value as default to enable checks of whether it was supplied.
                     * @param request current HTTP request
                     * @param name the name of the parameter
                     * @param defaultVal the default value to use as fallback
                     */
                    // @ts-ignore
                    getLongParameter(request: ServletRequest, name: string, defaultVal: number /*long*/): long
                    /**
                     * Get an array of long parameters, return an empty array if not found.
                     * @param request current HTTP request
                     * @param name the name of the parameter with multiple possible values
                     */
                    // @ts-ignore
                    getLongParameters(request: ServletRequest, name: string): long[]
                    /**
                     * Get a long parameter, throwing an exception if it isn't found or isn't a number.
                     * @param request current HTTP request
                     * @param name the name of the parameter
                     * @throws ServletRequestBindingException a subclass of ServletException,
                     *  so it doesn't need to be caught
                     */
                    // @ts-ignore
                    getRequiredLongParameter(request: ServletRequest, name: string): long
                    /**
                     * Get an array of long parameters, throwing an exception if not found or one is not a number.
                     * @param request current HTTP request
                     * @param name the name of the parameter with multiple possible values
                     * @throws ServletRequestBindingException a subclass of ServletException,
                     *  so it doesn't need to be caught
                     */
                    // @ts-ignore
                    getRequiredLongParameters(request: ServletRequest, name: string): long[]
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
                    getFloatParameter(request: ServletRequest, name: string): java.lang.Float
                    /**
                     * Get a float parameter, with a fallback value. Never throws an exception.
                     * Can pass a distinguished value as default to enable checks of whether it was supplied.
                     * @param request current HTTP request
                     * @param name the name of the parameter
                     * @param defaultVal the default value to use as fallback
                     */
                    // @ts-ignore
                    getFloatParameter(request: ServletRequest, name: string, defaultVal: number /*float*/): float
                    /**
                     * Get an array of float parameters, return an empty array if not found.
                     * @param request current HTTP request
                     * @param name the name of the parameter with multiple possible values
                     */
                    // @ts-ignore
                    getFloatParameters(request: ServletRequest, name: string): float[]
                    /**
                     * Get a float parameter, throwing an exception if it isn't found or isn't a number.
                     * @param request current HTTP request
                     * @param name the name of the parameter
                     * @throws ServletRequestBindingException a subclass of ServletException,
                     *  so it doesn't need to be caught
                     */
                    // @ts-ignore
                    getRequiredFloatParameter(request: ServletRequest, name: string): float
                    /**
                     * Get an array of float parameters, throwing an exception if not found or one is not a number.
                     * @param request current HTTP request
                     * @param name the name of the parameter with multiple possible values
                     * @throws ServletRequestBindingException a subclass of ServletException,
                     *  so it doesn't need to be caught
                     */
                    // @ts-ignore
                    getRequiredFloatParameters(request: ServletRequest, name: string): float[]
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
                    getDoubleParameter(request: ServletRequest, name: string): java.lang.Double
                    /**
                     * Get a double parameter, with a fallback value. Never throws an exception.
                     * Can pass a distinguished value as default to enable checks of whether it was supplied.
                     * @param request current HTTP request
                     * @param name the name of the parameter
                     * @param defaultVal the default value to use as fallback
                     */
                    // @ts-ignore
                    getDoubleParameter(request: ServletRequest, name: string, defaultVal: number /*double*/): double
                    /**
                     * Get an array of double parameters, return an empty array if not found.
                     * @param request current HTTP request
                     * @param name the name of the parameter with multiple possible values
                     */
                    // @ts-ignore
                    getDoubleParameters(request: ServletRequest, name: string): double[]
                    /**
                     * Get a double parameter, throwing an exception if it isn't found or isn't a number.
                     * @param request current HTTP request
                     * @param name the name of the parameter
                     * @throws ServletRequestBindingException a subclass of ServletException,
                     *  so it doesn't need to be caught
                     */
                    // @ts-ignore
                    getRequiredDoubleParameter(request: ServletRequest, name: string): double
                    /**
                     * Get an array of double parameters, throwing an exception if not found or one is not a number.
                     * @param request current HTTP request
                     * @param name the name of the parameter with multiple possible values
                     * @throws ServletRequestBindingException a subclass of ServletException,
                     *  so it doesn't need to be caught
                     */
                    // @ts-ignore
                    getRequiredDoubleParameters(request: ServletRequest, name: string): double[]
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
                    getBooleanParameter(request: ServletRequest, name: string): java.lang.Boolean
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
                    getBooleanParameter(request: ServletRequest, name: string, defaultVal: boolean): boolean
                    /**
                     * Get an array of boolean parameters, return an empty array if not found.
                     * <p>Accepts "true", "on", "yes" (any case) and "1" as values for true;
                     * treats every other non-empty value as false (i.e. parses leniently).
                     * @param request current HTTP request
                     * @param name the name of the parameter with multiple possible values
                     */
                    // @ts-ignore
                    getBooleanParameters(request: ServletRequest, name: string): boolean[]
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
                    getRequiredBooleanParameter(request: ServletRequest, name: string): boolean
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
                    getRequiredBooleanParameters(request: ServletRequest, name: string): boolean[]
                    /**
                     * Get a String parameter, or {@code null} if not present.
                     * @param request current HTTP request
                     * @param name the name of the parameter
                     * @return the String value, or {#code null} if not present
                     * @throws ServletRequestBindingException a subclass of ServletException,
                     *  so it doesn't need to be caught
                     */
                    // @ts-ignore
                    getStringParameter(request: ServletRequest, name: string): java.lang.String
                    /**
                     * Get a String parameter, with a fallback value. Never throws an exception.
                     * Can pass a distinguished value to default to enable checks of whether it was supplied.
                     * @param request current HTTP request
                     * @param name the name of the parameter
                     * @param defaultVal the default value to use as fallback
                     */
                    // @ts-ignore
                    getStringParameter(request: ServletRequest, name: string, defaultVal: string): java.lang.String
                    /**
                     * Get an array of String parameters, return an empty array if not found.
                     * @param request current HTTP request
                     * @param name the name of the parameter with multiple possible values
                     */
                    // @ts-ignore
                    getStringParameters(request: ServletRequest, name: string): java.lang.String[]
                    /**
                     * Get a String parameter, throwing an exception if it isn't found.
                     * @param request current HTTP request
                     * @param name the name of the parameter
                     * @throws ServletRequestBindingException a subclass of ServletException,
                     *  so it doesn't need to be caught
                     */
                    // @ts-ignore
                    getRequiredStringParameter(request: ServletRequest, name: string): java.lang.String
                    /**
                     * Get an array of String parameters, throwing an exception if not found.
                     * @param request current HTTP request
                     * @param name the name of the parameter
                     * @throws ServletRequestBindingException a subclass of ServletException,
                     *  so it doesn't need to be caught
                     */
                    // @ts-ignore
                    getRequiredStringParameters(request: ServletRequest, name: string): java.lang.String[]
                }
            }
        }
    }
}
