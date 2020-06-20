declare namespace javax {
    namespace xml {
        namespace ws {
            /**
             * The <code>WebServiceRefs</code> annotation allows
             * multiple web service references to be declared at the
             * class level.
             * <p>
             * It can be used to inject both service and proxy
             * instances. These injected references are not thread safe.
             * If the references are accessed by multiple threads,
             * usual synchronization techniques can be used to
             * support multiple threads.
             * <p>
             * There is no way to associate web service features with
             * the injected instances. If an instance needs to be
             * configured with web service features, use @WebServiceRef
             * to inject the resource along with its features.
             * <p>
             * <b>Example</b>: The <code>StockQuoteProvider</code>
             * proxy instance, and the <code>StockQuoteService</code> service
             * instance are injected using @WebServiceRefs.
             * <pre><code>
             * &#64;WebServiceRefs({&#64;WebServiceRef(name="service/stockquoteservice", value=StockQuoteService.class),
             * &#64;WebServiceRef(name="service/stockquoteprovider", type=StockQuoteProvider.class, value=StockQuoteService.class})
             * public class MyClient {
             * void init() {
             * Context ic = new InitialContext();
             * StockQuoteService service = (StockQuoteService) ic.lookup("java:comp/env/service/stockquoteservice");
             * StockQuoteProvider port = (StockQuoteProvider) ic.lookup("java:comp/env/service/stockquoteprovider");
             * ...
             * }
             * ...
             * }
             * </code></pre>
             * @see WebServiceRef
             * @since 2.0
             */
            // @ts-ignore
            class WebServiceRefs implements java.lang.annotation.Annotation {
            }
        }
    }
}
