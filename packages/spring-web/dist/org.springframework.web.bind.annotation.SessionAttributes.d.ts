declare namespace org {
    namespace springframework {
        namespace web {
            namespace bind {
                namespace annotation {
                    /**
                     * Annotation that indicates the session attributes that a specific handler uses.
                     * <p>This will typically list the names of model attributes which should be
                     * transparently stored in the session or some conversational storage,
                     * serving as form-backing beans. <b>Declared at the type level</b>, applying
                     * to the model attributes that the annotated handler class operates on.
                     * <p><b>NOTE:</b> Session attributes as indicated using this annotation
                     * correspond to a specific handler's model attributes, getting transparently
                     * stored in a conversational session. Those attributes will be removed once
                     * the handler indicates completion of its conversational session. Therefore,
                     * use this facility for such conversational attributes which are supposed
                     * to be stored in the session <i>temporarily</i> during the course of a
                     * specific handler's conversation.
                     * <p>For permanent session attributes, e.g. a user authentication object,
                     * use the traditional {@code session.setAttribute} method instead.
                     * Alternatively, consider using the attribute management capabilities of the
                     * generic {@link org.springframework.web.context.request.WebRequest} interface.
                     * <p><b>NOTE:</b> When using controller interfaces (e.g. for AOP proxying),
                     * make sure to consistently put <i>all</i> your mapping annotations &mdash;
                     * such as {@code @RequestMapping} and {@code @SessionAttributes} &mdash; on
                     * the controller <i>interface</i> rather than on the implementation class.
                     * @author Juergen Hoeller
                     * @author Sam Brannen
                     * @since 2.5
                     */
                    // @ts-ignore
                    abstract class SessionAttributes implements java.lang.annotation.Annotation {
                    }
                }
            }
        }
    }
}
