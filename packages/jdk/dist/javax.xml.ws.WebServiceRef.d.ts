declare namespace javax {
    namespace xml {
        namespace ws {
            /**
             * The <code>WebServiceRef</code> annotation is used to
             * define a reference to a web service and
             * (optionally) an injection target for it.
             * It can be used to inject both service and proxy
             * instances. These injected references are not thread safe.
             * If the references are accessed by multiple threads,
             * usual synchronization techinques can be used to
             * support multiple threads.
             * <p>
             * Web service references are resources in the Java EE 5 sense.
             * The annotations (for example, {@link Addressing}) annotated with
             * meta-annotation {@link WebServiceFeatureAnnotation}
             * can be used in conjunction with <code>WebServiceRef</code>.
             * The created reference MUST be configured with annotation's web service
             * feature.
             * <p>
             * For example, in the code below, the injected
             * <code>StockQuoteProvider</code> proxy MUST
             * have WS-Addressing enabled as specifed by the
             * {@link Addressing}
             * annotation.
             * <pre><code>
             * public class MyClient {
             * &#64;Addressing
             * &#64;WebServiceRef(StockQuoteService.class)
             * private StockQuoteProvider stockQuoteProvider;
             * ...
             * }
             * </code></pre>
             * <p>
             * If a JAX-WS implementation encounters an unsupported or unrecognized
             * annotation annotated with the <code>WebServiceFeatureAnnotation</code>
             * that is specified with <code>WebServiceRef</code>, an ERROR MUST be given.
             * @see javax.annotation.Resource
             * @see WebServiceFeatureAnnotation
             * @since JAX-WS 2.0
             */
            // @ts-ignore
            abstract class WebServiceRef implements java.lang.annotation.Annotation {
            }
        }
    }
}
