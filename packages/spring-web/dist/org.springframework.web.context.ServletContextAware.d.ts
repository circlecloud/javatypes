declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                /**
                 * Interface to be implemented by any object that wishes to be notified of the
                 * {@link ServletContext} (typically determined by the {@link WebApplicationContext})
                 * that it runs in.
                 * @author Juergen Hoeller
                 * @author Chris Beams
                 * @since 12.03.2004
                 * @see ServletConfigAware
                 */
                // @ts-ignore
                interface ServletContextAware {
                    /**
                     * Set the {@link ServletContext} that this object runs in.
                     * <p>Invoked after population of normal bean properties but before an init
                     * callback like InitializingBean's {@code afterPropertiesSet} or a
                     * custom init-method. Invoked after ApplicationContextAware's
                     * {@code setApplicationContext}.
                     * @param servletContext the ServletContext object to be used by this object
                     * @see org.springframework.beans.factory.InitializingBean#afterPropertiesSet
                     * @see org.springframework.context.ApplicationContextAware#setApplicationContext
                     */
                    // @ts-ignore
                    setServletContext(servletContext: ServletContext): void
                }
            }
        }
    }
}
