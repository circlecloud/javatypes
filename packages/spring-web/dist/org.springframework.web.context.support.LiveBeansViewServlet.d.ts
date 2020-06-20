declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace support {
                    /**
                     * Servlet variant of {@link LiveBeansView}'s MBean exposure.
                     * <p>Generates a JSON snapshot for current beans and their dependencies in
                     * all ApplicationContexts that live within the current web application.
                     * @author Juergen Hoeller
                     * @since 3.2
                     * @see org.springframework.context.support.LiveBeansView#getSnapshotAsJson()
                     */
                    // @ts-ignore
                    class LiveBeansViewServlet extends HttpServlet {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        init(): void
                        // @ts-ignore
                        buildLiveBeansView(): LiveBeansView
                        // @ts-ignore
                        doGet(request: HttpServletRequest, response: HttpServletResponse): void
                    }
                }
            }
        }
    }
}
