declare namespace org {
    namespace apache {
        namespace catalina {
            /**
             * A <b>Wrapper</b> is a Container that represents an individual servlet
             * definition from the deployment descriptor of the web application.  It
             * provides a convenient mechanism to use Interceptors that see every single
             * request to the servlet represented by this definition.
             * <p>
             * Implementations of Wrapper are responsible for managing the servlet life
             * cycle for their underlying servlet class, including calling init() and
             * destroy() at appropriate times, as well as respecting the existence of
             * the SingleThreadModel declaration on the servlet class itself.
             * <p>
             * The parent Container attached to a Wrapper will generally be an
             * implementation of Context, representing the servlet context (and
             * therefore the web application) within which this servlet executes.
             * <p>
             * Child Containers are not allowed on Wrapper implementations, so the
             * <code>addChild()</code> method should throw an
             * <code>IllegalArgumentException</code>.
             * @author Craig R. McClanahan
             */
            // @ts-ignore
            interface Wrapper extends org.apache.catalina.Container {
                /**
                 * Container event for adding a wrapper.
                 */
                // @ts-ignore
                readonly ADD_MAPPING_EVENT: java.lang.String | string
                /**
                 * Container event for removing a wrapper.
                 */
                // @ts-ignore
                readonly REMOVE_MAPPING_EVENT: java.lang.String | string
                /**
                 * @return the available date/time for this servlet, in milliseconds since
                 *  the epoch.  If this date/time is in the future, any request for this
                 *  servlet will return an SC_SERVICE_UNAVAILABLE error.  If it is zero,
                 *  the servlet is currently available.  A value equal to Long.MAX_VALUE
                 *  is considered to mean that unavailability is permanent.
                 */
                // @ts-ignore
                getAvailable(): number /*long*/
                /**
                 * Set the available date/time for this servlet, in milliseconds since the
                 * epoch.  If this date/time is in the future, any request for this servlet
                 * will return an SC_SERVICE_UNAVAILABLE error.  A value equal to
                 * Long.MAX_VALUE is considered to mean that unavailability is permanent.
                 * @param available The new available date/time
                 */
                // @ts-ignore
                setAvailable(available: number /*long*/): void
                /**
                 * @return the load-on-startup order value (negative value means
                 *  load on first call).
                 */
                // @ts-ignore
                getLoadOnStartup(): number /*int*/
                /**
                 * Set the load-on-startup order value (negative value means
                 * load on first call).
                 * @param value New load-on-startup value
                 */
                // @ts-ignore
                setLoadOnStartup(value: number /*int*/): void
                /**
                 * @return the run-as identity for this servlet.
                 */
                // @ts-ignore
                getRunAs(): string
                /**
                 * Set the run-as identity for this servlet.
                 * @param runAs New run-as identity value
                 */
                // @ts-ignore
                setRunAs(runAs: java.lang.String | string): void
                /**
                 * @return the fully qualified servlet class name for this servlet.
                 */
                // @ts-ignore
                getServletClass(): string
                /**
                 * Set the fully qualified servlet class name for this servlet.
                 * @param servletClass Servlet class name
                 */
                // @ts-ignore
                setServletClass(servletClass: java.lang.String | string): void
                /**
                 * Gets the names of the methods supported by the underlying servlet.
                 * This is the same set of methods included in the Allow response header
                 * in response to an OPTIONS request method processed by the underlying
                 * servlet.
                 * @return Array of names of the methods supported by the underlying
                 *          servlet
                 * @throws ServletException If the target servlet cannot be loaded
                 */
                // @ts-ignore
                getServletMethods(): string[]
                /**
                 * @return <code>true</code> if this Servlet is currently unavailable.
                 */
                // @ts-ignore
                isUnavailable(): boolean
                /**
                 * @return the associated Servlet instance.
                 */
                // @ts-ignore
                getServlet(): javax.servlet.Servlet
                /**
                 * Set the associated Servlet instance
                 * @param servlet The associated Servlet
                 */
                // @ts-ignore
                setServlet(servlet: javax.servlet.Servlet): void
                /**
                 * Add a new servlet initialization parameter for this servlet.
                 * @param name Name of this initialization parameter to add
                 * @param value Value of this initialization parameter to add
                 */
                // @ts-ignore
                addInitParameter(name: java.lang.String | string, value: java.lang.String | string): void
                /**
                 * Add a mapping associated with the Wrapper.
                 * @param mapping The new wrapper mapping
                 */
                // @ts-ignore
                addMapping(mapping: java.lang.String | string): void
                /**
                 * Add a new security role reference record to the set of records for
                 * this servlet.
                 * @param name Role name used within this servlet
                 * @param link Role name used within the web application
                 */
                // @ts-ignore
                addSecurityReference(name: java.lang.String | string, link: java.lang.String | string): void
                /**
                 * Allocate an initialized instance of this Servlet that is ready to have
                 * its <code>service()</code> method called.  If the Servlet class does
                 * not implement <code>SingleThreadModel</code>, the (only) initialized
                 * instance may be returned immediately.  If the Servlet class implements
                 * <code>SingleThreadModel</code>, the Wrapper implementation must ensure
                 * that this instance is not allocated again until it is deallocated by a
                 * call to <code>deallocate()</code>.
                 * @exception ServletException if the Servlet init() method threw
                 *   an exception
                 * @exception ServletException if a loading error occurs
                 * @return a new Servlet instance
                 */
                // @ts-ignore
                allocate(): javax.servlet.Servlet
                /**
                 * Return this previously allocated servlet to the pool of available
                 * instances.  If this servlet class does not implement SingleThreadModel,
                 * no action is actually required.
                 * @param servlet The servlet to be returned
                 * @exception ServletException if a deallocation error occurs
                 */
                // @ts-ignore
                deallocate(servlet: javax.servlet.Servlet): void
                /**
                 * @return the value for the specified initialization parameter name,
                 *  if any; otherwise return <code>null</code>.
                 * @param name Name of the requested initialization parameter
                 */
                // @ts-ignore
                findInitParameter(name: java.lang.String | string): string
                /**
                 * @return the names of all defined initialization parameters for this
                 *  servlet.
                 */
                // @ts-ignore
                findInitParameters(): string[]
                /**
                 * @return the mappings associated with this wrapper.
                 */
                // @ts-ignore
                findMappings(): string[]
                /**
                 * @return the security role link for the specified security role
                 *  reference name, if any; otherwise return <code>null</code>.
                 * @param name Security role reference used within this servlet
                 */
                // @ts-ignore
                findSecurityReference(name: java.lang.String | string): string
                /**
                 * @return the set of security role reference names associated with
                 *  this servlet, if any; otherwise return a zero-length array.
                 */
                // @ts-ignore
                findSecurityReferences(): string[]
                /**
                 * Increment the error count value used when monitoring.
                 */
                // @ts-ignore
                incrementErrorCount(): void
                /**
                 * Load and initialize an instance of this Servlet, if there is not already
                 * at least one initialized instance.  This can be used, for example, to
                 * load Servlets that are marked in the deployment descriptor to be loaded
                 * at server startup time.
                 * @exception ServletException if the Servlet init() method threw
                 *   an exception or if some other loading problem occurs
                 */
                // @ts-ignore
                load(): void
                /**
                 * Remove the specified initialization parameter from this Servlet.
                 * @param name Name of the initialization parameter to remove
                 */
                // @ts-ignore
                removeInitParameter(name: java.lang.String | string): void
                /**
                 * Remove a mapping associated with the wrapper.
                 * @param mapping The pattern to remove
                 */
                // @ts-ignore
                removeMapping(mapping: java.lang.String | string): void
                /**
                 * Remove any security role reference for the specified role name.
                 * @param name Security role used within this servlet to be removed
                 */
                // @ts-ignore
                removeSecurityReference(name: java.lang.String | string): void
                /**
                 * Process an UnavailableException, marking this Servlet as unavailable
                 * for the specified amount of time.
                 * @param unavailable The exception that occurred, or <code>null</code>
                 *   to mark this Servlet as permanently unavailable
                 */
                // @ts-ignore
                unavailable(unavailable: javax.servlet.UnavailableException): void
                /**
                 * Unload all initialized instances of this servlet, after calling the
                 * <code>destroy()</code> method for each instance.  This can be used,
                 * for example, prior to shutting down the entire servlet engine, or
                 * prior to reloading all of the classes from the Loader associated with
                 * our Loader's repository.
                 * @exception ServletException if an unload error occurs
                 */
                // @ts-ignore
                unload(): void
                /**
                 * @return the multi-part configuration for the associated Servlet. If no
                 *  multi-part configuration has been defined, then <code>null</code> will be
                 *  returned.
                 */
                // @ts-ignore
                getMultipartConfigElement(): javax.servlet.MultipartConfigElement
                /**
                 * Set the multi-part configuration for the associated Servlet. To clear the
                 * multi-part configuration specify <code>null</code> as the new value.
                 * @param multipartConfig The configuration associated with the Servlet
                 */
                // @ts-ignore
                setMultipartConfigElement(multipartConfig: javax.servlet.MultipartConfigElement): void
                /**
                 * Does the associated Servlet support async processing? Defaults to
                 * <code>false</code>.
                 * @return <code>true</code> if the Servlet supports async
                 */
                // @ts-ignore
                isAsyncSupported(): boolean
                /**
                 * Set the async support for the associated Servlet.
                 * @param asyncSupport the new value
                 */
                // @ts-ignore
                setAsyncSupported(asyncSupport: boolean): void
                /**
                 * Is the associated Servlet enabled? Defaults to <code>true</code>.
                 * @return <code>true</code> if the Servlet is enabled
                 */
                // @ts-ignore
                isEnabled(): boolean
                /**
                 * Sets the enabled attribute for the associated servlet.
                 * @param enabled the new value
                 */
                // @ts-ignore
                setEnabled(enabled: boolean): void
                /**
                 * Is the Servlet overridable by a ServletContainerInitializer?
                 * @return <code>true</code> if the Servlet can be overridden in a ServletContainerInitializer
                 */
                // @ts-ignore
                isOverridable(): boolean
                /**
                 * Sets the overridable attribute for this Servlet.
                 * @param overridable the new value
                 */
                // @ts-ignore
                setOverridable(overridable: boolean): void
            }
        }
    }
}
