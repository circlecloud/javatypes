declare namespace org {
    namespace springframework {
        namespace web {
            namespace accept {
                /**
                 * Factory to create a {@code ContentNegotiationManager} and configure it with
                 * {@link ContentNegotiationStrategy} instances.
                 * <p>This factory offers properties that in turn result in configuring the
                 * underlying strategies. The table below shows the property names, their
                 * default settings, as well as the strategies that they help to configure:
                 * <table>
                 * <tr>
                 * <th>Property Setter</th>
                 * <th>Default Value</th>
                 * <th>Underlying Strategy</th>
                 * <th>Enabled Or Not</th>
                 * </tr>
                 * <tr>
                 * <td>{@link #setFavorPathExtension favorPathExtension}</td>
                 * <td>true</td>
                 * <td>{@link PathExtensionContentNegotiationStrategy}</td>
                 * <td>Enabled</td>
                 * </tr>
                 * <tr>
                 * <td>{@link #setFavorParameter favorParameter}</td>
                 * <td>false</td>
                 * <td>{@link ParameterContentNegotiationStrategy}</td>
                 * <td>Off</td>
                 * </tr>
                 * <tr>
                 * <td>{@link #setIgnoreAcceptHeader ignoreAcceptHeader}</td>
                 * <td>false</td>
                 * <td>{@link HeaderContentNegotiationStrategy}</td>
                 * <td>Enabled</td>
                 * </tr>
                 * <tr>
                 * <td>{@link #setDefaultContentType defaultContentType}</td>
                 * <td>null</td>
                 * <td>{@link FixedContentNegotiationStrategy}</td>
                 * <td>Off</td>
                 * </tr>
                 * <tr>
                 * <td>{@link #setDefaultContentTypeStrategy defaultContentTypeStrategy}</td>
                 * <td>null</td>
                 * <td>{@link ContentNegotiationStrategy}</td>
                 * <td>Off</td>
                 * </tr>
                 * </table>
                 * <p>Alternatively you can avoid use of the above convenience builder
                 * methods and set the exact strategies to use via
                 * {@link #setStrategies(List)}.
                 * <p><strong>Deprecation Note:</strong> As of 5.2.4,
                 * {@link #setFavorPathExtension(boolean) favorPathExtension} and
                 * {@link #setIgnoreUnknownPathExtensions(boolean) ignoreUnknownPathExtensions}
                 * are deprecated in order to discourage using path extensions for content
                 * negotiation and for request mapping with similar deprecations on
                 * {@link org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping
                 * RequestMappingHandlerMapping}. For further context, please read issue
                 * <a href="https://github.com/spring-projects/spring-framework/issues/24179">#24719</a>.
                 * @author Rossen Stoyanchev
                 * @author Brian Clozel
                 * @since 3.2
                 */
                // @ts-ignore
                class ContentNegotiationManagerFactoryBean extends java.lang.Object implements org.springframework.web.context.ServletContextAware {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set the exact list of strategies to use.
                     * <p><strong>Note:</strong> use of this method is mutually exclusive with
                     * use of all other setters in this class which customize a default, fixed
                     * set of strategies. See class level doc for more details.
                     * @param strategies the strategies to use
                     * @since 5.0
                     */
                    // @ts-ignore
                    public setStrategies(strategies: java.util.List<org.springframework.web.accept.ContentNegotiationStrategy> | Array<org.springframework.web.accept.ContentNegotiationStrategy>): void
                    /**
                     * Whether the path extension in the URL path should be used to determine
                     * the requested media type.
                     * <p>By default this is set to {@code true} in which case a request
                     * for {@code /hotels.pdf} will be interpreted as a request for
                     * {@code "application/pdf"} regardless of the 'Accept' header.
                     * @deprecated as of 5.2.4. See class-level note on the deprecation of path
                     *  extension config options. As there is no replacement for this method,
                     *  for the time being it's necessary to continue using it in order to set it
                     *  to {#code false}. In 5.3 when {@code false} becomes the default, use of
                     *  this property will no longer be necessary.
                     */
                    // @ts-ignore
                    public setFavorPathExtension(favorPathExtension: boolean): void
                    /**
                     * Add a mapping from a key to a MediaType where the key are normalized to
                     * lowercase and may have been extracted from a path extension, a filename
                     * extension, or passed as a query parameter.
                     * <p>The {@link #setFavorParameter(boolean) parameter strategy} requires
                     * such mappings in order to work while the {@link #setFavorPathExtension(boolean)
                     * path extension strategy} can fall back on lookups via
                     * {@link ServletContext#getMimeType} and
                     * {@link org.springframework.http.MediaTypeFactory}.
                     * <p><strong>Note:</strong> Mappings registered here may be accessed via
                     * {@link ContentNegotiationManager#getMediaTypeMappings()} and may be used
                     * not only in the parameter and path extension strategies. For example,
                     * with the Spring MVC config, e.g. {@code @EnableWebMvc} or
                     * {@code <mvc:annotation-driven>}, the media type mappings are also plugged
                     * in to:
                     * <ul>
                     * <li>Determine the media type of static resources served with
                     * {@code ResourceHttpRequestHandler}.
                     * <li>Determine the media type of views rendered with
                     * {@code ContentNegotiatingViewResolver}.
                     * <li>Whitelist extensions for RFD attack detection (check the Spring
                     * Framework reference docs for details).
                     * </ul>
                     * @param mediaTypes media type mappings
                     * @see #addMediaType(String, MediaType)
                     * @see #addMediaTypes(Map)
                     */
                    // @ts-ignore
                    public setMediaTypes(mediaTypes: java.util.Properties): void
                    /**
                     * An alternative to {@link #setMediaTypes} for programmatic registrations.
                     */
                    // @ts-ignore
                    public addMediaType(key: java.lang.String | string, mediaType: org.springframework.http.MediaType): void
                    /**
                     * An alternative to {@link #setMediaTypes} for programmatic registrations.
                     */
                    // @ts-ignore
                    public addMediaTypes(mediaTypes: java.util.Map<java.lang.String | string, org.springframework.http.MediaType>): void
                    /**
                     * Whether to ignore requests with path extension that cannot be resolved
                     * to any media type. Setting this to {@code false} will result in an
                     * {@code HttpMediaTypeNotAcceptableException} if there is no match.
                     * <p>By default this is set to {@code true}.
                     * @deprecated as of 5.2.4. See class-level note on the deprecation of path
                     *  extension config options.
                     */
                    // @ts-ignore
                    public setIgnoreUnknownPathExtensions(ignore: boolean): void
                    /**
                     * Indicate whether to use the Java Activation Framework as a fallback option
                     * to map from file extensions to media types.
                     * @deprecated as of 5.0, in favor of {#link #setUseRegisteredExtensionsOnly(boolean)}, which
                     *  has reverse behavior.
                     */
                    // @ts-ignore
                    public setUseJaf(useJaf: boolean): void
                    /**
                     * When {@link #setFavorPathExtension favorPathExtension} or
                     * {@link #setFavorParameter(boolean)} is set, this property determines
                     * whether to use only registered {@code MediaType} mappings or to allow
                     * dynamic resolution, e.g. via {@link MediaTypeFactory}.
                     * <p>By default this is not set in which case dynamic resolution is on.
                     */
                    // @ts-ignore
                    public setUseRegisteredExtensionsOnly(useRegisteredExtensionsOnly: boolean): void
                    /**
                     * Whether a request parameter ("format" by default) should be used to
                     * determine the requested media type. For this option to work you must
                     * register {@link #setMediaTypes media type mappings}.
                     * <p>By default this is set to {@code false}.
                     * @see #setParameterName
                     */
                    // @ts-ignore
                    public setFavorParameter(favorParameter: boolean): void
                    /**
                     * Set the query parameter name to use when {@link #setFavorParameter} is on.
                     * <p>The default parameter name is {@code "format"}.
                     */
                    // @ts-ignore
                    public setParameterName(parameterName: java.lang.String | string): void
                    /**
                     * Whether to disable checking the 'Accept' request header.
                     * <p>By default this value is set to {@code false}.
                     */
                    // @ts-ignore
                    public setIgnoreAcceptHeader(ignoreAcceptHeader: boolean): void
                    /**
                     * Set the default content type to use when no content type is requested.
                     * <p>By default this is not set.
                     * @see #setDefaultContentTypeStrategy
                     */
                    // @ts-ignore
                    public setDefaultContentType(contentType: org.springframework.http.MediaType): void
                    /**
                     * Set the default content types to use when no content type is requested.
                     * <p>By default this is not set.
                     * @since 5.0
                     * @see #setDefaultContentTypeStrategy
                     */
                    // @ts-ignore
                    public setDefaultContentTypes(contentTypes: java.util.List<org.springframework.http.MediaType> | Array<org.springframework.http.MediaType>): void
                    /**
                     * Set a custom {@link ContentNegotiationStrategy} to use to determine
                     * the content type to use when no content type is requested.
                     * <p>By default this is not set.
                     * @since 4.1.2
                     * @see #setDefaultContentType
                     */
                    // @ts-ignore
                    public setDefaultContentTypeStrategy(strategy: org.springframework.web.accept.ContentNegotiationStrategy): void
                    /**
                     * Invoked by Spring to inject the ServletContext.
                     */
                    // @ts-ignore
                    public setServletContext(servletContext: ServletContext): void
                    // @ts-ignore
                    public afterPropertiesSet(): void
                    /**
                     * Create and initialize a {@link ContentNegotiationManager} instance.
                     * @since 5.0
                     */
                    // @ts-ignore
                    public build(): org.springframework.web.accept.ContentNegotiationManager
                    // @ts-ignore
                    public getObject(): org.springframework.web.accept.ContentNegotiationManager
                    // @ts-ignore
                    public getObjectType(): java.lang.Class<any>
                    // @ts-ignore
                    public isSingleton(): boolean
                }
            }
        }
    }
}
