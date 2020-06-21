declare namespace org {
    namespace springframework {
        namespace web {
            namespace bind {
                namespace support {
                    /**
                     * Special {@link org.springframework.validation.DataBinder} to perform data binding
                     * from web request parameters to JavaBeans, including support for multipart files.
                     * <p>See the DataBinder/WebDataBinder superclasses for customization options,
                     * which include specifying allowed/required fields, and registering custom
                     * property editors.
                     * <p>Can also used for manual data binding in custom web controllers or interceptors
                     * that build on Spring's {@link org.springframework.web.context.request.WebRequest}
                     * abstraction: e.g. in a {@link org.springframework.web.context.request.WebRequestInterceptor}
                     * implementation. Simply instantiate a WebRequestDataBinder for each binding
                     * process, and invoke {@code bind} with the current WebRequest as argument:
                     * <pre class="code">
                     * MyBean myBean = new MyBean();
                     * // apply binder to custom target object
                     * WebRequestDataBinder binder = new WebRequestDataBinder(myBean);
                     * // register custom editors, if desired
                     * binder.registerCustomEditor(...);
                     * // trigger actual binding of request parameters
                     * binder.bind(request);
                     * // optionally evaluate binding errors
                     * Errors errors = binder.getErrors();
                     * ...</pre>
                     * @author Juergen Hoeller
                     * @author Brian Clozel
                     * @since 2.5.2
                     * @see #bind(org.springframework.web.context.request.WebRequest)
                     * @see #registerCustomEditor
                     * @see #setAllowedFields
                     * @see #setRequiredFields
                     * @see #setFieldMarkerPrefix
                     */
                    // @ts-ignore
                    class WebRequestDataBinder extends org.springframework.web.bind.WebDataBinder {
                        /**
                         * Create a new WebRequestDataBinder instance, with default object name.
                         * @param target the target object to bind onto (or {#code null}
                         *  if the binder is just used to convert a plain parameter value)
                         * @see #DEFAULT_OBJECT_NAME
                         */
                        // @ts-ignore
                        constructor(target: java.lang.Object | any)
                        /**
                         * Create a new WebRequestDataBinder instance.
                         * @param target the target object to bind onto (or {#code null}
                         *  if the binder is just used to convert a plain parameter value)
                         * @param objectName the name of the target object
                         */
                        // @ts-ignore
                        constructor(target: java.lang.Object | any, objectName: java.lang.String | string)
                        /**
                         * Bind the parameters of the given request to this binder's target,
                         * also binding multipart files in case of a multipart request.
                         * <p>This call can create field errors, representing basic binding
                         * errors like a required field (code "required"), or type mismatch
                         * between value and bean property (code "typeMismatch").
                         * <p>Multipart files are bound via their parameter name, just like normal
                         * HTTP parameters: i.e. "uploadedFile" to an "uploadedFile" bean property,
                         * invoking a "setUploadedFile" setter method.
                         * <p>The type of the target property for a multipart file can be Part, MultipartFile,
                         * byte[], or String. The latter two receive the contents of the uploaded file;
                         * all metadata like original file name, content type, etc are lost in those cases.
                         * @param request the request with parameters to bind (can be multipart)
                         * @see org.springframework.web.multipart.MultipartRequest
                         * @see org.springframework.web.multipart.MultipartFile
                         * @see javax.servlet.http.Part
                         * @see #bind(org.springframework.beans.PropertyValues)
                         */
                        // @ts-ignore
                        public bind(request: org.springframework.web.context.request.WebRequest): void
                        /**
                         * Treats errors as fatal.
                         * <p>Use this method only if it's an error if the input isn't valid.
                         * This might be appropriate if all input is from dropdowns, for example.
                         * @throws BindException if binding errors have been encountered
                         */
                        // @ts-ignore
                        public closeNoCatch(): void
                    }
                }
            }
        }
    }
}
